var log;
try {
  // use ulog when available
  log = require('ulog')('preact-i18nline:hasTranslatableText');
} catch (e) {

  /* satisfy eslint */
}

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

  return function(source) {
    pattern = pattern || getTranslatePattern(config);
    return !!source.match(pattern);
  };
};

if (log) {
  log.log('Initialized ' + log.name);
}
