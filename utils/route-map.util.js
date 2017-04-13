"use strict";

var path = require('path');
var _ = require('lodash');
var router = require('express').Router();
var requireAll = require('require-all');
var routes = require('../application/routes');

const CONTROLLER_PATH = '../application/controllers/';

global.App = {};
App.Controller = require('../application/controllers/base.controller');
App.Service = require('../application/services/base.service');
const app = {}
app.Controller = require('../application/controllers/base.controller');
app.Service = require('../application/services/base.service');

/**
 * Controller 遍历
 */
var controllers = requireAll({
  	dirname: path.join(__dirname, CONTROLLER_PATH),
  	filter: /(.+)\.controller\.js$/,
	excludeDirs :  /^\.(git|svn)$/,
});

/**
 * 递归绑定控制器
 * @param  {Object} Router JSON
 */
(function loop (map, route) {
  	route = route || '';

  	_.forEach(map, function (value, key) {
    	if (_.isObject(value) && !_.isArray(value)) {
      		loop(value, route + key);
    	} else {
        	// 获取控制器和动作
			let	controller = value.split('.')[0],
        		action = value.split('.')[1]; console.log(route)
        	router[key](route, (...arg) => eval(controllers[controller](app))[action](...arg));
    	}
  	});
})(routes);

module.exports = router;
