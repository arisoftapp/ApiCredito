var con = require('../conexion_db');

let userModel = {};

userModel.insertCliente = (data, callback) => {
    //console.log(data.nombre);
    var sql2 = "INSERT INTO clientes (codigoMacro, nombre, a_paterno,a_materno,puesto,comentarios,id_empresa) VALUES ('" + data.codigoMacro + "', '" + data.nombre + "', '" + data.a_paterno + "', '" + data.a_materno + "', '" + data.puesto + "','" + data.comentarios + "',"+data.id_empresa+" ) WHERE NOT EXIST (SELECT codigoMacro FROM cliente WHERE id_empresa="+data.id_empresa+" AND codigoMacro='"+data.codigoMacro+"' )";
    var sql = "INSERT INTO clientes (codigoMacro, nombre, a_paterno,a_materno,puesto,comentarios,id_empresa) VALUES ('" + data.codigoMacro + "', '" + data.nombre + "', '" + data.a_paterno + "', '" + data.a_materno + "', '" + data.puesto + "','" + data.comentarios + "',"+data.id_empresa+" )";
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
userModel.buscarClienteEmp=(data,callback)=>{
    //var sql = "SELECT * FROM clientes WHERE id_empresa="+data.id_empresa+" ";
    var sql="SELECT * FROM clientes WHERE id_empresa="+data.id_empresa+" AND codigoMacro='"+data.codigoMacro+"' ";
    con.query(sql, function(err, result) {
        if (err) {
            callback(err, null);
            //throw err;
        } else {

            console.log("consulta " + result);
            callback(null, result);
        }

    });
}
userModel.getClientes = (id_empresa,callback) => {
    var sql = "SELECT * FROM clientes WHERE id_empresa="+id_empresa+" ";
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
userModel.getCliente = (codigoMacro,id_empresa, callback) => {
    var sql = "SELECT * FROM clientes where codigoMacro='" + codigoMacro + "' AND id_empresa="+id_empresa+" ";
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
userModel.getClienteVH = (codigoMacro,id_empresa, callback) => {
    var sql = "SELECT * FROM clientes where codigoMacro='" + codigoMacro + "' AND id_empresa="+id_empresa+" ";
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
userModel.insertRutaDocumentos = (data,callback) => {
    //console.log(data.nombre);
    var sql = "INSERT INTO documentos (codigoMacro,ruta,descripcion,id_empresa) VALUES ?";
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
userModel.getRutdasDoc = (codigoMacro,id_empresa, callback) => {
    var sql = "SELECT * FROM documentos where codigoMacro='" + codigoMacro + "' AND id_empresa="+id_empresa+" ";
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
userModel.eliminarRutaDoc = (iddocumentos, callback) => {
    var sql = "DELETE FROM  documentos where iddocumentos='" + iddocumentos + "'";
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
module.exports = userModel;