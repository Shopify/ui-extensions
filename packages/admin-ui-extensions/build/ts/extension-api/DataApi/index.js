"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDataApi = void 0;
function isDataApi(api) {
    return 'data' in api;
}
exports.isDataApi = isDataApi;
