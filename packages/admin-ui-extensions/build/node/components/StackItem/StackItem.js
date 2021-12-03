"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StackItem = void 0;

var _core = require("@remote-ui/core");

/**
 * By default, each individual element in a Stack is treated as one stack item.
 *
 * Wrap multiple elements in a `StackItem` component, and the `Stack` component will treat them as one item.
 */
const StackItem = (0, _core.createRemoteComponent)('StackItem');
exports.StackItem = StackItem;