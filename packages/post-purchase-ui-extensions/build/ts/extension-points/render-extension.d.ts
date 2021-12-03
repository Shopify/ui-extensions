import { RemoteRoot, RemoteComponentType } from '@remote-ui/core';
/**
 * The output expected from the ShouldRender extension point.
 */
interface RenderResult<Input> {
    /**
     * Whether the post-purchase page is requested.
     */
    update?(input: Partial<Input>): void;
}
/**
 * A type of extension point that is capable of rendering UI into Checkout
 * natively. This type of extension point receives an object to manipulate
 * the UI as its first argument, and additional data and methods as a second
 * argument. The object that can manipulate the UI is referred to as a `RemoteRoot`,
 * and is provided by the [remote-ui library](https://github.com/Shopify/remote-ui/tree/main/packages/core)
 * on which UI Extensions' rendering capabilities are built.
 */
export interface RenderExtension<Input, AllowedComponents extends RemoteComponentType<string, any, any>> {
    /**
     * Input type for RenderExtension.
     */
    (root: RemoteRoot<AllowedComponents, true>, input: Input): RenderResult<Input> | void;
}
export {};
//# sourceMappingURL=render-extension.d.ts.map