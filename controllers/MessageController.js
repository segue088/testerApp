var Message = require('../models/Message')
var Promise = require('bluebird')

module.exports = {

	get: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Message.find(params, function(err, messages){
				if(err){
					reject(err)
				}

				resolve(messages)
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){

			Message.findById(id, function(err, message){
				if(err){
					reject(err)
				}

				resolve(message)
			})
		})
	},

	post: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Message.create(params, function(err, message){
				if(err){
					reject(err)
				}

				resolve(message)
			})
		})
	},

	put: function(id, params, isRaw){
		return new Promise(function(resolve, reject){

			Message.findByIdAndUpdate(id, params, function(err, message){
				if(err){
					reject(err)
				}

				resolve(message)
			})
		})
	},

	delete: function(params, isRaw){

	}


}