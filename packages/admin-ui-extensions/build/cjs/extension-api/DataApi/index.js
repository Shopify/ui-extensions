"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDataApi = isDataApi;

/**
 * Extension points may provide relevant data to the extension. The type of data varies from extension point to extension point.
 */
function isDataApi(api) {
  return 'data' in api;
}