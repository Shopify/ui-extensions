/** VERSION: undefined **/
/* eslint-disable import-x/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import-x/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
/**
 * TODO: Update `any` type here after this is resolved
 * https://github.com/Shopify/ui-api-design/issues/139
 */
export type ComponentChildren = any;
export interface GlobalProps {
  /**
   * A unique identifier for the element.
   */
  id?: string;
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
  | 'custom';
declare const privateIconArray: readonly [
  'adjust',
  'affiliate',
  'airplane',
  'alert-bubble',
  'alert-circle',
  'alert-diamond',
  'alert-location',
  'alert-octagon-filled',
  'alert-octagon',
  'alert-triangle-filled',
  'alert-triangle',
  'app-extension',
  'apps',
  'archive',
  'arrow-down-circle',
  'arrow-down-right',
  'arrow-down',
  'arrow-left-circle',
  'arrow-left',
  'arrow-right-circle',
  'arrow-right',
  'arrow-up-circle',
  'arrow-up-right',
  'arrow-up',
  'arrows-in-horizontal',
  'arrows-out-horizontal',
  'attachment',
  'automation',
  'backspace',
  'bag',
  'bank',
  'barcode',
  'bill',
  'blank',
  'blog',
  'bolt-filled',
  'bolt',
  'book-open',
  'book',
  'bug',
  'bullet',
  'business-entity',
  'button-press',
  'button',
  'calculator',
  'calendar-check',
  'calendar-compare',
  'calendar-list',
  'calendar-time',
  'calendar',
  'camera-flip',
  'camera',
  'caret-down',
  'caret-left',
  'caret-right',
  'caret-up',
  'cart-abandoned',
  'cart-discount',
  'cart-down',
  'cart-sale',
  'cart-up',
  'cart',
  'cash-dollar',
  'cash-euro',
  'cash-pound',
  'cash-rupee',
  'cash-yen',
  'catalog-product',
  'categories',
  'channels',
  'chart-cohort',
  'chart-donut',
  'chart-funnel',
  'chart-histogram-first-last',
  'chart-histogram-first',
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
  'chat-new',
  'chat-referral',
  'chat',
  'check-circle-filled',
  'check-circle',
  'check',
  'checkbox',
  'chevron-down-circle',
  'chevron-down',
  'chevron-left-circle',
  'chevron-left',
  'chevron-right-circle',
  'chevron-right',
  'chevron-up-circle',
  'chevron-up',
  'circle-dashed',
  'circle',
  'clipboard-check',
  'clipboard-checklist',
  'clipboard',
  'clock-revert',
  'clock',
  'code-add',
  'code',
  'collection-featured',
  'collection-list',
  'collection-reference',
  'collection',
  'color-none',
  'color',
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
  'credit-card-cancel',
  'credit-card-percent',
  'credit-card-reader-chip',
  'credit-card-reader-tap',
  'credit-card-reader',
  'credit-card-secure',
  'credit-card-tap-chip',
  'credit-card',
  'crop',
  'currency-convert',
  'cursor-banner',
  'cursor-option',
  'cursor',
  'data-presentation',
  'data-table',
  'database-add',
  'database-connect',
  'database',
  'delete',
  'delivered',
  'delivery',
  'desktop',
  'disabled',
  'discount-add',
  'discount-code',
  'discount',
  'dns-settings',
  'dock-floating',
  'dock-side',
  'domain-landing-page',
  'domain-new',
  'domain-redirect',
  'domain',
  'download',
  'drag-drop',
  'drag-handle',
  'duplicate',
  'edit',
  'email-follow-up',
  'email-newsletter',
  'email',
  'empty',
  'enabled',
  'enter',
  'envelope-soft-pack',
  'envelope',
  'eraser',
  'exchange',
  'exit',
  'export',
  'external',
  'eye-check-mark',
  'eye-dropper-list',
  'eye-dropper',
  'eye-first',
  'eyeglasses',
  'fav',
  'favicon',
  'file-list',
  'file',
  'filter-active',
  'filter',
  'flag',
  'flip-horizontal',
  'flip-vertical',
  'flower',
  'folder-add',
  'folder-down',
  'folder-remove',
  'folder-up',
  'folder',
  'food',
  'foreground',
  'forklift',
  'forms',
  'games',
  'gauge',
  'geolocation',
  'gift-card',
  'gift',
  'git-branch',
  'git-commit',
  'git-repository',
  'globe-asia',
  'globe-europe',
  'globe-lines',
  'globe-list',
  'globe',
  'grid',
  'hashtag-decimal',
  'hashtag-list',
  'hashtag',
  'heart',
  'hide-filled',
  'hide',
  'home',
  'icons',
  'identity-card',
  'image-add',
  'image-alt',
  'image-explore',
  'image-magic',
  'image-none',
  'image-with-text-overlay',
  'image',
  'images',
  'import',
  'in-progress',
  'incentive',
  'incoming',
  'incomplete',
  'info-filled',
  'info',
  'inheritance',
  'inventory-updated',
  'inventory',
  'iq',
  'key',
  'keyboard-filled',
  'keyboard-hide',
  'keyboard',
  'label-printer',
  'language-translate',
  'language',
  'layout-block',
  'layout-buy-button-horizontal',
  'layout-buy-button-vertical',
  'layout-buy-button',
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
  'link-list',
  'link',
  'list-bulleted',
  'list-numbered',
  'live',
  'location-none',
  'location',
  'lock',
  'map',
  'markets-euro',
  'markets-rupee',
  'markets-yen',
  'markets',
  'maximize',
  'measurement-size-list',
  'measurement-size',
  'measurement-volume-list',
  'measurement-volume',
  'measurement-weight-list',
  'measurement-weight',
  'media-receiver',
  'megaphone',
  'mention',
  'menu-horizontal',
  'menu-vertical',
  'menu',
  'merge',
  'metafields',
  'metaobject-list',
  'metaobject-reference',
  'metaobject',
  'microphone',
  'minimize',
  'minus-circle',
  'minus',
  'mobile',
  'money-none',
  'money',
  'moon',
  'nature',
  'note-add',
  'note',
  'notification',
  'order-batches',
  'order-draft',
  'order-first',
  'order-fulfilled',
  'order-repeat',
  'order-unfulfilled',
  'order',
  'orders-status',
  'organization',
  'outdent',
  'outgoing',
  'package-fulfilled',
  'package-on-hold',
  'package-returned',
  'package',
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
  'page',
  'pagination-end',
  'pagination-start',
  'paint-brush-flat',
  'paint-brush-round',
  'paper-check',
  'partially-complete',
  'passkey',
  'paste',
  'pause-circle',
  'payment-capture',
  'payment',
  'payout-dollar',
  'payout-euro',
  'payout-pound',
  'payout-rupee',
  'payout-yen',
  'payout',
  'person-add',
  'person-exit',
  'person-list',
  'person-lock',
  'person-remove',
  'person-segment',
  'person',
  'personalized-text',
  'phone-in',
  'phone-out',
  'phone',
  'pin-remove',
  'pin',
  'plan',
  'play-circle',
  'play',
  'plus-circle-down',
  'plus-circle-filled',
  'plus-circle-up',
  'plus-circle',
  'plus',
  'point-of-sale',
  'price-list',
  'print',
  'product-add',
  'product-cost',
  'product-list',
  'product-reference',
  'product-remove',
  'product-return',
  'product-unavailable',
  'product',
  'profile-filled',
  'profile',
  'question-circle-filled',
  'question-circle',
  'receipt-dollar',
  'receipt-euro',
  'receipt-folded',
  'receipt-paid',
  'receipt-pound',
  'receipt-refund',
  'receipt-rupee',
  'receipt-yen',
  'receipt',
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
  'search-add',
  'search-list',
  'search-recent',
  'search-resource',
  'search',
  'select',
  'send',
  'settings',
  'share',
  'shield-check-mark',
  'shield-none',
  'shield-pending',
  'shield-person',
  'shipping-label',
  'shopcodes',
  'slideshow',
  'smiley-happy',
  'smiley-joy',
  'smiley-neutral',
  'smiley-sad',
  'social-ad',
  'social-post',
  'sort-ascending',
  'sort-descending',
  'sort',
  'sound',
  'sports',
  'star-filled',
  'star-half',
  'star-list',
  'star',
  'status-active',
  'status',
  'stop-circle',
  'store-import',
  'store-managed',
  'store-online',
  'store',
  'sun',
  'table-masonry',
  'table',
  'tablet',
  'target',
  'tax',
  'team',
  'text-align-center',
  'text-align-left',
  'text-align-right',
  'text-block',
  'text-bold',
  'text-color',
  'text-font-list',
  'text-font',
  'text-grammar',
  'text-in-columns',
  'text-in-rows',
  'text-indent-remove',
  'text-indent',
  'text-italic',
  'text-quote',
  'text-title',
  'text-underline',
  'text-with-image',
  'text',
  'theme-edit',
  'theme-store',
  'theme-template',
  'theme',
  'three-d-environment',
  'thumbs-down',
  'thumbs-up',
  'tip-jar',
  'toggle-off',
  'toggle-on',
  'transaction-fee-dollar',
  'transaction-fee-euro',
  'transaction-fee-pound',
  'transaction-fee-rupee',
  'transaction-fee-yen',
  'transaction',
  'transfer-in',
  'transfer-internal',
  'transfer-out',
  'transfer',
  'truck',
  'undo',
  'unknown-device',
  'unlock',
  'upload',
  'variant',
  'view',
  'viewport-narrow',
  'viewport-short',
  'viewport-tall',
  'viewport-wide',
  'wallet',
  'wand',
  'watch',
  'wifi',
  'work-list',
  'work',
  'wrench',
  'x-circle-filled',
  'x-circle',
  'x',
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
/**
 * Prevents widening string literal types in a union to `string`.
 * @example
 * type PropName = 'foo' | 'bar' | string
 * //   ^? string
 * type PropName = 'foo' | 'bar' | (string & {})
 * //   ^? 'foo' | 'bar' | (string & {})
 */
export type AnyString = string & {};
export interface BadgeProps extends GlobalProps {
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
export interface BannerProps extends GlobalProps, ActionSlots {
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
  display?: 'auto' | 'none';
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
  padding?: MaybeAllValuesShorthandProperty<PaddingKeyword>;
  /**
   * Adjust the block-padding.
   *
   * - `large none` means block-start padding is `large`, block-end padding is `none`.
   *
   * This overrides the block value of `padding`.
   *
   * @default '' - meaning no override
   */
  paddingBlock?: MaybeTwoValuesShorthandProperty<PaddingKeyword> | '';
  /**
   * Adjust the block-start padding.
   *
   * This overrides the block-start value of `paddingBlock`.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart?: PaddingKeyword | '';
  /**
   * Adjust the block-end padding.
   *
   * This overrides the block-end value of `paddingBlock`.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd?: PaddingKeyword | '';
  /**
   * Adjust the inline padding.
   *
   * - `large none` means inline-start padding is `large`, inline-end padding is `none`.
   *
   * This overrides the inline value of `padding`.
   *
   * @default '' - meaning no override
   */
  paddingInline?: MaybeTwoValuesShorthandProperty<PaddingKeyword> | '';
  /**
   * Adjust the inline-start padding.
   *
   * This overrides the inline-start value of `paddingInline`.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart?: PaddingKeyword | '';
  /**
   * Adjust the inline-end padding.
   *
   * This overrides the inline-end value of `paddingInline`.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd?: PaddingKeyword | '';
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
  blockSize?: SizeUnitsOrAuto;
  /**
   * Adjust the minimum block size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size
   *
   * @default '0'
   */
  minBlockSize?: SizeUnits;
  /**
   * Adjust the maximum block size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size
   *
   * @default 'none'
   */
  maxBlockSize?: SizeUnitsOrNone;
  /**
   * Adjust the inline size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size
   *
   * @default 'auto'
   */
  inlineSize?: SizeUnitsOrAuto;
  /**
   * Adjust the minimum inline size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size
   *
   * @default '0'
   */
  minInlineSize?: SizeUnits;
  /**
   * Adjust the maximum inline size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size
   *
   * @default 'none'
   */
  maxInlineSize?: SizeUnitsOrNone;
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
export interface BoxProps extends BaseBoxPropsWithRole, GlobalProps {}
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
export interface ButtonBehaviorProps extends InteractionProps, FocusEventProps {
  /**
   * The behavior of the button.
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
   * Callback when the button is activated.
   * This will be called before the action indicated by `type`.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
   */
  onClick?: (event: Event) => void;
  /**
   * Disables the button, meaning it cannot be clicked or receive focus.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Replaces content with a loading indicator while a background action is being performed.
   *
   * This also disables the button.
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
   * Download only works for same-origin URLs, or the blob: and data: schemes.
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
export interface ButtonProps extends GlobalProps, BaseClickableProps {
  /**
   * A label that describes the purpose or contents of the Button. It will be read to users using assistive technologies such as screen readers.
   *
   * Use this when using only an icon or the button text is not enough context
   * for users using assistive technologies.
   */
  accessibilityLabel?: string;
  /**
   * The content of the Button.
   */
  children?: ComponentChildren;
  /**
   * The type of icon to be displayed in the button.
   *
   * @default ''
   */
  icon?: IconType | AnyString;
  /**
   * The displayed inline width of the button.
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
   * Sets the tone of the Button, based on the intention of the information being conveyed.
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
export interface ChoiceProps extends GlobalProps, BaseOptionProps {
  /**
   * Content to use as the choice label.
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
export interface ChoiceListProps
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
export interface ClickableProps
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
export interface DatePickerProps
  extends GlobalProps,
    InputProps,
    FocusEventProps {
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
   * Dates that cannot be selected. These subtract from `allowDates`.
   *
   * A comma-separated list of dates, date ranges. Whitespace is allowed after commas.
   *
   * The default `''` has no effect on `allowDates`.
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
   * Days of the week that can be selected. These intersect with the result of `allowDates` and `disallowDates`.
   *
   * A comma-separated list of dates, date ranges. Whitespace is allowed after commas.
   *
   * The default `''` has no effect on the result of `allowDates` and `disallowDates`.
   *
   * Days are `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`.
   *
   * @default ""
   *
   * @example
   * 'saturday, sunday' // allow only weekends within the result of `allowDates` and `disallowDates`.
   */
  allowDays?: string;
  /**
   * Days of the week that cannot be selected. This subtracts from `allowDays`, and intersects with the result of `allowDates` and `disallowDates`.
   *
   * A comma-separated list of dates, date ranges. Whitespace is allowed after commas.
   *
   * The default `''` has no effect on `allowDays`.
   *
   * Days are `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`.
   *
   * @default ""
   *
   * @example
   * 'saturday, sunday' // disallow weekends within the result of `allowDates` and `disallowDates`.
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
   * Events:
   *
   * - `onInput` - Invoked when any date is selected. Will fire before `onChange`.
   * - `onChange` - Invoked when the `value` is changed. For `type="single"` and `type="multiple"`, this is the same as `onInput`.
   *      For `type="range"`, this is only called when the range is completed by selecting the end date of the range.
   *
   * @default ""
   */
  value?: string;
}
export interface DateFieldProps
  extends GlobalProps,
    BaseTextFieldProps,
    Pick<
      DatePickerProps,
      | 'view'
      | 'defaultView'
      | 'value'
      | 'defaultValue'
      | 'allow'
      | 'disallow'
      | 'onViewChange'
    >,
    AutocompleteProps<DateAutocompleteField> {
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
export interface EmailFieldProps
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<EmailAutocompleteField> {}
export type EmailAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'email' | `${AutocompleteAddressGroup} email`
>;
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
  gap?: MaybeTwoValuesShorthandProperty<SpacingKeyword>;
  /**
   * Adjust spacing between elements in the block axis.
   *
   * This overrides the row value of `gap`.
   *
   * @default '' - meaning no override
   */
  rowGap?: SpacingKeyword | '';
  /**
   * Adjust spacing between elements in the inline axis.
   *
   * This overrides the column value of `gap`.
   *
   * @default '' - meaning no override
   */
  columnGap?: SpacingKeyword | '';
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
export interface IconProps extends GlobalProps {
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
export interface ModalProps
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
export interface NumberFieldProps
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
}
export type NumberAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'one-time-code' | 'cc-number' | 'cc-csc'
>;
export type OverflowKeyword = 'auto' | 'hidden';
export interface ScrollBoxProps
  extends GlobalProps,
    Omit<BaseBoxPropsWithRole, 'overflow'> {
  /**
   * Sets the overflow behavior of the element.
   *
   * - `hidden`: clips the content when it is larger than the element’s container and the element will not be scrollable in that axis.
   * - `auto`: clips the content when it is larger than the element’s container and make it scrollable in that axis.
   *
   * 1-to-2-value syntax is supported but note that, contrary to the CSS, it uses flow-relative values and the order is:
   *
   * - 2 values: `block inline`
   *
   * @default 'auto'
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
   */
  overflow?: OverflowKeyword | `${OverflowKeyword} ${OverflowKeyword}`;
}
export interface SearchFieldProps
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<SearchAutocompleteField> {}
export type SearchAutocompleteField = TextAutocompleteField;
export interface StackProps
  extends GlobalProps,
    BaseBoxPropsWithRole,
    GapProps {
  /**
   * The content of the Stack.
   */
  children?: ComponentChildren;
  /**
   * Sets how the children are placed within the Stack.
   *
   * @default 'block'
   *
   * @implementation the content will wrap if the direction is 'inline', and not wrap if the direction is 'block'
   */
  direction?: 'block' | 'inline';
  /**
   * Aligns the Stack along the main axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   * @default 'normal'
   */
  justifyContent?: JustifyContentKeyword;
  /**
   * Aligns the Stack's children along the cross axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   * @default 'normal'
   */
  alignItems?: AlignItemsKeyword;
  /**
   * Aligns the Stack along the cross axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   * @default 'normal'
   */
  alignContent?: AlignContentKeyword;
}
export interface TextProps
  extends GlobalProps,
    AccessibilityVisibilityProps,
    BaseTypographyProps,
    DisplayProps {
  /**
   * The content of the Text.
   */
  children?: ComponentChildren;
  /**
   * Provide semantic meaning and default styling to the text.
   *
   * Other presentation properties on `<s-text>` override the default styling.
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
export interface TextAreaProps
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
export interface TextFieldProps
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<TextAutocompleteField>,
    FieldDecorationProps {}
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
export type RefObject<T> = {
  current: T | null;
};
export type RefCallback<T> = (instance: T | null) => void | (() => void);
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

import {ReactNode} from 'react';

type ComponentChildren = any;
/**
 * Used when an element does not have children.
 */
interface BaseElementProps<TClass = HTMLElement> {
  key?: Key;
  ref?: Ref<TClass>;
  slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  children?: ComponentChildren;
}
interface CallbackEvent<T extends keyof HTMLElementTagNameMap> {
  currentTarget: HTMLElementTagNameMap[T];
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: any;
  eventPhase: number;
  target: HTMLElementTagNameMap[T] | null;
}
interface CallbackToggleEvent<TTagName extends keyof HTMLElementTagNameMap>
  extends CallbackEvent<TTagName> {
  newState?: 'open' | 'closed';
  oldState?: 'open' | 'closed';
  detail: {
    newState: 'open' | 'closed';
    oldState: 'open' | 'closed';
  };
}

declare const tagName$k = 's-button';
interface ButtonJSXProps
  extends Pick<
    ButtonProps,
    | 'accessibilityLabel'
    | 'disabled'
    | 'command'
    | 'commandFor'
    | 'loading'
    | 'tone'
    | 'variant'
    | 'id'
  > {
  tone?: Extract<
    ButtonProps['tone'],
    'auto' | 'critical' | 'warning' | 'caution'
  >;
  variant?: Extract<ButtonProps['variant'], 'primary' | 'secondary'>;
  /**
   * test
   */
  onClick?: (event: CallbackEvent<typeof tagName$k>) => void;
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$k]: ButtonJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$k]: BaseElementPropsWithChildren<ButtonJSXProps>;
    }
  }
}

declare const tagName$j = 's-text';
interface TextJSXProps extends Pick<TextProps, 'tone' | 'type'> {
  color?: 'subdued' | 'base' | 'strong';
  type?: Extract<TextProps['type'], 'strong' | 'small' | 'generic'>;
  tone?: Extract<
    TextProps['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical' | 'caution'
  >;
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$j]: TextJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$j]: BaseElementPropsWithChildren<TextJSXProps>;
    }
  }
}

