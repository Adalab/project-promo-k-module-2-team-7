"use strict";

/*PASO 1- pinto mi paleta en html */

/* me hago un array */
const palette = ["green", "red", "random"];

/* Localizo donde voy a pintar mi codigo en el HTML y hago un querySelector */
const paletteColors = document.querySelector(".js-palettes");

/* PASO 2 - pinto  */

/* Localizo donde voy a pintar mi codigo en el HTML y hago un querySelector */
const card = document.querySelector(".main__photo");

// Painter function
const paintPalettes = () => {
  for (let i = 0; i < palette.length; i++) {
    /* este codigo lo quiero repetido, lo meto dentro de for con += para q no se sobreesciba */
    paletteColors.innerHTML += `<div class="design__palette-color">
  <input id=${palette[i]} class="palettes js-palette" type="radio" name="palette" value="palette-1" />
  <span class="box-color ${palette[i]}__1"></span> 
  <span class="box-color ${palette[i]}__2"></span>
  <span class="box-color ${palette[i]}__3"></span>
  </div>
  `;
  }
};

const paintCard = (color, url) => {
  card.innerHTML = "";
  card.innerHTML = `<div class="main__photo--title js-title js-title-${color}">
<h4 class="name js-name js-name-${color}">Nombre apellido</h4>
<p class="description js-description js-role">Front-end developer</p>
</div>
<div class="main__photo--photo">
<div
  class="profile__image js__profile-image"
  style="background-image: url(${url})"
></div>
</div>
<div class="main__photo--social">
<a href="" class="js-icon-phone js-telephone" target="_blank" title="Teléfono"
  ><i class="icons js-icons js-icons-${color} fas fa-mobile-alt"></i
></a>
<a href="" class="js-icon-mail js-email" target="_blank" title="Email"
  ><i class="icons js-icons js-icons-${color} far fa-envelope"></i
></a>
<a href="" class="js-icon-linkedin js-linkedin" target="_blank" title="Linkedin"
  ><i class="icons js-icons js-icons-${color} fab fa-linkedin-in"></i
></a>
<a href="" class="js-icon-github js-github" target="_blank" title="Github"
  ><i class="icons js-icons js-icons-${color} fab fa-github-alt"></i
></a>
</div>`;
};

// Paint elements
paintPalettes();
paintCard("red", "./assets/images/MM.jpg");

const radioButtonList = document.querySelectorAll(".js-palette");

// Listen events
for (let i = 0; i < radioButtonList.length; i++) {
  radioButtonList[i].addEventListener("click", handleRadioButtonCLick);
}

function handleRadioButtonCLick(event) {
  console.log("palette Id", event.target.id);
  paintCard(event.target.id, `${fr.result}`);
}
