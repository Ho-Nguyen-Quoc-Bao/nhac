let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// darkmode///////////////////////////////////////
// const btn = document.querySelector(".btn-toggle");

// btn.addEventListener("click", function () {
//   document.body.classList.toggle("dark-theme");
// });