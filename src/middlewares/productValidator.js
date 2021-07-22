const path = require('path');
const { body } = require('express-validator');

console.log("Paso por validator de producto");

const validator = [
    body('marcaProducto').notEmpty().withMessage("El campo marca no puede quedar vacio"),
    body('modeloProducto').notEmpty().withMessage("El campo modelo no puede quedar vacio"),
    body('desc1').notEmpty().withMessage("El campo descripcion no puede quedar vacio"),
    body('desc2').notEmpty().withMessage("El campo descripcion no puede quedar vacio"),
    body('rodadosProducto').notEmpty().withMessage("El campo rodados no puede quedar vacio"),
    body('coloresProducto').notEmpty().withMessage("El campo colores no puede quedar vacio"),
    body('stockProducto').notEmpty().withMessage("El campo stock no puede quedar vacio"),
    body('precioProducto').notEmpty().withMessage("El campo precio no puede quedar vacio"),
    body('descuentoProducto').notEmpty().withMessage("El campo descuento no puede quedar vacio"),
    body('cuotasProducto').notEmpty().withMessage("El campo cuotas no puede quedar vacio"),
]




module.exports = validator