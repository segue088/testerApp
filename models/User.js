var mongoose = require('mongoose');
var Group = require('./Group')


var UserSchema = new mongoose.Schema({
	username: {type: String, default: ''},
	password: {type: String, default: ''},
	category: {type: String, default: ''},
	plan: {type: String, default: ''},
	location: {type: String, default: ''},
	is_online: {type: String, default: ''},
	groups: [{ type: mongoose.Schema.Types.Mixed, ref: 'Group' }],
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