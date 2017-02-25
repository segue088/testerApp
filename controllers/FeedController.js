var Feed = require('../models/Feed')
var Promise = require('bluebird')

module.exports = {

	get: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Feed.find(params, function(err, feeds){
				if(err){
					reject(err)
				}

				resolve(feeds)
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){

			Feed.findById(id, function(err, feed){
				if(err){
					reject(err)
				}

				resolve(feed)
			})
		})
	},

	post: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Feed.create(params, function(err, feed){
				if(err){
					reject(err)
				}

				resolve(feed)
			})
		})
	},

	put: function(id, params, isRaw){
		return new Promise(function(resolve, reject){

			Feed.findByIdAndUpdate(id, params, function(err, feed){
				if(err){
					reject(err)
				}

				resolve(feed)
			})
		})
	},

	delete: function(params, isRaw){

	}


}