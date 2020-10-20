const model = require('../modelos/huella');
const jwt = require('jsonwebtoken');
module.exports = function(app, rutasprotegidas) {

    app.post('/insertarHuella', (req, res) => {
        var datos = {
            "idcliente": req.body.idcliente,
            "huella": req.body.huella
        }
        model.deleteRutasAutorizado(req.body.id_autorizados,(errdel,datadel)=>{
            if(errdel)
            {
                 res.json({
                    success: false,
                    mensaje: 'Error al actualizar huellas:' + errdel
                });
            }
            else
            {
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
            }
            
        })
        
    });

    app.get('/getHuella/:idcliente/:idempresa', (req, res) => {
        model.getHuella(req.params.idcliente,req.params.idempresa, (err, data) => {
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
    app.put('/updateHuellasRutas',rutasprotegidas,(req,res)=>{
        //console.log(req.body)
        model.getRutasHuella(req.body.id_autorizado,(err,data)=>{
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al buscar ruta:' + err
                });
            } else {
               //console.log(data)
                model.updateRutaHuellas(data,req.body.rutas,(err2,data2)=>{
                    if (err) {
                        res.status(500).send({
                            success: false,
                            mensaje: 'Error al actualizar huellas:' + err2
                        });
                    } else {
                        res.json({
                            success: true,
                            respuesta: data2,
                            mensaje: "consulta con exito"
        
                        })
        
                    }
        
                })
                
                

            }
        })
        /*
        
        */
    });


}