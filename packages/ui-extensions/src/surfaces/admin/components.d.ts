/** VERSION: 1.38.0 **/

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
/**
 * TODO: Update `any` type here after this is resolved
 * https://github.com/Shopify/ui-api-design/issues/139
 */
import * as _shopify_admin_web_component_foundations from '@shopify/admin-web-component-foundations';

export type ComponentChildren = preact.ComponentChildren;
export type StringChildren = string;
export interface GlobalProps {
  /**
   * A unique identifier for the element.
   */
  id?: string;
}
export interface ActionProps {
  /**
   * The text to use as the Action modal’s title. If not provided, the name of the extension will be used.
   */
  heading?: string;
}
export interface ActionSlots {
  /**
   * The primary action to perform, provided as a button or link type element.
   */
  primaryAction?: ComponentChildren;
  /**
   * The secondary actions to perform, provided as button or link type elements.
   */
  secondaryActions?: ComponentChildren;
}
interface AdminActionProps$1 extends GlobalProps, ActionProps, ActionSlots {
  /**
   * Whether the action is in a loading state, such as initial page load or action opening.
   * When true, the action could be in an inert state, which prevents user interaction.
   *
   * @default false
   */
  loading?: boolean;
}
interface AdminBlockProps$1 extends GlobalProps {
  /**
   * The text to use as the Block title in the block header. If not provided, the name of the
   * extension will be used.
   */
  heading?: string;
  /**
   * The summary to display when the app block is collapsed.
   * Summary longer than 30 characters will be truncated.
   */
  collapsedSummary?: string;
}
interface AdminPrintActionProps$1 extends GlobalProps {
  /**
   * Sets the src URL of the preview and the document to print.
   * If not provided, the preview will show an empty state and the print button will be disabled.
   * HTML, PDFs and images are supported.
   */
  src?: string;
}
export interface BaseOverlayProps {
  /**
   * Callback fired after the overlay is shown.
   */
  onShow?: (event: Event) => void;
  /**
   * Callback fired when the overlay is shown **after** any animations to show the overlay have finished.
   */
  onAfterShow?: (event: Event) => void;
  /**
   * Callback fired after the overlay is hidden.
   */
  onHide?: (event: Event) => void;
  /**
   * Callback fired when the overlay is hidden **after** any animations to hide the overlay have finished.
   */
  onAfterHide?: (event: Event) => void;
}
/**
 * Shared interfaces for web component methods.
 *
 * Methods are required (not optional) because:
 * - Components implementing this interface must provide all methods
 * - Unlike props/attributes, methods are not rendered in HTML but are JavaScript APIs
 * - Consumers expect these methods to be consistently available on all instances
 */
export interface BaseOverlayMethods {
  /**
   * Method to show an overlay.
   *
   * @implementation This is a method to be called on the element and not a callback and should hence be camelCase
   */
  showOverlay: () => void;
  /**
   * Method to hide an overlay.
   *
   * @implementation This is a method to be called on the element and not a callback and should hence be camelCase
   */
  hideOverlay: () => void;
  /**
   * Method to toggle the visiblity of an overlay.
   *
   * @implementation This is a method to be called on the element and not a callback and should hence be camelCase
   */
  toggleOverlay: () => void;
}
export interface FocusEventProps {
  /**
   * Callback when the element loses focus.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
   */
  onBlur?: (event: FocusEvent) => void;
  /**
   * Callback when the element receives focus.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
   */
  onFocus?: (event: FocusEvent) => void;
}
export interface ToggleEventProps {
  /**
   * Callback fired when the element state changes **after** any animations have finished.
   *
   * - If the element transitioned from hidden to showing, the `oldState` property will be set to `closed` and the
   *   `newState` property will be set to `open`.
   * - If the element transitioned from showing to hidden, the `oldState` property will be set to `open` and the
   *   `newState` will be `closed`.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/newState
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/oldState
   */
  onAfterToggle?: (event: ToggleEvent$1) => void;
  /**
   * Callback straight after the element state changes.
   *
   * - If the element is transitioning from hidden to showing, the `oldState` property will be set to `closed` and the
   *   `newState` property will be set to `open`.
   * - If the element is transitioning from showing to hidden, then `oldState` property will be set to `open` and the
   *   `newState` will be `closed`.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/toggle_event
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/newState
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/oldState
   */
  onToggle?: (event: ToggleEvent$1) => void;
}
export type ToggleState = 'open' | 'closed';
interface ToggleEvent$1 extends Event {
  readonly newState: ToggleState;
  readonly oldState: ToggleState;
}
export interface ExtendableEvent extends Event {
  /**
   * Provide a promise that signals the length, and eventual success or failure of actions relating to the event.
   *
   * This may be called many times, which adds promises to the event.
   *
   * However, this may only be called synchronously during the dispatch of the event.
   * As in, you cannot call it after a `setTimeout` or microtask.
   */
  waitUntil?: (promise: Promise<void>) => void;
}
export interface AggregateError<T extends Error> extends Error {
  errors: T[];
}
export interface AggregateErrorEvent<T extends Error> extends ErrorEvent {
  error: AggregateError<T>;
}
export type SizeKeyword =
  | 'small-500'
  | 'small-400'
  | 'small-300'
  | 'small-200'
  | 'small-100'
  | 'small'
  | 'base'
  | 'large'
  | 'large-100'
  | 'large-200'
  | 'large-300'
  | 'large-400'
  | 'large-500';
export type ColorKeyword = 'subdued' | 'base' | 'strong';
interface AvatarProps$1 extends GlobalProps {
  /**
   * Initials to display in the avatar.
   */
  initials?: string;
  /**
   * The URL or path to the image.
   *
   * Initials will be rendered as a fallback if `src` is not provided, fails to load or does not load quickly
   */
  src?: string;
  /**
   * Invoked when load of provided image completes successfully.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
   */
  onLoad?: (event: Event) => void;
  /**
   * Invoked on load error of provided image.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
   */
  onError?: (event: Event) => void;
  /**
   * Size of the avatar.
   *
   * @default 'base'
   */
  size?: SizeKeyword;
  /**
   * An alternative text that describes the avatar for the reader
   * to understand what it is about or identify the user the avatar belongs to.
   */
  alt?: string;
}
export type BackgroundColorKeyword = 'transparent' | ColorKeyword;
export interface BackgroundProps {
  /**
   * Adjust the background of the element.
   *
   * @default 'transparent'
   */
  background?: BackgroundColorKeyword;
}
/**
 * Tone is a property for defining the color treatment of a component.
 *
 * A tone can apply a grouping of colors to a component. For example,
 * critical may have a specific text color and background color.
 *
 * In some cases, like for Banner, the tone may also affect the semantic and accessibility treatment of the component.
 *
 * @default 'auto'
 */
export type ToneKeyword =
  | 'auto'
  | 'neutral'
  | 'info'
  | 'success'
  | 'caution'
  | 'warning'
  | 'critical'
  | 'accent'
  | 'custom';
declare const privateIconArray: readonly [
  'adjust',
  'affiliate',
  'airplane',
  'alert-bubble',
  'alert-circle',
  'alert-diamond',
  'alert-location',
  'alert-octagon',
  'alert-octagon-filled',
  'alert-triangle',
  'alert-triangle-filled',
  'align-horizontal-centers',
  'app-extension',
  'apps',
  'archive',
  'arrow-down',
  'arrow-down-circle',
  'arrow-down-right',
  'arrow-left',
  'arrow-left-circle',
  'arrow-right',
  'arrow-right-circle',
  'arrow-up',
  'arrow-up-circle',
  'arrow-up-right',
  'arrows-in-horizontal',
  'arrows-out-horizontal',
  'asterisk',
  'attachment',
  'automation',
  'backspace',
  'bag',
  'bank',
  'barcode',
  'battery-low',
  'bill',
  'blank',
  'blog',
  'bolt',
  'bolt-filled',
  'book',
  'book-open',
  'bug',
  'bullet',
  'business-entity',
  'button',
  'button-press',
  'calculator',
  'calendar',
  'calendar-check',
  'calendar-compare',
  'calendar-list',
  'calendar-time',
  'camera',
  'camera-flip',
  'caret-down',
  'caret-left',
  'caret-right',
  'caret-up',
  'cart',
  'cart-abandoned',
  'cart-discount',
  'cart-down',
  'cart-filled',
  'cart-sale',
  'cart-send',
  'cart-up',
  'cash-dollar',
  'cash-euro',
  'cash-pound',
  'cash-rupee',
  'cash-yen',
  'catalog-product',
  'categories',
  'channels',
  'channels-filled',
  'chart-cohort',
  'chart-donut',
  'chart-funnel',
  'chart-histogram-first',
  'chart-histogram-first-last',
  'chart-histogram-flat',
  'chart-histogram-full',
  'chart-histogram-growth',
  'chart-histogram-last',
  'chart-histogram-second-last',
  'chart-horizontal',
  'chart-line',
  'chart-popular',
  'chart-stacked',
  'chart-vertical',
  'chat',
  'chat-new',
  'chat-referral',
  'check',
  'check-circle',
  'check-circle-filled',
  'checkbox',
  'chevron-down',
  'chevron-down-circle',
  'chevron-left',
  'chevron-left-circle',
  'chevron-right',
  'chevron-right-circle',
  'chevron-up',
  'chevron-up-circle',
  'circle',
  'circle-dashed',
  'clipboard',
  'clipboard-check',
  'clipboard-checklist',
  'clock',
  'clock-list',
  'clock-revert',
  'code',
  'code-add',
  'collection',
  'collection-featured',
  'collection-list',
  'collection-reference',
  'color',
  'color-none',
  'compass',
  'complete',
  'compose',
  'confetti',
  'connect',
  'content',
  'contract',
  'corner-pill',
  'corner-round',
  'corner-square',
  'credit-card',
  'credit-card-cancel',
  'credit-card-percent',
  'credit-card-reader',
  'credit-card-reader-chip',
  'credit-card-reader-tap',
  'credit-card-secure',
  'credit-card-tap-chip',
  'crop',
  'currency-convert',
  'cursor',
  'cursor-banner',
  'cursor-option',
  'data-presentation',
  'data-table',
  'database',
  'database-add',
  'database-connect',
  'delete',
  'delivered',
  'delivery',
  'desktop',
  'disabled',
  'disabled-filled',
  'discount',
  'discount-add',
  'discount-automatic',
  'discount-code',
  'discount-remove',
  'dns-settings',
  'dock-floating',
  'dock-side',
  'domain',
  'domain-landing-page',
  'domain-new',
  'domain-redirect',
  'download',
  'drag-drop',
  'drag-handle',
  'drawer',
  'duplicate',
  'edit',
  'email',
  'email-follow-up',
  'email-newsletter',
  'empty',
  'enabled',
  'enter',
  'envelope',
  'envelope-soft-pack',
  'eraser',
  'exchange',
  'exit',
  'export',
  'external',
  'eye-check-mark',
  'eye-dropper',
  'eye-dropper-list',
  'eye-first',
  'eyeglasses',
  'fav',
  'favicon',
  'file',
  'file-list',
  'filter',
  'filter-active',
  'flag',
  'flip-horizontal',
  'flip-vertical',
  'flower',
  'folder',
  'folder-add',
  'folder-down',
  'folder-remove',
  'folder-up',
  'food',
  'foreground',
  'forklift',
  'forms',
  'games',
  'gauge',
  'geolocation',
  'gift',
  'gift-card',
  'git-branch',
  'git-commit',
  'git-repository',
  'globe',
  'globe-asia',
  'globe-europe',
  'globe-lines',
  'globe-list',
  'graduation-hat',
  'grid',
  'hashtag',
  'hashtag-decimal',
  'hashtag-list',
  'heart',
  'hide',
  'hide-filled',
  'home',
  'home-filled',
  'icons',
  'identity-card',
  'image',
  'image-add',
  'image-alt',
  'image-explore',
  'image-magic',
  'image-none',
  'image-with-text-overlay',
  'images',
  'import',
  'in-progress',
  'incentive',
  'incoming',
  'incomplete',
  'info',
  'info-filled',
  'inheritance',
  'inventory',
  'inventory-edit',
  'inventory-list',
  'inventory-transfer',
  'inventory-updated',
  'iq',
  'key',
  'keyboard',
  'keyboard-filled',
  'keyboard-hide',
  'keypad',
  'label-printer',
  'language',
  'language-translate',
  'layout-block',
  'layout-buy-button',
  'layout-buy-button-horizontal',
  'layout-buy-button-vertical',
  'layout-column-1',
  'layout-columns-2',
  'layout-columns-3',
  'layout-footer',
  'layout-header',
  'layout-logo-block',
  'layout-popup',
  'layout-rows-2',
  'layout-section',
  'layout-sidebar-left',
  'layout-sidebar-right',
  'lightbulb',
  'link',
  'link-list',
  'list-bulleted',
  'list-bulleted-filled',
  'list-numbered',
  'live',
  'live-critical',
  'live-none',
  'location',
  'location-none',
  'lock',
  'map',
  'markets',
  'markets-euro',
  'markets-rupee',
  'markets-yen',
  'maximize',
  'measurement-size',
  'measurement-size-list',
  'measurement-volume',
  'measurement-volume-list',
  'measurement-weight',
  'measurement-weight-list',
  'media-receiver',
  'megaphone',
  'mention',
  'menu',
  'menu-filled',
  'menu-horizontal',
  'menu-vertical',
  'merge',
  'metafields',
  'metaobject',
  'metaobject-list',
  'metaobject-reference',
  'microphone',
  'microphone-muted',
  'minimize',
  'minus',
  'minus-circle',
  'mobile',
  'money',
  'money-none',
  'money-split',
  'moon',
  'nature',
  'note',
  'note-add',
  'notification',
  'number-one',
  'order',
  'order-batches',
  'order-draft',
  'order-filled',
  'order-first',
  'order-fulfilled',
  'order-repeat',
  'order-unfulfilled',
  'orders-status',
  'organization',
  'outdent',
  'outgoing',
  'package',
  'package-cancel',
  'package-fulfilled',
  'package-on-hold',
  'package-reassign',
  'package-returned',
  'page',
  'page-add',
  'page-attachment',
  'page-clock',
  'page-down',
  'page-heart',
  'page-list',
  'page-reference',
  'page-remove',
  'page-report',
  'page-up',
  'pagination-end',
  'pagination-start',
  'paint-brush-flat',
  'paint-brush-round',
  'paper-check',
  'partially-complete',
  'passkey',
  'paste',
  'pause-circle',
  'payment',
  'payment-capture',
  'payout',
  'payout-dollar',
  'payout-euro',
  'payout-pound',
  'payout-rupee',
  'payout-yen',
  'person',
  'person-add',
  'person-exit',
  'person-filled',
  'person-list',
  'person-lock',
  'person-remove',
  'person-segment',
  'personalized-text',
  'phablet',
  'phone',
  'phone-down',
  'phone-down-filled',
  'phone-in',
  'phone-out',
  'pin',
  'pin-remove',
  'plan',
  'play',
  'play-circle',
  'plus',
  'plus-circle',
  'plus-circle-down',
  'plus-circle-filled',
  'plus-circle-up',
  'point-of-sale',
  'point-of-sale-register',
  'price-list',
  'print',
  'product',
  'product-add',
  'product-cost',
  'product-filled',
  'product-list',
  'product-reference',
  'product-remove',
  'product-return',
  'product-unavailable',
  'profile',
  'profile-filled',
  'question-circle',
  'question-circle-filled',
  'radio-control',
  'receipt',
  'receipt-dollar',
  'receipt-euro',
  'receipt-folded',
  'receipt-paid',
  'receipt-pound',
  'receipt-refund',
  'receipt-rupee',
  'receipt-yen',
  'receivables',
  'redo',
  'referral-code',
  'refresh',
  'remove-background',
  'reorder',
  'replace',
  'replay',
  'reset',
  'return',
  'reward',
  'rocket',
  'rotate-left',
  'rotate-right',
  'sandbox',
  'save',
  'savings',
  'scan-qr-code',
  'search',
  'search-add',
  'search-list',
  'search-recent',
  'search-resource',
  'select',
  'send',
  'settings',
  'share',
  'shield-check-mark',
  'shield-none',
  'shield-pending',
  'shield-person',
  'shipping-label',
  'shipping-label-cancel',
  'shopcodes',
  'slideshow',
  'smiley-happy',
  'smiley-joy',
  'smiley-neutral',
  'smiley-sad',
  'social-ad',
  'social-post',
  'sort',
  'sort-ascending',
  'sort-descending',
  'sound',
  'split',
  'sports',
  'star',
  'star-circle',
  'star-filled',
  'star-half',
  'star-list',
  'status',
  'status-active',
  'stop-circle',
  'store',
  'store-import',
  'store-managed',
  'store-online',
  'sun',
  'table',
  'table-masonry',
  'tablet',
  'target',
  'tax',
  'team',
  'text',
  'text-align-center',
  'text-align-left',
  'text-align-right',
  'text-block',
  'text-bold',
  'text-color',
  'text-font',
  'text-font-list',
  'text-grammar',
  'text-in-columns',
  'text-in-rows',
  'text-indent',
  'text-indent-remove',
  'text-italic',
  'text-quote',
  'text-title',
  'text-underline',
  'text-with-image',
  'theme',
  'theme-edit',
  'theme-store',
  'theme-template',
  'three-d-environment',
  'thumbs-down',
  'thumbs-up',
  'tip-jar',
  'toggle-off',
  'toggle-on',
  'transaction',
  'transaction-fee-add',
  'transaction-fee-dollar',
  'transaction-fee-euro',
  'transaction-fee-pound',
  'transaction-fee-rupee',
  'transaction-fee-yen',
  'transfer',
  'transfer-in',
  'transfer-internal',
  'transfer-out',
  'truck',
  'undo',
  'unknown-device',
  'unlock',
  'upload',
  'variant',
  'variant-list',
  'video',
  'video-list',
  'view',
  'viewport-narrow',
  'viewport-short',
  'viewport-tall',
  'viewport-wide',
  'wallet',
  'wand',
  'watch',
  'wifi',
  'work',
  'work-list',
  'wrench',
  'x',
  'x-circle',
  'x-circle-filled',
];
export type IconType = (typeof privateIconArray)[number];
/**
 * Like `Extract`, but ensures that the extracted type is a strict subtype of the input type.
 */
export type ExtractStrict<T, U extends T> = Extract<T, U>;
export type MaybeAllValuesShorthandProperty<T extends string> =
  | T
  | `${T} ${T}`
  | `${T} ${T} ${T}`
  | `${T} ${T} ${T} ${T}`;
export type MaybeTwoValuesShorthandProperty<T extends string> = T | `${T} ${T}`;
export type MaybeResponsive<T> = T | `@container${string}`;
/**
 * Prevents widening string literal types in a union to `string`.
 * @example
 * type PropName = 'foo' | 'bar' | string
 * //   ^? string
 * type PropName = 'foo' | 'bar' | (string & {})
 * //   ^? 'foo' | 'bar' | (string & {})
 */
export type AnyString = string & {};
/**
 * This is purely to give the ability
 * to have a space or not in the string literal types.
 *
 * For example in the `aspectRatio` property, `16/9` and `16 / 9` are both valid.
 */
export type optionalSpace = '' | ' ';
interface BadgeProps$1 extends GlobalProps {
  /**
   * The content of the Badge.
   */
  children?: ComponentChildren;
  /**
   * Sets the tone of the Badge, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Modify the color to be more or less intense.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * The type of icon to be displayed in the badge.
   *
   * @default ''
   */
  icon?: IconType | AnyString;
  /**
   * The position of the icon in relation to the text.
   */
  iconPosition?: 'start' | 'end';
  /**
   * Adjusts the size.
   *
   * @default 'base'
   */
  size?: SizeKeyword;
}
interface BannerProps$1 extends GlobalProps, ActionSlots {
  /**
   * The title of the banner.
   *
   * @default ''
   */
  heading?: string;
  /**
   * The content of the Banner.
   */
  children?: ComponentChildren;
  /**
   * Sets the tone of the Banner, based on the intention of the information being conveyed.
   *
   * The banner is a live region and the type of status will be dictated by the Tone selected.
   *
   * - `critical` creates an [assertive live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) that is announced by screen readers immediately.
   * - `neutral`, `info`, `success`, `warning` and `caution` creates an [informative live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) that is announced by screen readers after the current message.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Makes the content collapsible.
   * A collapsible banner will conceal child elements initially, but allow the user to expand the banner to see them.
   *
   * @default false
   */
  collapsible?: boolean;
  /**
   * Determines whether the close button of the banner is present.
   *
   * When the close button is pressed, the `dismiss` event will fire,
   * then `hidden` will be true,
   * any animation will complete,
   * and the `afterhide` event will fire.
   *
   * @default false
   */
  dismissible?: boolean;
  /**
   * Event handler when the banner is dismissed by the user.
   *
   * This does not fire when setting `hidden` manually.
   *
   * The `hidden` property will be `false` when this event fires.
   */
  onDismiss?: (event: Event) => void;
  /**
   * Event handler when the banner has fully hidden.
   *
   * The `hidden` property will be `true` when this event fires.
   *
   * @implementation If implementations animate the hiding of the banner,
   * this event must fire after the banner has fully hidden.
   * We can add an `onHide` event in future if we want to provide a hook for the start of the animation.
   */
  onAfterHide?: (event: Event) => void;
  /**
   * Determines whether the banner is hidden.
   *
   * If this property is being set on each framework render (as in 'controlled' usage),
   * and the banner is `dismissible`,
   * ensure you update app state for this property when the `dismiss` event fires.
   *
   * If the banner is not `dismissible`, it can still be hidden by setting this property.
   *
   * @default false
   */
  hidden?: boolean;
}
export interface DisplayProps {
  /**
   * Sets the outer display type of the component. The outer type sets a component’s participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).
   *
   * - `auto`: the component’s initial value. The actual value depends on the component and context.
   * - `none`: hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
   * @default 'auto'
   */
  display?: MaybeResponsive<'auto' | 'none'>;
}
export interface AccessibilityRoleProps {
  /**
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help users
   * navigate the page.
   *
   * @implementation Although, in HTML hosts, this property changes the element used,
   * changing this property must not impact the visual styling of inside or outside of the box.
   *
   * @default 'generic'
   */
  accessibilityRole?: AccessibilityRole;
}
export type AccessibilityRole =
  /**
   * Used to indicate the primary content.
   *
   * In an HTML host, `main` will render a `<main>` element.
   * Learn more about the [`<main>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role) in the MDN web docs.
   */
  | 'main'
  /**
   * Used to indicate the component is a header.
   *
   * In an HTML host `header` will render a `<header>` element.
   * Learn more about the [`<header>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role) in the MDN web docs.
   */
  | 'header'
  /**
   * Used to display information such as copyright information, navigation links, and privacy statements.
   *
   * In an HTML host `footer` will render a `<footer>` element.
   * Learn more about the [`<footer>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role) in the MDN web docs.
   */
  | 'footer'
  /**
   * Used to indicate a generic section.
   * Sections should always have a `Heading` or an accessible name provided in the `accessibilityLabel` property.
   *
   * In an HTML host `section` will render a `<section>` element.
   * Learn more about the [`<section>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/region_role) in the MDN web docs.
   *
   */
  | 'section'
  /**
   * Used to identify a perceivable section containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily.
   *
   * In an HTML host `region` will render as `<div role="region">`.
   * A region **must** have an accessible name provided via the `accessibilityLabel` property.
   * Learn more about the [`region` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/region_role) in the MDN web docs.
   */
  | 'region'
  /**
   * Used to designate a supporting section that relates to the main content.
   *
   * In an HTML host `aside` will render an `<aside>` element.
   * Learn more about the [`<aside>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role) in the MDN web docs.
   */
  | 'aside'
  /**
   * Used to identify major groups of links used for navigating.
   *
   * In an HTML host `navigation` will render a `<nav>` element.
   * Learn more about the [`<nav>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role) in the MDN web docs.
   */
  | 'navigation'
  /**
   * Used to identify a list of ordered items.
   *
   * In an HTML host `ordered-list` will render a `<ol>` element.
   * Learn more about the [`<ol>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) in the MDN web docs.
   */
  | 'ordered-list'
  /**
   * Used to identify an item inside a list of items.
   *
   * In an HTML host `list-item` will render a `<li>` element.
   * Learn more about the [`<li>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role) in the MDN web docs.
   */
  | 'list-item'
  /**
   * Used to indicates the component acts as a divider that separates and distinguishes sections of content in a list of items.
   *
   * In an HTML host `list-item-separator` will render as `<li role="separator">`.
   * Learn more about the [`<li>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) and the [`separator` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) in the MDN web docs.
   */
  | 'list-item-separator'
  /**
   * Used to identify a list of unordered items.
   *
   * In an HTML host `unordered-list` will render a `<ul>` element.
   * Learn more about the [`<ul>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) in the MDN web docs.
   */
  | 'unordered-list'
  /**
   * Used to indicates the component acts as a divider that separates and distinguishes sections of content.
   *
   * In an HTML host `separator` will render as `<div role="separator">`.
   * Learn more about the [`separator` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) in the MDN web docs.
   */
  | 'separator'
  /**
   * Used to define a live region containing advisory information for the user that is not important enough to be an alert.
   *
   * In an HTML host `status` will render as `<div role="status">`.
   * Learn more about the [`status` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) in the MDN web docs.
   */
  | 'status'
  /**
   * Used for important, and usually time-sensitive, information.
   *
   * In an HTML host `alert` will render as `<div role="alert">`.
   * Learn more about the [`alert` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) in the MDN web docs.
   */
  | 'alert'
  /**
   * Used to create a nameless container element which has no semantic meaning on its own.
   *
   * In an HTML host `generic'` will render a `<div>` element.
   * Learn more about the [`generic` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role) in the MDN web docs.
   */
  | 'generic'
  /**
   * Used to strip the semantic meaning of an element, but leave the visual styling intact.
   *
   * Synonym for `none`
   * Learn more about the [`presentation` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) in the MDN web docs.
   */
  | 'presentation'
  /**
   * Used to strip the semantic meaning of an element, but leave the visual styling intact.
   *
   * Synonym for `presentation`
   * Learn more about the [`none` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/none_role) in the MDN web docs.
   */
  | 'none';
export interface AccessibilityVisibilityProps {
  /**
   * Changes the visibility of the element.
   *
   * - `visible`: the element is visible to all users.
   * - `hidden`: the element is removed from the accessibility tree but remains visible.
   * - `exclusive`: the element is visually hidden but remains in the accessibility tree.
   *
   * @default 'visible'
   */
  accessibilityVisibility?: 'visible' | 'hidden' | 'exclusive';
}
export interface LabelAccessibilityVisibilityProps {
  /**
   * Changes the visibility of the component's label.
   *
   * - `visible`: the label is visible to all users.
   * - `exclusive`: the label is visually hidden but remains in the accessibility tree.
   *
   * @default 'visible'
   */
  labelAccessibilityVisibility?: ExtractStrict<
    AccessibilityVisibilityProps['accessibilityVisibility'],
    'visible' | 'exclusive'
  >;
}
export type PaddingKeyword = SizeKeyword | 'none';
export interface PaddingProps {
  /**
   * Adjust the padding of all edges.
   *
   * [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is
   * supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:
   *
   * - 4 values: `block-start inline-end block-end inline-start`
   * - 3 values: `block-start inline block-end`
   * - 2 values: `block inline`
   *
   * For example:
   * - `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
   * - `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
   * - `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
   * - `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
   *
   * A padding value of `auto` will use the default padding for the closest container that has had its usual padding removed.
   *
   * @default 'none'
   */
  padding?: MaybeResponsive<MaybeAllValuesShorthandProperty<PaddingKeyword>>;
  /**
   * Adjust the block-padding.
   *
   * - `large none` means block-start padding is `large`, block-end padding is `none`.
   *
   * This overrides the block value of `padding`.
   *
   * @default '' - meaning no override
   */
  paddingBlock?: MaybeResponsive<
    MaybeTwoValuesShorthandProperty<PaddingKeyword> | ''
  >;
  /**
   * Adjust the block-start padding.
   *
   * This overrides the block-start value of `paddingBlock`.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart?: MaybeResponsive<PaddingKeyword | ''>;
  /**
   * Adjust the block-end padding.
   *
   * This overrides the block-end value of `paddingBlock`.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd?: MaybeResponsive<PaddingKeyword | ''>;
  /**
   * Adjust the inline padding.
   *
   * - `large none` means inline-start padding is `large`, inline-end padding is `none`.
   *
   * This overrides the inline value of `padding`.
   *
   * @default '' - meaning no override
   */
  paddingInline?: MaybeResponsive<
    MaybeTwoValuesShorthandProperty<PaddingKeyword> | ''
  >;
  /**
   * Adjust the inline-start padding.
   *
   * This overrides the inline-start value of `paddingInline`.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart?: MaybeResponsive<PaddingKeyword | ''>;
  /**
   * Adjust the inline-end padding.
   *
   * This overrides the inline-end value of `paddingInline`.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd?: MaybeResponsive<PaddingKeyword | ''>;
}
export type SizeUnits = `${number}px` | `${number}%` | `0`;
export type SizeUnitsOrAuto = SizeUnits | 'auto';
export type SizeUnitsOrNone = SizeUnits | 'none';
export interface SizingProps {
  /**
   * Adjust the block size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/block-size
   *
   * @default 'auto'
   */
  blockSize?: MaybeResponsive<SizeUnitsOrAuto>;
  /**
   * Adjust the minimum block size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size
   *
   * @default '0'
   */
  minBlockSize?: MaybeResponsive<SizeUnits>;
  /**
   * Adjust the maximum block size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size
   *
   * @default 'none'
   */
  maxBlockSize?: MaybeResponsive<SizeUnitsOrNone>;
  /**
   * Adjust the inline size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size
   *
   * @default 'auto'
   */
  inlineSize?: MaybeResponsive<SizeUnitsOrAuto>;
  /**
   * Adjust the minimum inline size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size
   *
   * @default '0'
   */
  minInlineSize?: MaybeResponsive<SizeUnits>;
  /**
   * Adjust the maximum inline size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size
   *
   * @default 'none'
   */
  maxInlineSize?: MaybeResponsive<SizeUnitsOrNone>;
}
export type BorderStyleKeyword =
  | 'none'
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'auto';
export type BorderSizeKeyword = SizeKeyword | 'none';
export type BorderRadiusKeyword = SizeKeyword | 'max' | 'none';
/**
 * Represents a shorthand for defining a border. It can be a combination of size, optionally followed by color, optionally followed by style.
 */
