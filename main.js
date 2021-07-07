"use strict";

//consts
const navbarMenu = document.querySelector(".navbar__menu");
const contactMeBtn = document.querySelector(".home__contactBtn");
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
const homeContainer = document.querySelector(".home__container");
const arrowUp = document.querySelector(".arrow-up");

// Eventlistener

function arrowUpOpacityHandler() {}

document.addEventListener("scroll", () => {
  stickyNavbarHandler();
  homeAndArrowUpOpacityHandler();
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

//arrow up Btn

arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

//function

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

function stickyNavbarHandler() {
  const navbar = document.querySelector("#navbar");
  const navbarHeight = navbar.getBoundingClientRect().height;
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar__sticky");
  } else {
    navbar.classList.remove("navbar__sticky");
  }
}

function homeAndArrowUpOpacityHandler() {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
  arrowUp.style.opacity = window.scrollY / homeHeight;
}
