"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _core = require("@remote-ui/core");

/**
 * Checkboxes are used to give buyers a binary option. They are commonly used to
 * present terms and conditions.
 *
 * Unlike most field components, any children passed to this component will be used
 * as the label for the checkbox.
 */
const Checkbox = (0, _core.createRemoteComponent)('Checkbox');
exports.Checkbox = Checkbox;