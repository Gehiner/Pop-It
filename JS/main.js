const openMenu = document.querySelector(".menu__open");
const closeMenu = document.querySelector(".menu__close");
const nav = document.querySelector(".nav");

openMenu.addEventListener("click", () => {
  nav.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("active");
});