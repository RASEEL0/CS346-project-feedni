//auth.js file
//event listener --------------------------------
loginForm.addEventListener("submit",handleLoginFormSubmission);
regForm.addEventListener("submit", handleRegisterFormSubmission);

function handleLoginFormSubmission(event) {
  event.preventDefault();
// Get form elements   
const loginForm = document.getElementById("loginForm");
const usernameInput = loginForm.username.value;
const passwordInput = loginForm.password.value;
 //validate user 
 const valid = validateUsername(usernameInput) && validatePassword(passwordInput);
    users.some(user => {
    if (username.includes("@")) {
      return user.email === username && user.password === password;
    } else {
      return user.username === username && user.password === password;
    }
  });//end valdate user
//check log in succesul
  if (valid) {
    // On login form submit:
  login(username, password).then(result => {
  if (result) {
  // Login successful
  alert("Login successful!");
  } else {
  // Login failed
  alert("Incorrect username or password!");
  }
  })
    localStorage.setItem("isLoggedIn", "true");
    const previousPage = localStorage.getItem("previousPage");
    window.location.href = previousPage;
  } //end check log in succesul

  // Update the login/logout links and [user name element](poe://www.poe.com/_api/key_phrase?phrase=user%20name%20element&prompt=Tell%20me%20more%20about%20user%20name%20element.)
  if (valid) {
    // User is logged in // Show logged in UI  
    loginLink.style.display = "none";
    logoutLink.style.display = "block";
    userName.innerText = "clint name"; // Replace with actual user name
  } else {
    // User is not logged out // Show logged out UI
    loginLink.style.display = "block";
    logoutLink.style.display = "none";
    userName.innerText = "";
  }
//end Update the login/logout links

 
}//end function handleLoginFormSubmission() {
  function handleRegisterFormSubmission(event) {
    const registerForm = document.getElementById("registerForm");
    event.preventDefault();
    const firstName = document.getElementById("Fname").value;
    const lastName = document.getElementById("Lname").value;
    const regUsername = document.getElementById("regUserName").value;
    const email = document.getElementById("email").value;
    const regPassword = document.getElementById("regPassword").value;
    const repeatPassword = document.getElementById("regRepeatPassword").value;
    const user = new user(regUsername, regPassword, firstName, lastName, email);

  // Validate the user's details
  if (user.isValid()) {
    // On register form submit:
    saveUser(regUsername, regPassword, firstName, lastName, email);
   
    alert("you are rigistered now !")
    loginLink.style.display = "none"; 
  } else { 
    alert("your rigester did not coplete check then try again .")
     loginLink.style.display = "block";
    }
  
  
  //end valdate 

  // Update the login/logout links and [user name element](poe://www.poe.com/_api/key_phrase?phrase=user%20name%20element&prompt=Tell%20me%20more%20about%20user%20name%20element.)
  if (isValid) {
    // User is logged in // Show logged in UI  

    loginLink.style.display = "none";
    logoutLink.style.display = "block";
    userName.innerText = "clint name"; // Replace with actual user name
  } else {
    // User is not logged out // Show logged out UI
    loginLink.style.display = "block";
    logoutLink.style.display = "none";
    userName.innerText = "";
  }//end update link log in log out
  }//end function handleRegisterFormSubmission()
  // ------------------------------
  // Get form elements   
  function isValid(){ 
    if(validateUsername(regUsername) && validatePassword(regPassword)){ 
      saveUser(regUsername, regPassword, firstName, lastName, email);
  }}

function showLoginForm() {
  // Show login form 
  loginForm.style.display = "block";
  registerForm.style.display = "none";   
}

function showRegisterForm() {
  // Show register form  
  loginForm.style.display = "none";
  registerForm.style.display = "block";   
}

function checkLoginState() {    
   // Check if local storage has isLoggedIn set to "true"
  return localStorage.getItem("isLoggedIn") === "true";
}

usernameExists(req.body.username)
  .then(exists => {
    if (exists) {
      // Username exists, show error 
    } else {
      // Username is available, save user
    }
  })