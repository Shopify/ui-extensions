"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormLayoutGroup = exports.FormLayout = void 0;

var _checkoutUiExtensions = require("@shopify/checkout-ui-extensions");

var _react = require("@remote-ui/react");

const FormLayout = (0, _react.createRemoteReactComponent)(_checkoutUiExtensions.FormLayout);
exports.FormLayout = FormLayout;
const FormLayoutGroup = (0, _react.createRemoteReactComponent)(_checkoutUiExtensions.FormLayoutGroup);
exports.FormLayoutGroup = FormLayoutGroup;