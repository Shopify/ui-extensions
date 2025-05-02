/** VERSION: 0.50.0 **/

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
/**
 * TODO: Update `any` type here after this is resolved
 * https://github.com/Shopify/ui-api-design/issues/139
 */
export type ComponentChildren = any;
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
export interface GlobalProps {
  /**
   * A unique identifier for the element.
   */
  id?: string;
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
  'alert-triangle',
  'alert-triangle-filled',
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
  'info',
  'info-filled',
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
  'pin',
  'plan',
  'play-circle',
  'play',
  'plus-circle',
  'plus-circle-down',
  'plus-circle-up',
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
  icon?: IconType;
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
/**
 * Used for Container Query-related props.
 */
export interface ContainerProps {
  /**
   * The name of the container used for Container Queries.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/container-name
   *
   * @default ''
   *
   * @implementation All components that implement this interface must put a containerName of `s-default` on the root element of that component, regardless of the value of `containerType`.
   * The developer-supplied containerName here would be in addition to the above-mentioned containerName.
   */
  containerName?: string;
  /**
   * The type of container used for Container Queries.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/container-type
   *
   * - `normal`: The element is not a query container for any container size queries.
   * - `inline-size`: Establishes a query container for dimensional queries on the inline axis of the container. Applies layout, style, and inline-size containment to the element.
   *
   * @default 'normal'
   */
  containerType?: 'normal' | 'inline-size';
}
interface BannerProps$1 extends GlobalProps, ActionSlots, ContainerProps {
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
   * In an HTML host, the Banner is a live region and the type of status will be dictated by the Tone selected.
   *
   * - `critical` and `warning` creates an assertive live region (`role="alert"`) that is announced by screen readers immediately.
   * - `neutral`, `info`, `success`, and `caution` creates an informative live region (`role="status"`) that is announced by screen readers after the current message.
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
  onDismiss?: () => void;
  /**
   * Event handler when the banner has fully hidden.
   *
   * The `hidden` property will be `true` when this event fires.
   *
   * @implementation If implementations animate the hiding of the banner,
   * this event must fire after the banner has fully hidden.
   * We can add an `onHide` event in future if we want to provide a hook for the start of the animation.
   */
  onAfterHide?: () => void;
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
export interface DisplayProps {
  /**
   * Sets the outer display type of the component. The outer type sets a component's participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).
   *
   * - `auto` the component's initial value. The actual value depends on the component and context.
   * - `none` hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.
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
   * Although, in HTML hosts, this property changes the element used,
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
   * 1-to-4-value syntax (@see https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is
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
   * 1-to-4-value syntax (@see https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is
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
   * `hidden`: clips the content when it is larger than the element’s container.
   * The element will not be scrollable and the users will not be able
   * to access the clipped content by dragging or using a scroll wheel on a mouse.
   *
   * `visible`: the content that extends beyond the element’s container is visible.
   *
   * @default 'visible'
   */
  overflow?: 'hidden' | 'visible';
}
export interface BaseBoxProps
  extends GlobalProps,
    AccessibilityVisibilityProps,
    BackgroundProps,
    DisplayProps,
    SizingProps,
    PaddingProps,
    BorderProps,
    OverflowProps,
    ContainerProps {
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
interface BoxProps$1 extends BaseBoxPropsWithRole {}
export interface FocusEventProps {
  /**
   * Callback when the element loses focus.
   */
  onBlur?: () => void;
  /**
   * Callback when the element receives focus.
   */
  onFocus?: () => void;
}
export interface ButtonBehaviorProps extends InteractionProps, FocusEventProps {
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
  type?: 'submit' | 'button' | 'reset';
  /**
   * Callback when the button is activated.
   * This will be called before the action indicated by `type`.
   */
  onClick?: () => void;
  /**
   * Disables the button, meaning it cannot be clicked or receive focus.
   */
  disabled?: boolean;
  /**
   * Replaces content with a loading indicator while a background action is being performed.
   *
   * This also disables the button.
   */
  loading?: boolean;
}
export interface LinkBehaviorProps extends InteractionProps, FocusEventProps {
  /**
   * The URL to link to.
   *
   * - If set, it will navigate to the location specified by `href` after executing the `onClick` callback.
   * - If a `commandFor` is set, the `command` will be executed instead of the navigation.
   */
  href?: string;
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
   */
  onClick?: () => void;
}
export interface InteractionProps {
  /**
   * ID of a component that should respond to activations (e.g. clicks) on this clickable.
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
   * - `'--auto'`: a default action for the target component.
   * - `'--show'`: shows the target component.
   * - `'--hide'`: hides the target component.
   * - `'--toggle'`: toggles the target component.
   * - `'--copy'`: copies the target ClipboardItem.
   *
   * @default '--auto'
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command
   */
  command?: '--auto' | '--show' | '--hide' | '--toggle' | '--copy';
}
export interface BaseClickableProps
  extends ButtonBehaviorProps,
    LinkBehaviorProps {}
interface ButtonProps$1 extends GlobalProps, BaseClickableProps {
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
  icon?: IconType;
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
   * An identifier for the field that is unique within the nearest
   * containing `Form` component.
   */
  name?: string;
  /**
   * Disables the field, disallowing any interaction.
   */
  disabled?: boolean;
}
export interface InputProps extends BaseInputProps {
  /**
   * Callback when the user has **finished editing** a field, e.g. once they have blurred the field.
   */
  onChange?: (newValue: string) => void;
  /**
   * Callback when the user makes any changes in the field.
   */
  onInput?: (newValue: string) => void;
  /**
   * The current value for the field. If omitted, the field will be empty.
   */
  value?: string;
  /**
   * The default value for the field.
   */
  defaultValue?: string;
}
export interface MultipleInputProps extends BaseInputProps {
  /**
   * Callback when the user has selected file(s).
   */
  onChange?: (newValue: string[]) => void;
  /**
   * Callback when the user has selected file(s).
   */
  onInput?: (newValue: string[]) => void;
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
   * so with the `error` prop.
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
  icon?: IconType;
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
   */
  selected?: boolean;
  /**
   * Whether the control is active by default.
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
   */
  checked?: boolean;
  /**
   * Whether the control is active by default.
   */
  defaultChecked?: boolean;
  /**
   * An identifier for the control that is unique within the nearest
   * containing `Form` component.
   */
  name?: string;
  /**
   * A callback that is run whenever the control is changed.
   */
  onChange?: (checked: boolean) => void;
  /**
   * A callback that is run whenever the control is changed.
   */
  onInput?: (checked: boolean) => void;
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
   * In custom element implementations, this must not reflect to an attribute (similar to `.checked`).
   */
  indeterminate?: boolean;
  /**
   * Whether the checkbox is in an `indeterminate` state by default.
   *
   * Similar to `defaultValue` and `defaultChecked`, this value applies until `indeterminate` is set, or user changes the state of the checkbox.
   *
   * In custom element implementations, this must reflect to the `indeterminate` attribute (similar to how `.defaultChecked` reflects to the `checked` attribute).
   */
  defaultIndeterminate?: boolean;
  /**
   * Whether the field needs a value. This requirement adds semantic value
   * to the field, but it will not cause an error to appear automatically.
   * If you want to present an error when this field is empty, you can do
   * so with the `error` prop.
   */
  required?: boolean;
}
interface ChoiceProps$1 extends GlobalProps, BaseOptionProps {
  /**
   * Content to use as the choice label.
   */
  label?: string;
  /**
   * Additional text to provide context or guidance for the input.
   *
   * This text is displayed along with the input and its label
   * to offer more information or instructions to the user.
   *
   * @implementation this content should be linked to the input with an `aria-describedby` attribute.
   */
  details?: string;
  /**
   * Set to `true` to associate a choice with the error passed to `ChoiceList`
   */
  error?: boolean;
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
}
interface ClickableProps$1 extends BaseBoxProps, BaseClickableProps {
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
interface DividerProps$1 extends GlobalProps {
  /**
   * Specify the direction of the divider.
   *
   * An 'inline' divider separates blocks of content.
   * In a left-to-right or right-to-left writing mode, this would typically be a horizontal line.
   *
   * A 'block' divider separates items within the current line of content.
   * In a left-to-right or right-to-left writing mode, this would typically be a vertical line.
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
interface EmailFieldProps$1
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
interface GridProps$1 extends BaseBoxPropsWithRole, GapProps {
  /**
	  Define columns and specify their size.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
	  @default 'none'
	*/
  gridTemplateColumns?: string;
  /**
	  Define rows and specify their size.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
	  @default 'none'
	*/
  gridTemplateRows?: string;
  /**
	  Aligns the grid items along the inline (row) axis.
  
	  This overrides the inline value of `placeItems`.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
	  @default '' - meaning no override
	*/
  justifyItems?: JustifyItemsKeyword | '';
  /**
	  Aligns the grid items along the block (column) axis.
  
	  This overrides the block value of `placeItems`.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
	  @default '' - meaning no override
	*/
  alignItems?: AlignItemsKeyword | '';
  /**
	  A shorthand property for `justify-items` and `align-items`.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/place-items
	  @default 'normal normal'
	*/
  placeItems?:
    | `${AlignItemsKeyword} ${JustifyItemsKeyword}`
    | AlignItemsKeyword;
  /**
	  Aligns the grid along the inline (row) axis.
  
	  This overrides the inline value of `placeContent`.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
	  @default '' - meaning no override
	*/
  justifyContent?: JustifyContentKeyword | '';
  /**
	  Aligns the grid along the block (column) axis.
  
	  This overrides the block value of `placeContent`.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
	  @default '' - meaning no override
	*/
  alignContent?: AlignContentKeyword | '';
  /**
	  A shorthand property for `justify-content` and `align-content`.
  
	  @see https://developer.mozilla.org/en-US/docs/Web/CSS/place-content
	  @default 'normal normal'
	*/
  placeContent?:
    | `${AlignContentKeyword} ${JustifyContentKeyword}`
    | AlignContentKeyword;
}
interface GridItemProps$1 extends BaseBoxPropsWithRole {
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
   * Sets the color of the Typography component, based on the intention of the information being conveyed.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * Sets the tone of the Typography component, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Set the numeric properties of the font
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
    BlockTypographyProps,
    ContainerProps {
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
interface IconProps$1 extends GlobalProps {
  /**
   * Sets the tone of the Icon, based on the intention of the information being conveyed.
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
   * assistive technology and sighted users. A well written `description`
   * provides people with visual impairments the ability to participate in
   * consuming non-text content. When a screen readers encounters an `Image`,
   * the description is read and announced aloud. If an image fails to load,
   * potentially due to a poor connection, the `description` is displayed on
   * screen instead. This has the benefit of letting a sighted buyer know an
   * image was meant to load here, but as an alternative, they’re still able to
   * consume the text content. Read
   * [considerations when writing alternative text](https://ux.shopify.com/considerations-when-writing-alt-text-a9c1985a8204)
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
/**
 * This is purely to give the ability
 * to have a space or not in the string literal types.
 *
 * For example in the `aspectRatio` property, `16/9` and `16 / 9` are both valid.
 */
export type optionalSpace = '' | ' ';
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
   * `fill`: the image will takes up 100% of the available inline-size.
   * `auto`: the image will be displayed at its natural size.
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
   * - `inlineSize="auto"`: the image will not render until it has loaded and at this point, it will respect the aspect ratio specified.
   *
   * Getters for this value should return `auto` or the ratio in `number / number` form. Input fractions should not be ‘simplified’.
   * For example, if the value is set as `50 /    100`, the getter returns `50 / 100`.
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
  onLoad?: () => void;
  /**
   * Invoked on load error.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
   */
  onError?: () => void;
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
interface MoneyFieldProps$1
  extends GlobalProps,
    BaseTextFieldProps,
    NumberConstraintsProps,
    AutocompleteProps<MoneyAutocompleteField> {
  /**
   * Specifies the currencyCode that will be displayed.
   *
   * @default ''
   */
  currencyCode?: CurrencyCode | AnyString;
}
export type MoneyAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'transaction-amount'
>;
/**
 * Supported monetary currencies from ISO 4217.
 *
 * @see https://www.iso.org/iso-4217-currency-codes.html
 */
export type CurrencyCode =
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'CAD'
  | 'AFN'
  | 'ALL'
  | 'DZD'
  | 'AOA'
  | 'ARS'
  | 'AMD'
  | 'AWG'
  | 'AUD'
  | 'BBD'
  | 'AZN'
  | 'BDT'
  | 'BSD'
  | 'BHD'
  | 'BIF'
  | 'BZD'
  | 'BMD'
  | 'BTN'
  | 'BAM'
  | 'BRL'
  | 'BOB'
  | 'BWP'
  | 'BND'
  | 'BGN'
  | 'MMK'
  | 'KHR'
  | 'CVE'
  | 'KYD'
  | 'XAF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'KMF'
  | 'CDF'
  | 'CRC'
  | 'HRK'
  | 'CZK'
  | 'DKK'
  | 'DOP'
  | 'XCD'
  | 'EGP'
  | 'ETB'
  | 'XPF'
  | 'FJD'
  | 'GMD'
  | 'GHS'
  | 'GTQ'
  | 'GYD'
  | 'GEL'
  | 'HTG'
  | 'HNL'
  | 'HKD'
  | 'HUF'
  | 'ISK'
  | 'INR'
  | 'IDR'
  | 'ILS'
  | 'IQD'
  | 'JMD'
  | 'JPY'
  | 'JEP'
  | 'JOD'
  | 'KZT'
  | 'KES'
  | 'KWD'
  | 'KGS'
  | 'LAK'
  | 'LVL'
  | 'LBP'
  | 'LSL'
  | 'LRD'
  | 'LTL'
  | 'MGA'
  | 'MKD'
  | 'MOP'
  | 'MWK'
  | 'MVR'
  | 'MXN'
  | 'MYR'
  | 'MUR'
  | 'MDL'
  | 'MAD'
  | 'MNT'
  | 'MZN'
  | 'NAD'
  | 'NPR'
  | 'ANG'
  | 'NZD'
  | 'NIO'
  | 'NGN'
  | 'NOK'
  | 'OMR'
  | 'PAB'
  | 'PKR'
  | 'PGK'
  | 'PYG'
  | 'PEN'
  | 'PHP'
  | 'PLN'
  | 'QAR'
  | 'RON'
  | 'RUB'
  | 'RWF'
  | 'WST'
  | 'SAR'
  | 'RSD'
  | 'SCR'
  | 'SGD'
  | 'SDG'
  | 'SYP'
  | 'ZAR'
  | 'KRW'
  | 'SSP'
  | 'SBD'
  | 'LKR'
  | 'SRD'
  | 'SZL'
  | 'SEK'
  | 'CHF'
  | 'TWD'
  | 'THB'
  | 'TZS'
  | 'TTD'
  | 'TND'
  | 'TRY'
  | 'TMT'
  | 'UGX'
  | 'UAH'
  | 'AED'
  | 'UYU'
  | 'UZS'
  | 'VUV'
  | 'VND'
  | 'XOF'
  | 'YER'
  | 'ZMW'
  | 'BYN'
  | 'BYR'
  | 'DJF'
  | 'ERN'
  | 'FKP'
  | 'GIP'
  | 'GNF'
  | 'IRR'
  | 'KID'
  | 'LYD'
  | 'MRU'
  | 'SLL'
  | 'SHP'
  | 'SOS'
  | 'STD'
  | 'STN'
  | 'TJS'
  | 'TOP'
  | 'VED'
  | 'VEF'
  | 'VES'
  | 'XXX';
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
interface OrderedListProps$1 extends GlobalProps {}
interface PageProps$1 extends GlobalProps, ContainerProps {
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
   * The primary action to perform, provided as a button or link type element.
   * When a `Button` is added to the `primaryAction` it's variant is set to `primary`
   */
  primaryAction?: ComponentChildren;
  /**
   * The breadcrumb actions to perform, provided as link elements.
   */
  breadcrumbActions?: ComponentChildren;
  /**
   * Secondary actions. These are `Button`s that will be contextually the 'secondary' variant.
   */
  secondaryActions?: ComponentChildren;
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
    AccessibilityVisibilityProps,
    ContainerProps {
  /**
   * The content of the Text.
   */
  children?: ComponentChildren;
  /**
   * Provide semantic meaning and default styling to the paragraph.
   *
   * Other presentation properties on `<Paragraph>` override the default styling.
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
interface SectionProps$1 extends GlobalProps, ContainerProps {
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
   * `base`: applies padding that is appropriate for the element. Note that it may result in no padding if
   * this is the right design decision in a particular context.
   *
   * `none`: removes all padding from the element. This can be useful when elements inside the Section need to span
   * to the edge of the Section. For example, a full-width image. In this case, rely on `Box` with a padding of 'base'
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
   *
   * Use it to provide context of what is loading.
   */
  accessibilityLabel?: string;
}
interface StackProps$1 extends BaseBoxPropsWithRole, GapProps {
  /**
   * The content of the Stack.
   */
  children?: ComponentChildren;
  /**
   * Sets how the Stack's children are placed within the Stack.
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
interface SwitchProps$1
  extends GlobalProps,
    BaseCheckableProps,
    BasicFieldProps,
    FieldDetailsProps,
    FieldErrorProps {}
export interface PaginationProps {
  /**
   * Whether to use pagination controls.
   */
  paginate?: boolean;
  /**
   * Called when the previous page button is clicked.
   */
  onPreviousPage?: () => void;
  /**
   * Called when the next page button is clicked.
   */
  onNextPage?: () => void;
  /**
   * Whether there's an additional page of data.
   */
  hasNextPage?: boolean;
  /**
   * Whether there's a previous page of data.
   */
  hasPreviousPage?: boolean;
  /**
   * Whether the table is in a loading state, such as initial page load or loading the next page in a paginated table.
   * When true, the table could be in an inert state, which prevents user interaction.
   */
  loading?: boolean;
}
interface TableProps$1 extends GlobalProps, PaginationProps, ContainerProps {
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
  children: ComponentChildren;
}
interface TableCellProps$1 extends GlobalProps {
  /**
   * The content of the table data.
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
   * - `'primary'`   - The most important content. Only one column can have this designation.
   * - `'secondary'` - The secondary content. Only one column can have this designation.
   * - `'kicker'`    - Content that is displayed before primary and secondary content, but with less visual prominence. Only one column can have this designation.
   * - `'inline'`    - Content that is displayed inline.
   * - `'labeled'`   - Each column with this designation displays as a heading-content pair.
   *
   * @default 'labeled'
   */
  listSlot?: ListSlotType;
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
}
interface TextProps$1
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
   * Other presentation properties on `<Text>` override the default styling.
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
interface UnorderedListProps$1 extends GlobalProps {}
interface URLFieldProps$1
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<URLAutocompleteField> {}
export type URLAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'url' | 'photo' | 'impp' | `${AutocompleteAddressGroup} impp`
>;
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
  | 'phone-in'
  | 'phone-out'
  | 'pin'
  | 'plan'
  | 'play'
  | 'play-circle'
  | 'plus'
  | 'plus-circle'
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
interface AdminActionProps$1 extends GlobalProps, ActionProps, ActionSlots {
  /**
   * Whether the action is in a loading state, such as initial page load or action opening.
   * When true, the action could be in an inert state, which prevents user interaction.
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

export interface IconProps
  extends Pick<IconProps$1, 'type' | 'tone' | 'color' | 'size'> {
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
  extends Pick<BadgeProps$1, 'color' | 'size' | 'tone'> {
  color: Extract<BadgeProps$1['color'], 'base' | 'strong'>;
  icon: IconProps['type'] | '';
  size: Extract<BadgeProps$1['size'], 'base' | 'large' | 'large-100'>;
  tone: Extract<
    BadgeProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
}

export type Styles = string;
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChild;
  styles?: Styles;
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
/**
 * Base class for creating custom elements with Preact.
 * While this class could be used in both Node and the browser, the constructor will only be used in the browser.
 * So we give it a type of HTMLElement to avoid typing issues later where it's used, which will only happen in the browser.
 */
declare const BaseClass$1: typeof globalThis.HTMLElement;
declare abstract class PreactCustomElement extends BaseClass$1 {
  /** @private */
  static get observedAttributes(): string[];
  constructor({
    styles,
    ShadowRoot: renderFunction,
    delegatesFocus,
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

declare class Badge extends PreactCustomElement implements BadgeProps {
  accessor color: BadgeProps['color'];
  accessor icon: BadgeProps['icon'];
  accessor size: BadgeProps['size'];
  accessor tone: BadgeProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$L]: Badge;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$L]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        BadgeJSXProps;
    }
  }
}

declare const tagName$L = 's-badge';
export interface BadgeJSXProps
  extends Partial<BadgeProps>,
    Pick<BadgeProps$1, 'id'> {}

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
export interface FieldReactProps<T extends keyof HTMLElementTagNameMap> {
  onInput?: ((event: CallbackEvent<T>) => void) | null;
  onChange?: ((event: CallbackEvent<T>) => void) | null;
  onFocus?: ((event: CallbackEvent<T>) => void) | null;
  onBlur?: ((event: CallbackEvent<T>) => void) | null;
}

declare class Banner extends PreactCustomElement implements BannerProps {
  accessor heading: BannerProps['heading'];
  accessor tone: BannerProps['tone'];
  accessor hidden: BannerProps['hidden'];
  accessor dismissible: BannerProps['dismissible'];
  accessor ondismiss: CallbackEventListener<typeof tagName$K> | null;
  accessor onafterhide: CallbackEventListener<typeof tagName$K> | null;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$K]: Banner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$K]: Omit<
        HTMLAttributes<HTMLElement>,
        | Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
        | 'secondaryActions'
      > &
        BannerJSXProps;
    }
  }
}

declare const tagName$K = 's-banner';
export interface BannerJSXProps
  extends Partial<BannerProps>,
    Pick<BannerProps$1, 'id'> {
  /**
   * The secondary actions to display at the bottom of the banner. Only a maximum of two `s-button` components are allowed.
   */
  secondaryActions?: ComponentChild;
  onDismiss?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
  onAfterHide?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
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
      | 'display'
      | 'inlineSize'
      | 'maxBlockSize'
      | 'maxInlineSize'
      | 'minBlockSize'
      | 'minInlineSize'
      | 'overflow'
    >,
    MakeResponsivePick<
      RequiredBoxProps,
      | 'padding'
      | 'paddingBlock'
      | 'paddingBlockStart'
      | 'paddingBlockEnd'
      | 'paddingInline'
      | 'paddingInlineStart'
      | 'paddingInlineEnd'
    > {
  background: Extract<
    RequiredBoxProps['background'],
    'transparent' | 'base' | 'subdued' | 'strong'
  >;
  borderWidth:
    | MaybeAllValuesShorthandProperty<
        Extract<
          RequiredBoxProps['borderWidth'],
          'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'none'
        >
      >
    | Extract<RequiredBoxProps['borderWidth'], ''>;
  borderStyle:
    | MaybeAllValuesShorthandProperty<BoxBorderStyles>
    | Extract<RequiredBoxProps['borderStyle'], ''>;
  borderColor: Extract<
    RequiredBoxProps['borderColor'],
    'subdued' | 'base' | 'strong' | ''
  >;
  borderRadius: MaybeAllValuesShorthandProperty<BoxBorderRadii>;
}

declare class BoxElement extends PreactCustomElement implements BoxProps {
  constructor(renderImpl: RenderImpl);
  accessor accessibilityRole: BoxProps['accessibilityRole'];
  accessor background: BoxProps['background'];
  accessor blockSize: BoxProps['blockSize'];
  accessor minBlockSize: BoxProps['minBlockSize'];
  accessor maxBlockSize: BoxProps['maxBlockSize'];
  accessor inlineSize: BoxProps['inlineSize'];
  accessor minInlineSize: BoxProps['minInlineSize'];
  accessor maxInlineSize: BoxProps['maxInlineSize'];
  accessor overflow: BoxProps['overflow'];
  accessor padding: BoxProps['padding'];
  accessor paddingBlock: BoxProps['paddingBlock'];
  accessor paddingBlockStart: BoxProps['paddingBlockStart'];
  accessor paddingBlockEnd: BoxProps['paddingBlockEnd'];
  accessor paddingInline: BoxProps['paddingInline'];
  accessor paddingInlineStart: BoxProps['paddingInlineStart'];
  accessor paddingInlineEnd: BoxProps['paddingInlineEnd'];
  accessor border: BoxProps['border'];
  accessor borderWidth: BoxProps['borderWidth'];
  accessor borderStyle: BoxProps['borderStyle'];
  accessor borderColor: BoxProps['borderColor'];
  accessor borderRadius: BoxProps['borderRadius'];
  accessor accessibilityLabel: BoxProps['accessibilityLabel'];
  accessor accessibilityVisibility: BoxProps['accessibilityVisibility'];
  accessor display: BoxProps['display'];
}

declare class Box extends BoxElement implements BoxProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$J]: Box;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$J]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        BoxJSXProps;
    }
  }
}

