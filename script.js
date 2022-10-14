const eye = document.getElementById('img-eye');
const input_password = document.getElementById('input-password');
const borde_load_password = document.getElementById('border-load-password');
const load_password = document.getElementById('load-password');
const input_cadastre_se_senha = document.getElementById('cadastre-se-senha');

eye.onmousedown = ()=>{

    eye.src='img/eye-open.svg'; 
    input_password.type = "text";  
      
};

eye.onmouseup = ()=>{

    eye.src='img/eye-close.svg';   
    input_password.type = "password";  

};

input_password.oninput  = ()=>{

    eye.style.visibility = input_password.value != '' ? 'visible' : 'hidden';       
};

