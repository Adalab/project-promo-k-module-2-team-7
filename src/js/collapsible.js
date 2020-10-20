"use strict";

const formTitles = document.querySelectorAll(".js-form-title1");
const paletteSection = document.querySelector(".js-form-palette");
const fillSection = document.querySelector(".js-form-fill");
const cardSection = document.querySelector(".js-form-card");
const arrowsUp = document.querySelectorAll(".js-arrow-up");

function hiddenSection(ev) {
  for (const arrowUp of arrowsUp) {
    let arrowId = arrowUp.id;

    const click = ev.target.id;
    if (click == 1) {
      paletteSection.classList.toggle("hidden");
      fillSection.classList.add("hidden");
      cardSection.classList.add("hidden");
      arrowId.classList.add("icon-up-move");
    } else if (click == 2) {
      fillSection.classList.toggle("hidden");
      paletteSection.classList.add("hidden");
      cardSection.classList.add("hidden");
      arrowId.classList.add("icon-up-move");
    } else if (click == 3) {
      cardSection.classList.toggle("hidden");
      paletteSection.classList.add("hidden");
      fillSection.classList.add("hidden");
      arrowId.classList.add("icon-up-move");
    }
  }
}

// function arrowMove() {
//   for (const arrowUp of arrowsUp) {
//     let arrowId = arrowUp.id;
//     console.log(arrowId);
//     if (arrowId == 1) {
//       arrowUp.classList.add("icon-up-move");
//     } else if (arrowId == 2) {
//       arrowUp.classList.add("icon-up-move");
//     } else if (arrowId == 3) {
//       arrowUp.classList.add("icon-up-move");
//     }
//   }
// }

for (const formTitle of formTitles) {
  formTitle.addEventListener("click", hiddenSection);
}
