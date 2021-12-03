"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stepper = void 0;

var _core = require("@remote-ui/core");

/**
 * Use a stepper to increase or decrease a value, like changing the quantity from 1 to 2.
 */
const Stepper = (0, _core.createRemoteComponent)('Stepper');
exports.Stepper = Stepper;