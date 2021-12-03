import { ExtensionPoint, ExtensionApi } from '../../extension-points';
export declare type ExtensionContainer<T extends ExtensionPoint> = ExtensionApi[T]['container'];
/**
 * Each extension point provides a container API with methods the extension can use to communicate with Shopify Admin.
 */
export interface ContainerApi<T extends ExtensionPoint> {
    container: ExtensionContainer<T>;
}
export declare function isContainerApi(api: any): api is ContainerApi<any>;
//# sourceMappingURL=index.d.ts.map