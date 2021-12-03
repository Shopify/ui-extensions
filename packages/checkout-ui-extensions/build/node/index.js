"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  extend: true
};
Object.defineProperty(exports, "extend", {
  enumerable: true,
  get: function () {
    return _extend.extend;
  }
});

var _components = require("./components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _components[key];
    }
  });
});

var _extend = require("./extend");