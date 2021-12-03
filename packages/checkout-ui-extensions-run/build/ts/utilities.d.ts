/// <reference types="webpack" />
/// <reference types="webpack-dev-server" />
import { URL } from 'url';
export declare const argumentParserFor: (args: string[]) => (name: string) => string | undefined;
export declare function namedArgument(name: string, args: readonly string[]): string | undefined;
export declare function log(message: string, { error }?: {
    error?: boolean | undefined;
}): void;
export interface CheckoutExtensionConfig {
    readonly extensionPoints: string[];
    readonly metafields?: {
        namespace: string;
        key: string;
    }[];
}
export interface CheckoutExtension {
    readonly type: 'checkout';
    readonly config: CheckoutExtensionConfig;
}
export interface PostPurchaseExtensionConfig {
    readonly metafields?: any;
}
export interface PostPurchaseExtension {
    readonly type: 'post-purchase';
    readonly config?: PostPurchaseExtensionConfig;
}
export declare type Extension = CheckoutExtension | PostPurchaseExtension;
export interface DevelopmentServerConfiguration {
    port: string;
    scriptUrl: string;
    filename: string;
    store?: string;
    resourceUrl?: string;
    publicUrl?: string;
    passwordPageUrl?: string;
    permalinkUrl?: string;
    extensionPoint?: string;
}
export declare function loadExtension(): Extension;
interface Data {
    scriptUrl: string;
    config: any;
    apiKey: string;
}
export declare function getLegacyPostPurchaseData(scriptUrl: string, extension: Extension): Data;
export declare function convertLegacyPostPurchaseDataToQueryString(data: Data): string;
export declare function parseDevelopmentServerConfig(args: string[]): {
    store: string | undefined;
    resourceUrl: string | undefined;
    publicUrl: string | undefined;
    scriptUrl: string;
    port: string;
    permalinkUrl: string | undefined;
    passwordPageUrl: string | undefined;
    webpackConfiguration: import("webpack").Configuration;
    filename: string;
    extensionPoint: string | undefined;
};
export declare const urlGeneratorFor: (baseUrl?: string | undefined) => (path?: string | undefined, query?: Record<string, string>) => URL | undefined;
export {};
//# sourceMappingURL=utilities.d.ts.map