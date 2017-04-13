'use strict';

console.log('require this file: config.prod.env')

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
		key: 'UITN25LMUQC436IM',
	    iv: 0,
		autoPadding: true
	},

	"request" : {
		"api_secret" :  {	// api_key=api_secret
			"5f6b2341e05094586a575b7e4888f0aa" : "3a9690a8808269919ad8f77859e2890b"
		},

		// "hostname": "http://d-service.api.edataapi.com/",
		"hostname":"http://192.168.0.137:8081/"
		//"hostname":"http://t-service.api.edataapi.com/",
	}
}
