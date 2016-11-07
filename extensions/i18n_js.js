var ComponentInterpolator = require("../ComponentInterpolator");

var extend = function(I18n) {
  I18n.ComponentInterpolator = ComponentInterpolator;
  return I18n;
};

module.exports = extend;
