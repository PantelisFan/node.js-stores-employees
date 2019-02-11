//jshint esversion:6

"use strict";

// REQUIRING MONGOOSE & Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//MODELING THE Schema

var StoresSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the employee'
  },
  budget: {
    type: Number
  }
});

module.exports = mongoose.model('Stores', StoresSchema);