"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _core = require("@remote-ui/core");

/**
 * Selects let buyers choose one option from an options menu. Consider select
 * when you have 4 or more options, to avoid cluttering the interface.
 */
const Select = (0, _core.createRemoteComponent)('Select');
exports.Select = Select;