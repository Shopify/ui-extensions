import type {BackgroundShopifyGlobal} from '../globals';
import type {AppEventsApi} from './app-events-api/app-events-api';

/**
 * Reports app-defined events from POS UI extensions to Shopify.
 * @publicDocs
 */
export interface Docs_AppEventsApi extends AppEventsApi {}

/**
 * Methods available on the `shopify` global for app background extensions.
 * @publicDocs
 */
export interface Docs_AppBackgroundEventMethods
  extends Pick<
    BackgroundShopifyGlobal,
    'addEventListener' | 'removeEventListener'
  > {}

/**
 * Validation interceptor method available on the `shopify` global for app
 * background extensions.
 * @publicDocs
 */
export interface Docs_AppBackgroundInterceptMethods
  extends Pick<BackgroundShopifyGlobal, 'intercept'> {}
