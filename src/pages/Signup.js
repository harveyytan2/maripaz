import React from 'react'

function Signup() {
  return (
    
      <div className="bg">
      <form name="Form" onSubmit={validateForm} className="form">
        <h2>Sign Up</h2>

        <div className="box">
            <label>Full Name:</label>
            <input type="text" name="name" id="name"/>
            <div className="error" id="nameErr"></div>
        </div>

        <div className="box">
            <label>Email:</label>
            <input type="text" name="email" id="email"/>
            <div className="error" id="emErr"></div>
        </div>

        <div className="box">
            <label>Contact Number:</label>
            <input type="text" name="contact" id="contact"/>
            <div className="error" id="numErr"></div>
        </div>

        <div className="box">
            <label>Password:</label>
            <input type="password" name="password" id="password"/>
            <div className="error" id="passErr"></div>
        </div>

        <div className="box">
            <label>Confirm Password:</label>
            <input type="password" name="confirm" id="confirm"/>
            <div className="error" id="conErr"></div>
        </div>

        <div className="box">
            <input type="submit" value="Register" id="submit" onClick={handleButtonClick} />
        </div>

      </form>
    </div>
    
  )
}
function handleButtonClick(e) {
    validateForm(e);
    matchPassword();
}

function printError(Id, Msg) {
    var element = document.getElementById(Id);
    if (element) {
        element.innerHTML = Msg;
    }
}
function validateForm(e){
    e.preventDefault();
    var name =document.Form.name.value;
    var email =document.Form.email.value;
    var contact =document.Form.contact.value;
    var password =document.Form.password.value;
    var confirm =document.Form.confirm.value;

    var nameErr = true;
    var emErr = true;
    var numErr = true;
    var passErr = true;
    var conErr = true;

    if(name == ""){
        printError("nameErr","Please enter your name");
        var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else{
        var regex = /^[a-zA-Z\s\.]+$/;
        if(regex.test(name) === false){
            printError("nameErr", "Please enter valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }


    if(email == ""){
        printError("emErr","Please enter your email adress");
        var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false){
            printError("emErr","Please enter valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("emErr","");
            emErr = false;
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }

    if(contact == ""){
        printError("numErr","Please enter your contact number");
        var elem = document.getElementById("contact");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else{
        var regex = /^[1-10]\d{10}$/;
        if(regex.test(contact) === false){
            printError("numErr","Please enter valid 11 digit number");
            var elem = document.getElementById("contact");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("numErr","");
            numErr = false;
            var elem = document.getElementById("contact");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }
    
}
function matchPassword(){
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    
    printError("passErr","");

    if(password === ""){
        printError("passErr","Please enter your password");
        updateInputStyle("password","input-2")
    }else if(confirm !== password){
        printError("conErr","Password do not match")
        updateInputStyle("confirm","input-2")
    }else{
        printError("conErr","")
        updateInputStyle("password","input-1")
        updateInputStyle("confirm","input-1")

    }
}
function updateInputStyle(id, className){
    var elem = document.getElementById(id);
    elem.classList.add(className);
    elem.classList.remove("input-1");
}

export default Signup
