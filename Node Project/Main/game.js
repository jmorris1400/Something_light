
const mongoose = require('mongoose'); //need
//schedma file just need to see schema

const studentSchema = new mongoose.Schema({
  firstName: String,
  grade: String,
  age: Number,
});

module.exports = mongoose.model('student', studentSchema);

