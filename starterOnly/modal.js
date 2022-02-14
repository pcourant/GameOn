function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// DOM bground Elements
const closeBg = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBg.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  // add display class to display the form pop-up
  modalbg.classList.add("bground--displayed");
}

// close modal form
function closeModal() {
  // remove display class to close the form pop-up
  modalbg.classList.remove("bground--displayed");
}
