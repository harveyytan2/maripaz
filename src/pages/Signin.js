import React from 'react'

function Signin() {
  return (
    
      <div className="bg">
    <form name="Form" onSubmit={validateForm} className="form">
      <h2>Sign In</h2>

      

      <div className="box">
          <label>Email:</label>
          <input type="text" name="email" id="email"/>
          <div className="error" id="emErr"></div>
      </div>

      

      <div className="box">
          <label>Password:</label>
          <input type="password" name="password" id="password"/>
          <div className="error" id="passErr"></div>
      </div>
        <div className="box">
            <h5>Doesnt have an accout? <a href="/signup">Click here</a></h5>
        </div>
      

      <div className="box">
          <input type="submit" value="Login" id="submit" />
      </div>
      

    </form>
  </div>

  )
}
function printError(Id, Msg) {
    var element = document.getElementById(Id);
    if (element) {
        element.innerHTML = Msg;
    }
  }
  function validateForm(e){
    e.preventDefault();
    
    var email =document.Form.email.value;
    var password =document.Form.password.value;
    var emErr = true;
    var passErr = true;
    
  
  
  
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
    if(password == ""){
      printError("passErr","Please enter your password");
      var elem = document.getElementById("password");
          elem.classList.add("input-2");
          elem.classList.remove("input-1");
  } else{
      var regex = /^[a-zA-Z0-9!@#$%^&*()-_=\+[\]{};':"\\|,<>\/?]+$/;
      if(regex.test(password) === false){
          printError("passErr","Please enter valid password");
          var elem = document.getElementById("password");
          elem.classList.add("input-2");
          elem.classList.remove("input-1");
      }else{
          printError("passErr","");
          passErr = false;
          var elem = document.getElementById("password");
          elem.classList.add("input-2");
          elem.classList.remove("input-1");
      }
  }
  
  }

export default Signin
