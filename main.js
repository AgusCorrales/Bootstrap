const inputFirstName = document.getElementById("validationCustom01");
const inputLastName = document.getElementById("validationCustom02");
const inputEmail = document.getElementById("validationCustomUsername");
const inputPassword = document.getElementById("validationCustom03");
const inputConfirmPass = document.getElementById("validationCustom05");
const checkBox = document.getElementById("invalidCheck");
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");
const hidden = document.getElementsByClassName("hidden");
document.getElementById("inputGroupPrepend").addEventListener("mouseover", function() {
    document.getElementById("passwordRequirements").classList.remove("hidden");
});

function onSubmit(e) {
    e.preventDefault()
    const inputFirstNameValue = inputFirstName.value 
    if(inputFirstName.value === ""|| inputLastName.value === "" || inputEmail.value === "" || inputPassword.value === ""){
        msg.innerHTML = "Plase enter all fields"
    }else if (/(\w+?@\w+?\x2E.+)/.test(inputEmail.value) !== true){
        msg.innerHTML = "Please enter a correct email"  
    }else if (inputPassword.value !== inputConfirmPass.value){
        msg.innerHTML = "Password doesn't match"
    } else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(inputPassword.value) !== true){
        msg.innerHTML = "Invalid Password"
    } else {
        msg.innerHTML = "User saved"
        localStorage.setItem("usuario", JSON.stringify({
            firstName: inputFirstName.value,
            lastName: inputLastName.value,
            email: inputEmail.value,
            password: inputPassword.value,
    
    }))
    setTimeout(function(){
        window.location.href =".././index.html"
     }, 2000);
}
     
     setTimeout(function (){
         msg.innerHTML = "";
    }, 2000);


}


    



    btn.addEventListener("click" , onSubmit);