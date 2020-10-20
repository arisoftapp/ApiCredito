const model = require('../modelos/clientes');
const modelAutorizado = require('../modelos/autorizados');
const jwt = require('jsonwebtoken');
module.exports = function(app, rutasprotegidas) {

    app.post('/insertarCliente', rutasprotegidas, (req, res) => {
        model.buscarClienteEmp(req.body,(errbus,databus)=>{
            if(databus.length<1)
            {
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

            }
            else{
                res.json({
                    success: false,
                    respuesta: databus,
                    mensaje: "Cliente ya existe"

                })

            }
           

        })
/*
        
        */
    });
    app.get('/clientes/:id_empresa', rutasprotegidas, (req, res) => {

        model.getClientes(req.params.id_empresa,(err, data) => {
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
    app.get('/cliente/:codigoMacro/:id_empresa', rutasprotegidas, (req, res) => {

        model.getCliente(req.params.codigoMacro,req.params.id_empresa, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al buscar clientes:' + err
                });
            } else {
                if (data.length < 1) {
                    
                    res.json({
                        success: false,
                        respuesta: data,
                        mensaje: "No encontro cliente"

                    })
                } else {
                    modelAutorizado.getAutorizadosCliente(req.params.codigoMacro,req.params.id_empresa,(err2,data2)=>{
                        if (err) {
                            res.status(500).send({
                                success: false,
                                mensaje: 'Error al buscar autorizados:' + err2
                            });
                        }else{
                            if (data2.length < 1)
                            {
                                res.json({
                                    success: true,
                                    respuesta: data,
                                    autorizados:data2,
                                    mensaje: "Cliente sin autorizados"
            
                                })
                            }else{
                                res.json({
                                    success: true,
                                    respuesta: data,
                                    autorizados:data2,
                                    mensaje: "consulta con exito"
            
                                })
                            }
                        }
                    })
                   
                }


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
    app.delete('/eliminarDoc/:doc', rutasprotegidas, (req, res) => {
        model.eliminarRutaDoc(req.params.doc, (err, data) => {
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
                if(data.affectedRows<1)
                {
                    res.json({
                    success: false,
                    respuesta: "",
                    mensaje: "No encontro Cliente"

                })

                }
                else{
                    res.json({
                        success: true,
                        respuesta: data,
                        mensaje: "consulta con exito"
    
                    })
                }
                

            }
        });
    });
    app.post('/insertarRutaDocumentos', rutasprotegidas, (req, res) => {
        
        let valores=[];
        for(let item of req.body.data)
        {
            valores.push(new Array(item.codigoMacro,item.ruta,item.descripcion,item.id_empresa));
        }
        model.insertRutaDocumentos (valores, (err, data) => {
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
app.get('/rutaDocumentos/:codigoMacro/:id_empresa', rutasprotegidas, (req, res) => {

    model.getRutdasDoc(req.params.codigoMacro,req.params.id_empresa, (err, data) => {
        if (err) {
            res.status(500).send({
                success: false,
                mensaje: 'Error al buscar clientes:' + err
            });
        } else {
            if (data.length < 1) {
                
                res.json({
                    success: false,
                    respuesta: data,
                    mensaje: "No encontro documentos"

                })
            } else {
                res.json({
                    success: true,
                    respuesta: data,
                    mensaje: "cliente con documentos"

                })
               
            }


        }
    });
});
app.get('/clienteVH/:codigoMacro/:id_empresa', (req, res) => {
    modelAutorizado.getIdEmpresa(req.params.id_empresa,(err1,data1)=>{
        //console.log(data1[0].idempresa);
        if(err1){
            res.status(500).send({
                success: false,
                mensaje: 'Error al buscar empresa:' + err
            });
        }
        else
        {
            //console.log(data1);
            if(data1.length<1)
            {
                res.json({
                    success: false,
                    respuesta: data1,
                    mensaje: "No encontro empresa"

                })
            }
            else
            {
                var idEmpresa=data1[0].idempresa
                model.getClienteVH(req.params.codigoMacro,idEmpresa, (err, data) => {
                    if (err) {
                        res.status(500).send({
                            success: false,
                            mensaje: 'Error al buscar clientes:' + err
                        });
                    } else {
                        if (data.length < 1) {
                            
                            res.json({
                                success: false,
                                respuesta: data,
                                mensaje: "No encontro cliente"
            
                            })
                        } else {
                            modelAutorizado.getAutorizadosCliente(req.params.codigoMacro,idEmpresa,(err2,data2)=>{
                                if (err) {
                                    res.status(500).send({
                                        success: false,
                                        mensaje: 'Error al buscar autorizados:' + err2
                                    });
                                }else{
                                    if (data2.length < 1)
                                    {
                                        res.json({
                                            success: true,
                                            respuesta: data,
                                            autorizados:data2,
                                            mensaje: "Cliente sin autorizados"
                    
                                        })
                                    }else{
                                        res.json({
                                            success: true,
                                            respuesta: data,
                                            autorizados:data2,
                                            mensaje: "consulta con exito"
                    
                                        })
                                    }
                                }
                            })
                           
                        }
            
            
                    }
                });
            }

        }
    })


});

}