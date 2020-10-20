
const jwt = require('jsonwebtoken');
const multer=require('multer');
const path=require('path');
const express = require('express');
module.exports = function(app, rutasprotegidas) {
    const storage=multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,path.join(__dirname,'../documentos'));
        },
        filename:function(req,file,cb){
            cb(null,`${file.originalname}`)
        }
    })
    const uploader=multer({storage});
    app.use(express.static(path.join(__dirname,'/')));
    app.post('/uploading_documentos',uploader.array('file',5),(req,res)=>{   
        const {file,body}=req;       
        res.status(200).json({
            success:true,
            mensaje:"documentos guardados con exito",
            file:file
        })

    })
    app.get("/download_documentos/:nombre",(req,res)=>{

        console.log(req.params.nombre)
        var ruta=path.join(__dirname,'../documentos/')+req.params.nombre
        res.download(ruta);
    })


}