"use strict";

module.exports = app => {
	class UserService extends App.Service {

		constructor() {
			super('users');
		}

		init() {
			let {http, signature } = this;
			let url = this.request_paramters.hostname;
			return http.put(url)
						.send(signature({ "user_id":1 }))
						.then(result => JSON.parse(result.text))
						.catch(error => {
							console.log(error)
						})
		}

	}

	return UserService;
};
