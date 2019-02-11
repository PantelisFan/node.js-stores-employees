//jshint esversion:6

"use strict";

// REQUIRING MONGOOSE & Schema

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//MODELING THE Schema

var EmployeesSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the employee'
  },
  age: {
    type: Number,
    min: 0,
    max: 100
  },
  salary: {
    type: Number
  },
  dateOfEmployment: {
    type: String,
    default: Date.now
  },
  storeId : String

});

module.exports = mongoose.model('Employees', EmployeesSchema);