// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Floating hearts generator
(function spawnHearts() {
  const layer = document.querySelector(".hearts");
  const emojis = ["💖", "💗", "🌸", "💕", "🤍", "✨"];
  const COUNT = 18;
  for (let i = 0; i < COUNT; i++) {
    const h = document.createElement("span");
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = 0.9 + Math.random() * 1.6 + "rem";
    h.style.animationDuration = 6 + Math.random() * 8 + "s";
    h.style.animationDelay = Math.random() * 8 + "s";
    layer.appendChild(h);
  }
})();

// Reveal sections on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
