"use strict";

var hamburgerMenu = document.querySelector('.hamburger-menu');
var menu = document.querySelector('.menu');
var content = document.querySelector('.content');
hamburgerMenu.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
});