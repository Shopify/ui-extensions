"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = void 0;

var _core = require("@remote-ui/core");

/**
 * A button group is meant to wrap around two or more buttons, passed as
 * children. The button group will stack these buttons along the inline
 * axis, and add the necessary spacing between them.
 */
var ButtonGroup = (0, _core.createRemoteComponent)('ButtonGroup');
exports.ButtonGroup = ButtonGroup;