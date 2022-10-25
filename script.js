const eye = document.getElementById('img-eye');
const inputPassword = document.getElementById('input-password');
const inputUser = document.querySelector('#input-user');
const inputEmailRecover = document.querySelector('#input-email-recover');
const formLogin = document.querySelector("#form-login");
const formRegister = document.querySelector("#form-register");
const formRecoverPassword = document.querySelector("#form-recover-password");
const formWelcome = document.querySelector('#form-welcome');
const formEmailEnviado = document.querySelector('#form-email-enviado');
const clickAqui = document.querySelector("#click-aqui");
const cadastreSe = document.querySelector('#cadastre-se');
const xRegister = document.querySelector('#x-register');
const xRecoverPassword = document.querySelector('#x-recover-password');
const xWelcome = document.querySelector('#x-welcome');
const xEmailEnviado = document.querySelector('#x-email-enviado');
const buttonEntrar = document.querySelector('#button-enter');
const load = document.querySelector('#load');
const fieldsetLogin = document.querySelector('#fieldset-login');
const buttonEnviar = document.querySelector('#button-enviar');

let passwordValid = false;
let userValid = false;


formLogin.addEventListener("submit", (e) =>{
    e.preventDefault();
});

clickAqui.addEventListener("click", () => {        
    formLogin.style = "display: none";
    formRecoverPassword.style = "display : block"    
});

cadastreSe.addEventListener("click", () => {        
    formLogin.style = "display: none";
    formRegister.style = "display : block"    
});

xRegister.addEventListener("click", () => {
    formRegister.style = "display: none";
    formLogin.style = "display: block";    
});

xRecoverPassword.addEventListener("click", () => {
    formRecoverPassword.style = "display : none"
    formLogin.style = "display: block";
});

xEmailEnviado.addEventListener("click", () => {
    formEmailEnviado.style = "display : none"
    formLogin.style = "display: block";
});

xWelcome.addEventListener("click", () => {
    formWelcome.style = "display : none"
    formLogin.style = "display: block";
});

eye.onmousedown = ()=>{
    eye.src='img/eye-open.svg'; 
    inputPassword.type = "text";        
};

eye.onmouseup = ()=>{
    eye.src='img/eye-close.svg';   
    inputPassword.type = "password"; 
};

inputUser.addEventListener("input", () => {
    const validateUser = /(?=.*[}{,^?~=+\-_\/*\-+\|\s])/;       
    userValid = validateUser.test(String(inputUser.value)) ? false : true;
 
    inputUser.style = "focus-visible outline: 2px solid  rgb(0, 111, 230)";        
    if(!userValid){
        inputUser.style = "outline: 2px solid  rgb(218, 25, 18)";        
    }       
}); 


inputPassword.oninput  = () =>  {  
    inputPassword.style = inputPassword.value != '' ? "outline: 2px solid  rgb(0, 111, 230); border: none" : "";
    eye.style.visibility = inputPassword.value != '' ? 'visible' : 'hidden';       
    
    const validatePassword = /(?=.*[}{,.^?~=+\-_\/*\-+.\|])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/;    
    passwordValid = (validatePassword.test(String(inputPassword.value)));    
    
    inputPassword.style = "focus-visible outline: 2px solid  rgb(0, 111, 230)";
    if(!passwordValid){
        inputPassword.style = "outline: 2px solid  rgb(218, 25, 18)";
    }   
};



buttonEntrar.addEventListener("click", () => {    

    if(inputUser.value && inputPassword.value){
        fieldsetLogin.style = "opacity: 0.3"
        load.style = "display : block";
        
        setTimeout(() => {
            fieldsetLogin.style = "opacity: none"
            formWelcome.style = userValid && passwordValid ? "display : block" : "display : none";
            formLogin.style = userValid && passwordValid ? "display : none" :"display : block";
            load.style = "display : none";

            if (!userValid) {
                inputUser.style = "focus-visible outline: 2px solid  rgb(218, 25, 18)";
            }
    
            if (!passwordValid) {
                inputPassword.style = "focus-visible outline: 2px solid  rgb(218, 25, 18)";
            }
        },5000);        
    }
});



buttonEnviar.addEventListener("click", (e) => {
    e.preventDefault();    
    
    if(emailValid){
        formRecoverPassword.style = "Display : none";
        formEmailEnviado.style = "Display : block"
    }
});

let emailValid = false;
inputEmailRecover.addEventListener("input", () => {
    const emailValidate = /.*@.+/;
    emailValid = emailValidate.test(inputEmailRecover.value);
    
    inputEmailRecover.style = "focus-visible "
    if(!emailValid){
        inputEmailRecover.style = "outline: 2px solid  rgb(218, 25, 18)";
    }
});


/*
    24/10/2022
*/