"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiles = void 0;
const core_1 = require("@remote-ui/core");
/**
 * The Tiles component is used to lay out elements as equally-sized elements,
 * optionally wrapping on multiple lines as well as a stack when space is limited.
 * If you have a direct child of `Tiles` that you don’t want to stretch, wrap that
 * child in a `View` component.
 */
exports.Tiles = core_1.createRemoteComponent('Tiles');
