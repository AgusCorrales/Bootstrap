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
    const inputFirstNameValue = inputFirstName.value;
    const inputFirstLastnameValue = inputLastName.value;
    const inputEmailValue = inputEmail.value;
    const inputPasswordValue = inputPassword.value;
    if(inputFirstName.value === ""|| inputLastName.value === "" || inputEmail.value === "" || inputPassword.value === ""){
        alert("Completar todos los campos" , "danger")
    }else if (/(\w+?@\w+?\x2E.+)/.test(inputEmail.value) !== true){
        alert("Por favor ingrese un correo electrónico correcto" , "warning")
    }else if (inputPassword.value !== inputConfirmPass.value){
        alert("Las contraseñas no coinciden" , "warning")
    } else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(inputPassword.value) !== true){
        alert ("Contraseña invalida" , "danger")
    } else {
        alert ("Usuario guardado correctamente" , "success")
        const user = {
            name: inputFirstNameValue,
            surname: inputFirstLastnameValue,
            email: inputEmailValue,
            password: inputPasswordValue,
        };
        let savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        savedUsers.push(user);
        localStorage.setItem('users', JSON.stringify(savedUsers));
        console.log(localStorage);
    setTimeout(function(){
        window.location.href =".././index.html"
     }, 2000);
}
    inputFirstLastnameValue = '';
     setTimeout(function (){
         msg.innerHTML = "";
    }, 2000);
}
const alert = (message , type) => {
    msg.innerHTML = `<div id='appendedWraper' class="position-absolute ml-3 alert alert-${type} alert-dismissible mt-2" role="alert">
    <div>${message}</div>
    </div>`;
}

btn.addEventListener("click" , onSubmit);