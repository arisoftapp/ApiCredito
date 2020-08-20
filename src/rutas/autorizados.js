const model = require('../modelos/clientes');
const jwt = require('jsonwebtoken');
module.exports = function(app, rutasprotegidas) {

    app.post('/insertarAutorizado', rutasprotegidas, (req, res) => {
        console.log(req.body);
        /*
                model.insertCliente(req.body, (err, data) => {
                    if (err) {
                        res.status(500).send({
                            success: false,
                            mensaje: 'Error al buscar insertar cliente:' + err
                        });
                    } else {
                        res.json({
                            success: true,
                            respuesta: data,
                            mensaje: "consulta con exito"

                        })

                    }
                });
                */
    });



}