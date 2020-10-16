"use strict";

// constantes

const fillInputs = document.querySelectorAll(".js-fill");

const dataElements = {
  name: "",
  job: "",
  email: "",
  telephone: "",
  linkdein: "",
  github: "",
};

// handler
function paintPhoto(ev) {
  dataElements[ev.currentTarget.id] = ev.currentTarget.value;
  for (let item in dataElements) {
    const dataElement = document.querySelectorAll(`.js-${item}`);
    dataElement.innerHTML = dataElements[item];
    console.log(dataElement.innerHTML);
  }
  // fillName.innerHTML = fillInputNameValue;
  // fillJob.innerHTML = fillInputJobValue;
}

// listener con array
for (const fillInput of fillInputs) {
  fillInput.addEventListener("focus", paintPhoto);
}
