"use strict";

module.exports = {

	'/' : {
		get: 'index.init'
	},

	'/email' : {
		get: 'email.sendMail'
	},

	'/users': {
		get: 'index.user',
		'/:userId': {
			get: 'index.getUserId'
		}
	}

}
