"use strict";
let config = require('../../config'),
	httpUtil = require('../../utils/http.util'),
	request = require('superagent'),
	signature = require('../../utils/signature.util');

class BaseService {

	constructor(paramters) {
		if (new.target === BaseService) throw new Error('Not New');
		this.request_paramters = config['request'];
		Object.assign(this.request_paramters, {
			'hostname': this.request_paramters.hostname + paramters,
		})
		this.http = request;
		this.signature = signature;
	}

}

module.exports = BaseService;
