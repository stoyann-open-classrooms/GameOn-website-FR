
// DOM Elements
const modalbg = document.querySelector(".bground");
const form = document.querySelector("#formulaire");
const modalBtn = document.querySelectorAll(".modal-btn");
const validationOk = document.querySelector('.reservation-ok');
const close = document.querySelector (".close");
const closeBtn = document.querySelectorAll(".close, .btn-close");
const submitBTN = document.querySelector(".btn-submit");
const errorAlert = document.querySelectorAll(".message-alerte")
const iconeBurger = document.querySelector(".icon");





form.first.addEventListener("input", (e) => {

  if(e.target.value.length < 2){
    errorAlert[0].style.display = "block"
  }else {
    
    errorAlert[0].style.display = "none"
    return true
    
  }
})



form.last.addEventListener("input", (e) => {

  if(e.target.value.length < 2){
    errorAlert[1].style.display = "block"
  }else {
    
    errorAlert[1].style.display = "none"
    return true
    
  }
})





// ecouter les modifications de l'input mail

form.email.addEventListener('change', function() {
  validEmail(this);
})


// verification de l'email (renvoie true ou false)

const validEmail = function(inputEmail){
  let emailRegex= new RegExp (/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);

  let testEmail = emailRegex.test(inputEmail.value);
  if(testEmail == false) {
    
    errorAlert[2].style.display = "block"
    
  } else{
    
    errorAlert[2].style.display = "none"
  };
};





// animation naviguation
iconeBurger.addEventListener ("click", editNav );
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
 
submitBTN.addEventListener("submit",  (e) => {
      
  
 

});





















































