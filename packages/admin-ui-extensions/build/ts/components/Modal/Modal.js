"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var core_1 = require("@remote-ui/core");
/**
 * Modals are overlays that prevent merchants from interacting with the rest of the application until a specific action is taken.
 *
 * Modals are disruptive by design, requiring merchants to take an action before they can continue, so use them thoughtfully and sparingly.
 */
exports.Modal = core_1.createRemoteComponent('Modal');