export type BorderShorthand =
  | BorderSizeKeyword
  | `${BorderSizeKeyword} ${ColorKeyword}`
  | `${BorderSizeKeyword} ${ColorKeyword} ${BorderStyleKeyword}`;
export interface BorderProps {
  /**
   * Set the border via the shorthand property.
   *
   * This can be a size, optionally followed by a color, optionally followed by a style.
   *
   * If the color is not specified, it will be `base`.
   *
   * If the style is not specified, it will be `auto`.
   *
   * Values can be overridden by `borderWidth`, `borderStyle`, and `borderColor`.
   *
   * @example
   * // The following are equivalent:
   * <Box border="large-100 strong dashed" />
   * <Box borderWidth="large-100" borderColor="strong" borderStyle="dashed" />
   *
   * @default 'none' - equivalent to `none base auto`.
   */
  border?: BorderShorthand;
  /**
   * Set the width of the border.
   *
   * If set, it takes precedence over the `border` property's width.
   *
   * Like CSS, up to 4 values can be specified.
   *
   * If one value is specified, it applies to all sides.
   *
   * If two values are specified, they apply to the block sides and inline sides respectively.
   *
   * If three values are specified, they apply to the block-start, both inline sides, and block-end respectively.
   *
   * If four values are specified, they apply to the block-start, block-end, inline-start, and inline-end sides respectively.
   *
   * @default '' - meaning no override
   */
  borderWidth?: MaybeAllValuesShorthandProperty<BorderSizeKeyword> | '';
  /**
   * Set the style of the border.
   *
   * If set, it takes precedence over the `border` property's style.
   *
   * Like CSS, up to 4 values can be specified.
   *
   * If one value is specified, it applies to all sides.
   *
   * If two values are specified, they apply to the block sides and inline sides respectively.
   *
   * If three values are specified, they apply to the block-start, both inline sides, and block-end respectively.
   *
   * If four values are specified, they apply to the block-start, block-end, inline-start, and inline-end sides respectively.
   *
   * @default '' - meaning no override
   */
  borderStyle?: MaybeAllValuesShorthandProperty<BorderStyleKeyword> | '';
  /**
   * Set the color of the border.
   *
   * If set, it takes precedence over the `border` property's color.
   *
   * @default '' - meaning no override
   */
  borderColor?: ColorKeyword | '';
  /**
   * Set the radius of the border.
   *
   * [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is
   * supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:
   *
   * - 4 values: `start-start start-end end-end end-start`
   * - 3 values: `start-start (start-end & end-start) start-end`
   * - 2 values: `(start-start & end-end) (start-end & end-start)`
   *
   * For example:
   * - `small-100` means start-start, start-end, end-end and end-start border radii are `small-100`.
   * - `small-100 none` means start-start and end-end border radii are `small-100`, start-end and end-start border radii are `none`.
   * - `small-100 none large-100` means start-start border radius is `small-100`, start-end border radius is `none`, end-end border radius is `large-100` and end-start border radius is `none`.
   * - `small-100 none large-100 small-100` means start-start border radius is `small-100`, start-end border radius is `none`, end-end border radius is `large-100` and end-start border radius is `small-100`.
   *
   * @defaultValue 'none'
   */
  borderRadius?: MaybeAllValuesShorthandProperty<BorderRadiusKeyword>;
}
export interface OverflowProps {
  /**
   * Sets the overflow behavior of the element.
   *
   * - `hidden`: clips the content when it is larger than the element’s container.
   * The element will not be scrollable and the users will not be able
   * to access the clipped content by dragging or using a scroll wheel on a mouse.
   * - `visible`: the content that extends beyond the element’s container is visible.
   *
   * @default 'visible'
   */
  overflow?: 'hidden' | 'visible';
}
export interface BaseBoxProps
  extends AccessibilityVisibilityProps,
    BackgroundProps,
    DisplayProps,
    SizingProps,
    PaddingProps,
    BorderProps,
    OverflowProps {
  /**
   * The content of the Box.
   */
  children?: ComponentChildren;
  /**
   * A label that describes the purpose or contents of the element.
   * When set, it will be announced to users using assistive technologies and will provide them with more context.
   *
   * Only use this when the element's content is not enough context for users using assistive technologies.
   */
  accessibilityLabel?: string;
}
export interface BaseBoxPropsWithRole
  extends BaseBoxProps,
    AccessibilityRoleProps {}
interface BoxProps$1 extends BaseBoxPropsWithRole, GlobalProps {}
export interface ButtonBehaviorProps extends InteractionProps, FocusEventProps {
  /**
   * The behavior of the Button.
   *
   * - `submit`: Used to indicate the component acts as a submit button, meaning it submits the closest form.
   * - `button`: Used to indicate the component acts as a button, meaning it has no default action.
   * - `reset`: Used to indicate the component acts as a reset button, meaning it resets the closest form (returning fields to their default values).
   *
   * This property is ignored if the component supports `href` or `commandFor`/`command` and one of them is set.
   *
   * @default 'button'
   */
  type?: 'submit' | 'button' | 'reset';
  /**
   * Callback when the Button is activated.
   * This will be called before the action indicated by `type`.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
   */
  onClick?: (event: Event) => void;
  /**
   * Disables the Button meaning it cannot be clicked or receive focus.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Replaces content with a loading indicator while a background action is being performed.
   *
   * This also disables the Button.
   *
   * @default false
   */
  loading?: boolean;
}
export interface LinkBehaviorProps extends InteractionProps, FocusEventProps {
  /**
   * The URL to link to.
   *
   * - If set, it will navigate to the location specified by `href` after executing the `click` event.
   * - If a `commandFor` is set, the `command` will be executed instead of the navigation.
   */
  href?: string;
  /**
   * Specifies where to display the linked URL.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
   *
   * 'auto': The target is automatically determined based on the origin of the URL.
   *
   * @implementation Surfaces can set specific rules on how they handle each URL.
   * @implementation It’s expected that the behavior of `auto` is as `_self` except in specific cases.
   * @implementation For example, a surface could decide to open cross-origin URLs in a new window (as `_blank`).
   *
   * @default 'auto'
   */
  target?: 'auto' | '_blank' | '_self' | '_parent' | '_top' | AnyString;
  /**
   * Causes the browser to treat the linked URL as a download with the string being the file name.
   * Download only works for same-origin URLs or the `blob:` and `data:` schemes.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download
   */
  download?: string;
  /**
   * Callback when the link is activated.
   * This will be called before navigating to the location specified by `href`.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
   */
  onClick?: (event: Event) => void;
}
export interface InteractionProps {
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
   * ID of a component that should respond to interest (e.g. hover and focus) on this component.
   */
  interestFor?: string;
}
export interface BaseClickableProps
  extends ButtonBehaviorProps,
    LinkBehaviorProps {}
interface ButtonProps$1 extends GlobalProps, BaseClickableProps {
  /**
   * A label that describes the purpose or contents of the Button. It will be read to users using assistive technologies such as screen readers.
   *
   * Use this when using only an icon or the Button text is not enough context
   * for users using assistive technologies.
   */
  accessibilityLabel?: string;
  /**
   * The content of the Button.
   */
  children?: ComponentChildren;
  /**
   * The type of icon to be displayed in the Button.
   *
   * @default ''
   */
  icon?: IconType | AnyString;
  /**
   * The displayed inline width of the Button.
   *
   * - `auto`: the size of the button depends on the surface and context.
   * - `fill`: the button will takes up 100% of the available inline size.
   * - `fit-content`: the button will take up the minimum inline-size required to fit its content.
   *
   * @default 'auto'
   */
  inlineSize?: 'auto' | 'fill' | 'fit-content';
  /**
   * Changes the visual appearance of the Button.
   *
   * @default 'auto' - the variant is automatically determined by the Button's context
   */
  variant?: 'auto' | 'primary' | 'secondary' | 'tertiary';
  /**
   * Sets the tone of the Button based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Indicate the text language. Useful when the text is in a different language than the rest of the page.
   * It will allow assistive technologies such as screen readers to invoke the correct pronunciation.
   * [Reference of values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("subtag" label)
   */
  lang?: string;
}
interface ButtonGroupProps$1 extends GlobalProps, ActionSlots {
  /**
   * The content of the ButtonGroup.
   */
  children?: ComponentChildren;
  /**
   * The gap between elements.
   * @default 'base'
   */
  gap?: 'base' | 'none';
  /**
   * Label for the button group that describes the content of the group for screen reader users to understand what's included.
   *
   * @implementation Used as a hidden heading or an aria-label on the wrapping element.
   */
  accessibilityLabel?: string;
}
export interface BaseInputProps {
  /**
   * An identifier for the field that is unique within the nearest containing form.
   */
  name?: string;
  /**
   * Disables the field, disallowing any interaction.
   *
   * @default false
   */
  disabled?: boolean;
}
export interface InputProps extends BaseInputProps {
  /**
   * Callback when the user has **finished editing** a field, e.g. once they have blurred the field.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
   */
  onChange?: (event: Event) => void;
  /**
   * Callback when the user makes any changes in the field.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
   */
  onInput?: (event: Event) => void;
  /**
   * The current value for the field. If omitted, the field will be empty.
   */
  value?: string;
  /**
   * The default value for the field.
   *
   * @implementation `defaultValue` reflects to the `value` attribute.
   */
  defaultValue?: string;
}
export interface MultipleInputProps extends BaseInputProps {
  /**
   * Callback when the user has selected option(s).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
   */
  onChange?: (event: Event) => void;
  /**
   * Callback when the user has selected option(s).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
   */
  onInput?: (event: Event) => void;
  /**
   * An array of the `value`s of the selected options.
   *
   * This is a convenience prop for setting the `selected` prop on child options.
   */
  values?: string[];
}
export interface FileInputProps extends BaseInputProps {
  /**
   * Callback when the user has **finished selecting** a file or files.
   */
  onChange?: (event: Event) => void;
  /**
   * Callback when the user makes any changes in the file selection.
   */
  onInput?: (event: Event) => void;
  /**
   * A string that represents the path to the selected file(s). If no file is selected yet, the value is an empty string ("").
   * When the user selected multiple files, the value represents the first file in the list of files they selected.
   * The value is always the file's name prefixed with "C:\fakepath\", which isn't the real path of the file.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file#value
   *
   * @default ''
   */
  value?: string;
  /**
   * An array of File objects representing the files currently selected by the user.
   *
   * This property is read-only and cannot be directly modified.
   * To clear the selected files, set the `value` prop to an empty string or null.
   *
   * @default []
   */
  files?: ReadonlyArray<File>;
}
export interface FieldErrorProps {
  /**
   * Indicate an error to the user. The field will be given a specific stylistic treatment
   * to communicate problems that have to be resolved immediately.
   */
  error?: string;
}
export interface BasicFieldProps
  extends FieldErrorProps,
    LabelAccessibilityVisibilityProps {
  /**
   * Whether the field needs a value. This requirement adds semantic value
   * to the field, but it will not cause an error to appear automatically.
   * If you want to present an error when this field is empty, you can do
   * so with the `error` property.
   *
   * @default false
   */
  required?: boolean;
  /**
   * Content to use as the field label.
   */
  label?: string;
}
export interface FieldDetailsProps {
  /**
   * Additional text to provide context or guidance for the field.
   * This text is displayed along with the field and its label
   * to offer more information or instructions to the user.
   *
   * This will also be exposed to screen reader users.
   */
  details?: string;
}
export interface FieldProps
  extends BasicFieldProps,
    InputProps,
    FocusEventProps,
    FieldDetailsProps {
  /**
   * A short hint that describes the expected value of the field.
   */
  placeholder?: string;
}
export interface BaseTextFieldProps extends FieldProps {
  /**
   * The field cannot be edited by the user. It is focusable will be announced by screen readers.
   *
   * @default false
   */
  readOnly?: boolean;
}
export interface FieldDecorationProps {
  /**
   * A value to be displayed immediately after the editable portion of the field.
   *
   * This is useful for displaying an implied part of the value, such as "@shopify.com", or "%".
   *
   * This cannot be edited by the user, and it isn't included in the value of the field.
   *
   * It may not be displayed until the user has interacted with the input.
   * For example, an inline label may take the place of the suffix until the user focuses the input.
   *
   * @default ''
   */
  suffix?: string;
  /**
   * A value to be displayed immediately before the editable portion of the field.
   *
   * This is useful for displaying an implied part of the value, such as "https://" or "+353".
   *
   * This cannot be edited by the user, and it isn't included in the value of the field.
   *
   * It may not be displayed until the user has interacted with the input.
   * For example, an inline label may take the place of the prefix until the user focuses the input.
   *
   * @default ''
   */
  prefix?: string;
  /**
   * The type of icon to be displayed in the field.
   *
   * @default ''
   */
  icon?: IconType | AnyString;
  /**
   * Additional content to be displayed in the field.
   * Commonly used to display an icon that activates a tooltip providing more information.
   */
  accessory?: ComponentChildren;
}
export interface NumberConstraintsProps {
  /**
   * The highest decimal or integer to be accepted for the field.
   * When used with `step` the value will round down to the max number.
   *
   * Note: a user will still be able to use the keyboard to input a number higher than
   * the max. It is up to the developer to add appropriate validation.
   *
   * @default Infinity
   */
  max?: number;
  /**
   * The lowest decimal or integer to be accepted for the field.
   * When used with `step` the value will round up to the min number.
   *
   * Note: a user will still be able to use the keyboard to input a number lower than
   * the min. It is up to the developer to add appropriate validation.
   *
   * @default -Infinity
   */
  min?: number;
  /**
   * The amount the value can increase or decrease by. This can be an integer or decimal.
   * If a `max` or `min` is specified with `step` when increasing/decreasing the value
   * via the buttons, the final value will always round to the `max` or `min`
   * rather than the closest valid amount.
   *
   * @default 1
   */
  step?: number;
  /**
   * Sets the type of controls displayed in the field.
   *
   * - `stepper`: displays buttons to increase or decrease the value of the field by the stepping interval defined in the `step` property.
   * Appropriate mouse and [keyboard interactions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role#keyboard_interactions) to control the value of the field are enabled.
   * - `none`: no controls are displayed and users must input the value manually. Arrow keys and scroll wheels can’t be used either to avoid accidental changes.
   * - `auto`: the presence of the controls depends on the surface and context.
   *
   * @default 'auto'
   */
  controls?: 'auto' | 'stepper' | 'none';
}
export interface MinMaxLengthProps {
  /**
   * Specifies the maximum number of characters allowed.
   *
   * @default Infinity
   */
  maxLength?: number;
  /**
   * Specifies the min number of characters allowed.
   *
   * @default 0
   */
  minLength?: number;
}
export interface BaseSelectableProps {
  /**
   * A label used for users using assistive technologies like screen readers. When set, any children or `label` supplied will not be announced.
   * This can also be used to display a control without a visual label, while still providing context to users using screen readers.
   */
  accessibilityLabel?: string;
  /**
   * Disables the control, disallowing any interaction.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The value used in form data when the control is checked.
   */
  value?: string;
}
export interface BaseOptionProps extends BaseSelectableProps {
  /**
   * Whether the control is active.
   *
   * @default false
   */
  selected?: boolean;
  /**
   * Whether the control is active by default.
   *
   * @implementation `defaultSelected` reflects to the `selected` attribute.
   *
   * @default false
   */
  defaultSelected?: boolean;
}
export interface BaseCheckableProps
  extends BaseSelectableProps,
    InteractionProps {
  /**
   * Visual content to use as the control label.
   */
  label?: string;
  /**
   * Whether the control is active.
   *
   * @default false
   */
  checked?: boolean;
  /**
   * Whether the control is active by default.
   *
   * @implementation `defaultChecked` reflects to the `checked` attribute.
   *
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * An identifier for the control that is unique within the nearest
   * containing `Form` component.
   */
  name?: string;
  /**
   * A callback that is run whenever the control is changed.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
   */
  onChange?: (event: Event) => void;
  /**
   * A callback that is run whenever the control is changed.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
   */
  onInput?: (event: Event) => void;
}
interface CheckboxProps$1
  extends GlobalProps,
    BaseCheckableProps,
    FieldErrorProps,
    FieldDetailsProps {
  /**
   * Whether to display the checkbox in an indeterminate state (neither checked or unchecked).
   *
   * In terms of appearance, this takes priority over the `checked` prop.
   * But this is purely a visual change.
   * Whether the value is submitted along with a form is still down to the `checked` prop.
   *
   * If `indeterminate` has not been explicitly set, and the `indeterminate` state hasn't been modified by the user (via clicking),
   * then `indeterminate` returns the value of `defaultIndeterminate`.
   *
   * @implementation The `indeterminate` property doesn't reflect to any attribute.
   */
  indeterminate?: boolean;
  /**
   * Whether the checkbox is in an `indeterminate` state by default.
   *
   * Similar to `defaultValue` and `defaultChecked`, this value applies until `indeterminate` is set, or user changes the state of the checkbox.
   *
   * @implementation `defaultIndeterminate` reflects to the `indeterminate` attribute.
   *
   * @default false
   */
  defaultIndeterminate?: boolean;
  /**
   * Whether the field needs a value. This requirement adds semantic value
   * to the field, but it will not cause an error to appear automatically.
   * If you want to present an error when this field is empty, you can do
   * so with the `error` property.
   *
   * @default false
   */
  required?: boolean;
}
export interface ChipProps$1 extends GlobalProps {
  /**
   * The content of the chip.
   */
  children?: ComponentChildren;
  /**
   * The graphic to display inside of the chip.
   *
   * @implementation Only `s-icon` is supported.
   */
  graphic?: ComponentChildren;
  /**
   * A label that describes the purpose or contents of the Chip. It will be read to users using assistive technologies such as screen readers.
   */
  accessibilityLabel?: string;
  /**
   * Modify the color to be more or less intense.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * Whether the chip is removable.
   *
   * @default false
   */
  removable?: boolean;
  /**
   * Callback when the chip is removed.
   */
  onRemove?: (event: Event) => void;
  /**
   * Determines whether the chip is hidden.
   *
   * If this property is being set on each framework render (as in 'controlled' usage),
   * and the chip is `removable`,
   * ensure you update app state for this property when the `remove` event fires.
   *
   * If the chip is not `removable`, it can still be hidden by setting this property.
   *
   * @default false
   */
  hidden?: boolean;
  /**
   * Event handler when the chip has fully hidden.
   *
   * The `hidden` property will be `true` when this event fires.
   *
   * @implementation If implementations animate the hiding of the chip,
   * this event must fire after the chip has fully hidden.
   * We can add an `onHide` event in future if we want to provide a hook for the start of the animation.
   */
  onAfterHide?: (event: Event) => void;
}
interface ChipProps$2 extends ChipProps$1, GlobalProps {}
interface ChoiceProps$1 extends GlobalProps, BaseOptionProps {
  /**
   * Content to use as the choice label.
   *
   * @implementation (StringChildren) The label is produced by extracting and
   * concatenating the text nodes from the provided content; any markup or
   * element structure is ignored.
   *
   * @implementation (ComponentChildren) Behaves as a slot: any elements passed
   * are rendered as the label content (subject to surface constraints); there
   * is no coercion to a string.
   */
  children?: ComponentChildren | StringChildren;
  /**
   * Additional text to provide context or guidance for the input.
   *
   * This text is displayed along with the input and its label
   * to offer more information or instructions to the user.
   *
   * @implementation this content should be linked to the input with an `aria-describedby` attribute.
   */
  details?: ComponentChildren;
  /**
   * Set to `true` to associate a choice with the error passed to `ChoiceList`
   *
   * @default false
   */
  error?: boolean;
  /**
   * Secondary content for a choice.
   */
  secondaryContent?: ComponentChildren;
  /**
   * Content to display when the option is selected.
   *
   * This can be used to provide additional information or options related to the choice.
   */
  selectedContent?: ComponentChildren;
}
interface ChoiceListProps$1
  extends GlobalProps,
    Pick<BasicFieldProps, 'label' | 'labelAccessibilityVisibility' | 'error'>,
    MultipleInputProps,
    FieldDetailsProps {
  /**
   * Whether multiple choices can be selected.
   *
   * @default false
   */
  multiple?: boolean;
  /**
   * The choices a user can select from.
   *
   * Accepts `Choice` components.
   */
  children?: ComponentChildren;
  /**
   * Disables the field, disallowing any interaction.
   *
   * `disabled` on any child choices is ignored when this is true.
   *
   * @default false
   */
  disabled?: MultipleInputProps['disabled'];
  /**
   * The variant of the choice grid.
   *
   * - `auto`: The variant is determined by the context.
   * - `list`: The choices are displayed in a list.
   * - `inline`: The choices are displayed on the inline axis.
   * - `block`: The choices are displayed on the block axis.
   * - `grid`: The choices are displayed in a grid.
   *
   * @implementation The `block`, `inline` and `grid` variants are more suitable for button looking choices, but it's at the
   * discretion of each surface.
   *
   * @default 'auto'
   */
  variant?: 'auto' | 'list' | 'inline' | 'block' | 'grid';
}
interface ClickableProps$1
  extends GlobalProps,
    BaseBoxProps,
    BaseClickableProps {
  /**
   * Disables the clickable, and indicates to assistive technology that the loading is in progress.
   *
   * This also disables the clickable.
   */
  loading?: BaseClickableProps['loading'];
  /**
   * Disables the clickable, meaning it cannot be clicked or receive focus.
   *
   * In this state, onClick will not fire.
   * If the click event originates from a child element, the event will immediately stop propagating from this element.
   *
   * However, items within the clickable can still receive focus and be interacted with.
   *
   * This has no impact on the visual state by default,
   * but developers are encouraged to style the clickable accordingly.
   */
  disabled?: BaseClickableProps['disabled'];
  /**
   * Indicate the text language. Useful when the text is in a different language than the rest of the page.
   * It will allow assistive technologies such as screen readers to invoke the correct pronunciation.
   * [Reference of values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("subtag" label)
   *
   * @default ''
   */
  lang?: string;
}
interface ClickableChipProps$1
  extends ChipProps$1,
    GlobalProps,
    InteractionProps {
  /**
   * Callback when the chip is clicked.
   */
  onClick?: (event: Event) => void;
  /**
   * The URL to link to.
   *
   * - If set, it will navigate to the location specified by `href` after executing the `click` event.
   * - If a `commandFor` is set, the `command` will be executed instead of the navigation.
   */
  href?: string;
  /**
   * Disables the chip, disallowing any interaction.
   *
   * @default false
   */
  disabled?: boolean;
}
interface ColorPickerProps$1 extends GlobalProps, InputProps {
  /**
   * Allow user to select an alpha value.
   *
   * @default false
   */
  alpha?: boolean;
  /**
   * This callback will emit the value in hex.
   *
   * If the `alpha` prop is `true`, `onChange` will emit an 8-value hex (#RRGGBBAA).
   * If the `alpha` prop is `false`, `onChange` will emit a 6-value hex (#RRGGBB).
   */
  onChange?: InputProps['onChange'];
  /**
   * This callback will emit the value in hex.
   *
   * If the `alpha` prop is `true`, `onInput` will emit an 8-value hex (#RRGGBBAA).
   * If the `alpha` prop is `false`, `onInput` will emit a 6-value hex (#RRGGBB).
   */
  onInput?: InputProps['onChange'];
  /**
   * The currently selected color.
   *
   * Supported formats include:
   * - HSL @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
   * - HSLA @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsla
   * - RGB @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb
   * - RGBA @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb
   * - Hex (3-value, 4-value, 6-value, 8-value) @see https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color
   *
   * For RGB and RGBA, both the legacy syntax (comma-separated) and modern syntax (space-separate) are supported.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb
   *
   * If the value is invalid, the component will return an empty string ''.
   *
   * Note that the `onChange` handler will emit the value in hex.
   */
  value?: InputProps['value'];
}
export interface AutocompleteProps<
  AutocompleteField extends AnyAutocompleteField,
> {
  /**
   * A hint as to the intended content of the field.
   *
   * When set to `on` (the default), this property indicates that the field should support
   * autofill, but you do not have any more semantic information on the intended
   * contents.
   *
   * When set to `off`, you are indicating that this field contains sensitive
   * information, or contents that are never saved, like one-time codes.
   *
   * Alternatively, you can provide value which describes the
   * specific data you would like to be entered into this field during autofill.
   *
   * @see Learn more about the set of {@link https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-detail-tokens|autocomplete values} supported in browsers.
   *
   * @default 'tel' for PhoneField
   * @default 'email' for EmailField
   * @default 'url' for URLField
   * @default 'on' for everything else
   */
  autocomplete?:
    | AutocompleteField
    | `${AutocompleteSection} ${AutocompleteField}`
    | `${AutocompleteGroup} ${AutocompleteField}`
    | `${AutocompleteSection} ${AutocompleteGroup} ${AutocompleteField}`
    | 'on'
    | 'off';
}
/**
 * The “section” scopes the autocomplete data that should be inserted
 * to a specific area of the page.
 *
 * Commonly used when there are multiple fields with the same autocomplete needs
 * in the same page. For example: 2 shipping address forms in the same page.
 */
export type AutocompleteSection = `section-${string}`;
/**
 * The contact information group the autocomplete data should be sourced from.
 */
export type AutocompleteGroup = 'shipping' | 'billing';
/**
 * The contact information subgroup the autocomplete data should be sourced from.
 */
export type AutocompleteAddressGroup = 'fax' | 'home' | 'mobile' | 'pager';
export type AnyAutocompleteField =
  | 'additional-name'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'country-name'
  | 'country'
  | 'current-password'
  | 'email'
  | 'family-name'
  | 'given-name'
  | 'honorific-prefix'
  | 'honorific-suffix'
  | 'language'
  | 'name'
  | 'new-password'
  | 'nickname'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'photo'
  | 'postal-code'
  | 'sex'
  | 'street-address'
  | 'transaction-amount'
  | 'transaction-currency'
  | 'url'
  | 'username'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'bday'
  | 'cc-additional-name'
  | 'cc-expiry-month'
  | 'cc-expiry-year'
  | 'cc-expiry'
  | 'cc-family-name'
  | 'cc-given-name'
  | 'cc-name'
  | 'cc-number'
  | 'cc-csc'
  | 'cc-type'
  | `${AutocompleteAddressGroup} email`
  | 'impp'
  | `${AutocompleteAddressGroup} impp`
  | 'tel'
  | 'tel-area-code'
  | 'tel-country-code'
  | 'tel-extension'
  | 'tel-local-prefix'
  | 'tel-local-suffix'
  | 'tel-local'
  | 'tel-national'
  | `${AutocompleteAddressGroup} tel`
  | `${AutocompleteAddressGroup} tel-area-code`
  | `${AutocompleteAddressGroup} tel-country-code`
  | `${AutocompleteAddressGroup} tel-extension`
  | `${AutocompleteAddressGroup} tel-local-prefix`
  | `${AutocompleteAddressGroup} tel-local-suffix`
  | `${AutocompleteAddressGroup} tel-local`
  | `${AutocompleteAddressGroup} tel-national`;
export type TextAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  | 'additional-name'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'country-name'
  | 'country'
  | 'family-name'
  | 'given-name'
  | 'honorific-prefix'
  | 'honorific-suffix'
  | 'language'
  | 'name'
  | 'nickname'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'postal-code'
  | 'sex'
  | 'street-address'
  | 'transaction-currency'
  | 'username'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-type'
