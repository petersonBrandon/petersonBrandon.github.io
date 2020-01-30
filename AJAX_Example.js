function Dog(breed, weight, size){
    this.breed = breed;
    this.weight = weight;
    this.size = size;
}

function Cat(breed, weight, size){
    this.breed = breed;
    this.weight = weight;
    this.size = size;
}

function Bunny(breed, weight, size){
    this.breed = breed;
    this.weight = weight;
    this.size = size;
}

function Bird(breed, weight, size){
    this.breed = breed;
    this.weight = weight;
    this.size = size;
}

function Hamster(breed, weight, size){
    this.breed = breed;
    this.weight = weight;
    this.size = size;
}

function GuineaPig(breed, weight, size){
    this.breed = breed;
    this.weight = weight;
    this.size = size;
}


function getMoreInfo(dog, cat, bunny, bird, hamster, guineaPig){
    var dogSec = document.getElementById("dogInput");
    var catSec = document.getElementById("catInput");
    var bunnySec = document.getElementById("bunnyInput");
    var birdSec = document.getElementById("birdInput");
    var hamsterSec = document.getElementById("hamsterInput");
    var guineaPigSec = document.getElementById("guineaPigInput");

    // Dog info
    if (dogSec.style.display == "none" && dog == true){
        dogSec.style.display = "block";
    }
    else {
        dogSec.style.display = "none";
    }

    // Cat info
    if (catSec.style.display == "none" && cat == true){
        catSec.style.display = "block";
    }
    else {
        catSec.style.display = "none";
    }

    // Bunny info
    if (bunnySec.style.display == "none" && bunny == true){
        bunnySec.style.display = "block";
    }
    else {
        bunnySec.style.display = "none";
    }

    // Bird info
    if (birdSec.style.display == "none" && bird == true){
        birdSec.style.display = "block";
    }
    else {
        birdSec.style.display = "none";
    }

    // Hamster info
    if (hamsterSec.style.display == "none" && hamster == true){
        hamsterSec.style.display = "block";
    }
    else {
        hamsterSec.style.display = "none";
    }

    // Guinea Pig info
    if (guineaPigSec.style.display == "none" && guineaPig == true){
        guineaPigSec.style.display = "block";
    }
    else {
        guineaPigSec.style.display = "none";
    }
}

function resetRadio(dog, cat, bunny, bird, hamster, guineaPig){
    var dogBreed = document.getElementsByName("dogBreed");
    var catBreed = document.getElementsByName("catBreed");
    var bunnyBreed = document.getElementsByName("bunnyBreed");
    var birdBreed = document.getElementsByName("birdBreed");
    var hamsterBreed = document.getElementsByName("hamsterBreed");
    var guineaPigBreed = document.getElementsByName("guineaPigBreed");
    
    if(dog == true){
        for(var i = 0; i < 3; i++){
            catBreed[i].checked = false;
            bunnyBreed[i].checked = false;
            birdBreed[i].checked = false;
            hamsterBreed[i].checked = false;
            guineaPigBreed[i].checked = false;
        }
    }
    if(cat == true){
        for(var i = 0; i < 3; i++){
            dogBreed[i].checked = false;
            bunnyBreed[i].checked = false;
            birdBreed[i].checked = false;
            hamsterBreed[i].checked = false;
            guineaPigBreed[i].checked = false;
        }
    }
    if(bunny == true){
        for(var i = 0; i < 3; i++){
            dogBreed[i].checked = false;
            catBreed[i].checked = false;
            birdBreed[i].checked = false;
            hamsterBreed[i].checked = false;
            guineaPigBreed[i].checked = false;
        }
    }
    if(bird == true){
        for(var i = 0; i < 3; i++){
            dogBreed[i].checked = false;
            catBreed[i].checked = false;
            bunnyBreed[i].checked = false;
            hamsterBreed[i].checked = false;
            guineaPigBreed[i].checked = false;
        }
    }
    if(hamster == true){
        for(var i = 0; i < 3; i++){
            dogBreed[i].checked = false;
            catBreed[i].checked = false;
            bunnyBreed[i].checked = false;
            birdBreed[i].checked = false;
            guineaPigBreed[i].checked = false;
        }
    }
    if(guineaPig == true){
        for(var i = 0; i < 3; i++){
            dogBreed[i].checked = false;
            catBreed[i].checked = false;
            bunnyBreed[i].checked = false;
            birdBreed[i].checked = false;
            hamsterBreed[i].checked = false;
        }
    }
}

