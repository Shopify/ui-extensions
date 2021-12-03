"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkouUiExtensionsBinary = exports.uiExtensionsPackage = void 0;
const plugins_1 = require("@sewing-kit/plugins");
const plugin_javascript_1 = require("@sewing-kit/plugin-javascript");
const plugin_typescript_1 = require("@sewing-kit/plugin-typescript");
const plugin_react_1 = require("@sewing-kit/plugin-react");
const plugin_package_flexible_outputs_1 = require("@sewing-kit/plugin-package-flexible-outputs");
const PLUGIN = 'CheckoutUIExtensions.DefaultPackage';
function uiExtensionsPackage({ react: useReact = false } = {}) {
    return plugins_1.createComposedProjectPlugin(PLUGIN, (composer) => {
        composer.use(plugin_javascript_1.javascript(), plugin_typescript_1.typescript(), plugin_package_flexible_outputs_1.buildFlexibleOutputs());
        if (useReact) {
            composer.use(plugin_react_1.react(), reactJsxRuntime());
        }
    });
}
exports.uiExtensionsPackage = uiExtensionsPackage;
function checkouUiExtensionsBinary() {
    return plugins_1.createComposedProjectPlugin(PLUGIN, [
        plugin_javascript_1.javascript(),
        plugin_typescript_1.typescript(),
        plugin_react_1.react(),
        plugin_package_flexible_outputs_1.buildFlexibleOutputs({
            binaries: true,
            node: true,
            esmodules: false,
            esnext: false,
        }),
    ]);
}
exports.checkouUiExtensionsBinary = checkouUiExtensionsBinary;
// eslint-disable-next-line no-warning-comments
// TODO: should be in the React plugin
function reactJsxRuntime() {
    return plugins_1.createProjectPlugin('Quilt.ReactJsxRuntime', ({ tasks }) => {
        const updateReactBabelPreset = plugin_javascript_1.updateBabelPreset(['@babel/preset-react'], {
            runtime: 'automatic',
            importSource: 'react',
        });
        tasks.build.hook(({ hooks }) => {
            hooks.target.hook(({ hooks }) => {
                hooks.configure.hook(({ babelConfig }) => {
                    babelConfig === null || babelConfig === void 0 ? void 0 : babelConfig.hook(updateReactBabelPreset);
                });
            });
        });
        tasks.dev.hook(({ hooks }) => {
            hooks.configure.hook(({ babelConfig }) => {
                babelConfig === null || babelConfig === void 0 ? void 0 : babelConfig.hook(updateReactBabelPreset);
            });
        });
        tasks.test.hook(({ hooks }) => {
            hooks.configure.hook(({ babelConfig }) => {
                babelConfig === null || babelConfig === void 0 ? void 0 : babelConfig.hook(updateReactBabelPreset);
            });
        });
    });
}
