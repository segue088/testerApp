var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: {type: String, default: ''},
	password: {type: String, default: ''},
	category: {type: String, default: ''},
	plan: {type: String, default: ''},
	location: {type: String, default: ''},
	isOnline: {type: String, default: ''},
	timestamp: {type: Date, default: Date.now}
});

UserSchema.methods.summary = function() {
	var summary = {
		'username':this.username,
		'category':this.category,
		'id':this._id
	};
	
	return summary;
};

module.exports  = mongoose.model('UserSchema', UserSchema);