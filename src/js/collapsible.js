"use strict";


const formTitles = document.querySelectorAll(".js-form-title1");
const paletteSection = document.querySelector(".js-form-palette");
const fillSection = document.querySelector(".js-form-fill");
const cardSection = document.querySelector(".js-form-card");
// const formSection = document.querySelectorAll(".js-form");
const arrowsUp = document.querySelectorAll(".js-arrow-up");

function hiddenSection(ev) {
  const hiddenOtherCollapsible = ev.target;
  console.log(hiddenOtherCollapsible);
  for (let i = 0; i < formSection.length; i++) {
    formSection[i].classList.toggle("hidden");
//     console.log(formSection[i]);
}
}
// hiddenSection();

// function arrowMove() {
//   for (let i = 0; i < arrowsUp.length; i++) {
//     console.log(arrowsUp[i]);
//   }

// arrowElement.classList.add("icon-up-move");

// arrowMove();
// function collapsible(ev) {
//   const clickCollapsible = ev.currentTarget.id;

//   console.log(clickCollapsible);
//   if (clickCollapsible === true) {
//     console.log(paletteSection);
//     fillSection.classList.add("hidden");
//     cardSection.classList.add("hidden");

// } else if (clickCollapsible === true) {
//   paletteSection.classList.add("hidden");
//   fillSection.classList.add("hidden");
// } else if (clickCollapsible === true) {
//   paletteSection.classList.add("hidden");
//   cardSection.classList.add("hidden");
// }
// for (let index = 0; index < arrowUp.length; index++) {
//   arrowUp[i].classList.toggle("icon-up-move");
// }

for (const formTitle of formTitles) {
  formTitle.addEventListener("click", arrowMove);


//////////////////////////////////////////////
// const formTitle1 = document.querySelector(".js-form-title1");
// const formTitle2 = document.querySelector(".js-form-title2");
// const formTitle3 = document.querySelector(".js-form-title3");
// const paletteSection = document.querySelector(".js-form-palette");
// const fillSection = document.querySelector(".js-form-fill");
// const cardSection = document.querySelector(".js-form-card");
// const formSection = document.querySelectorAll(".js-form");
// const arrowUp = document.querySelectorAll(".js-arrow-up");

// for (let i = 0; i < arrowDown.length; i++) {
//   arrowUp[i].classList.add("hidden");
// }
// for (let i = 0; i < formSection.length; i++) {
//   formSection[i].classList.add("hidden");
// }

// formTitle1.addEventListener("click", function () {
//   paletteSection.classList.toggle("hidden");
//   fillSection.classList.add("hidden");
//   cardSection.classList.add("hidden");
//   arrowUp[0].classList.toggle("hidden");
//   arrowDown[0].classList.toggle("hidden");

// });

// formTitle2.addEventListener("click", function () {
//   fillSection.classList.toggle("hidden");
//   paletteSection.classList.add("hidden");
//   cardSection.classList.add("hidden");
//   arrowUp[1].classList.toggle("hidden");
//   arrowDown[1].classList.toggle("hidden");

// });
// formTitle3.addEventListener("click", function () {
//   cardSection.classList.toggle("hidden");
//   paletteSection.classList.add("hidden");
//   fillSection.classList.add("hidden");
//   arrowUp[2].classList.toggle("hidden");
//   arrowDown[2].classList.toggle("hidden");
