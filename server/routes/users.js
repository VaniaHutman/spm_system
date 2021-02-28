const express = require("express");
const bodyParser = require("body-parser");
const Router = express.Router();
const mysqlConnection = require("../connection");
const urlencodedParser = bodyParser.urlencoded({extended: false});

Router.get("/allUser", urlencodedParser, (request, response) => {
    mysqlConnection.query("SELECT * from user_data", (err, rows) => {
        if(!err){
            console.log(rows);
            response.send(rows);
        }
        else {
            console.log("Error to select all from request!")
        }
    });
});

Router.post("/new", urlencodedParser, (request, response) => {
    let status = "new";
    let fullName = request.body.name;
    let universityName = request.body.uni;
    let phone = request.body.phone;
    let email = request.body.email;
    console.log(
        "status: " + status +
        " fullName: " + fullName +
        " university: " + universityName +
        " phone: " + phone +
        " email: " + email
    );

    mysqlConnection.query(`INSERT request (Status, Full_name, Name_of_University, Phone, Email) ` +
    `VALUES ("${status}", "${fullName}", "${universityName}", "${phone}", "${email}")`, 
    (err, rows) => {
        if(!err){
            response.send(rows);
        }
        else {
            console.log("!Error to send request!")
        }
    });
});

module.exports = Router;