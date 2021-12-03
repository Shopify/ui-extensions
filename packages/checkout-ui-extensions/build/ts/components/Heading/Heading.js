"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = void 0;
const core_1 = require("@remote-ui/core");
/**
 * Headings control the visual style of headings. Use headings to introduce major
 * sections, like Contact information, Shipping address, or Shipping method.
 *
 * Unlike HTML headings, you don’t explicitly specify the position of the heading in the
 * document outline. Nest headings within the heading group component to control
 * the document outline structure used by assistive technologies.
 */
exports.Heading = core_1.createRemoteComponent('Heading');
