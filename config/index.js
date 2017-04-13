'use strict';

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

module.exports = process.env.NODE_ENV 
	? require('./env/'+ process.env.NODE_ENV +'.env')
	: require('./env/prod.env');
