
const jwt = require('jsonwebtoken');
const multer=require('multer');
const path=require('path');
const express = require('express');
module.exports = function(app, rutasprotegidas) {
    const storage=multer.diskStorage({
        destination:function(req,file,cb){
            //console.log(_dirname);
            cb(null,path.join(__dirname,'../fotos'));
        },
        filename:function(req,file,cb){
            cb(null,`${Date.now()}`+`${file.originalname}`)
        }
    })
    const uploader=multer({storage});
    app.use(express.static(path.join(__dirname,'/')));
    app.post('/uploading_fotos',uploader.single('file'),(req,res)=>{   
        const {file,body}=req;       
        res.status(200).json({
            success:true,
            mensaje:"foto guardada con exito",
            nombre:file.filename,
            file:file
        })

    })
    app.get("/download_fotos/:nombre",(req,res)=>{

        console.log(req.params.nombre);
        var ruta=path.join(__dirname,'../fotos/')+req.params.nombre
        res.download(ruta);
    })


}