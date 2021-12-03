"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.List = void 0;

var _core = require("@remote-ui/core");

/**
 * Lists display a set of related content. Each list item usually begins with a bullet or a number.
 */
const List = (0, _core.createRemoteComponent)('List');
exports.List = List;
const ListItem = (0, _core.createRemoteComponent)('ListItem');
exports.ListItem = ListItem;