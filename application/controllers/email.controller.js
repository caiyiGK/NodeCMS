"use strict";
var nodemailer = require('nodemailer');
var user = ''
  	, pass = '';

module.exports = app => {
	class EmailController extends App.Controller {

		sendMail (req, res) {
			var mailTransport = nodemailer.createTransport({
				host : 'smtp.ym.163.com',
				port : 25,
			  	auth : {
			      	user : user,
			      	pass : pass
			  	},
			});
			mailTransport.sendMail({
				from    : '',
				to      : '317387879@qq.com,caiyiweb@iCloud.com',
				subject : '赛曼科技开发组',
				html    : '这是一封测试邮件 <br> '
			}, function(error, info) {
				if (error) {
        			return console.log(error);
    			}
    			console.log('Message %s sent: %s', info.messageId, info.response);
                res.render('index',{
    				 title: '测试数据',
    				 user_id: 'user_id',
    				 email: 'email',
    				 mobile: 'mobile',
    				 status: 'status',
    				 create_time: 'create_time',
    				 update_time: 'update_time',
    				 result: 'IndexController init',
    				 code: 200
    			 })
			});
		}

	}
	return EmailController
}
