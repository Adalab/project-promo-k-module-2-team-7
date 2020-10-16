'use strict';

//////////////////////
const palette = document.querySelectorAll('.js-palette');
for (let i = 0; i < palette.length; i++) {
  palette[i].addEventListener('click', changeColor)
  palette[i].id = i;
}
function changeColor(event) {
  console.log('hola');
  if(event.currentTarget.id = 0)
    name.classList.add('.js-name-' + event.currentTarget.id)
  

  
}

/////////////////////////


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