>;
interface ColorFieldProps$1
  extends GlobalProps,
    BaseTextFieldProps,
    Pick<ColorPickerProps$1, 'alpha' | 'value' | 'defaultValue'> {
  autocomplete?: Extract<
    AutocompleteProps<never>['autocomplete'],
    'on' | 'off'
  >;
}
interface DatePickerProps$1 extends GlobalProps, InputProps, FocusEventProps {
  /**
   * Default month to display in `YYYY-MM` format.
   *
   * This value is used until `view` is set, either directly or as a result of user interaction.
   *
   * Defaults to the current month in the user's locale.
   */
  defaultView?: string;
  /**
   * Displayed month in `YYYY-MM` format.
   *
   * `onViewChange` is called when this value changes.
   *
   * Defaults to `defaultView`.
   */
  view?: string;
  /**
   * Called whenever the month to display changes.
   *
   * @param view The new month to display in `YYYY-MM` format.
   */
  onViewChange?: (view: string) => void;
  /**
   * The type of selection the date picker allows.
   *
   * - `single` allows selecting a single date.
   * - `multiple` allows selecting multiple non-contiguous dates.
   * - `range` allows selecting a single range of dates.
   *
   * @default "single"
   */
  type?: 'single' | 'multiple' | 'range';
  /**
   * Dates that can be selected.
   *
   * A comma-separated list of dates, date ranges. Whitespace is allowed after commas.
   *
   * The default `''` allows all dates.
   *
   * - Dates in `YYYY-MM-DD` format allow a single date.
   * - Dates in `YYYY-MM` format allow a whole month.
   * - Dates in `YYYY` format allow a whole year.
   * - Ranges are expressed as `start--end`.
   *     - Ranges are inclusive.
   *     - If either `start` or `end` is omitted, the range is unbounded in that direction.
   *     - If parts of the date are omitted for `start`, they are assumed to be the minimum possible value.
   *       So `2024--` is equivalent to `2024-01-01--`.
   *     - If parts of the date are omitted for `end`, they are assumed to be the maximum possible value.
   *       So `--2024` is equivalent to `--2024-12-31`.
   *     - Whitespace is allowed either side of `--`.
   *
   * @default ""
   *
   * @example
   * `2024-02--2025` // allow any date from February 2024 to the end of 2025
   * `2024-02--` // allow any date from February 2024 to the end of the month
   * `2024-05-09, 2024-05-11` // allow only the 9th and 11th of May 2024
   */
  allow?: string;
  /**
   * Dates that cannot be selected. These subtract from `allow`.
   *
   * A comma-separated list of dates, date ranges. Whitespace is allowed after commas.
   *
   * The default `''` has no effect on `allow`.
   *
   * - Dates in `YYYY-MM-DD` format disallow a single date.
   * - Dates in `YYYY-MM` format disallow a whole month.
   * - Dates in `YYYY` format disallow a whole year.
   * - Ranges are expressed as `start--end`.
   *     - Ranges are inclusive.
   *     - If either `start` or `end` is omitted, the range is unbounded in that direction.
   *     - If parts of the date are omitted for `start`, they are assumed to be the minimum possible value.
   *       So `2024--` is equivalent to `2024-01-01--`.
   *     - If parts of the date are omitted for `end`, they are assumed to be the maximum possible value.
   *       So `--2024` is equivalent to `--2024-12-31`.
   *     - Whitespace is allowed either side of `--`.
   *
   * @default ""
   *
   * @example
   * `--2024-02` // disallow any date before February 2024
   * `2024-05-09, 2024-05-11` // disallow the 9th and 11th of May 2024
   */
  disallow?: string;
  /**
   * Days of the week that can be selected. These intersect with the result of `allow` and `disallow`.
   *
   * A comma-separated list of days. Whitespace is allowed after commas.
   *
   * The default `''` has no effect on the result of `allow` and `disallow`.
   *
   * Days are `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`.
   *
   * @default ""
   *
   * @example
   * 'saturday, sunday' // allow only weekends within the result of `allow` and `disallow`.
   */
  allowDays?: string;
  /**
   * Days of the week that cannot be selected. This subtracts from `allowDays`, and intersects with the result of `allow` and `disallow`.
   *
   * A comma-separated list of days. Whitespace is allowed after commas.
   *
   * The default `''` has no effect on `allowDays`.
   *
   * Days are `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`.
   *
   * @default ""
   *
   * @example
   * 'saturday, sunday' // disallow weekends within the result of `allow` and `disallow`.
   */
  disallowDays?: string;
  /**
   * Default selected value.
   *
   * The default means no date is selected.
   *
   * If the provided value is invalid, no date is selected.
   *
   * - If `type="single"`, this is a date in `YYYY-MM-DD` format.
   * - If `type="multiple"`, this is a comma-separated list of dates in `YYYY-MM-DD` format.
   * - If `type="range"`, this is a range in `YYYY-MM-DD--YYYY-MM-DD` format. The range is inclusive.
   *
   * @default ""
   */
  defaultValue?: string;
  /**
   * Current selected value.
   *
   * The default means no date is selected.
   *
   * If the provided value is invalid, no date is selected.
   *
   * Otherwise:
   *
   * - If `type="single"`, this is a date in `YYYY-MM-DD` format.
   * - If `type="multiple"`, this is a comma-separated list of dates in `YYYY-MM-DD` format.
   * - If `type="range"`, this is a range in `YYYY-MM-DD--YYYY-MM-DD` format. The range is inclusive.
   *
   * @default ""
   */
  value?: string;
  /**
   * Callback when any date is selected.
   *
   * - If `type="single"`, fires when a date is selected and happens before `onChange`.
   * - If `type="multiple"`, fires when a date is selected before `onChange`.
   * - If `type="range"`, fires when a first date is selected (with the partial value formatted as `YYYY-MM-DD--`), and when the last date is selected before `onChange`.
   */
  onInput?: (event: Event) => void;
  /**
   * Callback when the value is committed.
   *
   * - If `type="single"`, fires when a date is selected after `onInput`.
   * - If `type="multiple"`, fires when a date is selected after `onInput`.
   * - If `type="range"`, fires when a range is completed by selecting the end date after `onInput`.
   */
  onChange?: (event: Event) => void;
}
interface DateFieldProps$1
  extends GlobalProps,
    BaseTextFieldProps,
    Pick<
      DatePickerProps$1,
      | 'view'
      | 'defaultView'
      | 'value'
      | 'defaultValue'
      | 'allow'
      | 'disallow'
      | 'allowDays'
      | 'disallowDays'
      | 'onViewChange'
    >,
    AutocompleteProps<DateAutocompleteField> {
  /**
   * Callback when the user makes any changes in the field.
   * Also triggered when a date is selected using the date picker popup before `onChange`.
   */
  onInput?: (event: Event) => void;
  /**
   * Callback when the user has **finished editing** a field, e.g. once they have blurred the field.
   * Also triggered when a date is selected using the date picker popup after `onInput`.
   */
  onChange?: (event: Event) => void;
  /**
   * Callback when the field has an invalid date.
   * This callback will be called, if the date typed is invalid or disabled.
   *
   * Dates that don’t exist or have formatting errors are considered invalid. Some examples of invalid dates are:
   * - 2021-02-31: February doesn’t have 31 days
   * - 2021-02-00: The day can’t be 00
   *
   * Disallowed dates are considered invalid.
   *
   * It’s important to note that this callback will be called only when the user **finishes editing** the date,
   * and it’s called right after the `onChange` callback.
   * The field is **not** validated on every change to the input. Once the buyer has signalled that
   * they have finished editing the field (typically, by blurring the field), the field gets validated and the callback is run if the value is invalid.
   */
  onInvalid?: (event: Event) => void;
}
export type DateAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'cc-expiry'
  | 'cc-expiry-month'
  | 'cc-expiry-year'
>;
interface DividerProps$1 extends GlobalProps {
  /**
   * Specify the direction of the divider. This uses [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
   *
   * @default 'inline'
   */
  direction?: 'inline' | 'block';
  /**
   * Modify the color to be more or less intense.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
}
interface DropZoneProps$1 extends GlobalProps, FileInputProps, BasicFieldProps {
  /**
   * A string representing the types of files that are accepted by the drop zone.
   * This string is a comma-separated list of unique file type specifiers which can be one of the following:
   * - A file extension starting with a period (".") character (e.g. .jpg, .pdf, .doc)
   * - A valid MIME type string with no extensions
   *
   * If omitted, all file types are accepted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
   * @default ''
   */
  accept?: string;
  /**
   * A label that describes the purpose or contents of the item. When set,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;
  /**
   * Whether multiple files can be selected or dropped at once.
   *
   * @default false
   */
  multiple?: boolean;
  /**
   * Callback fired when rejected files are dropped.
   * Files are rejected based on the `accept` prop and are not added to `files`.
   */
  onDropRejected?: (event: Event) => void;
}
interface EmailFieldProps$1
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<EmailAutocompleteField> {}
export type EmailAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'email' | `${AutocompleteAddressGroup} email`
>;
interface FormProps$1 extends GlobalProps {
  /**
   * The content of the form.
   */
  children?: ComponentChildren;
  /**
   * Whether the form is able to be submitted.
   *
   * When set to `true`, this will also disable the implicit submit behavior of the form.
   *
   * @default false
   *
   * @deprecated Prevent default within the onSubmit callback using a local state instead. Deprecated in v1.6.0
   * @private
   */
  disabled?: boolean;
  /**
   * A callback that is run when the form is submitted.
   *
   * Use `event.waitUntil` to signal how long it takes to save the data,
   * and whether it was successful or not.
   */
  onSubmit?: (event: ExtendableEvent) => void;
  /**
   * A callback that is run when the form is reset.
   */
  onReset?: (event: Event) => void;
}
interface FunctionSettingsProps$1 extends GlobalProps, FormProps$1 {
  /**
   * An optional callback function that will be run by the admin when the user
   * commits their changes in the admin-rendered part of the function settings
   * experience. If `event.waitUntil` is called with a promise, the admin will wait for the
   * promise to resolve before committing any changes to Shopify’s servers. If
   * the promise rejects, the admin will abort the changes and display an error,
   * using the `message` property of the error you reject with.
   */
  onSubmit?: (event: ExtendableEvent) => void;
  /**
   * An optional callback function that will be run by the admin when
   * committing the changes to Shopify’s servers fails. The error event you receive includes
   * an `error` property that is an `AggregateError` object. This object includes
   * an array of errors that were caused by data your extension provided.
   * Network errors and user errors that are out of your control will not be reported here.
   *
   * In the `onError` callback, you should update your extension’s UI to
   * highlight the fields that caused the errors, and display the error messages
   * to the user.
   */
  onError?: (event: AggregateErrorEvent<FunctionSettingsError>) => void;
}
export interface FunctionSettingsError extends Error {
  /**
   * A unique identifier describing the “class” of error. These will match
   * the GraphQL error codes as closely as possible. For example the enums
   * returned by the `metafieldsSet` mutation
   *
   * @see https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldsSetUserErrorCode
   */
  code: string;
  name: 'FunctionSettingsError';
}
export type SpacingKeyword = SizeKeyword | 'none';
export interface GapProps {
  /**
   * Adjust spacing between elements.
   *
   * A single value applies to both axes.
   * A pair of values (eg `large-100 large-500`) can be used to set the inline and block axes respectively.
   *
   * @default 'none'
   */
  gap?: MaybeResponsive<MaybeTwoValuesShorthandProperty<SpacingKeyword>>;
  /**
   * Adjust spacing between elements in the block axis.
   *
   * This overrides the row value of `gap`.
   *
   * @default '' - meaning no override
   */
  rowGap?: MaybeResponsive<SpacingKeyword | ''>;
  /**
   * Adjust spacing between elements in the inline axis.
   *
   * This overrides the column value of `gap`.
   *
   * @default '' - meaning no override
   */
  columnGap?: MaybeResponsive<SpacingKeyword | ''>;
}
export type BaselinePosition = 'baseline' | 'first baseline' | 'last baseline';
export type ContentDistribution =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
export type ContentPosition = 'center' | 'start' | 'end';
export type OverflowPosition =
  | `unsafe ${ContentPosition}`
  | `safe ${ContentPosition}`;
/**
 * Justify items defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
 */
export type JustifyItemsKeyword =
  | 'normal'
  | 'stretch'
  | BaselinePosition
  | OverflowPosition
  | ContentPosition;
/**
 * Align items sets the align-self value on all direct children as a group.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
 */
export type AlignItemsKeyword =
  | 'normal'
  | 'stretch'
  | BaselinePosition
  | OverflowPosition
  | ContentPosition;
/**
 * Justify content defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
 */
export type JustifyContentKeyword =
  | 'normal'
  | ContentDistribution
  | OverflowPosition
  | ContentPosition;
/**
 *Align content sets the distribution of space between and around content items along a flexbox's cross axis, or a grid or block-level element's block axis.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
 */
export type AlignContentKeyword =
  | 'normal'
  | BaselinePosition
  | ContentDistribution
  | OverflowPosition
  | ContentPosition;
interface GridProps$1 extends GlobalProps, BaseBoxPropsWithRole, GapProps {
  /**
	  Define columns and specify their size.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
	  @default 'none'
	*/
  gridTemplateColumns?: MaybeResponsive<string>;
  /**
	  Define rows and specify their size.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
	  @default 'none'
	*/
  gridTemplateRows?: MaybeResponsive<string>;
  /**
	  Aligns the grid items along the inline (row) axis.
  
	  This overrides the inline value of `placeItems`.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
	  @default '' - meaning no override
	*/
  justifyItems?: MaybeResponsive<JustifyItemsKeyword | ''>;
  /**
	  Aligns the grid items along the block (column) axis.
  
	  This overrides the block value of `placeItems`.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
	  @default '' - meaning no override
	*/
  alignItems?: MaybeResponsive<AlignItemsKeyword | ''>;
  /**
	  A shorthand property for `justify-items` and `align-items`.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/place-items
	  @default 'normal normal'
	*/
  placeItems?: MaybeResponsive<
    `${AlignItemsKeyword} ${JustifyItemsKeyword}` | AlignItemsKeyword
  >;
  /**
	  Aligns the grid along the inline (row) axis.
  
	  This overrides the inline value of `placeContent`.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
	  @default '' - meaning no override
	*/
  justifyContent?: MaybeResponsive<JustifyContentKeyword | ''>;
  /**
	  Aligns the grid along the block (column) axis.
  
	  This overrides the block value of `placeContent`.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
	  @default '' - meaning no override
	*/
  alignContent?: MaybeResponsive<AlignContentKeyword | ''>;
  /**
	  A shorthand property for `justify-content` and `align-content`.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/place-content
	  @default 'normal normal'
	*/
  placeContent?: MaybeResponsive<
    `${AlignContentKeyword} ${JustifyContentKeyword}` | AlignContentKeyword
  >;
}
interface GridItemProps$1 extends GlobalProps, BaseBoxPropsWithRole {
  /**
   * Number of columns the item will span across
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   *
   * @default 'auto'
   */
  gridColumn?: `span ${number}` | 'auto';
  /**
   * Number of rows the item will span across
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
   *
   * @default 'auto'
   */
  gridRow?: `span ${number}` | 'auto';
}
export interface BaseTypographyProps {
  /**
   * Modify the color to be more or less intense.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * Sets the tone of the component, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Set the numeric properties of the font.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric
   *
   * @default 'auto' - inherit from the parent element
   */
  fontVariantNumeric?: 'auto' | 'normal' | 'tabular-nums';
  /**
   * Indicate the text language. Useful when the text is in a different language than the rest of the page.
   * It will allow assistive technologies such as screen readers to invoke the correct pronunciation.
   * [Reference of values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("subtag" label)
   *
   * It is recommended to combine it with the `dir` attribute to ensure the text is rendered correctly if the surrounding content’s direction is different.
   *
   * @default ''
   */
  lang?: string;
  /**
   * Indicates the directionality of the element’s text.
   *
   * - `ltr`: languages written from left to right (e.g. English)
   * - `rtl`: languages written from right to left (e.g. Arabic)
   * - `auto`: the user agent determines the direction based on the content
   * - `''`: direction is inherited from parent elements (equivalent to not setting the attribute)
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
   *
   * @default ''
   */
  dir?: 'ltr' | 'rtl' | 'auto' | '';
}
export interface BlockTypographyProps {
  /**
   * Truncates the text content to the specified number of lines.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp
   *
   * @default Infinity - no truncation is applied
   */
  lineClamp?: number;
}
interface HeadingProps$1
  extends GlobalProps,
    AccessibilityVisibilityProps,
    BlockTypographyProps {
  /**
   * The content of the Heading.
   */
  children?: ComponentChildren;
  /**
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help users
   * navigate the page.
   *
   * - `heading`: defines the element as a heading to a page or section.
   * - `presentation`: the heading level will be stripped,
   * and will prevent the element’s implicit ARIA semantics from
   * being exposed to the accessibility tree.
   * - `none`: a synonym for the `presentation` role.
   *
   * @default 'heading'
   *
   * @implementation The `heading` role doesn't need to be applied if
   * the host applies it for you; for example, an HTML host rendering
   * an `<h2>` element should not apply the `heading` role.
   */
  accessibilityRole?:
    | 'heading'
    | ExtractStrict<AccessibilityRole, 'presentation' | 'none'>;
}
interface IconProps$1
  extends GlobalProps,
    Pick<InteractionProps, 'interestFor'> {
  /**
   * Sets the tone of the icon, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Modify the color to be more or less intense.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * Adjusts the size of the icon.
   *
   * @default 'base'
   */
  size?: SizeKeyword;
  type?: IconType | AnyString;
}
export interface BaseImageProps {
  /**
   * An alternative text description that describe the image for the reader to
   * understand what it is about. It is extremely useful for both users using
   * assistive technology and sighted users. A well written description
   * provides people with visual impairments the ability to participate in
   * consuming non-text content. When a screen readers encounters an `s-image`,
   * the description is read and announced aloud. If an image fails to load,
   * potentially due to a poor connection, the `alt` is displayed on
   * screen instead. This has the benefit of letting a sighted buyer know an
   * image was meant to load here, but as an alternative, they’re still able to
   * consume the text content. Read
   * [considerations when writing alternative text](https://www.shopify.com/ca/blog/image-alt-text#4)
   * to learn more.
   *
   * @default `''`
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt
   */
  alt?: string;
  /**
   * A set of media conditions and their corresponding sizes.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes
   */
  sizes?: string;
  /**
   * The image source (either a remote URL or a local file resource).
   *
   * When the image is loading or no `src` is provided, a placeholder will be rendered.
   *
   * @implementation Surfaces may choose the style of the placeholder, but the space the image occupies should be
   * reserved, except in cases where the image area does not have a contextual inline or block size, which should be rare.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src
   */
  src?: string;
  /**
   * A set of image sources and their width or pixel density descriptors.
   *
   * This overrides the `src` property.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset
   */
  srcSet?: string;
}
interface ImageProps$1 extends GlobalProps, BaseImageProps, BorderProps {
  /**
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help users
   * navigate the page.
   *
   * @default 'img'
   *
   * @implementation The `img` role doesn't need to be applied if
   * the host applies it for you; for example, an HTML host rendering
   * an `<img>` element should not apply the `img` role.
   */
  accessibilityRole?:
    | 'img'
    | ExtractStrict<AccessibilityRole, 'presentation' | 'none'>;
  /**
   * The displayed inline width of the image.
   *
   * - `fill`: the image will takes up 100% of the available inline size.
   * - `auto`: the image will be displayed at its natural size.
   *
   * @default 'fill'
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width
   */
  inlineSize?: 'fill' | 'auto';
  /**
   * The aspect ratio of the image.
   *
   * The rendering of the image will depend on the `inlineSize` value:
   *
   * - `inlineSize="fill"`: the aspect ratio will be respected and the image will take the necessary space.
   * - `inlineSize="auto"`: the image will not render until it has loaded and the aspect ratio will be ignored.
   *
   * For example, if the value is set as `50 / 100`, the getter returns `50 / 100`.
   * If the value is set as `0.5`, the getter returns `0.5 / 1`.
   *
   * @default '1/1'
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
   */
  aspectRatio?:
    | `${number}${optionalSpace}/${optionalSpace}${number}`
    | `${number}`;
  /**
   * Determines how the content of the image is resized to fit its container.
   * The image is positioned in the center of the container.
   *
   * @default 'contain'
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
   */
  objectFit?: 'contain' | 'cover';
  /**
   * Determines the loading behavior of the image:
   * - `eager`: Immediately loads the image, irrespective of its position within the visible viewport.
   * - `lazy`: Delays loading the image until it approaches a specified distance from the viewport.
   *
   * @default 'eager'
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading
   */
  loading?: 'eager' | 'lazy';
  /**
   * Invoked when load completes successfully.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
   */
  onLoad?: (event: Event) => void;
  /**
   * Invoked on load error.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
   */
  onError?: (event: Event) => void;
}
interface LinkProps$1 extends GlobalProps, LinkBehaviorProps {
  /**
   * The content of the Link.
   */
  children?: ComponentChildren;
  /**
   * Sets the tone of the Link, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * A label that describes the purpose or contents of the Link. It will be read to users using assistive technologies such as screen readers.
   *
   * Use this when using only an icon or the content of the link is not enough context
   * for users using assistive technologies.
   */
  accessibilityLabel?: string;
  /**
   * Indicate the text language. Useful when the text is in a different language than the rest of the page.
   * It will allow assistive technologies such as screen readers to invoke the correct pronunciation.
   * [Reference of values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("subtag" label)
   */
  lang?: string;
}
interface ListItemProps$1 extends GlobalProps {
  /**
   * The content of the ListItem.
   */
  children?: ComponentChildren;
}
interface MenuProps$1 extends GlobalProps {
  /**
   * A label that describes the purpose or contents of the element. When set,
   * it will be announced using assistive technologies and provide additional context.
   */
  accessibilityLabel?: string;
  /**
   * The children define the actions to render inside the Menu. Only Button components are allowed as children of a Menu, and these Buttons can perform actions (using `onClick`) or link to other parts of the application (using `to`/ `href`). Any other component placed here will be ignored.
   */
  children?: ComponentChildren;
}
interface ModalProps$1
  extends GlobalProps,
    BaseOverlayProps,
    BaseOverlayMethods,
    ActionSlots {
  /**
   * A label that describes the purpose of the modal. When set,
   * it will be announced to users using assistive technologies and will
   * provide them with more context.
   *
   * This overrides the `heading` prop for screen readers.
   */
  accessibilityLabel?: string;
  /**
   * A title that describes the content of the Modal.
   *
   */
  heading?: string;
  /**
   * Adjust the padding around the Modal content.
   *
   * `base`: applies padding that is appropriate for the element.
   *
   * `none`: removes all padding from the element. This can be useful when elements inside the Modal need to span
   * to the edge of the Modal. For example, a full-width image. In this case, rely on `Box` with a padding of 'base'
   * to bring back the desired padding for the rest of the content.
   *
   * @default 'base'
   */
  padding?: 'base' | 'none';
  /**
   * Adjust the size of the Modal.
   *
   * `max`: expands the Modal to its maximum size as defined by the host application, on both the horizontal and vertical axes.
   *
   * @default 'base'
   */
  size?: SizeKeyword | 'max';
  /**
   * The content of the Modal.
   */
  children?: ComponentChildren;
}
interface MoneyFieldProps$1
  extends GlobalProps,
    BaseTextFieldProps,
    NumberConstraintsProps,
    AutocompleteProps<MoneyAutocompleteField> {}
export type MoneyAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'transaction-amount'
>;
interface NumberFieldProps$1
  extends GlobalProps,
    BaseTextFieldProps,
    AutocompleteProps<NumberAutocompleteField>,
    NumberConstraintsProps,
    FieldDecorationProps {
  /**
   * Sets the virtual keyboard.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode
   * @default 'decimal'
   */
  inputMode?: 'decimal' | 'numeric';
  /**
   * Callback when the user has **finished editing** a field, e.g. once they have blurred
   * the field after changing the value.
   * Also fired after `onInput` on every step when interacting with the controls or the keyboard up and down arrows.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
   */
  onChange?: (event: Event) => void;
  /**
   * Callback when the user makes any changes in the field.
   * Also fired before `onChange` on every step when interacting with the controls or the keyboard up and down arrows.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
   */
  onInput?: (event: Event) => void;
}
export type NumberAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'one-time-code' | 'cc-number' | 'cc-csc'
>;
interface OptionProps$1 extends GlobalProps, BaseOptionProps {
  /**
   * The content to use as the label.
   */
  children?: ComponentChildren;
}
interface OptionGroupProps$1 extends GlobalProps {
  /**
   * Whether the options within this group can be selected or not.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The user-facing label for this group of options.
   */
  label?: string;
  /**
   * The options a user can select from.
   *
   * Accepts `Option` components.
   */
  children?: ComponentChildren;
}
interface OrderedListProps$1 extends GlobalProps {
  /**
   * The content of the OrderededList.
   *
   * Accepts only `ListItem` components.
   */
  children?: ComponentChildren;
}
interface PageProps$1 extends GlobalProps, ActionSlots {
  /**
   * The content of the Page.
   */
  children?: ComponentChildren;
  /**
   * The main page heading
   */
  heading?: string;
  /**
   * The text to be used as subtitle.
   */
  subheading?: string;
  /**
   * Additional contextual information about the page.
   */
  accessory?: ComponentChildren;
  /**
   * The breadcrumb actions to perform, provided as link elements.
   */
  breadcrumbActions?: ComponentChildren;
  /**
   * The aside element is section of a page that contains content that is tangentially related to the content around the aside element, and which could be considered separate from that content.
   * Such sections are often represented as sidebars in printed typography.
   * @implementation surfaces built ontop of the web platform should implement this using the <aside> element https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
   */
  aside?: ComponentChildren;
  /**
   * The inline size of the page
   * - `base` corresponds to a set default inline size
   * - `large` full width with whitespace
   *
   * @default 'base'
   */
  inlineSize?: SizeKeyword;
}
interface ParagraphProps$1
  extends GlobalProps,
    BaseTypographyProps,
    BlockTypographyProps,
    AccessibilityVisibilityProps {
  /**
   * The content of the Paragraph.
   */
  children?: ComponentChildren;
  /**
   * Provide semantic meaning and default styling to the paragraph.
   *
   * Other presentation properties on `s-paragraph` override the default styling.
   *
   * @default 'paragraph'
   */
  type?: ParagraphType;
}
export type ParagraphType =
  /**
   * Indicate the text is a structural grouping of related content.
   *
   * In an HTML host, the text will be rendered in an `<p>` element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
   */
  | 'paragraph'
  /**
   * Indicates the text is considered less important than the main content, but is still necessary for the reader to understand.
   * It can be used for secondary content but also for disclaimers, terms and conditions, or legal information.
   *
   * Surfaces should apply a smaller font size than the default size.
   *
   * In an HTML host, the text will be rendered in a `<small>` element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
   */
  | 'small';
interface PasswordFieldProps$1
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<PasswordAutocompleteField> {}
export type PasswordAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'new-password' | 'current-password'
>;
interface PopoverProps$1
  extends GlobalProps,
    BaseOverlayProps,
    BaseOverlayMethods,
    ToggleEventProps,
    SizingProps {
  /**
   * The content of the popover.
   */
  children?: ComponentChildren;
}
interface PressButtonProps$1
  extends GlobalProps,
    Pick<
      ButtonProps$1,
      | 'accessibilityLabel'
      | 'children'
      | 'icon'
      | 'inlineSize'
      | 'lang'
      | 'tone'
      | 'variant'
      | 'disabled'
      | 'loading'
      | 'onClick'
      | 'onBlur'
      | 'onFocus'
    > {
  /**
   * Whether the button is pressed.
   *
   * @default false
   */
  pressed?: boolean;
  /**
   * Whether the button is pressed by default.
   *
   * @default false
   *
   * @implementation `defaultPressed` reflects to the `pressed` attribute.
   */
  defaultPressed?: boolean;
}
interface QueryContainerProps$1 extends GlobalProps {
  /**
   * The content of the container.
   */
  children?: ComponentChildren;
  /**
   * The name of the container, which can be used in your container queries to target this container specifically.
   *
   * We place the container name of `s-default` on every container. Because of this, it is not required to add a `containerName` identifier in your queries. For example, a `@container (inline-size <= 300px) none, auto` query is equivalent to `@container s-default (inline-size <= 300px) none, auto`.
   *
   * Any value set in `containerName` will be set alongside alongside `s-default`. For example, `containerName="my-container-name"` will result in a value of `s-default my-container-name` set on the `container-name` CSS property of the rendered HTML.
   *
   * @default ''
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/container-name
   *
   * @implementation You must always have a CSS `container-name` of `s-default` for this component.
   */
  containerName?: string;
}
export type OverflowKeyword = 'auto' | 'hidden';
export type ScrollSnapType = 'none' | 'mandatory' | 'proximity';
export type ScrollAccessibilityRole = 'generic' | 'region';
interface SectionProps$1 extends GlobalProps, ActionSlots {
  /**
   * The content of the Section.
   */
  children?: ComponentChildren;
  /**
   * A label used to describe the section that will be announced by assistive technologies.
   *
   * When no `heading` property is provided or included as a children of the Section, you **must** provide an
   * `accessibilityLabel` to describe the Section. This is important as it allows assistive technologies to provide
   * the right context to users.
   */
  accessibilityLabel?: string;
  /**
   * A title that describes the content of the section.
   */
  heading?: string;
  /**
   * Adjust the padding of all edges.
   *
   * - `base`: applies padding that is appropriate for the element. Note that it may result in no padding if
   * this is the right design decision in a particular context.
   * - `none`: removes all padding from the element. This can be useful when elements inside the Section need to span
   * to the edge of the Section. For example, a full-width image. In this case, rely on `s-box` with a padding of 'base'
   * to bring back the desired padding for the rest of the content.
   *
   * @default 'base'
   */
  padding?: 'base' | 'none';
}
interface SelectProps$1
  extends GlobalProps,
    AutocompleteProps<AnyAutocompleteField>,
    Pick<FieldDecorationProps, 'icon'>,
    Omit<FieldProps, 'defaultValue'>,
    FocusEventProps {
  /**
   * The options a user can select from.
   *
   * Accepts `Option` and `OptionGroup` components.
   */
  children?: ComponentChildren;
}
interface SpinnerProps$1 extends GlobalProps {
  /**
   * Adjusts the size of the spinner icon.
   *
   * @default 'base'
   */
  size?: SizeKeyword;
  /**
   * A label that describes the purpose of the progress. When set,
   * it will be announced to users using assistive technologies and will
   * provide them with more context. Providing an `accessibilityLabel` is
   * recommended if there is no accompanying text describing that something
   * is loading.
   */
  accessibilityLabel?: string;
}
interface StackProps$1 extends GlobalProps, BaseBoxPropsWithRole, GapProps {
  /**
   * The content of the Stack.
   */
  children?: ComponentChildren;
  /**
   * Sets how the children are placed within the Stack. This uses [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
   *
   * @default 'block'
   *
   * @implementation the content will wrap if the direction is 'inline', and not wrap if the direction is 'block'
   */
  direction?: MaybeResponsive<'block' | 'inline'>;
  /**
   * Aligns the Stack along the main axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   * @default 'normal'
   */
  justifyContent?: MaybeResponsive<JustifyContentKeyword>;
  /**
   * Aligns the Stack's children along the cross axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   * @default 'normal'
   */
  alignItems?: MaybeResponsive<AlignItemsKeyword>;
  /**
   * Aligns the Stack along the cross axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   * @default 'normal'
   */
  alignContent?: MaybeResponsive<AlignContentKeyword>;
}
interface SwitchProps$1
  extends GlobalProps,
    BaseCheckableProps,
    BasicFieldProps,
    FieldDetailsProps,
    FieldErrorProps {}
export interface PaginationProps {
  /**
   * Whether to use pagination controls.
   *
   * @default false
   */
  paginate?: boolean;
  /**
   * Called when the previous page button is clicked.
   */
  onPreviousPage?: (event: Event) => void;
  /**
   * Called when the next page button is clicked.
   */
  onNextPage?: (event: Event) => void;
  /**
   * Whether there's an additional page of data.
   *
   * @default false
   */
  hasNextPage?: boolean;
  /**
   * Whether there's a previous page of data.
   *
   * @default false
   */
  hasPreviousPage?: boolean;
  /**
   * Whether the table is in a loading state, such as initial page load or loading the next page in a paginated table.
   * When true, the table could be in an inert state, which prevents user interaction.
   *
   * @default false
   */
  loading?: boolean;
}
interface TableProps$1 extends GlobalProps, PaginationProps {
  /**
   * The content of the Table.
   */
  children?: ComponentChildren;
  /**
   * Input elements, such as SearchField, used to search and filter the table.
   */
  filters?: ComponentChildren;
  /**
   * Sets the layout of the Table.
   *
   * - `list`: The Table is always displayed as a list.
   * - `table`: The Table is always displayed as a table.
   * - `auto`: The Table is displayed as a table on wide devices and as a list on narrow devices.
   *
   * @default 'auto'
   */
  variant?: 'list' | 'table' | 'auto';
}
interface TableBodyProps$1 extends GlobalProps {
  /**
   * The body of the table. May not have any semantic meaning in the Table's `list` variant.
   */
  children?: ComponentChildren;
}
interface TableCellProps$1 extends GlobalProps {
  /**
   * The content of the table cell.
   */
  children?: ComponentChildren;
}
export type ListSlotType =
  | 'primary'
  | 'secondary'
  | 'kicker'
  | 'inline'
  | 'labeled';
