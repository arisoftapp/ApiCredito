const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
config = require('./config')

const app = express();

const port = process.env.PORT || 3100;
app.set('llave', config.llave);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/prueba', (req, res) => {
    res.send({ mensaje: "hola mundo" })
})
require('./rutas/login')(app);

app.listen(port, () => {
    console.log("apirest " + port);
})