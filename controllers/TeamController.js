var Team = require('../models/Team')
var Promise = require('bluebird')

module.exports = {

	get: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Team.find(params, function(err, teams){
				if(err){
					reject(err)
				}

				resolve(teams)
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){

			Team.findById(id, function(err, team){
				if(err){
					reject(err)
				}

				resolve(team)
			})
		})
	},

	post: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Team.create(params, function(err, team){
				if(err){
					reject(err)
				}

				resolve(team)
			})
		})
	},

	put: function(id, params, isRaw){
		return new Promise(function(resolve, reject){

			Team.indByIdAndUpdate(id, params, function(err, team){
				if(err){
					reject(err)
				}

				resolve(team)
			})
		})
	},

	delete: function(params, isRaw){

	}


}