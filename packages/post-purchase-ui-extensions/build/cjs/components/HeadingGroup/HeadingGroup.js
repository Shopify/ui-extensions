"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadingGroup = void 0;

var _core = require("@remote-ui/core");

/**
 * Heading groups provide the document structure that accessibility technology uses
 * to navigate the checkout. When you use a heading, any children related to that
 * heading should be nested in a heading group. This ensures that any nested headings
 * will use a semantically-appropriate heading level.
 */
var HeadingGroup = (0, _core.createRemoteComponent)('HeadingGroup');
exports.HeadingGroup = HeadingGroup;