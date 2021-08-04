const PORT = process.env.PORT || 3000
const express = require('express');
const color = require('colors');
const path = require('path');
const app = express();
const cookies = require('cookie-parser');
const session = require('express-session');

app.use(express.static('public'));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


//Declaraciones necesarias para PUT Y DELETE
const methodOverrider = require('method-override');
app.use(methodOverrider("_method"));


//uso de session
app.use(session({secret: 'Shh, Its a secret',
                 resave: false,
                 saveUninitialized: false}));

//uso de cookies

app.use(cookies());


//middlwares

const userloggedMiddleware = require('./middlewares/userloggedMiddleware');

//Uso de middlewares

app.use(userloggedMiddleware);

//Los gerentes de ruteo
const indexRouter = require('./routes/indexRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const categoriaRouter = require('./routes/categoriaRouter');
//Config de engine y sistema de ruteo

app.set('view engine', 'ejs');



//llamado a rutas
app.use('/' , indexRouter);
app.use('/products' , productsRouter);
app.use('/users' , usersRouter);
app.use('/categoria' , categoriaRouter);



//Levantamos servidor y por si nos dan un puerto
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log("Server on port".trap.random, app.get('port')); 



