"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  extend: true
};
Object.defineProperty(exports, "extend", {
  enumerable: true,
  get: function get() {
    return _api.extend;
  }
});

var _api = require("./api");

var _components = require("./components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});

var _extensionApi = require("./extension-api");

Object.keys(_extensionApi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _extensionApi[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _extensionApi[key];
    }
  });
});