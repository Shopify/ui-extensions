"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _core = require("@remote-ui/core");

/**
 * Modals are overlays that prevent merchants from interacting with the rest of the application until a specific action is taken.
 *
 * Modals are disruptive by design, requiring merchants to take an action before they can continue, so use them thoughtfully and sparingly.
 */
const Modal = (0, _core.createRemoteComponent)('Modal');
exports.Modal = Modal;