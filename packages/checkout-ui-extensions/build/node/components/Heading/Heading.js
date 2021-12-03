"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading = void 0;

var _core = require("@remote-ui/core");

/**
 * Headings control the visual style of headings. Use headings to introduce major
 * sections, like Contact information, Shipping address, or Shipping method.
 *
 * Unlike HTML headings, you don’t explicitly specify the position of the heading in the
 * document outline. Nest headings within the heading group component to control
 * the document outline structure used by assistive technologies.
 */
const Heading = (0, _core.createRemoteComponent)('Heading');
exports.Heading = Heading;