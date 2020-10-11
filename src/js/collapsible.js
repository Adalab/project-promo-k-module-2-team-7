'use strict';

const formTitle1 = document.querySelector('.js-form-title1');
const formTitle2 = document.querySelector('.js-form-title2');
const formTitle3 = document.querySelector('.js-form-title3');
const paletteSection = document.querySelector('.js-form-palette');
const fillSection = document.querySelector('.js-form-fill');
const cardSection = document.querySelector('.js-form-card');
const formSection = document.querySelectorAll('.js-form');
const arrowUp = document.querySelectorAll('.js-arrow-up');
const arrowDown = document.querySelectorAll('.js-arrow-down');

for (let i = 0; i < arrowDown.length; i++) {
  arrowUp[i].classList.add('hidden');
}
for (let i = 0; i < formSection.length; i++) {
  formSection[i].classList.add('hidden');
}

formTitle1.addEventListener('click', function(){
  paletteSection.classList.toggle('hidden');
  fillSection.classList.add('hidden');
  cardSection.classList.add('hidden');
  arrowUp[0].classList.toggle('hidden');
  arrowDown[0].classList.toggle('hidden');
});
formTitle2.addEventListener('click', function(){
  fillSection.classList.toggle('hidden');
  paletteSection.classList.add('hidden');
  cardSection.classList.add('hidden');
  arrowUp[1].classList.toggle('hidden');
  arrowDown[1].classList.toggle('hidden');
});
formTitle3.addEventListener('click', function(){
  cardSection.classList.toggle('hidden');
  paletteSection.classList.add('hidden');
  fillSection.classList.add('hidden');
  arrowUp[2].classList.toggle('hidden');
  arrowDown[2].classList.toggle('hidden');
});
