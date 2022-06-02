'use strict';
var debug = require('debug')('plugin:expose-header');

module.exports.init = function(config, logger, stats) {

  return {
    onresponse: function(req, res, next) {      
    debug('plugin onresponse');     
    res.setHeader('header','mtnTxID')    
    next();    
}

  };
}
