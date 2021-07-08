// todos los archivos de modelos terminana exportando una funcion



module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primeryKey: true,
            autoIncrement: true
        },
        title:{
            type: dataTypes.STRING
        } , 
        lenght: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    }
    const Producto = sequelize.define(alias , cols , config);
    return Producto;
}