declare const tagName$J = 's-box';
export interface BoxJSXProps
  extends Partial<BoxProps>,
    Pick<BoxProps$1, 'id'> {}

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
    | 'lang'
    | 'loading'
    | 'type'
    | 'tone'
    | 'variant'
    | 'target'
    | 'href'
    | 'download'
  >
>;
export interface ButtonProps extends ButtonBaseProps {
  tone: Extract<ButtonProps$1['tone'], 'neutral' | 'critical' | 'auto'>;
  icon: IconProps['type'];
}

export interface PreactOverlayControlProps
  extends Required<Pick<InteractionProps, 'commandFor'>> {
  command: Extract<
    InteractionProps['command'],
    '--show' | '--hide' | '--toggle' | '--auto'
  >;
}

declare const Button_base: (abstract new (
  args_0: RenderImpl,
) => PreactCustomElement & PreactOverlayControlProps) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;
declare class Button extends Button_base implements ButtonProps {
  accessor disabled: ButtonProps['disabled'];
  accessor icon: ButtonProps['icon'];
  accessor loading: ButtonProps['loading'];
  accessor variant: ButtonProps['variant'];
  accessor tone: ButtonProps['tone'];
  accessor target: ButtonProps['target'];
  accessor href: ButtonProps['href'];
  accessor download: ButtonProps['download'];
  accessor onclick: CallbackEventListener<typeof tagName$I> | null;
  accessor onblur: CallbackEventListener<typeof tagName$I> | null;
  accessor onfocus: CallbackEventListener<typeof tagName$I> | null;
  accessor type: ButtonProps['type'];
  accessor accessibilityLabel: ButtonProps['accessibilityLabel'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$I]: Button;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$I]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        ButtonJSXProps;
    }
  }
}

