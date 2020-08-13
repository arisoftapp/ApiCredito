const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
config = require('./config')

const app = express();

const port = process.env.PORT || 3100;
app.set('llave', config.llave);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const rutasProtegidas = express.Router();
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, app.get('llave'), (err, decoded) => {
            if (err) {
                return res.json({ mensaje: 'Token inválida' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({
            mensaje: 'Token no proveída.'
        });
    }
});

app.get('/prueba', rutasProtegidas, (req, res) => {
    res.send({ mensaje: "hola mundo" })
})
require('./rutas/login')(app, rutasProtegidas);
require('./rutas/clientes')(app, rutasProtegidas);
require('./rutas/huella')(app, rutasProtegidas);

app.listen(port, () => {
    console.log("apirest " + port);
})