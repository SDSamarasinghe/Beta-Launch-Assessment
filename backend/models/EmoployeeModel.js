const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: true,
  },

  fullname: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  designation: {
    type: String,
    required: true,
  },

  joinedDate: {
    type: String,
    required: true,
  },

  salary: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },
  
  personlnote: {
    type: String,
    required: true,
  },

  dispName: {
    type: String,
    required: true,
  },

  dateOfBirth: {
    type: String,
    required: true,
  },

  empType: {
    type: String,
    required: true,
  },

  experience: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model("EmployeeData", EmployeeSchema);

module.exports = Employee;
