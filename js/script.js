let firstName = document.querySelector(".firstName");
let lastName = document.querySelector(".lastName");
let email = document.querySelector(".email");
let date = document.querySelector(".date");
let address = document.querySelector(".address");
let gender =document.getElementsByName("gender");


let fNameErr = document.querySelector(".fNameErr");
let lNameErr = document.querySelector(".lNameErr");
let emailErr = document.querySelector(".emailErr");
let genderErr = document.querySelector(".genderErr");
let dateErr = document.querySelector(".dateErr");
let addErr = document.querySelector(".addErr");


let submit = document.querySelector(".submit");
let mail_valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submit.addEventListener("click", function () {

    // ============  First name validation =========
    if (firstName.value == "") {
        fNameErr.innerHTML = "Pls! Type your first name.";
        firstName.style.background = "#f0a5a8";
    } else {
        fNameErr.innerHTML = "";
        firstName.style.background = "none";
    }

    // ============  last name validation =========

    if (lastName.value == "") {
        lNameErr.innerHTML = "Pls! Type your last name.";
        lastName.style.background = "#f0a5a8";

    } else {
        lNameErr.innerHTML = "";
        lastName.style.background = "none";

    }

    // ============  email validation =========

    if (email.value == "") {
        emailErr.innerHTML = "Pls! Type your email address.";
        email.style.background = "#f0a5a8";

    } else {
        emailErr.innerHTML = "";
        email.style.background = "none";

        if(email.value.match(mail_valid)){
            emailErr.innerHTML =""
        }else{
            
            emailErr.innerHTML ="Pls! Check your email format."
            
        }
        
    }

    // ============  gender validation =========
    if (!(gender[0].checked || gender[1].checked)) {
        genderErr.innerHTML="Pls! Select Your Gender";
        
    }else{
        genderErr.innerHTML="";
        
    }
    // if (male || female == checked) {
    //     genderErr.innerHTML = "Pls! Select your gender.";
    //     male.style.background = "#f0a5a8";

    // } else {
    //     genderErr.innerHTML = "";
    //     male.style.background = "none";

    // }
    // ============  birth validation =========
    if (date.value == "") {
        dateErr.innerHTML = "Pls! Select your birthday.";
        date.style.background = "#f0a5a8";

    } else {
        dateErr.innerHTML = "";
        date.style.background = "none";

    }
    // ============  address validation =========
    if (address.value == "") {
        addErr.innerHTML = "Pls! Type your address.";
        address.style.background = "#f0a5a8";

    } else {
        addErr.innerHTML = "";
        address.style.background = "none";

    }

});