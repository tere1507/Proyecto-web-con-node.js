//recibe valida y envia correos

const { validationResult } = require('express-validator');//importamos la funcion `validationResult` del paquete `express-validator`.
//- Sirve para **verificar si hay errores** en las validaciones de los datos enviados desde un formulario (como nombre, email, etc.).


const sendEmail = require('../utils/sendEmail');//importamos la funcion llamada sendEmail desde otro archivo ubicado en util/sendEmail.js
//esta funcion es la que realmente envia el correo electronico con los datos del formulario


const enviarFormulario = async (req, res) => {//Define una función **asíncrona** llamada `enviarFormulario`, que se exportará luego.
    //Esta función manejará la **petición del formulario**, cuando el usuario lo envía.

    const errores = validationResult(req);//Extrae los errores de validación (si los hay) desde la solicitud (req), gracias a express-validator.

    if (!errores.isEmpty()) {
        //- Si **hay errores**, devuelve un mensaje de error con estado HTTP `400` (bad request) y un JSON con el detalle de los errores.
        return res.status(400).json({ errores : errores.array() });
    }

    //Extrae los campos enviados desde el formulario (nombre, email, teléfono, mensaje) del cuerpo de la petición (req.body).
    const { nombre, email, telefono, mensaje } = req.body;

    try {
        //Llama a la función `sendEmail` y le pasa los datos. Como es una función `async`, se usa `await`.
        //- Aquí es donde se intenta **enviar el correo electrónico**.
        await sendEmail( nombre, email, telefono, mensaje );

        //Si el correo se envía bien, responde con un estado 200 (OK) y un mensaje de éxito.
        res.status(200).json({ mensaje : 'Form successfully submitted ✉️'})

    } catch (error) {
        //- Si ocurre algún **error durante el envío**, lo captura con `catch`, muestra el error en consola, y responde con un estado `500` (error del servidor) y un mensaje de error.
        console.error('Error when sending mail', error);

        res.status(500).json({ mensaje : 'Error when sending mail'})
    }
};

//Exporta la función enviarFormulario para que pueda ser usada en otros archivos (por ejemplo, las rutas).
module.exports = { enviarFormulario };