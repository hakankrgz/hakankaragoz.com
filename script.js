const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
const role = document.querySelector("[data-role]");
const year = document.querySelector("[data-year]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

year.textContent = new Date().getFullYear();

const syncHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 18);
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  });
});

if (reduceMotion) {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}
const roles = ["Siber Güvenlik", "BT Altyapısı", "Adli Bilişim", "Yazılım ve Test"];

if (!reduceMotion) {
  let roleIndex = 0;
  let characterIndex = roles[0].length;
  let deleting = true;

  const typeRole = () => {
    const current = roles[roleIndex];

    if (deleting) {
      characterIndex -= 1;
      role.textContent = current.slice(0, characterIndex);
      if (characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    } else {
      characterIndex += 1;
      role.textContent = roles[roleIndex].slice(0, characterIndex);
      if (characterIndex === roles[roleIndex].length) {
        deleting = true;
        window.setTimeout(typeRole, 1350);
        return;
      }
    }

    window.setTimeout(typeRole, deleting ? 42 : 74);
  };

  window.setTimeout(typeRole, 1100);
}
