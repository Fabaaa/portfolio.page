// JavaScript to handle dark mode toggle

document.addEventListener("DOMContentLoaded", function () {
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