declare const tagName$i = 's-scroll-box';
interface ScrollBoxJSXProps extends Pick<ScrollBoxProps, 'id'> {
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$i]: ScrollBoxJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$i]: BaseElementPropsWithChildren<ScrollBoxJSXProps>;
    }
  }
}

declare const tagName$h = 's-tile';
interface TileJSXProps {
  title: string;
  subtitle?: string;
  enabled?: boolean;
  destructive?: boolean;
  badgeValue?: string;
  onPress?: () => void;
  testID?: string;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$h]: TileJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$h]: BaseElementPropsWithChildren<TileJSXProps>;
    }
  }
}

declare const tagName$g = 's-navigator';
interface NavigatorJSXProps {
  initialScreenName?: string;
  children?: React.ReactNode;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$g]: NavigatorJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$g]: BaseElementPropsWithChildren<NavigatorJSXProps>;
    }
  }
}

declare const tagName$f = 's-screen';
interface ScreenJSXProps {
  /**
   * Used to identify this screen as a destination in the navigation stack.
   */
  name: string;
  /**
   * The title of the screen which will be displayed on the UI.
   */
  title: string;
  /**
   * Displays a loading indicator when `true`.
   * Set this to `true` when performing an asynchronous task, and then to false when the data becomes available to the UI.
   */
  isLoading?: boolean;
  /**
   * Dictates how the `Screen` will be presented when navigated to.
   */
  presentation?: ScreenPresentationProps;
  /**
   * Displays a secondary action button on the screen.
   */
  secondaryActions?: ComponentChild;
  /**
   * Triggered when the screen is navigated to.
   */
  onNavigate?: () => void;
  /**
   * Triggered when the user navigates back from this screen. Runs after screen is unmounted.
   */
  onNavigateBack?: () => void;
  /**
   * A callback that gets triggered when the navigation event completes and the screen receives the parameters.
   */
  onReceiveParams?: (params: any) => void;
  children?: React.ReactNode;
}
/** Represents the presentation of a screen in the navigation stack.
 * @property `sheet` displays the screen from the bottom on `navigate` when `true`.
 */
