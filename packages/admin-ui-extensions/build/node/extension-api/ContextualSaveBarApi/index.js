"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isContextualSaveBarApi = isContextualSaveBarApi;

function isContextualSaveBarApi(api) {
  return 'contextualSaveBar' in api;
}