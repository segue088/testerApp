var mongoose = require('mongoose');

var GroupSchema = new mongoose.Schema({
	name: {type: String, default: ''},
	type: {type: String, default: ''},
	category: {type: String, default: ''},
	location: {type: String, default: ''},
	timestamp: {type: Date, default: Date.now}
});

GroupSchema.methods.summary = function() {
	var summary = {
		'name':this.name,
		'category':this.category,
		'id':this._id
	};
	
	return summary;
};

module.exports  = mongoose.model('GroupSchema', GroupSchema);