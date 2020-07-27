var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "arisoft.2019",
    database: "acredito_db"
});
module.exports = con;