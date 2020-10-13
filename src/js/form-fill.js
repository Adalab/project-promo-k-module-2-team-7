"use strict";

// constantes
const fillInputName = document.querySelector(".js-fill__name");
const fillInputJob = document.querySelector(".js-fill__job");
const fillName = document.querySelector(".js-name");
const fillJob = document.querySelector(".js-description");

// coger el valor de los inputs

function changePhoto() {
  const fillInputNameValue = fillInputName.value;
  const fillInputJobValue = fillInputJob.value;
  console.log(fillInputJobValue);
  fillName.innerHTML = fillInputNameValue;
  fillJob.innerHTML = fillInputJobValue;
}

// listener

fillInputJob.addEventListener("focus", changePhoto);
fillInputName.addEventListener("focus", changePhoto);
