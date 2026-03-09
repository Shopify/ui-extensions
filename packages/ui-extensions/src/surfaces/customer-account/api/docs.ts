import type {OrderStatusApi} from './order-status/order-status';
import type {CartLineItemApi} from './cart-line/cart-line-item';

/**
 * These types are used to generate the documentation for the API and decipher which properties are available for which APIs.
 * If you are adding a new property and you'd like it to be documented in the API section, then you'll need to specify the property in the appropriate interface below.
 *
 * Note: These are not exported as part of the package, they are only used for documentation purposes.
 */

type StandardApi = OrderStatusApi<'customer-account.order-status.block.render'>;

/** @publicDocs */
export type Docs_StandardApi = StandardApi;

/** @publicDocs */
export type Docs_FullPageApi = StandardApi;

/** @publicDocs */
export interface Docs_Standard_UIApi extends Pick<StandardApi, 'ui'> {}

/** @publicDocs */
export interface Docs_Standard_StorageApi
  extends Pick<StandardApi, 'storage'> {}

/** @publicDocs */
export interface Docs_Standard_SessionTokenApi
  extends Pick<StandardApi, 'sessionToken'> {}

/** @publicDocs */
export interface Docs_Standard_QueryApi extends Pick<StandardApi, 'query'> {}

/** @publicDocs */
export interface Docs_Standard_LocalizationApi
  extends Pick<StandardApi, 'i18n' | 'localization'> {}

/** @publicDocs */
export interface Docs_Standard_VersionApi
  extends Pick<StandardApi, 'version'> {}

/** @publicDocs */
export interface Docs_OrderStatus_OrderApi
  extends Pick<
    OrderStatusApi<'customer-account.order-status.block.render'>,
    'order'
  > {}

/** @publicDocs */
export interface Docs_OrderStatus_ShopApi extends Pick<StandardApi, 'shop'> {}

/** @publicDocs */
export interface Docs_OrderStatus_SettingsApi
  extends Pick<StandardApi, 'settings'> {}

/** @publicDocs */
export interface Docs_OrderStatus_NoteApi extends Pick<StandardApi, 'note'> {}

/** @publicDocs */
export interface Docs_OrderStatus_MetafieldsApi
  extends Pick<StandardApi, 'appMetafields' | 'metafields'> {}

/** @publicDocs */
export interface Docs_OrderStatus_LocalizationApi
  extends Pick<StandardApi, 'i18n' | 'localization'> {}

/** @publicDocs */
export interface Docs_OrderStatus_GiftCardsApi
  extends Pick<StandardApi, 'appliedGiftCards'> {}

/** @publicDocs */
export interface Docs_OrderStatus_DiscountsApi
  extends Pick<StandardApi, 'discountAllocations' | 'discountCodes'> {}

/** @publicDocs */
export interface Docs_OrderStatus_CostApi extends Pick<StandardApi, 'cost'> {}

/** @publicDocs */
export interface Docs_OrderStatus_CheckoutSettingsApi
  extends Pick<StandardApi, 'checkoutSettings'> {}

/** @publicDocs */
export interface Docs_OrderStatus_CartLinesApi
  extends Pick<StandardApi, 'lines'> {}

/** @publicDocs */
export interface Docs_CartLineItem_CartLinesApi
  extends Pick<CartLineItemApi, 'target'> {}

/** @publicDocs */
export interface Docs_OrderStatus_BuyerIdentityApi
  extends Pick<StandardApi, 'buyerIdentity'> {}

/** @publicDocs */
export interface Docs_OrderStatus_AttributesApi
  extends Pick<StandardApi, 'attributes'> {}

/** @publicDocs */
export interface Docs_OrderStatus_AddressApi
  extends Pick<StandardApi, 'shippingAddress' | 'billingAddress'> {}

/** @publicDocs */
export interface Docs_OrderStatus_AuthenticationStateApi
  extends Pick<StandardApi, 'buyerIdentity'> {}

/** @publicDocs */
export interface Docs_OrderStatus_RequireLoginApi
  extends Pick<StandardApi, 'sessionToken'> {}

/** @publicDocs */
export interface Docs_OrderActionMenu_Button {
  onPress?(): void;
  to?: string;
  children?: string;
}

/** @publicDocs */
export interface StandardExtensionNavigation extends Pick<StandardApi, 'ui'> {}

/** @publicDocs */
export interface FullExtensionNavigation extends Pick<StandardApi, 'ui'> {}

/** @publicDocs */
export interface FulfillmentApi extends Pick<StandardApi, 'order'> {}

/** @publicDocs */
export interface OrderApi extends Pick<StandardApi, 'order'> {}

/** @publicDocs */
export interface ActionExtensionApi extends StandardApi {}

/** @publicDocs */
export interface CompanyLocationApi
  extends Pick<
    StandardApi,
    'buyerIdentity' | 'query' | 'i18n' | 'localization'
  > {}
