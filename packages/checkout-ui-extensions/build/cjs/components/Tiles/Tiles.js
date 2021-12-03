"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tiles = void 0;

var _core = require("@remote-ui/core");

/**
 * The Tiles component is used to lay out elements as equally-sized elements,
 * optionally wrapping on multiple lines as well as a stack when space is limited.
 * If you have a direct child of `Tiles` that you don’t want to stretch, wrap that
 * child in a `View` component.
 */
var Tiles = (0, _core.createRemoteComponent)('Tiles');
exports.Tiles = Tiles;