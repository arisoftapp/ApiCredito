const model = require('../modelos/clientes');
const jwt = require('jsonwebtoken');
module.exports = function(app, rutasprotegidas) {

    app.post('/insertarHuella', (req, res) => {
        var datos = {
            "idcliente": req.body.nombre,
            "huella": req.body.puesto
        }
        model.insertCliente(datos, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al insertar cliente:' + err
                });
            } else {
                res.json({
                    success: true,
                    respuesta: "Se inserto " + req.body.nombre,
                    mensaje: "consulta con exito"

                })

            }
        });
    });


}