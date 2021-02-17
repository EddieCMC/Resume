"use strict";

/*=========== MENU SHOW Y HIDDEN ==========*/
var navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close'); //SHOW

toggleMenu.addEventListener('click', function () {
  navMenu.classList.toggle('show');
}); //HIDEN

closeMenu.addEventListener('click', function () {
  navMenu.classList.remove('show');
});
/*===== REMOVE MENU =====*/

var navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navMenu.classList.remove('show');
}

navLink.forEach(function (n) {
  return n.addEventListener('click', linkAction);
});
/*======== SCROLL SECTIONS ACTIVE LINK ===============*/

var section = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
  var scrollY = window.pageYOffset;
  section.forEach(function (current) {
    var sectionHeight = current / offsetHeight;
    var sectionTop = current.offsetTop - 50;
    sectionID = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.remove('active');
    }
  });
}