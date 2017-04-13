"use strict";

module.exports = {

	'/' : {
		get: 'index.init'
	},

	'/users': {
		get: 'index.user',
		'/:userId': {
			get: 'index.getUserId'
		}
	}

}
