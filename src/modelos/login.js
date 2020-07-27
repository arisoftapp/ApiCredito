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
            b.nombre_empresa AS 'empresa',
            b.id_empresa as 'id_empresa',
            b.dominio AS 'dominio',
            a.username AS 'usuario',
            a.password AS 'contra'
        FROM 
            usuarios AS a

        WHERE username='` + usuario + `' `, (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }


};



module.exports = userModel;