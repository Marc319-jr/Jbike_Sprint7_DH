window.addEventListener("load" , function(){

const formulario = document.querySelector(".formLogin")
const inputs = document.querySelectorAll(".formLogin input") 

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 6 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

errors = {}

const validarFormulario = (e) => {
    switch(e.target.name){
        case "email":
            if(e.target.value.includes("@") && e.target.value.includes(".com")){
                console.log("email correcto");
                document.querySelector("#email").style.outline = "2px solid green"
                document.querySelector("#email").style.border = "none"
                errors.email = ""
            }
            else
            {
                console.log("Email incorrecto");
                document.querySelector("#email").style.outline = "2px solid red"
                document.querySelector("#email").style.border = "none"
                errors.email = "!El campo debe ser formato Email!"

            }
            if(e.target.value == "")
            {
                document.querySelector("#email").style.border = "1px solid black"
                document.querySelector("#email").style.outline = "none"
                errors.email = "!El campo no puede estar vacio!"
            }
        break
        case "password":

            if(expresiones.password.test(e.target.value)){
                console.log("La contraseña esta en el rango correcto");
                document.querySelector("#password").style.outline = "2px solid green"
                document.querySelector("#password").style.border = "none"
                errors.password = ""
            }
            else
            {
                console.log("Debes insertar una contraseña de 6-12 caracteres");
                document.querySelector("#password").style.outline = "2px solid red"
                document.querySelector("#password").style.border = "none"
                errors.password = "!Debes insertar una contraseña de 6-12 caracteres!"

            }

            if(e.target.value == "")
            {
                document.querySelector("#password").style.border = "1px solid black"
                document.querySelector("#password").style.outline = "none"
                errors.password = "El campo no puede estar vacio"
            }
        break    
    }
}



inputs.forEach((input) => {
    input.addEventListener("keyup" , validarFormulario)
    input.addEventListener("blur" , validarFormulario)     
})




formulario.addEventListener("submit", function(e){
    if(errors.password != "" && errors.email != "")
    {
    e.preventDefault()
    }
    else if(errors.password != "" && errors.email == ""){
        e.preventDefault()
        document.querySelector(".errorPass").innerHTML = errors.password
    }
    
})






})