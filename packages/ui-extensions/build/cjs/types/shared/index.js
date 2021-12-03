"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Spacing = require("./Spacing");

Object.keys(_Spacing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Spacing[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Spacing[key];
    }
  });
});