const nav = document.getElementById("nav");
const menuToggle = document.querySelector(".menu-toggle");
const progress = document.getElementById("progress");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.textContent = open ? "Close" : "Menu";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "Menu";
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable ? (window.scrollY / scrollable) * 100 : 0}%`;
}, {passive:true});

document.getElementById("year").textContent = new Date().getFullYear();
