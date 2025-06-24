const path = require('path');//importamos modulo path que es nativo de node, sirve para unir rutas de archivo de forma segura y multiplataforma

const fs = require('fs');//Importa el módulo fs (File System) también nativo de Node.js. permite leer escribir o manipular archivos en tu servidor como JSON, texto, img, etc

const obetenerGaleria = (req, res) => {//funcion controladora se usa cuando un ususario entre en la ruta /api/galeria y recibe dos parametros req->infde la peticion(datos usu)rea-> obj con el que respodemos el navegador

    const filePath = path.join(__dirname, '../data', 'galeria.json');//Crea la ruta completa del archivo JSON llamado galeria.json, que está dentro de la carpeta data, y asi puede ser llamada en el frontend
    // __dirname-> representa la carpeta actual del archivo JSON; Resultado: genera la ruta como /web_1/data/galeria.json
    // __dirname (backend/src/controllers)
    // '../' (sube a backend/src)
    // 'data' (entra en backend/src/data)
    // 'galeria.json' (el archivo)
    console.log('--Depuracion galeria Backend---')
    console.log(`Intentando leer Json desde : ${filePath}`);// ¡Revisa esta ruta en tu terminal!


    try {
        const content = fs.readFileSync(filePath, 'utf-8');//Lee el contenido del archivo JSON de forma sincrónica (bloquea mientras lee).utf-8' indica que espera texto legible, no binario.
        //Resultado: content ahora es un texto plano, por ejemplo:  [ { "url": "img1.jpg", "titulo": "Imagen 1" } ]

        const imagen = JSON.parse(content);//Convierte ese texto JSON en un objeto o arreglo de JavaScript.Convierte ese texto JSON en un objeto o arreglo de JavaScript.
        //[ { "url": "img1.jpg", "titulo": "Imagen 1" } ]

        res.json(imagen);//objeto de res que devolvemos al cliente en la peticion http como get post, y json convierte automaticamente cualquier obj en formato JSON
    } catch(error) {
        console.error('Error en obtenerGaleria.', error)// Esto se mostrará en la terminal del backend

        if(error.code === 'ENOENT') {
            return res.status(404).json({message: 'Error: Archivo galeria.json no encontrado en la ruta especificada.'})
        }
        if(error instanceof SyntaxError) {
            return res.status(500).json({message: 'Error: El archivo galeria.json tiene un formato JSON inválido.'})
        }
        res.status(500).json({message: 'Error interno del servidor al cargar la galería.'})
    }
}

module.exports = { obetenerGaleria };