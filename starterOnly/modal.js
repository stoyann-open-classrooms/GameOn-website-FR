
// DOM Elements
const modalbg = document.querySelector(".bground");
const form = document.querySelector("#formulaire");
const modalBtn = document.querySelectorAll(".modal-btn");
const validationOk = document.querySelector('.reservation-ok');
const close = document.querySelector (".close");
const closeBtn = document.querySelectorAll(".close, .btn-close");
const errorAlert = document.querySelectorAll(".message-alerte")
const iconeBurger = document.querySelector(".icon");
const anneeDeNaissance = document.querySelector("#birthdate")


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






// animation naviguation
iconeBurger.addEventListener ("click", editNav );
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal
// click : close modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));








function verifFirst() {
 
  if (form.first.value === "" || form.first.length < 2){
  
    errorAlert[0].style.display = "block";
    
    return false;
  
  } else { 
    errorAlert[0].style.display = "none";
    return  true
  }

}



function verifLast() {

  if (form.last.value === "" || form.last.value < 2) {
  
    errorAlert[1].style.display = "inline";
   
    return false;
  
  } else {
    errorAlert[1].style.display = "none";
    return true

  }
}



function verifMAil() {


  // verification email
  
  let regexMail = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;
  
  if(regexMail.exec(form.email.value) === null) {
    
    errorAlert[2].style.display = "block"; 
    
    return false;
    
  } else {
    
    errorAlert[2].style.display = "none";
    return true
    
    
  }
  
}


// verification de la date

 
// recuperation de la date du jour
const todayDate = new Date().toISOString().split('T')[0];
// recuperation de l'annee 
const currentYear = new Date().getFullYear();
// impossible de mettre une date dans le futur
form.birthdate.max = todayDate;




function verifTournament(alert) {


  let inputTournament = document.querySelector("#quantity");
  
  if( inputTournament.value == "") {
    
    errorAlert[4].style.display = "block"; 
    return false;
    
  } else {
    
    errorAlert[4].style.display = "none";
    return true
  }
  
}





 let tournamentBool = verifTournament();
 let firstbool= verifFirst();
let lastBool = verifLast();
 let mailBool = verifMAil();


formulaire.addEventListener('submit' , (e) => {

  e.preventDefault();


validationOk.style.display="flex";


 });

