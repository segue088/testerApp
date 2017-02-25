var Member = require('../models/Member')
var Promise = require('bluebird')

module.exports = {

	get: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Member.find(params, function(err, members){
				if(err){
					reject(err)
				}

				resolve(members)
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){

			Member.findById(id, function(err, member){
				if(err){
					reject(err)
				}

				resolve(member)
			})
		})
	},

	post: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Member.create(params, function(err, member){
				if(err){
					reject(err)
				}

				resolve(member)
			})
		})
	},

	put: function(id, params, isRaw){
		return new Promise(function(resolve, reject){

			Member.indByIdAndUpdate(id, params, function(err, member){
				if(err){
					reject(err)
				}

				resolve(member)
			})
		})
	},

	delete: function(params, isRaw){

	}


}