interface TableHeaderProps$1 extends GlobalProps {
  /**
   * The heading of the column in the `table` variant, and the label of its data in `list` variant.
   */
  children?: ComponentChildren;
  /**
   * Content designation for the table's `list` variant.
   *
   * - `primary`: The most important content. Only one column can have this designation.
   * - `secondary`: The secondary content. Only one column can have this designation.
   * - `kicker`: Content that is displayed before primary and secondary content, but with less visual prominence. Only one column can have this designation.
   * - `inline`: Content that is displayed inline.
   * - `labeled`: Each column with this designation displays as a heading-content pair.
   *
   * @default 'labeled'
   */
  listSlot?: ListSlotType;
  /**
   * The format of the column. Will automatically apply styling and alignment to cell content based on the value.
   *
   * - `base`: The base format for columns.
   * - `currency`: Formats the column as currency.
   * - `numeric`: Formats the column as a number.
   *
   * @default 'base'
   */
  format?: 'base' | 'currency' | 'numeric';
}
interface TableHeaderRowProps$1 extends GlobalProps {
  /**
   * Contents of the table heading row; children should be `TableHeading` components.
   */
  children?: ComponentChildren;
}
interface TableRowProps$1 extends GlobalProps {
  /**
   * The content of a TableRow, which should be `TableCell` components.
   */
  children?: ComponentChildren;
  /**
   * The ID of an interactive element (e.g. `s-link`) in the row that will be the target of the click when the row is clicked.
   * This is the primary action for the row; it should not be used for secondary actions.
   *
   * This is a click-only affordance, and does not introduce any keyboard or screen reader affordances.
   * Which is why the target element must be in the table; so that keyboard and screen reader users can interact with it normally.
   *
   * @implementation no focus or keyboard affordances are introduced by this property. No aria attributes need to be added to the table row.
   * @implementation the row and/or delegate should have some affordance that indicates it is clickable. This may be a background color, a border, a hover effect, etc.
   */
  clickDelegate?: string;
}
interface TextProps$1
  extends GlobalProps,
    AccessibilityVisibilityProps,
    BaseTypographyProps,
    DisplayProps,
    Pick<InteractionProps, 'interestFor'> {
  /**
   * The content of the Text.
   */
  children?: ComponentChildren;
  /**
   * Provide semantic meaning and default styling to the text.
   *
   * Other presentation properties on Text override the default styling.
   *
   * @default 'generic'
   */
  type?: TextType;
}
export type TextType =
  /**
   * Indicate the text is contact information. Typically used for addresses.
   *
   * This must have `inline` layout (despite the default being `block` in HTML hosts).
   *
   * Surfaces may apply styling to this type.
   *
   * In an HTML host, the text will be rendered in an `<address>` element.
   *
   * @implementation vertical alignment should be `baseline` (`vertical-align: baseline`)
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address
   */
  | 'address'
  /**
   * Indicate the text is no longer accurate or no longer relevant. One such use-case is discounted prices.
   *
   * Surfaces should apply styling to this type to suggest its content no longer applies.
   *
   * In an HTML host, the text will be rendered in a `<s>` element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s
   */
  | 'redundant'
  /**
   * Indicate the text is marked or highlighted and relevant to the user’s current action.
   * One such use-case is to indicate the characters that matched a search query.
   *
   * Surfaces should apply styling to this type to draw attention to the content.
   *
   * In an HTML host, the text will be rendered in a `<mark>` element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
   */
  | 'mark'
  /**
   * Indicate emphatic stress. Typically for words that have a stressed emphasis compared to surrounding text.
   *
   * Surfaces should apply styling to this type to distinguish it from surrounding text. Italicization is a common choice, but not required.
   *
   * In an HTML host, the text will be rendered in an `<em>` element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
   */
  | 'emphasis'
  /**
   * Indicate an offset from the normal prose of the text. Typically used to indicate
   * a foreign word, fictional character thoughts, or when the text refers to the definition of a word
   * instead of representing its semantic meaning.
   *
   * Surfaces should italicize this content by default.
   *
   * In an HTML host, the text will be rendered in a `<i>` tag.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
   */
  | 'offset'
  /**
   * Indicate strong importance, seriousness, or urgency.
   *
   * Surfaces should render this content bold by default.
   *
   * In an HTML host, the text will be rendered in a `<strong>` tag.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
   */
  | 'strong'
  /**
   * Indicates the text is considered less important than the main content, but is still necessary for the reader to understand.
   * It can be used for secondary content but also for disclaimers, terms and conditions, or legal information.
   *
   * Surfaces should apply a smaller font size than the default size.
   *
   * In an HTML host, the text will be rendered in a `<small>` element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
   */
  | 'small'
  /**
   * No additional semantics or styling is applied.
   *
   * Surfaces must not apply any default styling to this type.
   *
   * In an HTML host, the text will be rendered in a `<span>` tag.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
   */
  | 'generic';
interface TextAreaProps$1
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<TextAutocompleteField> {
  /**
   * A number of visible text lines.
   *
   * @default 2
   */
  rows?: number;
}
interface TextFieldProps$1
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<TextAutocompleteField>,
    FieldDecorationProps {}
interface ThumbnailProps$1 extends GlobalProps, BaseImageProps {
  /**
   * Invoked when load of provided image completes successfully.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
   */
  onLoad?: (event: Event) => void;
  /**
   * Invoked on load error of provided image.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
   */
  onError?: (event: Event) => void;
  /**
   * Adjusts the size the product thumbnail image.
   *
   * @default 'base'
   */
  size?: SizeKeyword;
}
interface TooltipProps$1 extends GlobalProps {
  /**
   * The content of the Tooltip.
   */
  children?: ComponentChildren;
}
interface UnorderedListProps$1 extends GlobalProps {
  /**
   * The content of the UnorderededList.
   *
   * Accepts only `ListItem` components.
   */
  children?: ComponentChildren;
}
interface URLFieldProps$1
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<URLAutocompleteField> {}
export type URLAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'url' | 'photo' | 'impp' | `${AutocompleteAddressGroup} impp`
>;
//
// Preact Virtual DOM
// -----------------------------------
export interface VNode<P = {}> {
  type: ComponentType<P> | string;
  props: P & {
    children: ComponentChildren$1;
  };
  key: Key;
  /**
   * ref is not guaranteed by React.ReactElement, for compatibility reasons
   * with popular react libs we define it as optional too
   */
  ref?: Ref<any> | null;
  /**
   * The time this `vnode` started rendering. Will only be set when
   * the devtools are attached.
   * Default value: `0`
   */
  startTime?: number;
  /**
   * The time that the rendering of this `vnode` was completed. Will only be
   * set when the devtools are attached.
   * Default value: `-1`
   */
  endTime?: number;
}
//
// Preact Component interface
// -----------------------------------
export type Key = string | number | any;
export interface RefObject<T> {
  current: T | null;
}
export type RefCallback<T> = (instance: T | null) => void;
export type Ref<T> = RefObject<T> | RefCallback<T> | null;
export type ComponentChild =
  | VNode<any>
  | object
  | string
  | number
  | bigint
  | boolean
  | null
  | undefined;
type ComponentChildren$1 = ComponentChild[] | ComponentChild;
export interface Attributes {
  key?: Key | undefined;
  jsx?: boolean | undefined;
}
export interface ErrorInfo {
  componentStack?: string;
}
export type RenderableProps<P, RefType = any> = P &
  Readonly<
    Attributes & {
      children?: ComponentChildren$1;
      ref?: Ref<RefType>;
    }
  >;
export type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;
export interface FunctionComponent<P = {}> {
  (props: RenderableProps<P>, context?: any): ComponentChildren$1;
  displayName?: string;
  defaultProps?: Partial<P> | undefined;
}
export interface ComponentClass<P = {}, S = {}> {
  new (props: P, context?: any): Component<P, S>;
  displayName?: string;
  defaultProps?: Partial<P>;
  contextType?: Context<any>;
  getDerivedStateFromProps?(
    props: Readonly<P>,
    state: Readonly<S>,
  ): Partial<S> | null;
  getDerivedStateFromError?(error: any): Partial<S> | null;
}
export interface Component<P = {}, S = {}> {
  componentWillMount?(): void;
  componentDidMount?(): void;
  componentWillUnmount?(): void;
  getChildContext?(): object;
  componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
  shouldComponentUpdate?(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ): boolean;
  componentWillUpdate?(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ): void;
  getSnapshotBeforeUpdate?(oldProps: Readonly<P>, oldState: Readonly<S>): any;
  componentDidUpdate?(
    previousProps: Readonly<P>,
    previousState: Readonly<S>,
    snapshot: any,
  ): void;
  componentDidCatch?(error: any, errorInfo: ErrorInfo): void;
}
declare abstract class Component<P, S> {
  constructor(props?: P, context?: any);
  static displayName?: string;
  static defaultProps?: any;
  static contextType?: Context<any>;
  // Static members cannot reference class type parameters. This is not
  // supported in TypeScript. Reusing the same type arguments from `Component`
  // will lead to an impossible state where one cannot satisfy the type
  // constraint under no circumstances, see #1356.In general type arguments
  // seem to be a bit buggy and not supported well at the time of this
  // writing with TS 3.3.3333.
  static getDerivedStateFromProps?(
    props: Readonly<object>,
    state: Readonly<object>,
  ): object | null;

  static getDerivedStateFromError?(error: any): object | null;
  state: Readonly<S>;
  props: RenderableProps<P>;
  context: any;
  base?: Element | Text;
  // From https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e836acc75a78cf0655b5dfdbe81d69fdd4d8a252/types/react/index.d.ts#L402
  // // We MUST keep setState() as a unified signature because it allows proper checking of the method return type.
  // // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18365#issuecomment-351013257
  setState<K extends keyof S>(
    state:
      | ((
          prevState: Readonly<S>,
          props: Readonly<P>,
        ) => Pick<S, K> | Partial<S> | null)
      | (Pick<S, K> | Partial<S> | null),
    callback?: () => void,
  ): void;

  forceUpdate(callback?: () => void): void;
  abstract render(
    props?: RenderableProps<P>,
    state?: Readonly<S>,
    context?: any,
  ): ComponentChildren$1;
}
//
// Context
// -----------------------------------
export interface Consumer<T>
  extends FunctionComponent<{
    children: (value: T) => ComponentChildren$1;
  }> {}
export interface Provider<T>
  extends FunctionComponent<{
    value: T;
    children?: ComponentChildren$1;
  }> {}
export interface Context<T> extends Provider<T> {
  Consumer: Consumer<T>;
  Provider: Provider<T>;
  displayName?: string;
}
export type Styles = string;
declare const shadowRootSymbol: unique symbol;
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChildren$1;
  styles?: Styles;
  /**
   * Only needed once in the root element, to inject global shadow CSS for all components.
   */
  globalShadowCSS?: Styles;
};
export interface ActivationEventEsque {
  shiftKey: boolean;
  metaKey: boolean;
  ctrlKey: boolean;
  button: number;
}
export interface ClickOptions {
  /**
   * The event you want to influence the synthetic click.
   */
  sourceEvent?: ActivationEventEsque;
}
declare const BaseClass: typeof globalThis.HTMLElement;
export declare abstract class PreactCustomElement extends BaseClass {
  /** @private */
  static get observedAttributes(): string[];
  /** @private */
  [shadowRootSymbol]: ShadowRoot | null;
  constructor({
    styles,
    ShadowRoot: renderFunction,
    delegatesFocus,
    globalShadowCSS,
    ...options
  }: RenderImpl);

  /** @private */
  setAttribute(name: string, value: string): void;
  /** @private */
  attributeChangedCallback(name: string): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
  /**
   * Queue a run of the render function.
   * You shouldn't need to call this manually - it should be handled by changes to @property values.
   * @private
   */
  queueRender(): void;
  /**
   * Like the standard `element.click()`, but you can influence the behavior with a `sourceEvent`.
   *
   * For example, if the `sourceEvent` was a middle click, or has particular keys held down,
   * components will attempt to produce the desired behavior on links, such as opening the page in the background tab.
   * @private
   * @param options
   */
  click({sourceEvent}?: ClickOptions): void;
}
type IconType$1 =
  | 'adjust'
  | 'affiliate'
  | 'airplane'
  | 'alert-bubble'
  | 'alert-circle'
  | 'alert-diamond'
  | 'alert-location'
  | 'alert-octagon'
  | 'alert-octagon-filled'
  | 'alert-triangle'
  | 'align-horizontal-centers'
  | 'app-extension'
  | 'apps'
  | 'archive'
  | 'arrow-down'
  | 'arrow-down-circle'
  | 'arrow-left'
  | 'arrow-left-circle'
  | 'arrow-right'
  | 'arrow-right-circle'
  | 'arrow-up'
  | 'arrow-up-circle'
  | 'arrow-up-right'
  | 'arrows-in-horizontal'
  | 'arrows-out-horizontal'
  | 'asterisk'
  | 'attachment'
  | 'automation'
  | 'backspace'
  | 'bag'
  | 'bank'
  | 'barcode'
  | 'bill'
  | 'blank'
  | 'blog'
  | 'bolt'
  | 'bolt-filled'
  | 'book'
  | 'book-open'
  | 'bug'
  | 'bullet'
  | 'business-entity'
  | 'button'
  | 'button-press'
  | 'calculator'
  | 'calendar'
  | 'calendar-check'
  | 'calendar-compare'
  | 'calendar-list'
  | 'calendar-time'
  | 'camera'
  | 'camera-flip'
  | 'caret-down'
  | 'caret-left'
  | 'caret-right'
  | 'caret-up'
  | 'cart'
  | 'cart-abandoned'
  | 'cart-discount'
  | 'cart-down'
  | 'cart-sale'
  | 'cart-up'
  | 'cash-dollar'
  | 'cash-euro'
  | 'cash-pound'
  | 'cash-rupee'
  | 'cash-yen'
  | 'catalog-product'
  | 'categories'
  | 'channels'
  | 'channels-filled'
  | 'chart-cohort'
  | 'chart-donut'
  | 'chart-funnel'
  | 'chart-histogram-first'
  | 'chart-histogram-first-last'
  | 'chart-histogram-flat'
  | 'chart-histogram-full'
  | 'chart-histogram-growth'
  | 'chart-histogram-last'
  | 'chart-histogram-second-last'
  | 'chart-horizontal'
  | 'chart-line'
  | 'chart-popular'
  | 'chart-stacked'
  | 'chart-vertical'
  | 'chat'
  | 'chat-new'
  | 'chat-referral'
  | 'check'
  | 'check-circle'
  | 'check-circle-filled'
  | 'checkbox'
  | 'chevron-down'
  | 'chevron-down-circle'
  | 'chevron-left'
  | 'chevron-left-circle'
  | 'chevron-right'
  | 'chevron-right-circle'
  | 'chevron-up'
  | 'chevron-up-circle'
  | 'circle'
  | 'circle-dashed'
  | 'clipboard'
  | 'clipboard-check'
  | 'clipboard-checklist'
  | 'clock'
  | 'clock-list'
  | 'clock-revert'
  | 'code'
  | 'code-add'
  | 'collection'
  | 'collection-featured'
  | 'collection-list'
  | 'collection-reference'
  | 'color'
  | 'color-none'
  | 'compass'
  | 'compose'
  | 'confetti'
  | 'connect'
  | 'content'
  | 'contract'
  | 'corner-pill'
  | 'corner-round'
  | 'corner-square'
  | 'credit-card'
  | 'credit-card-cancel'
  | 'credit-card-percent'
  | 'credit-card-reader'
  | 'credit-card-reader-chip'
  | 'credit-card-reader-tap'
  | 'credit-card-secure'
  | 'credit-card-tap-chip'
  | 'crop'
  | 'currency-convert'
  | 'cursor'
  | 'cursor-banner'
  | 'cursor-option'
  | 'data-presentation'
  | 'data-table'
  | 'database'
  | 'database-add'
  | 'database-connect'
  | 'delete'
  | 'delivery'
  | 'desktop'
  | 'disabled'
  | 'discount'
  | 'discount-add'
  | 'discount-code'
  | 'dns-settings'
  | 'dock-floating'
  | 'dock-side'
  | 'domain'
  | 'domain-landing-page'
  | 'domain-new'
  | 'domain-redirect'
  | 'download'
  | 'drag-drop'
  | 'drag-handle'
  | 'duplicate'
  | 'edit'
  | 'email'
  | 'email-follow-up'
  | 'email-newsletter'
  | 'enabled'
  | 'enter'
  | 'envelope'
  | 'envelope-soft-pack'
  | 'eraser'
  | 'exchange'
  | 'exit'
  | 'export'
  | 'external'
  | 'eye-check-mark'
  | 'eye-dropper'
  | 'eye-dropper-list'
  | 'eye-first'
  | 'eyeglasses'
  | 'favicon'
  | 'file'
  | 'file-list'
  | 'filter'
  | 'filter-active'
  | 'flag'
  | 'flip-horizontal'
  | 'flip-vertical'
  | 'flower'
  | 'folder'
  | 'folder-add'
  | 'folder-down'
  | 'folder-remove'
  | 'folder-up'
  | 'food'
  | 'foreground'
  | 'forklift'
  | 'forms'
  | 'games'
  | 'gauge'
  | 'gift-card'
  | 'git-branch'
  | 'git-commit'
  | 'git-repository'
  | 'globe'
  | 'globe-asia'
  | 'globe-europe'
  | 'globe-lines'
  | 'globe-list'
  | 'grid'
  | 'hashtag'
  | 'hashtag-decimal'
  | 'hashtag-list'
  | 'heart'
  | 'hide'
  | 'hide-filled'
  | 'home'
  | 'icons'
  | 'identity-card'
  | 'image'
  | 'image-add'
  | 'image-alt'
  | 'image-explore'
  | 'image-magic'
  | 'image-none'
  | 'image-with-text-overlay'
  | 'images'
  | 'import'
  | 'in-progress'
  | 'incentive'
  | 'incoming'
  | 'incomplete'
  | 'info'
  | 'inheritance'
  | 'inventory'
  | 'inventory-updated'
  | 'iq'
  | 'key'
  | 'keyboard'
  | 'keyboard-filled'
  | 'keyboard-hide'
  | 'label-printer'
  | 'language'
  | 'language-translate'
  | 'layout-block'
  | 'layout-buy-button'
  | 'layout-buy-button-horizontal'
  | 'layout-buy-button-vertical'
  | 'layout-column-1'
  | 'layout-columns-2'
  | 'layout-columns-3'
  | 'layout-footer'
  | 'layout-header'
  | 'layout-logo-block'
  | 'layout-popup'
  | 'layout-rows-2'
  | 'layout-section'
  | 'layout-sidebar-left'
  | 'layout-sidebar-right'
  | 'lightbulb'
  | 'link'
  | 'link-list'
  | 'list-bulleted'
  | 'list-numbered'
  | 'live'
  | 'location'
  | 'location-none'
  | 'lock'
  | 'map'
  | 'markets'
  | 'markets-euro'
  | 'markets-rupee'
  | 'markets-yen'
  | 'maximize'
  | 'measurement-size'
  | 'measurement-size-list'
  | 'measurement-volume'
  | 'measurement-volume-list'
  | 'measurement-weight'
  | 'measurement-weight-list'
  | 'media-receiver'
  | 'megaphone'
  | 'mention'
  | 'menu'
  | 'menu-horizontal'
  | 'menu-vertical'
  | 'merge'
  | 'metafields'
  | 'metaobject'
  | 'metaobject-list'
  | 'metaobject-reference'
  | 'microphone'
  | 'microphone-muted'
  | 'minimize'
  | 'minus'
  | 'minus-circle'
  | 'mobile'
  | 'money'
  | 'money-none'
  | 'moon'
  | 'nature'
  | 'note'
  | 'note-add'
  | 'notification'
  | 'number-one'
  | 'order'
  | 'order-batches'
  | 'order-draft'
  | 'order-first'
  | 'order-fulfilled'
  | 'order-repeat'
  | 'order-unfulfilled'
  | 'orders-status'
  | 'organization'
  | 'outdent'
  | 'outgoing'
  | 'package'
  | 'package-fulfilled'
  | 'package-on-hold'
  | 'package-returned'
  | 'page'
  | 'page-add'
  | 'page-attachment'
  | 'page-clock'
  | 'page-down'
  | 'page-heart'
  | 'page-list'
  | 'page-reference'
  | 'page-remove'
  | 'page-report'
  | 'page-up'
  | 'pagination-end'
  | 'pagination-start'
  | 'paint-brush-flat'
  | 'paint-brush-round'
  | 'paper-check'
  | 'passkey'
  | 'paste'
  | 'pause-circle'
  | 'payment'
  | 'payment-capture'
  | 'payout'
  | 'payout-dollar'
  | 'payout-euro'
  | 'payout-pound'
  | 'payout-rupee'
  | 'payout-yen'
  | 'person'
  | 'person-add'
  | 'person-exit'
  | 'person-list'
  | 'person-lock'
  | 'person-remove'
  | 'person-segment'
  | 'personalized-text'
  | 'phone'
  | 'phone-down'
  | 'phone-down-filled'
  | 'phone-in'
  | 'phone-out'
  | 'pin'
  | 'pin-remove'
  | 'plan'
  | 'play'
  | 'play-circle'
  | 'plus'
  | 'plus-circle'
  | 'plus-circle-down'
  | 'plus-circle-filled'
  | 'plus-circle-up'
  | 'point-of-sale'
  | 'price-list'
  | 'print'
  | 'product'
  | 'product-add'
  | 'product-cost'
  | 'product-list'
  | 'product-reference'
  | 'product-remove'
  | 'product-return'
  | 'product-unavailable'
  | 'profile'
  | 'profile-filled'
  | 'question-circle'
  | 'question-circle-filled'
  | 'radio-control'
  | 'receipt'
  | 'receipt-dollar'
  | 'receipt-euro'
  | 'receipt-paid'
  | 'receipt-pound'
  | 'receipt-refund'
  | 'receipt-rupee'
  | 'receipt-yen'
  | 'receivables'
  | 'redo'
  | 'referral-code'
  | 'refresh'
  | 'remove-background'
  | 'replace'
  | 'replay'
  | 'reset'
  | 'return'
  | 'reward'
  | 'rocket'
  | 'rotate-left'
  | 'rotate-right'
  | 'sandbox'
  | 'save'
  | 'search'
  | 'search-add'
  | 'search-list'
  | 'search-recent'
  | 'search-resource'
  | 'select'
  | 'send'
  | 'settings'
  | 'share'
  | 'shield-check-mark'
  | 'shield-none'
  | 'shield-pending'
  | 'shield-person'
  | 'shipping-label'
  | 'shopcodes'
  | 'slideshow'
  | 'smiley-happy'
  | 'smiley-joy'
  | 'smiley-neutral'
  | 'smiley-sad'
  | 'social-ad'
  | 'social-post'
  | 'sort'
  | 'sort-ascending'
  | 'sort-descending'
  | 'sound'
  | 'split'
  | 'sports'
  | 'star'
  | 'star-filled'
  | 'star-list'
  | 'status'
  | 'status-active'
  | 'stop-circle'
  | 'store'
  | 'store-import'
  | 'store-managed'
  | 'store-online'
  | 'sun'
  | 'table'
  | 'table-masonry'
  | 'tablet'
  | 'target'
  | 'tax'
  | 'team'
  | 'text'
  | 'text-align-center'
  | 'text-align-left'
  | 'text-align-right'
  | 'text-block'
  | 'text-bold'
  | 'text-color'
  | 'text-font'
  | 'text-font-list'
  | 'text-grammar'
  | 'text-in-columns'
  | 'text-in-rows'
  | 'text-indent'
  | 'text-italic'
  | 'text-quote'
  | 'text-title'
  | 'text-underline'
  | 'text-with-image'
  | 'theme'
  | 'theme-edit'
  | 'theme-store'
  | 'theme-template'
  | 'three-d-environment'
  | 'thumbs-down'
  | 'thumbs-up'
  | 'tip-jar'
  | 'toggle-off'
  | 'toggle-on'
  | 'transaction'
  | 'transaction-fee-dollar'
  | 'transaction-fee-euro'
  | 'transaction-fee-pound'
  | 'transaction-fee-rupee'
  | 'transaction-fee-yen'
  | 'transfer'
  | 'transfer-in'
  | 'transfer-internal'
  | 'transfer-out'
  | 'undo'
  | 'unknown-device'
  | 'unlock'
  | 'upload'
  | 'variant'
  | 'variant-list'
  | 'video'
  | 'video-list'
  | 'view'
  | 'viewport-narrow'
  | 'viewport-short'
  | 'viewport-tall'
  | 'viewport-wide'
  | 'wallet'
  | 'wand'
  | 'watch'
  | 'wifi'
  | 'work'
  | 'work-list'
  | 'wrench'
  | 'x'
  | 'x-circle';

export interface AvatarProps
  extends Required<Pick<AvatarProps$1, 'initials' | 'src' | 'alt' | 'size'>> {
  size: Extract<
    AvatarProps$1['size'],
    'small-200' | 'small' | 'base' | 'large' | 'large-200'
  >;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
export type CallbackToggleEvent<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends ToggleEvent = ToggleEvent,
> = TEvent & {
  currentTarget: HTMLElementTagNameMap[TTagName];
};
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
export type CallbackErrorEventListener<
  TTagName extends keyof HTMLElementTagNameMap,
  TError extends Error = Error,
> =
  | (EventListener & {
      (
        event: CallbackEvent<TTagName> & {
          error: TError;
        },
      ): void;
    })
  | null;
export interface CallbackExtendableEvent<
  TTagName extends keyof HTMLElementTagNameMap,
> extends CallbackEvent<TTagName>,
    Pick<ExtendableEvent, 'waitUntil'> {}
export type CallbackExtendableEventListener<
  TTagName extends keyof HTMLElementTagNameMap,
> =
  | (EventListener & {
      (event: CallbackExtendableEvent<TTagName>): void;
    })
  | null;
export interface FieldReactProps<T extends keyof HTMLElementTagNameMap> {
  onInput?: ((event: CallbackEvent<T>) => void) | null;
  onChange?: ((event: CallbackEvent<T>) => void) | null;
  onFocus?: ((event: CallbackEvent<T>) => void) | null;
  onBlur?: ((event: CallbackEvent<T>) => void) | null;
}
/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}
/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
}

declare class Avatar extends PolarisCustomElement implements AvatarProps {
  initials: AvatarProps['initials'];
  src: AvatarProps['src'];
  size: AvatarProps['size'];
  alt: AvatarProps['alt'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$$]: Avatar;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$$]: ReactProps$$ & PreactBaseElementProps<Avatar>;
    }
  }
}

declare const tagName$$ = 's-avatar';
export interface ReactProps$$
  extends Partial<AvatarProps>,
    Pick<AvatarProps$1, 'id'> {
  onLoad?: () => void;
  onError?: () => void;
}

export interface IconProps
  extends Required<
    Pick<IconProps$1, 'type' | 'tone' | 'color' | 'size' | 'interestFor'>
  > {
  /**
   * Specifies the type of icon that will be displayed.
   */
  type: '' | IconType | 'empty';
  tone: Extract<
    IconProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
  size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

export interface BadgeProps
  extends Pick<BadgeProps$1, 'color' | 'icon' | 'size' | 'tone'> {
  color: Extract<BadgeProps$1['color'], 'base' | 'strong'>;
  icon: IconProps['type'] | '';
  size: Extract<BadgeProps$1['size'], 'base' | 'large' | 'large-100'>;
  tone: Extract<
    BadgeProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
}

declare abstract class BadgeBase
  extends PolarisCustomElement
  implements Pick<BadgeProps, 'color' | 'size'>
{
  color: BadgeProps['color'];
  size: BadgeProps['size'];
  abstract tone: string;
  abstract icon: string;
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare class Badge extends BadgeBase implements BadgeProps {
  icon: BadgeProps['icon'];
  tone: BadgeProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$_]: Badge;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$_]: ReactProps$_ & PreactBaseElementPropsWithChildren<Badge>;
    }
  }
}

declare const tagName$_ = 's-badge';
export interface ReactProps$_
  extends Partial<BadgeProps>,
    Pick<BadgeProps$1, 'id' | 'children'> {
  /**
   * The content of the Badge.
   */
  children?: ComponentChildren;
}

export type RequiredBannerProps = Required<BannerProps$1>;
export interface BannerProps
  extends Pick<
    RequiredBannerProps,
    'heading' | 'dismissible' | 'hidden' | 'tone'
  > {
  tone: Extract<
    RequiredBannerProps['tone'],
    'auto' | 'critical' | 'warning' | 'success' | 'info'
  >;
}

declare class Banner extends PolarisCustomElement implements BannerProps {
  heading: BannerProps['heading'];
  tone: BannerProps['tone'];
  hidden: BannerProps['hidden'];
  dismissible: BannerProps['dismissible'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$Z]: Banner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$Z]: Omit<BannerJSXProps, 'secondaryActions'> &
        PreactBaseElementPropsWithChildren<Banner>;
    }
  }
}

declare const tagName$Z = 's-banner';
export interface BannerJSXProps
  extends Partial<BannerProps>,
    Pick<BannerProps$1, 'id' | 'children'> {
  /**
   * The content of the Banner.
   */
  children?: ComponentChildren;
  /**
   * The secondary actions to display at the bottom of the Banner.
   *
   * Only Buttons with the `variant` of "secondary" or "auto" are permitted. A maximum of two `s-button` components are allowed.
   */
  secondaryActions?: ComponentChildren;
  onDismiss?: ((event: CallbackEvent<typeof tagName$Z>) => void) | null;
  onAfterHide?: ((event: CallbackEvent<typeof tagName$Z>) => void) | null;
}

export type MakeResponsive<T> = T | `@container${string}`;
/**
 * Makes a property's value potentially responsive.
 *
 * @example
 * type Example = {
 *   color: boolean;
 *   margin: string;
 *   padding: number;
 * }
 * type Result = MakeResponsivePick<Example, 'color' | 'margin' | 'padding'>;
 * // Result = {
 *   color: boolean | `@container${string}`;
 *   margin: string | `@container${string}`;
 *   padding: number | `@container${string}`;
 * }
 */
export type MakeResponsivePick<TType, TProperty extends keyof TType> = {
  [P in TProperty]: MakeResponsive<TType[P]>;
};

export type RequiredBoxProps = Required<BoxProps$1>;
export type BoxBorderRadii = Extract<
  RequiredBoxProps['borderRadius'],
  | 'none'
  | 'small-200'
  | 'small-100'
  | 'small'
  | 'base'
  | 'large'
  | 'large-100'
  | 'large-200'
>;
export type BoxBorderStyles = Extract<
  RequiredBoxProps['borderStyle'],
  'none' | 'solid' | 'dashed' | 'auto'
