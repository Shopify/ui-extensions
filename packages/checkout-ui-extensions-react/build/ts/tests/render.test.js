"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const render_1 = require("../render");
const { extend } = jest.requireMock('@shopify/checkout-ui-extensions');
jest.mock('@shopify/checkout-ui-extensions', () => ({
    extend: jest.fn(),
}));
describe('render()', () => {
    it('calls extend() with the extension point', () => {
        render_1.render('Checkout::KitchenSink', () => jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0));
        expect(extend).toHaveBeenCalledWith('Checkout::KitchenSink', expect.any(Function));
    });
});
