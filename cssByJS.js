var page;

function showInfo(num, type){

    page = type;

    console.log(page);
    switch(num){
        case 1:
            showAbout();
            break;
        case 2:
            showProjects();
            break;
        case 3:
            showContact();
            break;
    }
}

function showAbout(){
    var aboutSec = document.getElementById("about");
    var projectSec = document.getElementById("project");
    var contactSec = document.getElementById("contact");
    var header = document.getElementById("header");

    
    if(aboutSec.className != page) {
        projectSec.className = 'start';
        contactSec.className = 'start';
        aboutSec.className = page;
        header.style.backgroundColor = 'rgb(130, 234, 255)';
    }

    var aboutHeading = document.getElementById("aboutHeading");
    var aboutContents = document.getElementById("aboutContents");
    aboutHeading.innerHTML = "About Us";

    aboutContents.style.fontSize = "0.5em";
    aboutContents.style.fontFamily = "consolas";
}

function showProjects(){
    var aboutSec = document.getElementById("about");
    var projectSec = document.getElementById("project");
    var contactSec = document.getElementById("contact");
    var header = document.getElementById("header");

    if(projectSec.className != page){
        aboutSec.className = 'start';
        contactSec.className = 'start';
        projectSec.className = page;
        header.style.backgroundColor = 'rgb(217, 91, 91)';
    }

    var projectHeading = document.getElementById("projectHeading");
    var projectContents = document.getElementById("projectContents");
    
    projectHeading.innerHTML = "Projects";

    projectContents.style.fontSize = '0.3em';
    projectContents.style.fontFamily = 'Arial';
}

function showContact(){
    var aboutSec = document.getElementById("about");
    var projectSec = document.getElementById("project");
    var contactSec = document.getElementById("contact");
    var header = document.getElementById("header");

    var contactHeading = document.getElementById("contactHeading");
    if(contactSec.className != page){
        contactSec.className = page;
        aboutSec.className = 'start';
        projectSec.className = 'start';
        header.style.backgroundColor = 'rgb(135, 247, 134)';
    } 
    
    contactHeading.innerHTML = "Contact Us";
}

var isReset = false;

function moveText(){

    var aboutSection = document.getElementById("aboutSection");

    console.log(isReset);
    if(isReset == false){
        isReset = true;
        aboutSection.style.animationName = 'sectionSpin';
        aboutSection.style.animationDuration = '5s'; 
    }
    else{
        aboutSection.style.animationName = '';
        isReset = false;
    }  
}