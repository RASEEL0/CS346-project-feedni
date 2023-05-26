/*code sidebar list */
let btn =document.querySelector('#btn');
let sidebar =document.querySelector('.sidebar');

btn.onclick=function(){
    sidebar.classList.toggle('active');
};

/*
pages that allow user to add content 
*/
if (!checkLoginState()) {
    localStorage.setItem("previousPage", window.location.href);
  }
