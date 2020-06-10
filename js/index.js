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
