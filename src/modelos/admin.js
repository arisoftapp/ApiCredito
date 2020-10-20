var con = require('../conexion_db');

let userModel = {};
userModel.insertEmpresa = (data, callback) => {
    //console.log(data.nombre);
    var sql = "INSERT INTO empresa (nombre_empresa, codigoMacro) VALUES ('" + data.nombre_empresa + "', '" + data.codigoMacro + "')";
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
userModel.getIdEmpresa = (data, callback) => {
    //console.log(data.nombre);
    var sql = "SELECT * FROM empresa where codigoMacro='" + data.codigoMacro+"' ";
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
userModel.getEmpresas = ( callback) => {
    //console.log(data.nombre);
    var sql = "SELECT * FROM empresa  ";
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
userModel.getUsuario = (data, callback) => {
    //console.log(data.nombre);
    var sql = "SELECT * FROM usuarios where nom_usuario='" + data.nom_usuario+"' ";
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
userModel.insertUsuario = (data,ruta, callback) => {
    //console.log(data.nombre);
    var sql = "INSERT INTO usuarios (nom_usuario, contra,ruta,id_empresa) VALUES ('" + data.nom_usuario + "', '" + data.contra + "', '"+ruta+"','"+data.idEmpresa+"')";
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