let express = require('express');
const controller = require('../Controller/categoriaController')
let router = express.Router();

//gets
router.get('/mb' , controller.mb);







module.exports = router;