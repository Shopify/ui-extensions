"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceItem = void 0;
var core_1 = require("@remote-ui/core");
/**
 * Resource items represent specific objects within a collection, such as products or orders.
 * They provide contextual information on the resource type and link to the object’s detail page.
 *
 * A `ResourceItem` should be rendered within a `ResourceList`.
 */
exports.ResourceItem = core_1.createRemoteComponent('ResourceItem');
