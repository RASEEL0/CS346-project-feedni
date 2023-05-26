/*login username       id="logusername"
  login  password      id="logpassword"
  register first name  id="Fname"
   last name           id="Lname"
   user name           id="regUserName"
   email               id="email"
   password            id="regPassword"
   repeat password     id="regRepeatPassword"
   log in butten        id="loginButten"
                        id="registerButten"
*/ 

//***************************check login state*********************************************** */

function checkLoginState() {
   if (localStorage.getItem("isLoggedIn") === "true") {
     return true;  
   } 
   return false;
 }
/* **************************** code menu for register & login page***********************/
function myMenuFunction() { 
    var i = document.getElementById("navmenu");
if(i.className === "nav-menu") {
   i.className += " responsive";
} else {
   i.className = "nav-menu";
}
 }
 
var a=document.getElementById("loginBtn");
var b=document.getElementById("registerBtn");
var x=document.getElementById("login");
var y=document.getElementById("register");
/* function for switch btween tow forms */
function loginS(){
   x.style.left="4px";
   y.style.right="-520px";
   a.className += "white-btn";
   b.className = "btn";
   x.style.opacity=1;
   y.style.opacity=0;
}
function registerS(){
   x.style.left="-510px";
   y.style.right="5px"; 
   a.className = "btn";
   b.className += "white-btn";   
   x.style.opacity=0;
   y.style.opacity=1;  
}


const containerForm =document.querySelector("form-box");

//***************************back to previous page*********************************************** */
//when user go to login after loggingin he will returen to place he was in 
localStorage.setItem("previousPage", window.location.href);

//***************************LOGIN*********************************************** */

const form = document.getElementById("login-form");
form.addEventListener("submit", login);

function login(event) {
   event.preventDefault();
   
   const username = document.getElementById("logusername").value;
   const password = document.getElementById("logpassword").value;

   if (valid) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      const previousPage = localStorage.getItem("previousPage");
      window.location.href = previousPage; 
    } else {
      alert("Incorrect username or password!");
    }
 }
 const users = [
   //array of users
 ];
 
const valid = users.some(user => {  
  if (input.includes("@")) {
    return user.email === input && user.password === password;  
  } else {
    return user.username === input && user.password === password;  
  }
});

//***************************REGISTER*********************************************** */
const regForm = document.getElementById("register-form");

regForm.addEventListener("submit", register);

function register(event) {
   event.preventDefault();
   const FirstName =document.getElementById("Fname").value;
   const LastName =document.getElementById("Lname").value;
   const regUsername = document.getElementById("regUserName").value;
   const email = document.getElementById("email").value;
   const regPassword = document.getElementById("regPassword").value;
   const repeatPassword = document.getElementById("regRepeatPassword").value;

   if (regPassword !== regRepeatPassword) {
       document.getElementById("repeatpassword-error").textContent = "Passwords do not match!";
     return;  
    }
 //after regester pushing user information  into users matrix
   users.push({
     username: regUsername,
     password: regPassword,
     email: email
   });
 //then write message after succseful 
 alert("Registration successful!");
 document.getElementById("Fname").value = "";
 document.getElementById("Lname").value = "";
 document.getElementById("regUserName").value = "";  
 document.getElementById("regPassword").value = "";
 document.getElementById("email").value = "";
 document.getElementById("regRepeatPassword").value = "";
 }
//***************************LOGOUT*********************************************** */
 function logout() {
   localStorage.removeItem("isLoggedIn");
   localStorage.removeItem("previousPage");
   window.location.replace("login.html");  
 }
 
