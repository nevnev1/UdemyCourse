const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const dbConfig = require('./dbConfig');

const uName = dbConfig.dbConfig().uName;
const pass = dbConfig.dbConfig().pass;

app.use(cors());
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://"+uName+":"+pass+"@custodial-service-testing-ezvqc.mongodb.net/test?retryWrites=true";

const client = new MongoClient(uri, { useNewUrlParser: true });

//const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     console.log(err);
//     const collection = client.db("CustodialService").collection("users");
  
//     // perform actions on the collection object
//     client.close();
// });

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});