interface ScreenPresentationProps {
  /**
   * Displays the screen from the bottom on `navigate` when `true`.
   */
  sheet?: boolean;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$f]: ScreenJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$f]: BaseElementPropsWithChildren<ScreenJSXProps>;
    }
  }
}

declare const tagName$e = 's-banner';
interface BannerJSXProps
  extends Pick<BannerProps, 'heading' | 'hidden' | 'tone' | 'id'> {
  tone?: Extract<
    BannerProps['tone'],
    'success' | 'info' | 'warning' | 'critical'
  >;
  primaryAction?: ComponentChild;
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$e]: BannerJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$e]: BaseElementPropsWithChildren<
        Omit<BannerJSXProps, 'primaryAction'>
      >;
    }
  }
}

declare const tagName$d = 's-box';
interface BoxJSXProps
  extends Pick<
    BoxProps,
    | 'padding'
    | 'paddingBlock'
    | 'paddingBlockStart'
    | 'paddingBlockEnd'
    | 'paddingInline'
    | 'paddingInlineStart'
    | 'paddingInlineEnd'
    | 'blockSize'
    | 'minBlockSize'
    | 'maxBlockSize'
    | 'inlineSize'
    | 'minInlineSize'
    | 'maxInlineSize'
  > {
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$d]: BoxJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$d]: BaseElementPropsWithChildren<BoxJSXProps>;
    }
  }
}

