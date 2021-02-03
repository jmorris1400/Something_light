
const mongoose = require('mongoose'); //need
//schedma file just need to see schema

const teacherSchema = new mongoose.Schema(
  {
    data: {statusCode: 200,

      firstName: "John0000",
  lastName: "Michael000",
  clientId: "9994567"
    }
  
  
});

module.exports = mongoose.model('teacher', teacherSchema);

