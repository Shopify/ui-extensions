import {OrderStatusApi} from './order-status/order-status';
import {StandardApi} from './standard-api/standard-api';
import {CartLineItemApi} from './cart-line/cart-line-item';
import {FullPageApi} from '../targets';
import {ButtonProps} from '../components';
import type {AuthenticatedAccount} from './shared';
import type {I18n} from './shared';
import type {NavigationHistoryEntry} from './standard-api/standard-api';

/** @publicDocs */
export type UseCustomerGeneratedType = AuthenticatedAccount['customer'];

/** @publicDocs */
export type UsePurchasingCompanyGeneratedType =
  AuthenticatedAccount['purchasingCompany'];

/** @publicDocs */
export type UseTranslateGeneratedType = I18n;

/** @publicDocs */
export type UseApiGeneratedType = NavigationHistoryEntry;

/** @publicDocs */
export interface Docs_OrderStatus_MetafieldsApi
  extends Pick<OrderStatusApi<any>, 'appMetafields' | 'metafields'> {}

/** @publicDocs */
export interface Docs_OrderStatus_AttributesApi
  extends Pick<OrderStatusApi<any>, 'attributes'> {}

/** @publicDocs */
export interface Docs_OrderStatus_BuyerIdentityApi
  extends Pick<OrderStatusApi<any>, 'buyerIdentity'> {}

/** @publicDocs */
export interface Docs_OrderStatus_CheckoutSettingsApi
  extends Pick<OrderStatusApi<any>, 'checkoutSettings'> {}

/** @publicDocs */
export interface Docs_OrderStatus_CostApi
  extends Pick<OrderStatusApi<any>, 'cost'> {}

/** @publicDocs */
export interface Docs_OrderStatus_LocalizationApi
  extends Pick<OrderStatusApi<any>, 'localization'> {}

/** @publicDocs */
export interface Docs_OrderStatus_DiscountsApi
  extends Pick<OrderStatusApi<any>, 'discountAllocations' | 'discountCodes'> {}

/** @publicDocs */
export interface Docs_OrderStatus_GiftCardsApi
  extends Pick<OrderStatusApi<any>, 'appliedGiftCards'> {}

/** @publicDocs */
export interface Docs_OrderStatus_NoteApi
  extends Pick<OrderStatusApi<any>, 'note'> {}

/** @publicDocs */
export interface Docs_OrderStatus_AddressApi
  extends Pick<OrderStatusApi<any>, 'shippingAddress' | 'billingAddress'> {}

/** @publicDocs */
export interface Docs_OrderStatus_ShopApi
  extends Pick<OrderStatusApi<any>, 'shop'> {}

/** @publicDocs */
export interface Docs_OrderStatus_RequireLoginApi
  extends Pick<OrderStatusApi<any>, 'requireLogin'> {}

/** @publicDocs */
export interface Docs_OrderStatus_AuthenticationStateApi
  extends Pick<OrderStatusApi<any>, 'authenticationState'> {}

/** @publicDocs */
export interface Docs_OrderStatus_CartLinesApi
  extends Pick<OrderStatusApi<any>, 'lines'> {}

/** @publicDocs */
export interface Docs_CartLineItem_CartLinesApi
  extends Pick<CartLineItemApi, 'target'> {}

/** @publicDocs */
export interface Docs_OrderStatus_OrderApi
  extends Pick<OrderStatusApi<any>, 'order'> {}

/** @publicDocs */
export interface Docs_Standard_ExtensionApi
  extends Pick<StandardApi<any>, 'extension'> {}

/** @publicDocs */
export interface Docs_Standard_AuthenticatedAccountApi
  extends Pick<StandardApi<any>, 'authenticatedAccount'> {}

/** @publicDocs */
export interface Docs_Standard_VersionApi
  extends Pick<StandardApi<any>, 'version'> {}

/** @publicDocs */
export interface Docs_Standard_LocalizationApi
  extends Pick<StandardApi<any>, 'localization' | 'i18n'> {}

/** @publicDocs */
export interface Docs_Standard_SessionTokenApi
  extends Pick<StandardApi<any>, 'sessionToken'> {}

/** @publicDocs */
export interface Docs_Standard_SettingsApi
  extends Pick<StandardApi, 'settings'> {}

/** @publicDocs */
export interface Docs_Standard_StorageApi
  extends Pick<StandardApi<any>, 'storage'> {}

/** @publicDocs */
export interface Docs_Standard_UIApi extends Pick<StandardApi<any>, 'ui'> {}

/** @publicDocs */
export interface Docs_Standard_QueryApi
  extends Pick<StandardApi<any>, 'query'> {}

/** @publicDocs */
export interface Docs_StandardApi extends Omit<StandardApi<any>, 'router'> {}

/** @publicDocs */
export interface Docs_FullPageApi extends FullPageApi {}

/** @publicDocs */
export interface Docs_Page_Button_PrimaryAction
  extends Pick<
    ButtonProps,
    | 'onPress'
    | 'overlay'
    | 'to'
    | 'loading'
    | 'loadingLabel'
    | 'disabled'
    | 'accessibilityLabel'
  > {}
/** @publicDocs */
export interface Docs_Page_Button_SecondaryAction
  extends Pick<ButtonProps, 'onPress' | 'to'> {
  /**
   * A label used for buyers using assistive technologies. Needed because `children` passed to this component will be discarded.
   */
  accessibilityLabel: ButtonProps['accessibilityLabel'];
}

/** @publicDocs */
export interface Docs_ResourceItem_Button_Action
  extends Pick<
    ButtonProps,
    | 'onPress'
    | 'overlay'
    | 'to'
    | 'loading'
    | 'loadingLabel'
    | 'disabled'
    | 'accessibilityLabel'
    | 'kind'
  > {}

/** @publicDocs */
export interface Docs_Menu_Button_Action
  extends Omit<
    ButtonProps,
    'kind' | 'textDecoration' | 'inlineAlignment' | 'inlineSize' | 'size'
  > {}

/** @publicDocs */
export interface Docs_OrderActionMenu_Button
  extends Pick<
    ButtonProps,
    'onPress' | 'loading' | 'loadingLabel' | 'disabled' | 'accessibilityLabel'
  > {
  /**
   * Destination URL to link to.
   *
   * E.g. `extension:/` to navigate to the Full-page extension.
   */
  to: ButtonProps['to'];
}

/** @publicDocs */
export interface Docs_CustomerAccountAction_Button_PrimaryAction
  extends Pick<
    ButtonProps,
    | 'onPress'
    | 'loading'
    | 'loadingLabel'
    | 'disabled'
    | 'accessibilityLabel'
    | 'accessibilityRole'
  > {}

/** @publicDocs */
export interface Docs_CustomerAccountAction_Button_SecondaryAction
  extends Pick<
    ButtonProps,
    'onPress' | 'loading' | 'loadingLabel' | 'disabled' | 'accessibilityLabel'
  > {}