declare const tagName$c = 's-icon';
type SupportedIconNames = Extract<
  IconProps['type'],
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'apps'
  | 'analytics'
  | 'backspace'
  | 'call'
  | 'cancel'
  | 'cash'
  | 'checkmark'
  | 'cart'
  | 'cart-filled'
  | 'check'
  | 'check-circle'
  | 'alert-circle'
  | 'info'
  | 'phone'
  | 'edit'
  | 'delete'
  | 'settings'
  | 'search'
  | 'print'
  | 'refresh'
  | 'help'
  | 'plus'
  | 'minus'
  | 'email'
  | 'gift-card'
  | 'discount'
  | 'receipt'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'menu'
  | 'home'
  | 'location'
  | 'time'
  | 'calendar'
  | 'products'
  | 'orders'
  | 'customers'
  | 'collection'
>;
type SupportedSizes = Extract<
  IconProps['size'],
  'small' | 'base' | 'large' | 'large-100'
>;
interface IconJSXProps extends Pick<IconProps, 'tone' | 'color'> {
  /**
   * The type of icon to display. Maps to PDS icon names.
   * @default ''
   */
  type?: SupportedIconNames;
  /**
   * The size of the icon.
   * @default 'base'
   */
  size?: SupportedSizes;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$c]: IconJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$c]: BaseElementProps<IconJSXProps>;
    }
  }
}

