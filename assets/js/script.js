'use strict';

/** element toggle function **/

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

/** navbar toggle **/

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemeArr = [overlay, navCloseBtn, navOpenBtn];

/** close navbar when click on any navbar link **/

for (let i = 0; i < navbarLinks.length; i++) { navElemeArr.push(navbarLinks[i]); }

/** add event on all elements for toggling navbar **/

for (let i = 0; i < navElemeArr.length; i++ ) {
  navElemeArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}