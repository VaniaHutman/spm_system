const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const RequestRoutes = require("./routes/requests");

const port = 3000;

var app = express();
app.use(bodyParser.json());
app.use(cors());


app.use("/request", RequestRoutes);

app.listen(port, function(){
    console.log(`Server is listening on the port ${port}!`);
});