"use strict";

module.exports = () => {
	class IndexController extends App.Controller {
		/**
		 * 初始化
		 **/
		init (req, res, next) {
			this.service.index.list()
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
			// this.service.user
			// 	   .init()
			//     .then(result => {
			// 	   console.log(result)
			// 	   res.render('index',{
			//		   		title: '测试数据',
			//		   		user_id: result.result[0].user_id,
			// 				email: result.result[0].email,
			//	 			mobile: result.result[0].mobile,
			//	 			status: result.result[0].status,
			//	 			create_time: result.result[0].create_time,
			//	 			update_time: result.result[0].update_time,
			//	    		result: 'IndexController init',
			//	    		code: result.code
			//   		})
			// 		})

		}

		user(req, res, next){
		}

		getUserId(req, res, next) {
		}

	}
	return IndexController
}
