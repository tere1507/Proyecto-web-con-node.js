//arranca el servidor (app.listen)

const app = require('./src/app') //creamos una nueva instancia para importar la configuración principal de Express desde app.js.

const PORT = 3000; //definiomos el puerto

//inicio del servidor en el puerto 3000
app.listen(PORT, ()=> {
    console.log(`Server running in http://localhost:${PORT}`)//show the message when is active
})
