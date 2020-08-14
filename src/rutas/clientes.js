const model = require('../modelos/clientes');
const jwt = require('jsonwebtoken');
module.exports = function(app, rutasprotegidas) {

    app.post('/insertarCliente', rutasprotegidas, (req, res) => {

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
    });
    app.get('/clientes', rutasprotegidas, (req, res) => {

        model.getClientes((err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al buscar clientes:' + err
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
    app.delete('/eliminarcliente', rutasprotegidas, (req, res) => {
        model.eliminarCliente(req.body.cliente, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al eliminar cliente:' + err
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

    app.put('/modificarcliente', rutasprotegidas, (req, res) => {
        model.modificarcliente(req.body, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al modificar cliente:' + err
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