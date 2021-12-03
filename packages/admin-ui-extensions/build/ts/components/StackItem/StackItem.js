"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackItem = void 0;
var core_1 = require("@remote-ui/core");
/**
 * By default, each individual element in a Stack is treated as one stack item.
 *
 * Wrap multiple elements in a `StackItem` component, and the `Stack` component will treat them as one item.
 */
exports.StackItem = core_1.createRemoteComponent('StackItem');
