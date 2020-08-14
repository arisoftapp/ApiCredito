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
userModel.getCliente = (codigoMacro, callback) => {
    var sql = "SELECT * FROM clientes where codigoMacro='" + codigoMacro + "' ";
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
    var sql = "UPDATE clientes SET nombre='" + datos.nombre + "' ,a_paterno='" + datos.a_paterno + "' ,a_materno='" + datos.a_materno + "' , puesto='" + datos.puesto + "' ,comentarios='" + datos.comentarios + "'where codigoMacro='" + datos.codigoMacro + "'   ";
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