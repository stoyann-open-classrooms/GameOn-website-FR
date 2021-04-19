// DOM Elements 

const modalbg = document.querySelector(".bground");
const form = document.querySelector("#formulaire");
const modalBtn = document.querySelectorAll(".modal-btn");
const validationOk = document.querySelector(".reservation-ok");
const close = document.querySelector(".close");
const closeBtn = document.querySelectorAll(".close, .btn-close");
const errorAlert = document.querySelectorAll(".message-alerte");
const iconeBurger = document.querySelector(".icon");
const formData = document.querySelectorAll(".form-data");
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const conditions = document.querySelector("#checkbox1");
const citys = document.querySelectorAll(".checkbox-input");
let tabValue = [];

// recuperation de la date du jour
const todayDate = new Date().toISOString().split("T")[0];
// impossible de mettre une date dans le futur
form.birthdate.max = todayDate;

//  navigation

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

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

let validFirst = false;
let validLast = false;
let validMail = false;
let validDate = false;
let validQuantity = false;
let validCity = false;
let validConditions = false;
let validAge = false;

// fonctions verfification des inputs

function verifFirst() {
  let regexFirst = /^[a-zA-ZÀ-Ÿà-ÿ-\s]+$/; //uniquement des lettres majuscules ou minuscules les tirets et les espaces
  if (regexFirst.exec(first.value) === null || first.length < 2) {
    errorAlert[0].style.display = "block";
    first.classList.add("echec");
    first.classList.add("border");

    setTimeout(() => {
      first.classList.remove("echec");
    }, 500);
    return (validFirst = false);
  } else {
    first.classList.remove("border");

    errorAlert[0].style.display = "none";
    tabValue.push(first.value);
    return (validFirst = true);
  }
}

function verifLast() {
  let regexLast = /^[a-zA-ZÀ-Ÿà-ÿ-\s]+$/;
  if (regexLast.exec(last.value) === null || last.lenght < 2) {
    errorAlert[1].style.display = "block";
    last.classList.add("echec");
    last.classList.add("border");

    setTimeout(() => {
      last.classList.remove("echec");
    }, 500);

    return (validLast = false);
  } else {
    last.classList.remove("border");

    errorAlert[1].style.display = "none";
    tabValue.push(last.value);
    return (validLast = false);
  }
}

function verifMail() {
  let regexMail = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;
  if (regexMail.exec(email.value) === null) {
    errorAlert[2].style.display = "block";
    email.classList.add("border");

    email.classList.add("echec");
    setTimeout(() => {
      email.classList.remove("echec");
    }, 500);

    return (validMail = false);
  } else {
    email.classList.remove("border");

    errorAlert[2].style.display = "none";
    tabValue.push(email.value);
    return (validMail = true);
  }
}

function verifDate() {
  let regexDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  const currentYear = new Date().getFullYear();
  const userYear = birthdate.value.split("-")[0];
  if (
    regexDate.exec(birthdate.value) === null ||
    !birthdate.value ||
    userYear > currentYear - 18
  ) {
    errorAlert[3].style.display = "block";
    birthdate.classList.add("border");

    birthdate.classList.add("echec");
    setTimeout(() => {
      birthdate.classList.remove("echec");
    }, 500);
    return (validDate = false);
  } else {
    birthdate.classList.remove("border");

    errorAlert[3].style.display = "none";
    tabValue.push(birthdate.value);
    return (validDate = true);
  }
}

function quantityVerif() {
  if (!quantity.value || isNaN(quantity.value)) {
    errorAlert[4].style.display = "block";
    quantity.classList.add("border");

    quantity.classList.add("echec");
    setTimeout(() => {
      quantity.classList.remove("echec");
    }, 500);
    return (validQuantity = false);
  } else {
    quantity.classList.remove("border");

    errorAlert[4].style.display = "none";
    tabValue.push(quantity.value);
    return (validQuantity = true);
  }
}

function verifCity() {
  if (
    !(
      citys[0].checked ||
      citys[1].checked ||
      citys[2].checked ||
      citys[3].checked ||
      citys[4].checked ||
      citys[5].checked
    )
  ) {
    errorAlert[5].style.display = "block";
    return (validCity = false);
  } else {
    errorAlert[5].style.display = "none";

    return (validCity = true);
  }
}

function verifConditions() {
  if (!conditions.checked) {
    errorAlert[6].style.display = "block";

    return (validConditions = false);
  } else {
    errorAlert[6].style.display = "none";
    tabValue.push("CGU-OK");
    return (validConditions = true);
  }
}

function newsLetter() {
  const letter = document.querySelector("#checkbox2");
  if (letter.checked) {
    tabValue.push("mailling-list = true");
  } else {
    tabValue.push("mailling-list = false");
  }
};
// fonction verification si formulaire valide

function isValid(event) {
  event.preventDefault();

  verifFirst();
  verifLast();
  verifMail();
  verifDate();
  quantityVerif();
  verifCity();
  verifConditions();
  newsLetter();

  if (
   
    validFirst === true &&
    validMail === true &&
    validDate === true &&
    validQuantity === true &&
    validCity === true &&
    validConditions === true
  ) 
  
  // retour des valeurs entrée par l'utilisatteur dans un tableaux clefs valeurs 
  {
    let datas = new FormData(form);
    for (let i of datas.entries()) {
      console.log(i[0], ":", i[1]);
    }

    validationOk.style.display = "flex";
  }
}

formulaire.addEventListener("submit", isValid);