declare const tagName$b = 's-stack';
type PickedProps = Pick<
  StackProps,
  | 'alignItems'
  | 'alignContent'
  | 'gap'
  | 'columnGap'
  | 'direction'
  | 'blockSize'
  | 'maxBlockSize'
  | 'maxInlineSize'
  | 'minBlockSize'
  | 'minInlineSize'
  | 'inlineSize'
  | 'justifyContent'
  | 'padding'
  | 'paddingBlock'
  | 'paddingBlockStart'
  | 'paddingBlockEnd'
  | 'paddingInline'
  | 'paddingInlineStart'
  | 'paddingInlineEnd'
  | 'rowGap'
>;
interface StackJSXProps extends PickedProps {
  children?: ComponentChildren;
  /**
   * Adjust the block size.
   *
   * @remarks
   * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/block-size
   *
   * @default 'auto'
   */
  blockSize?: PickedProps['blockSize'];
  /**
   * Adjust the maximum block size.
   *
   * @remarks
   * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size
   *
   * @default 'none'
   */
  maxBlockSize?: PickedProps['maxBlockSize'];
  /**
   * Adjust the maximum inline size.
   *
   * @remarks
   * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size
   *
   * @default 'none'
   */
  maxInlineSize?: PickedProps['maxInlineSize'];
  /**
   * Adjust the minimum block size.
   *
   * @remarks
   * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size
   *
   * @default '0'
   */
  minBlockSize?: PickedProps['minBlockSize'];
  /**
   * Adjust the minimum inline size.
   *
   * @remarks
   * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size
   *
   * @default '0'
   */
  minInlineSize?: PickedProps['minInlineSize'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$b]: StackJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$b]: BaseElementPropsWithChildren<StackJSXProps>;
    }
  }
}

declare const tagName$a = 's-badge';
interface BadgeJSXProps extends Pick<BadgeProps, 'id'> {
  tone?: Extract<
    BadgeProps['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical'
  >;
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$a]: BadgeJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$a]: BaseElementPropsWithChildren<BadgeJSXProps>;
    }
  }
}

declare const tagName$9 = 's-choice-list';
interface ChoiceListJSXProps
  extends Pick<ChoiceListProps, 'values' | 'multiple'> {
  onChange?: ((event: CallbackEvent<typeof tagName$9>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$9>) => void) | null;
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$9]: ChoiceListJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$9]: BaseElementPropsWithChildren<ChoiceListJSXProps>;
    }
  }
}

declare const tagName$8 = 's-choice';
interface ChoiceJSXProps
  extends Pick<ChoiceProps, 'value' | 'disabled' | 'selected'> {
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$8]: ChoiceJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$8]: BaseElementPropsWithChildren<ChoiceJSXProps>;
    }
  }
}

declare const tagName$7 = 's-modal';
interface ModalJSXProps extends Pick<ModalProps, 'id' | 'heading'> {
  primaryAction?: ComponentChild;
  secondaryActions?: ComponentChild;
  onHide?: (event: CallbackEvent<typeof tagName$7>) => void | null;
  onShow?: (event: CallbackEvent<typeof tagName$7>) => void | null;
  onToggle?: (event: CallbackToggleEvent<typeof tagName$7>) => void | null;
  children?: ReactNode;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$7]: ModalJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$7]: BaseElementPropsWithChildren<
        Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'>
      >;
    }
  }
}

declare const tagName$6 = 's-text-field';
interface TextFieldJSXProps
  extends Pick<
    TextFieldProps,
    | 'label'
    | 'details'
    | 'value'
    | 'placeholder'
    | 'disabled'
    | 'error'
    | 'required'
    | 'maxLength'
  > {
  onInput?: ((event: CallbackEvent<typeof tagName$6>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$6>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$6>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName$6>) => void) | null;
  accessory?: ComponentChild;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$6]: TextFieldJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$6]: BaseElementPropsWithChildren<
        Omit<TextFieldJSXProps, 'accessory'>
      >;
    }
  }
}

declare const tagName$5 = 's-search-field';
interface SearchFieldJSXProps
  extends Pick<
    SearchFieldProps,
    'disabled' | 'defaultValue' | 'placeholder' | 'value'
  > {
  onFocus?: ((event: CallbackEvent<typeof tagName$5>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$5>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$5>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName$5>) => void) | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$5]: SearchFieldJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$5]: BaseElementPropsWithChildren<SearchFieldJSXProps>;
    }
  }
}

declare const tagName$4 = 's-email-field';
interface EmailFieldJSXProps
  extends Pick<
    EmailFieldProps,
    | 'label'
    | 'value'
    | 'placeholder'
    | 'disabled'
    | 'error'
    | 'required'
    | 'maxLength'
    | 'details'
  > {
  onInput?: ((event: CallbackEvent<typeof tagName$4>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$4>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$4>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName$4>) => void) | null;
  accessory?: ComponentChild;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$4]: EmailFieldJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$4]: BaseElementPropsWithChildren<
        Omit<EmailFieldJSXProps, 'accessory'>
      >;
    }
  }
}

declare const tagName$3 = 's-clickable';
interface ClickableJSXProps extends Pick<ClickableProps, 'disabled'> {
  children?: ComponentChildren;
  onClick?: (event: CallbackEvent<typeof tagName$3>) => void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$3]: ClickableJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$3]: BaseElementPropsWithChildren<ClickableJSXProps>;
    }
  }
}

