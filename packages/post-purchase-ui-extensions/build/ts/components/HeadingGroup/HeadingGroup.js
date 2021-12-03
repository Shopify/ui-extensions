"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadingGroup = void 0;
const core_1 = require("@remote-ui/core");
/**
 * Heading groups provide the document structure that accessibility technology uses
 * to navigate the checkout. When you use a heading, any children related to that
 * heading should be nested in a heading group. This ensures that any nested headings
 * will use a semantically-appropriate heading level.
 */
exports.HeadingGroup = core_1.createRemoteComponent('HeadingGroup');
