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
    stock: /^\d{1,5}$/,
    rodados: /^[0-9\,]{1,20}$/,
    colores: /^[a-zA-Z\,]{1,30}$/,
    precio: /^[0-9\,]{1,7}$/,
    descuento: /^[0-9\,]{1,3}$/,
    cuotas: /^[0-9\,]{1,2}$/
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
        delete errores.modelo
    }
}
validarImagen = function(e){
    const imagen = document.querySelector(".foto-principal")
    console.log(e.target.value);
    if(e.target.value.includes(".jpg")  || e.target.value.includes(".jpeg") || e.target.value.includes(".png"))
    {
        console.log("Imagen valida");
        document.querySelector("#errorImagen").innerHTML = "Imagen valida"
        delete errores.imagen
    }
    else 
    {
        console.log("Imagen invalida");
        document.querySelector("#errorImagen").innerHTML = "La imagen tiene que se de tipo .jpg, .jpeg o .png"
        errores.imagen = "La imagen tiene que se de tipo .jpg, .jpeg o .png"
    }
}
validarRodados = function(e){
    rodados = document.querySelector(".rodados")
    if(rodados.value == "")
    {
        rodados.style.border = "none"
        rodados.style.outline = "1px solid gray"
        errores.rodado = "El campo de los rodados no puede quedar vacio"
    }
    else if(expresiones.rodados.test(rodados.value))
    {
        rodados.style.border = "none"
        rodados.style.outline = "2px solid green"   
        delete errores.rodado
    }
    else
    {
        rodados.style.border = "none"
        rodados.style.outline = "2px solid red"   
        errores.rodado = "Los rodadps deben ser ingresado separados por coma sin espacisos"
    }
}
validarColores = function(e){
    colores = document.querySelector(".colores");
    if(colores.value == "")
    {
        colores.style.border = "none"
        colores.style.outline = "1px solid gray"
        errores.color = "El campo de los colores no puede quedar vacio"
    }
    else if(expresiones.colores.test(colores.value))
    {
        colores.style.border = "none"
        colores.style.outline = "2px solid green"
        delete errores.color
    }
    else
    {
        colores.style.border = "none"
        colores.style.outline = "2px solid red"
        errores.color = "Los colores deber ser ingresados con letras sin acentos separados por una coma"
    }
}
validarStock = function(e){
    stock = document.querySelector(".stock")
    if(stock.value == "")
    {
        stock.style.border = "none"
        stock.style.outline = "1px solid gray"    
        errores.stock = "El campo stock no puede quedar vacio"    
    }
    else if(expresiones.stock.test(stock.value))
    {
        stock.style.border = "none"
        stock.style.outline = "2px solid green"
        delete errores.stock
    }
    else
    {
        stock.style.border = "none"
        stock.style.outline = "2px solid red"
        errores.stock = "El stock debe ser un numero entre 1 y 99999"
    }
}
validarPrecio = function(e){
    let precio = document.querySelector(".precio")
    if(precio == "")
    {
        precio.style.border = "none"
        precio.style.outline = "1px solid gray"
        errores.precio = "El campo del precio no debe quedar vacio"
    }
    else if(expresiones.precio.test(precio.value))
    {
        precio.style.border = "none"
        precio.style.outline = "2px solid green"
        delete errores.precio
    }
    else
    {
        precio.style.border = "none"
        precio.style.outline = "2px solid red"
        errores.precio = "El precio debe ser ingresado con numeros entre 1 a 9999999"
    }
}
validarDescuento = function(e)
{
    let descuento = document.querySelector(".descuento")
    if(descuento == "")
    {
        descuento.style.border = "none"
        descuento.style.outline = "1px solid gray"
        errores.descuento = "El campo del descuento no debe quedar vacio"
    }
    else if(expresiones.descuento.test(descuento.value) && descuento.value <=100)
    {
        descuento.style.border = "none"
        descuento.style.outline = "2px solid green"
        delete errores.descuento;
    }
    else
    {
        descuento.style.border = "none"
        descuento.style.outline = "2px solid red"
        errores.descuento = "El campo del descuento debe ser un numero entre 1 y 100"
    }
}
validarCuotas = function(e)
{
    let cuotas = document.querySelector(".cuotas")
    if(cuotas.value == "")
    {
        cuotas.style.border = "none"
        cuotas.style.outline = "1px solid gray"
        errores.cuotas = "El campo de cuotas no debe quedar vacio"
    }
    else if(expresiones.cuotas.test(cuotas.value) && cuotas.value <=12)
    {
        cuotas.style.border = "none"
        cuotas.style.outline = "2px solid green"
        delete errores.cuotas
    }
    else
    {
        cuotas.style.border = "none"
        cuotas.style.outline = "2px solid red"
        errores.cuotas = "El campo de cuotas debe ser entre 1 y 12 cuotas"
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
            validarImagen(e);
            break
        case "rodadosProducto":
            console.log("Rodado Prudctos");
            validarRodados(e);
            break
        case "coloresProducto":
            console.log("Colores Producto");
            validarColores(e);
            break
        case "stockProducto":
            console.log("stock Productos");
            validarStock(e)
            break
        case "precioProducto":
            console.log("Precio");
            validarPrecio(e)
            break
        case "descuentoProducto":
            console.log("Descuento");
            validarDescuento(e);
            break
        case "cuotasProducto":
            console.log("Cuotas");
            validarCuotas(e);
            break    
    }
}


inputs.forEach((input) => {
    input.addEventListener("blur" , validarInputs);
    input.addEventListener("keyup" , validarInputs);
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