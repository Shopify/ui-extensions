"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = void 0;
const core_1 = require("@remote-ui/core");
/**
 * A button group is meant to wrap around two or more buttons, passed as
 * children. The button group will stack these buttons along the inline
 * axis, and add the necessary spacing between them.
 */
exports.ButtonGroup = core_1.createRemoteComponent('ButtonGroup');
