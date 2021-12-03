"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.List = void 0;

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

var _react = require("@remote-ui/react");

var List = (0, _react.createRemoteReactComponent)(_checkoutUiExtensions.List);
exports.List = List;
var ListItem = (0, _react.createRemoteReactComponent)(_checkoutUiExtensions.ListItem);
exports.ListItem = ListItem;