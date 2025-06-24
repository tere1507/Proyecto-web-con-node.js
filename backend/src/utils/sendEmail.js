//configura y envia con nodemailer

const nodemailer = require('nodemailer');//importamos el modulo nodemailer ->que permite enviar correos electrónicos desde Node.js usando SMTP (protocolo de envío de correos).

require('dotenv').config(); //carga las variables desde el archivo .env

//Se usa async porque luego vamos a hacer una operación que demora (await).
const sendEmail = async (nombre, email, telefono, mensaje) => {//declaramos una funcion asincrona que require como parametros todos los datos del formualario

    //📬 Creamos un "transportador", es decir, un objeto que se encargará de conectarse con el servicio de correo (SMTP) para enviar el mensaje.
    const transporter = nodemailer.createTransport({
        service: 'gmail', //definimos el servicio que vamos a usar y puedes ser hotmail , 'outlook', 'yahoo', etc

        auth: {//contiene los datos de autenticacion del remitente(quien envia el correo)
            user: process.env.EMAIL_USER,  // ← ✅ Usamos variable de entorno
            pass: process.env.EMAIL_PASS   // ← ✅ Seguro desde .env
        }
    });

    await transporter.sendMail({
        from: `Form web ${email}>`,
        to: process.env.EMAIL_TO ,  //✅ A quien llega el correo
        subject: 'New message of contact',
        html:`
        <h3>Datos del usuario</h3>
        <p><strong>Nombre:</strong>${nombre}</p>
        <p><strong>Email:</strong>${email}</p>
        <p><strong>Telefono:</strong>${telefono}</p>
        <p>strong>Mensaje:</strong>${mensaje}</p>
        `
    });
};

module.exports = sendEmail;