declare const tagName$I = 's-button';
export interface ButtonJSXProps
  extends Partial<ButtonProps>,
    Pick<ButtonProps$1, 'id'> {
  onClick?: ((event: CallbackEvent<typeof tagName$I>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$I>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$I>) => void) | null;
}

declare const internals$1: unique symbol;
export type PreactInputProps = Required<
  Pick<TextFieldProps$1, 'disabled' | 'id' | 'name' | 'value'>
>;
declare class PreactInputElement
  extends PreactCustomElement
  implements PreactInputProps
{
  static formAssociated: boolean;
  /** @private */
  [internals$1]: ElementInternals;
  accessor onchange: CallbackEventListener<'input'>;
  accessor oninput: CallbackEventListener<'input'>;
  accessor disabled: PreactInputProps['disabled'];
  accessor id: PreactInputProps['id'];
  accessor name: PreactInputProps['name'];
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
  accessor defaultChecked: PreactCheckboxProps['defaultChecked'];
  accessor accessibilityLabel: PreactCheckboxProps['accessibilityLabel'];
  accessor details: PreactCheckboxProps['details'];
  accessor error: PreactCheckboxProps['error'];
  accessor label: PreactCheckboxProps['label'];
  accessor required: PreactCheckboxProps['required'];
  /** @private */
  formResetCallback(): void;
  constructor(renderImpl: RenderImpl);
}

