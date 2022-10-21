const eye = document.getElementById('img-eye');
const inputPassword = document.getElementById('input-password');
const inputUser = document.querySelector('#input-user');



inputPassword.oninput  = () =>  {      
    inputPassword.style = inputPassword.value != '' ? "outline: 2px solid  rgb(0, 111, 230); border: none" : "";
    eye.style.visibility = inputPassword.value != '' ? 'visible' : 'hidden';       
    
    const validatePassword = /(?=.*[}{,.^?~=+\-_\/*\-+.\|])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/;    
    console.log(validatePassword.test(String(inputPassword.value)));    
};

inputUser.addEventListener("input", () => {
    const validateUser = /[^a-zA-z0-9.]/;
    console.log(validateUser.test(String(inputUser.value)));       
}); 






const formLogin = document.querySelector("#form-login");
const formRegister = document.querySelector("#form-register");
const formRecoverPassword = document.querySelector("#form-recover-password");
const formWelcome = document.querySelector('#form-welcome');


formLogin.addEventListener("submit", (e) =>{
    e.preventDefault();
});

const clickAqui = document.querySelector("#click-aqui");
const cadastreSe = document.querySelector('#cadastre-se');
const xRegister = document.querySelector('#x-register');
const xRecoverPassword = document.querySelector('#x-recover-password');
const xWelcome = document.querySelector('#x-welcome');
const buttonEntrar = document.querySelector('#button-enter');

buttonEntrar.addEventListener("click", () => {
    formLogin.style = "display : none";
    setTimeout(() => {
        formWelcome.style = "display : block";
    },1000)
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
