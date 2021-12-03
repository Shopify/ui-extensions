"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isApiTokenApi = void 0;
function isApiTokenApi(api) {
    return 'apiToken' in api;
}
exports.isApiTokenApi = isApiTokenApi;
