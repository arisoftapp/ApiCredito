var con = require('../conexion_db');

let userModel = {};

userModel.insertHuella = (data, callback) => {
    //console.log(data.idcliente);
    var sql = "INSERT INTO huellas (idcliente, huella,id_empresa) VALUES ('" + data.idcliente + "', '" + data.huella + "', "+data.id_empresa+" )";
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

userModel.getHuella = (idCliente,id_empresa, callback) => {
    //console.log(data.idcliente);
    var sql = "SELECT * FROM huellas where idcliente='" + idCliente + "' AND id_empresa="+id_empresa+" ";
    con.query(sql, function(err, result) {
        if (err) {
            callback(err, null);
            //throw err;
        } else {

            console.log("1 record inserted " + result.message);
            callback(null, result);
        }

    });


};
userModel.deleteRutasAutorizado = (id_autorizado, callback) => {
    //console.log(data.idcliente);
    var sql = "DELETE FROM huella_autorizados where id_autorizados=" + id_autorizado + "  ";
    con.query(sql, function(err, result) {
        if (err) {
            callback(err, null);
            //throw err;
        } else {

            console.log("1 record inserted " + result.message);
            callback(null, result);
        }

    });


};
userModel.updateRutaHuellas = (datos,rutas,callback) => {
    
    for(item of datos)
    {

        console.log(datos.length+" "+rutas.length);
        //var sql = "UPDATE huella_autorizados SET ruta='" + datos.ruta + "'  WHERE idhuella="+datos.idhuella+" ";
    }
     
    //var sql = "UPDATE huella_autorizados SET ruta='" + datos.ruta + "'  WHERE codigoMacro='" + datos.codigoMacro + "' AND id_autorizados='"+datos.idautorizado+"' AND id_empresa="+datos.id_empresa+" AND idhuella="+datos.idhuella+" ";
    /*
    con.query(sql, function(err, result) {
        if (err) {
            console.log(err);
            callback(err, null);
            //throw err;
        } else {

            console.log("result " + result);
            callback(null, result.affectedRows);
        }

    });
    */
}
module.exports = userModel;