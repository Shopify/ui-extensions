"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineSpacer = void 0;
const core_1 = require("@remote-ui/core");
/**
 * InlineSpacer is used to create empty inline space, typically when variable spacing
 * is needed between multiple elements.
 * Note that you should favor InlineStack when spacing between all elements is the same.
 */
exports.InlineSpacer = core_1.createRemoteComponent('InlineSpacer');
