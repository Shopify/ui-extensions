"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexTable = void 0;

var _core = require("@remote-ui/core");

/**
 * `IndexTable` displays a filterable collection of objects of the same type, like products or customers.
 *
 * `IndexTable` should help merchants find an object and navigate to a full-page representation of it.
 * An index table should contain `IndexTableRow` components.
 */
var IndexTable = (0, _core.createRemoteComponent)('IndexTable');
exports.IndexTable = IndexTable;