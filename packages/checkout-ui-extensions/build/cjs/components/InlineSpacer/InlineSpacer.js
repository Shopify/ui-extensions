"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineSpacer = void 0;

var _core = require("@remote-ui/core");

/**
 * InlineSpacer is used to create empty inline space, typically when variable spacing
 * is needed between multiple elements.
 * Note that you should favor InlineStack when spacing between all elements is the same.
 */
var InlineSpacer = (0, _core.createRemoteComponent)('InlineSpacer');
exports.InlineSpacer = InlineSpacer;