export interface CheckboxProps extends PreactCheckboxProps {
  indeterminate: Required<CheckboxProps$1>['indeterminate'];
  defaultIndeterminate: Required<CheckboxProps$1>['defaultIndeterminate'];
}

declare class Checkbox extends PreactCheckboxElement implements CheckboxProps {
  get indeterminate(): CheckboxProps['indeterminate'];
  set indeterminate(indeterminate: CheckboxProps['indeterminate']);
  accessor defaultIndeterminate: CheckboxProps['defaultIndeterminate'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$H]: Checkbox;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$H]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        CheckboxJSXProps;
    }
  }
}

declare const tagName$H = 's-checkbox';
export interface CheckboxJSXProps
  extends Partial<CheckboxProps>,
    Pick<CheckboxProps$1, 'id'> {
  onChange?: ((event: CallbackEvent<typeof tagName$H>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$H>) => void) | null;
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
      | 'label'
      | 'details'
    >
  > {}

declare class Choice extends PreactCustomElement implements ChoiceProps {
  accessor disabled: ChoiceProps['disabled'];
  accessor details: ChoiceProps['details'];
  get selected(): boolean;
  set selected(selected: ChoiceProps['selected']);
  accessor value: ChoiceProps['value'];
  accessor accessibilityLabel: ChoiceProps['accessibilityLabel'];
  accessor label: ChoiceProps['label'];
  accessor defaultSelected: ChoiceProps['defaultSelected'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$G]: Choice;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$G]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        ChoiceJSXProps;
    }
  }
}

declare const tagName$G = 's-choice';
export interface ChoiceJSXProps
  extends Partial<ChoiceProps>,
    Pick<ChoiceProps$1, 'id'> {}

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

declare const internals: unique symbol;
declare class BaseClass extends PreactCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals]: ElementInternals;
}
declare class ChoiceList extends BaseClass implements ChoiceListProps {
  accessor disabled: ChoiceListProps['disabled'];
  accessor name: ChoiceListProps['name'];
  accessor error: ChoiceListProps['error'];
  accessor details: ChoiceListProps['details'];
  accessor multiple: ChoiceListProps['multiple'];
  accessor label: ChoiceListProps['label'];
  accessor labelAccessibilityVisibility: ChoiceListProps['labelAccessibilityVisibility'];
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
    [tagName$F]: ChoiceList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$F]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        ChoiceListJSXProps;
    }
  }
}

declare const tagName$F = 's-choice-list';
export interface ChoiceListJSXProps
  extends Partial<ChoiceListProps>,
    Pick<ChoiceListProps$1, 'id'> {
  onChange?: ((event: CallbackEvent<typeof tagName$F>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$F>) => void) | null;
}

export type ClickableBaseProps = Required<
  Pick<
    ClickableProps$1,
    | 'command'
    | 'commandFor'
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
  renderImpl: RenderImpl,
) => BoxElement & PreactOverlayControlProps) &
  Pick<typeof BoxElement, 'prototype' | 'observedAttributes'>;
declare class Clickable extends Clickable_base implements ClickableProps {
  accessor disabled: ClickableProps['disabled'];
  accessor loading: ClickableProps['loading'];
  accessor target: ClickableProps['target'];
  accessor href: ClickableProps['href'];
  accessor download: ClickableProps['download'];
  accessor onclick: CallbackEventListener<typeof tagName$E> | null;
  accessor onblur: CallbackEventListener<typeof tagName$E> | null;
  accessor onfocus: CallbackEventListener<typeof tagName$E> | null;
  accessor type: ClickableProps['type'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$E]: Clickable;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$E]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        ClickableJSXProps;
    }
  }
}

declare const tagName$E = 's-clickable';
export interface ClickableJSXProps
  extends Partial<ClickableProps>,
    Pick<ClickableProps$1, 'id'> {
  onClick?: ((event: CallbackEvent<typeof tagName$E>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$E>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$E>) => void) | null;
}

export interface DividerProps
  extends Pick<DividerProps$1, 'direction' | 'color'> {
  direction: Extract<DividerProps$1['direction'], 'inline' | 'block'>;
  color: Extract<DividerProps$1['color'], 'base' | 'strong'>;
}

declare class Divider extends PreactCustomElement implements DividerProps {
  accessor direction: DividerProps['direction'];
  accessor color: DividerProps['color'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$D]: Divider;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$D]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        DividerJSXProps;
    }
  }
}

