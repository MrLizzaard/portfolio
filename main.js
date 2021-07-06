"use strict";

//consts
const menu = document.querySelector(".navbar__menu");

// Eventlistener

document.addEventListener("scroll", () => {
  const navbar = document.querySelector("#navbar");
  const navbarHeight = navbar.getBoundingClientRect().height;
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar__sticky");
  } else {
    navbar.classList.remove("navbar__sticky");
  }
});

menu.addEventListener("click", (e) => {
  const target = e.target.classList;
  if ("navbar__menu__item" === target[0]) {
    console.log(target);
  }
});
