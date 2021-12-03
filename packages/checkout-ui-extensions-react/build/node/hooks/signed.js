"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useApplySignedChange = useApplySignedChange;

var _api = require("./api");

function useApplySignedChange() {
  return (0, _api.useExtensionApi)().applySignedChange;
}