'use strict';

console.log('require this file: config.dev.env')

module.exports = {
	"redis": {
		"sessionStore": {
			cookieSecret: 'SM',
		    db: 1,
			pass: '',
		    host: 'localhost',
		    port: 6379,
			logErrors: true,
			prefix: 'SM'
		}
	},

	"crypto" : {	// 3DES 加密 PASSWORD
		algorithm: 'aes-128-ecb',
		key: '',
	    iv: 0,
		autoPadding: true
	},

	"request" : {
		"api_secret" :  {	// api_key=api_secret
			"************" : "************"
		},

		"hostname":"localhost:3000/"
	}
}
