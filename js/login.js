let email = document.querySelector(".email");
let pass = document.querySelector(".pass");


let emailErr = document.querySelector(".emailErr");
let passErr = document.querySelector(".passErr");

let submit = document.querySelector(".submit");

submit.addEventListener("click", function () {

    // =========== email validation======= 
    if (!email.value) {
        emailErr.innerHTML = "Enter your email address.";
        email.style.background = "#f7f7f7";
    } else {
        emailErr.innerHTML = "";
        email.style.background = "unset";

    }

    // ======== password validation ============
    if (!pass.value) {
        passErr.innerHTML = "Enter your password."
        pass.style.background = "#f7f7f7";

    } else {
        passErr.innerHTML = ""
        pass.style.background = "unset";
        if (pass.value.length >= 8) {
            passErr.innerHTML = ""
            pass.style.background = "unset";

        } else {
            passErr.innerHTML = "Password length minimum 8 character.";
            pass.style.background = "#f7f7f7";


        }
    }

});