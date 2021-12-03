"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const core_1 = require("@remote-ui/core");
/**
 * Use radios to present each item in a list of options where buyers must
 * make a single selection. Radio components should always appear in groups of
 * two or more; if a buyer has only a single, boolean option, use a checkbox
 * instead.
 *
 * Unlike most field components, any children passed to this component will be used
 * as the label for the checkbox.
 */
exports.Radio = core_1.createRemoteComponent('Radio');
