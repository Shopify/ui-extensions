import {OrderStatusApi} from './order-status/order-status';
import {StandardApi} from './standard-api/standard-api';
import {CartLineItemApi} from './cart-line/cart-line-item';

export type CallbackEvent<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends Event = Event,
> = TEvent & {
  currentTarget: HTMLElementTagNameMap[TTagName];
};

export type CallbackEventListener<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends Event = Event,
> =
  | (EventListener & {
      (event: CallbackEvent<TTagName, TEvent>): void;
    })
  | null;

declare const buttonTagName = 's-button';

interface ButtonProps {
  /**
   * A label that describes the purpose or contents of the Button. It will be read to users using assistive technologies such as screen readers.
   *
   * Use this when using only an icon or the button text is not enough context
   * for users using assistive technologies.
   */
  accessibilityLabel?: string;
  /**
   * ID of a component that should respond to activations (e.g. clicks) on this component.
   *
   * See `command` for how to control the behavior of the target.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor
   */
  commandFor?: string;
  /**
   * Sets the action the `commandFor` should take when this clickable is activated.
   *
   * See the documentation of particular components for the actions they support.
   *
   * - `--auto`: a default action for the target component.
   * - `--show`: shows the target component.
   * - `--hide`: hides the target component.
   * - `--toggle`: toggles the target component.
   * - `--copy`: copies the target ClipboardItem.
   *
   * @default '--auto'
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command
   */
  command?: '--auto' | '--show' | '--hide' | '--toggle' | '--copy';
  /**
   * Disables the button, disallowing any interaction.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * The URL to link to.
   *
   * - If set, it will navigate to the location specified by `href` after executing the `onClick` callback.
   * - If a `commandFor` is set, the `command` will be executed instead of the navigation.
   */
  href?: string;
  /**
   * A unique identifier for the element.
   */
  id?: string;
  /**
   * Replaces content with a loading indicator.
   *
   * @defaultValue false
   */
  loading?: boolean;
  /**
   * Specifies where to display the linked URL
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
   *
   * 'auto' - The target is automatically determined based on the origin of the URL. Surfaces can set specific rules on how they handle each URL.
   * It’s expected that the behavior of `auto` is as `_self` except in specific cases.
   * For example, a surface could decide to open cross-origin URLs in a new window (as `_blank`).
   *
   * @default 'auto'
   */
  target?: 'auto' | '_self' | '_blank';
  /**
   * Sets the tone of the Button, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: 'auto' | 'neutral' | 'critical';
  /**
   * The behavior of the button.
   *
   * - `'submit'` - Used to indicate the component acts as a submit button, meaning it submits the closest form.
   * - `'button'` - Used to indicate the component acts as a button, meaning it has no default action.
   * - `'reset'` - Used to indicate the component acts as a reset button, meaning it resets the closest form (returning fields to their default values).
   *
   * This property is ignored if the component supports `href` or `commandFor`/`command` and one of them is set.
   *
   * @default 'button'
   */
  type?: 'button' | 'submit';
  /**
   * Changes the visual appearance of the Button.
   *
   * @default 'auto' - the variant is automatically determined by the Button's context
   */
  variant?: 'auto' | 'primary' | 'secondary';

  /**
   * Callback when the button is activated.
   * This will be called before the action indicated by `type`.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
   */
  click?: ((event: CallbackEventListener<typeof buttonTagName>) => void) | null;
}

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
  extends Pick<OrderStatusApi<any>, 'localization'> {}

export interface Docs_OrderStatus_DiscountsApi
  extends Pick<OrderStatusApi<any>, 'discountAllocations' | 'discountCodes'> {}

export interface Docs_OrderStatus_GiftCardsApi
  extends Pick<OrderStatusApi<any>, 'appliedGiftCards'> {}

export interface Docs_OrderStatus_NoteApi
  extends Pick<OrderStatusApi<any>, 'note'> {}

