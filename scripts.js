// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // === Hamburger Toggle Logic ===
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navContent = document.getElementById("navContent");

  if (hamburgerBtn && navContent) {
    hamburgerBtn.addEventListener("click", () => {
      navContent.classList.toggle("show");
    });
  }

  // === Scroll to Top Button Logic ===
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // === Dark Mode Toggle Logic ===
  const darkToggle = document.getElementById("darkModeToggle");
  if (darkToggle) {
    darkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // === Rotating Skill Box Logic ===
  const skills = [
    { text: "HTML", icon: "🔤" },
    { text: "CSS", icon: "🎨" },
    { text: "JavaScript", icon: "🧠" },
    { text: "Git", icon: "🔧" },
    { text: "Linux", icon: "🐧" },
    { text: "Networking", icon: "🌐" }
  ];

  let currentIndex = 0;
  const skillText = document.getElementById("skill-text");
  const skillIcon = document.getElementById("skill-icon");

  function rotateSkill() {
    currentIndex = (currentIndex + 1) % skills.length;
    skillText.textContent = skills[currentIndex].text;
    skillIcon.textContent = skills[currentIndex].icon;
  }

  // Start rotating every 2 seconds
  if (skillText && skillIcon) {
    setInterval(rotateSkill, 2000);
  }

  // === Color Palette Generator (TheColorAPI with safe styling) ===
  const colorPaletteBtn = document.getElementById("colorPaletteBtn");
  const savedPalette = JSON.parse(localStorage.getItem("colorPalette"));
  if (savedPalette) applyPalette(savedPalette);

  if (colorPaletteBtn) {
    colorPaletteBtn.addEventListener("click", () => {
      const seed = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
      fetch(`https://www.thecolorapi.com/scheme?hex=${seed}&mode=analogic&count=5`)
        .then(res => res.json())
        .then(data => {
          const palette = data.colors.map(c => c.hex.value);
          console.log("🎨 New palette:", palette);
          applyPalette(palette);
          localStorage.setItem("colorPalette", JSON.stringify(palette));
        })
        .catch(err => console.error("Palette fetch failed:", err));
    });
  }

  function applyPalette(palette) {
    if (!palette || palette.length < 5) return;

    // Apply safe dynamic values only
    document.documentElement.style.setProperty('--primary', palette[0]);
    document.documentElement.style.setProperty('--accent', palette[1]);
    // Lock background and text for readability
    document.documentElement.style.setProperty('--secondary', "#f9f9f9");
    document.documentElement.style.setProperty('--text-color', "#333");

    // === Render palette preview ===
    const preview = document.getElementById("palettePreview");
    if (preview) {
      preview.innerHTML = "";
      palette.forEach(color => {
        const swatch = document.createElement("div");
        swatch.className = "color-swatch";
        swatch.style.backgroundColor = color;
        preview.appendChild(swatch);
      });
    }
  }
});
