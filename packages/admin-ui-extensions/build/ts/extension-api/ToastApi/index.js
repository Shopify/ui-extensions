"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isToastApi = void 0;
function isToastApi(api) {
    return 'toast' in api;
}
exports.isToastApi = isToastApi;
