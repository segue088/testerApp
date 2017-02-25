var Customer = require('../models/Customer')
var Promise = require('bluebird')

module.exports = {

	get: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Customer.find(params, function(err, customers){
				if(err){
					reject(err)
				}

				resolve(customers)
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){

			Customer.findById(id, function(err, customer){
				if(err){
					reject(err)
				}

				resolve(customer)
			})
		})
	},

	post: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Customer.create(params, function(err, customer){
				if(err){
					reject(err)
				}

				resolve(customer)
			})
		})
	},

	put: function(id, params, isRaw){
		return new Promise(function(resolve, reject){

			Customer.indByIdAndUpdate(id, params, function(err, customer){
				if(err){
					reject(err)
				}

				resolve(customer)
			})
		})
	},

	delete: function(params, isRaw){

	}


}