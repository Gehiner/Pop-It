//----------------Menú Hamburguesa 
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

const lightTheme = {
  '--color-white': '#FFFFFF',
  '--color-light': '#CEF2EF',
  '--color-black': '#000000',
  '--color-accent': '#FFBF69',
  '--color-dark': '#333333'
};


const darkTheme = {
  '--color-white': '#0d0d0d',      
  '--color-light': '#1a1a1a',      
  '--color-black': '#ffffff',      
  '--color-accent': '#ff8800',     
  '--color-dark': '#101010'        
};

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


window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  const isDark = savedTheme === "dark";

  applyTheme(isDark ? darkTheme : lightTheme, isDark);
  themeToggle.src = isDark ? "Assets/sol.png" : "Assets/luna.png";
});


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


//--------------------Carrrusel

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;
const totalItems = items.length;


items.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dots span');

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;


  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    updateCarousel();
  });
});


setInterval(() => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}, 10000);


