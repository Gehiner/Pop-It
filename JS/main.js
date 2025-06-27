//Menú Hamburguesa 
const openMenu = document.querySelector(".menu__open");
const closeMenu = document.querySelector(".menu__close");
const nav = document.querySelector(".nav");

openMenu.addEventListener("click", () => {
  nav.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("active");
});

//-----------------Modo oscuro
const themeToggle = document.getElementById("toggle-theme");

// Tema claro (sin cambios)
const lightTheme = {
  '--color-white': '#FFFFFF',
  '--color-light': '#CEF2EF',
  '--color-black': '#000000',
  '--color-accent': '#FFBF69',
  '--color-dark': '#333333'
};

// Tema oscuro MÁS DARK 
const darkTheme = {
  '--color-white': '#0d0d0d',      // Fondo
  '--color-light': '#1a1a1a',      // Secciones
  '--color-black': '#ffffff',      // Texto claro
  '--color-accent': '#ff8800',     // Botones
  '--color-dark': '#101010'        // Footer oscuro
};

// Función para aplicar tema y fondo
function applyTheme(theme, isDarkMode) {
  const root = document.documentElement;
  for (let key in theme) {
    root.style.setProperty(key, theme[key]);
  }

  const header = document.querySelector('header');
  header.style.backgroundImage = isDarkMode
    ? "url('Assets/background-dark.png')"
    : "url('Assets/background.png')";
}

// Al cargar
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  const isDark = savedTheme === "dark";

  applyTheme(isDark ? darkTheme : lightTheme, isDark);
  themeToggle.src = isDark ? "Assets/sol.png" : "Assets/luna.png";
});

// Al hacer clic en el ícono
themeToggle.addEventListener("click", () => {
  const isCurrentlyDark = themeToggle.src.includes("luna");

  if (isCurrentlyDark) {
    applyTheme(darkTheme, true);
    themeToggle.src = "Assets/sol.png";
    localStorage.setItem("theme", "dark");
  } else {
    applyTheme(lightTheme, false);
    themeToggle.src = "Assets/luna.png";
    localStorage.setItem("theme", "light");
  }
});
