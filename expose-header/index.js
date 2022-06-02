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
/*module.exports.init = function(config, logger, stats){
		//Initialisation (for each worker thread started)
	var plugId = "-- PT: ";
	    var idMsg = plugId + ' Provide-TransactionId';
		
		var idPrefix;
		if (config.active) {
			idMsg += " initialised and active";
			idPrefix = config.prefix ? config.prefix : "emg-:";
			idMsg += ". prefix is " + idPrefix;		
		} else {
			idMsg += ' present but inactive.';
		}
		console.log(idMsg);
		
		//Check if crypto support is in NodeJS core - in case need to generate a GUID
		//The fastest possible way to create random 32-char string in Node is by using native crypto module:
		// ocnst id = crypto.randomBytes(16).toString("hex");
		//let crypto;
		//try {
			//crypto = require('crypto');
			//console.log(plugId + 'Supported crypto hashes :' + crypto.getHashes() );
			//
			//} catch (err) {
		    //console.log(plugId + 'crypto support is disabled!');
			//}
			
		// on traffic...
		return {
			
			onrequest: function(req, res, next) {
				
				if (config.active) {
					if (!req.headers['mtnTxID']) {
						try {
							 
							 req.headers['mtnTxID'] = idPrefix + req.correlationId;
						} catch (e) {}
					}
				}
				
				//== Traffic must flow to next (plugin)
				next();
			}
			
		}
	}
