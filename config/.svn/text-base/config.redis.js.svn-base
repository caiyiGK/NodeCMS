"use strict";

var redis = require('redis'),
	config = require('./')['redis'];

module.exports = redis.createClient(config.host + ':' + config.port + '/' + config.db)
