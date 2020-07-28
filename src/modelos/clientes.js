var con = require('../conexion_db');

let userModel = {};

userModel.insertCliente = (data, callback) => {
    console.log(data);
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO clientes (nom_cliente, puesto, comentarios) VALUES (" + data.nombre + ", " + data.puesto + "," + data.comentario + ")";
        con.query(sql, function(err, result) {
            if (err) throw err;
            callback(null, result.message);
            console.log("1 record inserted");
        });
    });

};
module.exports = userModel;