const express = require('express');
const app = express();
const { infoCursos } = require('./cursos/cursos');
const routerMatematicas = require('./routers/matematicas')
const routerProgramacion = require('./routers/programacion')

//Router

app.use('/api/cursos/programacion', routerProgramacion);

app.use('/api/cursos/matematicas', routerMatematicas);

//Routing
app.get('/', (req, res) => {
    res.send('Mi primer servidor bonito');
});

app.get('/api/cursos', (req, res) => {
    res.send(infoCursos);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor esta escuchando en el puerto ${PORT}`);
})