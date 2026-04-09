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

/**
 * The base API object provided to `customer-account` extension targets that support in-page navigation and history management.
 * @publicDocs
 */
export interface Docs_Standard_NavigationApi
  extends Pick<StandardApi<any>, 'navigation'> {}

export interface Docs_StandardApi extends Omit<StandardApi<any>, 'router'> {}

export interface Docs_FullPageApi extends FullPageApi {}

/**
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
  > {
  /**
   * A callback fired when the button is pressed.
   */
  onPress?: ButtonProps['onPress'];
  /**
   * An overlay component rendered when the user interacts with the button, such as a modal or popover.
   */
  overlay?: ButtonProps['overlay'];
  /**
   * A destination URL that the button navigates to. When set, the button behaves as a link.
   */
  to?: ButtonProps['to'];
  /**
   * Whether to replace the button content with a loading indicator.
   *
   * @defaultValue false
   */
  loading?: ButtonProps['loading'];
  /**
   * An accessible label for the loading indicator, announced when the user prefers reduced motion. Only used when `loading` is `true`.
   */
  loadingLabel?: ButtonProps['loadingLabel'];
  /**
   * Whether the button is disabled. A disabled button is non-interactive and visually de-emphasized.
   *
   * @defaultValue false
   */
  disabled?: ButtonProps['disabled'];
  /**
   * A label announced by assistive technologies that describes the button's purpose. When set, the button's visible `children` are not announced to screen readers.
   */
  accessibilityLabel?: ButtonProps['accessibilityLabel'];
}

/**
 * @publicDocs
 */
export interface Docs_Page_Button_SecondaryAction
  extends Pick<ButtonProps, 'onPress' | 'to'> {
  /**
   * A callback fired when the button is pressed.
   */
  onPress?: ButtonProps['onPress'];
  /**
   * A destination URL that the button navigates to. When set, the button behaves as a link.
   */
  to?: ButtonProps['to'];
  /**
   * A label announced by assistive technologies that describes the button's purpose. Required because `children` passed to this component are discarded.
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
