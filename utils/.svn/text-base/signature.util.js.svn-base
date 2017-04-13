"use strict"

var md5 = require('MD5'),
	config = require('../config')['request']['api_secret'];

module.exports = function(data) {

	let optionString = Object.keys(data)
							 .sort()
							 .map(key => {
								let k = data[key] instanceof Array
										? JSON.stringify(data[key])
										: data[key];
								return key + '=' + k;
							 })
						   	 .join('&');

	if (typeof config[data.api_key] != 'undefined')
		optionString += config[data.api_key]

	return Object.assign(data,{
				"api_sign": md5(optionString),
				"api_key": data.api_key
			})
}
