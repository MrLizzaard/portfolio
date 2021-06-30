"use strict";

init();

function init() {
  // Eventlistener

  document.addEventListener("scroll", () => {
    stickyNavbar();
  });
}

function stickyNavbar() {
  const navbar = document.querySelector("#navbar");
  let skicky = navbar.offsetTop;
  if (window.pageYOffset == 0) {
    navbar.classList.remove("sticky");
  } else {
    navbar.classList.add("sticky");
  }
}
