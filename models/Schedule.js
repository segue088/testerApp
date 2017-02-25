var mongoose = require('mongoose')

var ScheduleSchema = mongoose.Schema({
	begin_time: {type:String, trim:true, default:''},
	end_time: {type:String, trim:true, default:''}, // id number of post comment refers to
	date: {type:Date, default:Date.now},
	user: {type:String, trim:true, default:''},
	created_by: {type:String, trim:true, default:''},
	timestamp: {type:Date, default:Date.now},
})

ScheduleSchema.methods.summary = function(){
	var summary = {
		'begin_time':this.begin_time,
		'end_time':this.end_time,
		'date':this.date,
		'id':this._id
	};
	
	return summary;
}


module.exports = mongoose.model('ScheduleSchema', ScheduleSchema)


