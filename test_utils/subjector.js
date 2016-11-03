var log = require('../util/createLogger')('preact-i18nline:test:util:subjector');

module.exports = function(path) {
  var h = require('preact').h;
  var Component = require(path);

  return function(props, children) {
    children = children || [];
    var args = [Component, props].concat(children);
    return h.apply(null, args);
  };
};

log.log('Initialized ' + log.name);
