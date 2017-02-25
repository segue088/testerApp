var express = require('express');
var router = express.Router();
var controllers = require('../controllers')

/* GET home page. */
router.get('/:resource', function(req, res, next) {
  	
	var resource = req.params.resource
  	var controller = controllers[resource]
	
	if(!controller){
		res.json({
	  		confirmation: 'fail',
	  		message: 'not a valid resource: ' + resource
	 	})
	 	return	
	}

	controller.get(req.query, false)
	.then(function(results){
		res.json({
	  		confirmation: 'success',
	  		message: results 
	 	})
	})
	.catch(function(err){
		res.json({
	  		confirmation: 'fail',
	  		message: 'no result'
	 	})
	})
});


router.get('/:resource/:id', function(req, res, next) {
  	
	var resource = req.params.resource
  	var controller = controllers[resource]
	
	if(!controller){
		res.json({
	  		confirmation: 'fail',
	  		message: 'not a valid resource: ' + resource
	 	})
	 	return	
	}

	var id = req.params.id
  	controller.getById(id, false)
	.then(function(result){
		res.json({
	  		confirmation: 'success',
	  		message: result 
	 	})
	})
	.catch(function(err){
		res.json({
	  		confirmation: 'fail',
	  		message: 'no result for id: ' + id
	 	})
	})
});

router.post('/:resource', function(req, res, next) {
  	
	var resource = req.params.resource
  	var controller = controllers[resource]
	
	if(!controller){
		res.json({
	  		confirmation: 'fail',
	  		message: 'not a valid resource: ' + resource
	 	})
	 	return	
	}

	var body = req.body
  	controller.post(body, false)
	.then(function(result){
		res.json({
	  		confirmation: 'success',
	  		message: result 
	 	})
	})
	.catch(function(err){
		res.json({
	  		confirmation: 'fail',
	  		message: 'no result for id: ' + id
	 	})
	})
});

module.exports = router;