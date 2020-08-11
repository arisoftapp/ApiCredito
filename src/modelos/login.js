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
userModel.updateSesion = (callback) => {
    var sql = "UPDATE usuarios SET sesion=1 ";
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
    console.log("model" + usuario)

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