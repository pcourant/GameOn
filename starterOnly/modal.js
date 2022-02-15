/**************************** FUNCTIONS DECLARATION ***********************/
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Launch modal form by changing CSS class
function launchModal(event) {
  modalbg.classList.toggle("bground--displayed");
}

// Close modal form by changing CSS class
function closeModal(event) {
  modalbg.classList.toggle("bground--displayed");
}

let checkValidityOnEvent = function (event, input) {
  // Add input control validation on events "change"
  input.element.addEventListener(event, function (e) {
    // prevent display of browser original popup
    e.preventDefault();

    if (!input.element.validity.valid) {
      //Si l'input est INVALID
      input.element.parentNode.setAttribute("data-error", input.messageInvalid);
      input.element.parentNode.setAttribute("data-error-visible", "true");
    } else {
      input.element.parentNode.removeAttribute("data-error");
      input.element.parentNode.removeAttribute("data-error-visible");
    }
  });
};

/***************************************************************/
/**************************** VARIABLES ***********************/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// DOM bground Elements
const closeBg = document.querySelector(".close");
const submitBg = document.querySelector(".btn-submit");

// DOM input objects
const firstName = {
  element: document.getElementById("first"),
  messageInvalid:
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
};
const lastName = {
  element: document.getElementById("last"),
  messageInvalid: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
};
const email = {
  element: document.getElementById("email"),
  messageInvalid: "Veuillez entrer un email valide : jean.dupont@email.com",
};
const birthdate = {
  element: document.getElementById("birthdate"),
  messageInvalid: "Vous devez entrer votre date de naissance.",
};
const quantity = {
  element: document.getElementById("quantity"),
  messageInvalid: "Vous devez entrer un nombre entre 0 et 99.",
};
const location1 = {
  element: document.getElementById("location1"),
  messageInvalid: "Vous devez choisir un tournoi.",
};
const location2 = {
  element: document.getElementById("location2"),
  messageInvalid: "Vous devez choisir un tournoi.",
};
const location3 = {
  element: document.getElementById("location3"),
  messageInvalid: "Vous devez choisir un tournoi.",
};
const location4 = {
  element: document.getElementById("location4"),
  messageInvalid: "Vous devez choisir un tournoi.",
};
const location5 = {
  element: document.getElementById("location5"),
  messageInvalid: "Vous devez choisir un tournoi.",
};
const location6 = {
  element: document.getElementById("location6"),
  messageInvalid: "Vous devez choisir un tournoi.",
};
const checkbox1 = {
  element: document.getElementById("checkbox1"),
  messageInvalid:
    "Vous devez vérifier que vous acceptez les termes et conditions.",
};

const inputs = [
  firstName,
  lastName,
  email,
  birthdate,
  quantity,
  location1,
  location2,
  location3,
  location4,
  location5,
  location6,
  checkbox1,
];

/******************************************************************/
/**************************** JS EXECUTION ***********************/

// Launch modal event listener
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event listener
closeBg.addEventListener("click", closeModal);

// FORM validation
for (const input of inputs) {
  checkValidityOnEvent("change", input);
  checkValidityOnEvent("invalid", input);
}

// Add input control validation on event "invalid"
document.querySelector("form").addEventListener("submit", function (e) {
  // prevent display of browser original popup
  console.log(e);

  // Stop browser from reload windows
  e.preventDefault();
});
