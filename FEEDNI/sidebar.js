//sidebar.js file
// Get sidebar button and sidebar element  
var sidebarBtn = document.querySelector("#btn");  
var sidebar = document.querySelector(".sidebar");

// Define click event handler  
function toggleSidebar() {
  sidebar.classList.toggle("active");
}

// Add click event listener   
sidebarBtn.addEventListener("click", toggleSidebar);