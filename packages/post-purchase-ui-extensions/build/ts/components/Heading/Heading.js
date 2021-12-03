"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = void 0;
const core_1 = require("@remote-ui/core");
/**
 * Headings are used as the titles of each major section of he checkout. Unlike HTML
 * headings, you do not explicitly specify the position of the heading in the document
 * outline. Instead, use headings nested in heading groups to create a document structure
 * that accessibility technologies can use to speed up navigation.
 */
exports.Heading = core_1.createRemoteComponent('Heading');
