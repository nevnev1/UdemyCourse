const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const dbConfig = require('./dbConfig');
const userSchema = require('./userSchema');

const uName = dbConfig.dbConfig().uName;
const pass = dbConfig.dbConfig().pass;

app.use(cors());
app.use(bodyParser.json());

//const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://"+uName+":"+pass+"@custodial-service-testing-ezvqc.mongodb.net/test?retryWrites=true";

const mongoose = require('mongoose');
mongoose.connect(uri, { useNewUrlParser: true });

const User = mongoose.model('User', userSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('test');
});

User.findOne({ 'email': 'test@test.nl' }, function(err, user) {
    if (err) {
        return handleError(err);
    }
    console.log(user);
});

//const client = new MongoClient(uri, { useNewUrlParser: true });

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