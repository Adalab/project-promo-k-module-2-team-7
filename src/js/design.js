'use strict';

const palette1 = document.querySelector('.js-green0');
const palette2 = document.querySelector('.js-red0');
const palette3 = document.querySelector('.js-random0');
const icons = document.querySelectorAll('.js-icons');
const name = document.querySelector('.js-name');
const borderTitle = document.querySelector('.js-title');


palette1.addEventListener('click', function() {
  name.classList.add('js-name-green');
  name.classList.remove('js-name-red');
  name.classList.remove('js-name-random');
  borderTitle.classList.add('js-title-green');
  borderTitle.classList.remove('js-title-red');
  borderTitle.classList.remove('js-title-random');
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add('js-icons-green');
    icons[i].classList.remove('js-icons-red');
    icons[i].classList.remove('js-icons-random');
  }
});
palette2.addEventListener('click', function() {
  name.classList.add('js-name-red');
  name.classList.remove('js-name-random');
  name.classList.remove('js-name-green');
  borderTitle.classList.add('js-title-red');
  borderTitle.classList.remove('js-title-random');
  borderTitle.classList.remove('js-title-green');
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add('js-icons-red');
    icons[i].classList.remove('js-icons-random');
    icons[i].classList.remove('js-icons-green');
  }
});
palette3.addEventListener('click', function() {
  name.classList.add('js-name-random');
  name.classList.remove('js-name-red');
  name.classList.remove('js-name-green');
  borderTitle.classList.add('js-title-random');
  borderTitle.classList.remove('js-title-red');
  borderTitle.classList.remove('js-title-green');
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add('js-icons-random');
    icons[i].classList.remove('js-icons-red');
    icons[i].classList.remove('js-icons-green');
  }
});