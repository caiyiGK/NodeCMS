"use strict";

let express 	 = require('express')
    , morgan     = require('morgan')
 	, path    	 = require('path')
	, cookieParser = require('cookie-parser')
	, bodyParser 	 = require('body-parser')
    , session      = require('./config/config.session')
    , routes       = require('./utils/route-map.util')
    , log          = require('./utils/log4js.util');

let app = express();

app.set('views', path.join(__dirname, 'views'));  // 设置模版路径
app.set('view engine', 'ejs');  // 设置模版引擎
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session.init());  // 设置 Session
app.use(express.static(path.join(__dirname, 'public')));

// app.use(morgan());

app.all('*', function(req, res, next) {
    log.req = req;
    log.id = new Date().getTime();
    next()
});

app.use(routes);

/**
 * 捕获404并转发到错误处理程序
 **/
// app.use(function(req, res, next) {
//     err.status = 404;
//     try {
//         next(new Error('Not Found'))
//     } catch(e) {
//         console.log('404 set header after sent')
//     }
// });


/**
 * 500 错误自定义处理
 **/
// app.use(function(err, req, res, next) {
//     if(!err) {return next()}
//     res.status(err.status || 500);
//     try {
//         res.render('error', {
//     		message: err.message,
//     		error: app.get('env') === 'development' ? err : {}
//     	});
//     } catch(e) {
//         console.log('500 set header after sent');
//     }
// });


module.exports = app;
