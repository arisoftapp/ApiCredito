const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
config = require('./config');
const morgan = require('morgan');
const multer=require('multer');
const fs=require('fs');
const path=require('path');
const cors=require('cors');

const app = express();

const port = process.env.PORT || 3100;

app.set('llave', config.llave);
app.use(morgan('dev'));
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//subir imagenes
/*
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        console.log("guardando")
        cb(null,path.join(__dirname,'/imagenes'));
    },
    filename:function(req,file,cb){
        cb(null,`${file.fieldname}-${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
})
const uploader=multer({storage});
app.use(express.static(path.join(__dirname,'/')));
app.post('/uploading',uploader.single('file'),(req,res)=>{
    const {file,body}=req;
    res.status(200).json({
        body:body,
        file:file
    })
})
*/
const rutasProtegidas = express.Router();
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, app.get('llave'), (err, decoded) => {
            if (err) {
                return res.json({ mensaje: 'Falló la autenticación del token.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({
            success: true,
            mensaje: 'Token no proveída.'
        });
    }
});

app.get('/prueb', cors(), (req, res) => {
    res.send({ mensaje: "hola mundo" })
})
require('./rutas/login')(app, rutasProtegidas);
require('./rutas/clientes')(app, rutasProtegidas);
require('./rutas/huella')(app, rutasProtegidas);
require('./rutas/autorizados')(app, rutasProtegidas);
require('./rutas/sb_fotos')(app, rutasProtegidas);
require('./rutas/sb_huellas')(app, rutasProtegidas);
require('./rutas/sb_documentos')(app, rutasProtegidas);
require('./rutas/admin')(app, rutasProtegidas);
app.listen(port, () => {
    console.log("apirest " + port);
})