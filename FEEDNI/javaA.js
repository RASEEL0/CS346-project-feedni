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

//***************************CHECK LOGIN STATE ON PAGE LOAD*********************************************** */

// Get the login/logout links and user name element
// Check login state on page load
 

loginLink.addEventListener("click", () => {
  window.location.href = "login.html";
});

logoutLink.addEventListener("click", () => {
 localStorage.setItem("isLoggedIn", "false");   
 window.location.href = "index.html";
});

loginForm.addEventListener("submit", (event) => {
  // Validation and login logic
  localStorage.setItem("isLoggedIn", "true");  
  window.location.href = localStorage.getItem("previousPage");   
});    

//***************************back to previous page*********************************************** */
//when user go to login after loggingin he will returen to place he was in
localStorage.setItem("previousPage", window.location.href);

loginLink.addEventListener("click", toggleForms);
registerLink.addEventListener("click", toggleForms);

function toggleForms() {
  loginForm.classList.toggle("active");
  registerForm.classList.toggle("active");
}

//

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", logout);

function logout() {
  localStorage.setItem("isLoggedIn", "false");
  window.location.href = "homepage.html";
} 


// Add [event listener]
loginLink.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.setItem("previousPage", window.location.href);
  window.location.href = "login.html";
});

// Add event listener to the logout link
logoutLink.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.setItem("isLoggedIn", "false");
  window.location.href = "homepage.html";
});
//***************************CHECK LOGIN STATE ON FORM SUBMISSION*********************************************** */

