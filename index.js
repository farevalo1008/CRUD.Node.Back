const express = require('express');
const conectarDB = require('./config/db');

// Creamos el servidor
const app = express();

// BASE DE DATOS USER: fernando PASSWORD: Fa257153462019
//Conectar a la DB
conectarDB();

app.use('/api/productos', require('./routes/producto'));

//definimos Ruta principal
app.get('/', (req, res) => {
    res.send('Hola mundo');

})

app.listen(4000, () => {
    console.log('El servidor esta corriendo correctamente');
})




