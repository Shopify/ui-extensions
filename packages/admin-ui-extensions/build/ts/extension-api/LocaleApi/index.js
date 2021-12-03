"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLocaleApi = void 0;
function isLocaleApi(api) {
    return 'locale' in api;
}
exports.isLocaleApi = isLocaleApi;
