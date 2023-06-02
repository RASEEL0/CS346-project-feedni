//user.js file
class User {
    constructor(username, password, firstName, lastName, email) {
      this.username = username;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
    }
  }
  function hashPassword(password) { 
    const hash = crypto.createHash("sha256");
    hash.update(password);
    return hash.digest("hex");
  }
  
  function saveUser(username, password, firstName, lastName, email) {
    const hashedPassword = hashPassword(password);
    const user = new User(username, hashedPassword, firstName, lastName, email);
    user.push(user);
  }
  
  function User(username, password, firstName, lastName, email) {
    this.username = username;  
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email =email;
  }
  function validateUsername(username) {
    if(!validateUsername(regUsername)){
        alert("invalid userName!")
      }
      function checkUsername(username) {
        const minLength = 6;
        const invalidChars = /[^a-zA-Z0-9_]/g;
        username = username.toUpperCase(); // Uppercase the username
        if (username.length < minLength) {
        return false;
        }
        if (invalidChars.test(username)) {
        return false;
        }
        return true;
        }
      function usernameExists(username) {
        return users.some(user => user.username === username);
      }
  }  
  function validatePassword(regPassword){
  function checkPassword(password) {
    if (password.length < 8) {
        return false;
      }
    
      return true;
    }
    if (!checkPassword(regPassword)) {
        return;
      }
    
      if (regPassword !== repeatPassword) {
        return;
      }
  }   