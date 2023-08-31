const http = require('http')

const cursos = require('./cursos.js')

const server = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            res.statusCode = 501;
            res.end(`Nso puede ser manejado por el server ${method} `)
    }
});
function manejarSolicitudGET(req, res) {

    const path = req.url;
    if (path === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        res.statusCode = 200;
        return res.end('Saludos a mi primer servidor y Api con Node')
    } else if (path === '/cursos') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos))
    } else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion))
    }
    res.statusCode = 404;
    res.end('Not found')
};

function manejarSolicitudPOST(req, res) {
    const path = req.url;
    if (path === '/cursos/programacion') {
        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });
        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);
            // Convertir a un objeto de JavaScript.
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);
            res.end('El servidor recibio una solicitud POST para /cursos/programacion');
        })

    }
    const PORT = 3000;
    server.listen(PORT, () => {
        console.log(`Is listening in port ${PORT}`);
    })
}