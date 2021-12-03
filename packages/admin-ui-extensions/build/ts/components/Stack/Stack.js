"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var core_1 = require("@remote-ui/core");
/**
 * Use to lay out a horizontal row of components or to achieve no-fuss vertical centering.
 *
 * A stack is made of flexible items that wrap each of the stack’s children. Options provide control of the wrapping, spacing, and relative size of the items in the stack.
 * Use `StackItem` to group multiple elements inside a `Stack` together.
 */
exports.Stack = core_1.createRemoteComponent('Stack');
