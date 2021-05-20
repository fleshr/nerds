var mapButton = document.querySelector(".map-button");
var modalClose = document.querySelector(".modal-close");
var modalWindow = document.querySelector(".modal-writeus")

document.body.classList.remove("preload");

mapButton.addEventListener("click", function (event) {
  event.preventDefault();
  modalWindow.classList.add("modal-show");
  modalWindow.classList.remove("modal-hide");
})

modalClose.addEventListener("click", function (event) {
  event.preventDefault();
  modalWindow.classList.add("modal-hide");
  modalWindow.classList.remove("modal-show");
})