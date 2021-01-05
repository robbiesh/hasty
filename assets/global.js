// mobile menu
if (document.querySelector(".js-toggle-sub-menu")) {
  var trigger = document.querySelector(".js-toggle-sub-menu");
  trigger.addEventListener("click", function () {
    this.classList.toggle("sub-menu--open");
  });
}

if (document.querySelector(".js-open-mm")) {
  var trigger = document.querySelector(".js-open-mm");
  trigger.addEventListener("click", function () {
    document.body.classList.add('mm--open')
  });
}

if (document.querySelector(".js-close-mm")) {
  var trigger = document.querySelector(".js-close-mm");
  trigger.addEventListener("click", function () {
    document.body.classList.remove("mm--open");
  });
}
