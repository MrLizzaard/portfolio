"use strict";

// Eventlistener

document.addEventListener("scroll", () => {
  stickyNavbarHandler();
  // homeOpacityHandler();
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
const carouselPersentage = 25;

arrowRight.addEventListener("click", () => {
  if (currentPage == 75) currentPage = 0;
  else currentPage += carouselPersentage;
  carouselIndicator(currentPage);
  projectList.style.transform = `translate(-${currentPage}%)`;
});

arrowLeft.addEventListener("click", () => {
  if (currentPage == 0) currentPage = 75;
  else currentPage -= carouselPersentage;
  carouselIndicator(currentPage);
  projectList.style.transform = `translate(-${currentPage}%)`;
});

const carouselBtn = document.querySelectorAll(".carousel__btn");
carouselBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target === carouselBtn[0]) {
      currentPage = 0;
      carouselIndicator(currentPage);
      projectList.style.transform = `translate(-${currentPage}%)`;
    } else if (e.target === carouselBtn[1]) {
      currentPage = 25;
      carouselIndicator(currentPage);
      projectList.style.transform = `translate(-${currentPage}%)`;
    } else if (e.target === carouselBtn[2]) {
      currentPage = 50;
      carouselIndicator(currentPage);
      projectList.style.transform = `translate(-${currentPage}%)`;
    } else if (e.target === carouselBtn[3]) {
      currentPage = 75;
      carouselIndicator(currentPage);
      projectList.style.transform = `translate(-${currentPage}%)`;
    }
  });
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

carouselBtn[0].classList.add("carousel__active");
function carouselIndicator(currentPage) {
  if (currentPage == 0) {
    carouselBtn.forEach((btn) => {
      btn.classList.remove("carousel__active");
    });
    carouselBtn[0].classList.add("carousel__active");
  } else if (currentPage == 25) {
    carouselBtn.forEach((btn) => {
      btn.classList.remove("carousel__active");
    });
    carouselBtn[1].classList.add("carousel__active");
  } else if (currentPage == 50) {
    carouselBtn.forEach((btn) => {
      btn.classList.remove("carousel__active");
    });
    carouselBtn[2].classList.add("carousel__active");
  } else {
    carouselBtn.forEach((btn) => {
      btn.classList.remove("carousel__active");
    });
    carouselBtn[3].classList.add("carousel__active");
  }
}
