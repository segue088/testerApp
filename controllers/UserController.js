var User = require('../models/User')
var Promise = require('bluebird')

module.exports = {

	get: function(params, isRaw){
		return new Promise(function(resolve, reject){

			User.find(params, function(err, users){
				if(err){
					reject(err)
				}

				resolve(users)
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){

			User.findById(id, function(err, user){
				if(err){
					reject(err)
				}

				resolve(user)
			})
		})
	},

	post: function(params, isRaw){
		return new Promise(function(resolve, reject){

			User.create(params, function(err, user){
				if(err){
					reject(err)
				}

				resolve(user)
			})
		})
	},

	put: function(id, params, isRaw){
		return new Promise(function(resolve, reject){

			User.findByIdAndUpdate(id, params, function(err, user){
				if(err){
					reject(err)
				}

				resolve(user)
			})
		})
	},

	delete: function(params, isRaw){

	}


}