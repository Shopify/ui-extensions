"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisuallyHidden = void 0;

var _core = require("@remote-ui/core");

/**
 * Use when an element needs to be available to assistive technology (for example,
 * a screen reader) but otherwise hidden.
 */
var VisuallyHidden = (0, _core.createRemoteComponent)('VisuallyHidden');
exports.VisuallyHidden = VisuallyHidden;