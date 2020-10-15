"use strict";

// constantes

const dataElements = {
  name: "",
  job: "",
};
const fillInputs = document.querySelectorAll(".js-fill");
const fillName = document.querySelector(".js-name");
const fillJob = document.querySelector(".js-description");

// coger el valor de los inputs

function paintPhoto(ev) {
  dataElements[ev.currentTarget.id] = ev.currentTarget.value;
  for (const dataElement in dataElements) {
    dataElement.innerHTML;
  }
  // fillName.innerHTML = fillInputNameValue;
  // fillJob.innerHTML = fillInputJobValue;
}

// listener

for (const fillInput of fillInputs) {
  fillInput.addEventListener("focus", paintPhoto);
}
