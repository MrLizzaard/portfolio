const title = document.querySelector(".description .titlebox .title");
const Btn = document.querySelector(".description .titlebox .Btn");
const likeBtn = document.querySelector(".description .actions .likeBtn");
const dislikeBtn = document.querySelector(".description .actions .dislikeBtn");

Btn.addEventListener("click", onBtnClicked);
likeBtn.addEventListener("click", onlikeBtnClicked);
dislikeBtn.addEventListener("click", ondislikeBtnClicked);

function onBtnClicked() {
  title.classList.toggle("clamp");
}

function onlikeBtnClicked() {
  likeBtn.querySelector(".fas").classList.toggle("active");
  const span = likeBtn.querySelector("span");
  if (span.innerHTML === "0") {
    span.innerHTML = 1;
  } else {
    span.innerHTML = 0;
  }
  if (dislikeBtn.classList[1] === "on") {
    ondislikeBtnClicked();
  }
  likeBtn.classList.toggle("on");
}

function ondislikeBtnClicked() {
  dislikeBtn.querySelector(".fas").classList.toggle("active");
  const span = dislikeBtn.querySelector("span");
  if (span.innerHTML === "0") {
    span.innerHTML = 1;
  } else {
    span.innerHTML = 0;
  }
  if (likeBtn.classList[1] === "on") {
    onlikeBtnClicked();
  }
  dislikeBtn.classList.toggle("on");
}
