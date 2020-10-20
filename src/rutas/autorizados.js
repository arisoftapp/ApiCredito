const model = require('../modelos/autorizados');

module.exports = function(app, rutasprotegidas) {
 app.get('/getRutaHuellas/:codigoMacro/:id_empresa',rutasprotegidas,(req,res)=>{

    model.getRutasHuella(req.params.codigoMacro,req.params.id_empresa,(err,data)=>{
        if(err){
            res.status(500).send({
                success: false,
                mensaje: 'Error al insertar consultar rutas:' + err
            });
        }
        else{
            res.json({
                success: true,
                respuesta: data,
                mensaje: "consulta con exito"
       
            });
        }
    })
 })
 app.get('/getRutaHuellasVH/:codigoMacro/:id_empresa',rutasprotegidas,(req,res)=>{
     model.getIdEmpresa(req.params.id_empresa,(err1,data1)=>{

        if(err1){
            res.status(500).send({
                success: false,
                mensaje: 'Error en empresa:' + err
            });

        }
        else
        {
            var idEmpresa=data1[0].idempresa
            //console.log(data.idempresa);
            model.getRutasHuella(req.params.codigoMacro,idEmpresa,(err,data)=>{
                if(err){
                    res.status(500).send({
                        success: false,
                        mensaje: 'Error al insertar consultar rutas:' + err
                    });
                }
                else{
                    
                    res.json({
                        success: true,
                        respuesta: data,
                        mensaje: "consulta con exito"
               
                    });
                }
            })
        }
     })

 })
 app.get('/getAutorizado/:id/:codigoMacro/:empresa',rutasprotegidas,(req,res)=>{

    model.getAutorizadoId(req.params.id,req.params.codigoMacro,req.params.empresa,(err,data)=>{
        if(err){
            res.status(500).send({
                success: false,
                mensaje: 'Error al consultar Autorizado:' + err
            });
        }
        else{
            res.json({
                success: true,
                respuesta: data,
                mensaje: "consulta con exito"
       
            });
        }
    })
 })
 app.get('/getAutorizados/:codigoMacro/:empresa',rutasprotegidas,(req,res)=>{

    model.getAutorizadosCliente(req.params.codigoMacro,req.params.empresa,(err,data)=>{
        if(err){
            res.status(500).send({
                success: false,
                mensaje: 'Error al consultar Autorizado:' + err
            });
        }
        else{
            res.json({
                success: true,
                respuesta: data,
                mensaje: "consulta con exito"
       
            });
        }
    })
 })

    app.post('/insertarAutorizado', rutasprotegidas, (req, res) => {

                model.insertAutorizado (req.body, (err, data) => {
                    if (err) {
                        res.status(500).send({
                            success: false,
                            mensaje: 'Error al insertar cliente autorizado:' + err
                        });
                    } else {
                               res.json({
                                    success: true,
                                    respuesta: data,
                                    mensaje: "consulta con exito"
                           
                                });
                    }
                });
                
                
    });
    app.put('/updateAutorizado', rutasprotegidas, (req, res) => {

        model.updateAutorizados (req.body, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al actualizar cliente autorizado:' + err
                });
            } else {
                       res.json({
                            success: true,
                            respuesta: data,
                            mensaje: "consulta con exito"
                   
                        });
            }
        });
        
        
});
    app.post('/insertarRutaAHuella', rutasprotegidas, (req, res) => {
        
        let valores=[];
        for(let item of req.body.data)
        {
            valores.push(new Array(item.ruta,item.id_autorizados,item.codigoMacro,item.id_empresa));
        }
        model.insertRutaHuella (valores, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al insertar ruta huella:' + err
                });
            } else {
                       res.json({
                            success: true,
                            respuesta: data,
                            mensaje: "consulta con exito"
                   
                        });
            }
        });
        
});


}