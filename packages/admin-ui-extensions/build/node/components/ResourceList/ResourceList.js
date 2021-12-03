"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResourceList = void 0;

var _core = require("@remote-ui/core");

/**
 * `ResourceList` displays a filterable collection of objects of the same type, like products or customers.
 *
 * `ResourceList` should help merchants find an object and navigate to a full-page representation of it.
 * A resource list should contain `ResourceItem` components.
 */
const ResourceList = (0, _core.createRemoteComponent)('ResourceList');
exports.ResourceList = ResourceList;