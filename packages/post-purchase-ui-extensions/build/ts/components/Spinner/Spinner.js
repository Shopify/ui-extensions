"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const core_1 = require("@remote-ui/core");
/**
 * Spinner is used to notify buyers that their action is being processed.
 * The Spinner is usually used when sending or receiving data from a server.
 *
 * Any children of the Spinner are used as accessible content that will replace
 * the animated loading indicator when buyers prefers reduced motion. If not included,
 * it will use the loading indicator for all buyers.
 */
exports.Spinner = core_1.createRemoteComponent('Spinner');
