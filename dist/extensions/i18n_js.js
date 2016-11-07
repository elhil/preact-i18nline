"use strict";

var ComponentInterpolator = require("../ComponentInterpolator");

var extend = function extend(I18n) {
  I18n.ComponentInterpolator = ComponentInterpolator;
  return I18n;
};

module.exports = extend;