const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require ('body-parser');
const teacher = require ('../models/teacher.js')

router.use(bodyParser.urlencoded({ extended: true}));
router.use(bodyParser.json());
//now if you type get in your url it will connect you

//teacher

//				HTTP POST Requests - using crud - http://localhost:4000/api/teacher/id
/* get single teacher by ID */
router.get('/api/teacher/:id', function(req, res,next){
	teacher.findById(req.params.id, function(err, teacher){
		if(err) return next(err);
			res.json(teacher);
		});//• Create a route to get a single item from
		//database.
	});


// get all teacher 
//http://localhost:4000/api/teacher
router.get('/api/teacher', function(req, res,next){
	teacher.find(function(err, teacher){
		if(err) return next(err);
			res.json(teacher);
		});
	});

//post request - saving data
/*save teacher We can use a post request to add a new teacher to the
system.*/
	router.post('/api/student', function(req, res,next){
		teacher.create(req.body, function(err, teacher){
			if(err) return next(err);
				res.json(teacher);
			});
		});
	/*update*///To update an existing resource on the server you can use a PUT request.
	router.put('/api/student/:id', function(req, res, next){
		console.log(req.params.id)
		teacher.findByIdAndUpdate(req.params.id,req.body,{new:true}, function(err,teacher){
			console.log(req.params.id)	
			if(err) return next(err);
			res.json(teacher);
		}); //should I delete id since I didn't write a variable
		//for it?
	});
module.exports = router;

