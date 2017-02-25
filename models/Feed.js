var mongoose = require('mongoose');

var FeedSchema = new mongoose.Schema({
	member: {type:mongoose.Schema.Types.Mixed, default:{}},
	message: {type: String, default: ''},
	timestamp: {type:Date, default:Date.now}
});

FeedSchema.methods.summary = function() {
	var summary = {
		'username':this.from,
		'message':this.message,
		'id':this._id
	};
	
	return summary;
};

module.exports  = mongoose.model('FeedSchema', FeedSchema)