"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLayoutApi = isLayoutApi;

/**
 * You can use the Layout utility to adjust your content based on the user's screen size.
 * Layout returns `'compact'` on mobile devices and at narrow screen widths, and `'regular'` otherwise.
 */
function isLayoutApi(api) {
  return 'layout' in api;
}