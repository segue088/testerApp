var Schedule = require('../models/Schedule')
var Promise = require('bluebird')

module.exports = {

	get: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Schedule.find(params, function(err, schedules){
				if(err){
					reject(err)
				}

				resolve(schedules)
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){

			Schedule.findById(id, function(err, schedule){
				if(err){
					reject(err)
				}

				resolve(schedule)
			})
		})
	},

	post: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Schedule.create(params, function(err, schedule){
				if(err){
					reject(err)
				}

				resolve(schedule)
			})
		})
	},

	put: function(id, params, isRaw){
		return new Promise(function(resolve, reject){

			Schedule.findByIdAndUpdate(id, params, function(err, schedule){
				if(err){
					reject(err)
				}

				resolve(schedule)
			})
		})
	},

	delete: function(params, isRaw){

	}


}