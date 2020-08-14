var con = require('../conexion_db');

let userModel = {};

userModel.insertHuella = (data, callback) => {
    console.log(data.idcliente);
    var sql = "INSERT INTO huellas (idcliente, huella) VALUES ('" + data.idcliente + "', '" + data.huella + "')";
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

userModel.getHuella = (idCliente, callback) => {
    //console.log(data.idcliente);
    var sql = "SELECT * huellas where idcliente='" + idCliente + "'";
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
module.exports = userModel;