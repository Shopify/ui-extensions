"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineStack = void 0;
var core_1 = require("@remote-ui/core");
/**
 * Use to lay out a horizontal row of components.
 *
 * A stack is made of flexible items that wrap each of the stack’s children. Options provide control of the alignment and spacing of the items in the stack.
 * Use `StackItem` to group multiple elements inside a `InlineStack` together.
 */
exports.InlineStack = core_1.createRemoteComponent('InlineStack');