declare const tagName$D = 's-divider';
export interface DividerJSXProps
  extends Partial<DividerProps>,
    Pick<DividerProps$1, 'id'> {}

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
  accessor onblur: CallbackEventListener<'input'>;
  accessor onfocus: CallbackEventListener<'input'>;
  accessor autocomplete: PreactFieldProps<Autocomplete>['autocomplete'];
  accessor defaultValue: PreactFieldProps['defaultValue'];
  accessor details: PreactFieldProps['details'];
  accessor error: PreactFieldProps['error'];
  accessor label: PreactFieldProps['label'];
  accessor labelAccessibilityVisibility: PreactFieldProps['labelAccessibilityVisibility'];
  accessor placeholder: PreactFieldProps['placeholder'];
  accessor readOnly: PreactFieldProps['readOnly'];
  accessor required: PreactFieldProps['required'];
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
   */
  get isContentEditable(): boolean;
  /** @private */
  formResetCallback(): void;
  /** @private */
  connectedCallback(): void;
  constructor(renderImpl: RenderImpl);
}

export type EmailFieldProps = PreactFieldProps<
  Required<EmailFieldProps$1>['autocomplete']
> &
  Required<Pick<EmailFieldProps$1, 'maxLength' | 'minLength'>>;

declare class EmailField
  extends PreactFieldElement<EmailFieldProps['autocomplete']>
  implements EmailFieldProps
{
  accessor autocomplete: EmailFieldProps['autocomplete'];
  accessor maxLength: EmailFieldProps['maxLength'];
  accessor minLength: EmailFieldProps['minLength'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$C]: EmailField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$C]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        EmailFieldJSXProps;
    }
  }
}

declare const tagName$C = 's-email-field';
export interface EmailFieldJSXProps
  extends Partial<Omit<EmailFieldProps, 'accessory'>>,
    Pick<EmailFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$C> {}

export type RequiredAlignedProps = Required<GridProps$1>;
export interface GridProps
  extends BoxProps,
    Required<
      Pick<
        GridProps$1,
        | 'gridTemplateColumns'
        | 'gridTemplateRows'
        | 'alignItems'
        | 'justifyItems'
        | 'placeItems'
        | 'alignContent'
        | 'justifyContent'
        | 'placeContent'
      >
    >,
    MakeResponsivePick<RequiredAlignedProps, 'rowGap' | 'columnGap' | 'gap'> {}

declare class Grid extends BoxElement implements GridProps {
  constructor();
  accessor gridTemplateColumns: GridProps['gridTemplateColumns'];
  accessor gridTemplateRows: GridProps['gridTemplateRows'];
  accessor justifyItems: GridProps['justifyItems'];
  accessor alignItems: GridProps['alignItems'];
  accessor placeItems: GridProps['placeItems'];
  accessor justifyContent: GridProps['justifyContent'];
  accessor alignContent: GridProps['alignContent'];
  accessor placeContent: GridProps['placeContent'];
  accessor gap: GridProps['gap'];
  accessor rowGap: GridProps['rowGap'];
  accessor columnGap: GridProps['columnGap'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$B]: Grid;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$B]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        GridJSXProps;
    }
  }
}

declare const tagName$B = 's-grid';
export interface GridJSXProps
  extends Partial<GridProps>,
    Pick<GridProps$1, 'id'> {}

export type RequiredGridItemProps = Required<GridItemProps$1>;
export interface GridItemProps
  extends BoxProps,
    Required<Pick<GridItemProps$1, 'gridColumn' | 'gridRow'>> {
  gridColumn: RequiredGridItemProps['gridColumn'];
  gridRow: RequiredGridItemProps['gridRow'];
}

declare class GridItem extends BoxElement implements GridItemProps {
  accessor gridColumn: GridItemProps['gridColumn'];
  accessor gridRow: GridItemProps['gridRow'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$A]: GridItem;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$A]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        GridItemJSXProps;
    }
  }
}

declare const tagName$A = 's-grid-item';
export interface GridItemJSXProps
  extends Partial<GridItemProps>,
    Pick<GridItemProps$1, 'id'> {}

export type RequiredHeadingProps = Required<HeadingProps$1>;
export interface HeadingProps
  extends Pick<
    HeadingProps$1,
    'accessibilityRole' | 'accessibilityVisibility' | 'lineClamp'
  > {
  accessibilityRole: RequiredHeadingProps['accessibilityRole'];
  accessibilityVisibility: RequiredHeadingProps['accessibilityVisibility'];
  lineClamp: RequiredHeadingProps['lineClamp'];
}

declare class Heading extends PreactCustomElement implements HeadingProps {
  accessor accessibilityRole: HeadingProps['accessibilityRole'];
  accessor lineClamp: HeadingProps['lineClamp'];
  accessor accessibilityVisibility: HeadingProps['accessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$z]: Heading;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$z]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        HeadingJSXProps;
    }
  }
}

declare const tagName$z = 's-heading';
export interface HeadingJSXProps
  extends Partial<HeadingProps>,
    Pick<HeadingProps$1, 'id'> {}

declare class Icon extends PreactCustomElement implements IconProps {
  accessor color: IconProps['color'];
  accessor tone: IconProps['tone'];
  accessor type: IconProps['type'];
  accessor size: IconProps['size'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$y]: Icon;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$y]: Omit<
        HTMLAttributes<HTMLElement>,
        | 'size'
        | Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        IconJSXProps;
    }
  }
}

declare const tagName$y = 's-icon';
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
    > {
  border: BoxProps['border'];
  borderColor: BoxProps['borderColor'];
  borderRadius: BoxProps['borderRadius'];
  borderStyle: BoxProps['borderStyle'];
  borderWidth: BoxProps['borderWidth'];
}

declare class Image extends PreactCustomElement implements ImageProps {
  accessor src: ImageProps['src'];
  accessor srcSet: ImageProps['srcSet'];
  accessor sizes: ImageProps['sizes'];
  accessor alt: ImageProps['alt'];
  accessor aspectRatio: ImageProps['aspectRatio'];
  accessor objectFit: ImageProps['objectFit'];
  accessor loading: ImageProps['loading'];
  accessor accessibilityRole: ImageProps['accessibilityRole'];
  accessor inlineSize: ImageProps['inlineSize'];
  accessor border: ImageProps['border'];
  accessor borderWidth: ImageProps['borderWidth'];
  accessor borderStyle: ImageProps['borderStyle'];
  accessor borderColor: ImageProps['borderColor'];
  accessor borderRadius: ImageProps['borderRadius'];
  accessor onload: CallbackEventListener<typeof tagName$x> | null;
  accessor onerror: OnErrorEventHandler;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$x]: Image;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$x]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        ImageJSXProps;
    }
  }
}

declare const tagName$x = 's-image';
export interface ImageJSXProps
  extends Partial<ImageProps>,
    Pick<ImageProps$1, 'id'> {
  onError?: ((event: CallbackEvent<typeof tagName$x>) => void) | null;
  onLoad?: ((event: CallbackEvent<typeof tagName$x>) => void) | null;
}

export type RequiredLinkProps = Required<LinkProps$1>;
export interface LinkProps
  extends Pick<
    LinkProps$1,
    | 'accessibilityLabel'
    | 'command'
    | 'commandFor'
    | 'download'
    | 'href'
    | 'lang'
    | 'target'
    | 'tone'
  > {
  accessibilityLabel: RequiredLinkProps['accessibilityLabel'];
  command: RequiredLinkProps['command'];
  commandFor: RequiredLinkProps['commandFor'];
  download: RequiredLinkProps['download'];
  href: RequiredLinkProps['href'];
  lang: RequiredLinkProps['lang'];
  target: RequiredLinkProps['target'];
  tone: Extract<RequiredLinkProps['tone'], 'auto' | 'neutral' | 'critical'>;
}

declare const Link_base: (abstract new (
  args_0: RenderImpl,
) => PreactCustomElement & PreactOverlayControlProps) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;
declare class Link extends Link_base implements LinkProps {
  accessor tone: LinkProps['tone'];
  accessor accessibilityLabel: LinkProps['accessibilityLabel'];
  accessor href: LinkProps['href'];
  accessor target: LinkProps['target'];
  accessor download: LinkProps['download'];
  accessor lang: LinkProps['lang'];
  accessor onclick: CallbackEventListener<typeof tagName$w> | null;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$w]: Link;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$w]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        LinkJSXProps;
    }
  }
}

declare const tagName$w = 's-link';
export interface LinkJSXProps
  extends Partial<LinkProps>,
    Pick<LinkProps$1, 'id' | 'lang'> {
  onClick?: ((event: CallbackEvent<typeof tagName$w>) => void) | null;
}

