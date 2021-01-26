import Cookies from "js-cookie";

// modal
if (document.querySelector(".js-modal")) {
  if (Cookies.get("modal") === undefined) {
    setTimeout(() => {
      document.body.classList.add("modal--open");
    }, 5000);
  }

  document.querySelector(".js-modal-close").addEventListener("click", () => {
    document.body.classList.remove("modal--open");
    Cookies.set("modal", "closed");
  });
}
