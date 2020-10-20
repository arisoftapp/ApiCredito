var con = require('../conexion_db');

let userModel = {};

userModel.insertAutorizado = (data, callback) => {
    //console.log(data.nombre);
    var sql = "INSERT INTO autorizados (nombre, a_paterno, a_materno,comentarios,codigoMacro,foto,valFoto,id_empresa) VALUES ('" + data.nombre + "', '" + data.a_paterno + "', '" + data.a_materno + "', '" + data.comentarios + "', '" + data.codigoMacro + "','"+data.foto+"',"+data.valFoto+", "+data.id_empresa+" )";
    con.query(sql, function(err, result) {
        if (err) {
            callback(err, null);
            //throw err;
        } else {

            console.log("1 record inserted " + result);
            callback(null, result.insertId);
        }

    });


};

userModel.insertDocAut = (data, callback) => {
    //console.log(data.nombre);
    var sql = "INSERT INTO doc_autorizados (nombre,id_autorizados) VALUES ?";
    con.query(sql,[data], function(err, result) {
        if (err) {
            console.log(err);
            callback(err, null);
            //throw err;
        } else {

            console.log("result " + result);
            callback(null, result.affectedRows);
        }

    });


};

userModel.insertRutaHuella = (data,callback) => {
    //console.log(data.nombre);
    var sql = "INSERT INTO huella_autorizados (ruta,id_autorizados,codigoMacro,id_empresa) VALUES ?";
    con.query(sql,[data], function(err, result) {
        if (err) {
            console.log(err);
            callback(err, null);
            //throw err;
        } else {

            console.log("result " + result);
            callback(null, result.affectedRows);
        }

    });
};
userModel.updateAutorizados = (datos,callback) => {
    //console.log(datos);
    var sql = "UPDATE autorizados SET nombre='" + datos.nombre + "' ,a_paterno='" + datos.a_paterno + "' ,a_materno='" + datos.a_materno + "' ,comentarios='" + datos.comentarios + "' ,foto='"+datos.foto+"' ,valFoto="+datos.valFoto+" ,estatus="+datos.estatus+" WHERE codigoMacro='" + datos.codigoMacro + "' AND idautorizados='"+datos.idautorizado+"' AND id_empresa="+datos.id_empresa+"  ";
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
};
userModel.getRutasHuella = (codigoMacro,id_empresa, callback) => {

    if (con) {
        //var sql = "SELECT * FROM huella_autorizados WHERE codigoMacro='"+codigoMacro+"' ";
        var sql = "SELECT ruta,nombre,a_paterno,a_materno,valFoto,foto,estatus FROM huella_autorizados,autorizados WHERE ((huella_autorizados.id_autorizados=autorizados.idautorizados) AND huella_autorizados.codigoMacro='"+codigoMacro+"' AND huella_autorizados.id_empresa='"+id_empresa+"') ";
        con.query(sql, (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }


};
userModel.getIdEmpresa = (empresa, callback) => {

    if (con) {
        var sql = "SELECT idempresa FROM empresa WHERE  codigoMacro='"+empresa+"' ";
        con.query(sql, (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }
};
userModel.getAutorizadoId = (id,codigoMacro,empresa, callback) => {

    if (con) {
        var sql = "SELECT * FROM autorizados WHERE idautorizados="+id+" AND codigoMacro='"+codigoMacro+"' AND id_empresa="+empresa+" ";
        con.query(sql, (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }
};
userModel.getAutorizadosCliente=(codigoMacro,id_empresa,callback)=>{
    if (con) {
        var sql = "SELECT idautorizados,nombre,a_paterno,a_materno,valFoto,nom_estatus FROM autorizados,estatus where autorizados.estatus=estatus.idestatus AND autorizados.codigoMacro='"+codigoMacro+"' AND autorizados.id_empresa="+id_empresa+" ";
        con.query(sql, (err, rows) => {
            if (err) {
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }

};
module.exports = userModel;