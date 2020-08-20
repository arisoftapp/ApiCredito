var con = require('../conexion_db');

let userModel = {};

userModel.insertAutorizado = (data, callback) => {
    //console.log(data.nombre);
    var sql = "INSERT INTO autorizados (nombre, a_paterno, a_materno,comentarios,codigoMacro) VALUES ('" + data.nombre + "', '" + data.a_paterno + "', '" + data.a_materno + "', '" + data.comentarios + "', '" + data.codigoMacro + "')";
    con.query(sql, function(err, result) {
        if (err) {
            callback(err, null);
            //throw err;
        } else {

            console.log("1 record inserted " + result);
            callback(null, result);
        }

    });


};

module.exports = userModel;