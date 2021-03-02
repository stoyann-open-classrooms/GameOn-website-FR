
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const valdationOk = document.querySelector('.reservation-ok');
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
const close =document.querySelector (".close");
const closeBtn = document.querySelectorAll(".close, .btn-close");


// regex validation

const nameRegex = /^([A-Za-zÀ-ÿ][-,a-z. ']+[ ]*)+$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numberRegex = /^[0-9]*$/;



// change : first name input
form.first.addEventListener("change", function() {
    validFirstName(this);
});




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal
// click : close modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));


// Fonctions

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// launch modal form
function launchModal() {
  modalbg.style.display = "block";

};


function closeModal() {
  modalbg.style.display = "none";

};

// comportement par defaut du submit none
 
form.addEventListener("submit", function (e) {
  e.preventDefault();
});





































