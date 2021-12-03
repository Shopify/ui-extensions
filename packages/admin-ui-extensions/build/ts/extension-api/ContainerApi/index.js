"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isContainerApi = void 0;
function isContainerApi(api) {
    return 'container' in api;
}
exports.isContainerApi = isContainerApi;
