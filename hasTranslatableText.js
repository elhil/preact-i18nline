var log = require('./util/createLogger')('preact-i18nline:hasTranslatableText');

var escapeRegExp = require("./util/escapeRegExp");

var getTranslatePattern = function(config) {
  var pattern = 'translate=["\']yes["\']';
  var parts = config.autoTranslateTags || [];
  if (parts.length)
    pattern += "|<" + parts.map(escapeRegExp).join("|<");
  return new RegExp(pattern);
};

module.exports = function(config) {
  var pattern;

  config = config || {};
  config.autoTranslateTags = typeof config.autoTranslateTags === 'string' ? config.autoTranslateTags.split(',') : config.autoTranslateTags || [];
  config.neverTranslateTags = typeof config.neverTranslateTags === 'string' ? config.neverTranslateTags.split(',') : config.neverTranslateTags || [];

  return function(source) {
    pattern = pattern || getTranslatePattern(config);
    return !!source.match(pattern);
  };
};

log.log('Initialized ' + log.name);
