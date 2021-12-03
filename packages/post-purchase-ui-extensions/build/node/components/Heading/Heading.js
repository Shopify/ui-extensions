"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading = void 0;

var _core = require("@remote-ui/core");

/**
 * Headings are used as the titles of each major section of he checkout. Unlike HTML
 * headings, you do not explicitly specify the position of the heading in the document
 * outline. Instead, use headings nested in heading groups to create a document structure
 * that accessibility technologies can use to speed up navigation.
 */
const Heading = (0, _core.createRemoteComponent)('Heading');
exports.Heading = Heading;