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
});
