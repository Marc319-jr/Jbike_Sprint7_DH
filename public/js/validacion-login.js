// declaracion de varaibles
window.addEventListener("load" , function(){

const formulario = document.querySelector(".formLogin")
const email = document.querySelector("#email")
const contraseña = document.querySelector("#password")

let errors = [];

//funciones de validacion
let validateEmail = function()
{
    let feedback = "" ;
    let feedbackElement = email.nextElementSibling;

    if(email.value.trim() == "")
    {
        feedback = "El email no puede estar vacio";
    }
    else if(!email.value.includes("@"))
    {
        feedback  ="El formato debe ser email"   
    }
    document.querySelector(".errorEmail").innerHTML = feedback

  
}


//validacion


email.addEventListener("blur" , validateEmail())




})