declare const tagName$2 = 's-text-area';
interface TextAreaJSXProps
  extends Pick<
    TextAreaProps,
    | 'label'
    | 'details'
    | 'value'
    | 'placeholder'
    | 'disabled'
    | 'error'
    | 'required'
    | 'maxLength'
    | 'rows'
  > {
  onInput?: ((event: CallbackEvent<typeof tagName$2>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$2>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$2>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName$2>) => void) | null;
  accessory?: ComponentChild;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$2]: TextAreaJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$2]: BaseElementPropsWithChildren<
        Omit<TextAreaJSXProps, 'accessory'>
      >;
    }
  }
}

declare const tagName$1 = 's-number-field';
interface NumberFieldJSXProps
  extends Pick<
    NumberFieldProps,
    | 'label'
    | 'details'
    | 'value'
    | 'placeholder'
    | 'disabled'
    | 'error'
    | 'required'
    | 'max'
    | 'min'
  > {
  inputMode?: Extract<NumberFieldProps['inputMode'], 'decimal' | 'numeric'>;
  onInput?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
  accessory?: ComponentChild;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$1]: NumberFieldJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$1]: BaseElementPropsWithChildren<
        Omit<NumberFieldJSXProps, 'accessory'>
      >;
    }
  }
}

declare const tagName = 's-date-field';
interface DateFieldJSXProps
  extends Pick<
    DateFieldProps,
    'label' | 'details' | 'value' | 'disabled' | 'error'
  > {
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  accessory?: ComponentChild;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: DateFieldJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<
        Omit<DateFieldJSXProps, 'accessory'>
      >;
    }
  }
}

export type {
  BadgeJSXProps,
  BannerJSXProps,
  BoxJSXProps,
  ButtonJSXProps,
  ChoiceJSXProps,
  ChoiceListJSXProps,
  ClickableJSXProps,
  DateFieldJSXProps,
  EmailFieldJSXProps,
  IconJSXProps,
  ModalJSXProps,
  NavigatorJSXProps,
  NumberFieldJSXProps,
  ScreenJSXProps,
  ScrollBoxJSXProps,
  SearchFieldJSXProps,
  StackJSXProps,
  TextAreaJSXProps,
  TextFieldJSXProps,
  TextJSXProps,
  TileJSXProps,
};

interface Badge extends Pick<BadgeProps, 'tone' | 'id'> {
  tone?: BadgeJSXProps['tone'];
  id?: BadgeJSXProps['id'];
}

interface BannerSlots {
  'primary-action'?: HTMLElement;
}

interface Banner
  extends Pick<BannerProps, 'tone' | 'heading' | 'hidden' | 'id'> {
  tone?: BannerJSXProps['tone'];
  heading?: BannerJSXProps['heading'];
  hidden?: BannerJSXProps['hidden'];
  id?: BannerJSXProps['id'];
}

interface Box
  extends Pick<
    BoxProps,
    | 'padding'
    | 'paddingBlock'
    | 'paddingBlockStart'
    | 'paddingBlockEnd'
    | 'paddingInline'
    | 'paddingInlineStart'
    | 'paddingInlineEnd'
    | 'blockSize'
    | 'minBlockSize'
    | 'maxBlockSize'
    | 'inlineSize'
    | 'minInlineSize'
    | 'maxInlineSize'
  > {
  padding?: BoxJSXProps['padding'];
  paddingBlock?: BoxJSXProps['paddingBlock'];
  paddingBlockStart?: BoxJSXProps['paddingBlockStart'];
  paddingBlockEnd?: BoxJSXProps['paddingBlockEnd'];
  paddingInline?: BoxJSXProps['paddingInline'];
  paddingInlineStart?: BoxJSXProps['paddingInlineStart'];
  paddingInlineEnd?: BoxJSXProps['paddingInlineEnd'];
  blockSize?: BoxJSXProps['blockSize'];
  minBlockSize?: BoxJSXProps['minBlockSize'];
  maxBlockSize?: BoxJSXProps['maxBlockSize'];
  inlineSize?: BoxJSXProps['inlineSize'];
  minInlineSize?: BoxJSXProps['minInlineSize'];
  maxInlineSize?: BoxJSXProps['maxInlineSize'];
}

interface ButtonEvents {
  click?: ButtonJSXProps['onClick'];
}

interface Button
  extends Pick<
    ButtonProps,
    | 'tone'
    | 'variant'
    | 'accessibilityLabel'
    | 'disabled'
    | 'command'
    | 'commandFor'
    | 'loading'
    | 'id'
  > {
  tone?: ButtonJSXProps['tone'];
  variant?: ButtonJSXProps['variant'];
  accessibilityLabel?: ButtonJSXProps['accessibilityLabel'];
  disabled?: ButtonJSXProps['disabled'];
  command?: ButtonJSXProps['command'];
  commandFor?: ButtonJSXProps['commandFor'];
  loading?: ButtonJSXProps['loading'];
  id?: ButtonJSXProps['id'];
}

interface Choice extends Pick<ChoiceProps, 'value' | 'disabled' | 'selected'> {
  value?: ChoiceJSXProps['value'];
  disabled?: ChoiceJSXProps['disabled'];
  selected?: ChoiceJSXProps['selected'];
}

interface ChoiceListEvents {
  change?: ChoiceListJSXProps['onChange'];
  input?: ChoiceListJSXProps['onInput'];
}

interface ChoiceList extends Pick<ChoiceListProps, 'values' | 'multiple'> {
  values?: ChoiceListJSXProps['values'];
  multiple?: ChoiceListJSXProps['multiple'];
}

interface ClickableEvents {
  click?: ClickableJSXProps['onClick'];
}

interface Clickable extends Pick<ClickableProps, 'disabled'> {
  disabled?: ClickableJSXProps['disabled'];
}

interface DateFieldEvents {
  input?: DateFieldJSXProps['onInput'];
  focus?: DateFieldJSXProps['onFocus'];
  blur?: DateFieldJSXProps['onBlur'];
  change?: DateFieldJSXProps['onChange'];
}

interface DateFieldSlots {
  accessory?: HTMLElement;
}

interface DateField
  extends Pick<
    DateFieldProps,
    'label' | 'details' | 'value' | 'disabled' | 'error'
  > {
  label?: DateFieldJSXProps['label'];
  details?: DateFieldJSXProps['details'];
  value?: DateFieldJSXProps['value'];
  disabled?: DateFieldJSXProps['disabled'];
  error?: DateFieldJSXProps['error'];
}

