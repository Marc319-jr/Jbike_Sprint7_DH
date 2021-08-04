const path = require('path');
const fs = require ('fs');
const file = path.resolve(__dirname, '../data/', 'productos.JSON');
const controller = {
    mb:(req,res) => {
        let archivoProductos = fs.readFileSync(file, {enconding: 'utf-8'});
        let productos = JSON.parse(archivoProductos);
        console.log(productos); 
        res.render('../src/views/categorias/mb.ejs' , {productos:productos})
    }





}





module.exports = controller;