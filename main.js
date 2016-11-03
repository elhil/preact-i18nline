var log;
try {
  // use ulog when available
  log = require('ulog')('preact-i18nline');
} catch (e) {

  /* satisfy eslint */
}

var recast = require("recast");

var preprocess = require("./preprocess");

module.exports = function(i18nline) {
  var JsProcessor = i18nline.processors.JsProcessor;
  var config = i18nline.config;
  var origPreProcess = JsProcessor.prototype.preProcess;
  var hasTranslatableText = require("./hasTranslatableText")(config);

  JsProcessor.prototype.preProcess = function(source) {
    var fileData = origPreProcess.call(this, source);

    // avoid a parse if we can
    fileData.skip = fileData.skip && !hasTranslatableText(source);

    if (!fileData.skip) {
      var ast = fileData.ast || recast.parse(source, config.recastOptions);
      preprocess.ast(ast, config);
      fileData.ast = ast;
    }

    return fileData;
  };
};

if (log) {
  log.log('Initialized ' + log.name);
}
