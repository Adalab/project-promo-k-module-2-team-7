"use strict";

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
    fillCards.innerHTML = dataValue[item];
  }
};

for (const eachFillData of fillData) {
  eachFillData.addEventListener("change", fillDataValue);
}

/* 'use strict';
const nameInput = document.querySelector('.js-fill-name');
const jobInput = document.querySelector('.js-fill-job');
const emailInput = document.querySelector('.js-fill-email');
const telInput = document.querySelector('.js-fill-tel');
const linkedinInput = document.querySelector('.js-fill-linkedin');
const githubInput = document.querySelector('.js-fill-github');

nameInput.addEventListener('keyup', function() {
  name.innerHTML = nameInput.value;
});
jobInput.addEventListener('keyup', function() {
  const jobName = document.querySelector('.js-description');
  jobName.innerHTML = jobInput.value;
});
emailInput.addEventListener('change', function(){
  const iconMail = document.querySelector('.js-icon-mail');
  const emailInputValue = 'mailto:' + emailInput.value;
  iconMail.href = emailInputValue;
});
telInput.addEventListener('change', function(){
  const iconPhone = document.querySelector('.js-icon-phone');
  const phoneInputValue = 'tel:+34' + telInput.value;
  iconPhone.href = phoneInputValue;
});
linkedinInput.addEventListener('change', function(){
  const iconLinkedin = document.querySelector('.js-icon-linkedin');
  const linkedinInputValue = linkedinInput.value;
  iconLinkedin.href = linkedinInputValue;
});
githubInput.addEventListener('change', function(){
  const iconGithub = document.querySelector('.js-icon-github');
  const githubInputValue = githubInput.value;
  iconGithub.href = githubInputValue;
}); */
