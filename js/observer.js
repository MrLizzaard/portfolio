"use strict";

const observerOptions = { threshold: 0.5 };
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

const target = document.querySelectorAll(".section__container");
target.forEach((section) => {
  observer.observe(section);
});
