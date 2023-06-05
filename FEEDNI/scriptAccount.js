const file =document.querySelector("#file");
let uploaded_image="";
file.addEventListener("change", function(
){
    const reader=new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image=reader.result;
        document.querySelector("# box").style.backgroundImage='URL(${uploaded_image})';

    });
    reader.readAsDataURL(this.files[0]);
})


/*let profilepic = document.gettlementById ("profile-pic");
let inputFile = document.getElementById("input-file");
inputFile.onchange = function(){
    profilepic.src=URL.createObjectURL(inputFile.files[0]);
}*/


const from =document.getElementById('from');
const fname =document.getElementById('fname');
const lname =document.getElementById('lname');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const conformPasswodr =document.getElementById('conformpassword');
form .addEventListener( 'submit ', e =>{
    e.preventDefault();
    validateInputs();
});
const setError = (element, massage) =>{
    const inputControl =element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText=massage;
    inputControl.classList.add ('error');
    inputControl.classList.remove ('success');
    
};
const setSuccess = element =>{
    const inputControl =element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText =''; 
    inputControl.classList.add ('success');
    inputControl.classList.remove ('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    const usernameValue = username.value .trim();
    const fnameValue = fname.value .trim();
    const lnameValue = lname.value .trim();
    const passwordValue = password.value .trim();
    const emailValue = email.value .trim();
    const conformpasswordValue = conformPasswodr.value .trim();
    if( usernameValue ===''){
        setError(username,'user name is required');
    }
    else{
        setSuccess(username);
    }

    if(fnameValue ===''){
        setError(fname,'first name is required');
    }
    else{
        setSuccess(fname);
    }

    if(lnameValue ===''){
        setError(lname,'last name is required');
    }
    else{
        setSuccess(lname);
    }
    if( emailValue ===''){
        setError(email,'email is required');
    }
    else{
        setSuccess(email);
    }
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(conformpasswordValue === '') {
        setError(conformPasswodr, 'Please confirm your password');
    } else if (conformpasswordValue !== passwordValue) {
        setError(conformPasswodr, "Passwords doesn't match");
    } else {
        setSuccess(conformPasswodr);
    }
};