interface EmailFieldEvents {
  input?: EmailFieldJSXProps['onInput'];
  focus?: EmailFieldJSXProps['onFocus'];
  blur?: EmailFieldJSXProps['onBlur'];
  change?: EmailFieldJSXProps['onChange'];
}

interface EmailFieldSlots {
  accessory?: HTMLElement;
}

interface EmailField
  extends Pick<
    EmailFieldProps,
    | 'label'
    | 'value'
    | 'placeholder'
    | 'disabled'
    | 'error'
    | 'required'
    | 'maxLength'
    | 'details'
  > {
  label?: EmailFieldJSXProps['label'];
  value?: EmailFieldJSXProps['value'];
  placeholder?: EmailFieldJSXProps['placeholder'];
  disabled?: EmailFieldJSXProps['disabled'];
  error?: EmailFieldJSXProps['error'];
  required?: EmailFieldJSXProps['required'];
  maxLength?: EmailFieldJSXProps['maxLength'];
  details?: EmailFieldJSXProps['details'];
}

interface Icon extends Pick<IconProps, 'type' | 'size' | 'tone' | 'color'> {
  type?: IconJSXProps['type'];
  size?: IconJSXProps['size'];
  tone?: IconJSXProps['tone'];
  color?: IconJSXProps['color'];
}

interface ModalEvents {
  hide?: ModalJSXProps['onHide'];
  show?: ModalJSXProps['onShow'];
  toggle?: ModalJSXProps['onToggle'];
}

interface ModalSlots {
  'primary-action'?: HTMLElement;
  'secondary-actions'?: HTMLElement;
}

interface Modal extends Pick<ModalProps, 'id' | 'heading'> {
  id?: ModalJSXProps['id'];
  heading?: ModalJSXProps['heading'];
}

interface Navigator extends Pick<NavigatorProps, 'initialScreenName'> {
  initialScreenName?: NavigatorJSXProps['initialScreenName'];
}

interface NumberFieldEvents {
  input?: NumberFieldJSXProps['onInput'];
  focus?: NumberFieldJSXProps['onFocus'];
  blur?: NumberFieldJSXProps['onBlur'];
  change?: NumberFieldJSXProps['onChange'];
}

interface NumberFieldSlots {
  accessory?: HTMLElement;
}

interface NumberField
  extends Pick<
    NumberFieldProps,
    | 'inputMode'
    | 'label'
    | 'details'
    | 'value'
    | 'placeholder'
    | 'disabled'
    | 'error'
    | 'required'
    | 'max'
    | 'min'
  > {
  inputMode?: NumberFieldJSXProps['inputMode'];
  label?: NumberFieldJSXProps['label'];
  details?: NumberFieldJSXProps['details'];
  value?: NumberFieldJSXProps['value'];
  placeholder?: NumberFieldJSXProps['placeholder'];
  disabled?: NumberFieldJSXProps['disabled'];
  error?: NumberFieldJSXProps['error'];
  required?: NumberFieldJSXProps['required'];
  max?: NumberFieldJSXProps['max'];
  min?: NumberFieldJSXProps['min'];
}

interface ScreenEvents {
  navigate?: ScreenJSXProps['onNavigate'];
  navigateback?: ScreenJSXProps['onNavigateBack'];
  receiveparams?: ScreenJSXProps['onReceiveParams'];
}

interface ScreenSlots {
  'secondary-actions'?: HTMLElement;
}

interface Screen
  extends Pick<ScreenProps, 'name' | 'title' | 'isLoading' | 'presentation'> {
  name: ScreenJSXProps['name'];
  title: ScreenJSXProps['title'];
  isLoading?: ScreenJSXProps['isLoading'];
  presentation?: ScreenJSXProps['presentation'];
}

interface ScrollBox extends Pick<ScrollBoxProps, 'id'> {
  id?: ScrollBoxJSXProps['id'];
}

interface SearchFieldEvents {
  focus?: SearchFieldJSXProps['onFocus'];
  blur?: SearchFieldJSXProps['onBlur'];
  input?: SearchFieldJSXProps['onInput'];
  change?: SearchFieldJSXProps['onChange'];
}

interface SearchField
  extends Pick<
    SearchFieldProps,
    'disabled' | 'defaultValue' | 'placeholder' | 'value'
  > {
  disabled?: SearchFieldJSXProps['disabled'];
  defaultValue?: SearchFieldJSXProps['defaultValue'];
  placeholder?: SearchFieldJSXProps['placeholder'];
  value?: SearchFieldJSXProps['value'];
}

interface Stack
  extends Pick<
    StackProps,
    | 'blockSize'
    | 'maxBlockSize'
    | 'maxInlineSize'
    | 'minBlockSize'
    | 'minInlineSize'
    | 'alignItems'
    | 'alignContent'
    | 'gap'
    | 'columnGap'
    | 'direction'
    | 'inlineSize'
    | 'justifyContent'
    | 'padding'
    | 'paddingBlock'
    | 'paddingBlockStart'
    | 'paddingBlockEnd'
    | 'paddingInline'
    | 'paddingInlineStart'
    | 'paddingInlineEnd'
    | 'rowGap'
  > {
  blockSize?: StackJSXProps['blockSize'];
  maxBlockSize?: StackJSXProps['maxBlockSize'];
  maxInlineSize?: StackJSXProps['maxInlineSize'];
  minBlockSize?: StackJSXProps['minBlockSize'];
  minInlineSize?: StackJSXProps['minInlineSize'];
  alignItems?: StackJSXProps['alignItems'];
  alignContent?: StackJSXProps['alignContent'];
  gap?: StackJSXProps['gap'];
  columnGap?: StackJSXProps['columnGap'];
  direction?: StackJSXProps['direction'];
  inlineSize?: StackJSXProps['inlineSize'];
  justifyContent?: StackJSXProps['justifyContent'];
  padding?: StackJSXProps['padding'];
  paddingBlock?: StackJSXProps['paddingBlock'];
  paddingBlockStart?: StackJSXProps['paddingBlockStart'];
  paddingBlockEnd?: StackJSXProps['paddingBlockEnd'];
  paddingInline?: StackJSXProps['paddingInline'];
  paddingInlineStart?: StackJSXProps['paddingInlineStart'];
  paddingInlineEnd?: StackJSXProps['paddingInlineEnd'];
  rowGap?: StackJSXProps['rowGap'];
}

