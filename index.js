const express = require('express');

// Creamos el servidor
const app = express();

// definimos Ruta principal
app.get('/', (req, res) => {
    res.send('Hola mundo');

})

app.listen(4000, () => {
    console.log('El servidor esta corriendo correctamente');
})