export interface Docs_OrderStatus_AddressApi
  extends Pick<OrderStatusApi<any>, 'shippingAddress' | 'billingAddress'> {}

export interface Docs_OrderStatus_ShopApi
  extends Pick<OrderStatusApi<any>, 'shop'> {}

export interface Docs_OrderStatus_RequireLoginApi
  extends Pick<OrderStatusApi<any>, 'requireLogin'> {}

export interface Docs_OrderStatus_AuthenticationStateApi
  extends Pick<OrderStatusApi<any>, 'authenticationState'> {}

export interface Docs_OrderStatus_CartLinesApi
  extends Pick<OrderStatusApi<any>, 'lines'> {}

export interface Docs_CartLineItem_CartLinesApi
  extends Pick<CartLineItemApi, 'target'> {}

export interface Docs_OrderStatus_OrderApi
  extends Pick<OrderStatusApi<any>, 'order'> {}

export interface Docs_Standard_ExtensionApi
  extends Pick<StandardApi<any>, 'extension'> {}

export interface Docs_Standard_AuthenticatedAccountApi
  extends Pick<StandardApi<any>, 'authenticatedAccount'> {}

export interface Docs_Standard_VersionApi
  extends Pick<StandardApi<any>, 'version'> {}

export interface Docs_Standard_LocalizationApi
  extends Pick<StandardApi<any>, 'localization' | 'i18n'> {}

export interface Docs_Standard_SessionTokenApi
  extends Pick<StandardApi<any>, 'sessionToken'> {}

export interface Docs_Standard_AnalyticsApi
  extends Pick<StandardApi<any>, 'analytics'> {}

export interface Docs_Standard_SettingsApi
  extends Pick<StandardApi, 'settings'> {}

export interface Docs_Standard_StorageApi
  extends Pick<StandardApi<any>, 'storage'> {}

export interface Docs_Standard_CustomerPrivacyApi
  extends Pick<
    StandardApi<any>,
    'customerPrivacy' | 'applyTrackingConsentChange'
  > {}

export interface Docs_Standard_ToastApi
  extends Pick<StandardApi<any>, 'toast'> {}

export interface Docs_Standard_QueryApi
  extends Pick<StandardApi<any>, 'query'> {}

export interface Docs_StandardApi extends Omit<StandardApi<any>, 'router'> {}

export interface Docs_Page_Button_PrimaryAction
  extends Pick<
    ButtonProps,
    | 'click'
    | 'loading'
    | 'disabled'
    | 'accessibilityLabel'
    | 'href'
    | 'command'
    | 'commandFor'
  > {}
export interface Docs_Page_Button_SecondaryAction
  extends Pick<
    ButtonProps,
    | 'click'
    | 'loading'
    | 'disabled'
    | 'accessibilityLabel'
    | 'href'
    | 'command'
    | 'commandFor'
  > {}

export interface Docs_Page_Button_BreadcrumbAction
  extends Pick<ButtonProps, 'click' | 'href'> {
  /**
   * A label used for buyers using assistive technologies. Needed because `children` passed to this component will be discarded.
   */
  accessibilityLabel: ButtonProps['accessibilityLabel'];
}

export interface Docs_Menu_Button_Action
  extends Omit<
    ButtonProps,
    'variant' | 'textDecoration' | 'inlineAlignment' | 'inlineSize' | 'size'
  > {}

export interface Docs_OrderActionMenu_Button
  extends Pick<
    ButtonProps,
    'click' | 'loading' | 'disabled' | 'accessibilityLabel' | 'href' | 'tone'
  > {
  /**
   * Destination URL to link to.
   *
   * E.g. `extension:/` to navigate to the Full-page extension.
   */
  href: ButtonProps['href'];
}

export interface Docs_CustomerAccountAction_SlotButton
  extends Pick<
    ButtonProps,
    | 'click'
    | 'loading'
    | 'disabled'
    | 'accessibilityLabel'
    | 'href'
    | 'command'
    | 'commandFor'
  > {}
