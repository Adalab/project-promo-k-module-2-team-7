"use strict";

// const para hacer el listener
const designTitle1 = document.querySelector(".js-design__title");
const designTitle2 = document.querySelector(".js-design__title2");
const designTitle3 = document.querySelector(".js-design__title3");
// const para hacer el meter el hidden
const designPalette1 = document.querySelector(".js-design__palette");
const designPalette2 = document.querySelector(".js-fill__form");
const designPalette3 = document.querySelector(".js-create-card");

function arrowMove1() {
  designPalette1.classList.toggle("hidden");
}
function arrowMove2() {
  designPalette2.classList.toggle("hidden");
}
function arrowMove3() {
  designPalette3.classList.toggle("hidden");
}
// listener
designTitle1.addEventListener("click", arrowMove1);
designTitle2.addEventListener("click", arrowMove2);
designTitle3.addEventListener("click", arrowMove3);