interface Text extends Pick<TextProps, 'color' | 'type' | 'tone'> {
  color?: TextJSXProps['color'];
  type?: TextJSXProps['type'];
  tone?: TextJSXProps['tone'];
}

interface TextAreaEvents {
  input?: TextAreaJSXProps['onInput'];
  focus?: TextAreaJSXProps['onFocus'];
  blur?: TextAreaJSXProps['onBlur'];
  change?: TextAreaJSXProps['onChange'];
}

interface TextAreaSlots {
  accessory?: HTMLElement;
}

interface TextArea
  extends Pick<
    TextAreaProps,
    | 'label'
    | 'details'
    | 'value'
    | 'placeholder'
    | 'disabled'
    | 'error'
    | 'required'
    | 'maxLength'
    | 'rows'
  > {
  label?: TextAreaJSXProps['label'];
  details?: TextAreaJSXProps['details'];
  value?: TextAreaJSXProps['value'];
  placeholder?: TextAreaJSXProps['placeholder'];
  disabled?: TextAreaJSXProps['disabled'];
  error?: TextAreaJSXProps['error'];
  required?: TextAreaJSXProps['required'];
  maxLength?: TextAreaJSXProps['maxLength'];
  rows?: TextAreaJSXProps['rows'];
}

interface TextFieldEvents {
  input?: TextFieldJSXProps['onInput'];
  focus?: TextFieldJSXProps['onFocus'];
  blur?: TextFieldJSXProps['onBlur'];
  change?: TextFieldJSXProps['onChange'];
}

interface TextFieldSlots {
  accessory?: HTMLElement;
}

interface TextField
  extends Pick<
    TextFieldProps,
    | 'label'
    | 'details'
    | 'value'
    | 'placeholder'
    | 'disabled'
    | 'error'
    | 'required'
    | 'maxLength'
  > {
  label?: TextFieldJSXProps['label'];
  details?: TextFieldJSXProps['details'];
  value?: TextFieldJSXProps['value'];
  placeholder?: TextFieldJSXProps['placeholder'];
  disabled?: TextFieldJSXProps['disabled'];
  error?: TextFieldJSXProps['error'];
  required?: TextFieldJSXProps['required'];
  maxLength?: TextFieldJSXProps['maxLength'];
}

interface TileEvents {
  press?: TileJSXProps['onPress'];
}

interface Tile
  extends Pick<
    TileProps,
    'title' | 'subtitle' | 'enabled' | 'destructive' | 'badgeValue' | 'testID'
  > {
  title: TileJSXProps['title'];
  subtitle?: TileJSXProps['subtitle'];
  enabled?: TileJSXProps['enabled'];
  destructive?: TileJSXProps['destructive'];
  badgeValue?: TileJSXProps['badgeValue'];
  testID?: TileJSXProps['testID'];
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$k]: BaseElementPropsWithChildren<ButtonJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$k]: BaseElementPropsWithChildren<ButtonJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$j]: BaseElementPropsWithChildren<TextJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$j]: BaseElementPropsWithChildren<TextJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$i]: BaseElementPropsWithChildren<ScrollBoxJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$i]: BaseElementPropsWithChildren<ScrollBoxJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$h]: BaseElementPropsWithChildren<TileJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$h]: BaseElementPropsWithChildren<TileJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$g]: BaseElementPropsWithChildren<NavigatorJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$g]: BaseElementPropsWithChildren<NavigatorJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$f]: BaseElementPropsWithChildren<ScreenJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$f]: BaseElementPropsWithChildren<ScreenJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$e]: BaseElementPropsWithChildren<
        Omit<BannerJSXProps, 'primaryAction'>
      >;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$e]: BaseElementPropsWithChildren<
        Omit<BannerJSXProps, 'primaryAction'>
      >;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$d]: BaseElementPropsWithChildren<BoxJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$d]: BaseElementPropsWithChildren<BoxJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$c]: BaseElementProps<IconJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$c]: BaseElementProps<IconJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$b]: BaseElementPropsWithChildren<StackJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$b]: BaseElementPropsWithChildren<StackJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$a]: BaseElementPropsWithChildren<BadgeJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$a]: BaseElementPropsWithChildren<BadgeJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$9]: BaseElementPropsWithChildren<ChoiceListJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$9]: BaseElementPropsWithChildren<ChoiceListJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$8]: BaseElementPropsWithChildren<ChoiceJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$8]: BaseElementPropsWithChildren<ChoiceJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$7]: BaseElementPropsWithChildren<
        Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'>
      >;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$7]: BaseElementPropsWithChildren<
        Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'>
      >;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$6]: BaseElementPropsWithChildren<
        Omit<TextFieldJSXProps, 'accessory'>
      >;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$6]: BaseElementPropsWithChildren<
        Omit<TextFieldJSXProps, 'accessory'>
      >;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$5]: BaseElementPropsWithChildren<SearchFieldJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$5]: BaseElementPropsWithChildren<SearchFieldJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$4]: BaseElementPropsWithChildren<
        Omit<EmailFieldJSXProps, 'accessory'>
      >;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$4]: BaseElementPropsWithChildren<
        Omit<EmailFieldJSXProps, 'accessory'>
      >;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$3]: BaseElementPropsWithChildren<ClickableJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$3]: BaseElementPropsWithChildren<ClickableJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$2]: BaseElementPropsWithChildren<
        Omit<TextAreaJSXProps, 'accessory'>
      >;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$2]: BaseElementPropsWithChildren<
        Omit<TextAreaJSXProps, 'accessory'>
      >;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$1]: BaseElementPropsWithChildren<
        Omit<NumberFieldJSXProps, 'accessory'>
      >;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$1]: BaseElementPropsWithChildren<
        Omit<NumberFieldJSXProps, 'accessory'>
      >;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<
        Omit<DateFieldJSXProps, 'accessory'>
      >;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<
        Omit<DateFieldJSXProps, 'accessory'>
      >;
    }
  }
}
