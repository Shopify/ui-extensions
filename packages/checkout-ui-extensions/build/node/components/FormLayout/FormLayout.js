"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormLayoutGroup = exports.FormLayout = void 0;

var _core = require("@remote-ui/core");

/**
 * Use a form layout to arrange fields within a form using standard spacing. Every
 * nested field or group will stack along the block axis. If you want visually group
 * fields nested in a form layout, use a form layout group.
 */
const FormLayout = (0, _core.createRemoteComponent)('FormLayout');
exports.FormLayout = FormLayout;

/**
 * Use a form layout group to group fields within a form layout. Grouped fields will
 * appear inline with one another when possible, with each field taking up equal
 * spacing.
 */
const FormLayoutGroup = (0, _core.createRemoteComponent)('FormLayoutGroup');
exports.FormLayoutGroup = FormLayoutGroup;