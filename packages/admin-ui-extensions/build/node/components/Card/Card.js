"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _core = require("@remote-ui/core");

/**
 * Cards are used to group similar concepts and tasks together to make Shopify easier for merchants to scan, read, and get things done.
 *
 * The action API should be used to create actionable components for the card.
 * Cards should be contained, independent, and individual.
 */
const Card = (0, _core.createRemoteComponent)('Card');
exports.Card = Card;