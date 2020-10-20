var dbAdmin = require('../conexion_db');

let userModel = {};

userModel.getValidarUsuario = (callback) => {
    if (dbAdmin) {
        dbAdmin.query(`
        SELECT *
        FROM 
        usuarios
         `, (err, rows) => {
            if (err) {
                callback(err, null);
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }


};
userModel.auth = (usuario, callback) => {

    if (dbAdmin) {
        dbAdmin.query(`SELECT 
        nom_usuario,contra,ruta,sesion,nombre_empresa,idempresa
        FROM 
            usuarios,empresa
        WHERE ((usuarios.nom_usuario='` + usuario + `') AND empresa.idempresa=usuarios.id_empresa ) `, (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }


};
userModel.updateSesion = (sesion, usuario, callback) => {
    //console.log(sesion+" "+usuario);
    var sql = "UPDATE usuarios SET sesion=" + sesion + " WHERE nom_usuario='" + usuario + "'";
    //console.log(sql);
    dbAdmin.query(sql, function(err, result) {
        if (err) {
            callback(err, null);
            //throw err;
        } else {

            console.log("1 record update " + result);
            callback(null, result);
        }

    });
};


userModel.getUsuario = (usuario, callback) => {
    if (dbAdmin) {
        dbAdmin.query(`SELECT 
        *
        FROM 
            usuarios
        WHERE nom_usuario='` + usuario + `' `, (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }


};


module.exports = userModel;