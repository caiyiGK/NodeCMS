"use strict";
let session = require('express-session'),
	ReidsStore = require('connect-redis')(session),
	config = require('./index')['redis'];

exports.init = () => {
	return session({
		name: 'SM',
		secret: 'SM-',
		resave: true,
  		saveUninitialized: true,
		cookie: {
    		httpOnly: false,
			maxAge: 1000 * 60 * 60 * 24
  		},
		store: new ReidsStore(config.sessionStore)
	})
}
