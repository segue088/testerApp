var Provider = require('../models/Provider')
var Promise = require('bluebird')

module.exports = {

	get: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Provider.find(params, function(err, providers){
				if(err){
					reject(err)
				}

				resolve(providers)
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){

			Provider.findById(id, function(err, provider){
				if(err){
					reject(err)
				}

				resolve(provider)
			})
		})
	},

	post: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Provider.create(params, function(err, provider){
				if(err){
					reject(err)
				}

				resolve(provider)
			})
		})
	},

	put: function(id, params, isRaw){
		return new Promise(function(resolve, reject){

			Provider.findByIdAndUpdate(id, params, function(err, provider){
				if(err){
					reject(err)
				}

				resolve(provider)
			})
		})
	},

	delete: function(params, isRaw){

	}


}