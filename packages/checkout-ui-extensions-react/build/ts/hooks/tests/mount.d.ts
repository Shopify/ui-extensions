import { ApiForRenderExtension, RenderExtensionPoint } from '@shopify/checkout-ui-extensions';
import type { StatefulRemoteSubscribable } from '@remote-ui/async-subscription';
export declare const mount: import("@quilted/react-testing").CustomMount<Options, Options, Record<string, never>, Record<string, never>, false>;
declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
declare type ExtensionApi = DeepPartial<ApiForRenderExtension<RenderExtensionPoint>>;
interface Options {
    extensionApi?: ExtensionApi;
}
export declare function createMockStatefulRemoteSubscribable<T>(value: T): StatefulRemoteSubscribable<T>;
export {};
//# sourceMappingURL=mount.d.ts.map