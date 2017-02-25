var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	referenceId: {type: String, default: ''},
	user: {type:mongoose.Schema.Types.Mixed, default:{}},
	timestamp: {type: Date, default: Date.now}
});

CustomerSchema.methods.summary = function() {
	var summary = {
		'referenceId':this.referenceId,
		'id':this._id
	};
	
	return summary;
};

module.exports  = mongoose.model('CustomerSchema', CustomerSchema);