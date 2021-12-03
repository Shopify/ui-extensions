"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisuallyHidden = void 0;
const core_1 = require("@remote-ui/core");
/**
 * Use when an element needs to be available to assistive technology (for example,
 * a screen reader) but otherwise hidden.
 */
exports.VisuallyHidden = core_1.createRemoteComponent('VisuallyHidden');
