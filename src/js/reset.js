"use strict";

const reset = document.querySelector(".js-reset");
const name = document.querySelector(".js-name");
const role = document.querySelector(".js-role");
const image = document.querySelector(".js__profile-image");
const miniImage = document.querySelector(".js__profile-preview");
const social = document.querySelectorAll(".js-social");

function resetData() {
  name.innerHTML = "Nombre Apellido";
  role.innerHTML = "Front-end developer";
  image.style = "background-image: url('./assets/images/MM.jpg')";
  miniImage.style = "";
  radioButtonList[0].checked = true;
  for (let item of social) {
    item.href = "";
  }
  for (let item of fillData) {
    item.value = "";
  }
  dataValue.palette = 1;
  const cardContainer = document.querySelector(".js-card-container");
  cardContainer.classList.remove("js-green", "js-red", "js-random");
  cardContainer.classList.add("js-green");
  localStorage.clear();
}

reset.addEventListener("click", resetData);
getLocalStorage();
