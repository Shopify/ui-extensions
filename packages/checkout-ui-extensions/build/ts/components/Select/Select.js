"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const core_1 = require("@remote-ui/core");
/**
 * Selects let buyers choose one option from an options menu. Consider select
 * when you have 4 or more options, to avoid cluttering the interface.
 */
exports.Select = core_1.createRemoteComponent('Select');
