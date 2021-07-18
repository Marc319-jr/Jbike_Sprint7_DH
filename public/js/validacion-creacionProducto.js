window.addEventListener("load" , function(){

const formulario = document.querySelector(".creacion-producto")
const inputs = document.querySelectorAll(".creacion-producto input") 
const textAreas = document.querySelectorAll(".creacion-producto textarea")

console.log(formulario);
console.log(inputs);
console.log(textAreas);

const expresiones = {
	modelo: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 6 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

errores = {
    desc1: "La descripcion de articulo no debe estar vacia",
    desc2: "La descripcion de articulo no debe estar vacia",
    marca: "El nombre de la marca del producto no debe quedar vacio",
    modelo: "El nombre del modelo del producto no debe quedar vacio",
    imagen: "La imagen no debe estar vaia",
    rodado: "El producto debe tener al menos 1 rodado",
    color: "El producto debe tener al menos 1 color",
    stock: "El producto debe tener al menos 1 unidad de stock",
    precio: "El precio tiene que estar insertado",
    descuento: "El descuento debe estar insertado",
    cuotas: "El producto debe tener como por lo menos 1 cuota"    
}


//fucniones de validacion de textareas
validarDesc1 = function(e){
    //logica de error
    if(e.target.value == "")
    {
    document.querySelector(".desc1").style.border = "none"
    document.querySelector(".desc1").style.outline = "1px solid gray"
    errores.desc1 = "La descripcion de articulo no debe estar vacia"
    }
    else if(e.target.name != "" && e.target.value.length <= 20)
    {
    document.querySelector(".desc1").style.outline = "2px solid red"   
    errores.desc1 = "La descripcion del producto debe tener mas de 20 caracteres"            
    }
    else 
    { 
    document.querySelector(".desc1").style.outline = "2px solid green"     
    delete errores.desc1          
    }
}
validarDesc2 = function(e){
    if(e.target.value == "")
        {
		document.querySelector(".desc2").style.border = "none"
		document.querySelector(".desc2").style.outline = "1px solid gray"
        errores.desc2 = "La descripcion de articulo no debe estar vacia"
        }
        else if(e.target.name != "" && e.target.value.length <= 20)
        {
        errores.desc2 = "La descripcion del producto debe tener mas de 20 caracteres"
        document.querySelector(".desc2").style.outline = "2px solid red"               
        }
        else 
        { 
        delete errores.desc2
        document.querySelector(".desc2").style.outline = "2px solid green"               
        }
}
//Validaciones de text areas
const validatorTextArea = (e) => {
    switch (e.target.name){
        case "desc1":
        console.log("desc1 de producto");
        validarDesc1(e);
        break
        case "desc2":
        console.log("desc2 de producto");
        validarDesc2(e);
        break
    }
}


//funciones de validacion de inputs

validarMarca = function(e){
    marca = document.querySelector(".marca");
    if(e.target.value == "")
    {
        marca.style.border = "none"
        marca.style.outline = "1px solid gray"
        errores.marca = "El nombre de la marca del producto no debe quedar vacio"
    }
    else if(e.target.value.length > 16)
    {
        marca.style.border = "none"
        marca.style.outline = "2px solid red"   
        errores.marca = "El nombre de la marca del producto no debe tener mas de 16 caracteres"
    }
    else if(!expresiones.nombre.test(e.target.value))
    {
        marca.style.border = "none"
        marca.style.outline = "2px solid red"   
        console.log("Error en el nombre de la marca");
        errores.marca = "El nombre de la marca del producto no debe tener numeros o caracteres especiales"
    }
    else
    {
        marca.style.border = "none"
        marca.style.outline = "2px solid green"   
        delete errores.marca
    }
}
validarModelo = function(e){
    modelo = document.querySelector(".modelo");
    if(e.target.value == "")
    {
        modelo.style.border = "none"
        modelo.style.outline = "1px solid gray"
        errores.modelo = "El nombre del modelo del producto no debe quedar vacio"
    }
    else if(e.target.value.length > 16)
    {
        modelo.style.border = "none"
        modelo.style.outline = "2px solid red"   
        errores.modelo = "El nombre del modelo del producto no debe tener mas de 16 caracteres"

    }
    else
    {
        modelo.style.border = "none"
        modelo.style.outline = "2px solid green"   
        delete errores.marca

    }
}




//Validaciones de Inputs
const validarInputs = (e) => {
    switch(e.target.name){
        case "marcaProducto":
            console.log("marca Producto");
            validarMarca(e)
            break;
        case "modeloProducto":
            console.log("Modelo Producto");
            validarModelo(e);
            break;
        case "imagen":
            console.log("Imagen");
            //logica de error
            break
        case "rodadosProducto":
            console.log("Rodado Prudctos");
            //logica de error
            break
        case "coloresProducto":
            console.log("Colores Producto");
            //logica de error
            break
        case "stockProducto":
            console.log("stock Productos");
            //logica de error
            break
        case "precioProducto":
            console.log("Precio");
            //logica de error
            break
        case "descuentoProducto":
            console.log("Descuento");
            //logica de error
            break
        case "cuotasProducto":
            console.log("Cuotas");
            //logica de error
            break    
    }
}


inputs.forEach((input) => {
    input.addEventListener("blur" , validarInputs);
    input.addEventListener("keyup" , validarInputs)
})


textAreas.forEach((textArea) =>{
    textArea.addEventListener("blur" , validatorTextArea);
    textArea.addEventListener("keyup" , validatorTextArea);
})



//Acto de validacion pre envio de formulario

formulario.addEventListener("submit", function(e){
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