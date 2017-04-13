'use strict';

const request = require('superagent'),
 	  url = require('url'),
      querystring = require('querystring'),
      signature = require('./signature.util');

let util = {}

/**
 * Module Http PUT
 * @param  {String}  [postUrl]
 * @param  {Object}  [data]
 * @param  {Object}  [obj]
 * @public
 */
util.put = (url, data, contentType={}, type="json") => {
    return new Promise((resolve, reject) => {
        request.put(url)
               .send(signature(data))
               .set(contentType)
               .type(type)
               .end((error, result) => {
                   if (result.ok && result.status == 200) {
                       resolve(result);
                   } else {
                       reject(error);
                   }
               })
    })
}


/**
 * Module Http POST
 * @param  {String}  [postUrl]
 * @param  {Object}  [data]
 * @param  {Object}  [obj]
 * @public
 */
util.post = (url, data, contentType={}, type="json") => {
    return new Promise((resolve, reject) => {
        request.post(url)
               .send(signature(data))
               .set(contentType)
               .type(type)
               .end((error, result) => {
                   if (result.ok && result.status == 200) {
                       resolve(result);
                   } else {
                       reject(error);
                   }
               })
    })
}


util.get = (url) => {
    return new Promise((resolve, reject) => {
        request
            .get(url)
            .end((error, result) => {
                if (result.ok && result.status == 200) {
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            })
    })
}


/**
 * Module exports.
 * @public
 */
module.exports = util;
