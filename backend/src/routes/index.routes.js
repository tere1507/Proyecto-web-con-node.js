//definicion de rutas principales (ej. GET /) y llama a funciones del controlador

const express = require('express'); //impotamos el modulo express que es el framework que usamos para crear el servidor web

const router = express.Router();//crea un objeto router para definir rutas por separado,esto permite modularizar el codigo es decir separa rutas por archivo

const controlador = require('../controllers/index.controller');// Importa el **archivo del controlador** que contiene las funciones que manejarán las peticiones



//test route
router.get('/', controlador.mensajeInicio);//Define una ruta GET en / (la raíz del sitio web).
//Cuando un usuario accede a esa URL, se ejecuta la función mensajeInicio del controlador.

//exportamos el modulo
module.exports = router;
//Exporta el router para que se pueda usar en otro archivo, normalmente en el archivo principal del servidor (como `app.js` o `server.js`).



//Este código define la ruta principal (`/`) de tu sitio web y le asigna una función controladora (`mensajeInicio`) que se ejecutará al recibir una solicitud GET.








