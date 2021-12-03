"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _core = require("@remote-ui/core");

/**
 * Select allows merchants to choose one option from a dropdown menu.
 *
 * Consider Select when you have 4 or more options, to avoid creating clutter and make your component more scalable.
 */
var Select = (0, _core.createRemoteComponent)('Select');
exports.Select = Select;