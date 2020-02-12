var buttonAdded = false;
var buttonClicked = 0;

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

        name.innerHTML = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
        document.getElementById("account").appendChild(name);

        //Display the Phone
        var phone = document.createElement("DIV");
        var phone2 = document.createElement("DIV");

        phone.setAttribute("class", "flexInfo");
        phone.setAttribute("id", "phoneInfo");
        phone2.setAttribute("class", "info");

        phone2.innerHTML = localStorage.getItem("phone");
        phone.innerHTML = "Phone Number:";              
        document.getElementById("account").appendChild(phone);
        document.getElementById("phoneInfo").appendChild(phone2);

        //Display the Email
        var email = document.createElement("DIV");
        var email2 = document.createElement("DIV");

        email.setAttribute("class", "flexInfo");
        email.setAttribute("id", "emailInfo");
        email2.setAttribute("class", "info");

        email2.innerHTML = localStorage.getItem("email");
        email.innerHTML = "Email:";              
        document.getElementById("account").appendChild(email);
        document.getElementById("emailInfo").appendChild(email2);

        //Display the Computer
        var comp = document.createElement("DIV");
        var comp2 = document.createElement("DIV");

        comp.setAttribute("class", "flexInfo");
        comp.setAttribute("id", "compInfo");
        comp2.setAttribute("class", "info");

        comp2.innerHTML = localStorage.getItem("computerName");
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

    localStorage.setItem("firstName", fName);
    localStorage.setItem("lastName", lName);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("computerName", cName);

    setAccountInfo(true);
}