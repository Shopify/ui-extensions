import {OrderStatusApi} from './order-status/order-status';
import {StandardApi} from './standard-api/standard-api';
import {CartLineItemApi} from './cart-line/cart-line-item';
import {FullPageApi} from '../targets';
import {ButtonProps} from '../components';

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_MetafieldsApi
  extends Pick<OrderStatusApi<any>, 'appMetafields' | 'metafields'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_AttributesApi
  extends Pick<OrderStatusApi<any>, 'attributes'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_BuyerIdentityApi
  extends Pick<OrderStatusApi<any>, 'buyerIdentity'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_CheckoutSettingsApi
  extends Pick<OrderStatusApi<any>, 'checkoutSettings'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_CostApi
  extends Pick<OrderStatusApi<any>, 'cost'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_LocalizationApi
  extends Pick<OrderStatusApi<any>, 'localization'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_DiscountsApi
  extends Pick<OrderStatusApi<any>, 'discountAllocations' | 'discountCodes'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_GiftCardsApi
  extends Pick<OrderStatusApi<any>, 'appliedGiftCards'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_NoteApi
  extends Pick<OrderStatusApi<any>, 'note'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_AddressApi
  extends Pick<OrderStatusApi<any>, 'shippingAddress' | 'billingAddress'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_ShopApi
  extends Pick<OrderStatusApi<any>, 'shop'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_RequireLoginApi
  extends Pick<OrderStatusApi<any>, 'requireLogin'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_AuthenticationStateApi
  extends Pick<OrderStatusApi<any>, 'authenticationState'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_CartLinesApi
  extends Pick<OrderStatusApi<any>, 'lines'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_CartLineItem_CartLinesApi
  extends Pick<CartLineItemApi, 'target'> {}

/**
 * The API object provided to this and other `customer-account.order-status` extension targets.
 * @publicDocs
 */
export interface Docs_OrderStatus_OrderApi
  extends Pick<OrderStatusApi<any>, 'order'> {}

/**
 * The base API object provided to this and other `customer-account` extension targets.
 * @publicDocs
 */
export interface Docs_Standard_ExtensionApi
  extends Pick<StandardApi<any>, 'extension'> {}

/**
 * The base API object provided to this and other `customer-account` extension targets.
 * @publicDocs
 */
export interface Docs_Standard_AuthenticatedAccountApi
  extends Pick<StandardApi<any>, 'authenticatedAccount'> {}

/**
 * The base API object provided to this and other `customer-account` extension targets.
 * @publicDocs
 */
export interface Docs_Standard_VersionApi
  extends Pick<StandardApi<any>, 'version'> {}

/**
 * The base API object provided to this and other `customer-account` extension targets.
 * @publicDocs
 */
export interface Docs_Standard_LocalizationApi
  extends Pick<StandardApi<any>, 'localization' | 'i18n'> {}

/**
 * The base API object provided to this and other `customer-account` extension targets.
 * @publicDocs
 */
export interface Docs_Standard_SessionTokenApi
  extends Pick<StandardApi<any>, 'sessionToken'> {}

/**
 * The base API object provided to this and other `customer-account` extension targets.
 * @publicDocs
 */
export interface Docs_Standard_AnalyticsApi
  extends Pick<StandardApi<any>, 'analytics'> {}

/**
 * The base API object provided to this and other `customer-account` extension targets.
 * @publicDocs
 */
export interface Docs_Standard_SettingsApi
  extends Pick<StandardApi, 'settings'> {}

/**
 * The base API object provided to this and other `customer-account` extension targets.
 * @publicDocs
 */
export interface Docs_Standard_StorageApi
  extends Pick<StandardApi<any>, 'storage'> {}

/**
 * The base API object provided to this and other `customer-account` extension targets.
 * @publicDocs
 */
export interface Docs_Standard_CustomerPrivacyApi
  extends Pick<
    StandardApi<any>,
    'customerPrivacy' | 'applyTrackingConsentChange'
  > {}

/**
 * The base API object provided to this and other `customer-account` extension targets.
 * @publicDocs
 */
export interface Docs_Standard_UIApi extends Pick<StandardApi<any>, 'ui'> {}

/**
 * The base API object provided to this and other `customer-account` extension targets.
 * @publicDocs
 */
export interface Docs_Standard_QueryApi
  extends Pick<StandardApi<any>, 'query'> {}

export interface Docs_StandardApi extends Omit<StandardApi<any>, 'router'> {}

export interface Docs_FullPageApi extends FullPageApi {}

/**
 * Supported props for Buttons used inside Page `primary-action` slot.
 * @publicDocs
 */
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

/**
 * Supported props for Button used inside Page `secondary-actions` slot.
 * @publicDocs
 */
export interface Docs_Page_Button_SecondaryAction
  extends Pick<ButtonProps, 'onPress' | 'to'> {
  /**
   * A label used for buyers using assistive technologies. Needed because `children` passed to this component will be discarded.
   */
  accessibilityLabel: ButtonProps['accessibilityLabel'];
}

/**
 * Supported props for Buttons used inside ResourceItem action slot.
 * @publicDocs
 */
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

/**
 * Supported props for Buttons used inside Menu.
 * @publicDocs
 */
export interface Docs_Menu_Button_Action
  extends Omit<
    ButtonProps,
    'kind' | 'textDecoration' | 'inlineAlignment' | 'inlineSize' | 'size'
  > {}

/**
 * Supported props for Buttons used in order actions.
 * @publicDocs
 */
export interface Docs_OrderActionMenu_Button
  extends Pick<
    ButtonProps,
    | 'onPress'
    | 'loading'
    | 'loadingLabel'
    | 'disabled'
    | 'accessibilityLabel'
    | 'appearance'
  > {
  /**
   * Destination URL to link to.
   *
   * E.g. `extension:/` to navigate to the Full-page extension.
   */
  to: ButtonProps['to'];
}

/**
 * Supported props for Buttons used inside CustomerAccountAction slots.
 * @publicDocs
 */
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

/**
 * Supported props for Buttons used inside CustomerAccountAction slots.
 * @publicDocs
 */
export interface Docs_CustomerAccountAction_Button_SecondaryAction
  extends Pick<
    ButtonProps,
    'onPress' | 'loading' | 'loadingLabel' | 'disabled' | 'accessibilityLabel'
  > {}
