"use strict";

// Eventlistener

document.addEventListener("scroll", () => {
  stickyNavbarHandler();
  homeOpacityHandler();
  arrowUpOpacityHandler();
});

//navbar click event

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  if ("navbar__menu__item" === target.classList[0]) {
    scrollIntoView(`#${target.innerText.toLowerCase()}`);
  }
});

// menu border
const navbarMenuItem = document.querySelectorAll(".navbar__menu__item");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  if ("navbar__menu__item" === target.classList[0]) {
    navbarMenuItem.forEach((item) => {
      item.classList.remove("active");
    });
    navbarMenu.classList.remove("visible");
    target.classList.add("active");
  }
});

//navbar hamburger Btn

const navbarHamburger = document.querySelector(".navbar__toggle-btn");
navbarHamburger.addEventListener("click", () => {
  navbarMenu.classList.toggle("visible");
});

//contact me btn handler

const contactMeBtn = document.querySelector(".home__contactBtn");
contactMeBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

//arrow up Btn

const arrowUp = document.querySelector(".arrow-up");
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

//skill value display

const skillCon = document.querySelector(".skills__container");
skillCon.addEventListener("mousemove", (e) => {
  if (e.target.classList[0] == "fab") {
    const target = e.target.parentNode;
    const value = target.dataset.value;
    const skillDisplay = target.parentNode.parentNode.querySelector(".skills__range-display");
    const persentage = skillDisplay.querySelector(".skills__range-persentage");
    const skillValue = skillDisplay.querySelector(".skills__range-value");
    skillValue.style.width = `${value}%`;
    persentage.innerText = `${value}%`;
  }
});

// project carousel function

const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");
const projectList = document.querySelector(".project__lists");
let currentPage = 0;
const carouselPersentage = (projectList.getBoundingClientRect().width / 3 / projectList.getBoundingClientRect().width) * 100;

arrowRight.addEventListener("click", () => {
  currentPage += carouselPersentage;
  console.log(currentPage);
  projectList.style.transform = `translate(-${currentPage}%)`;
});

arrowLeft.addEventListener("click", () => {
  currentPage -= carouselPersentage;
  console.log(currentPage);
  projectList.style.transform = `translate(-${currentPage}%)`;
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

const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
const homeContainer = document.querySelector(".home__container");
function homeOpacityHandler() {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
}

function arrowUpOpacityHandler() {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
}
