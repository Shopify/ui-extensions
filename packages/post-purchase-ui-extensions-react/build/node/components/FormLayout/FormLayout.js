"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormLayoutGroup = exports.FormLayout = void 0;

var _postPurchaseUiExtensions = require("@shopify/post-purchase-ui-extensions");

var _react = require("@remote-ui/react");

const FormLayout = (0, _react.createRemoteReactComponent)(_postPurchaseUiExtensions.FormLayout);
exports.FormLayout = FormLayout;
const FormLayoutGroup = (0, _react.createRemoteReactComponent)(_postPurchaseUiExtensions.FormLayoutGroup);
exports.FormLayoutGroup = FormLayoutGroup;