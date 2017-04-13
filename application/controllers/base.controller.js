"use strict";
var requireAll = require('require-all'),
	path = require('path');
const FILE_PATH = '../services/'

/**
 * service 遍历
 */
const services = requireAll({
	dirname: path.join(__dirname, FILE_PATH),
	filter: /(.+)\.service\.js$/,
	excludeDirs :  /^\.(git|svn)$/,
});


class BaseController {
	constructor() {
		if (new.target === BaseController) throw new Error('Not New');
		console.log(new.target)
		this.service = this.createService();
	}

	createService() {
		let proxy = new Proxy({}, {
			  	get: function(target, property) {
					try{
						return eval('new ' + services[property]())
					} catch(error) {
						console.log(new Error(__dirname + ' Controller Function this.service.' + property), error)
					}
			  	}
			})
		return Object.create(proxy);
	}

}


module.exports = BaseController;
