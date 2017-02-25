var Transaction = require('../models/Transaction')
var Promise = require('bluebird')

module.exports = {

	get: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Transaction.find(params, function(err, transactions){
				if(err){
					reject(err)
				}

				resolve(transactions)
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){

			Transaction.findById(id, function(err, transaction){
				if(err){
					reject(err)
				}

				resolve(transaction)
			})
		})
	},

	post: function(params, isRaw){
		return new Promise(function(resolve, reject){

			Transaction.create(params, function(err, transaction){
				if(err){
					reject(err)
				}

				resolve(transaction)
			})
		})
	},

	put: function(id, params, isRaw){
		return new Promise(function(resolve, reject){

			Transaction.findByIdAndUpdate(id, params, function(err, transaction){
				if(err){
					reject(err)
				}

				resolve(transaction)
			})
		})
	},

	delete: function(params, isRaw){

	}


}