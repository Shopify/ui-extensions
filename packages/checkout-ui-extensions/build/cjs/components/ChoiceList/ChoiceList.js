"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Choice = exports.ChoiceList = void 0;

var _core = require("@remote-ui/core");

/**
 * Use choice lists to present a list of choices where buyers can make
 * a single selection or multiple selections.
 */
var ChoiceList = (0, _core.createRemoteComponent)('ChoiceList');
/**
 * Use choice lists to create a group of related options for customers to choose from. A choice list can be made up of radio buttons or checkboxes.
 */

exports.ChoiceList = ChoiceList;
var Choice = (0, _core.createRemoteComponent)('Choice');
exports.Choice = Choice;