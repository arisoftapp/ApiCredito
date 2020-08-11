const user = require('../modelos/login');
const jwt = require('jsonwebtoken');
module.exports = function(app, rutasprotegidas) {

    app.get('/usuarios', rutasprotegidas, (req, res) => {
        user.getValidarUsuario((err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al buscar usuarios:' + err
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

    app.post('/login', (req, res) => {
        var usuario = req.body.usuario;
        var contra = req.body.contra;
        console.log(req.body);
        user.auth(usuario, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al comprobar usuario:' + err
                });
            } else {
                console.log(data[0].sesion);
                if (data[0].sesion == 1) {
                    res.json({
                        success: false,
                        mensaje: "usuario ya inicio sesion"
                    });
                } else {
                    if (data.length < 1) {
                        res.json({
                            success: false,
                            mensaje: "usuario incorrecto"
                        });
                    } else {
                        if (data[0].contra != contra) {

                            res.json({
                                success: false,
                                mensaje: "contraseña incorrecta"
                            });
                        } else {
                            user.updateSesion(datos, (err, data) => {
                                if (err) {
                                    res.status(500).send({
                                        success: false,
                                        message: 'Error al iniciar sesion:' + err
                                    });
                                } else {
                                    const payload = {
                                        check: true
                                    };
                                    const token = jwt.sign(payload, app.get('llave'), {

                                    });
                                    res.json({
                                        success: true,
                                        usuario: data,
                                        token: token
                                    });
                                }
                            })

                        }

                    }
                }

            }
        });
    });

}