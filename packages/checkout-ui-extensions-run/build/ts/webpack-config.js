"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.babelConfig = exports.createWebpackConfiguration = exports.shouldUseReact = void 0;
const path = __importStar(require("path"));
const glob_1 = require("glob");
const webpack_1 = require("webpack");
const ui_extensions_webpack_hot_client_1 = require("@shopify/ui-extensions-webpack-hot-client");
const REACT_UI_EXTENSIONS_PACKAGES = [
    '@shopify/checkout-ui-extensions-react',
    '@shopify/post-purchase-ui-extensions-react',
];
function shouldUseReact() {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const packageJson = require(path.resolve('package.json'));
        const dependencies = new Set(Object.keys(packageJson.dependencies));
        if (!REACT_UI_EXTENSIONS_PACKAGES.some((pkg) => dependencies.has(pkg))) {
            return false;
        }
        return dependencies.has('@remote-ui/mini-react') ? 'mini' : true;
    }
    catch (_a) {
        return false;
    }
}
exports.shouldUseReact = shouldUseReact;
const PRODUCTION_TARGETS = undefined;
const DEVELOPMENT_TARGETS = [
    'last 1 chrome version',
    'last 1 firefox version',
    'last 1 safari version',
    'last 1 edge version',
];
function createWebpackConfiguration({ output, development = false, hotOptions, } = {}) {
    const useReact = shouldUseReact();
    const targets = development ? DEVELOPMENT_TARGETS : PRODUCTION_TARGETS;
    const mode = development ? 'development' : 'production';
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const TerserWebpackPlugin = require('terser-webpack-plugin');
    const plugins = [];
    if (development) {
        if (!hotOptions) {
            throw new Error('When development=true, hotOptions are required');
        }
        plugins.push(new ui_extensions_webpack_hot_client_1.UIExtensionsHotClient(hotOptions));
    }
    return {
        mode,
        target: 'webworker',
        entry: development
            ? ['@shopify/ui-extensions-webpack-hot-client/worker', getEntry()]
            : getEntry(),
        output: Object.assign({ globalObject: 'self', path: path.resolve('build') }, (output !== null && output !== void 0 ? output : {})),
        optimization: development
            ? undefined
            : {
                concatenateModules: true,
                minimize: true,
                namedChunks: true,
                namedModules: true,
                runtimeChunk: false,
                splitChunks: false,
                minimizer: [
                    new TerserWebpackPlugin({
                        extractComments: {
                            condition: /^\**!|@preserve|@license|@cc_on/i,
                            filename: () => `LICENSE.txt`,
                            banner: (licenseFilename) => `Licenses: ${licenseFilename}`,
                        },
                        terserOptions: {
                            ecma: 5,
                            warnings: false,
                            // Per one of the authors of Preact, the extra pass may inline more esmodule imports
                            // @see https://github.com/webpack-contrib/mini-css-extract-plugin/pull/509#issuecomment-599083073
                            compress: {
                                passes: 2,
                            },
                            ie8: false,
                            safari10: true,
                            mangle: {
                                safari10: true,
                            },
                        },
                    }),
                ],
            },
        resolve: {
            mainFields: ['esnext', 'browser', 'module', 'main'],
            extensions: ['.esnext', '.mjs', '.ts', '.tsx', '.js', '.json'],
            alias: useReact === 'mini'
                ? {
                    react$: '@remote-ui/mini-react/compat',
                    'react/jsx-runtime$': '@remote-ui/mini-react/jsx-runtime',
                    'react-dom$': '@remote-ui/mini-react/compat',
                    '@remote-ui/react$': '@remote-ui/mini-react/compat',
                }
                : {},
        },
        module: {
            rules: [
                {
                    test: /\.(jsx?|esnext)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: Object.assign({ configFile: false }, babelConfig({
                            react: useReact,
                            typescript: false,
                            targets,
                        })),
                    },
                },
                {
                    test: /\.(js|esnext)$/,
                    include: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: Object.assign({ configFile: false, compact: true }, babelConfig({
                            react: false,
                            typescript: false,
                            targets,
                        })),
                    },
                },
                {
                    test: /\.(tsx?)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: Object.assign({ configFile: false }, babelConfig({
                            react: useReact,
                            typescript: true,
                            targets,
                        })),
                    },
                },
            ],
        },
        plugins: [
            ...plugins,
            new webpack_1.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(mode),
            }),
        ].filter(Boolean),
    };
}
exports.createWebpackConfiguration = createWebpackConfiguration;
const BABEL_PRESET_ENV_OPTIONS = {
    modules: false,
    useBuiltIns: false,
};
const BABEL_PLUGINS = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
];
function babelConfig({ react = false, typescript = false, targets, } = {}) {
    return {
        presets: [
            ['@babel/preset-env', Object.assign(Object.assign({}, BABEL_PRESET_ENV_OPTIONS), { targets })],
            typescript && '@babel/preset-typescript',
            react && [
                '@babel/preset-react',
                {
                    runtime: 'automatic',
                    importSource: react === 'mini' ? '@remote-ui/mini-react' : 'react',
                },
            ],
        ].filter(Boolean),
        plugins: BABEL_PLUGINS,
    };
}
exports.babelConfig = babelConfig;
function getEntry() {
    const indexFiles = glob_1.sync('index.{ts,tsx,js}', { absolute: true });
    if (indexFiles.length > 0) {
        return indexFiles[0];
    }
    const srcIndexFiles = glob_1.sync('src/index.{ts,tsx,js}', { absolute: true });
    if (srcIndexFiles) {
        return srcIndexFiles[0];
    }
    throw new Error(`No entry file found in ${process.cwd()}. Make sure you have a JavaScript or TypeScript index file at the root of your project, or nested in the /src directory`);
}
