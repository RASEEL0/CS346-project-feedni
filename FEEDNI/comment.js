const comment = document.getElementById('textArea');
const posted = document.getElementById('comment');

function addComment(){
    if (comment.value ===''){
        alert("write somthing");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = comment.value;
        posted.appendChild(li);
       
    }
    comment.value ="";
}
function saveData(){
    localStorage.setItem("data",posted.innerHTML);
}
function showcComment(){
    posted.innerHTML = localStorage.getItem("data");
}
showcComment();







  


