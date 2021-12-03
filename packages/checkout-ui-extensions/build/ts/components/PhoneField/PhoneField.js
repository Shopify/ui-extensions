"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneField = void 0;
const core_1 = require("@remote-ui/core");
/**
 * A PhoneField is an input field that merchants can type into optimized
 * for phone numbers with a country code base auto-formatting.
 * The country code is required for the initial render of the field but
 * it can be overriden later by the user either by selecting a country
 * in the country selection dropdown or by manually editing the country phone code
 * directly in the text field.
 */
exports.PhoneField = core_1.createRemoteComponent('PhoneField');
