//Gestiona la ruta /api/inicio
const express = require('express');//Importa el framework Express, que es la base para crear servidores web en Node.js.

const router = express.Router();//cramos un instancia de router, es decir es como un mini servidor para tus rutas para tus paginas

//importamos la funcion obtenerInicio desde el achivo  controller/inicio.controller
const { obtenerInicio } = require('../controllers/inicio.controller')

//definimos la ruta get es decir lee el path raiz (/) se ejecuta /api/inicio y se llama la funcion obtenerInicio
router.get('/', obtenerInicio);

module.exports = router;//exportamos el router nunca la funcion porque app.js espera un router no una funcion,  el modulo para que sea ejecutado en server.js o app.js