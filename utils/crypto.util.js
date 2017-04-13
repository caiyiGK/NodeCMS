/*!
 * 3DES 加密
 * Created By CY  08/03/2017 13:55
 * MIT Licensed
 */

'use strict';

var assert = require('assert'),
 	crypto = require('crypto'),
	config = require('../config')['crypto'];

var util = {};

var key = new Buffer(config.key),
 	iv = new Buffer(config.iv ? config.iv : 0),
 	algorithm = config.algorithm,
 	autoPadding = config.autoPadding;

/**
 * 加密
 * @param  	{String} [plaintext]
 * @returns {String}
 **/
util.encrypt = (plaintext) => {
	let cipher = crypto.createCipheriv(algorithm, key, iv);
    cipher.setAutoPadding(autoPadding);
    let crypted = cipher.update(plaintext, 'utf8', 'base64');
    	crypted += cipher.final('base64');
    	return crypted;
}


/**
 * 解密
 * @param  	{String} [DesString]
 * @returns {String}
 **/
util.decrypt = (DesString) => {
	let decipher = crypto.createDecipheriv(algorithm, key, iv);
    decipher.setAutoPadding(autoPadding);
    let dec = decipher.update(DesString, 'base64', 'utf8');
    	dec += decipher.final('utf8');
	return dec
}


/**
 * Module exports.
 * @public
 */
module.exports = util;
