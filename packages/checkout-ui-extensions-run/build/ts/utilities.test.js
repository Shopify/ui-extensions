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
const url_1 = require("url");
const utilities_1 = require("./utilities");
const WebpackConfig = __importStar(require("./webpack-config"));
describe('argumentParserFor', () => {
    test('creates a function', () => {
        expect(utilities_1.argumentParserFor([])).toBeInstanceOf(Function);
    });
    test('creates a function for accessing individual arguments', () => {
        const fetch = utilities_1.argumentParserFor(['--store=shop1.myshopify.io']);
        expect(fetch('store')).toBe('shop1.myshopify.io');
    });
});
describe('parseDevelopmentServerConfig', () => {
    const args = [
        '--store=shop1.myshopify.io',
        '--resourceUrl=/cart/1:1',
        '--publicUrl=https://example.com',
        '--port=5678',
    ];
    test('includes store', () => {
        expect(utilities_1.parseDevelopmentServerConfig(args)).toMatchObject({
            store: 'shop1.myshopify.io',
        });
    });
    test('includes resource URL', () => {
        expect(utilities_1.parseDevelopmentServerConfig(args)).toMatchObject({
            resourceUrl: '/cart/1:1',
        });
    });
    test('includes public URL', () => {
        expect(utilities_1.parseDevelopmentServerConfig(args)).toMatchObject({
            publicUrl: 'https://example.com',
        });
    });
    test('includes port', () => {
        expect(utilities_1.parseDevelopmentServerConfig(args)).toMatchObject({
            port: '5678',
        });
    });
    test('includes filename', () => {
        expect(utilities_1.parseDevelopmentServerConfig(args)).toMatchObject({
            filename: 'extension.js',
        });
    });
    test('includes extensionPoint', () => {
        expect(utilities_1.parseDevelopmentServerConfig([...args, '--extension-point=test'])).toMatchObject({
            extensionPoint: 'test',
        });
    });
    describe('scriptUrl', () => {
        test('points to localhost:8910 when no public url and port is provided', () => {
            expect(utilities_1.parseDevelopmentServerConfig([])).toMatchObject({
                scriptUrl: 'http://localhost:8910/assets/extension.js',
            });
        });
        test('supports custom port', () => {
            expect(utilities_1.parseDevelopmentServerConfig(['--port=1234'])).toMatchObject({
                scriptUrl: 'http://localhost:1234/assets/extension.js',
            });
        });
        test('points to public URL if one was provided and ignores port', () => {
            expect(utilities_1.parseDevelopmentServerConfig([
                '--port=1234',
                '--publicUrl=https://example.com',
            ])).toMatchObject({
                scriptUrl: 'https://example.com/assets/extension.js',
            });
        });
    });
    describe('permalinkUrl', () => {
        test('returns undefined if resourceUrl, publicUrl or store are missing', () => {
            const argsWithoutShop = [
                '--resourceUrl=/cart/1:1',
                '--publicUrl=https://example.com',
            ];
            const argsWithoutResourceUrl = [
                '--publicUrl=https://example.com',
                '--store=shop1.myshopify.io',
            ];
            const argsWithoutPublicUrl = [
                '--store=shop1.myshopify.io',
                '--resourceUrl=/cart/1:1',
            ];
            const configWithoutPermalinkUrl = { permalinkUrl: undefined };
            expect(utilities_1.parseDevelopmentServerConfig(argsWithoutShop)).toMatchObject(configWithoutPermalinkUrl);
            expect(utilities_1.parseDevelopmentServerConfig(argsWithoutResourceUrl)).toMatchObject(configWithoutPermalinkUrl);
            expect(utilities_1.parseDevelopmentServerConfig(argsWithoutPublicUrl)).toMatchObject(configWithoutPermalinkUrl);
        });
        test('returns a permalinkUrl if all necessary command line flags are present', () => {
            const permalink = new url_1.URL('https://shop1.myshopify.com/cart/1:1');
            permalink.searchParams.append('dev', 'https://example.com/query');
            const configWithPermalink = { permalinkUrl: permalink.toString() };
            expect(utilities_1.parseDevelopmentServerConfig([
                ...args,
                '--resourceUrl=/cart/1:1',
                '--publicUrl=https://example.com',
                '--store=shop1.myshopify.com',
            ])).toMatchObject(configWithPermalink);
        });
    });
    describe('passwordPageUrl', () => {
        test('returns undefined if store flag is missing', () => {
            const configWithoutPasswordPageUrl = {
                passwordPageUrl: undefined,
            };
            expect(utilities_1.parseDevelopmentServerConfig([])).toMatchObject(configWithoutPasswordPageUrl);
        });
        test('returns https://<store>/password if store flag is present', () => {
            const configWithPasswordPageUrl = {
                passwordPageUrl: 'https://shop1.myshopify.io/password',
            };
            expect(utilities_1.parseDevelopmentServerConfig([...args, '--store=shop1.myshopify.io'])).toMatchObject(configWithPasswordPageUrl);
        });
    });
    describe('webpackConfiguration', () => {
        test('runs in development mode', () => {
            const createWebpackConfigurationSpy = jest.spyOn(WebpackConfig, 'createWebpackConfiguration');
            utilities_1.parseDevelopmentServerConfig(args);
            expect(createWebpackConfigurationSpy).toHaveBeenCalledWith(expect.objectContaining({ development: true }));
        });
        test('correct output settings', () => {
            const createWebpackConfigurationSpy = jest.spyOn(WebpackConfig, 'createWebpackConfiguration');
            utilities_1.parseDevelopmentServerConfig(args);
            expect(createWebpackConfigurationSpy).toHaveBeenCalledWith(expect.objectContaining({
                output: {
                    filename: 'extension.js',
                    publicPath: '/assets/',
                },
            }));
        });
        test('websocket points to localhost:8910 by default', () => {
            const createWebpackConfigurationSpy = jest.spyOn(WebpackConfig, 'createWebpackConfiguration');
            utilities_1.parseDevelopmentServerConfig([]);
            expect(createWebpackConfigurationSpy).toHaveBeenCalledWith(expect.objectContaining({
                hotOptions: {
                    https: false,
                    webSocket: {
                        host: 'localhost',
                        port: 8910,
                        path: '/build',
                    },
                },
            }));
        });
        test('websocket points to the public endpoint if --publicUrl was provided', () => {
            const createWebpackConfigurationSpy = jest.spyOn(WebpackConfig, 'createWebpackConfiguration');
            utilities_1.parseDevelopmentServerConfig(['--publicUrl=https://example.com/']);
            expect(createWebpackConfigurationSpy).toHaveBeenCalledWith(expect.objectContaining({
                hotOptions: {
                    https: true,
                    webSocket: {
                        host: 'example.com',
                        port: 443,
                        path: '/build',
                    },
                },
            }));
        });
    });
});
