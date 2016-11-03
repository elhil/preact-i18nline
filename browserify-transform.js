var log;
try {
  // use ulog when available
  log = require('ulog')('preact-i18nline:browserify-transform');
} catch (e) {

  /* satisfy eslint */
}

var through = require("through2");
var I18nline = require("i18nline");

var config = I18nline.config;
var preprocess = require("./preprocess");
var hasTranslatableText = require("./hasTranslatableText")(config);

module.exports = function() {
  return through(function (buf, enc, next) {
    var source = buf.toString('utf8');
    if (hasTranslatableText(source))
      source = preprocess(source, config);
    this.push(source);
    next();
  });
};

if (log) {
  log.log('Initialized ' + log.name);
}
