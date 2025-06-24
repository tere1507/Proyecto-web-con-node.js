//ruta para recibir los formularios

//este archivo define una ruta post para manejar el formulario de contacto usando validaciones con express-validator


const express = require('express');// importamos el modulo express

const { check } = require('express-validator')//importamos la funcion check del modulo express-validator que permite validar los datos que llegan en una peticion

const router = express.Router();//Creamos un enrutador (router) modular. Esto permite definir rutas en este archivo de forma ordenada, 
// y luego integrarlas en el archivo principal (app.js o server.js) con app.use()


const controlador = require('../controllers/contacto.controller');//Importamos el controlador que contiene la función enviarFormulario. 
// Esta función es la encargada de procesar los datos una vez pasen las validaciones (enviar email, responder al usuario, etc.).


router.post('/enviar', [//✅ Definimos una ruta POST en /enviar. Esta ruta recibirá los datos del formulario y aplicará una serie de validaciones antes de pasarlos al controlador.

    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Email no valido').isEmail(),
    check('telefono', 'El numero de telefono es obligatorio').not().isEmpty(),
    check('mensaje', 'El mensaje debe tener al menos 10 caracteres').isLength({ min : 10 })

    //✅ Si todas las validaciones pasan, se ejecuta la función enviarFormulario del controlador.
    //✅ Si alguna falla, se interrumpe el flujo y se devuelven los errores automáticamente gracias al middleware
], controlador.enviarFormulario);


// exportamos el router para que pueda ser usado en otros archivos, como en app.js
module.exports = router;