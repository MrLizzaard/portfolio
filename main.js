"use strict";

//consts
const navbarMenu = document.querySelector(".navbar__menu");

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

navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  if ("navbar__menu__item" === target.classList[0]) {
    const scrollTo = document.querySelector(`#${target.innerText.toLowerCase()}`);
    scrollTo.scrollIntoView({ block: "center", behavior: "smooth" });
  }
});
