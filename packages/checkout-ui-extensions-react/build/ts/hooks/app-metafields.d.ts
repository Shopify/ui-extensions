import type { RenderExtensionPoint, AppMetafieldEntryTarget, Metafield } from '@shopify/checkout-ui-extensions';
interface AppMetafieldFilters {
    id?: AppMetafieldEntryTarget['id'];
    type?: AppMetafieldEntryTarget['type'];
    namespace?: Metafield['namespace'];
    key?: Metafield['key'];
}
/**
 * Returns the metafields configured via extension.config.yml.
 * @arg {AppMetafieldFilters} - filter the list of returned metafields
 */
export declare function useAppMetafields<ID extends RenderExtensionPoint = RenderExtensionPoint>(filters?: AppMetafieldFilters): import("@shopify/checkout-ui-extensions").AppMetafieldEntry[];
export {};
//# sourceMappingURL=app-metafields.d.ts.map