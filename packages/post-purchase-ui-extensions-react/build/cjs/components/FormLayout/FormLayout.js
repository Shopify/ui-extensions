"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormLayoutGroup = exports.FormLayout = void 0;

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

var _react = require("@remote-ui/react");

var FormLayout = (0, _react.createRemoteReactComponent)(_postPurchaseUiExtensions.FormLayout);
exports.FormLayout = FormLayout;
var FormLayoutGroup = (0, _react.createRemoteReactComponent)(_postPurchaseUiExtensions.FormLayoutGroup);
exports.FormLayoutGroup = FormLayoutGroup;