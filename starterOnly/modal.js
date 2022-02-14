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

// INPUT items
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

// Add input control validation on event "change"
for (const input of inputs) {
  input.element.addEventListener("change", function (e) {
    if (!input.element.validity.valid) {
      input.element.parentNode.setAttribute("data-error", input.messageInvalid);
      input.element.parentNode.setAttribute("data-error-visible", "true");
    } else {
      input.element.parentNode.removeAttribute("data-error");
      input.element.parentNode.removeAttribute("data-error-visible");
    }
  });
  input.element.addEventListener("invalid", function (e) {
    // prevent display of browser popup
    e.preventDefault();

    if (!input.element.validity.valid) {
      input.element.parentNode.setAttribute("data-error", input.messageInvalid);
      input.element.parentNode.setAttribute("data-error-visible", "true");
    } else {
      input.element.parentNode.removeAttribute("data-error");
      input.element.parentNode.removeAttribute("data-error-visible");
    }
  });
}
