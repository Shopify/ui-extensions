"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const core_1 = require("@remote-ui/core");
/**
 *  View is a generic container component. Its contents will always be their
 * “natural” size, so this component can be useful in layout components (like `Layout`, `Tiles`,
 * `BlockStack`, `InlineStack`) that would otherwise stretch their children to fit.
 *
 * Note: View’s box model related properties like `padding`, `border`, `borderRadius`, and `borderColor` are implemented as
 * [CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts).
 */
exports.View = core_1.createRemoteComponent('View');
