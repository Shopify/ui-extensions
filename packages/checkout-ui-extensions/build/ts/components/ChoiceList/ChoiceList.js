"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Choice = exports.ChoiceList = void 0;
const core_1 = require("@remote-ui/core");
/**
 * Use choice lists to present a list of choices where buyers can make
 * a single selection or multiple selections.
 */
exports.ChoiceList = core_1.createRemoteComponent('ChoiceList');
/**
 * Use choice lists to create a group of related options for customers to choose from. A choice list can be made up of radio buttons or checkboxes.
 */
exports.Choice = core_1.createRemoteComponent('Choice');
