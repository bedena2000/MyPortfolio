let burgerButton = document.querySelector(".burger");
let burgerBackground = document.querySelector(".burger__background");

burgerButton.addEventListener("click", function(event) {
  burgerBackground.classList.toggle("show");
});


