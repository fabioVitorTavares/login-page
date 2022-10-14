const eye = document.getElementById('img-eye');
const input_password = document.getElementById('input-password');
const borde_load_password = document.getElementById('border-load-password');
const load_password = document.getElementById('load-password');
const input_cadastre_se_senha = document.getElementById('cadastre-se-senha');
const placeholder_password  = document.getElementById('input-password:placeholder');

eye.onmousedown = ()=>{

    eye.src='img/eye-open.svg'; 
    input_password.type = "text";  
      
};

eye.onmouseup = ()=>{

    eye.src='img/eye-close.svg';   
    input_password.type = "password";  

};

input_password.oninput  = ()=>{
    
    
    input_password.style = input_password.value != '' ? "outline: 2px solid  rgb(0, 111, 230); border: none" : "";
    eye.style.visibility = input_password.value != '' ? 'visible' : 'hidden';       
    
};

