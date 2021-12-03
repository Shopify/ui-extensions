/// <reference types="webpack-dev-server" />
import type { Configuration } from 'webpack';
import { UIExtensionsHotClient } from '@shopify/ui-extensions-webpack-hot-client';
export declare function shouldUseReact(): boolean | 'mini';
interface Options {
    output?: Configuration['output'];
    development?: boolean;
    hotOptions?: ConstructorParameters<typeof UIExtensionsHotClient>[0];
}
export declare function createWebpackConfiguration({ output, development, hotOptions, }?: Options): Configuration;
export declare function babelConfig({ react, typescript, targets, }?: {
    react?: ReturnType<typeof shouldUseReact>;
    typescript?: boolean;
    targets?: string[];
}): {
    presets: (string | false | (string | {
        targets: string[] | undefined;
        modules: boolean;
        useBuiltIns: boolean;
    })[] | (string | {
        runtime: string;
        importSource: string;
    })[])[];
    plugins: (string | (string | {
        loose: boolean;
    })[])[];
};
export {};
//# sourceMappingURL=webpack-config.d.ts.map