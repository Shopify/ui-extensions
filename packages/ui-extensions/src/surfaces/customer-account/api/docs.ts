import {OrderStatusApi} from './order-status/order-status';
import {CartLineItemApi} from './cart-line/cart-line-item';

export interface Docs_OrderStatus_MetafieldsApi
  extends Pick<OrderStatusApi<any>, 'appMetafields' | 'metafields'> {}

export interface Docs_OrderStatus_AttributesApi
  extends Pick<OrderStatusApi<any>, 'attributes'> {}

export interface Docs_OrderStatus_BuyerIdentityApi
  extends Pick<OrderStatusApi<any>, 'buyerIdentity'> {}

export interface Docs_OrderStatus_CheckoutSettingsApi
  extends Pick<OrderStatusApi<any>, 'checkoutSettings'> {}

export interface Docs_OrderStatus_CostApi
  extends Pick<OrderStatusApi<any>, 'cost'> {}

export interface Docs_OrderStatus_LocalizationApi
  extends Pick<OrderStatusApi<any>, 'i18n' | 'localization'> {}

export interface Docs_OrderStatus_DiscountsApi
  extends Pick<OrderStatusApi<any>, 'discountAllocations' | 'discountCodes'> {}

export interface Docs_OrderStatus_DiscountsApi
  extends Pick<OrderStatusApi<any>, 'discountAllocations' | 'discountCodes'> {}

export interface Docs_OrderStatus_GiftCardsApi
  extends Pick<OrderStatusApi<any>, 'appliedGiftCards'> {}

export interface Docs_OrderStatus_NoteApi
  extends Pick<OrderStatusApi<any>, 'note'> {}

export interface Docs_OrderStatus_SessionTokenApi
  extends Pick<OrderStatusApi<any>, 'sessionToken'> {}

export interface Docs_OrderStatus_SettingsApi
  extends Pick<OrderStatusApi<any>, 'settings'> {}

export interface Docs_OrderStatus_SettingsApi
  extends Pick<OrderStatusApi<any>, 'settings'> {}

export interface Docs_OrderStatus_AddressApi
  extends Pick<OrderStatusApi<any>, 'shippingAddress' | 'billingAddress'> {}

export interface Docs_OrderStatus_ShopApi
  extends Pick<OrderStatusApi<any>, 'shop'> {}

export interface Docs_OrderStatus_CartLinesApi
  extends Pick<OrderStatusApi<any>, 'lines'> {}

export interface Docs_CartLineItem_CartLinesApi
  extends Pick<CartLineItemApi, 'target'> {}

export interface Docs_OrderStatus_OrderApi
  extends Pick<OrderStatusApi<any>, 'order'> {}