>;
export type ResponsiveBoxProps = MakeResponsivePick<
  RequiredBoxProps,
  | 'padding'
  | 'paddingBlock'
  | 'paddingBlockStart'
  | 'paddingBlockEnd'
  | 'paddingInline'
  | 'paddingInlineStart'
  | 'paddingInlineEnd'
  | 'display'
>;
export interface BoxProps
  extends Pick<
    RequiredBoxProps,
    | 'accessibilityLabel'
    | 'accessibilityRole'
    | 'accessibilityVisibility'
    | 'background'
    | 'blockSize'
    | 'border'
    | 'borderColor'
    | 'borderRadius'
    | 'borderStyle'
    | 'borderWidth'
    | 'inlineSize'
    | 'maxBlockSize'
    | 'maxInlineSize'
    | 'minBlockSize'
    | 'minInlineSize'
    | 'overflow'
  > {
  /**
   * Adjust the background of the component.
   *
   * @default 'transparent'
   */
  background: Extract<
    RequiredBoxProps['background'],
    'transparent' | 'base' | 'subdued' | 'strong'
  >;
  /**
   * Adjust the width of the border.
   *
   * @default '' - meaning no override
   */
  borderWidth:
    | MaybeAllValuesShorthandProperty<
        Extract<
          RequiredBoxProps['borderWidth'],
          'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'none'
        >
      >
    | Extract<RequiredBoxProps['borderWidth'], ''>;
  /**
   * Adjust the style of the border.
   *
   * @default '' - meaning no override
   */
  borderStyle:
    | MaybeAllValuesShorthandProperty<BoxBorderStyles>
    | Extract<RequiredBoxProps['borderStyle'], ''>;
  /**
   * Adjust the color of the border.
   *
   * @default '' - meaning no override
   */
  borderColor: Extract<
    RequiredBoxProps['borderColor'],
    'subdued' | 'base' | 'strong' | ''
  >;
  /**
   * Adjust the radius of the border.
   *
   * @default 'none'
   */
  borderRadius: MaybeAllValuesShorthandProperty<BoxBorderRadii>;
  /**
   * Adjust the padding of all edges.
   *
   * [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:
   *
   * - 4 values: `block-start inline-end block-end inline-start`
   * - 3 values: `block-start inline block-end`
   * - 2 values: `block inline`
   *
   * For example:
   * - `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
   * - `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
   * - `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
   * - `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
   *
   * A padding value of `auto` will use the default padding for the closest container that has had its usual padding removed.
   *
   * `padding` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.
   *
   * @default 'none'
   */
  padding: ResponsiveBoxProps['padding'];
  /**
   * Adjust the block-padding.
   *
   * - `large none` means block-start padding is `large`, block-end padding is `none`.
   *
   * This overrides the block value of `padding`.
   *
   * `paddingBlock` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlock: ResponsiveBoxProps['paddingBlock'];
  /**
   * Adjust the block-start padding.
   *
   * This overrides the block-start value of `paddingBlock`.
   *
   * `paddingBlockStart` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart: ResponsiveBoxProps['paddingBlockStart'];
  /**
   * Adjust the block-end padding.
   *
   * This overrides the block-end value of `paddingBlock`.
   *
   * `paddingBlockEnd` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd: ResponsiveBoxProps['paddingBlockEnd'];
  /**
   * Adjust the inline padding.
   *
   * - `large none` means inline-start padding is `large`, inline-end padding is `none`.
   *
   * This overrides the inline value of `padding`.
   *
   * `paddingInline` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInline: ResponsiveBoxProps['paddingInline'];
  /**
   * Adjust the inline-start padding.
   *
   * This overrides the inline-start value of `paddingInline`.
   *
   * `paddingInlineStart` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart: ResponsiveBoxProps['paddingInlineStart'];
  /**
   * Adjust the inline-end padding.
   *
   * This overrides the inline-end value of `paddingInline`.
   *
   * `paddingInlineEnd` also accepts a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported PaddingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd: ResponsiveBoxProps['paddingInlineEnd'];
  /**
   * Sets the outer [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) type of the component. The outer type sets a component's participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).
   *
   * - `auto` the component's initial value. The actual value depends on the component and context.
   * - `none` hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.
   *
   * @default 'auto'
   */
  display: ResponsiveBoxProps['display'];
  /**
   * Adjust the [block size](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).
   *
   * @default 'auto'
   */
  blockSize: SizeUnitsOrAuto;
  /**
   * Adjust the [minimum block size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size).
   *
   * @default '0'
   */
  minBlockSize: SizeUnits;
  /**
   * Adjust the [maximum block size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size).
   *
   * @default 'none'
   */
  maxBlockSize: SizeUnitsOrNone;
  /**
   * Adjust the [inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).
   *
   * @default 'auto'
   */
  inlineSize: SizeUnitsOrAuto;
  /**
   * Adjust the [minimum inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size).
   *
   * @default '0'
   */
  minInlineSize: SizeUnits;
  /**
   * Adjust the [maximum inline size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size).
   *
   * @default 'none'
   */
  maxInlineSize: SizeUnitsOrNone;
}

declare class BoxElement extends PolarisCustomElement implements BoxProps {
  constructor(renderImpl: RenderImpl);
  accessibilityRole: BoxProps['accessibilityRole'];
  background: BoxProps['background'];
  blockSize: BoxProps['blockSize'];
  minBlockSize: BoxProps['minBlockSize'];
  maxBlockSize: BoxProps['maxBlockSize'];
  inlineSize: BoxProps['inlineSize'];
  minInlineSize: BoxProps['minInlineSize'];
  maxInlineSize: BoxProps['maxInlineSize'];
  overflow: BoxProps['overflow'];
  padding: BoxProps['padding'];
  paddingBlock: BoxProps['paddingBlock'];
  paddingBlockStart: BoxProps['paddingBlockStart'];
  paddingBlockEnd: BoxProps['paddingBlockEnd'];
  paddingInline: BoxProps['paddingInline'];
  paddingInlineStart: BoxProps['paddingInlineStart'];
  paddingInlineEnd: BoxProps['paddingInlineEnd'];
  border: BoxProps['border'];
  borderWidth: BoxProps['borderWidth'];
  borderStyle: BoxProps['borderStyle'];
  borderColor: BoxProps['borderColor'];
  borderRadius: BoxProps['borderRadius'];
  accessibilityLabel: BoxProps['accessibilityLabel'];
  accessibilityVisibility: BoxProps['accessibilityVisibility'];
  display: BoxProps['display'];
}

declare class Box extends BoxElement implements BoxProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$Y]: Box;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$Y]: BoxJSXProps & PreactBaseElementPropsWithChildren<Box>;
    }
  }
}

declare const tagName$Y = 's-box';
export interface BoxJSXProps
  extends Partial<BoxProps>,
    Pick<BoxProps$1, 'id' | 'children'> {
  /**
   * The content of the Box.
   */
  children?: ComponentChildren;
}

export type ButtonOnlyProps = Extract<
  ButtonProps$1,
  {
    type?: unknown;
  }
>;
export type ButtonBaseProps = Required<
  Pick<
    ButtonOnlyProps,
    | 'accessibilityLabel'
    | 'disabled'
    | 'command'
    | 'commandFor'
    | 'icon'
    | 'interestFor'
    | 'lang'
    | 'loading'
    | 'type'
    | 'tone'
    | 'variant'
    | 'target'
    | 'href'
    | 'download'
    | 'inlineSize'
  >
>;
export interface ButtonProps extends ButtonBaseProps {
  tone: Extract<ButtonProps$1['tone'], 'neutral' | 'critical' | 'auto'>;
  icon: IconProps['type'];
}

export interface PreactOverlayControlProps
  extends Pick<InteractionProps, 'commandFor' | 'interestFor'> {
  /**
   * Sets the action the [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this clickable is activated.
   *
   * See the documentation of particular components for the actions they support.
   *
   * - `--auto`: a default action for the target component.
   * - `--show`: shows the target component.
   * - `--hide`: hides the target component.
   * - `--toggle`: toggles the target component.
   *
   * @default '--auto'
   */
  command: Extract<
    InteractionProps['command'],
    '--show' | '--hide' | '--toggle' | '--auto'
  >;
  /**
   * Sets the element the [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this clickable is activated.
   */
  commandFor: Extract<InteractionProps['commandFor'], string>;
  /**
   * Sets the element the [interestFor](https://open-ui.org/components/interest-invokers.explainer/#the-pitch-in-code) should act on when this clickable is activated.
   */
  interestFor: Extract<InteractionProps['interestFor'], string>;
}

declare const ButtonBase_base: (abstract new (
  renderImpl: Omit<RenderImpl, 'globalShadowCSS'>,
) => PolarisCustomElement & PreactOverlayControlProps) &
  Pick<typeof PolarisCustomElement, 'prototype' | 'observedAttributes'>;
declare abstract class ButtonBase<TTagName extends keyof HTMLElementTagNameMap>
  extends ButtonBase_base
  implements
    Pick<
      ButtonProps,
      | 'disabled'
      | 'loading'
      | 'target'
      | 'href'
      | 'download'
      | 'type'
      | 'accessibilityLabel'
      | 'inlineSize'
    >
{
  disabled: ButtonProps['disabled'];
  loading: ButtonProps['loading'];
  target: ButtonProps['target'];
  href: ButtonProps['href'];
  download: ButtonProps['download'];
  type: ButtonProps['type'];
  accessibilityLabel: ButtonProps['accessibilityLabel'];
  inlineSize: ButtonProps['inlineSize'];
  abstract icon: string;
  abstract variant: string;
  abstract tone: string;
  constructor(renderImpl: RenderImpl);
}

declare class Button
  extends ButtonBase<typeof tagName$X>
  implements ButtonProps
{
  icon: ButtonProps['icon'];
  variant: ButtonProps['variant'];
  tone: ButtonProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$X]: Button;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$X]: ButtonJSXProps & PreactBaseElementPropsWithChildren<Button>;
    }
  }
}

declare const tagName$X = 's-button';
export interface ButtonJSXProps
  extends Partial<ButtonProps>,
    Pick<ButtonProps$1, 'id' | 'children'> {
  /**
   * The content of the Button.
   */
  children?: ComponentChildren;
  onClick?: ((event: CallbackEvent<typeof tagName$X>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$X>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$X>) => void) | null;
}

export interface ButtonGroupProps
  extends Required<Pick<ButtonGroupProps$1, 'gap' | 'accessibilityLabel'>> {}

declare abstract class ButtonGroupBase
  extends PolarisCustomElement
  implements Pick<ButtonGroupProps, 'gap' | 'accessibilityLabel'>
{
  gap: ButtonGroupProps['gap'];
  accessibilityLabel: ButtonGroupProps['accessibilityLabel'];
  constructor(renderImpl: RenderImpl);
}

declare class ButtonGroup extends ButtonGroupBase implements ButtonGroupProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$W]: ButtonGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$W]: Omit<
        ButtonGroupJSXProps,
        'primaryAction' | 'secondaryActions'
      > &
        PreactBaseElementPropsWithChildren<ButtonGroup>;
    }
  }
}

declare const tagName$W = 's-button-group';
export interface ButtonGroupJSXProps
  extends Partial<ButtonGroupProps>,
    Pick<ButtonGroupProps$1, 'id' | 'children'> {
  /**
   * The content of the ButtonGroup.
   */
  children?: ComponentChildren;
  /**
   * The primary action button for the group.
   * Accepts a single Button element with a `variant` of `primary`.
   * Cannot be used when gap="none".
   */
  primaryAction?: ComponentChildren;
  /**
   * Secondary action buttons for the group.
   * Accepts Button or PressButton elements with a `variant` of `secondary` or `auto`.
   */
  secondaryActions?: ComponentChildren;
}

declare const internals$4: unique symbol;
export type PreactInputProps = Required<
  Pick<TextFieldProps$1, 'disabled' | 'id' | 'name' | 'value'>
>;
declare class PreactInputElement
  extends PolarisCustomElement
  implements PreactInputProps
{
  static formAssociated: boolean;
  /** @private */
  [internals$4]: ElementInternals;
  disabled: PreactInputProps['disabled'];
  id: PreactInputProps['id'];
  name: PreactInputProps['name'];
  get value(): PreactInputProps['value'];
  set value(value: PreactInputProps['value']);
  constructor(renderImpl: RenderImpl);
}

export interface PreactCheckboxProps
  extends Required<
    Pick<
      CheckboxProps$1,
      | 'accessibilityLabel'
      | 'checked'
      | 'defaultChecked'
      | 'details'
      | 'error'
      | 'label'
      | 'required'
      | 'name'
      | 'disabled'
    >
  > {
  value: Required<CheckboxProps$1>['value'];
}
declare class PreactCheckboxElement
  extends PreactInputElement
  implements PreactCheckboxProps
{
  get checked(): boolean;
  set checked(checked: PreactCheckboxProps['checked']);
  /**
   * The value used in form data when the checkbox is checked.
   */
  get value(): string;
  set value(value: string);
  defaultChecked: PreactCheckboxProps['defaultChecked'];
  accessibilityLabel: PreactCheckboxProps['accessibilityLabel'];
  details: PreactCheckboxProps['details'];
  error: PreactCheckboxProps['error'];
  label: PreactCheckboxProps['label'];
  required: PreactCheckboxProps['required'];
  /** @private */
  formResetCallback(): void;
  static get observedAttributes(): string[];
  constructor(renderImpl: RenderImpl);
}

export interface CheckboxProps extends PreactCheckboxProps {
  indeterminate: Required<CheckboxProps$1>['indeterminate'];
  defaultIndeterminate: Required<CheckboxProps$1>['defaultIndeterminate'];
}

declare class Checkbox extends PreactCheckboxElement implements CheckboxProps {
  get indeterminate(): CheckboxProps['indeterminate'];
  set indeterminate(indeterminate: CheckboxProps['indeterminate']);
  defaultIndeterminate: CheckboxProps['defaultIndeterminate'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$V]: Checkbox;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$V]: CheckboxJSXProps & PreactBaseElementProps<Checkbox>;
    }
  }
}

declare const tagName$V = 's-checkbox';
export interface CheckboxJSXProps
  extends Partial<CheckboxProps>,
    Pick<CheckboxProps$1, 'id'> {
  onChange?: ((event: CallbackEvent<typeof tagName$V>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$V>) => void) | null;
}

export interface ChipProps
  extends Required<Pick<ChipProps$2, 'color' | 'accessibilityLabel'>> {}

declare class Chip extends PolarisCustomElement implements ChipProps {
  color: ChipProps['color'];
  accessibilityLabel: ChipProps['accessibilityLabel'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$U]: Chip;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$U]: Omit<ChipJSXProps, 'graphic'> &
        PreactBaseElementPropsWithChildren<Chip>;
    }
  }
}

declare const tagName$U = 's-chip';
export interface ChipJSXProps
  extends Partial<ChipProps>,
    Pick<ChipProps$2, 'id' | 'children'> {
  /**
   * The content of the Chip.
   */
  children?: ComponentChildren;
  /**
   * The graphic to display in the chip.
   *
   * Only accepts `Icon` components.
   */
  graphic?: ComponentChildren;
}

export interface ChoiceProps
  extends Required<
    Pick<
      ChoiceProps$1,
      | 'selected'
      | 'defaultSelected'
      | 'disabled'
      | 'accessibilityLabel'
      | 'value'
    >
  > {}

declare class Choice extends PolarisCustomElement implements ChoiceProps {
  disabled: ChoiceProps['disabled'];
  get selected(): boolean;
  set selected(selected: ChoiceProps['selected']);
  value: ChoiceProps['value'];
  accessibilityLabel: ChoiceProps['accessibilityLabel'];
  defaultSelected: ChoiceProps['defaultSelected'];
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$T]: Choice;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$T]: Omit<ChoiceJSXProps, 'details' | 'secondaryContent'> &
        PreactBaseElementPropsWithChildren<Choice>;
    }
  }
}

declare const tagName$T = 's-choice';
export interface ChoiceJSXProps
  extends Partial<ChoiceProps>,
    Pick<ChoiceProps$1, 'id' | 'children' | 'details'> {
  /**
   * Content to use as the choice label.
   *
   * The label is produced by extracting and
   * concatenating the text nodes from the provided content;
   * any markup or element structure is ignored.
   */
  children?: ComponentChildren;
  /**
   * Additional text to provide context or guidance for the input.
   *
   * This text is displayed along with the input and its label
   * to offer more information or instructions to the user.
   *
   * @implementation this content should be linked to the input with an `aria-describedby` attribute.
   */
  details?: ComponentChildren;
  /**
   * Additional content to display below the choice label.
   * Can include rich content like TextFields, Buttons, or other interactive components.
   * Event handlers on React components are preserved.
   */
  secondaryContent?: ComponentChildren;
}

export interface ChoiceListProps
  extends Required<
    Pick<
      ChoiceListProps$1,
      | 'details'
      | 'disabled'
      | 'error'
      | 'label'
      | 'labelAccessibilityVisibility'
      | 'multiple'
      | 'name'
      | 'values'
    >
  > {}

declare const internals$3: unique symbol;
declare class BaseClass$2 extends PolarisCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals$3]: ElementInternals;
}
declare class ChoiceList extends BaseClass$2 implements ChoiceListProps {
  disabled: ChoiceListProps['disabled'];
  name: ChoiceListProps['name'];
  error: ChoiceListProps['error'];
  details: ChoiceListProps['details'];
  multiple: ChoiceListProps['multiple'];
  label: ChoiceListProps['label'];
  labelAccessibilityVisibility: ChoiceListProps['labelAccessibilityVisibility'];
  get values(): ChoiceListProps['values'];
  set values(values: ChoiceListProps['values']);
  /** @private */
  formResetCallback(): void;
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$S]: ChoiceList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$S]: ChoiceListJSXProps &
        PreactBaseElementPropsWithChildren<ChoiceList>;
    }
  }
}

declare const tagName$S = 's-choice-list';
export interface ChoiceListJSXProps
  extends Partial<ChoiceListProps>,
    Pick<ChoiceListProps$1, 'id' | 'children'> {
  /**
   * The choices a user can select from.
   *
   * Accepts `Choice` components.
   */
  children?: ComponentChildren;
  onChange?: ((event: CallbackEvent<typeof tagName$S>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$S>) => void) | null;
}

export type ClickableBaseProps = Required<
  Pick<
    ClickableProps$1,
    | 'command'
    | 'commandFor'
    | 'interestFor'
    | 'disabled'
    | 'download'
    | 'href'
    | 'lang'
    | 'loading'
    | 'overflow'
    | 'target'
    | 'type'
  >
>;
export interface ClickableProps
  extends Required<BoxProps>,
    ClickableBaseProps {}

declare const Clickable_base: (abstract new (
  renderImpl: _shopify_admin_web_component_foundations.RenderImpl,
) => BoxElement & PreactOverlayControlProps) &
  Pick<typeof BoxElement, 'prototype' | 'observedAttributes'>;
declare class Clickable extends Clickable_base implements ClickableProps {
  disabled: ClickableProps['disabled'];
  loading: ClickableProps['loading'];
  target: ClickableProps['target'];
  href: ClickableProps['href'];
  download: ClickableProps['download'];
  type: ClickableProps['type'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$R]: Clickable;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$R]: ClickableJSXProps &
        PreactBaseElementPropsWithChildren<Clickable>;
    }
  }
}

declare const tagName$R = 's-clickable';
export interface ClickableJSXProps
  extends Partial<ClickableProps>,
    Pick<ClickableProps$1, 'id' | 'children'> {
  /**
   * The content of the Clickable.
   */
  children?: ComponentChildren;
  onClick?: ((event: CallbackEvent<typeof tagName$R>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$R>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$R>) => void) | null;
}

export interface ClickableChipProps
  extends Required<
    Pick<
      ClickableChipProps$1,
      | 'color'
      | 'accessibilityLabel'
      | 'removable'
      | 'hidden'
      | 'href'
      | 'disabled'
      | 'command'
      | 'commandFor'
      | 'interestFor'
    >
  > {}

declare const ClickableChip_base: (abstract new (
  renderImpl: Omit<
    _shopify_admin_web_component_foundations.RenderImpl,
    'globalShadowCSS'
  >,
) => PolarisCustomElement & PreactOverlayControlProps) &
  Pick<typeof PolarisCustomElement, 'prototype' | 'observedAttributes'>;
declare class ClickableChip
  extends ClickableChip_base
  implements ClickableChipProps
{
  color: ClickableChipProps['color'];
  accessibilityLabel: ClickableChipProps['accessibilityLabel'];
  removable: ClickableChipProps['removable'];
  hidden: ClickableChipProps['hidden'];
  disabled: ClickableChipProps['disabled'];
  href: ClickableChipProps['href'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$Q]: ClickableChip;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$Q]: Omit<ClickableChipJSXProps, 'graphic'> &
        PreactBaseElementPropsWithChildren<ClickableChip>;
    }
  }
}

declare const tagName$Q = 's-clickable-chip';
export interface ClickableChipJSXProps
  extends Partial<ClickableChipProps>,
    Pick<ClickableChipProps$1, 'id' | 'children'> {
  /**
   * The content of the clickable chip.
   */
  children?: ComponentChildren;
  /**
   * The graphic to display in the clickable chip.
   *
   * Only accepts `Icon` components.
   */
  graphic?: ComponentChildren;
  onClick?: ((event: CallbackEvent<typeof tagName$Q>) => void) | null;
  onRemove?: ((event: CallbackEvent<typeof tagName$Q>) => void) | null;
  onAfterHide?: ((event: CallbackEvent<typeof tagName$Q>) => void) | null;
}

export type PreactFieldProps<Autocomplete extends string = string> =
  PreactInputProps &
    Required<
      Pick<
        TextFieldProps$1,
        | 'defaultValue'
        | 'details'
        | 'error'
        | 'label'
        | 'labelAccessibilityVisibility'
        | 'placeholder'
        | 'readOnly'
        | 'required'
      >
    > & {
      /**
       * A hint as to the intended content of the field.
       *
       * When set to `on` (the default), this property indicates that the field should support
       * autofill, but you do not have any more semantic information on the intended
       * contents.
       *
       * When set to `off`, you are indicating that this field contains sensitive
       * information, or contents that are never saved, like one-time codes.
       *
       * Alternatively, you can provide value which describes the
       * specific data you would like to be entered into this field during autofill.
       *
       * @see Learn more about the set of {@link https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-detail-tokens|autocomplete values} supported in browsers.
       *
       * @default 'tel' for PhoneField
       * @default 'email' for EmailField
       * @default 'url' for URLField
       * @default 'on' for everything else
       */
      autocomplete: Autocomplete;
    };
declare class PreactFieldElement<Autocomplete extends string = string>
  extends PreactInputElement
  implements PreactFieldProps<Autocomplete>
{
  autocomplete: PreactFieldProps<Autocomplete>['autocomplete'];
  defaultValue: PreactFieldProps['defaultValue'];
  details: PreactFieldProps['details'];
  error: PreactFieldProps['error'];
  label: PreactFieldProps['label'];
  labelAccessibilityVisibility: PreactFieldProps['labelAccessibilityVisibility'];
  placeholder: PreactFieldProps['placeholder'];
  readOnly: PreactFieldProps['readOnly'];
  required: PreactFieldProps['required'];
  /**
   * Global keyboard event handlers for things like key bindings typically
   * ignore keystrokes originating from within input elements. Unfortunately,
   * these never account for a Custom Element being the input element.
   *
   * To fix this, we spoof getAttribute & hasAttribute to make a PreactFieldElement
   * appear as a contentEditable "input" when it contains a focused input element.
   * @private technically not private, but we don't want to expose this as public API
   */
  getAttribute(qualifiedName: string): string | null;
  /**
   * @private technically not private, but we don't want to expose this as public API
   */
  hasAttribute(qualifiedName: string): boolean;
  /**
   * Checks if the shadow tree contains a focused input (input, textarea, select, <x contentEditable>).
   * Note: this does _not_ return true for focussed non-field form elements like buttons.
   * @private
   */
  get isContentEditable(): boolean;
  /** @private */
  formResetCallback(): void;
  /** @private */
  connectedCallback(): void;
  constructor(renderImpl: RenderImpl);
}

export type ColorFieldProps = PreactFieldProps<
  Required<ColorFieldProps$1>['autocomplete']
> &
  Required<Pick<ColorFieldProps$1, 'alpha' | 'value' | 'defaultValue'>>;

declare class ColorField
  extends PreactFieldElement<ColorFieldProps['autocomplete']>
  implements ColorFieldProps
{
  alpha: ColorFieldProps['alpha'];
  get value(): string;
  set value(value: string);
  /** @private */
  formResetCallback(): void;
  constructor();
  /** @private */
  setInternalValue(value: string, normalize: boolean): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$P]: ColorField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$P]: ColorFieldJSXProps & PreactBaseElementProps<ColorField>;
    }
  }
}

declare const tagName$P = 's-color-field';
export interface ColorFieldJSXProps
  extends Partial<Omit<ColorFieldProps, 'accessory'>>,
    Pick<ColorFieldProps$1, 'id' | 'alpha' | 'value' | 'defaultValue'>,
    FieldReactProps<typeof tagName$P> {
  onInput?: (event: CallbackEvent<typeof tagName$P>) => void;
  onChange?: (event: CallbackEvent<typeof tagName$P>) => void;
}

export interface ColorPickerProps
  extends Required<
    Pick<ColorPickerProps$1, 'id' | 'alpha' | 'value' | 'defaultValue' | 'name'>
  > {}

declare const internals$2: unique symbol;
declare class BaseClass$1 extends PolarisCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals$2]: ElementInternals;
}
declare class ColorPicker extends BaseClass$1 implements ColorPickerProps {
  alpha: boolean;
  name: string;
  defaultValue: string;
  get value(): string;
  set value(value: string);
  formResetCallback(): void;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$O]: ColorPicker;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$O]: ColorPickerJSXProps & PreactBaseElementProps<ColorPicker>;
    }
  }
}

declare const tagName$O = 's-color-picker';
export interface ColorPickerJSXProps
  extends Partial<ColorPickerProps>,
    Pick<
      ColorPickerProps$1,
      'id' | 'alpha' | 'value' | 'defaultValue' | 'name'
    > {
  onInput?: (event: CallbackEvent<typeof tagName$O>) => void | null;
  onChange?: (event: CallbackEvent<typeof tagName$O>) => void | null;
}

export interface DateFieldProps
  extends PreactFieldProps<DateAutocompleteField>,
    Required<
      Pick<
        DateFieldProps$1,
        | 'allow'
        | 'allowDays'
        | 'disallow'
        | 'disallowDays'
        | 'value'
        | 'defaultValue'
        | 'view'
        | 'defaultView'
      >
    > {}

declare class DateField
  extends PreactFieldElement<DateFieldProps['autocomplete']>
  implements DateFieldProps
{
  allow: DateFieldProps['allow'];
  disallow: DateFieldProps['disallow'];
  allowDays: DateFieldProps['allowDays'];
  disallowDays: DateFieldProps['disallowDays'];
  set view(view: string);
  get view(): string;
  defaultView: DateFieldProps['defaultView'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$N]: DateField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$N]: DateFieldJSXProps & PreactBaseElementProps<DateField>;
    }
  }
}

declare const tagName$N = 's-date-field';
export interface DateFieldJSXProps
  extends Partial<DateFieldProps>,
    Pick<DateFieldProps$1, 'id'> {
  onBlur?: ((event: CallbackEvent<typeof tagName$N>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName$N>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$N>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$N>) => void) | null;
  onInvalid?: ((event: CallbackEvent<typeof tagName$N>) => void) | null;
  onViewChange?: ((event: CallbackEvent<typeof tagName$N>) => void) | null;
}

export interface DatePickerProps
  extends Required<
    Pick<
      DatePickerProps$1,
      | 'defaultView'
      | 'view'
      | 'allow'
      | 'disallow'
      | 'allowDays'
      | 'disallowDays'
      | 'value'
      | 'defaultValue'
      | 'name'
    >
  > {
  type: Extract<DatePickerProps$1['type'], 'single' | 'range'>;
}

declare const internals$1: unique symbol;
declare const dirtyStateSymbol: unique symbol;
declare class BaseClass extends PolarisCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals$1]: ElementInternals;
}
declare class DatePicker extends BaseClass implements DatePickerProps {
  defaultView: string;
  set view(view: string);
  get view(): string;
  allow: DatePickerProps['allow'];
  disallow: DatePickerProps['disallow'];
  allowDays: DatePickerProps['allowDays'];
  disallowDays: DatePickerProps['disallowDays'];
  type: DatePickerProps['type'];
  defaultValue: DatePickerProps['defaultValue'];
  name: DatePickerProps['name'];
  set value(value: string);
  get value(): string;
  /** @private */
  [dirtyStateSymbol]: boolean;
  /** @private */
  formResetCallback(): void;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$M]: DatePicker;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$M]: DatePickerJSXProps & PreactBaseElementProps<DatePicker>;
    }
  }
}

declare const tagName$M = 's-date-picker';
export interface DatePickerJSXProps
  extends Partial<DatePickerProps>,
    Pick<DatePickerProps$1, 'id'> {
  onViewChange?: ((event: CallbackEvent<typeof tagName$M>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$M>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$M>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$M>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName$M>) => void) | null;
}

export interface DividerProps
  extends Pick<DividerProps$1, 'direction' | 'color'> {
  direction: Extract<DividerProps$1['direction'], 'inline' | 'block'>;
  color: Extract<DividerProps$1['color'], 'base' | 'strong'>;
}

declare class Divider extends PolarisCustomElement implements DividerProps {
  direction: DividerProps['direction'];
  color: DividerProps['color'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$L]: Divider;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$L]: DividerJSXProps & PreactBaseElementProps<Divider>;
    }
  }
}

declare const tagName$L = 's-divider';
export interface DividerJSXProps
  extends Partial<DividerProps>,
    Pick<DividerProps$1, 'id'> {}

export interface DropZoneProps
  extends Required<
    Pick<
      DropZoneProps$1,
      | 'accept'
      | 'accessibilityLabel'
      | 'disabled'
      | 'files'
      | 'name'
      | 'error'
      | 'label'
      | 'labelAccessibilityVisibility'
      | 'multiple'
      | 'required'
      | 'value'
    >
  > {}

export type ReplaceType<TType, TFrom, TTo> = Exclude<TType, TFrom> | TTo;

declare const setFiles: unique symbol;