export interface ListItemProps extends ListItemProps$1 {}

declare class ListItem extends PreactCustomElement implements ListItemProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$v]: ListItem;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$v]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        ListItemJSXProps;
    }
  }
}

declare const tagName$v = 's-list-item';
export interface ListItemJSXProps
  extends Partial<ListItemProps>,
    Pick<ListItemProps$1, 'id'> {}

export type RequiredMoneyFieldProps = Required<MoneyFieldProps$1>;
export interface MoneyFieldProps
  extends Omit<PreactFieldProps, 'value'>,
    Pick<RequiredMoneyFieldProps, 'max' | 'min' | 'step' | 'currencyCode'> {
  value: Required<MoneyFieldProps$1>['value'];
}

declare class MoneyField
  extends PreactFieldElement<MoneyFieldProps['autocomplete']>
  implements MoneyFieldProps
{
  accessor max: MoneyFieldProps['max'];
  accessor min: MoneyFieldProps['min'];
  accessor step: MoneyFieldProps['step'];
  accessor currencyCode: MoneyFieldProps['currencyCode'];
  get value(): MoneyFieldProps['value'];
  set value(value: MoneyFieldProps['value']);
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$u]: MoneyField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$u]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        MoneyFieldJSXProps;
    }
  }
}

declare const tagName$u = 's-money-field';
export interface MoneyFieldJSXProps
  extends Partial<MoneyFieldProps>,
    FieldReactProps<typeof tagName$u>,
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
  accessor inputMode: NumberFieldProps['inputMode'];
  accessor step: NumberFieldProps['step'];
  accessor max: NumberFieldProps['max'];
  accessor min: NumberFieldProps['min'];
  accessor prefix: NumberFieldProps['prefix'];
  accessor suffix: NumberFieldProps['suffix'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$t]: NumberField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$t]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        NumberFieldJSXProps;
    }
  }
}

declare const tagName$t = 's-number-field';
export interface NumberFieldJSXProps
  extends Partial<NumberFieldProps>,
    Pick<NumberFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$t> {}

export interface OptionProps
  extends Required<
    Pick<OptionProps$1, 'disabled' | 'value' | 'selected' | 'defaultSelected'>
  > {}

declare class Option extends PreactCustomElement implements OptionProps {
  accessor selected: OptionProps['selected'];
  accessor defaultSelected: OptionProps['defaultSelected'];
  accessor value: OptionProps['value'];
  accessor disabled: OptionProps['disabled'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$s]: Option;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$s]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        OptionJSXProps;
    }
  }
}

declare const tagName$s = 's-option';
export interface OptionJSXProps extends Partial<OptionProps> {}

export interface OptionGroupProps
  extends Required<Pick<OptionGroupProps$1, 'disabled' | 'label'>> {}

declare class OptionGroup
  extends PreactCustomElement
  implements OptionGroupProps
{
  accessor disabled: OptionGroupProps['disabled'];
  accessor label: OptionGroupProps['label'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$r]: OptionGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$r]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        OptionGroupJSXProps;
    }
  }
}

declare const tagName$r = 's-option-group';
export interface OptionGroupJSXProps extends Partial<OptionGroupProps> {}

export interface OrderedListProps extends OrderedListProps$1 {}

declare class OrderedList
  extends PreactCustomElement
  implements OrderedListProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$q]: OrderedList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$q]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        OrderedListJSXProps;
    }
  }
}

declare const tagName$q = 's-ordered-list';
export interface OrderedListJSXProps
  extends Partial<OrderedListProps>,
    Pick<OrderedListProps$1, 'id'> {}

export interface PageProps extends Required<Pick<PageProps$1, 'inlineSize'>> {
  inlineSize: Extract<PageProps$1['inlineSize'], 'base' | 'large' | 'small'>;
}

declare class Page extends PreactCustomElement implements PageProps {
  accessor inlineSize: PageProps['inlineSize'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$p]: Page;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$p]: Omit<
        HTMLAttributes<HTMLElement>,
        | Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
        | 'aside'
      > &
        PageJSXProps;
    }
  }
}

declare const tagName$p = 's-page';
export interface PageJSXProps extends Partial<PageProps> {
  /**
   * The content to display in the aside section of the page.
   */
  aside?: ComponentChild;
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
  lineClamp: Extract<ParagraphProps$1['lineClamp'], number>;
}

declare class Paragraph extends PreactCustomElement implements ParagraphProps {
  accessor fontVariantNumeric: ParagraphProps['fontVariantNumeric'];
  accessor lineClamp: ParagraphProps['lineClamp'];
  accessor tone: Extract<
    ParagraphProps['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;

  accessor color: ParagraphProps['color'];
  accessor dir: ParagraphProps['dir'];
  accessor accessibilityVisibility: ParagraphProps['accessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$o]: Paragraph;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$o]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        ParagraphJSXProps;
    }
  }
}

declare const tagName$o = 's-paragraph';
export interface ParagraphJSXProps
  extends Partial<ParagraphProps>,
    Pick<ParagraphProps$1, 'id'> {}

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
  accessor maxLength: PasswordFieldProps['maxLength'];
  accessor minLength: PasswordFieldProps['minLength'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$n]: PasswordField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$n]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        PasswordFieldJSXProps;
    }
  }
}

declare const tagName$n = 's-password-field';
export interface PasswordFieldJSXProps
  extends Partial<PasswordFieldProps>,
    Pick<PasswordFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$n> {}

export type SearchFieldProps = PreactFieldProps<
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

declare class SearchField
  extends PreactFieldElement<SearchFieldProps['autocomplete']>
  implements SearchFieldProps
{
  accessor maxLength: SearchFieldProps['maxLength'];
  accessor minLength: SearchFieldProps['minLength'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$m]: SearchField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$m]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        SearchFieldJSXProps;
    }
  }
}

declare const tagName$m = 's-search-field';
export interface SearchFieldJSXProps
  extends Partial<SearchFieldProps>,
    Pick<TextFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$m> {}

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

declare class Section extends PreactCustomElement implements SectionProps {
  constructor();
  /** @private */
  connectedCallback(): void;
  accessor accessibilityLabel: SectionProps['accessibilityLabel'];
  accessor heading: SectionProps['heading'];
  accessor padding: SectionProps['padding'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$l]: Section;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$l]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        SectionJSXProps;
    }
  }
}

declare const tagName$l = 's-section';
export interface SectionJSXProps
  extends Partial<SectionProps>,
    Pick<SectionProps$1, 'id'> {}

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
}

declare const usedFirstOptionSymbol: unique symbol;
declare const hasInitialValueSymbol: unique symbol;

declare class Select extends PreactInputElement implements SelectProps {
  accessor icon: SelectProps['icon'];
  accessor details: SelectProps['details'];
  accessor error: SelectProps['error'];
  accessor label: SelectProps['label'];
  accessor placeholder: SelectProps['placeholder'];
  accessor required: SelectProps['required'];
  accessor labelAccessibilityVisibility: SelectProps['labelAccessibilityVisibility'];
  /** @private */
  connectedCallback(): void;
  disconnectedCallback(): void;
  constructor();
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
declare global {
  interface HTMLElementTagNameMap {
    [tagName$k]: Select;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$k]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        SelectJSXProps;
    }
  }
}

declare const tagName$k = 's-select';
export interface SelectJSXProps extends Partial<SelectProps> {
  onChange?: (event: CallbackEvent<typeof tagName$k>) => void;
  onInput?: (event: CallbackEvent<typeof tagName$k>) => void;
  onBlur?: (event: CallbackEvent<typeof tagName$k>) => void;
  onFocus?: (event: CallbackEvent<typeof tagName$k>) => void;
}

export interface SpinnerProps
  extends Required<Pick<SpinnerProps$1, 'accessibilityLabel'>> {
  size: Extract<SpinnerProps$1['size'], 'large' | 'large-100' | 'base'>;
}

declare class Spinner extends PreactCustomElement implements SpinnerProps {
  accessor accessibilityLabel: string;
  accessor size: SpinnerProps['size'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$j]: Spinner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$j]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        SpinnerJSXProps;
    }
  }
}

declare const tagName$j = 's-spinner';
export interface SpinnerJSXProps
  extends Partial<SpinnerProps>,
    Pick<SpinnerProps$1, 'id'> {}

