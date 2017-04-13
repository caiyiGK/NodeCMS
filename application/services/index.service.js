"use strict";

module.exports = app => {

	class IndexService extends app.Service {

		constructor() {
			super('recharges');
		}

		async list(paramters) {
			console.log('index.service.js init')
			return await {abc: 123}
			// const list = this.http.put(paramters, this.request_paramters, 'json');
		}

	}

	return IndexService;
};
