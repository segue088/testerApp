var mongoose = require('mongoose');

var ProviderSchema = new mongoose.Schema({
	license: {type: String, default: ''},
	user: {type:mongoose.Schema.Types.Mixed, default:{}},
	timestamp: {type: Date, default: Date.now}
});

ProviderSchema.methods.summary = function() {
	var summary = {
		'user':this.user,
		'license':this.license,
		'id':this._id
	};
	
	return summary;
};

module.exports  = mongoose.model('ProviderSchema', ProviderSchema);