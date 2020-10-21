"use strict";
const iconPhone = document.querySelector(".js-icon-phone");
const iconMail = document.querySelector(".js-icon-mail");
const iconLinkedin = document.querySelector(".js-icon-linkedin");
const iconGithub = document.querySelector(".js-icon-github");

const fillData = document.querySelectorAll(".js-fill");
let dataValue = {
  palette: 1,
  name: "Nombre Apellido",
  role: "Front-end developer",
  email: "hola@gmail.com",
  telephone: "555-555-555",
  linkedin: "NombreApellido",
  github: "@NombreApellido",
};

const fillDataValue = function (event) {
  dataValue[event.currentTarget.id] = event.currentTarget.value;
  // for (let item in dataValue) {
  //   const fillCards = document.querySelector(`.js-${item}`);
  // }
  localStorage.setItem("dataFrom", JSON.stringify(dataValue));
  renderPreview();
  // name.innerHTML = dataValue.name;
  // role.innerHTML = dataValue.role;
  // iconPhone.href = "tel:" + dataValue.telephone;
  // iconMail.href = "mailto:" + dataValue.email;
  // iconLinkedin.href = dataValue.linkedin;
  // iconGithub.href = dataValue.github;
};

function getLocalStorage() {
  const savedTaskRaw = localStorage.getItem("dataFrom");
  if (savedTaskRaw) {
    dataValue = JSON.parse(savedTaskRaw);
    renderPreview();
  }
}
//.main__photo.red .main__photo--title { border-left-color: red; }
/*
 * Actualiza la tarjeta preview desde la infor que hay en dataValue
 */
function renderPreview() {
  // Actualiza los colores
  const titleContainer = document.querySelector(".js-title");
  titleContainer.classList.remove("js-green");
  titleContainer.classList.remove("js-red");
  titleContainer.classList.remove("js-random");
  if (dataValue.palette === 1) {
    titleContainer.classList.add("js-green");
  }
  if (dataValue.palette === 2) {
    titleContainer.classList.add("js-red");
  }
  if (dataValue.palette === 3) {
    titleContainer.classList.add("js-random");
  }
  name.innerHTML = dataValue.name;
  role.innerHTML = dataValue.role;
  iconPhone.href = "tel:" + dataValue.telephone;
  iconMail.href = "mailto:" + dataValue.email;
  iconLinkedin.href = dataValue.linkedin;
  iconGithub.href = dataValue.github;

  // Actualizar la foto
  profileImage.style.backgroundImage = `url(${dataValue.photo})`;
}

for (const eachFillData of fillData) {
  eachFillData.addEventListener("change", fillDataValue);
}
////////////////////////////////////
//localStorage
//guardar en el localStorage

//obtener los datos del localStorage
//   //localStorage
//   //guardar en el localStorage

//obtener los datos del localStorage
// localStorage.setItem(`${item}`, JSON.stringify(dataValue[item]));

// function getLocalStorage() {
//   if (localStorage.getItem("dataValue[item]")) {
//     const savedTasks = JSON.parse(localStorage.getItem(`${item}`));
//   }
// }
// getLocalStorage();

///////////////////////////////////////////////////

//  'use strict';
// const nameInput = document.querySelector('.js-fill-name');
// const jobInput = document.querySelector('.js-fill-job');
// const emailInput = document.querySelector('.js-fill-email');
// const telInput = document.querySelector('.js-fill-tel');
// const linkedinInput = document.querySelector('.js-fill-linkedin');
// const githubInput = document.querySelector('.js-fill-github');

// nameInput.addEventListener("keyup", function () {
//   name.innerHTML = nameInput.value;
// });
// jobInput.addEventListener("keyup", function () {
//   const jobName = document.querySelector(".js-description");
//   jobName.innerHTML = jobInput.value;
// });
// emailInput.addEventListener("change", function () {
//   const iconMail = document.querySelector(".js-icon-mail");
//   const emailInputValue = "mailto:" + emailInput.value;
//   iconMail.href = emailInputValue;
// });
// telInput.addEventListener("change", function () {
//   const iconPhone = document.querySelector(".js-icon-phone");
//   const phoneInputValue = "tel:+34" + telInput.value;
//   iconPhone.href = phoneInputValue;
// });
// linkedinInput.addEventListener("change", function () {
//   const iconLinkedin = document.querySelector(".js-icon-linkedin");
//   const linkedinInputValue = linkedinInput.value;
//   iconLinkedin.href = linkedinInputValue;
// });
// githubInput.addEventListener("change", function () {
//   const iconGithub = document.querySelector(".js-icon-github");
//   const githubInputValue = githubInput.value;
//   iconGithub.href = githubInputValue;
// });
