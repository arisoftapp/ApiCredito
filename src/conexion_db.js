var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "arisoft.2019",
    database: "mesa_arisoft_db"
});
module.exports = con;