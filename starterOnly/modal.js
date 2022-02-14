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
const submitBg = document.querySelector(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBg.addEventListener("click", closeModal);

// check validation form
// submitBg.addEventListener("click", submitBg);

// launch modal form
function launchModal(event) {
  // add display class to display the form pop-up
  modalbg.classList.add("bground--displayed");
}

// close modal form
function closeModal(event) {
  // remove display class to close the form pop-up
  modalbg.classList.remove("bground--displayed");
}
