"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormLayoutGroup = exports.FormLayout = void 0;
const core_1 = require("@remote-ui/core");
/**
 * Use a form layout to arrange fields within a form using standard spacing. Every
 * nested field or group will stack along the block axis. If you want visually group
 * fields nested in a form layout, use a form layout group.
 */
exports.FormLayout = core_1.createRemoteComponent('FormLayout');
/**
 * Use a form layout group to group fields within a form layout. Grouped fields will
 * appear inline with one another when possible, with each field taking up equal
 * spacing.
 */
exports.FormLayoutGroup = core_1.createRemoteComponent('FormLayoutGroup');
