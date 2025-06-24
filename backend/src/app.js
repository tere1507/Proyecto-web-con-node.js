//Configura Express: JSON, CORS, rutas (/api)
//configuramos express y middlewares

require('dotenv').config();


const express = require('express'); // Importa el módulo de Express (framework para crear servidores web)

const cors = require('cors');// Importa el módulo CORS (permite compartir recursos entre diferentes orígenes)

const rutas = require('./routes/index.routes');// Importa el archivo de rutas definidas en otro módulo

const app = express();// Crea una instancia de la aplicación Express


const contactoRoutes = require('./routes/contacto.routes');//importamos el archivo externo de rutas, importa un router de express que contiene funciones que responden a peticiones HTTP ->POST; GET; etc

const galeriaRoutes = require('./routes/galeria.routes')

const inicioRoutes = require('./routes/inicio.routes')

const noticiasRouter = require('./routes/noticias.routes')


app.use(express.json());// Middleware para procesar datos JSON en las peticiones (por ejemplo, POST)

app.use(cors());// Middleware que permite peticiones desde otros dominios (útil si tienes frontend separado)

app.use('/api', rutas);// Middleware que maneja las rutas (Todas las rutas comenzarán con /api. SOLO EN BACKEND).Usa el archivo de rutas, y todas las rutas que definiste allí se servirán bajo /api

app.use('/api/contacto', contactoRoutes)//Esta línea le dice a Express: "usa estas rutas cuando la URL comience con /api/contacto".si hay ruta post se acede como POST/api/contacto

app.use('/api/galeria', galeriaRoutes)

app.use('/api/inicio', inicioRoutes)

app.use('/api/noticias', noticiasRouter)


//exportamos el modulo // Exporta la app para que sea usada por server.js o app.js
module.exports = app;