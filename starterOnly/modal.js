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
  modalbg.classList.add("bground--displayed");
  heroSection.classList.add("hero-section--hidden");
}

// Close modal form by changing CSS class
function closeModal(event) {
  // reset form
  document.getElementById("reserve").reset();

  // Clear error messages
  for (const input in inputs) {
    if (inputs[input].element !== null) {
      inputs[input].element.parentNode.removeAttribute("data-error");
      inputs[input].element.parentNode.removeAttribute("data-error-visible");
    }
  }

  // Become invisible
  modalbg.classList.remove("bground--displayed");
  modalBgConfirm.classList.remove("confirm-displayed");
  heroSection.classList.remove("hero-section--hidden");
}

let checkValidityOnEvent = function (event, input) {
  if (input.element !== null) {
    // Add input control validation on events "change"
    input.element.addEventListener(event, function (e) {
      // prevent display of browser original popup
      e.preventDefault();

      if (!input.element.validity.valid) {
        //Si l'input est INVALID
        input.element.parentNode.setAttribute(
          "data-error",
          input.messageInvalid
        );
        input.element.parentNode.setAttribute("data-error-visible", "true");
      } else {
        input.element.parentNode.removeAttribute("data-error");
        input.element.parentNode.removeAttribute("data-error-visible");
      }
    });
  }
};

// Validate function called on onsubmit event when form is submitted
function validate() {
  // Stop browser from reload windows
  this.event.preventDefault();

  let nbInputsChecked = 0;

  let myForm = document.getElementById("reserve");
  // Prepopulate formData with values from the form
  let myFormData = new FormData(myForm);
  // Note: Only successful form controls are included in a FormData object

  // Check all for inputs
  for (let pair of myFormData) {
    let value = pair[1];
    let key = pair[0];
    if (inputs[key] !== undefined) {
      if (
        !(typeof value === inputs[key].type && inputs[key].regex.test(value))
      ) {
        console.log(key + ", " + value);
        this.event.stopImmediatePropagation();
        return false;
      }
    }
    nbInputsChecked++;
  }

  if (nbInputsChecked < nbOfInputsToCheck) {
    this.event.stopImmediatePropagation();
    return false;
  }

  return true;
}

/***************************************************************/
/**************************** VARIABLES ***********************/

// DOM Elements
const heroSection = document.querySelector(".hero-section");
const modalbg = document.querySelector(".bground");
const modalBgConfirm = document.getElementById("modal-body-confirm");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// DOM bground Elements
const closeBg = document.querySelector(".close");
const closeBgButton = document.querySelector(".btn-close");
const submitBg = document.querySelector(".btn-submit");

// DOM input objects
const firstName = {
  element: document.getElementById("first"),
  messageInvalid:
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  type: "string",
  regex: /[a-zA-Z]{2,32}/,
};
const lastName = {
  element: document.getElementById("last"),
  messageInvalid: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  type: "string",
  regex: /[a-zA-Z]{2,32}/,
};
const email = {
  element: document.getElementById("email"),
  messageInvalid: "Veuillez entrer un email valide : jean.dupont@email.com",
  type: "string",
  // RFC2822 Email Validation from regexr.com
  regex:
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
};
const birthdate = {
  element: document.getElementById("birthdate"),
  messageInvalid: "Vous devez entrer votre date de naissance.",
  type: "string",
  // valid birthdate (YYYY-MM-DD)
  regex: /(\d{4})-(\d{2})-(\d{2})/,
};
const quantity = {
  element: document.getElementById("quantity"),
  messageInvalid: "Vous devez entrer un nombre entre 0 et 99.",
  type: "string",
  regex: /[1-9]|[1-9]\d/,
};
const checkbox1 = {
  element: document.getElementById("checkbox1"),
  messageInvalid:
    "Vous devez vérifier que vous acceptez les termes et conditions.",
  type: "string",
  regex: /on/,
};

const location0 = {
  element: null,
  messageInvalid: null,
  type: "string",
  regex: /(New York)|(San Francisco)|(Seattle)|(Chicago)|(Boston)|(Portland)/,
};

const locationRadios = [
  ...Array(document.querySelectorAll("input[name=location]").length).keys(),
].reduce((acc, curr) => {
  return {
    ...acc,
    [`location${curr + 1}`]: {
      element: document.getElementById(`location${curr + 1}`),
      messageInvalid: "Vous devez choisir un tournoi.",
    },
  };
}, {});

const nbOfInputsToCheck = 7;
const inputs = {
  first: firstName,
  last: lastName,
  email: email,
  birthdate: birthdate,
  quantity: quantity,
  checkbox1: checkbox1,
  location: location0,
  ...locationRadios,
};

/******************************************************************/
/**************************** JS EXECUTION ***********************/

// Launch modal event listener
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event listener
closeBg.addEventListener("click", closeModal);
closeBgButton.addEventListener("click", closeModal);

// FORM validation
for (const input in inputs) {
  checkValidityOnEvent("change", inputs[input]);
  checkValidityOnEvent("invalid", inputs[input]);
}

document.querySelector("form").addEventListener("submit", function (e) {
  // Send API request ...
  // POST https://gameon.api...

  // Display acknoledgment message
  modalBgConfirm.classList.add("confirm-displayed");
});
