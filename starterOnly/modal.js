// DOM Elements
const modalbg = document.querySelector(".bground");
const form = document.querySelector("#formulaire");
const modalBtn = document.querySelectorAll(".modal-btn");
const validationOk = document.querySelector(".reservation-ok");
const close = document.querySelector(".close");
const closeBtn = document.querySelectorAll(".close, .btn-close");
const errorAlert = document.querySelectorAll(".message-alerte");
const iconeBurger = document.querySelector(".icon");

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const conditions = document.querySelector("#checkbox1");
const city = document.querySelectorAll(".checkbox-label");
// recuperation de la date du jour
const todayDate = new Date().toISOString().split("T")[0];

// impossible de mettre une date dans le futur
form.birthdate.max = todayDate;

// recuperation de l'annee
const currentYear = new Date().getFullYear();

//  navigation

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// animation naviguation
iconeBurger.addEventListener("click", editNav);

// function  launch & close modal  form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal
// click : close modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

const validForm = false;

// fonction verfification des inputs

function verifInputs() {
  let verifName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;

  // verification du nom et prenom

  if (verifName.exec(first.value) === null || first.length < 2) {
    errorAlert[0].style.display = "block";
    validForm === false;
  } else {
    errorAlert[0].style.display = "none";
  }

  if (verifName.exec(last.value) === null || last.length < 2) {
    errorAlert[1].style.display = "block";
    return validForm === false;
  } else {
    errorAlert[1].style.display = "none";
  }

  // verification du Mail

  let regexMail = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;

  if (regexMail.exec(email.value) === null) {
    errorAlert[2].style.display = "block";
    return validForm === false;
  } else {
    errorAlert[2].style.display = "none";
  }

  //  verification de la date

  let regexDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

  if (regexDate.exec(birthdate.value) === null || !birthdate.value) {
    errorAlert[3].style.display = "block";
    validForm === false;
  } else {
    errorAlert[3].style.display = "none";
  }

  // verification quantité

  if (!quantity.value || isNaN(quantity.value)) {
    errorAlert[4].style.display = "block";
    validForm === false;
  } else {
    errorAlert[4].style.display = "none";
  }

  // verifier si au moins une case est cocher

  if ( !city.value || city == ""
    ) {
      errorAlert[5].style.display = "block";
      validForm === false;
      console.log(city);
    } else {
      errorAlert[5].style.display = "none";
      console.log(city);
  }

  
  if (!conditions.checked) {
    errorAlert[6].style.display = "block";
    validForm === false;
  } else {
    errorAlert[6].style.display = "none";
   }

  validForm = true;
}

function isValid(event) {
  event.preventDefault();

  verifInputs();
  
  if (validForm === true) {

   

   
    // form.style.display="none";
    validationOk.style.display = "flex";
    console.log(form.input);
  } else {
    return false;
  }
}

formulaire.addEventListener("submit", isValid);
