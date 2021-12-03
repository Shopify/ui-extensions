"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = void 0;

var _core = require("@remote-ui/core");

/**
 * Spinners are used to show merchants that your app is loading, or an action is being performed. Generally when a spinner is being used, the user shouldn't be able to interact.
 */
var Spinner = (0, _core.createRemoteComponent)('Spinner');
exports.Spinner = Spinner;