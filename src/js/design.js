"use strict";

const icons = document.querySelectorAll(".js-icons");
const name = document.querySelector(".js-name");
const borderTitle = document.querySelector(".js-title");
//////////////////////////////////////////////////////////////

/*PASO 1- pinto mi paleta en html */

/* me hago un array */
const palette = ["green", "red", "random"];

/* Localizo donde voy a pintar mi codigo en el HTML y hago un querySelector */
const paletteColors = document.querySelector(".js-palettes");

for (let i = 0; i < palette.length; i++) {
  /* este codigo lo quiero repetido, lo meto dentro de for con += para q no se sobreesciba */
  paletteColors.innerHTML += `<div class="design__palette-color">
<input type="radio" name="palette" value="palette-1" class="green0 js-palette" />
<span class="${palette[i]}__1"></span>
<span class="${palette[i]}__2"></span>
<span class="${palette[i]}__3"></span>
</div> 
`;
}

/*hago array de mis paletas  */

///////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
/* palette1.addEventListener("click", function () {
  name.classList.add("js-name-green");
  name.classList.remove("js-name-red");
  name.classList.remove("js-name-random");
  borderTitle.classList.add("js-title-green");
  borderTitle.classList.remove("js-title-red");
  borderTitle.classList.remove("js-title-random");
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add("js-icons-green");
    icons[i].classList.remove("js-icons-red");
    icons[i].classList.remove("js-icons-random");
  }
});
palette2.addEventListener("click", function () {
  name.classList.add("js-name-red");
  name.classList.remove("js-name-random");
  name.classList.remove("js-name-green");
  borderTitle.classList.add("js-title-red");
  borderTitle.classList.remove("js-title-random");
  borderTitle.classList.remove("js-title-green");
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add("js-icons-red");
    icons[i].classList.remove("js-icons-random");
    icons[i].classList.remove("js-icons-green");
  }
});
palette3.addEventListener("click", function () {
  name.classList.add("js-name-random");
  name.classList.remove("js-name-red");
  name.classList.remove("js-name-green");
  borderTitle.classList.add("js-title-random");
  borderTitle.classList.remove("js-title-red");
  borderTitle.classList.remove("js-title-green");
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add("js-icons-random");
    icons[i].classList.remove("js-icons-red");
    icons[i].classList.remove("js-icons-green");
  }
});
 */
