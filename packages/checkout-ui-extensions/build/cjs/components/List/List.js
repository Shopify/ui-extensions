"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.List = void 0;

var _core = require("@remote-ui/core");

/**
 * Lists display a set of related content. Each list item usually begins with a bullet or a number.
 */
var List = (0, _core.createRemoteComponent)('List');
exports.List = List;
var ListItem = (0, _core.createRemoteComponent)('ListItem');
exports.ListItem = ListItem;