"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HiddenForAccessibility = void 0;

var _core = require("@remote-ui/core");

/**
 * HiddenForAccessibility removes all of its children from the accessibility tree.
 * This can be used to improve the experience for assistive technology users by
 * hiding purely decorative content, duplicated content and offscreen or collapsed content.
 */
var HiddenForAccessibility = (0, _core.createRemoteComponent)('HiddenForAccessibility');
exports.HiddenForAccessibility = HiddenForAccessibility;