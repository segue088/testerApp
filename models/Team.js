var mongoose = require('mongoose')

var TeamSchema = mongoose.Schema({
	name: {type:String, trim:true, default:''},
	category: {type:String, trim:true, default:''}, // id number of post comment refers to
	currentNumber: {type:Number, trim:true, default: 1},
	maximumNumber: {type:Number, trim:true, default: 1},
	timestamp: {type:Date, default:Date.now},
})

TeamSchema.methods.summary = function(){
	var summary = {
		'name':this.name,
		'category':this.category,
		'id':this._id
	};
	
	return summary;
}


module.exports = mongoose.model('TeamSchema', TeamSchema)


var mongoose = require('mongoose');

