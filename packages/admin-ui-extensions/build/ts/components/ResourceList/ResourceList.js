"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceList = void 0;
var core_1 = require("@remote-ui/core");
/**
 * `ResourceList` displays a filterable collection of objects of the same type, like products or customers.
 *
 * `ResourceList` should help merchants find an object and navigate to a full-page representation of it.
 * A resource list should contain `ResourceItem` components.
 */
exports.ResourceList = core_1.createRemoteComponent('ResourceList');
