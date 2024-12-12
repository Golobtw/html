const images = [
  { src: "img1.jpg", desc: "Imatge 1" },
  { src: "img2.jpg", desc: "Imatge 2" },
  { src: "img3.jpg", desc: "Imatge 3" },
  { src: "img4.jpg", desc: "Imatge 4" },
  { src: "img5.jpg", desc: "Imatge 5" },
];

let currentIndex = 0;

const imgElement = document.getElementById("dynamic-img");
const descElement = document.getElementById("dynamic-desc");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

function updateImage() {
  imgElement.src = images[currentIndex].src;
  descElement.textContent = images[currentIndex].desc;
}
