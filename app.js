let currentlySelected = 0;
const slides = document.querySelectorAll(".slide");
const images = document.querySelector(".pagination").children;
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    images[currentlySelected].classList.remove("active");
    slides[currentlySelected].classList.remove("active");
    currentlySelected = i;
    images[currentlySelected].classList.add("active");
    slides[currentlySelected].classList.add("active");
  });
}