declare const internals: unique symbol;
declare const getFileInput: unique symbol;
declare abstract class DropZoneBase extends PolarisCustomElement {
  static formAssociated: boolean;
  accept: DropZoneProps['accept'];
  accessibilityLabel: DropZoneProps['accessibilityLabel'];
  disabled: DropZoneProps['disabled'];
  error: DropZoneProps['error'];
  label: DropZoneProps['label'];
  labelAccessibilityVisibility: DropZoneProps['labelAccessibilityVisibility'];
  multiple: DropZoneProps['multiple'];
  name: DropZoneProps['name'];
  required: DropZoneProps['required'];
  get value(): string;
  /** This sets the input value for a file type, which cannot be set programatically, so it can only be reset. */
  set value(value: '' | null);
  get files(): File[];
  set files(files: File[]);
  /** @private */
  [setFiles](files: File[]): void;
  /** @private */
  [getFileInput](): ReplaceType<
    Element | null | undefined,
    Element,
    HTMLInputElement
  >;

  /** @private */
  formResetCallback(): void;
  /** @private */
  [internals]: ElementInternals;
  constructor(renderImpl: RenderImpl);
}

declare class DropZone extends DropZoneBase implements DropZoneProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$K]: DropZone;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$K]: DropZoneJSXProps &
        PreactBaseElementPropsWithChildren<DropZone>;
    }
  }
}

declare const tagName$K = 's-drop-zone';
export interface DropZoneJSXProps
  extends Partial<DropZoneProps>,
    Pick<DropZoneProps$1, 'id'> {
  /**
   * Content to include inside the DropZone container
   */
  children?: ComponentChildren;
  onChange?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
  onDropRejected?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
}

export type EmailFieldProps = PreactFieldProps<
  Required<EmailFieldProps$1>['autocomplete']
> &
  Required<Pick<EmailFieldProps$1, 'maxLength' | 'minLength'>>;

declare class EmailField
  extends PreactFieldElement<EmailFieldProps['autocomplete']>
  implements EmailFieldProps
{
  autocomplete: EmailFieldProps['autocomplete'];
  maxLength: EmailFieldProps['maxLength'];
  minLength: EmailFieldProps['minLength'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$J]: EmailField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$J]: EmailFieldJSXProps & PreactBaseElementProps<EmailField>;
    }
  }
}

declare const tagName$J = 's-email-field';
export interface EmailFieldJSXProps
  extends Partial<Omit<EmailFieldProps, 'accessory'>>,
    Pick<EmailFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$J> {}

export type RequiredAlignedProps = Required<GridProps$1>;
export type ResponsiveGridProps = MakeResponsivePick<
  RequiredAlignedProps,
  'rowGap' | 'columnGap' | 'gap' | 'gridTemplateColumns' | 'gridTemplateRows'
>;
export interface GridProps
  extends BoxProps,
    Required<
      Pick<
        GridProps$1,
        | 'alignItems'
        | 'justifyItems'
        | 'placeItems'
        | 'alignContent'
        | 'justifyContent'
        | 'placeContent'
      >
    > {
  /**
   * Aligns the grid items along the block axis.
   *
   * @default '' - meaning no override
   */
  alignItems: AlignItemsKeyword | '';
  /**
   * Aligns the grid items along the inline axis.
   *
   * @default '' - meaning no override
   */
  justifyItems: JustifyItemsKeyword | '';
  /**
   * A shorthand property for `justify-items` and `align-items`.
   *
   * @default 'normal normal'
   */
  placeItems: `${AlignItemsKeyword} ${JustifyItemsKeyword}` | AlignItemsKeyword;
  /**
   * Aligns the grid along the block axis.
   *
   * This overrides the block value of `placeContent`.
   *
   * @default '' - meaning no override
   */
  alignContent: AlignContentKeyword | '';
  /**
   * Aligns the grid along the inline axis.
   *
   * This overrides the inline value of `placeContent`.
   *
   * @default '' - meaning no override
   */
  justifyContent: JustifyContentKeyword | '';
  /**
   * A shorthand property for `justify-content` and `align-content`.
   *
   * @default 'normal normal'
   */
  placeContent:
    | `${AlignContentKeyword} ${JustifyContentKeyword}`
    | AlignContentKeyword;
  /**
   * Adjust spacing between elements.
   *
   * `gap` can either accept:
   * - a single [SpacingKeyword](https://shopify.dev/docs/api/app-home/using-polaris-components#scale) value applied to both axes (e.g. `large-100`)
   * - OR a pair of values (eg `large-100 large-500`) can be used to set the inline and block axes respectively
   * - OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.
   *
   * @default 'none'
   */
  gap: ResponsiveGridProps['gap'];
  /**
   * Adjust spacing between elements in the block axis.
   *
   * This overrides the row value of `gap`.
   * `rowGap` either accepts:
   * - a single [SpacingKeyword](https://shopify.dev/docs/api/app-home/using-polaris-components#scale) value (e.g. `large-100`)
   * - OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  rowGap: ResponsiveGridProps['rowGap'];
  /**
   * Adjust spacing between elements in the inline axis.
   *
   * This overrides the column value of `gap`.
   * `columnGap` either accepts:
   * - a single [SpacingKeyword](https://shopify.dev/docs/api/app-home/using-polaris-components#scale) value (e.g. `large-100`)
   * - OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  columnGap: ResponsiveGridProps['columnGap'];
  /**
   * Define columns and specify their size.
   * `gridTemplateColumns` either accepts:
   * - [track sizing values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#fixed_and_flexible_track_sizes) (e.g. `1fr auto`)
   * - OR [responsive values](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported track sizing values as a query value.
   *
   * @default 'none'
   */
  gridTemplateColumns: ResponsiveGridProps['gridTemplateColumns'];
  /**
   * Define rows and specify their size.
   * `gridTemplateRows` either accepts:
   * - [track sizing values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#fixed_and_flexible_track_sizes) (e.g. `1fr auto`)
   * - OR [responsive values](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported track sizing values as a query value.
   *
   * @default 'none'
   */
  gridTemplateRows: ResponsiveGridProps['gridTemplateRows'];
}

declare class Grid extends BoxElement implements GridProps {
  constructor();
  gridTemplateColumns: GridProps['gridTemplateColumns'];
  gridTemplateRows: GridProps['gridTemplateRows'];
  justifyItems: GridProps['justifyItems'];
  alignItems: GridProps['alignItems'];
  placeItems: GridProps['placeItems'];
  justifyContent: GridProps['justifyContent'];
  alignContent: GridProps['alignContent'];
  placeContent: GridProps['placeContent'];
  gap: GridProps['gap'];
  rowGap: GridProps['rowGap'];
  columnGap: GridProps['columnGap'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$I]: Grid;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$I]: GridJSXProps & PreactBaseElementPropsWithChildren<Grid>;
    }
  }
}

declare const tagName$I = 's-grid';
export interface GridJSXProps
  extends Partial<GridProps>,
    Pick<GridProps$1, 'id' | 'children'> {
  /**
   * The content of the Grid.
   */
  children?: ComponentChildren;
}

export type RequiredGridItemProps = Required<GridItemProps$1>;
export interface GridItemProps
  extends BoxProps,
    Required<Pick<GridItemProps$1, 'gridColumn' | 'gridRow'>> {
  gridColumn: RequiredGridItemProps['gridColumn'];
  gridRow: RequiredGridItemProps['gridRow'];
}

declare class GridItem extends BoxElement implements GridItemProps {
  gridColumn: GridItemProps['gridColumn'];
  gridRow: GridItemProps['gridRow'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$H]: GridItem;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$H]: GridItemJSXProps &
        PreactBaseElementPropsWithChildren<GridItem>;
    }
  }
}

declare const tagName$H = 's-grid-item';
export interface GridItemJSXProps
  extends Partial<GridItemProps>,
    Pick<GridItemProps$1, 'id' | 'children'> {
  /**
   * The content of the GridItem.
   */
  children?: ComponentChildren;
}

export interface HeadingProps
  extends Required<
    Pick<
      HeadingProps$1,
      'accessibilityRole' | 'accessibilityVisibility' | 'lineClamp'
    >
  > {}

declare abstract class HeadingBase
  extends PolarisCustomElement
  implements
    Pick<
      HeadingProps,
      'accessibilityRole' | 'accessibilityVisibility' | 'lineClamp'
    >
{
  accessibilityRole: HeadingProps['accessibilityRole'];
  lineClamp: HeadingProps['lineClamp'];
  accessibilityVisibility: HeadingProps['accessibilityVisibility'];
  constructor(renderImpl: RenderImpl);
}

declare class Heading extends HeadingBase implements HeadingProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$G]: Heading;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$G]: HeadingJSXProps &
        PreactBaseElementPropsWithChildren<Heading>;
    }
  }
}

declare const tagName$G = 's-heading';
export interface HeadingJSXProps
  extends Partial<HeadingProps>,
    Pick<HeadingProps$1, 'id' | 'children'> {
  /**
   * The content of the Heading.
   */
  children?: ComponentChildren;
}

declare abstract class IconBase
  extends PolarisCustomElement
  implements Pick<IconProps, 'color' | 'size' | 'interestFor'>
{
  color: IconProps['color'];
  size: IconProps['size'];
  interestFor: IconProps['interestFor'];
  abstract tone: string;
  abstract type: string;
  constructor(renderImpl: RenderImpl);
}

declare class Icon extends IconBase implements IconProps {
  tone: IconProps['tone'];
  type: IconProps['type'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$F]: Icon;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$F]: IconJSXProps & PreactBaseElementProps<Icon>;
    }
  }
}

declare const tagName$F = 's-icon';
export interface IconJSXProps
  extends Partial<IconProps>,
    Pick<IconProps$1, 'id'> {}

export interface ImageProps
  extends Required<
      Pick<
        ImageProps$1,
        | 'alt'
        | 'loading'
        | 'src'
        | 'accessibilityRole'
        | 'inlineSize'
        | 'srcSet'
        | 'sizes'
        | 'aspectRatio'
        | 'objectFit'
      >
    >,
    Required<
      Pick<
        BoxProps,
        | 'border'
        | 'borderColor'
        | 'borderRadius'
        | 'borderStyle'
        | 'borderWidth'
      >
    > {}

declare class Image extends PolarisCustomElement implements ImageProps {
  src: ImageProps['src'];
  srcSet: ImageProps['srcSet'];
  sizes: ImageProps['sizes'];
  alt: ImageProps['alt'];
  aspectRatio: ImageProps['aspectRatio'];
  objectFit: ImageProps['objectFit'];
  loading: ImageProps['loading'];
  accessibilityRole: ImageProps['accessibilityRole'];
  inlineSize: ImageProps['inlineSize'];
  border: ImageProps['border'];
  borderWidth: ImageProps['borderWidth'];
  borderStyle: ImageProps['borderStyle'];
  borderColor: ImageProps['borderColor'];
  borderRadius: ImageProps['borderRadius'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$E]: Image;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$E]: ImageJSXProps & PreactBaseElementProps<Image>;
    }
  }
}

declare const tagName$E = 's-image';
export interface ImageJSXProps
  extends Partial<ImageProps>,
    Pick<ImageProps$1, 'id'> {
  onError?: ((event: CallbackEvent<typeof tagName$E>) => void) | null;
  onLoad?: ((event: CallbackEvent<typeof tagName$E>) => void) | null;
}

export type RequiredLinkProps = Required<LinkProps$1>;
export type LinkBaseProps = Required<
  Pick<
    LinkProps$1,
    | 'accessibilityLabel'
    | 'command'
    | 'commandFor'
    | 'interestFor'
    | 'download'
    | 'href'
    | 'lang'
    | 'target'
    | 'tone'
  >
>;
export interface LinkProps extends LinkBaseProps {
  tone: Extract<RequiredLinkProps['tone'], 'auto' | 'neutral' | 'critical'>;
}

declare const LinkBase_base: (abstract new (
  renderImpl: Omit<RenderImpl, 'globalShadowCSS'>,
) => PolarisCustomElement & PreactOverlayControlProps) &
  Pick<typeof PolarisCustomElement, 'prototype' | 'observedAttributes'>;
declare abstract class LinkBase<TTagName extends keyof HTMLElementTagNameMap>
  extends LinkBase_base
  implements
    Pick<
      LinkProps,
      'accessibilityLabel' | 'href' | 'target' | 'download' | 'lang'
    >
{
  accessibilityLabel: LinkProps['accessibilityLabel'];
  href: LinkProps['href'];
  target: LinkProps['target'];
  download: LinkProps['download'];
  lang: LinkProps['lang'];
  abstract tone: string;
  constructor(renderImpl: RenderImpl);
}

declare class Link extends LinkBase<typeof tagName$D> implements LinkProps {
  tone: LinkProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$D]: Link;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$D]: LinkJSXProps & PreactBaseElementPropsWithChildren<Link>;
    }
  }
}

declare const tagName$D = 's-link';
export interface LinkJSXProps
  extends Partial<LinkProps>,
    Pick<LinkProps$1, 'id' | 'lang' | 'children'> {
  /**
   * The content of the Link.
   */
  children?: ComponentChildren;
  onClick?: ((event: CallbackEvent<typeof tagName$D>) => void) | null;
}

export interface ListItemProps extends ListItemProps$1 {}

declare class ListItem extends PolarisCustomElement implements ListItemProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$C]: ListItem;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$C]: ListItemJSXProps &
        PreactBaseElementPropsWithChildren<ListItem>;
    }
  }
}

declare const tagName$C = 's-list-item';
export interface ListItemJSXProps
  extends Partial<ListItemProps>,
    Pick<ListItemProps$1, 'id' | 'children'> {
  /**
   * The content of the ListItem.
   */
  children?: ComponentChildren;
}

export interface MenuProps
  extends Required<Pick<MenuProps$1, 'id' | 'accessibilityLabel'>> {}

/**
 * Shared symbols for overlay control functionality.
 * These symbols are used by components that implement overlay behavior
 * (like Popover, Tooltip, Modal, etc.) to communicate with the overlay control system.
 */
/**
 * Symbol used to track the open or closed state of the overlay.
 */
declare const overlayHidden: unique symbol;
/**
 * Symbol used to track the element that opened the overlay. In some cases, like tooltips and popovers, the overlay is positioned against this element. In all cases, focus should be restored to this element when the overlay is closed.
 */
declare const overlayActivator: unique symbol;
declare const overlayHideFrameId: unique symbol;
export type PolyfillCommandEventInit = EventInit & {
  source: HTMLElement | null | undefined;
  command: PreactOverlayControlProps['command'];
  rootActivator?: HTMLElement | null;
};
export type PolyfillCommandEvent = Event & {
  source: PolyfillCommandEventInit['source'];
  command: PolyfillCommandEventInit['command'];
  /** Have to use `_s_shadowSource` because `source` is retargeted to the shadow host by browsers */
  _s_shadowSource: PolyfillCommandEventInit['source'];
  /** Root activator for nested overlays (e.g., menu button when modal opened from menu item) */
  _s_rootActivator?: HTMLElement | null;
};
declare global {
  interface GlobalEventHandlersEventMap {
    command: PolyfillCommandEvent;
  }
}

declare class PreactOverlayElement extends PolarisCustomElement {
  constructor(renderImpl: RenderImpl);
  /** @private */
  [overlayHidden]: boolean;
  /** @private */
  [overlayActivator]: HTMLElement | null | undefined;
  /** @private */
  [overlayHideFrameId]?: number;
}

declare class Menu extends PreactOverlayElement implements MenuProps {
  accessibilityLabel: string;
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$B]: Menu;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$B]: MenuJSXProps & PreactBaseElementPropsWithChildren<Menu>;
    }
  }
}

declare const tagName$B = 's-menu';
export interface MenuJSXProps
  extends Partial<MenuProps>,
    Pick<MenuProps$1, 'id' | 'children'> {
  /**
   * The Menu items.
   *
   * Only accepts `Button` and `Section` components.
   */
  children?: ComponentChildren;
}

export type RequiredAlignedModalProps = Required<ModalProps$1>;
export interface ModalProps
  extends Pick<
    RequiredAlignedModalProps,
    | 'accessibilityLabel'
    | 'heading'
    | 'padding'
    | 'size'
    | 'hideOverlay'
    | 'showOverlay'
    | 'toggleOverlay'
  > {
  /**
   * Adjust the size of the Modal.
   */
  size: Extract<
    ModalProps$1['size'],
    'small-100' | 'small' | 'base' | 'large' | 'large-100'
  >;
}

declare const hasOpenChildModal: unique symbol;

declare const show: unique symbol;
declare const hide: unique symbol;
declare const isOpen: unique symbol;
declare const dialog: unique symbol;
declare const dismiss: unique symbol;
declare const focusedElement: unique symbol;
declare const rootActivator: unique symbol;
declare const onEscape: unique symbol;
declare const nestedModals: unique symbol;
declare const onBackdropClick: unique symbol;
declare const abortController: unique symbol;
declare const onChildModalChange: unique symbol;
declare const childrenRerenderObserver: unique symbol;
declare const shadowDomRerenderObserver: unique symbol;
declare abstract class ModalBase<TTagName extends keyof HTMLElementTagNameMap>
  extends PreactOverlayElement
  implements
    Pick<ModalProps, 'accessibilityLabel' | 'heading' | 'padding' | 'size'>
{
  accessibilityLabel: ModalProps['accessibilityLabel'];
  heading: ModalProps['heading'];
  padding: ModalProps['padding'];
  size: ModalProps['size'];
  /** @private */
  [abortController]: AbortController;
  /** @private */
  [dialog]: HTMLDialogElement | null;
  /** @private */
  [focusedElement]: HTMLElement | null;
  /** @private */
  [rootActivator]: HTMLElement | null;
  /** @private */
  [nestedModals]: Map<ModalBase<TTagName>, boolean>;
  /** @private */
  [childrenRerenderObserver]: MutationObserver;
  /** @private */
  [shadowDomRerenderObserver]: MutationObserver;
  /** @private */
  [onEscape]: (event: KeyboardEvent) => void;
  /** @private */
  [onBackdropClick]: (event: MouseEvent) => void;
  /** @private */
  [onChildModalChange]: EventListenerOrEventListenerObject;
  /** @private */
  get [isOpen](): boolean;
  /** @private */
  [dismiss](): void;
  /** @private */
  get [hasOpenChildModal](): boolean;
  /** @private */
  [show](): Promise<void>;
  /** @private */
  [hide](): Promise<void>;
  showOverlay(): void;
  hideOverlay(): void;
  toggleOverlay(): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  constructor(renderImpl: RenderImpl, tagName: string);
}

declare class Modal extends ModalBase<typeof tagName$A> implements ModalProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$A]: Modal;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$A]: Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'> &
        PreactBaseElementPropsWithChildren<Modal>;
    }
  }
}

declare const tagName$A = 's-modal';
export interface ModalJSXProps
  extends Partial<ModalProps>,
    Pick<ModalProps$1, 'id' | 'children'> {
  /**
   * The content of the Modal.
   */
  children?: ComponentChildren;
  /**
   * The primary action to perform.
   *
   * Only a `Button` with a variant of `primary` is allowed.
   */
  primaryAction?: ComponentChildren;
  /**
   * The secondary actions to perform.
   *
   * Only `Button` elements with a variant of `secondary` or `auto` are allowed.
   */
  secondaryActions?: ComponentChildren;
  onHide?: ((event: CallbackEvent<typeof tagName$A>) => void) | null;
  onShow?: ((event: CallbackEvent<typeof tagName$A>) => void) | null;
  onAfterHide?: ((event: CallbackEvent<typeof tagName$A>) => void) | null;
  onAfterShow?: ((event: CallbackEvent<typeof tagName$A>) => void) | null;
}

export type RequiredMoneyFieldProps = Required<MoneyFieldProps$1>;
export interface MoneyFieldProps
  extends Omit<PreactFieldProps, 'value'>,
    Pick<RequiredMoneyFieldProps, 'max' | 'min'> {
  value: Required<MoneyFieldProps$1>['value'];
}

declare class MoneyField
  extends PreactFieldElement<MoneyFieldProps['autocomplete']>
  implements MoneyFieldProps
{
  max: MoneyFieldProps['max'];
  min: MoneyFieldProps['min'];
  get value(): string;
  set value(value: string);
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$z]: MoneyField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$z]: MoneyFieldJSXProps & PreactBaseElementProps<MoneyField>;
    }
  }
}

declare const tagName$z = 's-money-field';
export interface MoneyFieldJSXProps
  extends Partial<MoneyFieldProps>,
    FieldReactProps<typeof tagName$z>,
    Pick<MoneyFieldProps$1, 'id'> {}

export interface NumberFieldProps
  extends Omit<
      PreactFieldProps<Required<NumberFieldProps$1>['autocomplete']>,
      'value'
    >,
    Required<
      Pick<
        NumberFieldProps$1,
        'inputMode' | 'max' | 'min' | 'prefix' | 'step' | 'suffix'
      >
    > {
  value: Required<NumberFieldProps$1>['value'];
}

declare class NumberField
  extends PreactFieldElement<NumberFieldProps['autocomplete']>
  implements NumberFieldProps
{
  get value(): string;
  set value(value: string);
  inputMode: NumberFieldProps['inputMode'];
  step: NumberFieldProps['step'];
  max: NumberFieldProps['max'];
  min: NumberFieldProps['min'];
  prefix: NumberFieldProps['prefix'];
  suffix: NumberFieldProps['suffix'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$y]: NumberField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$y]: NumberFieldJSXProps & PreactBaseElementProps<NumberField>;
    }
  }
}

declare const tagName$y = 's-number-field';
export interface NumberFieldJSXProps
  extends Partial<NumberFieldProps>,
    Pick<NumberFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$y> {}

export interface OptionProps
  extends Required<
    Pick<OptionProps$1, 'disabled' | 'value' | 'selected' | 'defaultSelected'>
  > {}

declare class Option extends PolarisCustomElement implements OptionProps {
  selected: OptionProps['selected'];
  defaultSelected: OptionProps['defaultSelected'];
  value: OptionProps['value'];
  disabled: OptionProps['disabled'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$x]: Option;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$x]: OptionJSXProps & PreactBaseElementPropsWithChildren<Option>;
    }
  }
}

declare const tagName$x = 's-option';
export interface OptionJSXProps
  extends Partial<OptionProps>,
    Pick<OptionProps$1, 'id' | 'children'> {
  /**
   * The content to use as the label.
   */
  children?: ComponentChildren;
}

export interface OptionGroupProps
  extends Required<Pick<OptionGroupProps$1, 'disabled' | 'label'>> {}

declare class OptionGroup
  extends PolarisCustomElement
  implements OptionGroupProps
{
  disabled: OptionGroupProps['disabled'];
  label: OptionGroupProps['label'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$w]: OptionGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$w]: OptionGroupJSXProps &
        PreactBaseElementPropsWithChildren<OptionGroup>;
    }
  }
}

declare const tagName$w = 's-option-group';
export interface OptionGroupJSXProps
  extends Partial<OptionGroupProps>,
    Pick<OptionGroupProps$1, 'id' | 'children'> {
  /**
   * The options a user can select from.
   *
   * Accepts `Option` components.
   */
  children?: ComponentChildren;
}

export interface OrderedListProps extends OrderedListProps$1 {}

declare class OrderedList
  extends PolarisCustomElement
  implements OrderedListProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$v]: OrderedList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$v]: OrderedListJSXProps &
        PreactBaseElementPropsWithChildren<OrderedList>;
    }
  }
}

declare const tagName$v = 's-ordered-list';
export interface OrderedListJSXProps
  extends Partial<OrderedListProps>,
    Pick<OrderedListProps$1, 'id'> {
  /**
   * The items of the OrderedList.
   *
   * Only ListItems are accepted.
   */
  children?: ComponentChildren;
}

export interface PageProps
  extends Required<Pick<PageProps$1, 'inlineSize' | 'heading'>> {
  inlineSize: Extract<PageProps$1['inlineSize'], 'base' | 'large' | 'small'>;
}

declare abstract class PageBase
  extends PolarisCustomElement
  implements PageProps
{
  inlineSize: PageProps['inlineSize'];
  heading: PageProps['heading'];
  constructor(renderImpl: RenderImpl);
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}

declare class Page extends PageBase implements PageProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$u]: Page;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$u]: Omit<
        PageJSXProps,
        'aside' | 'primaryAction' | 'secondaryActions' | 'breadcrumbActions'
      > &
        PreactBaseElementPropsWithChildren<Page>;
    }
  }
}

declare const tagName$u = 's-page';
export interface PageJSXProps
  extends Partial<PageProps>,
    Pick<PageProps$1, 'id' | 'children'> {
  /**
   * The content of the Page.
   */
  children?: ComponentChildren;
  /**
   * The content to display in the aside section of the page.
   *
   * This slot is only rendered when `inlineSize` is "base".
   */
  aside?: ComponentChildren;
  /**
   * The primary action for the page.
   *
   * Only accepts a single `Button` component with a `variant` of `primary`.
   *
   */
  primaryAction?: ComponentChildren;
  /**
   * Secondary actions for the page.
   *
   * Only accepts `ButtonGroup` and `Button` components with a `variant` of `secondary` or `auto`.
   */
  secondaryActions?: ComponentChildren;
  /**
   * Navigations back actions for the page.
   *
   * Only accepts `Link` components.
   */
  breadcrumbActions?: ComponentChildren;
}

export interface ParagraphProps
  extends Required<
    Pick<
      ParagraphProps$1,
      | 'accessibilityVisibility'
      | 'fontVariantNumeric'
      | 'tone'
      | 'dir'
      | 'color'
      | 'lineClamp'
    >
  > {
  color: Extract<ParagraphProps$1['color'], 'base' | 'subdued'>;
}

declare abstract class ParagraphBase
  extends PolarisCustomElement
  implements
    Pick<
      ParagraphProps,
      | 'fontVariantNumeric'
      | 'lineClamp'
      | 'tone'
      | 'color'
      | 'dir'
      | 'accessibilityVisibility'
    >
{
  fontVariantNumeric: ParagraphProps['fontVariantNumeric'];
  lineClamp: ParagraphProps['lineClamp'];
  tone: Extract<
    ParagraphProps['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;

  color: ParagraphProps['color'];
  dir: ParagraphProps['dir'];
  accessibilityVisibility: ParagraphProps['accessibilityVisibility'];
  constructor(renderImpl: RenderImpl);
}

declare class Paragraph extends ParagraphBase implements ParagraphProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$t]: Paragraph;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$t]: ParagraphJSXProps &
        PreactBaseElementPropsWithChildren<Paragraph>;
    }
  }
}

declare const tagName$t = 's-paragraph';
export interface ParagraphJSXProps
  extends Partial<ParagraphProps>,
    Pick<ParagraphProps$1, 'id' | 'children'> {
  /**
   * The content of the Paragraph.
   */
  children?: ComponentChildren;
}

export type PasswordFieldProps = PreactFieldProps<
  Required<PasswordFieldProps$1>['autocomplete']
> &
  Required<
    Pick<
      PasswordFieldProps$1,
      | 'defaultValue'
      | 'details'
      | 'disabled'
      | 'error'
      | 'labelAccessibilityVisibility'
      | 'minLength'
      | 'maxLength'
      | 'label'
      | 'name'
      | 'placeholder'
      | 'readOnly'
      | 'required'
      | 'value'
    >
  >;

declare class PasswordField
  extends PreactFieldElement<PasswordFieldProps['autocomplete']>
  implements PasswordFieldProps
{
  maxLength: PasswordFieldProps['maxLength'];
  minLength: PasswordFieldProps['minLength'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$s]: PasswordField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$s]: PasswordFieldJSXProps &
        PreactBaseElementProps<PasswordField>;
    }
  }
}

declare const tagName$s = 's-password-field';
export interface PasswordFieldJSXProps
  extends Partial<PasswordFieldProps>,
    Pick<PasswordFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$s> {}

export interface PopoverProps
  extends Required<
    Pick<
      PopoverProps$1,
      | 'blockSize'
      | 'inlineSize'
      | 'maxBlockSize'
      | 'maxInlineSize'
      | 'minBlockSize'
      | 'minInlineSize'
    >
  > {}

declare class PreactPopoverElement<TTagName extends keyof HTMLElementTagNameMap>
  extends PreactOverlayElement
  implements PopoverProps
{
  constructor(renderImpl: RenderImpl);
  blockSize: BoxProps['blockSize'];
  minBlockSize: BoxProps['minBlockSize'];
  maxBlockSize: BoxProps['maxBlockSize'];
  inlineSize: BoxProps['inlineSize'];
  minInlineSize: BoxProps['minInlineSize'];
  maxInlineSize: BoxProps['maxInlineSize'];
}

declare class Popover
  extends PreactPopoverElement<typeof tagName$r>
  implements PopoverProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$r]: Popover;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$r]: PopoverJSXProps &
        PreactBaseElementPropsWithChildren<Popover>;
    }
  }
}

declare const tagName$r = 's-popover';
export interface PopoverJSXProps
  extends Partial<PopoverProps>,
    Pick<PopoverProps$1, 'id' | 'children'> {
  /**
   * The content of the Popover.
   */
  children?: ComponentChildren;
  onHide?: (event: CallbackEvent<typeof tagName$r>) => void | null;
  onShow?: (event: CallbackEvent<typeof tagName$r>) => void | null;
  onAfterHide?: (event: CallbackEvent<typeof tagName$r>) => void | null;
  onAfterShow?: (event: CallbackEvent<typeof tagName$r>) => void | null;
  onToggle?: (event: CallbackToggleEvent<typeof tagName$r>) => void | null;
  onAfterToggle?: (event: CallbackToggleEvent<typeof tagName$r>) => void | null;
}

export type PressButtonBaseProps = Required<
  Pick<
    PressButtonProps$1,
    | 'accessibilityLabel'
    | 'disabled'
    | 'icon'
    | 'inlineSize'
    | 'lang'
    | 'loading'
    | 'tone'
    | 'variant'
    | 'pressed'
    | 'defaultPressed'
  >
>;
export interface PressButtonProps extends PressButtonBaseProps {
  tone: Extract<PressButtonProps$1['tone'], 'neutral'>;
  icon: IconProps['type'];
  variant: Extract<PressButtonProps$1['variant'], 'secondary' | 'tertiary'>;
}

declare class PressButton
  extends PolarisCustomElement
  implements PressButtonProps
{
  disabled: PressButtonProps['disabled'];
  icon: PressButtonProps['icon'];
  loading: PressButtonProps['loading'];
  variant: PressButtonProps['variant'];
  tone: PressButtonProps['tone'];
  inlineSize: PressButtonProps['inlineSize'];
  get pressed(): boolean;
  set pressed(pressed: PressButtonProps['pressed']);
  defaultPressed: PressButtonProps['defaultPressed'];
  accessibilityLabel: PressButtonProps['accessibilityLabel'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$q]: PressButton;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$q]: PressButtonJSXProps &
        PreactBaseElementPropsWithChildren<PressButton>;
    }
  }
}

