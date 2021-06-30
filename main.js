"use strict";

// Eventlistener

document.addEventListener("scroll", () => {
  stickyNavbar();
});

// functions

function stickyNavbar() {
  const navbar = document.querySelector("#navbar");
  const navbarHeight = navbar.getBoundingClientRect().height;
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar__sticky");
  } else {
    navbar.classList.remove("navbar__sticky");
  }
}
