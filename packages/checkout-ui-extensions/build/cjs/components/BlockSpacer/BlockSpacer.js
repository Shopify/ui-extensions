"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockSpacer = void 0;

var _core = require("@remote-ui/core");

/**
 * BlockSpacer is used to create empty block space, typically when variable spacing
 * is needed between multiple elements.
 * Note that you should favor BlockStack when spacing between all elements is the same.
 */
var BlockSpacer = (0, _core.createRemoteComponent)('BlockSpacer');
exports.BlockSpacer = BlockSpacer;