function getInfo(){
    document.getElementById("petInfoError").innerHTML = "";
    document.getElementById("moreInputError").innerHTML = "";
    document.getElementById("petInfo").innerHTML = "";

    var select = document.getElementById("select").selected;
    var dog = document.getElementById("dog").selected;
    var cat = document.getElementById("cat").selected;
    var bunny = document.getElementById("bunny").selected;
    var bird = document.getElementById("bird").selected;
    var hamster = document.getElementById("hamster").selected;
    var guineaPig = document.getElementById("guineaPig").selected;

    resetRadio(dog, cat, bunny, bird, hamster, guineaPig);

    if(select == true){
        document.getElementById("selectError").innerHTML = "Please select an animal";
        getMoreInfo(dog, cat, bunny, bird, hamster, guineaPig);
    }
    else{
        document.getElementById("selectError").innerHTML = "";
        getMoreInfo(dog, cat, bunny, bird, hamster, guineaPig);
    }
}

function addTable(){
    document.getElementById("petInfo").innerHTML = "<tr><th>Name</th><th>Breed</th><th>Weight(lbs)</th><th>Price</th></tr>"
}

function displayAnimal(obj){
    document.getElementById("petInfo").innerHTML += "<tr><td>" + obj.name + "</td><td>" + obj.breed +"</td><td>" + obj.weight +"</td><td>" + obj.price +"</td></tr>";
}

function compareAnimals(obj, dog, cat, bunny, bird, hamster, guineaPig, newDog, newCat, newBunny, newBird, newHamster, newGuineaPig){
    
    document.getElementById("petInfoError").innerHTML = "";

    addTable();

    var inStock = 0;

    for(var i = 0; i < obj.length; i++){
        if(dog == true){
            if(obj[i].animal == "dog" && obj[i].breed == newDog.breed){
                displayAnimal(obj[i]);
                inStock++;
            }
        }
        if(cat == true){
            if(obj[i].animal == "cat" && obj[i].breed == newCat.breed){
                displayAnimal(obj[i]);
                inStock++;
            }
        }
        if(bunny == true){
            if(obj[i].animal == "bunny" && obj[i].breed == newBunny.breed){
                displayAnimal(obj[i]);
                inStock++;
            }
        }
        if(bird == true){
            if(obj[i].animal == "bird" && obj[i].breed == newBird.breed){
                displayAnimal(obj[i]);
                inStock++;
            }
        }
        if(hamster == true){
            if(obj[i].animal == "hamster" && obj[i].breed == newHamster.breed){
                displayAnimal(obj[i]);
                inStock++;
            }
        }
        if(guineaPig == true){
            if(obj[i].animal == "guinea pig" && obj[i].breed == newGuineaPig.breed){
                displayAnimal(obj[i]);
                inStock++;
            }
        }
    }
    if(inStock == 0){
        document.getElementById("petInfoError").innerHTML = "We are sorry.<br>There are currently no animals of this kind in stock.";
    }
}

function loadDatabase(dog, cat, bunny, bird, hamster, guineaPig, newDog, newCat, newBunny, newBird, newHamster, newGuineaPig){

    // Create a request
    var json = new XMLHttpRequest(); 
    
    // Once request is loaded begin
    json.onload = function() {

        // If statement:
        // 1. The ready state number 4 means the request is finished and the response is ready
        // 2. the status number 200 means everything is "OK"
        if (this.readyState === 4 && this.status === 200)
        {
            var obj = JSON.parse(this.responseText);
            compareAnimals(obj, dog, cat, bunny, bird, hamster, guineaPig, newDog, newCat, newBunny, newBird, newHamster, newGuineaPig);
        }
    }

    // Specifies the type of request
    json.open('GET', 'https://petersonbrandon.github.io/AJAXExample.json', true);
    
    // Send the request
    json.send();
}

