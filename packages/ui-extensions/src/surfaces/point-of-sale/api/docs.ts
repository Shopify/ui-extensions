import type {BackgroundShopifyGlobal} from '../globals';

/**
 * Methods available on the `shopify` global for app background extensions.
 * @publicDocs
 */
export interface Docs_AppBackgroundEventMethods
  extends Pick<
    BackgroundShopifyGlobal,
    'addEventListener' | 'removeEventListener'
  > {}
