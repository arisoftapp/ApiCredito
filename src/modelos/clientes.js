var con = require('../conexion_db');

let userModel = {};

userModel.insertCliente = (data, callback) => {
    //console.log(data.nombre);
    var sql = "INSERT INTO clientes (codigoMacro, nombre, a_paterno,a_materno,puesto,comentarios) VALUES ('" + data.codigoMacro + "', '" + data.nombre + "', '" + data.a_paterno + "', '" + data.a_materno + "', '" + data.puesto + "','" + data.comentarios + "')";
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
userModel.getClientes = (callback) => {
    var sql = "SELECT * FROM clientes";
    con.query(sql, function(err, result) {
        if (err) {
            callback(err, null);
            //throw err;
        } else {

            console.log("consulta " + result);
            callback(null, result);
        }

    });


};
userModel.eliminarCliente = (cliente, callback) => {
    var sql = "DELETE FROM  clientes where nom_cliente='" + cliente + "'";
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

            console.log("1 record delete " + result);
            callback(null, result);
        }

    });
}
userModel.modificarcliente = (datos, callback) => {
    var sql = "UPDATE clientes SET puesto='" + datos.puesto + "' ,comentarios='" + datos.comentario + "'where nom_cliente='" + datos.cliente + "'   ";
    con.query(sql, function(err, result) {
        if (err) {
            callback(err, null);
            //throw err;
        } else {

            console.log("1 record update " + result);
            callback(null, result);
        }

    });
}
module.exports = userModel;