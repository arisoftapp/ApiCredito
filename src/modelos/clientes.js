var con = require('../conexion_db');

let userModel = {};

userModel.insertCliente = (data, callback) => {
    console.log(data.nombre);
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO clientes (nom_cliente, puesto, comentarios) VALUES ('" + data.nombre + "', '" + data.puesto + "','" + data.comentario + "')";
        con.query(sql, function(err, result) {
            if (err) {
                callback(err, null);
                //throw err;
            } else {

                console.log("1 record inserted " + result);
                callback(null, result.message);
            }

        });
    });

};
module.exports = userModel;