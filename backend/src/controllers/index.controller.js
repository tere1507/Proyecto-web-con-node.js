//logica que ejecuta cada ruta
//Define las funciones que responden a las rutas


//controlador que responde a GET-> // Función que se ejecuta cuando se accede a la ruta principal

// Define una función llamada mensajeInicio y Esta función responde con un código 200 y un mensaje JSON
const  mensajeInicio = (req, res)=> {
    res.status(200).json({
        mensaje : 'Welcome to our API - Backend connected correctly 🚀'
    });   
};


// Exportamos la función para poder usarla en las rutas
module.exports = { mensajeInicio };