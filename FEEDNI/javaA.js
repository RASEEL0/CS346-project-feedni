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


const containerForm = document.querySelector(".form-box");

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

  const valid = users.some(user => {
    if (username.includes("@")) {
      return user.email === username && user.password === password;
    } else {
      return user.username === username && user.password === password;
    }
  });

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

//***************************REGISTER*********************************************** */

const regForm = document.getElementById("register-form");

regForm.addEventListener("submit", register);

function register(event) {
  event.preventDefault();
  const firstName = document.getElementById("Fname").value;
  const lastName = document.getElementById("Lname").value;
  const regUsername = document.getElementById("regUserName").value;
  const email = document.getElementById("email").value;
  const regPassword = document.getElementById("regPassword").value;
  const repeatPassword = document.getElementById("regRepeatPassword").value;

  // Validate the user's details
  if (!checkUsername(regUsername)) {
    alert("Invalid username!");
    return;
  }

  if (!checkPassword(regPassword)) {
    alert("Invalid password!");
    return;
  }

  if (regPassword !== repeatPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (usernameExists(regUsername)) {
    alert("Username already exists!");
    return;
  }

  saveUser(regUsername, regPassword, firstName, lastName, email);

  alert("Registration successful!");
  loginS();
}

function checkUsername(username) {
  if (username.length < 6) {
    return false;
  }

  return true;
}

function checkPassword(password) {
  if (password.length < 8) {
    return false;
  }

  return true;
}

function usernameExists(username) {
  return users.some(user => user.username === username);
}

function saveUser(username, password, firstName, lastName, email) {
  const hashedPassword = hashPassword(password);
  const user = new User(username, hashedPassword, firstName, lastName, email);
  users.push(user);
}

function hashPassword(password) {
  // Code to hash the password goes here
  return password;
}

class User {
  constructor(username, password, firstName, lastName, email) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

//***************************LOGOUT*********************************************** */

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", logout);

function logout() {
  localStorage.setItem("isLoggedIn", "false");
  window.location.href = "index.html";
} 

//***************************CHECK LOGIN STATE ON PAGE LOAD*********************************************** */

if (checkLoginState()) {
  // User is logged in
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  loginBtn.style.display = "none";
  registerBtn.style.display = "none";
  logoutBtn.style.display = "block";
} else {
  // User is not logged in
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  loginBtn.style.display = "block";
  registerBtn.style.display = "block";
  logoutBtn.style.display = "none";
}
