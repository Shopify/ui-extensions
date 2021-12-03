"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockSpacer = void 0;
const core_1 = require("@remote-ui/core");
/**
 * BlockSpacer is used to create empty block space, typically when variable spacing
 * is needed between multiple elements.
 * Note that you should favor BlockStack when spacing between all elements is the same.
 */
exports.BlockSpacer = core_1.createRemoteComponent('BlockSpacer');
