var mongoose = require('mongoose');

var MemberSchema = new mongoose.Schema({
	username: {type: String, default: ''},
	password: {type: String, default: ''},
	team: {type:mongoose.Schema.Types.Mixed, default:{}},
	role: {type: String, default: 'user'},
	timestamp: {type: Date, default: Date.now}
});

MemberSchema.methods.summary = function() {
	var summary = {
		'username':this.username,
		'team':this.team,
		'id':this._id
	};
	
	return summary;
};

module.exports  = mongoose.model('MemberSchema', MemberSchema);