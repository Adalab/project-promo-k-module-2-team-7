'use strict'


const arrowUp = document.querySelector(".js-arrow-up");
console.log(arrowUp)
const designPalette = document.querySelector(".js-design__palette");

function arrowMove (ev) {
    designPalette.classlist.toggle("js-arrowUp");
}

arrowUp.addEventListener('click', arrowMove);

console.log(arrowUp);