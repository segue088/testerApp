var mongoose = require('mongoose')

var AllergySchema = mongoose.Schema({
	type: {type:String, trim:true, default:''},
	description: {type:String, trim:true, default:''}, 
	start: {type:String, trim:true, default:''}, 
	timestamp: {type:Date, default:Date.now},
})

AllergySchema.methods.summary = function(){
	var summary = {
		'type':this.type,
		'description':this.description,
		'start':this.start,
		'id':this._id
	};
	
	return summary;
}


module.exports = mongoose.model('AllergySchema', AllergySchema)