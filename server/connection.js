const mysql = require("mysql2");

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "f5c243f9fd155a7f5cbeb72f442581ad",
    database: "spm_system",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if(!err){
        console.log("Connected to database!");
    }
    else {
        console.log("Error with connection to database!");
    }
});

module.exports = mysqlConnection;