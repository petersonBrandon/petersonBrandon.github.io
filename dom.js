var buttonAdded = false;
var buttonClicked = 0;

function Person(fName, lName, phone, email, cType){
    this.firstName = fName;
    this.lastName = lName;
    this.phone = phone;
    this.email = email;
    this.computerType = cType;
}

function addButton(){
    buttonClicked = 0;
    var btn = document.createElement("INPUT");
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "Submit Info");
    btn.setAttribute("onClick", "submitInfo()");
    document.getElementById("button").appendChild(btn);
}

function checkForm(){
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var cName = document.getElementById("computerName").value;

    if (fName != "" && lName != "" && phone != "" && email != "" && cName != "" && buttonAdded == false){
        addButton();
        buttonAdded = true;
    }
    else{
        return false;
        buttonAdded = false;
    }
}

function setAccountInfo(isNewInfo){
   
    var obj = JSON.parse(localStorage.getItem("person"));

    buttonClicked++;
    
    if(isNewInfo == true){
        document.getElementById("account").innerHTML = "";
    }

    if(localStorage.length == 0){
        document.getElementById("account").innerHTML = "You have not previously submitted information";
    }
    else if(buttonClicked == 1){
        //Display the name
        var name = document.createElement("DIV");

        name.setAttribute("id", "name");

        name.innerHTML = obj.firstName + " " + obj.lastName;
        document.getElementById("account").appendChild(name);

        //Display the Phone
        var phone = document.createElement("DIV");
        var phone2 = document.createElement("DIV");

        phone.setAttribute("class", "flexInfo");
        phone.setAttribute("id", "phoneInfo");
        phone2.setAttribute("class", "info");

        phone2.innerHTML = obj.phone;
        phone.innerHTML = "Phone Number:";              
        document.getElementById("account").appendChild(phone);
        document.getElementById("phoneInfo").appendChild(phone2);

        //Display the Email
        var email = document.createElement("DIV");
        var email2 = document.createElement("DIV");

        email.setAttribute("class", "flexInfo");
        email.setAttribute("id", "emailInfo");
        email2.setAttribute("class", "info");

        email2.innerHTML = obj.email;
        email.innerHTML = "Email:";              
        document.getElementById("account").appendChild(email);
        document.getElementById("emailInfo").appendChild(email2);

        //Display the Computer
        var comp = document.createElement("DIV");
        var comp2 = document.createElement("DIV");

        comp.setAttribute("class", "flexInfo");
        comp.setAttribute("id", "compInfo");
        comp2.setAttribute("class", "info");

        comp2.innerHTML = obj.computerType;
        comp.innerHTML = "Computer:";              
        document.getElementById("account").appendChild(comp);
        document.getElementById("compInfo").appendChild(comp2);

        //Display completion
        var completion = document.createElement("DIV");

        completion.innerHTML = "Repair info has been sucessfully submitted!";

        document.getElementById("account").appendChild(completion);
    }
}

function submitInfo(){

    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var cName = document.getElementById("computerName").value;

    var person = new Person(fName, lName, phone, email, cName);

    var json = JSON.stringify(person);

    console.log(json);
    
    localStorage.setItem("person", json);

    setAccountInfo(true);
}