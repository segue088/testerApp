var mongoose = require('mongoose');
var Allergy = require('./Allergy')

var CustomerSchema = new mongoose.Schema({
	reference_id: {type: String, default: ''},
	user: {type: mongoose.Schema.Types.Mixed, default:{}},
	allergies: [{ type: mongoose.Schema.Types.Mixed, ref: 'Allergy' }],
	timestamp: {type: Date, default: Date.now},
});

CustomerSchema.methods.summary = function() {
	var summary = {
		'reference_id':this.reference_id,
		'id':this._id
	};
	
	return summary;
};


module.exports  = mongoose.model('CustomerSchema', CustomerSchema);