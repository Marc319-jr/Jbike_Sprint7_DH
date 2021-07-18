window.addEventListener("load" , function(){

const formulario = document.querySelector(".creacion-producto")
const inputs = document.querySelectorAll(".creacion-producto input") 
const textAreas = document.querySelectorAll(".creacion-producto textarea")

console.log(formulario);
console.log(inputs);
console.log(textAreas);

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
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

const validatorTextArea = (e) => {
    switch (e.target.name){
        case "desc1":
        console.log("desc1 de producto");
        //logica de error
        break
        case "desc2":
        console.log("desc2 de producto");
        //logica de error
        break
    }
}


const validarInputs = (e) => {
    switch(e.target.name){
        case "marcaProducto":
            console.log("marca Producto");
            //logica de error
            break;
        case "modeloProducto":
            console.log("Modelo Producto");
            //logica de error
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


formulario.addEventListener("submit", function(e){
    if(errores != null)
    {
    e.preventDefault()
    console.log(errores);
    }

    
})




})