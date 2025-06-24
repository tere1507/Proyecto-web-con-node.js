//Devuelve contenido de la empresa
const path = require('path'); //gestiona rutas de archivos o carpetas de forma segura y multiplataforma,
//se usa para cosntruir la ruta absoluta hacia el archivo inicio.json de forma segura sin importar el sistem operattivo

const fs = require('fs');//file system-> permite leer, escribir, eliminar o modificar archivos desde tu aplication/ se usa aqui para leer y extraer el contenido de inicio.json

//Controlador que lee y devuelve los datos del archivo inicio.json
const obtenerInicio = (req, res) => {
    const filePath = path.join(__dirname, '../data/inicio.json')//creamos la ruta completa ->web_1/api/data/inicio.json
    const content = fs.readFileSync(filePath, 'utf-8');//fs(file system)lee los datos de la ruta de forma sincrona-> utf-> lee los datos como texto plano
    const data = JSON.parse(content);//Conviertimos el texto en formato JSON (una cadena) en un objeto JavaScript real.

    res.json(data);//obtenemos las respuesta  de HTTP en formato json para el cliente y el fornted puede aprovechar estos datos
}

//exportamos el mmodulo para que pueda ser usado en otros archivos
module.exports = { obtenerInicio };

