var extend = require('extend');

/* eslint-disable */
module.exports = function(name) {
	var log = {name: name};
	try {
		log = require('ulog')(log.name);
	} catch (e) {
		function nop(){} 
		log = extend(log, console, {trace:nop, debug:nop, log:nop});
	}
	return log;
}
/* eslint-enable */
