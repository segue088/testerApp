var Group = require('../models/Group')
var Promise = require('bluebird')

module.exports = {

	get: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Group.find(params, function(err, groups){
				if(err){
					reject(err)
				}

				resolve(groups)
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){

			Group.findById(id, function(err, group){
				if(err){
					reject(err)
				}

				resolve(group)
			})
		})
	},

	post: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Group.create(params, function(err, group){
				if(err){
					reject(err)
				}

				resolve(group)
			})
		})
	},

	put: function(id, params, isRaw){
		return new Promise(function(resolve, reject){

			Group.findByIdAndUpdate(id, params, function(err, group){
				if(err){
					reject(err)
				}

				resolve(group)
			})
		})
	},

	delete: function(params, isRaw){

	}


}