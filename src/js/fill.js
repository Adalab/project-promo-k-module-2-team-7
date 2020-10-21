"use strict";
const iconPhone = document.querySelector(".js-icon-phone");
const iconMail = document.querySelector(".js-icon-mail");
const iconLinkedin = document.querySelector(".js-icon-linkedin");
const iconGithub = document.querySelector(".js-icon-github");

const fillData = document.querySelectorAll(".js-fill");

const dataValue = {
  name: "Nombre Apellido",
  role: "Front-end developer",
  email: "hola@gmail.com",
  telephone: "555-555-555",
  linkedin: "NombreApellido",
  github: "@NombreApellido",
};

const fillDataValue = function (event) {
  dataValue[event.currentTarget.id] = event.currentTarget.value;
  for (let item in dataValue) {
    const fillCards = document.querySelector(`.js-${item}`);
  }
  localStorage.setItem("dataFrom", JSON.stringify(dataValue));
  name.innerHTML = dataValue.name;
  role.innerHTML = dataValue.role;
  iconMail.href = "mailto:" + dataValue.email;
  iconPhone.href = "tel:" + dataValue.telephone;
  iconLinkedin.href = dataValue.linkedin;
  iconGithub.href = dataValue.github;
};
getLocalStorage();

function getLocalStorage() {
  const savedTasks = JSON.parse(localStorage.getItem("dataFrom"));
  console.log(savedTasks);
  name.innerHTML = savedTasks.name;
  role.innerHTML = savedTasks.role;
  iconMail.href = "mailto:" + savedTasks.email;
  iconPhone.href = "tel:" + savedTasks.telephone;
  iconLinkedin.href = savedTasks.linkedin;
  iconGithub.href = savedTasks.github;
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
