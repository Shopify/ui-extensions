"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineStack = void 0;

var _core = require("@remote-ui/core");

/**
 * Use to lay out a horizontal row of components.
 *
 * A stack is made of flexible items that wrap each of the stack’s children. Options provide control of the alignment and spacing of the items in the stack.
 * Use `StackItem` to group multiple elements inside a `InlineStack` together.
 */
const InlineStack = (0, _core.createRemoteComponent)('InlineStack');
exports.InlineStack = InlineStack;