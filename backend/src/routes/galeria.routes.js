const express = require('express'); //importamos el modulo express

const router = express.Router()//creamos un router que es como un mini servidor dentro de tu aplicacion, sirve para organizar rutas en archivos separados como rutas de galeria, contacto

const { obetenerGaleria } = require('../controllers/galeria.controller');//importamos la funcion obtener galeria desde el archivo galeria.controller.js-> las {} -> se usa destruccion ya que este archivo tiene varias funciones

router.get('/', obetenerGaleria);//definimos la ruta http get en la raiz del router, para que mediante GET -> api/galeria -> se pueda ver la galeria

module.exports = router;//exportamos el router para que pueda ser usado en otro archivo, como app.js: