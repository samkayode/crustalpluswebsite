const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

const sidebar = document.getElementById("sideBtn");
const navlinks = document.getElementById("navLinks");
const closebtn = document.getElementById("closeBtn");
sidebar.addEventListener("click", () => {
  navlinks.classList.add("active");
});
closebtn.addEventListener("click", () => {
  navlinks.classList.remove("active");
});

const boreholeBtn = document.getElementById("exploreBtn");
if (boreholeBtn) {
  boreholeBtn.addEventListener("click", () => {
    window.location.href = "services.html#borehole";
  });
}

const geoBtn = document.getElementById("geophysicalBtn");
if (geoBtn) {
  geoBtn.addEventListener("click", () => {
    window.location.href = "services.html#geophysical-survey";
  });
}

const explorebtn = document.getElementById("waterbtn");
if (explorebtn) {
  explorebtn.addEventListener("click", () => {
    window.location.href = "services.html#water-development";
  });
}

const hero = document.querySelector(".hero");

const heroImages = [
  "images/background9.jpg",
  "images/background12.jpg",
  "images/background4.webp",
];

let currentImage = 0;
function rotateImage() {
  currentImage = (currentImage + 1) % heroImages.length;
  hero.style.backgroundImage = `url(${heroImages[currentImage]})`;
}
setInterval(rotateImage, 6000);
