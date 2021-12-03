"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockStack = void 0;
var core_1 = require("@remote-ui/core");
/**
 * Use to achieve no-fuss vertical centering.
 *
 * A stack is made of flexible items that wrap each of the stack’s children. Options provide control of the alignment and spacing of the items in the stack.
 * Use `StackItem` to group multiple elements inside a `BlockStack` together.
 */
exports.BlockStack = core_1.createRemoteComponent('BlockStack');
