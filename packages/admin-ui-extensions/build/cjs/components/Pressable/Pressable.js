"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pressable = void 0;

var _core = require("@remote-ui/core");

/**
 * Pressable wraps components to add interactivity with rendering a UI element.
 * Wrap small UI elements in Pressable to perform actions that don’t fit Button or Link.
 */
var Pressable = (0, _core.createRemoteComponent)('Pressable');
exports.Pressable = Pressable;