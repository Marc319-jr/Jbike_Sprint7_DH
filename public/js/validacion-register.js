
window.addEventListener("load" , function(){

//declaracion del objeto de errores vacio
let errores = {
	nombre: "El nombre no puede esta vacio",
	email: "El email no puede estar vacio",
	password : "La password no puede estar vacia",
	confrimPass: "Las contraseñas deben ser iguales",
	telefono: "El numero de telefono no debe estar vacio",
	imagen: "Debes seleccionar una imagen"
}

//expresiones para compara los campos
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 6 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

//declaracion y capturacion de variables
const formulario = document.querySelector(".formRegister")
const inputs = document.querySelectorAll(".formRegister input")
const genero = document.querySelector("select")


//funciones de validcaion 

validarNombre = function(e)
{
	if(e.target.value.includes(" ")  && expresiones.nombre.test(e.target.value))
	{
		console.log("nombre correcto");
		delete errores.nombre
	}
	else if(e.target.value == "")
	{
		errores.nombre = "El campo nombre no puede quedar vacio"
		console.log(errores.nombre);
	}
	else if(!expresiones.nombre.test(e.target.value))
	{
		errores.nombre = "El nombre no debe tener numeros o #,$,%.."
		console.log(errores.nombre);
	}
	else
	{
		errores.nombre  = "El nombre debe tener apellido incluido"
		console.log(errores.nombre);
	}	
}
validarEmail = function(e)
{
	if(e.target.value.includes("@") && e.target.value.includes(".com"))
	{
		console.log("Email correcto");
		delete errores.email
	}
	else if(e.target.value == "")
	{
		errores.email  = "El campo email no puede estar vacio"
		console.log(errores.email);
	}
	else
	{
		errores.email = "El formato debe ser Email"
		console.log(errores.email);
	}

}
validarPass = function(e)
{
	if(e.target.value != "" && expresiones.password.test(e.target.value)) // caso correcto
	{
		console.log("password correcta");
		delete errores.password
	}	
	else if(!expresiones.password.test(e.target.value)) // chekeamos que tiene 4-12 caracters
	{
		errores.password = "la contraseña tiene que ser entre 6 y 12 caracteres"
		console.log(errores.password);
	}
	else if(e.target.value == "") //caso vacio
	{
		errores.password = "la contraseña no puede estar vacia"
		console.log(errores.password);
	}
}
confirmarPass = function(e){
	if(e.target.value != inputs[2].value)
	{
		errores.confrimPass = "las contraseñas tienen que ser iguales"
		console.log(errores.confrimPass);
	}
	else
	{	
		console.log("contraseñas matchean");
		delete errores.confrimPass
	}	
}
validarTelefono = function(e)
{
	if(expresiones.telefono.test(e.target.value))
	{
		console.log("Numero bueno");
		delete errores.telefono
	}
	else
	{
		errores.telefono  = "El numero debe contener 7-14 numeros"
		console.log(errores.telefono);
	}
}
validarTipoDeImagen = function(e)
{
	//consultar Mati
	if(e.target.value == "")
	{
		errores.imagen = "La imagen no puede estar vacia"
		console.log(errores.imagen);
	}
	else
	{
		console.log("La imagen no esta vacio, aun tengo que ver si el archivo es un imagen");
		delete errores.imagen
	}
}
validarGenero = function()
{
	console.log("validar genero");
}

	

//Acto de validacion
validarFormulario = (e) => {
	switch(e.target.name){
		case "nombreUsuario":
			console.log("estoy validando el nombre");
			validarNombre(e);
			break;
		case "emailUsuario":
			console.log("estoy validando el Email");
			validarEmail(e);
			break;
		case "passwordUsuario":
			console.log("estoy Validando la pass");
			validarPass(e);
			break;
		case "confirmarPass":
			console.log("Estoy confrimando la password");
			confirmarPass(e);
			break;
		case "telefono":
			console.log("Estoy validando el numero de telefono");
			validarTelefono(e);
			break;
		case "imagen": 
			console.log("Estoy validando tipo de imagen");
			validarTipoDeImagen(e);
			break;
	}
}


//validacion de inputs

inputs.forEach((input) => {
	input.addEventListener("blur" , validarFormulario);
	input.addEventListener("keyup" , validarFormulario);
})

//validacion de genero
genero.addEventListener("click" , validarGenero)

//hasta que no se valida todo no seguimos
formulario.addEventListener("submit" , (e) => {

	if(JSON.stringify(errores) == '{}')
	{
		console.log("no hay errores" );
	}
	else
	{
		console.log("hay errores");
		e.preventDefault()
		console.log(errores);
	}


		
})


})