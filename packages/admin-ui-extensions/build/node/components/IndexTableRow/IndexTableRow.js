"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexTableRow = void 0;

var _core = require("@remote-ui/core");

/**
 * `IndexTableRow` displays a filterable collection of objects of the same type, like products or customers.
 *
 * `IndexTableRow` should help merchants find an object and navigate to a full-page representation of it.
 * A resource list should contain `ResourceItem` components.
 */
const IndexTableRow = (0, _core.createRemoteComponent)('IndexTableRow');
exports.IndexTableRow = IndexTableRow;