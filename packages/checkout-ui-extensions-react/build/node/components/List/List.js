"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.List = void 0;

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

var _react = require("@remote-ui/react");

const List = (0, _react.createRemoteReactComponent)(_checkoutUiExtensions.List);
exports.List = List;
const ListItem = (0, _react.createRemoteReactComponent)(_checkoutUiExtensions.ListItem);
exports.ListItem = ListItem;