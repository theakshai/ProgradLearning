const slidesContainer = document.getElementById("slides-container");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const colorpickers = document.querySelectorAll(".colorpicker");

let changeColor = () => {
  colorpickers.forEach((colorpicker, index) => {
    slides[index].style.backgroundColor = colorpicker.value;
  });
};

nextButton.addEventListener("click", () => {
  const slideWidth = slides[0].clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slides[0].clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});






