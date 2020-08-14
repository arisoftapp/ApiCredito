const model = require('../modelos/huella');
const jwt = require('jsonwebtoken');
module.exports = function(app, rutasprotegidas) {

    app.post('/insertarHuella', (req, res) => {
        var datos = {
            "idcliente": req.body.idcliente,
            "huella": req.body.huella
        }
        model.insertHuella(datos, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al insertar cliente:' + err
                });
            } else {
                res.json({
                    success: true,
                    respuesta: "Se inserto " + req.body.idcliente,
                    mensaje: "consulta con exito"

                })

            }
        });
    });

    app.get('/getHuella/:idcliente', (req, res) => {
        var idcliente = req.params.idcliente;
        model.insertHuella(idcliente, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al consultar huellas:' + err
                });
            } else {
                res.json({
                    success: true,
                    respuesta: data,
                    mensaje: "consulta con exito"

                })

            }
        });
    });


}