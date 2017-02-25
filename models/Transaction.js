var mongoose = require('mongoose')

var TransactionSchema = mongoose.Schema({
	type: {type:String, trim:true, default:''},
	amount: {type:String, trim:true, default:''}, 
	balance: {type:String, trim:true, default:''}, 
	user: {type:String, trim:true, default:''},
	timestamp: {type:Date, default:Date.now},
})

TransactionSchema.methods.summary = function(){
	var summary = {
		'type':this.type,
		'amount':this.amount,
		'balance':this.balance,
		'user':this.user,
		'id':this._id
	};
	
	return summary;
}


module.exports = mongoose.model('TransactionSchema', TransactionSchema)