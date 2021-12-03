"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = void 0;

var _core = require("@remote-ui/core");

/**
 * Use a text field to get text input from a customer.
 *
 * A text field’s children will be rendered as side actions within the text field. Some
 * focused children will toggle text fields’s focus state, so only pass elements as
 * children that are tightly coupled to the text field. Its children are commonly used
 * to display an icon that opens a tooltip providing more information about the field.
 */
var TextField = (0, _core.createRemoteComponent)('TextField');
exports.TextField = TextField;