var con = require('../conexion_db');

let userModel = {};

userModel.insertCliente = (data, callback) => {
    console.log(data.nombre);
    var sql = "INSERT INTO clientes (nom_cliente, puesto, comentarios) VALUES ('" + data.nombre + "', '" + data.puesto + "','" + data.comentario + "')";
    con.query(sql, function(err, result) {
        if (err) {
            callback(err, null);
            //throw err;
        } else {

            console.log("1 record inserted " + result.message);
            callback(null, result.message);
        }

    });


};
userModel.getClientes = (callback) => {
    var sql = "SELECT * FROM clientes";
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
userModel.eliminarCliente = (cliente, callback) => {
    var sql = "DELETE FROM  clientes where cliente='" + cliente + "'";
    con.query(sql, function(err, result) {
        if (err) {
            callback(err, null);
            //throw err;
        } else {

            console.log("1 record delete " + result);
            callback(null, result);
        }

    });
}
userModel.eliminartodoclientes = (cliente, callback) => {
    var sql = "DELETE FROM  clientes where cliente='" + cliente + "'";
    con.query(sql, function(err, result) {
        if (err) {
            callback(err, null);
            //throw err;
        } else {

            console.log("1 record inserted " + result);
            callback(null, result);
        }

    });
}
module.exports = userModel;