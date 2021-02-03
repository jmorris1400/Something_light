const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require ('body-parser');
const student = require ('../models/student.js')

//Create Routes for REST API endpoint


//We want to insert a new student into our Mongo database, so we need to define the Schema of the
//data in Mongoose first.

router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());
//now if you type get in your url it will connect you

//student

//				HTTP POST Requests - using crud - http://localhost:4000/api/student/id
/* get single student by ID */
router.get('/api/student/:id', function(req, res,next){
	student.findById(req.params.id, function(err, student){
		if(err) return next(err);
			res.json(student);
		});//• Create a route to get a single item from
		//database.
	});


// get all student 
//http://localhost:4000/api/student
router.get('/api/student', function(req, res,next){
	student.find(function(err, student){
		if(err) return next(err);
			res.json(student);
		});
	});

//post request - saving data
/*save student We can use a post request to add a new student to the
system.*/
	router.post('/api/student', function(req, res,next){
		student.create(req.body, function(err, student){
			if(err) return next(err);
				res.json(student);
			});
		});
	/*update*///To update an existing resource on the server you can use a PUT request.
	router.put('/api/student/:id', function(req, res, next){
		console.log(req.params.id)
		student.findByIdAndUpdate(req.params.id,req.body,{new:true}, function(err,student){
			console.log(req.params.id)	
			if(err) return next(err);
			res.json(student);
		}); //should I delete id since I didn't write a variable
		//for it?
	});
module.exports = router;

