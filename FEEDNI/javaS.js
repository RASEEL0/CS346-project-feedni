/*code sidebar list */
let btn =document.querySelector('#btn');
let sidebar =document.querySelector('.sidebar');

btn.onclick=function(){
    sidebar.classList.toggle('active');
};
//menu
function myMenuFunction() {
    var i = document.getElementById("navmenu");
    if (i.className === "nav-menu") {
      i.className += " responsive";
    } else {
      i.className = "nav-menu";
    }
  }
/*
pages that allow user to add content 
*/

if (!checkLoginState()) {
    localStorage.setItem("previousPage", window.location.href);
  }
  const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");
const logoutLink = document.getElementById("logoutLink");
const userName = document.getElementById("userName");

loginLink.addEventListener("click", showLoginForm);
registerLink.addEventListener("click", showRegisterForm);

function showLoginForm() {
  loginForm.style.display = "block";
  registerForm.style.display = "none"; 
}

function showRegisterForm() {
  loginForm.style.display = "none";
  registerForm.style.display = "block";  
}

// ...

function checkLoginState() {
  return localStorage.getItem("isLoggedIn") === "true";
}

function checkUsername(username) {
    if (username.length < 6) {
        return false;
      }
    
      return true;
}
//check
function checkPassword(password) {
    if (password.length < 8) {
        return false;
      }
    
      return true;
}

function saveUser(username, password, firstName, lastName, email) {

// hashedPassword is now a cryptographically secure hash of the password
// Usage:

    const hashedPassword = hashPassword(password);
    const user = new User(username, hashedPassword, firstName, lastName, email);
    users.push(user);
  }

  function hashPassword(password) { 
    const hash = crypto.createHash("sha256");
    hash.update(password);
    return hash.digest("hex");
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

// Event listeners for login, registration and logout
//***************************CHECK LOGIN STATE ON FORM SUBMISSION*********************************************** */

// Add event [listener](poe://www.poe.com/_api/key_phrase?phrase=listener&prompt=Tell%20me%20more%20about%20listener.) to the login form submission
form.addEventListener("submit", function(event) {
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
  
    // Update the login/logout links and [user name element](poe://www.poe.com/_api/key_phrase?phrase=user%20name%20element&prompt=Tell%20me%20more%20about%20user%20name%20element.)
    if (checkLoginState()) {
      // User is logged in
      loginLink.style.display = "none";
      logoutLink.style.display = "block";
      userName.innerText = "clint name"; // Replace with actual user name
    } else {
      // User is not logged in
      loginLink.style.display = "block";
      logoutLink.style.display = "none";
      userName.innerText = "";
    }
  });
  
  // Add event listener to the register [form submission](poe://www.poe.com/_api/key_phrase?phrase=form%20submission&prompt=Tell%20me%20more%20about%20form%20submission.)
  regForm.addEventListener("submit", function(event) {
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
  
    // Update the login/[logout links](poe://www.poe.com/_api/key_phrase?phrase=logout%20links&prompt=Tell%20me%20more%20about%20logout%20links.) and user [name element](poe://www.poe.com/_api/key_phrase?phrase=name%20element&prompt=Tell%20me%20more%20about%20name%20element.)
    if (checkLoginState()) {
      // User is logged in
      loginLink.style.display = "none";
      logoutLink.style.display = "block";
      userName.innerText = "clint name"; // Replace with actual user name
    } else {
      // User is not logged in
      loginLink.style.display = "block";
      logoutLink.style.display = "none";
      userName.innerText = "";
    }
  });
  
  // Add event listener to the login link
loginLink.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("previousPage", window.location.href);
    window.location.href = "login.html";
  });
  
  // Add event listener to the logout link
  logoutLink.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "index.html";
  });
  //------------------------------------------------------------------------------------//
  function toggleSidebar() {
    sidebar.classList.toggle("active");
  }
  
  function toggleNavMenu() {
    // Menu toggling code
  }
  
  function showLoginForm() {
    // Show login form code
  }
  
  // etc..  
  //event listener 
  btn.addEventListener("click", toggleSidebar);