function isValid(){
    var select = document.getElementById("select").selected;
    
    var dogBreed = document.getElementsByName("dogBreed");
    var catBreed = document.getElementsByName("catBreed");
    var bunnyBreed = document.getElementsByName("bunnyBreed");
    var birdBreed = document.getElementsByName("birdBreed");
    var hamsterBreed = document.getElementsByName("hamsterBreed");
    var guineaPigBreed = document.getElementsByName("guineaPigBreed");

    var breedIsChecked;

    if(select == true){
        document.getElementById("selectError").innerHTML = "Please select an animal";
        return false;
    }
    else{
        for(var i = 0; i < 3; i++){
            if(dogBreed[i].checked == true){
                document.getElementById("moreInputError").innerHTML = "";
                return true;
            }
            else if(catBreed[i].checked == true){
                document.getElementById("moreInputError").innerHTML = "";
                return true;
            }
            else if(bunnyBreed[i].checked == true){
                document.getElementById("moreInputError").innerHTML = "";
                return true;
            }
            else if(birdBreed[i].checked == true){
                document.getElementById("moreInputError").innerHTML = "";
                return true;
            } 
            else if(hamsterBreed[i].checked == true){
                document.getElementById("moreInputError").innerHTML = "";
                return true;
            }
            else if(guineaPigBreed[i].checked == true){
                document.getElementById("moreInputError").innerHTML = "";
                return true;
            }
            else{
                breedIsChecked = false;
            }
        }
        if(breedIsChecked == false){
            document.getElementById("moreInputError").innerHTML = "Please select a breed";
            return false;
        }
    }  
}

