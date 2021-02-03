
const mongoose = require('mongoose'); //need
//schedma file just need to see schema

const gameSchema = new mongoose.Schema({
  { 
    data: {statusCode: 200,

      firstName: "John0000",
  lastName: "Michael000",
  clientId: "9994567"
    }
});

module.exports = mongoose.model('game', gameSchema);



//app.use('./routes/games');
//We want to insert a new game into our Mongo database, so we need to define the Schema of the
//data in Mongoose first.

//Create Routes for REST API endpoint
//const express = require('express');
//const router = express.Router();
//const bodyParser = require ('body-parser');
//const bodyParser = require ('../models/game.js');

//router.use(bodyParser.urlencoded({ extended: true}));
//router.use(bodyParser.json());
//now if you type get in your url it will connect you

//Models are higher-order constructors that take a schema and create an instance of a document
//fix scehdma
