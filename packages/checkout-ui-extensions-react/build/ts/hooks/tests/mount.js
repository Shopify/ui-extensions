"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMockStatefulRemoteSubscribable = exports.mount = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_testing_1 = require("@quilted/react-testing");
const context_1 = require("../../context");
exports.mount = react_testing_1.createMount({
    context(options) {
        return options;
    },
    render(element, { extensionApi }) {
        return (jsx_runtime_1.jsx(context_1.ExtensionApiContext.Provider, Object.assign({ value: extensionApi }, { children: element }), void 0));
    },
});
function createMockStatefulRemoteSubscribable(value) {
    const subscribable = {
        get current() {
            return value;
        },
        subscribe: jest.fn(),
        destroy: jest.fn(),
    };
    return subscribable;
}
exports.createMockStatefulRemoteSubscribable = createMockStatefulRemoteSubscribable;
