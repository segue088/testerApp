var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
	user_from: {type: String, default: ''},
	user_to: {type: String, default: ''},
	message: {type: String, default: ''},
	timestamp: {type:Date, default:Date.now}
});

MessageSchema.methods.summary = function() {
	var summary = {
		'user_from':this.user_from,
		'user_to':this.user_to,
		'message':this.message,
		'id':this._id
	};
	
	return summary;
};

module.exports  = mongoose.model('MessageSchema', MessageSchema)