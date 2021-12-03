"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSessionTokenApi = void 0;
function isSessionTokenApi(api) {
    return 'sessionToken' in api;
}
exports.isSessionTokenApi = isSessionTokenApi;
