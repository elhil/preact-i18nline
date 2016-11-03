/* eslint-disable */
module.exports = function(name) {
	var log = {name: name};
	try {
		log = require('ulog')(log.name);
	} catch (e) {
		function nop(){} 
		log = Object.assign(log, console, {
			debug:nop, 
			log:nop
		});
	}
	return log;
}
/* eslint-enable */
