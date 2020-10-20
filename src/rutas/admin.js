const jwt = require('jsonwebtoken');
const model = require('../modelos/admin');
module.exports = function(app, rutasprotegidas) {
    app.post('/insertEmpresa', rutasprotegidas, (req, res) => {
        model.getIdEmpresa(req.body,(err,data)=>{
            console.log(data.length);
            if(data.length>0)
            {
                res.json({
                    success: false,
                    respuesta: data,
                    mensaje: "Empresa ya existe"
           
                });
            }
            else
            {
                model.insertEmpresa(req.body, (err2, data2) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al insertar Empresa:' + err2
                });
            } else {
                       res.json({
                            success: true,
                            respuesta: data2,
                            mensaje: "consulta con exito"
                   
                        });
            }
        });

            }
        })
        /*
        
        */
    });
    app.get('/getEmpresas',rutasprotegidas,(req,res)=>{
        model.getEmpresas( (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al obtener Empresas:' + err
                });
            } else {
                       res.json({
                            success: true,
                            respuesta: data,
                            mensaje: "consulta con exito"
                   
                        });
            }
        });
    })
    app.post('/insertUsuario', rutasprotegidas, (req, res) => {
        model.getUsuario(req.body,(err,data)=>{
            console.log(data.length);
            if(data.length>0)
            {
                res.json({
                    success: false,
                    respuesta: data,
                    mensaje: "Usuario ya existe"
           
                });
            }
            else
            {
                ruta="http://wsar.homelinux.com:3100";
                
                model.insertUsuario(req.body,ruta, (err2, data2) => {
            if (err2) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al insertar Usuario:' + err2
                });
            } else {
                       res.json({
                            success: true,
                            respuesta: data2,
                            mensaje: "consulta con exito"
                   
                        });
            }
        });
        

            }
        })

    });
}