function setBreed(dog, cat, bunny, bird, hamster, guineaPig){
    var dogBreed = document.getElementsByName("dogBreed");
    var catBreed = document.getElementsByName("catBreed");
    var bunnyBreed = document.getElementsByName("bunnyBreed");
    var birdBreed = document.getElementsByName("birdBreed");
    var hamsterBreed = document.getElementsByName("hamsterBreed");
    var guineaPigBreed = document.getElementsByName("guineaPigBreed");

    var index = 0;

    var breed = null;
    var weight = null;
    var size = null;

    if(dog == true){
        var newDog = null;
        for(var i = 0; i < 3; i++){
            if(dogBreed[i].checked == true){
                index = i;
            }
        }
        switch(index){
            case 0:{
                breed = "German Shephard";
                weight = 75;
                size = "Medium/Big";
                newDog = new Dog(breed, weight, size);
                return newDog;
                break;
            }     
            case 1:{
                breed = "Husky";
                weight = 45;
                size = "Small/Medium";
                newDog = new Dog(breed, weight, size);
                return newDog;
                break;
            }  
            case 2:{
                breed = "Labrador";
                weight = 55;
                size = "Medium";
                newDog = new Dog(breed, weight, size);
                return newDog;
                break;
            } 
        }
    }
    else if(cat == true){
        var newCat = null;
        for(var i = 0; i < 3; i++){
            if(catBreed[i].checked == true){
                index = i;
            }
        }
        switch(index){
            case 0:{
                breed = "Tabby";
                weight = 8.6;
                size = "Small";
                newCat = new Cat(breed, weight, size);
                return newCat;
                break;
            }     
            case 1:{
                breed = "Bengal";
                weight = 8;
                size = "Small";
                newCat = new Cat(breed, weight, size);
                return newCat;
                break;
            }  
            case 2:{
                breed = "Siamese";
                weight = 6.5;
                size = "Small";
                newCat = new Cat(breed, weight, size);
                return newCat;
                break;
            } 
        }
    }
    else if(bunny == true){
        var newBunny = null;
        for(var i = 0; i < 3; i++){
            if(bunnyBreed[i].checked == true){
                index = i;
            }
        }
        switch(index){
            case 0:{
                breed = "Newfoundland Dwarf";
                weight = 2.5;
                size = "Extra Small";
                newBunny = new Bunny(breed, weight, size);
                return newBunny;
                break;
            }     
            case 1:{
                breed = "Flemish Giant";
                weight = 15;
                size = "Small/Medium";
                newBunny = new Bunny(breed, weight, size);
                return newBunny;
                break;
            }  
            case 2:{
                breed = "Lionhead";
                weight = 3;
                size = "Extra Small";
                newBunny = new Bunny(breed, weight, size);
                return newBunny;
                break;
            } 
        }
    }
    else if(bird == true){
        var newBird = null;
        for(var i = 0; i < 3; i++){
            if(birdBreed[i].checked == true){
                index = i;
            }
        }
        switch(index){
            case 0:{
                breed = "Parakeet";
                weight = 0.2;
                size = "Extra Small";
                newBird = new Bird(breed, weight, size);
                return newBird;
                break;
            }     
            case 1:{
                breed = "Cockatoo";
                weight = 1.7;
                size = "Extra Small";
                newBird = new Bird(breed, weight, size);
                return newBird;
                break;
            }  
            case 2:{
                breed = "Parrot";
                weight = 0.41;
                size = "XXSmall";
                newBird = new Bird(breed, weight, size);
                return newBird;
                break;
            } 
        }
    }
    else if(hamster == true){
        var newHamster = null;
        for(var i = 0; i < 3; i++){
            if(hamsterBreed[i].checked == true){
                index = i;
            }
        }
        switch(index){
            case 0:{
                breed = "Syrian";
                weight = 0.26;
                size = "XXSmall";
                newHamster = new Hamster(breed, weight, size);
                return newHamster;
                break;
            }     
            case 1:{
                breed = "Dwarf Campbell Russian";
                weight = 0.125;
                size = "XXSmall";
                newHamster = new Hamster(breed, weight, size);
                return newHamster;
                break;
            }  
            case 2:{
                breed = "Dwarf Winter White Russian";
                weight = 0.06;
                size = "XXXSmall";
                newHamster = new Hamster(breed, weight, size);
                return newHamster;
                break;
            } 
        }
    }
    else if(guineaPig == true){
        var newGuineaPig = null;
        for(var i = 0; i < 3; i++){
            if(guineaPigBreed[i].checked == true){
                index = i;
            }
        }
        switch(index){
            case 0:{
                breed = "Peruvian";
                weight = 2.2;
                size = "Small";
                newGuineaPig = new GuineaPig(breed, weight, size);
                return newGuineaPig;
                break;
            }     
            case 1:{
                breed = "Abyssinian";
                weight = 2.6;
                size = "Small";
                newGuineaPig = new GuineaPig(breed, weight, size);
                return newGuineaPig;
                break;
            }  
            case 2:{
                breed = "Teddy";
                weight = 2;
                size = "Small";
                newGuineaPig = new GuineaPig(breed, weight, size);
                return newGuineaPig;
                break;
            } 
        }
    }
}

function setAnimal(){
    var dog = document.getElementById("dog").selected;
    var cat = document.getElementById("cat").selected;
    var bunny = document.getElementById("bunny").selected;
    var bird = document.getElementById("bird").selected;
    var hamster = document.getElementById("hamster").selected;
    var guineaPig = document.getElementById("guineaPig").selected;

    if(isValid() == true){

        var newDog;
        var newCat;
        var newBunny;
        var newBird;
        var newHamster;
        var newGuineaPig;

        if(dog == true){
            newDog = setBreed(dog, cat, bunny, bird, hamster, guineaPig);
        }
        else if(cat == true){
            newCat = setBreed(dog, cat, bunny, bird, hamster, guineaPig);
        }
        else if(bunny == true){
            newBunny = setBreed(dog, cat, bunny, bird, hamster, guineaPig);
        }
        else if(bird == true){
            newBird = setBreed(dog, cat, bunny, bird, hamster, guineaPig);
        }
        else if(hamster == true){
            newHamster = setBreed(dog, cat, bunny, bird, hamster, guineaPig);
        }
        else if(guineaPig == true){
            newGuineaPig = setBreed(dog, cat, bunny, bird, hamster, guineaPig);
        }

        loadDatabase(dog, cat, bunny, bird, hamster, guineaPig, newDog, newCat, newBunny, newBird, newHamster, newGuineaPig);

    }
}