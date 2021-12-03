"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stack = void 0;

var _core = require("@remote-ui/core");

/**
 * Use to lay out a horizontal row of components or to achieve no-fuss vertical centering.
 *
 * A stack is made of flexible items that wrap each of the stack’s children. Options provide control of the wrapping, spacing, and relative size of the items in the stack.
 * Use `StackItem` to group multiple elements inside a `Stack` together.
 */
var Stack = (0, _core.createRemoteComponent)('Stack');
exports.Stack = Stack;