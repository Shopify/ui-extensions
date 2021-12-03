"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../api");
describe('extend()', function () {
    it('calls shopify extend', function () {
        global.self = { shopify: { extend: jest.fn() } };
        var callback = function () { };
        api_1.extend('Playground', callback);
        expect(self.shopify.extend).toHaveBeenCalledWith('Playground', callback);
    });
});
