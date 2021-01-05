console.log("HAHA");

var triggers = document.querySelectorAll(".js-trigger-details");
for (var i = 0; i < triggers.length; i++) {
  triggers[i].addEventListener("click", function () {
    this.classList.toggle("details--open");
  });
}
