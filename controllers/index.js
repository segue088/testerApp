var CustomerController = require('./CustomerController')
var FeedController = require('./FeedController')
var MemberController = require('./MemberController')
var TeamController = require('./TeamController')

module.exports = {
	
	customer: CustomerController,
	feed: FeedController,
	member: MemberController,
	team: TeamController
}