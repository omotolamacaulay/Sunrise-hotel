// codes for the functionalities goes here.
//Start Menu-header area function
let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
let arrayLength = getSidebarLinks.length;

let addActive = function(){
    let currentUrl = location.href;
    for(let i=0; i < arrayLength; i++){
        if(getSidebarLinks[i].href === currentUrl){
            getSidebarLinks[i].className = "active";
        }
    }
}
addActive();

//End Menu-header area function

// RegEx
document.getElementById('first-name').addEventListener('blur', validateFirstName);
document.getElementById('last-name').addEventListener('blur', validateLastName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('message').addEventListener('blur', validateMessage);

function validateFirstName(){
    const firstName = document.getElementById('first-name');
    const re = /^[a-zA-Z]{2,15}$/;
    console.log(firstName.value);

    if(!re.test(firstName.value)){
        firstName.classList.add('is-invalid');
    } else {
        firstName.classList.remove('is-invalid');
    }
};

function validateLastName(){
    const lastName = document.getElementById('last-name');
    const re = /^[a-zA-Z]{2,15}$/;

    if(!re.test(lastName.value)){
        lastName.classList.add('is-invalid');
    } else {
        lastName.classList.remove('is-invalid');
    }
};

function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
};

function validateMessage(){
    const message = document.getElementById('message');
    const re = /^([a-zA-Z0-9_\-\. ]+){2,200}$/;

    if(!re.test(message.value)){
        message.classList.add('is-invalid');
    } else {
        message.classList.remove('is-invalid');
    }
};