declare const tagName$q = 's-press-button';
export interface PressButtonJSXProps
  extends Partial<PressButtonProps>,
    Pick<PressButtonProps$1, 'children'> {
  /**
   * The content of the PressButton.
   */
  children?: ComponentChildren;
  onClick?: ((event: CallbackEvent<typeof tagName$q>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$q>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$q>) => void) | null;
}

export interface QueryContainerProps
  extends Required<Pick<QueryContainerProps$1, 'id' | 'containerName'>> {}

declare class QueryContainer
  extends PolarisCustomElement
  implements QueryContainerProps
{
  containerName: QueryContainerProps['containerName'];
  /** @private */
  static globalStylesApplied: boolean;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$p]: QueryContainer;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$p]: QueryContainerJSXProps &
        PreactBaseElementPropsWithChildren<QueryContainer>;
    }
  }
}

declare const tagName$p = 's-query-container';
export interface QueryContainerJSXProps
  extends Partial<QueryContainerProps$1>,
    Pick<QueryContainerProps$1, 'id' | 'children'> {
  /**
   * The content of the container.
   */
  children?: ComponentChildren;
}

/**
 * Base properties shared between ScrollBox and InternalScrollBox.
 */

/**
 * Base properties for ScrollBox components.
 * Extends BoxProps but overrides overflow and accessibilityRole with scroll-specific types.
 */
export interface ScrollBoxBaseProps
  extends Omit<BoxProps, 'overflow' | 'accessibilityRole'> {
  /**
   * Sets the overflow behavior of the element.
   * @default 'auto'
   */
  overflow: MaybeTwoValuesShorthandProperty<OverflowKeyword>;
  /**
   * Sets the semantic meaning of the component's content.
   * @default 'generic'
   */
  accessibilityRole: ScrollAccessibilityRole;
  /**
   * A label used to describe the scroll container for assistive technologies.
   */
  accessibilityLabel: string;
  /**
   * Controls scroll snap behavior.
   * @default 'none'
   */
  snapType: ScrollSnapType;
  /**
   * Offset for scroll snap alignment points.
   * @default 'base'
   */
  scrollPadding: SpacingKeyword;
  /**
   * Scroll margin for the element (CSS-like 1-to-4-value shorthand syntax).
   * @default '0'
   */
  scrollMargin: MaybeAllValuesShorthandProperty<SizeUnits>;
}
/**
 * Public ScrollBox properties (same as base for now).
 */
export type ScrollBoxProps = ScrollBoxBaseProps;

declare const getScrollContainer: unique symbol;
declare abstract class ScrollBoxBase<
    TTagName extends keyof HTMLElementTagNameMap,
  >
  extends PolarisCustomElement
  implements ScrollBoxBaseProps
{
  overflow: ScrollBoxBaseProps['overflow'];
  snapType: ScrollBoxBaseProps['snapType'];
  scrollPadding: ScrollBoxBaseProps['scrollPadding'];
  scrollMargin: ScrollBoxBaseProps['scrollMargin'];
  accessibilityRole: ScrollBoxBaseProps['accessibilityRole'];
  accessibilityLabel: ScrollBoxBaseProps['accessibilityLabel'];
  background: ScrollBoxBaseProps['background'];
  blockSize: ScrollBoxBaseProps['blockSize'];
  minBlockSize: ScrollBoxBaseProps['minBlockSize'];
  maxBlockSize: ScrollBoxBaseProps['maxBlockSize'];
  inlineSize: ScrollBoxBaseProps['inlineSize'];
  minInlineSize: ScrollBoxBaseProps['minInlineSize'];
  maxInlineSize: ScrollBoxBaseProps['maxInlineSize'];
  padding: ScrollBoxBaseProps['padding'];
  paddingBlock: ScrollBoxBaseProps['paddingBlock'];
  paddingBlockStart: ScrollBoxBaseProps['paddingBlockStart'];
  paddingBlockEnd: ScrollBoxBaseProps['paddingBlockEnd'];
  paddingInline: ScrollBoxBaseProps['paddingInline'];
  paddingInlineStart: ScrollBoxBaseProps['paddingInlineStart'];
  paddingInlineEnd: ScrollBoxBaseProps['paddingInlineEnd'];
  border: ScrollBoxBaseProps['border'];
  borderWidth: ScrollBoxBaseProps['borderWidth'];
  borderStyle: ScrollBoxBaseProps['borderStyle'];
  borderColor: ScrollBoxBaseProps['borderColor'];
  borderRadius: ScrollBoxBaseProps['borderRadius'];
  display: ScrollBoxBaseProps['display'];
  accessibilityVisibility: ScrollBoxBaseProps['accessibilityVisibility'];
  [getScrollContainer](): HTMLElement | null | undefined;
  constructor(renderImpl: RenderImpl);
}

declare class ScrollBox
  extends ScrollBoxBase<typeof tagName$o>
  implements ScrollBoxProps
{
  constructor();
  adoptedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$o]: ScrollBox;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$o]: ScrollBoxJSXProps &
        PreactBaseElementPropsWithChildren<ScrollBox>;
    }
  }
}

declare const tagName$o = 's-scroll-box';
export interface ScrollBoxJSXProps
  extends Partial<ScrollBoxProps>,
    Pick<BoxProps$1, 'id' | 'children'> {
  /**
   * The content of the ScrollBox.
   */
  children?: ComponentChildren;
  /**
   * Callback fired when the scroll container is scrolled.
   */
  onscroll?: ((event: CallbackEvent<typeof tagName$o>) => void) | null;
  /**
   * Callback fired when the scroll container reaches an edge.
   */
  onscrolltoedge?: ((event: CallbackEvent<typeof tagName$o>) => void) | null;
}

export type SearchFieldProps = PreactFieldProps<
  /**
   * @default 'on'
   */
  Required<TextFieldProps$1>['autocomplete']
> &
  Required<
    Pick<
      TextFieldProps$1,
      | 'defaultValue'
      | 'details'
      | 'disabled'
      | 'error'
      | 'labelAccessibilityVisibility'
      | 'minLength'
      | 'maxLength'
      | 'label'
      | 'name'
      | 'placeholder'
      | 'readOnly'
      | 'required'
      | 'value'
    >
  >;

declare abstract class SearchFieldBase
  extends PreactFieldElement<SearchFieldProps['autocomplete']>
  implements Pick<SearchFieldProps, 'maxLength' | 'minLength'>
{
  maxLength: SearchFieldProps['maxLength'];
  minLength: SearchFieldProps['minLength'];
  constructor(renderImpl: RenderImpl);
}

declare class SearchField extends SearchFieldBase implements SearchFieldProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$n]: SearchField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$n]: SearchFieldJSXProps & PreactBaseElementProps<SearchField>;
    }
  }
}

declare const tagName$n = 's-search-field';
export interface SearchFieldJSXProps
  extends Partial<SearchFieldProps>,
    Pick<TextFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$n> {}

export type RequiredSectionProps = Required<SectionProps$1>;
export interface SectionProps
  extends Pick<
    RequiredSectionProps,
    'accessibilityLabel' | 'heading' | 'padding'
  > {
  accessibilityLabel: RequiredSectionProps['accessibilityLabel'];
  heading: RequiredSectionProps['heading'];
  padding: RequiredSectionProps['padding'];
}

declare abstract class SectionBase
  extends PolarisCustomElement
  implements SectionProps
{
  constructor(renderImpl: RenderImpl);
  /** @private */
  connectedCallback(): void;
  accessibilityLabel: SectionProps['accessibilityLabel'];
  heading: SectionProps['heading'];
  padding: SectionProps['padding'];
}

declare class Section extends SectionBase implements SectionProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$m]: Section;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$m]: SectionJSXProps &
        PreactBaseElementPropsWithChildren<Section>;
    }
  }
}

declare const tagName$m = 's-section';
export interface SectionJSXProps
  extends Partial<SectionProps>,
    Pick<SectionProps$1, 'id' | 'children'> {
  /**
   * The content of the Section.
   */
  children?: ComponentChildren;
}

export interface SelectProps
  extends Omit<PreactInputProps, 'value'>,
    Required<
      Pick<
        SelectProps$1,
        | 'details'
        | 'disabled'
        | 'error'
        | 'label'
        | 'name'
        | 'placeholder'
        | 'required'
        | 'icon'
        | 'labelAccessibilityVisibility'
      >
    > {
  value: Required<SelectProps$1>['value'];
  icon: IconProps['type'];
}

declare const usedFirstOptionSymbol: unique symbol;
declare const hasInitialValueSymbol: unique symbol;

declare abstract class SelectBase
  extends PreactInputElement
  implements
    Pick<
      SelectProps,
      | 'icon'
      | 'details'
      | 'error'
      | 'label'
      | 'placeholder'
      | 'required'
      | 'labelAccessibilityVisibility'
    >
{
  icon: SelectProps['icon'];
  details: SelectProps['details'];
  error: SelectProps['error'];
  label: SelectProps['label'];
  placeholder: SelectProps['placeholder'];
  required: SelectProps['required'];
  labelAccessibilityVisibility: SelectProps['labelAccessibilityVisibility'];
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  constructor(renderImpl: RenderImpl);
  /**
   * used to determine if no value or defaultValue was set, in which case the first non-disabled option was used
   *
   * this is important because we need to use the placeholder in these situations, even though the first value will be submitted as part of the form
   * @private
   */
  [usedFirstOptionSymbol]: boolean;
  /**
   * @private
   */
  [hasInitialValueSymbol]: boolean;
  get value(): string;
  set value(value: string);
  /** @private */
  formResetCallback(): void;
}

declare class Select extends SelectBase implements SelectProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$l]: Select;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$l]: SelectJSXProps & PreactBaseElementPropsWithChildren<Select>;
    }
  }
}

declare const tagName$l = 's-select';
export interface SelectJSXProps
  extends Partial<SelectProps>,
    Pick<SelectProps$1, 'id' | 'children'> {
  /**
   * The options a user can select from.
   *
   * Accepts `Option` and `OptionGroup` components.
   */
  children?: ComponentChildren;
  onChange?: (event: CallbackEvent<typeof tagName$l>) => void;
  onInput?: (event: CallbackEvent<typeof tagName$l>) => void;
  onBlur?: (event: CallbackEvent<typeof tagName$l>) => void;
  onFocus?: (event: CallbackEvent<typeof tagName$l>) => void;
}

export interface SpinnerProps
  extends Required<Pick<SpinnerProps$1, 'accessibilityLabel'>> {
  size: Extract<SpinnerProps$1['size'], 'large' | 'large-100' | 'base'>;
}

declare class Spinner extends PolarisCustomElement implements SpinnerProps {
  accessibilityLabel: string;
  size: SpinnerProps['size'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$k]: Spinner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$k]: SpinnerJSXProps & PreactBaseElementProps<Spinner>;
    }
  }
}

declare const tagName$k = 's-spinner';
export interface SpinnerJSXProps
  extends Partial<SpinnerProps>,
    Pick<SpinnerProps$1, 'id'> {}

export type AlignedStackProps = Required<StackProps$1>;
export type ResponsiveStackProps = MakeResponsivePick<
  AlignedStackProps,
  'gap' | 'rowGap' | 'columnGap' | 'direction'
>;
export interface StackProps
  extends BoxProps,
    Pick<
      Required<AlignedStackProps>,
      'justifyContent' | 'alignItems' | 'alignContent'
    > {
  /**
   * Aligns the Stack's children along the inline axis.
   *
   * @default 'normal'
   */
  justifyContent: JustifyContentKeyword;
  /**
   * Aligns the Stack's children along the block axis.
   *
   * @default 'normal'
   */
  alignItems: AlignItemsKeyword;
  /**
   * Aligns the Stack's children along the block axis.
   *
   * This overrides the block value of `alignContent`.
   *
   * @default 'normal'
   */
  alignContent: AlignContentKeyword;
  /**
   * Adjust spacing between elements.
   *
   * `gap` can either accept:
   * - a single [SpacingKeyword](https://shopify.dev/docs/api/app-home/using-polaris-components#scale) value applied to both axes (e.g. `large-100`)
   * - OR a pair of values (eg `large-100 large-500`) can be used to set the inline and block axes respectively
   * - OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.
   *
   * @default 'none'
   */
  gap: ResponsiveStackProps['gap'];
  /**
   * Adjust spacing between elements in the block axis.
   *
   * This overrides the row value of `gap`.
   * `rowGap` either accepts:
   * - a single [SpacingKeyword](https://shopify.dev/docs/api/app-home/using-polaris-components#scale) value (e.g. `large-100`)
   * - OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  rowGap: ResponsiveStackProps['rowGap'];
  /**
   * Adjust spacing between elements in the inline axis.
   *
   * This overrides the column value of `gap`.
   * `columnGap` either accepts:
   * - a single [SpacingKeyword](https://shopify.dev/docs/api/app-home/using-polaris-components#scale) value (e.g. `large-100`)
   * - OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.
   *
   * @default '' - meaning no override
   */
  columnGap: ResponsiveStackProps['columnGap'];
  /**
   * Sets how the Stack's children are placed within the Stack.
   *
   * `direction` either accepts:
   * - a single value either `inline` or `block`
   * - OR a [responsive value](https://shopify.dev/docs/api/app-home/using-polaris-components#responsive-values) string with the supported SpacingKeyword as a query value.
   *
   * @default 'block'
   *
   * @implementation the content will wrap if the direction is 'inline', and not wrap if the direction is 'block'
   */
  direction: ResponsiveStackProps['direction'];
}

declare class Stack extends BoxElement implements StackProps {
  constructor();
  direction: StackProps['direction'];
  justifyContent: StackProps['justifyContent'];
  alignItems: StackProps['alignItems'];
  alignContent: StackProps['alignContent'];
  gap: StackProps['gap'];
  rowGap: StackProps['rowGap'];
  columnGap: StackProps['columnGap'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$j]: Stack;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$j]: StackJSXProps & PreactBaseElementPropsWithChildren<Stack>;
    }
  }
}

declare const tagName$j = 's-stack';
export interface StackJSXProps
  extends Partial<StackProps>,
    Pick<StackProps$1, 'id' | 'children'> {
  /**
   * The content of the Stack.
   */
  children?: ComponentChildren;
}

export interface SwitchProps
  extends PreactCheckboxProps,
    Required<Pick<SwitchProps$1, 'labelAccessibilityVisibility'>> {}

declare abstract class SwitchBase
  extends PreactCheckboxElement
  implements Pick<SwitchProps, 'labelAccessibilityVisibility'>
{
  labelAccessibilityVisibility: SwitchProps['labelAccessibilityVisibility'];
  constructor(renderImpl: RenderImpl);
}

declare class Switch extends SwitchBase implements SwitchProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$i]: Switch;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$i]: SwitchJSXProps & PreactBaseElementProps<Switch>;
    }
  }
}

declare const tagName$i = 's-switch';
export interface SwitchJSXProps
  extends Partial<SwitchProps>,
    Pick<SwitchProps$1, 'id'> {
  onChange?: ((event: CallbackEvent<typeof tagName$i>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$i>) => void) | null;
}

export interface TableProps
  extends Required<
    Pick<
      TableProps$1,
      'loading' | 'paginate' | 'hasPreviousPage' | 'hasNextPage' | 'variant'
    >
  > {
  variant: Extract<TableProps$1['variant'], 'list' | 'auto'>;
}

export type HeaderFormat = Extract<
  TableHeaderProps$1['format'],
  'base' | 'currency' | 'numeric'
>;
export interface TableHeaderProps
  extends Pick<TableHeaderProps$1, 'listSlot' | 'format'> {
  listSlot: Extract<
    TableHeaderProps$1['listSlot'],
    'primary' | 'secondary' | 'labeled' | 'kicker' | 'inline'
  >;
  format: HeaderFormat;
}

declare const actualTableVariantSymbol: unique symbol;
declare const tableHeadersSharedDataSymbol: unique symbol;
export type ActualTableVariant = 'table' | 'list';

declare class Table extends PolarisCustomElement implements TableProps {
  variant: TableProps['variant'];
  loading: TableProps['loading'];
  paginate: TableProps['paginate'];
  hasPreviousPage: TableProps['hasPreviousPage'];
  hasNextPage: TableProps['hasNextPage'];
  /**
   * @private
   * The actual table variant, which is either 'table' or 'list'.
   */
  [actualTableVariantSymbol]: _shopify_admin_web_component_foundations.AddedContext<ActualTableVariant>;
  /** @private */
  [tableHeadersSharedDataSymbol]: _shopify_admin_web_component_foundations.AddedContext<
    {
      listSlot: TableHeaderProps['listSlot'];
      textContent: string;
      format: HeaderFormat;
    }[]
  >;

  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$h]: Table;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$h]: Omit<TableJSXProps, 'filters'> &
        PreactBaseElementPropsWithChildren<Table>;
    }
  }
}

declare const tagName$h = 's-table';
export interface TableJSXProps
  extends Partial<TableProps>,
    Pick<TableProps$1, 'id' | 'children' | 'onNextPage' | 'onPreviousPage'> {
  /**
   * The content of the Table.
   */
  children?: ComponentChildren;
  /**
   * Additional filters to display in the table. For example, the `s-search-field` component can be used to filter the table data.
   */
  filters?: ComponentChildren;
}

export interface TableBodyProps extends TableBodyProps$1 {}

declare class TableBody extends PolarisCustomElement implements TableBodyProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$g]: TableBody;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$g]: TableBodyJSXProps &
        PreactBaseElementPropsWithChildren<TableBody>;
    }
  }
}

declare const tagName$g = 's-table-body';
export interface TableBodyJSXProps
  extends Partial<TableBodyProps>,
    Pick<TableBodyProps$1, 'id' | 'children'> {
  /**
   * The body of the table. May not have any semantic meaning in the Table's `list` variant.
   */
  children?: ComponentChildren;
}

export interface TableCellProps extends TableCellProps$1 {}

declare const headerFormatSymbol: unique symbol;

declare class TableCell extends PolarisCustomElement implements TableCellProps {
  constructor();
  /** @private */
  get [headerFormatSymbol](): HeaderFormat;
  /** @private */
  set [headerFormatSymbol](format: HeaderFormat);
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$f]: TableCell;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$f]: TableCellJSXProps &
        PreactBaseElementPropsWithChildren<TableCell>;
    }
  }
}

declare const tagName$f = 's-table-cell';
export interface TableCellJSXProps
  extends Partial<TableCellProps>,
    Pick<TableCellProps$1, 'id' | 'children'> {
  /**
   * The content of the table cell.
   */
  children?: ComponentChildren;
}

declare class TableHeader
  extends PolarisCustomElement
  implements TableHeaderProps
{
  listSlot: TableHeaderProps['listSlot'];
  format: TableHeaderProps['format'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$e]: TableHeader;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$e]: TableHeaderJSXProps &
        PreactBaseElementPropsWithChildren<TableHeader>;
    }
  }
}

declare const tagName$e = 's-table-header';
export interface TableHeaderJSXProps
  extends Partial<TableHeaderProps>,
    Pick<TableHeaderProps$1, 'id' | 'children'> {
  /**
   * The heading of the column in the `table` variant, and the label of its data in `list` variant.
   */
  children?: ComponentChildren;
}

export interface TableHeaderRowProps extends TableHeaderRowProps$1 {}

declare class TableHeaderRow
  extends PolarisCustomElement
  implements TableHeaderRowProps
{
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$d]: TableHeaderRow;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$d]: TableHeaderRowJSXProps &
        PreactBaseElementPropsWithChildren<TableHeaderRow>;
    }
  }
}

declare const tagName$d = 's-table-header-row';
export interface TableHeaderRowJSXProps
  extends Partial<TableHeaderRowProps>,
    Pick<TableHeaderRowProps$1, 'id' | 'children'> {
  /**
   * Contents of the table heading row; children should be `TableHeading` components.
   */
  children?: ComponentChildren;
}

export interface TableRowProps
  extends Pick<TableRowProps$1, 'children' | 'clickDelegate'> {}

declare class TableRow extends PolarisCustomElement implements TableRowProps {
  constructor();
  clickDelegate: string;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$c]: TableRow;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$c]: TableRowJSXProps &
        PreactBaseElementPropsWithChildren<TableRow>;
    }
  }
}

declare const tagName$c = 's-table-row';
export interface TableRowJSXProps
  extends Partial<TableRowProps>,
    Pick<TableRowProps$1, 'id' | 'children'> {
  /**
   * The content of a TableRow, which should be `TableCell` components.
   */
  children?: ComponentChildren;
}

export interface TextProps
  extends Required<
    Pick<
      TextProps$1,
      | 'accessibilityVisibility'
      | 'dir'
      | 'color'
      | 'type'
      | 'tone'
      | 'fontVariantNumeric'
      | 'interestFor'
    >
  > {
  color: Extract<TextProps$1['color'], 'base' | 'subdued'>;
  type: Extract<
    TextProps$1['type'],
    'address' | 'redundant' | 'strong' | 'generic'
  >;
  tone: Extract<
    TextProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'caution' | 'critical'
  >;
  fontVariantNumeric: Extract<
    TextProps$1['fontVariantNumeric'],
    'auto' | 'normal' | 'tabular-nums'
  >;
}

declare abstract class TextBase
  extends PolarisCustomElement
  implements
    Pick<
      TextProps,
      | 'fontVariantNumeric'
      | 'color'
      | 'type'
      | 'dir'
      | 'accessibilityVisibility'
      | 'interestFor'
    >
{
  fontVariantNumeric: TextProps['fontVariantNumeric'];
  color: TextProps['color'];
  type: TextProps['type'];
  dir: TextProps['dir'];
  accessibilityVisibility: TextProps['accessibilityVisibility'];
  interestFor: string;
  abstract tone: string;
  constructor(renderImpl: RenderImpl);
}

declare class Text extends TextBase implements TextProps {
  tone: TextProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$b]: Text;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$b]: TextJSXProps & PreactBaseElementPropsWithChildren<Text>;
    }
  }
}

declare const tagName$b = 's-text';
export interface TextJSXProps
  extends Partial<TextProps>,
    Pick<TextProps$1, 'id' | 'children'> {
  /**
   * The content of the Text.
   */
  children?: ComponentChildren;
}

export type TextAreaProps = PreactFieldProps<
  Required<TextAreaProps$1>['autocomplete']
> &
  Required<Pick<TextAreaProps$1, 'maxLength' | 'minLength' | 'rows'>>;

declare class TextArea
  extends PreactFieldElement<TextAreaProps['autocomplete']>
  implements TextAreaProps
{
  maxLength: TextAreaProps['maxLength'];
  minLength: TextAreaProps['minLength'];
  rows: TextAreaProps['rows'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$a]: TextArea;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$a]: TextAreaJSXProps & PreactBaseElementProps<TextArea>;
    }
  }
}

declare const tagName$a = 's-text-area';
export interface TextAreaJSXProps
  extends Partial<TextAreaProps>,
    Pick<TextAreaProps$1, 'id'>,
    FieldReactProps<typeof tagName$a> {}

export type TextFieldProps = PreactFieldProps<
  /** @default 'on' */
  Required<TextFieldProps$1>['autocomplete']
> &
  Required<
    Pick<
      TextFieldProps$1,
      'icon' | 'maxLength' | 'minLength' | 'prefix' | 'suffix'
    >
  >;

declare abstract class TextFieldBase
  extends PreactFieldElement<TextFieldProps['autocomplete']>
  implements
    Pick<
      TextFieldProps,
      'icon' | 'maxLength' | 'minLength' | 'prefix' | 'suffix'
    >
{
  icon: TextFieldProps['icon'];
  maxLength: TextFieldProps['maxLength'];
  minLength: TextFieldProps['minLength'];
  prefix: TextFieldProps['prefix'];
  suffix: TextFieldProps['suffix'];
  constructor(renderImpl: RenderImpl);
}

declare class TextField extends TextFieldBase implements TextFieldProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$9]: TextField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$9]: Omit<TextFieldJSXProps, 'accessory'> &
        PreactBaseElementPropsWithChildren<TextField>;
    }
  }
}

declare const tagName$9 = 's-text-field';
export interface TextFieldJSXProps
  extends Partial<Omit<TextFieldProps, 'accessory'>>,
    Pick<TextFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$9> {
  /**
   * The accessory to display in the text field.
   */
  accessory?: ComponentChildren;
}

export interface ThumbnailProps
  extends Required<Pick<ThumbnailProps$1, 'src' | 'alt' | 'size'>> {
  size: Extract<
    ThumbnailProps$1['size'],
    'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100'
  >;
}

declare class Thumbnail extends PolarisCustomElement implements ThumbnailProps {
  src: ThumbnailProps['src'];
  alt: ThumbnailProps['alt'];
  size: ThumbnailProps['size'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$8]: Thumbnail;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$8]: ThumbnailJSXProps & PreactBaseElementProps<Thumbnail>;
    }
  }
}

declare const tagName$8 = 's-thumbnail';
export interface ThumbnailJSXProps
  extends Partial<ThumbnailProps>,
    Pick<ThumbnailProps$1, 'id'> {
  onLoad?: ((event: CallbackEvent<typeof tagName$8>) => void) | null;
  onError?: ((event: CallbackEvent<typeof tagName$8>) => void) | null;
}

export interface TooltipProps extends Required<Pick<TooltipProps$1, 'id'>> {}

declare class Tooltip extends PreactOverlayElement implements TooltipProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$7]: Tooltip;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$7]: TooltipJSXProps &
        PreactBaseElementPropsWithChildren<Tooltip>;
    }
  }
}

declare const tagName$7 = 's-tooltip';
export interface TooltipJSXProps
  extends Partial<TooltipProps>,
    Pick<TooltipProps$1, 'id' | 'children'> {
  /**
   * The content of the Tooltip.
   *
   * Only accepts `Text`, `Paragraph` components, and raw `textContent`.
   */
  children?: ComponentChildren;
}

export type URLFieldProps = PreactFieldProps<
  Required<URLFieldProps$1>['autocomplete']
> &
  Required<Pick<URLFieldProps$1, 'maxLength' | 'minLength'>>;

declare class URLField
  extends PreactFieldElement<URLFieldProps['autocomplete']>
  implements URLFieldProps
{
  autocomplete: URLFieldProps['autocomplete'];
  maxLength: URLFieldProps['maxLength'];
  minLength: URLFieldProps['minLength'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$6]: URLField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$6]: URLFieldJSXProps & PreactBaseElementProps<URLField>;
    }
  }
}

declare const tagName$6 = 's-url-field';
export interface URLFieldJSXProps
  extends Partial<Omit<URLFieldProps, 'accessory'>>,
    Pick<URLFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$6> {}

export interface UnorderedListProps extends UnorderedListProps$1 {}

declare class UnorderedList
  extends PolarisCustomElement
  implements UnorderedListProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$5]: UnorderedList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$5]: UnorderedListJSXProps &
        PreactBaseElementPropsWithChildren<UnorderedList>;
    }
  }
}

declare const tagName$5 = 's-unordered-list';
export interface UnorderedListJSXProps
  extends Partial<UnorderedListProps>,
    Pick<UnorderedListProps$1, 'id'> {
  /**
   * The items of the UnorderedList.
   *
   * Only ListItems are accepted.
   */
  children?: ComponentChildren;
}

export interface AdminActionProps
  extends Pick<AdminActionProps$1, 'heading' | 'loading'> {}

declare const tagName$4 = 's-admin-action';
export interface AdminActionJSXProps
  extends Partial<AdminActionProps>,
    Pick<AdminActionProps$1, 'id'> {
  /**
   * The primary action to display in the admin action.
   */
  primaryAction: ComponentChildren;
  /**
   * The secondary actions to display in the admin action.
   */
  secondaryActions: ComponentChildren;
}

declare class AdminAction
  extends PolarisCustomElement
  implements AdminActionProps
{
  heading: string;
  loading: boolean;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$4]: AdminAction;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$4]: Omit<
        AdminActionJSXProps,
        'primaryAction' | 'secondaryActions'
      > & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

export interface AdminBlockProps
  extends Pick<AdminBlockProps$1, 'heading' | 'collapsedSummary'> {}

declare const tagName$3 = 's-admin-block';
export interface AdminBlockJSXProps
  extends Partial<AdminBlockProps>,
    Pick<AdminBlockProps$1, 'id'> {}

declare class AdminBlock
  extends PolarisCustomElement
  implements AdminBlockProps
{
  heading: string;
  collapsedSummary: string;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$3]: AdminBlock;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$3]: AdminBlockJSXProps & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

export interface AdminPrintActionProps
  extends Pick<AdminPrintActionProps$1, 'src'> {}

declare const tagName$2 = 's-admin-print-action';
export interface AdminPrintActionJSXProps
  extends Partial<AdminPrintActionProps>,
    Pick<AdminPrintActionProps$1, 'id'> {}

declare class AdminPrintAction
  extends PolarisCustomElement
  implements AdminPrintActionProps
{
  src: string;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$2]: AdminPrintAction;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$2]: AdminPrintActionJSXProps & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

export interface FormProps extends Pick<FormProps$1, 'id'> {}

declare const tagName$1 = 's-form';
export interface FormJSXProps extends Partial<FormProps> {
  /**
   * A callback that is run when the form is submitted.
   */
  onSubmit?:
    | ((event: CallbackExtendableEvent<typeof tagName$1>) => void)
    | null;
  /**
   * A callback that is run when the form is reset.
   */
  onReset?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
}

declare class Form extends PolarisCustomElement implements FormProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$1]: Form;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$1]: FormJSXProps & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

export interface FunctionSettingsProps
  extends Pick<FunctionSettingsProps$1, 'id'> {}

