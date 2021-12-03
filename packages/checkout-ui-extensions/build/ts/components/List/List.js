"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = exports.List = void 0;
const core_1 = require("@remote-ui/core");
/**
 * Lists display a set of related content. Each list item usually begins with a bullet or a number.
 */
exports.List = core_1.createRemoteComponent('List');
exports.ListItem = core_1.createRemoteComponent('ListItem');
