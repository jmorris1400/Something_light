const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const teacher = require('./routes/teacher');
const student = require('./routes/student');
//basic set up

app.use('/', student);
app.use('/', teacher);
//mapp request, then get request and call it back
const port = process.env.PORT || 4000;

//rest api - crud

//now connect to db
const db = 'mongodb://localhost:27017/mongo-games='
mongoose.connect(db,err =>{
	if(err){
		console.log('Error!' + err)
	} else {
		console.log('Connected to mongodb')
	}
})

app.listen(port, () => console.log('Listing on port $(port)...'));
