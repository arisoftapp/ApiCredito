
const jwt = require('jsonwebtoken');
const multer=require('multer');
const path=require('path');
const express = require('express');
module.exports = function(app, rutasprotegidas) {
    const storage=multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,path.join(__dirname,'../huellas'));
        },
        filename:function(req,file,cb){
            cb(null,`${file.originalname}`)
        }
    })
    const uploader=multer({storage});
    app.use(express.static(path.join(__dirname,'/')));
    app.post('/uploading_huellas',uploader.array('file',5),(req,res,next)=>{   
        const {file,body}=req;
        console.log(req.body)
        res.status(200).json({
            success:true,
            mensaje:"foto guardada con exito",
            file:req.file
        })

    })
    app.post("/download_huellas/:nombre",(req,res)=>{

        //console.log(req.params.nombre)
        //console.log(req.body);
        var ruta=path.join(__dirname,'../huellas/')+req.params.nombre;
        res.download(ruta);
        
    })


}