export type AlignedStackProps = Required<StackProps$1>;
export interface StackProps
  extends BoxProps,
    Pick<
      Required<AlignedStackProps>,
      'justifyContent' | 'alignItems' | 'alignContent'
    >,
    MakeResponsivePick<
      AlignedStackProps,
      'rowGap' | 'columnGap' | 'direction' | 'gap'
    > {}

declare class Stack extends BoxElement implements StackProps {
  constructor();
  accessor direction: StackProps['direction'];
  accessor justifyContent: StackProps['justifyContent'];
  accessor alignItems: StackProps['alignItems'];
  accessor alignContent: StackProps['alignContent'];
  accessor gap: StackProps['gap'];
  accessor rowGap: StackProps['rowGap'];
  accessor columnGap: StackProps['columnGap'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$i]: Stack;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$i]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        StackJSXProps;
    }
  }
}

declare const tagName$i = 's-stack';
export interface StackJSXProps
  extends Partial<StackProps>,
    Pick<StackProps$1, 'id'> {}

export interface SwitchProps
  extends PreactCheckboxProps,
    Required<Pick<SwitchProps$1, 'labelAccessibilityVisibility'>> {}

declare class Switch extends PreactCheckboxElement implements SwitchProps {
  accessor labelAccessibilityVisibility: SwitchProps['labelAccessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$h]: Switch;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$h]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        SwitchJSXProps;
    }
  }
}

declare const tagName$h = 's-switch';
export interface SwitchJSXProps
  extends Partial<SwitchProps>,
    Pick<SwitchProps$1, 'id'> {
  onChange?: ((event: CallbackEvent<typeof tagName$h>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$h>) => void) | null;
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

export interface TableHeaderProps extends Pick<TableHeaderProps$1, 'listSlot'> {
  listSlot: Extract<
    TableHeaderProps$1['listSlot'],
    'primary' | 'secondary' | 'labeled' | 'kicker' | 'inline'
  >;
}

declare class AddedContext<T> extends EventTarget {
  constructor(defaultValue: T);
  get value(): T;
  set value(value: T);
}

declare const actualTableVariantSymbol: unique symbol;
declare const tableHeadersSharedDataSymbol: unique symbol;
export type ActualTableVariant = 'table' | 'list';

declare class Table extends PreactCustomElement implements TableProps {
  accessor variant: TableProps['variant'];
  accessor loading: TableProps['loading'];
  accessor paginate: TableProps['paginate'];
  accessor hasPreviousPage: TableProps['hasPreviousPage'];
  accessor hasNextPage: TableProps['hasNextPage'];
  accessor onpreviouspage: CallbackEventListener<typeof tagName$g> | null;
  accessor onnextpage: CallbackEventListener<typeof tagName$g> | null;
  /**
   * @private
   * The actual table variant, which is either 'table' or 'list'.
   */
  [actualTableVariantSymbol]: AddedContext<ActualTableVariant>;
  /** @private */
  [tableHeadersSharedDataSymbol]: AddedContext<
    {
      listSlot: TableHeaderProps['listSlot'];
      textContent: string;
    }[]
  >;

  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$g]: Table;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$g]: Omit<
        HTMLAttributes<HTMLElement>,
        | Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
        | 'filters'
      > &
        TableJSXProps;
    }
  }
}

declare const tagName$g = 's-table';
export interface TableJSXProps
  extends Partial<TableProps>,
    Pick<TableProps$1, 'id' | 'onNextPage' | 'onPreviousPage'> {
  /**
   * Additional filters to display in the table. For example, the `s-search-field` component can be used to filter the table data.
   */
  filters?: ComponentChild;
}

export interface TableBodyProps extends TableBodyProps$1 {}

declare class TableBody extends PreactCustomElement implements TableBodyProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$f]: TableBody;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$f]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        TableBodyJSXProps;
    }
  }
}

declare const tagName$f = 's-table-body';
export interface TableBodyJSXProps
  extends Partial<TableBodyProps>,
    Pick<TableBodyProps$1, 'id'> {}

export interface TableCellProps extends TableCellProps$1 {}

declare class TableCell extends PreactCustomElement implements TableCellProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$e]: TableCell;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$e]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        TableCellJSXProps;
    }
  }
}

declare const tagName$e = 's-table-cell';
export interface TableCellJSXProps
  extends Partial<TableCellProps>,
    Pick<TableCellProps$1, 'id'> {}

declare class TableHeader
  extends PreactCustomElement
  implements TableHeaderProps
{
  accessor listSlot: TableHeaderProps['listSlot'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$d]: TableHeader;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$d]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        TableHeaderJSXProps;
    }
  }
}

declare const tagName$d = 's-table-header';
export interface TableHeaderJSXProps
  extends Partial<TableHeaderProps>,
    Pick<TableHeaderProps$1, 'id'> {}

export interface TableHeaderRowProps extends TableHeaderRowProps$1 {}

declare class TableHeaderRow
  extends PreactCustomElement
  implements TableHeaderRowProps
{
  constructor();
  /** @private */
  connectedCallback(): void;
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$c]: TableHeaderRow;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$c]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        TableHeaderRowJSXProps;
    }
  }
}

declare const tagName$c = 's-table-header-row';
export interface TableHeaderRowJSXProps
  extends Partial<TableHeaderRowProps>,
    Pick<TableHeaderRowProps$1, 'id'> {}

export interface TableRowProps extends TableRowProps$1 {}

declare class TableRow extends PreactCustomElement implements TableRowProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$b]: TableRow;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$b]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        TableRowJSXProps;
    }
  }
}

declare const tagName$b = 's-table-row';
export interface TableRowJSXProps
  extends Partial<TableRowProps>,
    Pick<TableRowProps$1, 'id'> {}

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
    >
  > {
  color: Extract<TextProps$1['color'], 'base' | 'subdued'>;
  type: Extract<
    TextProps$1['type'],
    'address' | 'redundant' | 'strong' | 'generic'
  >;
  tone: Extract<
    TextProps$1['tone'],
    'auto' | 'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'caution'
  >;
  fontVariantNumeric: Extract<
    TextProps$1['fontVariantNumeric'],
    'auto' | 'normal' | 'tabular-nums'
  >;
}

declare class Text extends PreactCustomElement implements TextProps {
  accessor fontVariantNumeric: TextProps['fontVariantNumeric'];
  accessor color: TextProps['color'];
  accessor tone: TextProps['tone'];
  accessor type: TextProps['type'];
  accessor dir: TextProps['dir'];
  accessor accessibilityVisibility: TextProps['accessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$a]: Text;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$a]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        TextJSXProps;
    }
  }
}

declare const tagName$a = 's-text';
export interface TextJSXProps
  extends Partial<TextProps>,
    Pick<TextProps$1, 'id'> {}

export type TextAreaProps = PreactFieldProps<
  Required<TextAreaProps$1>['autocomplete']
> &
  Required<Pick<TextAreaProps$1, 'maxLength' | 'minLength' | 'rows'>>;

declare class TextArea
  extends PreactFieldElement<TextAreaProps['autocomplete']>
  implements TextAreaProps
{
  accessor maxLength: TextAreaProps['maxLength'];
  accessor minLength: TextAreaProps['minLength'];
  accessor rows: TextAreaProps['rows'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$9]: TextArea;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$9]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        TextAreaJSXProps;
    }
  }
}

declare const tagName$9 = 's-text-area';
export interface TextAreaJSXProps
  extends Partial<TextAreaProps>,
    Pick<TextAreaProps$1, 'id'>,
    FieldReactProps<typeof tagName$9> {}

export type TextFieldProps = PreactFieldProps<
  Required<TextFieldProps$1>['autocomplete']
> &
  Required<
    Pick<
      TextFieldProps$1,
      'icon' | 'maxLength' | 'minLength' | 'prefix' | 'suffix'
    >
  >;

declare class TextField
  extends PreactFieldElement<TextFieldProps['autocomplete']>
  implements TextFieldProps
{
  accessor icon: TextFieldProps['icon'];
  accessor maxLength: TextFieldProps['maxLength'];
  accessor minLength: TextFieldProps['minLength'];
  accessor prefix: TextFieldProps['prefix'];
  accessor suffix: TextFieldProps['suffix'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$8]: TextField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$8]: Omit<
        HTMLAttributes<HTMLElement>,
        | Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
        | 'accessory'
      > &
        TextFieldJSXProps;
    }
  }
}

