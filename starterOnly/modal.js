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
const close =document.querySelector (".close");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal

close.addEventListener("click", closeModal);




// Fonctions


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};


function closeModal() {
  modalbg.style.display = "none";
 
};




