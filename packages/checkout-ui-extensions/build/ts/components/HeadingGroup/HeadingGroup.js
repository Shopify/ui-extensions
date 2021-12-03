"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadingGroup = void 0;
const core_1 = require("@remote-ui/core");
/**
 * Heading group controls the heading level of headings nested within it, like H1, H2, H3.
 *
 * Use a heading group whenever you use a heading to ensure the experience is the same
 * for screen reader users. When using a heading, any children related to that
 * heading should be nested within the same heading group.
 */
exports.HeadingGroup = core_1.createRemoteComponent('HeadingGroup');
