"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _core = require("@remote-ui/core");

/**
 * Use radios to present each item in a list of options where buyers must
 * make a single selection. Radio components should always appear in groups of
 * two or more; if a buyer has only a single, boolean option, use a checkbox
 * instead.
 *
 * Unlike most field components, any children passed to this component will be used
 * as the label for the checkbox.
 */
const Radio = (0, _core.createRemoteComponent)('Radio');
exports.Radio = Radio;