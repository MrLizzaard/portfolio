"use strict";

//consts
const navbarMenu = document.querySelector(".navbar__menu");
const contactMeBtn = document.querySelector(".home__contactBtn");

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

//navbar click event
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  if ("navbar__menu__item" === target.classList[0]) {
    scrollIntoView(`#${target.innerText.toLowerCase()}`);
  }
});

//contact me btn handler

contactMeBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

//home opacity
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
const homeContainer = document.querySelector(".home__container");
document.addEventListener("scroll", () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

//function

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
