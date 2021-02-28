const express = require("express");
const bodyParser = require("body-parser");
const Router = express.Router();
const mysqlConnection = require("../connection");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

Router.get("/allNewRequests", urlencodedParser, (request, response) => {
  mysqlConnection.query(
    "SELECT * from request WHERE status = 'new'",
    (err, rows) => {
      if (!err) {
        console.log(rows);
        response.send(rows);
      } else {
        console.log("Error to select all from request!");
    }});
});

Router.get("/allWaitingRequests", urlencodedParser, (request, response) => {
  mysqlConnection.query(
    "SELECT * from request WHERE status = 'wait'",
    (err, rows) => {
      if (!err) {
        console.log(rows);
        response.send(rows);
      } else {
        console.log("Error to select from request!");
      }
    }
  );
});

Router.delete("/deleteById", urlencodedParser, (request, response) => {
  let id = request.body.id;
  mysqlConnection.query(
    `DELETE from request WHERE Id = ${id}`,
    (err, results) => {
      if (!err) response.send(results);
      else console.log("Error to deleted");
    }
  );
});

Router.post("/changeStatusById", urlencodedParser, (request, response) => {
  let id = request.body.id;
  let status = request.body.status;
  mysqlConnection.query(
    `UPDATE request SET Status = "${status}" WHERE Id = ${id}`,
    (err, results) => {
      if (!err) response.send(results);
      else console.log("Error to deleted");
    }
  );
});

Router.post("/new", urlencodedParser, (request, response) => {
  let status = "new";
  let fullName = request.body.name;
  let universityName = request.body.uni;
  let phone = request.body.phone;
  let email = request.body.email;

  mysqlConnection.query(
    `INSERT request (Status, Full_name, Name_of_University, Phone, Email) ` +
      `VALUES ("${status}", "${fullName}", "${universityName}", "${phone}", "${email}")`,
    (err, rows) => {
      if (!err) {
        response.send(rows);
      } else {
        console.log("!Error to send request!");
      }
    }
  );
});

module.exports = Router;