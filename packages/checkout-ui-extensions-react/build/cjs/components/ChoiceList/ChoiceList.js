"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Choice = exports.ChoiceList = void 0;

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

var _react = require("@remote-ui/react");

var ChoiceList = (0, _react.createRemoteReactComponent)(_checkoutUiExtensions.ChoiceList);
exports.ChoiceList = ChoiceList;
var Choice = (0, _react.createRemoteReactComponent)(_checkoutUiExtensions.Choice);
exports.Choice = Choice;