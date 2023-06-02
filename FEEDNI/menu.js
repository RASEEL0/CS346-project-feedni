//menu.js file
function toggleNavMenu() {
    // Get nav menu 
    var navMenu = document.getElementById("navmenu");
  
    // Check if it has nav-menu class
    if (navMenu.className === "nav-menu") {
      // Add responsive class
      navMenu.className += " responsive";  
    } else {
     // Remove responsive class 
     navMenu.className = "nav-menu";   
    }
  }
  //

function myMenuFunction() {
    var i = document.getElementById("navmenu");
    if (i.className === "nav-menu") {
      i.className += " responsive";
    } else {
      i.className = "nav-menu";
    }
  }
  
  var a = document.getElementById("loginBtn");
  var b = document.getElementById("registerBtn");
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  //login s is for switch butten
  function loginS() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += "white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
  }
  function registerS() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += "white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
  }
  
  const containerForm = document.querySelector("form-box");
  