declare const tagName$8 = 's-text-field';
export interface TextFieldJSXProps
  extends Partial<Omit<TextFieldProps, 'accessory'>>,
    Pick<TextFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$8> {
  /**
   * The accessory to display in the text field.
   */
  accessory?: ComponentChild;
}

export type URLFieldProps = PreactFieldProps<
  Required<URLFieldProps$1>['autocomplete']
> &
  Required<Pick<URLFieldProps$1, 'maxLength' | 'minLength'>>;

declare class URLField
  extends PreactFieldElement<URLFieldProps['autocomplete']>
  implements URLFieldProps
{
  accessor autocomplete: URLFieldProps['autocomplete'];
  accessor maxLength: URLFieldProps['maxLength'];
  accessor minLength: URLFieldProps['minLength'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$7]: URLField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$7]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        URLFieldJSXProps;
    }
  }
}

declare const tagName$7 = 's-url-field';
export interface URLFieldJSXProps
  extends Partial<Omit<URLFieldProps, 'accessory'>>,
    Pick<URLFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$7> {}

export interface UnorderedListProps extends UnorderedListProps$1 {}

declare class UnorderedList
  extends PreactCustomElement
  implements UnorderedListProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$6]: UnorderedList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$6]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        UnorderedListJSXProps;
    }
  }
}

declare const tagName$6 = 's-unordered-list';
export interface UnorderedListJSXProps
  extends Partial<UnorderedListProps>,
    Pick<UnorderedListProps$1, 'id'> {}

export interface AdminActionProps
  extends Pick<AdminActionProps$1, 'heading' | 'loading'> {}

declare const tagName$5 = 's-admin-action';
export interface AdminActionJSXProps
  extends Partial<AdminActionProps>,
    Pick<AdminActionProps$1, 'id'> {
  /**
   * The primary action to display in the admin action.
   */
  primaryAction: ComponentChild;
  /**
   * The secondary actions to display in the admin action.
   */
  secondaryActions: ComponentChild;
}

declare class AdminAction
  extends PreactCustomElement
  implements AdminActionProps
{
  heading: string;
  loading: boolean;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$5]: AdminAction;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$5]: Omit<
        HTMLAttributes<HTMLElement>,
        | Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
        | 'primaryAction'
        | 'secondaryActions'
      > &
        AdminActionJSXProps;
    }
  }
}

export interface AdminBlockProps
  extends Pick<AdminBlockProps$1, 'heading' | 'collapsedSummary'> {}

declare const tagName$4 = 's-admin-block';
export interface AdminBlockJSXProps
  extends Partial<AdminBlockProps>,
    Pick<AdminBlockProps$1, 'id'> {}

declare class AdminBlock
  extends PreactCustomElement
  implements AdminBlockProps
{
  heading: string;
  collapsedSummary: string;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$4]: AdminBlock;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$4]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        AdminBlockJSXProps;
    }
  }
}

export interface AdminPrintActionProps
  extends Pick<AdminPrintActionProps$1, 'src'> {}

declare const tagName$3 = 's-admin-print-action';
export interface AdminPrintActionJSXProps
  extends Partial<AdminPrintActionProps>,
    Pick<AdminPrintActionProps$1, 'id'> {}

declare class AdminPrintAction
  extends PreactCustomElement
  implements AdminPrintActionProps
{
  src: string;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$3]: AdminPrintAction;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$3]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        AdminPrintActionJSXProps;
    }
  }
}

declare const tagName$2 = 's-customer-segment-template';
/**
 * Reserved namespace and key for the customer standard metafield used in the template's query.
 * More info - https://shopify.dev/docs/apps/custom-data/metafields/definitions/standard
 */
export type CustomerStandardMetafieldDependency = 'facts.birth_date';
export interface CustomerSegmentTemplateProps {
  /**
   * The localized title of the template.
   */
  title: string;
  /**
   * The localized description of the template. An array can be used for multiple paragraphs.
   */
  description: string | string[];
  /**
   * The code snippet to render in the template with syntax highlighting. The `query` is not validated in the template.
   */
  query: string;
  /**
   * The code snippet to insert in the segment editor. If missing, `query` will be used. The `queryToInsert` is not validated in the template.
   */
  queryToInsert: string;
  /**
   * The list of customer standard metafields or custom metafields used in the template's query.
   */
  dependencies?: {
    standardMetafields?: CustomerStandardMetafieldDependency[];
    customMetafields?: string[];
  };
  /**
   * ISO 8601-encoded date and time string. A "New" badge will be rendered for templates introduced in the last month.
   */
  createdOn: string;
}
declare class CustomerSegmentTemplate
  extends PreactCustomElement
  implements CustomerSegmentTemplateProps
{
  constructor();
  description: string | string[];
  query: string;
  queryToInsert: string;
  createdOn: string;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$2]: CustomerSegmentTemplate;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$2]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        CustomerSegmentTemplateJSXProps;
    }
  }
}

export interface CustomerSegmentTemplateJSXProps
  extends Partial<CustomerSegmentTemplateProps> {
  id?: string;
}

export interface FormProps {}
declare class Form extends PreactCustomElement implements FormProps {
  constructor();
  accessor onsubmit: ((event: ExtendableEvent) => void) | null;
  accessor onreset: CallbackEventListener<typeof tagName$1> | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$1]: Form;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$1]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        FormJSXProps;
    }
  }
}

declare const tagName$1 = 's-form';
export interface ExtendableEvent extends CallbackEvent<typeof tagName$1> {
  waitUntil(f: Promise<unknown>): void;
}
export interface FormJSXProps extends Partial<FormProps> {
  id?: string;
  /**
   * A callback that is run when the form is submitted.
   */
  onSubmit?: ((event: ExtendableEvent) => void) | null;
  /**
   * A callback that is run when the form is reset.
   */
  onReset?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
}

declare const tagName = 's-function-settings';
export interface FunctionSettingsProps {
  /**
   * A unique identifier for the form.
   */
  id?: string;
}
declare class FunctionSettings
  extends PreactCustomElement
  implements FunctionSettingsProps
{
  constructor();
  accessor onsave: CallbackEventListener<typeof tagName> | null;
  accessor onerror: OnErrorEventHandler;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: FunctionSettings;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        FunctionSettingsJSXProps;
    }
  }
}

export interface FunctionSettingsJSXProps
  extends Partial<FunctionSettingsProps> {
  id?: string;
}

export {
  AdminAction,
  AdminBlock,
  AdminPrintAction,
  Badge,
  Banner,
  Box,
  Button,
  Checkbox,
  Choice,
  ChoiceList,
  Clickable,
  CustomerSegmentTemplate,
  Divider,
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
  MoneyField,
  NumberField,
  Option,
  OptionGroup,
  OrderedList,
  Page,
  Paragraph,
  PasswordField,
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
  URLField,
  UnorderedList,
};
export type {
  AdminActionJSXProps,
  AdminBlockJSXProps,
  AdminPrintActionJSXProps,
  BadgeJSXProps,
  BannerJSXProps,
  BoxJSXProps,
  ButtonJSXProps,
  CheckboxJSXProps,
  ChoiceJSXProps,
  ChoiceListJSXProps,
  ClickableJSXProps,
  CustomerSegmentTemplateJSXProps,
  DividerJSXProps,
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
  MoneyFieldJSXProps,
  NumberFieldJSXProps,
  OptionGroupJSXProps,
  OptionJSXProps,
  OrderedListJSXProps,
  PageJSXProps,
  ParagraphJSXProps,
  PasswordFieldJSXProps,
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
  URLFieldJSXProps,
  UnorderedListJSXProps,
};

export interface BannerSlots {
  /**
   * The secondary actions to display at the bottom of the banner. Only a maximum of two `s-button` components are allowed.
   */
  'secondary-actions'?: HTMLElement;
}

export interface PageSlots {
  /**
   * The content to display in the aside section of the page.
   */
  aside?: HTMLElement;
}

export interface TableSlots {
  /**
   * Additional filters to display in the table. For example, the `s-search-field` component can be used to filter the table data.
   */
  filters?: HTMLElement;
}

export interface TextFieldSlots {
  /**
   * The accessory to display in the text field.
   */
  accessory?: HTMLElement;
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
