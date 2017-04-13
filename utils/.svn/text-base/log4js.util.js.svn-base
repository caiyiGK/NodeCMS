var log4js = require('log4js'),
	log4_config = require('../config/logs/' + process.env.NODE_ENV),
	querystring = require('querystring'),
	url = require('url');

	// console.log('process.env.NODE_ENV log4js',process.env.NODE_ENV)

log4js.configure(log4_config);
var logDebug = log4js.getLogger('logDebug'),
	logInfo = log4js.getLogger('logInfo'),
	logWarn = log4js.getLogger('logWarn'),
	logErr = log4js.getLogger('logErr');

const log = {

	req: '',
	id: 0,

	format(info) {
		var message = this.id + " TIME[" + parseInt(new Date().getTime() / 1000) + "," + new Date().arrFormat("yyyy-MM-dd hh:mm:ss") + "] URI[" + this.req.baseUrl + "] POST[";
			message += querystring.stringify(this.req.params) + "] GET[" + querystring.stringify(this.req.query) + "] HTTPHOST[" + this.req.hostname + "] ";
			message += " REMOTEADDR[" + this.req.path + "] FILE[%s] LINE[%s]";
		return message;
	},

	info(info) {
		var message = log.format(info);
		logInfo.info(message);
	},

	debug(debug) {
		var message = log.format(debug);
		logDebug.debug(message);
	},

	warn(warn) {
		var message = log.format(warn);
		logWarn.warn(message);
	},

	error(error) {
		var message = log.format(error);
		logErr.error(message);
	}
}

module.exports = log;





Date.prototype.arrFormat = function(fmt)
	{ //author: meizz
	  var o = {
		"M+" : this.getMonth()+1,                 //月份
		"d+" : this.getDate(),                    //日
		"h+" : this.getHours(),                   //小时
		"m+" : this.getMinutes(),                 //分
		"s+" : this.getSeconds(),                 //秒
		"q+" : Math.floor((this.getMonth()+3)/3), //季度
		"S"  : this.getMilliseconds()             //毫秒
	  };
	  if(/(y+)/.test(fmt))
		fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
	  for(var k in o)
		if(new RegExp("("+ k +")").test(fmt))
	  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
	  return fmt;
	}