declare const tagName = 's-function-settings';
export interface FunctionSettingsJSXProps
  extends Partial<
    FunctionSettingsProps & Pick<FunctionSettingsProps$1, 'onError'>
  > {
  /**
   * An optional callback function that will be run by the admin when the user
   * commits their changes in the admin-rendered part of the function settings
   * experience. If `event.waitUntil` is called with a promise, the admin will wait for the
   * promise to resolve before committing any changes to Shopify’s servers. If
   * the promise rejects, the admin will abort the changes and display an error,
   * using the `message` property of the error you reject with.
   */
  onSubmit?: ((event: CallbackExtendableEvent<typeof tagName>) => void) | null;
  /**
   * A callback that is run when the function settings form is reset.
   */
  onReset?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export type FunctionSettingsErrorEvent = Parameters<
  NonNullable<FunctionSettingsProps$1['onError']>
>[0];
declare class FunctionSettings
  extends PreactCustomElement
  implements FunctionSettingsProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: FunctionSettings;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: FunctionSettingsJSXProps & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

export {
  AdminAction,
  AdminBlock,
  AdminPrintAction,
  Avatar,
  Badge,
  Banner,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Chip,
  Choice,
  ChoiceList,
  Clickable,
  ClickableChip,
  ColorField,
  ColorPicker,
  DateField,
  DatePicker,
  Divider,
  DropZone,
  EmailField,
  Form,
  FunctionSettings,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Link,
  ListItem,
  Menu,
  Modal,
  MoneyField,
  NumberField,
  Option,
  OptionGroup,
  OrderedList,
  Page,
  Paragraph,
  PasswordField,
  Popover,
  PressButton,
  QueryContainer,
  ScrollBox,
  SearchField,
  Section,
  Select,
  Spinner,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderRow,
  TableRow,
  Text,
  TextArea,
  TextField,
  Thumbnail,
  Tooltip,
  URLField,
  UnorderedList,
};
export type {
  AdminActionJSXProps,
  AdminBlockJSXProps,
  AdminPrintActionJSXProps,
  ReactProps$$ as AvatarJSXProps,
  ReactProps$_BadgeJSXProps,
  BannerJSXProps,
  BoxJSXProps,
  ButtonGroupJSXProps,
  ButtonJSXProps,
  CheckboxJSXProps,
  ChipJSXProps,
  ChoiceJSXProps,
  ChoiceListJSXProps,
  ClickableChipJSXProps,
  ClickableJSXProps,
  ColorFieldJSXProps,
  ColorPickerJSXProps,
  DateFieldJSXProps,
  DatePickerJSXProps,
  DividerJSXProps,
  DropZoneJSXProps,
  EmailFieldJSXProps,
  FormJSXProps,
  FunctionSettingsJSXProps,
  GridItemJSXProps,
  GridJSXProps,
  HeadingJSXProps,
  IconJSXProps,
  ImageJSXProps,
  LinkJSXProps,
  ListItemJSXProps,
  MenuJSXProps,
  ModalJSXProps,
  MoneyFieldJSXProps,
  NumberFieldJSXProps,
  OptionGroupJSXProps,
  OptionJSXProps,
  OrderedListJSXProps,
  PageJSXProps,
  ParagraphJSXProps,
  PasswordFieldJSXProps,
  PopoverJSXProps,
  PressButtonJSXProps,
  QueryContainerJSXProps,
  ScrollBoxJSXProps,
  SearchFieldJSXProps,
  SectionJSXProps,
  SelectJSXProps,
  SpinnerJSXProps,
  StackJSXProps,
  SwitchJSXProps,
  TableBodyJSXProps,
  TableCellJSXProps,
  TableHeaderJSXProps,
  TableHeaderRowJSXProps,
  TableJSXProps,
  TableRowJSXProps,
  TextAreaJSXProps,
  TextFieldJSXProps,
  TextJSXProps,
  ThumbnailJSXProps,
  TooltipJSXProps,
  URLFieldJSXProps,
  UnorderedListJSXProps,
};

export interface AvatarEvents {
  load: CallbackEventListener<typeof tagName> | null = null;
  error: OnErrorEventHandler = null;
}

export interface BadgeSlots {
  /**
   * The content of the Badge.
   */
  children?: HTMLElement;
}

export interface BannerEvents {
  dismiss: CallbackEventListener<typeof tagName> | null = null;
  afterhide: CallbackEventListener<typeof tagName> | null = null;
}

export interface BannerSlots {
  /**
   * The content of the Banner.
   */
  children?: HTMLElement;
  /**
   * The secondary actions to display at the bottom of the Banner.
   *
   * Only Buttons with the `variant` of "secondary" or "auto" are permitted. A maximum of two `s-button` components are allowed.
   */
  'secondary-actions'?: HTMLElement;
}

export interface BoxSlots {
  /**
   * The content of the Box.
   */
  children?: HTMLElement;
}

export interface ButtonEvents {
  click: CallbackEventListener<TTagName> | null;
  blur: CallbackEventListener<TTagName> | null;
  focus: CallbackEventListener<TTagName> | null;
}

export interface ButtonSlots {
  /**
   * The content of the Button.
   */
  children?: HTMLElement;
}

export interface ButtonGroupSlots {
  /**
   * The content of the ButtonGroup.
   */
  children?: HTMLElement;
  /**
   * The primary action button for the group.
   * Accepts a single Button element with a `variant` of `primary`.
   * Cannot be used when gap="none".
   */
  'primary-action'?: HTMLElement;
  /**
   * Secondary action buttons for the group.
   * Accepts Button or PressButton elements with a `variant` of `secondary` or `auto`.
   */
  'secondary-actions'?: HTMLElement;
}

export interface CheckboxEvents {
  change: CallbackEventListener<'input'>;
  input: CallbackEventListener<'input'>;
}

export interface ChipSlots {
  /**
   * The content of the Chip.
   */
  children?: HTMLElement;
  /**
   * The graphic to display in the chip.
   *
   * Only accepts `Icon` components.
   */
  graphic?: HTMLElement;
}

export interface ChoiceSlots {
  /**
   * Content to use as the choice label.
   *
   * The label is produced by extracting and
   * concatenating the text nodes from the provided content;
   * any markup or element structure is ignored.
   */
  children?: HTMLElement;
  /**
   * Additional text to provide context or guidance for the input.
   *
   * This text is displayed along with the input and its label
   * to offer more information or instructions to the user.
   *
   * @implementation this content should be linked to the input with an `aria-describedby` attribute.
   */
  details?: HTMLElement;
  /**
   * Additional content to display below the choice label.
   * Can include rich content like TextFields, Buttons, or other interactive components.
   * Event handlers on React components are preserved.
   */
  'secondary-content'?: HTMLElement;
}

export interface ChoiceListEvents {
  change: CallbackEventListener<typeof tagName> | null = null;
  input: CallbackEventListener<typeof tagName> | null = null;
}

export interface ChoiceListSlots {
  /**
   * The choices a user can select from.
   *
   * Accepts `Choice` components.
   */
  children?: HTMLElement;
}

export interface ClickableEvents {
  click: CallbackEventListener<typeof tagName> | null = null;
  blur: CallbackEventListener<typeof tagName> | null = null;
  focus: CallbackEventListener<typeof tagName> | null = null;
}

export interface ClickableSlots {
  /**
   * The content of the Clickable.
   */
  children?: HTMLElement;
}

export interface ClickableChipEvents {
  click: CallbackEventListener<typeof tagName> | null = null;
  remove: CallbackEventListener<typeof tagName> | null = null;
  afterhide: CallbackEventListener<typeof tagName> | null = null;
}

export interface ClickableChipSlots {
  /**
   * The content of the clickable chip.
   */
  children?: HTMLElement;
  /**
   * The graphic to display in the clickable chip.
   *
   * Only accepts `Icon` components.
   */
  graphic?: HTMLElement;
}

export interface ColorFieldEvents {
  change: CallbackEventListener<'input'>;
  input: CallbackEventListener<'input'>;
  blur: CallbackEventListener<'input'>;
  focus: CallbackEventListener<'input'>;
}

export interface ColorPickerEvents {
  change: CallbackEventListener<typeof tagName> | null = null;
  input: CallbackEventListener<typeof tagName> | null = null;
}

export interface DateFieldEvents {
  change: CallbackEventListener<'input'>;
  input: CallbackEventListener<'input'>;
  blur: CallbackEventListener<'input'>;
  focus: CallbackEventListener<'input'>;
  viewchange: CallbackEventListener<typeof tagName> | null = null;
  invalid: CallbackEventListener<typeof tagName> | null = null;
}

export interface DatePickerEvents {
  viewchange: CallbackEventListener<typeof tagName> | null = null;
  focus: CallbackEventListener<typeof tagName> | null = null;
  blur: CallbackEventListener<typeof tagName> | null = null;
  input: CallbackEventListener<typeof tagName> | null = null;
  change: CallbackEventListener<typeof tagName> | null = null;
}

export interface DropZoneEvents {
  change: CallbackEventListener<typeof tagName$K>;
  input: CallbackEventListener<typeof tagName$K>;
  droprejected: CallbackEventListener<typeof tagName$K>;
}

export interface DropZoneSlots {
  /**
   * Content to include inside the DropZone container
   */
  children?: HTMLElement;
}

export interface EmailFieldEvents {
  change: CallbackEventListener<'input'>;
  input: CallbackEventListener<'input'>;
  blur: CallbackEventListener<'input'>;
  focus: CallbackEventListener<'input'>;
}

export interface GridSlots {
  /**
   * The content of the Grid.
   */
  children?: HTMLElement;
}

export interface GridItemSlots {
  /**
   * The content of the GridItem.
   */
  children?: HTMLElement;
}

export interface HeadingSlots {
  /**
   * The content of the Heading.
   */
  children?: HTMLElement;
}

export interface ImageEvents {
  load: CallbackEventListener<typeof tagName> | null = null;
  error: OnErrorEventHandler = null;
}

export interface LinkEvents {
  click: CallbackEventListener<TTagName> | null;
}

export interface LinkSlots {
  /**
   * The content of the Link.
   */
  children?: HTMLElement;
}

export interface ListItemSlots {
  /**
   * The content of the ListItem.
   */
  children?: HTMLElement;
}

export interface MenuSlots {
  /**
   * The Menu items.
   *
   * Only accepts `Button` and `Section` components.
   */
  children?: HTMLElement;
}

export interface ModalEvents {
  hide: CallbackEventListener<TTagName> | null;
  show: CallbackEventListener<TTagName> | null;
  afterhide: CallbackEventListener<TTagName> | null;
  aftershow: CallbackEventListener<TTagName> | null;
}

export interface ModalSlots {
  /**
   * The content of the Modal.
   */
  children?: HTMLElement;
  /**
   * The primary action to perform.
   *
   * Only a `Button` with a variant of `primary` is allowed.
   */
  'primary-action'?: HTMLElement;
  /**
   * The secondary actions to perform.
   *
   * Only `Button` elements with a variant of `secondary` or `auto` are allowed.
   */
  'secondary-actions'?: HTMLElement;
}

export interface MoneyFieldEvents {
  change: CallbackEventListener<'input'>;
  input: CallbackEventListener<'input'>;
  blur: CallbackEventListener<'input'>;
  focus: CallbackEventListener<'input'>;
}

export interface NumberFieldEvents {
  change: CallbackEventListener<'input'>;
  input: CallbackEventListener<'input'>;
  blur: CallbackEventListener<'input'>;
  focus: CallbackEventListener<'input'>;
}

export interface OptionSlots {
  /**
   * The content to use as the label.
   */
  children?: HTMLElement;
}

export interface OptionGroupSlots {
  /**
   * The options a user can select from.
   *
   * Accepts `Option` components.
   */
  children?: HTMLElement;
}

export interface OrderedListSlots {
  /**
   * The items of the OrderedList.
   *
   * Only ListItems are accepted.
   */
  children?: HTMLElement;
}

export interface PageSlots {
  /**
   * The content of the Page.
   */
  children?: HTMLElement;
  /**
   * The content to display in the aside section of the page.
   *
   * This slot is only rendered when `inlineSize` is "base".
   */
  aside?: HTMLElement;
  /**
   * The primary action for the page.
   *
   * Only accepts a single `Button` component with a `variant` of `primary`.
   *
   */
  'primary-action'?: HTMLElement;
  /**
   * Secondary actions for the page.
   *
   * Only accepts `ButtonGroup` and `Button` components with a `variant` of `secondary` or `auto`.
   */
  'secondary-actions'?: HTMLElement;
  /**
   * Navigations back actions for the page.
   *
   * Only accepts `Link` components.
   */
  'breadcrumb-actions'?: HTMLElement;
}

export interface ParagraphSlots {
  /**
   * The content of the Paragraph.
   */
  children?: HTMLElement;
}

export interface PasswordFieldEvents {
  change: CallbackEventListener<'input'>;
  input: CallbackEventListener<'input'>;
  blur: CallbackEventListener<'input'>;
  focus: CallbackEventListener<'input'>;
}

export interface PopoverEvents {
  show: CallbackEventListener<TTagName> | null;
  hide: CallbackEventListener<TTagName> | null;
  aftershow: CallbackEventListener<TTagName> | null;
  afterhide: CallbackEventListener<TTagName> | null;
  toggle: CallbackEventListener<TTagName> | null;
  aftertoggle: CallbackEventListener<TTagName> | null;
}

export interface PopoverSlots {
  /**
   * The content of the Popover.
   */
  children?: HTMLElement;
}

export interface PressButtonEvents {
  click: CallbackEventListener<typeof tagName> | null = null;
  blur: CallbackEventListener<typeof tagName> | null = null;
  focus: CallbackEventListener<typeof tagName> | null = null;
}

export interface PressButtonSlots {
  /**
   * The content of the PressButton.
   */
  children?: HTMLElement;
}

export interface QueryContainerSlots {
  /**
   * The content of the container.
   */
  children?: HTMLElement;
}

export interface ScrollBoxEvents {
  scroll: CallbackEventListener<TTagName> | null;
  scrolltoedge: CallbackEventListener<TTagName> | null;
}

export interface ScrollBoxSlots {
  /**
   * The content of the ScrollBox.
   */
  children?: HTMLElement;
}

export interface SearchFieldEvents {
  change: CallbackEventListener<'input'>;
  input: CallbackEventListener<'input'>;
  blur: CallbackEventListener<'input'>;
  focus: CallbackEventListener<'input'>;
}

export interface SectionSlots {
  /**
   * The content of the Section.
   */
  children?: HTMLElement;
}

export interface SelectEvents {
  change: CallbackEventListener<'input'>;
  input: CallbackEventListener<'input'>;
}

export interface SelectSlots {
  /**
   * The options a user can select from.
   *
   * Accepts `Option` and `OptionGroup` components.
   */
  children?: HTMLElement;
}

export interface StackSlots {
  /**
   * The content of the Stack.
   */
  children?: HTMLElement;
}

export interface SwitchEvents {
  change: CallbackEventListener<'input'>;
  input: CallbackEventListener<'input'>;
}

export interface TableEvents {
  previouspage: CallbackEventListener<typeof tagName> | null = null;
  nextpage: CallbackEventListener<typeof tagName> | null = null;
}

export interface TableSlots {
  /**
   * The content of the Table.
   */
  children?: HTMLElement;
  /**
   * Additional filters to display in the table. For example, the `s-search-field` component can be used to filter the table data.
   */
  filters?: HTMLElement;
}

export interface TableBodySlots {
  /**
   * The body of the table. May not have any semantic meaning in the Table's `list` variant.
   */
  children?: HTMLElement;
}

export interface TableCellSlots {
  /**
   * The content of the table cell.
   */
  children?: HTMLElement;
}

export interface TableHeaderSlots {
  /**
   * The heading of the column in the `table` variant, and the label of its data in `list` variant.
   */
  children?: HTMLElement;
}

export interface TableHeaderRowSlots {
  /**
   * Contents of the table heading row; children should be `TableHeading` components.
   */
  children?: HTMLElement;
}

export interface TableRowSlots {
  /**
   * The content of a TableRow, which should be `TableCell` components.
   */
  children?: HTMLElement;
}

export interface TextSlots {
  /**
   * The content of the Text.
   */
  children?: HTMLElement;
}

export interface TextAreaEvents {
  change: CallbackEventListener<'input'>;
  input: CallbackEventListener<'input'>;
  blur: CallbackEventListener<'input'>;
  focus: CallbackEventListener<'input'>;
}

export interface TextFieldEvents {
  change: CallbackEventListener<'input'>;
  input: CallbackEventListener<'input'>;
  blur: CallbackEventListener<'input'>;
  focus: CallbackEventListener<'input'>;
}

export interface TextFieldSlots {
  /**
   * The accessory to display in the text field.
   */
  accessory?: HTMLElement;
}

export interface ThumbnailEvents {
  load: CallbackEventListener<typeof tagName> | null = null;
  error: OnErrorEventHandler = null;
}

export interface TooltipSlots {
  /**
   * The content of the Tooltip.
   *
   * Only accepts `Text`, `Paragraph` components, and raw `textContent`.
   */
  children?: HTMLElement;
}

export interface URLFieldEvents {
  change: CallbackEventListener<'input'>;
  input: CallbackEventListener<'input'>;
  blur: CallbackEventListener<'input'>;
  focus: CallbackEventListener<'input'>;
}

export interface UnorderedListSlots {
  /**
   * The items of the UnorderedList.
   *
   * Only ListItems are accepted.
   */
  children?: HTMLElement;
}

export interface AdminActionSlots {
  /**
   * The primary action to display in the admin action.
   */
  'primary-action': HTMLElement;
  /**
   * The secondary actions to display in the admin action.
   */
  'secondary-actions': HTMLElement;
}

export interface FormEvents {
  /**
   * A callback that is run when the form is submitted.
   */
  submit: CallbackExtendableEventListener<typeof tagName> | null = null;
  /**
   * A callback that is run when the form is reset.
   */
  reset: CallbackEventListener<typeof tagName> | null = null;
}

export interface FunctionSettingsEvents {
  /**
   * An optional callback function that will be run by the admin when the user
   * commits their changes in the admin-rendered part of the function settings
   * experience. If `event.waitUntil` is called with a promise, the admin will wait for the
   * promise to resolve before committing any changes to Shopify’s servers. If
   * the promise rejects, the admin will abort the changes and display an error,
   * using the `message` property of the error you reject with.
   */
  submit: CallbackExtendableEventListener<typeof tagName> | null = null;
  /**
   * An optional callback function that will be run by the admin when
   * committing the changes to Shopify’s servers fails. The error event you receive includes
   * an `error` property that is an `AggregateError` object. This object includes
   * an array of errors that were caused by data your extension provided.
   * Network errors and user errors that are out of your control will not be reported here.
   *
   * In the `onError` callback, you should update your extension’s UI to
   * highlight the fields that caused the errors, and display the error messages
   * to the user.
   */
  error: CallbackErrorEventListener<
    typeof tagName,
    FunctionSettingsErrorEvent['error']['errors'][0]
  > | null = null;
  /**
   * A callback that is run when the function settings form is reset.
   */
  reset: CallbackEventListener<typeof tagName> | null = null;
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$$]: ReactProps$$ & ReactBaseElementProps<Avatar>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$$]: ReactProps$$ & ReactBaseElementProps<Avatar>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$_]: ReactProps$_ & ReactBaseElementPropsWithChildren<Badge>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$_]: ReactProps$_ & ReactBaseElementPropsWithChildren<Badge>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Z]: Omit<BannerJSXProps, 'secondaryActions'> &
        ReactBaseElementPropsWithChildren<Banner>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Z]: Omit<BannerJSXProps, 'secondaryActions'> &
        ReactBaseElementPropsWithChildren<Banner>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Y]: BoxJSXProps & ReactBaseElementPropsWithChildren<Box>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Y]: BoxJSXProps & ReactBaseElementPropsWithChildren<Box>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$X]: ButtonJSXProps & ReactBaseElementPropsWithChildren<Button>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$X]: ButtonJSXProps & ReactBaseElementPropsWithChildren<Button>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$W]: Omit<
        ButtonGroupJSXProps,
        'primaryAction' | 'secondaryActions'
      > &
        ReactBaseElementPropsWithChildren<ButtonGroup>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$W]: Omit<
        ButtonGroupJSXProps,
        'primaryAction' | 'secondaryActions'
      > &
        ReactBaseElementPropsWithChildren<ButtonGroup>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$V]: CheckboxJSXProps & ReactBaseElementProps<Checkbox>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$V]: CheckboxJSXProps & ReactBaseElementProps<Checkbox>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$U]: Omit<ChipJSXProps, 'graphic'> &
        ReactBaseElementPropsWithChildren<Chip>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$U]: Omit<ChipJSXProps, 'graphic'> &
        ReactBaseElementPropsWithChildren<Chip>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$T]: Omit<ChoiceJSXProps, 'details' | 'secondaryContent'> &
        ReactBaseElementPropsWithChildren<Choice>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$T]: Omit<ChoiceJSXProps, 'details' | 'secondaryContent'> &
        ReactBaseElementPropsWithChildren<Choice>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$S]: ChoiceListJSXProps &
        ReactBaseElementPropsWithChildren<ChoiceList>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$S]: ChoiceListJSXProps &
        ReactBaseElementPropsWithChildren<ChoiceList>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$R]: ClickableJSXProps &
        ReactBaseElementPropsWithChildren<Clickable>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$R]: ClickableJSXProps &
        ReactBaseElementPropsWithChildren<Clickable>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Q]: Omit<ClickableChipJSXProps, 'graphic'> &
        ReactBaseElementPropsWithChildren<ClickableChip>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Q]: Omit<ClickableChipJSXProps, 'graphic'> &
        ReactBaseElementPropsWithChildren<ClickableChip>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$P]: ColorFieldJSXProps & ReactBaseElementProps<ColorField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$P]: ColorFieldJSXProps & ReactBaseElementProps<ColorField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$O]: ColorPickerJSXProps & ReactBaseElementProps<ColorPicker>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$O]: ColorPickerJSXProps & ReactBaseElementProps<ColorPicker>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$N]: DateFieldJSXProps & ReactBaseElementProps<DateField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$N]: DateFieldJSXProps & ReactBaseElementProps<DateField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$M]: DatePickerJSXProps & ReactBaseElementProps<DatePicker>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$M]: DatePickerJSXProps & ReactBaseElementProps<DatePicker>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$L]: DividerJSXProps & ReactBaseElementProps<Divider>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$L]: DividerJSXProps & ReactBaseElementProps<Divider>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$K]: DropZoneJSXProps &
        ReactBaseElementPropsWithChildren<DropZone>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$K]: DropZoneJSXProps &
        ReactBaseElementPropsWithChildren<DropZone>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$J]: EmailFieldJSXProps & ReactBaseElementProps<EmailField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$J]: EmailFieldJSXProps & ReactBaseElementProps<EmailField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$I]: GridJSXProps & ReactBaseElementPropsWithChildren<Grid>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$I]: GridJSXProps & ReactBaseElementPropsWithChildren<Grid>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$H]: GridItemJSXProps &
        ReactBaseElementPropsWithChildren<GridItem>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$H]: GridItemJSXProps &
        ReactBaseElementPropsWithChildren<GridItem>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$G]: HeadingJSXProps & ReactBaseElementPropsWithChildren<Heading>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$G]: HeadingJSXProps & ReactBaseElementPropsWithChildren<Heading>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$F]: IconJSXProps & ReactBaseElementProps<Icon>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$F]: IconJSXProps & ReactBaseElementProps<Icon>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$E]: ImageJSXProps & ReactBaseElementProps<Image>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$E]: ImageJSXProps & ReactBaseElementProps<Image>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$D]: LinkJSXProps & ReactBaseElementPropsWithChildren<Link>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$D]: LinkJSXProps & ReactBaseElementPropsWithChildren<Link>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$C]: ListItemJSXProps &
        ReactBaseElementPropsWithChildren<ListItem>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$C]: ListItemJSXProps &
        ReactBaseElementPropsWithChildren<ListItem>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$B]: MenuJSXProps & ReactBaseElementPropsWithChildren<Menu>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$B]: MenuJSXProps & ReactBaseElementPropsWithChildren<Menu>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$A]: Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'> &
        ReactBaseElementPropsWithChildren<Modal>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$A]: Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'> &
        ReactBaseElementPropsWithChildren<Modal>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$z]: MoneyFieldJSXProps & ReactBaseElementProps<MoneyField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$z]: MoneyFieldJSXProps & ReactBaseElementProps<MoneyField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$y]: NumberFieldJSXProps & ReactBaseElementProps<NumberField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$y]: NumberFieldJSXProps & ReactBaseElementProps<NumberField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$x]: OptionJSXProps & ReactBaseElementPropsWithChildren<Option>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$x]: OptionJSXProps & ReactBaseElementPropsWithChildren<Option>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$w]: OptionGroupJSXProps &
        ReactBaseElementPropsWithChildren<OptionGroup>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$w]: OptionGroupJSXProps &
        ReactBaseElementPropsWithChildren<OptionGroup>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$v]: OrderedListJSXProps &
        ReactBaseElementPropsWithChildren<OrderedList>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$v]: OrderedListJSXProps &
        ReactBaseElementPropsWithChildren<OrderedList>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$u]: Omit<
        PageJSXProps,
        'aside' | 'primaryAction' | 'secondaryActions' | 'breadcrumbActions'
      > &
        ReactBaseElementPropsWithChildren<Page>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$u]: Omit<
        PageJSXProps,
        'aside' | 'primaryAction' | 'secondaryActions' | 'breadcrumbActions'
      > &
        ReactBaseElementPropsWithChildren<Page>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$t]: ParagraphJSXProps &
        ReactBaseElementPropsWithChildren<Paragraph>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$t]: ParagraphJSXProps &
        ReactBaseElementPropsWithChildren<Paragraph>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$s]: PasswordFieldJSXProps & ReactBaseElementProps<PasswordField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$s]: PasswordFieldJSXProps & ReactBaseElementProps<PasswordField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$r]: PopoverJSXProps & ReactBaseElementPropsWithChildren<Popover>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$r]: PopoverJSXProps & ReactBaseElementPropsWithChildren<Popover>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$q]: PressButtonJSXProps &
        ReactBaseElementPropsWithChildren<PressButton>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$q]: PressButtonJSXProps &
        ReactBaseElementPropsWithChildren<PressButton>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$p]: QueryContainerJSXProps &
        ReactBaseElementPropsWithChildren<QueryContainer>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$p]: QueryContainerJSXProps &
        ReactBaseElementPropsWithChildren<QueryContainer>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$o]: ScrollBoxJSXProps &
        ReactBaseElementPropsWithChildren<ScrollBox>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$o]: ScrollBoxJSXProps &
        ReactBaseElementPropsWithChildren<ScrollBox>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$n]: SearchFieldJSXProps & ReactBaseElementProps<SearchField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$n]: SearchFieldJSXProps & ReactBaseElementProps<SearchField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$m]: SectionJSXProps & ReactBaseElementPropsWithChildren<Section>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$m]: SectionJSXProps & ReactBaseElementPropsWithChildren<Section>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$l]: SelectJSXProps & ReactBaseElementPropsWithChildren<Select>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$l]: SelectJSXProps & ReactBaseElementPropsWithChildren<Select>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$k]: SpinnerJSXProps & ReactBaseElementProps<Spinner>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$k]: SpinnerJSXProps & ReactBaseElementProps<Spinner>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$j]: StackJSXProps & ReactBaseElementPropsWithChildren<Stack>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$j]: StackJSXProps & ReactBaseElementPropsWithChildren<Stack>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$i]: SwitchJSXProps & ReactBaseElementProps<Switch>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$i]: SwitchJSXProps & ReactBaseElementProps<Switch>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$h]: Omit<TableJSXProps, 'filters'> &
        ReactBaseElementPropsWithChildren<Table>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$h]: Omit<TableJSXProps, 'filters'> &
        ReactBaseElementPropsWithChildren<Table>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$g]: TableBodyJSXProps &
        ReactBaseElementPropsWithChildren<TableBody>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$g]: TableBodyJSXProps &
        ReactBaseElementPropsWithChildren<TableBody>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$f]: TableCellJSXProps &
        ReactBaseElementPropsWithChildren<TableCell>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$f]: TableCellJSXProps &
        ReactBaseElementPropsWithChildren<TableCell>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$e]: TableHeaderJSXProps &
        ReactBaseElementPropsWithChildren<TableHeader>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$e]: TableHeaderJSXProps &
        ReactBaseElementPropsWithChildren<TableHeader>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$d]: TableHeaderRowJSXProps &
        ReactBaseElementPropsWithChildren<TableHeaderRow>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$d]: TableHeaderRowJSXProps &
        ReactBaseElementPropsWithChildren<TableHeaderRow>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$c]: TableRowJSXProps &
        ReactBaseElementPropsWithChildren<TableRow>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$c]: TableRowJSXProps &
        ReactBaseElementPropsWithChildren<TableRow>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$b]: TextJSXProps & ReactBaseElementPropsWithChildren<Text>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$b]: TextJSXProps & ReactBaseElementPropsWithChildren<Text>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$a]: TextAreaJSXProps & ReactBaseElementProps<TextArea>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$a]: TextAreaJSXProps & ReactBaseElementProps<TextArea>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$9]: Omit<TextFieldJSXProps, 'accessory'> &
        ReactBaseElementPropsWithChildren<TextField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$9]: Omit<TextFieldJSXProps, 'accessory'> &
        ReactBaseElementPropsWithChildren<TextField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$8]: ThumbnailJSXProps & ReactBaseElementProps<Thumbnail>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$8]: ThumbnailJSXProps & ReactBaseElementProps<Thumbnail>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$7]: TooltipJSXProps & ReactBaseElementPropsWithChildren<Tooltip>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$7]: TooltipJSXProps & ReactBaseElementPropsWithChildren<Tooltip>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$6]: URLFieldJSXProps & ReactBaseElementProps<URLField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$6]: URLFieldJSXProps & ReactBaseElementProps<URLField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$5]: UnorderedListJSXProps &
        ReactBaseElementPropsWithChildren<UnorderedList>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$5]: UnorderedListJSXProps &
        ReactBaseElementPropsWithChildren<UnorderedList>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$4]: Omit<
        AdminActionJSXProps,
        'primaryAction' | 'secondaryActions'
      > & {
        children?: React.ReactNode;
      };
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$4]: Omit<
        AdminActionJSXProps,
        'primaryAction' | 'secondaryActions'
      > & {
        children?: React.ReactNode;
      };
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$3]: AdminBlockJSXProps & {
        children?: React.ReactNode;
      };
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$3]: AdminBlockJSXProps & {
        children?: React.ReactNode;
      };
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$2]: AdminPrintActionJSXProps & {
        children?: React.ReactNode;
      };
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$2]: AdminPrintActionJSXProps & {
        children?: React.ReactNode;
      };
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$1]: FormJSXProps & {
        children?: React.ReactNode;
      };
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$1]: FormJSXProps & {
        children?: React.ReactNode;
      };
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: FunctionSettingsJSXProps & {
        children?: React.ReactNode;
      };
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: FunctionSettingsJSXProps & {
        children?: React.ReactNode;
      };
    }
  }
}
