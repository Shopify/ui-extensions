/** VERSION: 1.25.0 **/

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
/**
 * TODO: Update `any` type here after this is resolved
 * https://github.com/Shopify/ui-api-design/issues/139
 */
/**
 * Represents any valid children that can be rendered within a component, including elements, strings, numbers, or arrays of these types.
 * This is an alias for Preact's `ComponentChildren` type.
 * @publicDocs
 */
export type ComponentChildren = preact.ComponentChildren;
/**
 * Represents string-only children for components that specifically require text content.
 * @publicDocs
 */
export type StringChildren = string;
export interface GlobalProps {
  /**
   * A unique identifier for the element. Use this to reference the element in JavaScript,
   * link labels to form controls, or target specific elements for styling or scripting.
   */
  id?: string;
}
/** @publicDocs */
export interface ActionProps {
  /**
   * The text to use as the action modal's title. If not provided, the name of the extension will be used.
   */
  heading?: string;
}
/**
 * The action component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface ActionSlots {
  /**
   * The primary action button or link, representing the main or most important action available in this context.
   * Typically displayed with higher visual prominence than secondary actions to establish clear hierarchy.
   */
  primaryAction?: ComponentChildren;
  /**
   * Additional action buttons or links that provide alternative or supporting actions.
   * Visually de-emphasized compared to the primary action.
   */
  secondaryActions?: ComponentChildren;
}
interface AdminActionProps$1 extends GlobalProps, ActionProps, ActionSlots {
  /**
   * Whether the action is in a loading state, such as during initial page load or when the action is being opened.
   * When `true`, the action is in an inert state that prevents user interaction.
   *
   * @default false
   */
  loading?: boolean;
}
interface AdminBlockProps$1 extends GlobalProps {
  /**
   * The text displayed as the block's title in the header. If not provided, the extension name will be used.
   */
  heading?: string;
  /**
   * The summary text displayed when the app block is collapsed. Summaries longer than 30 characters will be truncated.
   */
  collapsedSummary?: string;
}
interface AdminPrintActionProps$1 extends GlobalProps {
  /**
   * The URL of the document to preview and print. Supports HTML, PDF, and image formats.
   * If not provided, the preview will show an empty state and the print button will be disabled.
   */
  src?: string;
}
/** @publicDocs */
export interface BaseOverlayProps {
  /**
   * A callback fired immediately after the overlay is shown.
   */
  onShow?: (event: Event) => void;
  /**
   * A callback fired when the overlay is shown, after any show animations have completed.
   */
  onAfterShow?: (event: Event) => void;
  /**
   * A callback fired immediately after the overlay is hidden.
   */
  onHide?: (event: Event) => void;
  /**
   * A callback fired when the overlay is hidden, after any hide animations have completed.
   */
  onAfterHide?: (event: Event) => void;
}
/**
 * Shared interface for web component methods that control overlay visibility.
 *
 * All methods are required (not optional) because components implementing this interface must provide
 * consistent JavaScript APIs. Unlike props/attributes, methods are not rendered in HTML and consumers
 * expect them to be available on all component instances.
 * @publicDocs
 */
export interface BaseOverlayMethods {
  /**
   * A method to programmatically show the overlay.
   *
   * @implementation This is a method to be called on the element and not a callback and should hence be camelCase
   */
  showOverlay: () => void;
  /**
   * A method to programmatically hide the overlay.
   *
   * @implementation This is a method to be called on the element and not a callback and should hence be camelCase
   */
  hideOverlay: () => void;
  /**
   * A method to programmatically toggle the visibility of the overlay.
   *
   * @implementation This is a method to be called on the element and not a callback and should hence be camelCase
   */
  toggleOverlay: () => void;
}
/** @publicDocs */
export interface FocusEventProps {
  /**
   * A callback fired when the component loses focus. Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  onBlur?: (event: FocusEvent) => void;
  /**
   * A callback fired when the component receives focus. Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  onFocus?: (event: FocusEvent) => void;
}
/** @publicDocs */
export interface ToggleEventProps {
  /**
   * A callback fired when the element state changes, after any toggle animations have finished.
   *
   * - If the element transitioned from hidden to showing, the `oldState` property will be set to `closed` and the
   *   `newState` property will be set to `open`.
   * - If the element transitioned from showing to hidden, the `oldState` property will be set to `open` and the
   *   `newState` will be `closed`.
   *
   * Learn more about [ToggleEvent.newState](https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/newState) and [ToggleEvent.oldState](https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/oldState).
   */
  onAfterToggle?: (event: ToggleEvent$1) => void;
  /**
   * A callback fired immediately when the element state changes, before any animations.
   *
   * - If the element is transitioning from hidden to showing, the `oldState` property will be set to `closed` and the
   *   `newState` property will be set to `open`.
   * - If the element is transitioning from showing to hidden, then `oldState` property will be set to `open` and the
   *   `newState` will be `closed`.
   *
   * Learn more about the [toggle event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/toggle_event), [ToggleEvent.newState](https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/newState), and [ToggleEvent.oldState](https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/oldState).
   */
  onToggle?: (event: ToggleEvent$1) => void;
}
/**
 * Represents the visibility state of a toggleable element.
 *
 * - `open`: The element is visible or expanded.
 * - `closed`: The element is hidden or collapsed.
 * @publicDocs
 */
export type ToggleState = 'open' | 'closed';
interface ToggleEvent$1 extends Event {
  /**
   * The state the element is transitioning to, either `open` or `closed`.
   */
  readonly newState: ToggleState;
  /**
   * The state the element is transitioning from, either `open` or `closed`.
   */
  readonly oldState: ToggleState;
}
/** @publicDocs */
export interface ExtendableEvent extends Event {
  /**
   * A method that accepts a promise signaling the duration and eventual success or failure of event-related actions.
   *
   * Can be called multiple times to add promises to the event, but must be called synchronously during event dispatch.
   * Cannot be called after a `setTimeout` or within a microtask.
   */
  waitUntil?: (promise: Promise<void>) => void;
}
/** @publicDocs */
export interface AggregateError<T extends Error> extends Error {
  /**
   * An array of individual errors that have been aggregated together.
   * Each error in this array represents a separate failure that occurred.
   */
  errors: T[];
}
/** @publicDocs */
export interface AggregateErrorEvent<T extends Error> extends ErrorEvent {
  /**
   * The aggregated error object containing multiple individual errors.
   * Access the `errors` property to retrieve the array of individual error instances.
   */
  error: AggregateError<T>;
}
/**
 * Defines component sizes using a consistent scale from extra small to extra large.
 *
 * - `small-500` through `small-100`: Extra small to small sizes, progressively increasing.
 * - `small`: Standard small size.
 * - `base`: Default medium size that works well in most contexts.
 * - `large`: Standard large size.
 * - `large-100` through `large-500`: Large to extra large sizes, progressively increasing.
 *
 *
 * @default 'base'
 * @publicDocs
 */
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
/**
 * Defines the color intensity or emphasis level for text and UI elements.
 *
 * - `subdued`: Deemphasized color for secondary text, supporting labels, and less critical interface elements.
 * - `base`: Primary color for body text, standard UI elements, and general content with good readability.
 * - `strong`: Emphasized color for headings, key labels, and interactive elements that need prominence.
 *
 * @publicDocs
 */
export type ColorKeyword = 'subdued' | 'base' | 'strong';
interface AvatarProps$1 extends GlobalProps {
  /**
   * The initials to display in the avatar when no image is provided or fails to load.
   * Typically one or two characters representing a person's first and last name initials, such as "JD" for John Doe.
   */
  initials?: string;
  /**
   * The URL or path to the avatar image. When provided, the image takes priority over `initials`.
   * If the image fails to load or loads slowly, `initials` will be rendered as a fallback.
   */
  src?: string;
  /**
   * A callback fired when the avatar image loads successfully. Learn more about the [load event](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload).
   */
  onLoad?: (event: Event) => void;
  /**
   * A callback fired when the avatar image fails to load. Learn more about the [error event](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror).
   */
  onError?: (event: Event) => void;
  /**
   * The size of the avatar. Available sizes range from `small-500` (smallest) to `large-500` (largest), with `base` providing the default medium size that works well in most contexts.
   *
   * @default 'base'
   */
  size?: SizeKeyword;
  /**
   * Alternative text that describes the avatar for accessibility.
   *
   * Provides a text description of the avatar for users with assistive technology
   * and serves as a fallback when the avatar fails to load. A well-written description
   * enables people with visual impairments to understand non-text content.
   *
   * When a screen reader encounters an avatar, it reads this description aloud.
   * When an avatar fails to load, this text displays on screen, helping all users
   * understand what content was intended.
   *
   * Learn more about [writing effective alt text](https://www.shopify.com/ca/blog/image-alt-text#4)
   * and the [alt attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt).
   */
  alt?: string;
}
/**
 * Defines the background color intensity or emphasis level for UI elements.
 *
 * - `transparent`: No background, allowing the underlying surface to show through.
 * - `ColorKeyword`: Applies color intensity levels (subdued, base, strong) to create spatial emphasis and containment.
 *
 * @publicDocs
 */
export type BackgroundColorKeyword = 'transparent' | ColorKeyword;
export interface BackgroundProps {
  /**
   * The background color of the element. Use `transparent` for no background, `subdued` for a subtle background, `base` for standard background, or `strong` for a prominent background.
   *
   * - `transparent`: No background, allowing the underlying surface to show through.
   * - `ColorKeyword`: Applies color intensity levels (subdued, base, strong) to create spatial emphasis and containment.
   *
   * @default 'transparent'
   */
  background?: BackgroundColorKeyword;
}
/**
 * Defines the semantic color treatment of a component to convey specific intent or status.
 *
 * Tones apply coordinated color schemes (text, background, icons) across the component.
 * Some components, like banner, also use tone to determine accessibility attributes and screen reader announcements.
 *
 * - `auto`: Automatically determined based on context.
 * - `neutral`: General-purpose information without specific sentiment.
 * - `info`: Informational content that provides helpful details or guidance.
 * - `success`: Positive outcomes, successful operations, or confirmations.
 * - `caution`: Warnings about potential issues that require attention but aren't critical.
 * - `warning`: Similar to caution, indicates something that needs user awareness.
 * - `critical`: Errors, failures, or urgent issues that require immediate attention.
 * - `accent`: Highlighted or emphasized content that doesn't fit other semantic tones.
 * - `custom`: Custom color treatment defined by your theme or implementation.
 *
 * @default 'auto'
 * @publicDocs
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
/**
 * Represents the available icon names that can be used in icon components.
 * This is derived from the complete list of supported icons in the design system.
 * @publicDocs
 */
export type IconType = (typeof privateIconArray)[number];
/**
 * A type-safe version of TypeScript's `Extract` utility that constrains the second type parameter
 * to be assignable to the first. This provides compile-time validation that you're only extracting
 * types that actually exist within the union, catching potential errors earlier in development.
 *
 * @publicDocs
 */
export type ExtractStrict<T, U extends T> = Extract<T, U>;
/**
 * Represents CSS shorthand properties that accept one to four values.
 * Supports specifying values for all four sides: top, right, bottom, and left.
 *
 * - `T`: Single value that applies to all four sides.
 * - `${T} ${T}`: Two values for block axis (top/bottom) and inline axis (left/right).
 * - `${T} ${T} ${T}`: Three values for block-start (top), inline axis (left/right), and block-end (bottom).
 * - `${T} ${T} ${T} ${T}`: Four values for block-start (top), inline-end (right), block-end (bottom), and inline-start (left).
 * @publicDocs
 */
export type MaybeAllValuesShorthandProperty<T extends string> =
  | T
  | `${T} ${T}`
  | `${T} ${T} ${T}`
  | `${T} ${T} ${T} ${T}`;
/**
 * Represents CSS shorthand properties that accept one or two values.
 * Supports specifying the same value for both dimensions or different values.
 *
 * - `T`: Single value that applies to both dimensions.
 * - `${T} ${T}`: Two values for block axis (vertical) and inline axis (horizontal).
 * @publicDocs
 */
export type MaybeTwoValuesShorthandProperty<T extends string> = T | `${T} ${T}`;
/**
 * Makes a property responsive by allowing it to be set conditionally based on container query conditions.
 * The value can be either a base value or a container query string.
 *
 * - `T`: Base value that applies in all conditions.
 * - `@container${string}`: Container query string for conditional responsive styling based on container size.
 * @publicDocs
 */
export type MaybeResponsive<T> = T | `@container${string}`;
/**
 * A utility type that enables autocomplete for specific string literals while still accepting any string value.
 * By intersecting `string` with an empty object type, this prevents TypeScript from widening literal types,
 * preserving IDE suggestions for known values while maintaining flexibility for custom strings.
 *
 * @publicDocs
 */
export type AnyString = string & {};
/**
 * A utility type representing an optional space character for use in string literal type composition.
 * Allows flexible formatting of compound values where spacing is a matter of preference rather than semantic difference.
 *
 * @publicDocs
 */
export type optionalSpace = '' | ' ';
interface BadgeProps$1 extends GlobalProps {
  /**
   * The text label displayed within the badge, typically a short status indicator or category label.
   */
  children?: ComponentChildren;
  /**
   * The semantic meaning and color treatment of the component.
   *
   * - `info`: Informational content or helpful tips.
   * - `success`: Positive outcomes or successful states.
   * - `warning`: Important warnings about potential issues.
   * - `critical`: Urgent problems or destructive actions.
   * - `auto`: Automatically determined based on context.
   * - `neutral`: General information without specific intent.
   * - `caution`: Advisory notices that need attention.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Controls the visual weight and emphasis of the badge.
   *
   * - `base`: Standard weight with moderate emphasis, suitable for most use cases.
   * - `strong`: Increased visual weight for higher emphasis and prominence.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * An icon displayed inside the badge to provide additional visual context or reinforce the badge's meaning.
   * Accepts any icon name from the icon library or a custom string identifier.
   *
   * @default ''
   */
  icon?: IconType | AnyString;
  /**
   * The position of the icon relative to the badge text.
   *
   * - `start`: Places the icon before the text (left in left-to-right languages, right in right-to-left languages).
   * - `end`: Places the icon after the text (right in left-to-right languages, left in right-to-left languages).
   *
   * @default 'start'
   */
  iconPosition?: 'start' | 'end';
  /**
   * The size of the badge component. Available sizes range from `small-500` (smallest) to `large-500` (largest), with `base` providing the default medium size.
   *
   * @default 'base'
   */
  size?: SizeKeyword;
}
interface BannerProps$1 extends GlobalProps, ActionSlots {
  /**
   * The heading text displayed at the top of the banner.
   *
   * @default ''
   */
  heading?: string;
  /**
   * The main message content displayed within the banner, providing important information or guidance to users.
   */
  children?: ComponentChildren;
  /**
   * The semantic meaning and color treatment of the component.
   *
   * - `info`: Informational content or helpful tips.
   * - `success`: Positive outcomes or successful states.
   * - `warning`: Important warnings about potential issues.
   * - `critical`: Urgent problems or destructive actions.
   * - `auto`: Automatically determined based on context.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Whether the banner content can be collapsed. When true, child elements are initially hidden but can be
   * revealed by the user expanding the banner.
   *
   * @default false
   */
  collapsible?: boolean;
  /**
   * Whether the banner displays a close button that allows users to dismiss it.
   *
   * When the close button is pressed, the `dismiss` event fires, then `hidden` is set to `true`,
   * any animation completes, and the `afterhide` event fires.
   *
   * @default false
   */
  dismissible?: boolean;
  /**
   * A callback fired when the banner is dismissed by the user clicking the close button.
   * Does not fire when setting `hidden` manually.
   *
   * The `hidden` property is `false` when this event fires.
   */
  onDismiss?: (event: Event) => void;
  /**
   * A callback fired when the banner has fully hidden, including after any hide animations have completed.
   *
   * The `hidden` property will be `true` when this event fires.
   *
   * @implementation If implementations animate the hiding of the banner,
   * this event must fire after the banner has fully hidden.
   * We can add an `onHide` event in future if we want to provide a hook for the start of the animation.
   */
  onAfterHide?: (event: Event) => void;
  /**
   * Controls whether the banner is visible or hidden.
   *
   * When using a controlled component pattern and the banner is `dismissible`,
   * update this property to `true` when the `dismiss` event fires.
   *
   * You can hide the banner programmatically by setting this to `true` even if it's not `dismissible`.
   *
   * @default false
   */
  hidden?: boolean;
}
/** @publicDocs */
export interface DisplayProps {
  /**
   * The outer display type of the component, The outer type sets a component’s participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).
   *
   * - `auto`: the component’s initial value. The actual value depends on the component and context.
   * - `none`: hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.
   *
   * Learn more about the [display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display).
   *
   * @default 'auto'
   */
  display?: MaybeResponsive<'auto' | 'none'>;
}
/** @publicDocs */
export interface AccessibilityRoleProps {
  /**
   * The semantic meaning of the component’s content. When set,
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
/**
 * Defines the semantic role of a component for assistive technologies like screen readers.
 *
 * Accessibility roles help users with disabilities understand the purpose and structure of content.
 * These roles map to HTML elements and ARIA roles, providing semantic meaning beyond visual presentation.
 *
 * Use these roles to:
 * - Improve navigation for screen reader users
 * - Provide semantic structure to your UI
 * - Ensure proper interpretation by assistive technologies
 *
 * Learn more about [ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) in the MDN web docs.
 *
 * - `main`: Indicates the primary content area of the page.
 * - `header`: Marks a component as a header containing introductory content or navigation.
 * - `footer`: Designates content containing information like copyright, navigation links, or privacy statements.
 * - `section`: Defines a generic thematic grouping of content that should have a heading or accessible label.
 * - `aside`: Marks supporting content that relates to but is separate from the main content.
 * - `navigation`: Identifies major groups of navigation links for moving around the site or page.
 * - `ordered-list`: Represents a list where the order of items is meaningful.
 * - `list-item`: Identifies an individual item within a list.
 * - `list-item-separator`: Acts as a visual and semantic divider between items in a list.
 * - `unordered-list`: Represents a list where the order of items is not meaningful.
 * - `separator`: Creates a divider that separates and distinguishes sections of content.
 * - `status`: Defines a live region for advisory information that is not urgent enough to be an alert.
 * - `alert`: Marks important, time-sensitive information that requires the user's immediate attention.
 * - `generic`: Creates a semantically neutral container element with no inherent meaning.
 * - `presentation`: Removes semantic meaning from an element while preserving its visual appearance.
 * - `none`: Synonym for `presentation`, removes semantic meaning while keeping visual styling.
 * @publicDocs
 */
export type AccessibilityRole =
  /**
   * An accessibility role used to indicate the primary content.
   *
   * In an HTML host, `main` will render a `<main>` element.
   * Learn more about the [`<main>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role) in the MDN web docs.
   */
  | 'main'
  /**
   * An accessibility role used to indicate the component is a header.
   *
   * In an HTML host `header` will render a `<header>` element.
   * Learn more about the [`<header>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role) in the MDN web docs.
   */
  | 'header'
  /**
   * An accessibility role used to display information such as copyright information, navigation links, and privacy statements.
   *
   * In an HTML host `footer` will render a `<footer>` element.
   * Learn more about the [`<footer>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role) in the MDN web docs.
   */
  | 'footer'
  /**
   * An accessibility role used to indicate a generic section.
   *
   * sections should always have a heading or an accessible name provided in the `accessibilityLabel` property.
   *
   * In an HTML host `section` will render a `<section>` element.
   * Learn more about the [`<section>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/region_role) in the MDN web docs.
   *
   */
  | 'section'
  /**
   * An accessibility role used to designate a supporting section that relates to the main content.
   *
   * In an HTML host `aside` will render an `<aside>` element.
   * Learn more about the [`<aside>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role) in the MDN web docs.
   */
  | 'aside'
  /**
   * An accessibility role used to identify major groups of links used for navigating.
   *
   * In an HTML host `navigation` will render a `<nav>` element.
   * Learn more about the [`<nav>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role) in the MDN web docs.
   */
  | 'navigation'
  /**
   * An accessibility role used to identify a list of ordered items.
   *
   * In an HTML host `ordered-list` will render a `<ol>` element.
   * Learn more about the [`<ol>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) in the MDN web docs.
   */
  | 'ordered-list'
  /**
   * An accessibility role used to identify an item inside a list of items.
   *
   * In an HTML host `list-item` will render a `<li>` element.
   * Learn more about the [`<li>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role) in the MDN web docs.
   */
  | 'list-item'
  /**
   * An accessibility role that indicates the component acts as a divider that separates and distinguishes sections of content in a list of items.
   *
   * In an HTML host `list-item-separator` will render as `<li role="separator">`.
   * Learn more about the [`<li>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) and the [`separator` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) in the MDN web docs.
   */
  | 'list-item-separator'
  /**
   * An accessibility role used to identify a list of unordered items.
   *
   * In an HTML host `unordered-list` will render a `<ul>` element.
   * Learn more about the [`<ul>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) in the MDN web docs.
   */
  | 'unordered-list'
  /**
   * An accessibility role that indicates the component acts as a divider that separates and distinguishes sections of content.
   *
   * In an HTML host `separator` will render as `<div role="separator">`.
   * Learn more about the [`separator` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) in the MDN web docs.
   */
  | 'separator'
  /**
   * An accessibility role used to define a live region containing advisory information for the user that is not important enough to be an alert.
   *
   * In an HTML host `status` will render as `<div role="status">`.
   * Learn more about the [`status` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) in the MDN web docs.
   */
  | 'status'
  /**
   * An accessibility role used for important, and usually time-sensitive, information.
   *
   * In an HTML host `alert` will render as `<div role="alert">`.
   * Learn more about the [`alert` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) in the MDN web docs.
   */
  | 'alert'
  /**
   * An accessibility role used to create a nameless container element which has no semantic meaning on its own.
   *
   * In an HTML host `generic'` will render a `<div>` element.
   * Learn more about the [`generic` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role) in the MDN web docs.
   */
  | 'generic'
  /**
   * An accessibility role used to strip the semantic meaning of an element, but leave the visual styling intact.
   *
   * Synonym for `none`
   * Learn more about the [`presentation` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) in the MDN web docs.
   */
  | 'presentation'
  /**
   * An accessibility role used to strip the semantic meaning of an element, but leave the visual styling intact.
   *
   * Synonym for `presentation`
   * Learn more about the [`none` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/none_role) in the MDN web docs.
   */
  | 'none';
export interface AccessibilityVisibilityProps {
  /**
   * The visibility mode of the element for both visual and assistive technology users.
   *
   * - `visible`: The element is visible to all users (both sighted users and screen readers).
   * - `hidden`: The element is visually visible but hidden from screen readers. Use this for decorative elements that don't provide meaningful information.
   * - `exclusive`: The element is visually hidden but announced by screen readers. Use this for screen-reader-only content like skip links or additional context.
   *
   * @default 'visible'
   */
  accessibilityVisibility?: 'visible' | 'hidden' | 'exclusive';
}
/** @publicDocs */
export interface LabelAccessibilityVisibilityProps {
  /**
   * Controls whether the label is visible to all users or only to screen readers.
   *
   * - `visible`: The label is shown to everyone (default).
   * - `exclusive`: The label is visually hidden but still announced by screen readers.
   *
   * Use `exclusive` when the surrounding context makes the label redundant visually,
   * but screen reader users still need it for clarity.
   *
   * @default 'visible'
   */
  labelAccessibilityVisibility?: ExtractStrict<
    AccessibilityVisibilityProps['accessibilityVisibility'],
    'visible' | 'exclusive'
  >;
}
/**
 * Defines the padding size for elements, using the standard size scale or `none` for no padding.
 *
 * - `SizeKeyword`: Standard padding sizes from the size scale for consistent spacing.
 * - `none`: No padding.
 * @publicDocs
 */
export type PaddingKeyword = SizeKeyword | 'none';
export interface PaddingProps {
  /**
   * The padding applied to all edges of the component.
   *
   * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) using flow-relative values:
   * - 1 value applies to all sides
   * - 2 values apply to block (top/bottom) and inline (left/right)
   * - 3 values apply to block-start (top), inline (left/right), and block-end (bottom)
   * - 4 values apply to block-start (top), inline-end (right), block-end (bottom), and inline-start (left)
   *
   * **Examples:** `base`, `large none`, `base large-100 base small`
   *
   * Use `auto` to inherit padding from the nearest container with removed padding.
   *
   * @default 'none'
   */
  padding?: MaybeResponsive<MaybeAllValuesShorthandProperty<PaddingKeyword>>;
  /**
   * The block-direction padding (top and bottom in horizontal writing modes).
   *
   * Accepts a single value for both sides or two space-separated values for block-start and block-end.
   *
   * **Example:** `large none` applies `large` to the top and `none` to the bottom.
   *
   * Overrides the block value from `padding`.
   *
   * @default '' - meaning no override
   */
  paddingBlock?: MaybeResponsive<
    MaybeTwoValuesShorthandProperty<PaddingKeyword> | ''
  >;
  /**
   * The block-start padding (top in horizontal writing modes).
   *
   * Overrides the block-start value from `paddingBlock`.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart?: MaybeResponsive<PaddingKeyword | ''>;
  /**
   * The block-end padding (bottom in horizontal writing modes).
   *
   * Overrides the block-end value from `paddingBlock`.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd?: MaybeResponsive<PaddingKeyword | ''>;
  /**
   * The inline-direction padding (left and right in horizontal writing modes).
   *
   * Accepts a single value for both sides or two space-separated values for inline-start and inline-end.
   *
   * **Example:** `large none` applies `large` to the left and `none` to the right.
   *
   * Overrides the inline value from `padding`.
   *
   * @default '' - meaning no override
   */
  paddingInline?: MaybeResponsive<
    MaybeTwoValuesShorthandProperty<PaddingKeyword> | ''
  >;
  /**
   * The inline-start padding (left in LTR writing modes, right in RTL).
   *
   * Overrides the inline-start value from `paddingInline`.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart?: MaybeResponsive<PaddingKeyword | ''>;
  /**
   * The inline-end padding (right in LTR writing modes, left in RTL).
   *
   * Overrides the inline-end value from `paddingInline`.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd?: MaybeResponsive<PaddingKeyword | ''>;
}
/**
 * Represents size values in pixels, percentages, or zero.
 *
 * - `${number}px`: Absolute size in pixels for fixed dimensions (such as `100px`, `24px`).
 * - `${number}%`: Relative size as a percentage of the parent container (such as `50%`, `100%`).
 * - `0`: Zero size, equivalent to no dimension.
 * @publicDocs
 */
export type SizeUnits = `${number}px` | `${number}%` | `0`;
/**
 * Represents size values that can also be set to `auto` for automatic sizing.
 *
 * - `SizeUnits`: Specific size values in pixels, percentages, or zero for precise control.
 * - `auto`: Automatically sizes based on content and layout constraints.
 * @publicDocs
 */
export type SizeUnitsOrAuto = SizeUnits | 'auto';
/**
 * Represents size values that can also be set to `none` to remove the size constraint.
 *
 * - `SizeUnits`: Specific size values in pixels, percentages, or zero for precise control.
 * - `none`: No size constraint, allowing unlimited growth.
 * @publicDocs
 */
export type SizeUnitsOrNone = SizeUnits | 'none';
export interface SizingProps {
  /**
   * The vertical size of the element in standard layouts (height in left-to-right or right-to-left writing modes).
   *
   * Block size adjusts based on the writing direction: in horizontal layouts, it controls the height;
   * in vertical layouts, it controls the width. This ensures consistent behavior across different text directions.
   *
   * Learn more about the [block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).
   *
   * - `SizeUnits`: Specific size values in pixels, percentages, or zero for precise control.
   * - `auto`: Automatically sizes based on content and layout constraints.
   *
   * @default 'auto'
   */
  blockSize?: MaybeResponsive<SizeUnitsOrAuto>;
  /**
   * The minimum vertical size of the element in standard layouts (min-height in left-to-right or right-to-left writing modes).
   *
   * Prevents the element from becoming smaller than this size along the block axis.
   *
   * Learn more about the [min-block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size).
   *
   * @default '0'
   */
  minBlockSize?: MaybeResponsive<SizeUnits>;
  /**
   * The maximum vertical size of the element in standard layouts (max-height in left-to-right or right-to-left writing modes).
   *
   * Prevents the element from becoming larger than this size along the block axis.
   *
   * Learn more about the [max-block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size).
   *
   * @default 'none'
   */
  maxBlockSize?: MaybeResponsive<SizeUnitsOrNone>;
  /**
   * The horizontal size of the element in standard layouts (width in left-to-right or right-to-left writing modes).
   *
   * Inline size adjusts based on the writing direction: in horizontal layouts, it controls the width;
   * in vertical layouts, it controls the height. This ensures consistent behavior across different text directions.
   *
   * Learn more about the [inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).
   *
   * - `SizeUnits`: Specific size values in pixels, percentages, or zero for precise control.
   * - `auto`: Automatically sizes based on content and layout constraints.
   *
   * @default 'auto'
   */
  inlineSize?: MaybeResponsive<SizeUnitsOrAuto>;
  /**
   * The minimum horizontal size of the element in standard layouts (min-width in left-to-right or right-to-left writing modes).
   *
   * Prevents the element from becoming smaller than this size along the inline axis.
   *
   * Learn more about the [min-inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size).
   *
   * @default '0'
   */
  minInlineSize?: MaybeResponsive<SizeUnits>;
  /**
   * The maximum horizontal size of the element in standard layouts (max-width in left-to-right or right-to-left writing modes).
   *
   * Prevents the element from becoming larger than this size along the inline axis.
   *
   * Learn more about the [max-inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size).
   *
   * @default 'none'
   */
  maxInlineSize?: MaybeResponsive<SizeUnitsOrNone>;
}
/**
 * Defines the visual style of borders.
 *
 * - `none`: No border is displayed.
 * - `solid`: A single solid line.
 * - `dashed`: A series of short dashes.
 * - `dotted`: A series of dots.
 * - `auto`: Automatically determined based on context.
 * @publicDocs
 */
export type BorderStyleKeyword =
  | 'none'
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'auto';
/**
 * Defines the width of borders, using the standard size scale or `none` for no border.
 *
 * - `SizeKeyword`: Standard border widths from the size scale for consistent thickness.
 * - `none`: No border width (removes the border).
 * @publicDocs
 */
export type BorderSizeKeyword = SizeKeyword | 'none';
/**
 * Defines the radius of rounded corners, using the standard size scale, `max` for fully rounded, or `none` for sharp corners.
 * @publicDocs
 */
export type BorderRadiusKeyword = SizeKeyword | 'max' | 'none';
/**
 * Represents a shorthand for defining a border. It can be a combination of size, optionally followed by color, optionally followed by style.
 * @publicDocs
 */
export type BorderShorthand =
  | BorderSizeKeyword
  | `${BorderSizeKeyword} ${ColorKeyword}`
  | `${BorderSizeKeyword} ${ColorKeyword} ${BorderStyleKeyword}`;
export interface BorderProps {
  /**
   * A border applied using shorthand syntax to specify width, color, and style in a single property.
   *
   * Accepts a size value, optionally followed by a color, optionally followed by a style.
   * Omitted values use defaults: color defaults to `base`, style defaults to `auto`.
   *
   * Individual properties (`borderWidth`, `borderStyle`, `borderColor`) can override values set here.
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
   * The thickness of the border on all sides. When set, this overrides the width value specified in the `border` property.
   *
   * - `small`: Thin border for subtle definition.
   * - `small-100`: Extra thin border for minimal emphasis.
   * - `base`: Standard border width.
   * - `large`: Thick border for strong emphasis.
   * - `large-100`: Extra thick border for maximum prominence.
   * - `none`: No border.
   *
   * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) for specifying different widths per side:
   * - One value: applies to all sides
   * - Two values: applies to block sides (top/bottom) and inline sides (left/right) respectively
   * - Three values: applies to block-start (top), inline sides (left/right), and block-end (bottom) respectively
   * - Four values: applies to block-start (top), inline-end (right), block-end (bottom), and inline-start (left) respectively
   *
   * @default '' - meaning no override
   */
  borderWidth?: MaybeAllValuesShorthandProperty<BorderSizeKeyword> | '';
  /**
   * The visual style of the border on all sides, such as solid, dashed, or dotted.
   *
   * When set, this overrides the style value specified in the `border` property.
   *
   * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) for specifying different styles per side:
   * - One value: applies to all sides
   * - Two values: applies to block sides (top/bottom) and inline sides (left/right) respectively
   * - Three values: applies to block-start (top), inline sides (left/right), and block-end (bottom) respectively
   * - Four values: applies to block-start (top), inline-end (right), block-end (bottom), and inline-start (left) respectively
   *
   * @default '' - meaning no override
   */
  borderStyle?: MaybeAllValuesShorthandProperty<BorderStyleKeyword> | '';
  /**
   * The color of the border using the design system's color scale.
   *
   * When set, this overrides the color value specified in the `border` property.
   * Choose from `subdued`, `base`, or `strong` to match the visual emphasis needed.
   *
   * @default '' - meaning no override
   */
  borderColor?: ColorKeyword | '';
  /**
   * The roundedness of the element's corners using the design system's radius scale.
   *
   * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) using flow-relative values:
   * - One value: applies to all corners
   * - Two values: applies to start corners (top-left & bottom-right) and end corners (top-right & bottom-left) respectively
   * - Three values: applies to start-start (top-left), end corners (top-right & bottom-left), and end-end (bottom-right) respectively
   * - Four values: applies to start-start (top-left), start-end (top-right), end-end (bottom-right), and end-start (bottom-left) respectively
   *
   * Examples:
   * - `small-100`: All corners have `small-100` radius
   * - `small-100 none`: Top-left and bottom-right are `small-100`, top-right and bottom-left are `none`
   * - `small-100 none large-100`: Top-left is `small-100`, top-right and bottom-left are `none`, bottom-right is `large-100`
   * - `small-100 none large-100 base`: Each corner has its specified radius value
   *
   * @defaultValue 'none'
   */
  borderRadius?: MaybeAllValuesShorthandProperty<BorderRadiusKeyword>;
}
/** @publicDocs */
export interface OverflowProps {
  /**
   * The overflow behavior of the element.
   *
   * - `visible`: the content that extends beyond the element’s container is visible.
   * - `hidden`: clips the content when it is larger than the element’s container.
   * The element will not be scrollable and the users will not be able
   * to access the clipped content by dragging or using a scroll wheel on a mouse.
   *
   * @default 'visible'
   */
  overflow?: 'hidden' | 'visible';
}
/** @publicDocs */
export interface BaseBoxProps
  extends AccessibilityVisibilityProps,
    BackgroundProps,
    DisplayProps,
    SizingProps,
    PaddingProps,
    BorderProps,
    OverflowProps {
  /**
   * The content displayed within the box component, which serves as a flexible container for organizing and styling other components.
   */
  children?: ComponentChildren;
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel?: string;
}
/** @publicDocs */
export interface BaseBoxPropsWithRole
  extends BaseBoxProps,
    AccessibilityRoleProps {}
interface BoxProps$1 extends BaseBoxPropsWithRole, GlobalProps {}
/** @publicDocs */
export interface ButtonBehaviorProps extends InteractionProps, FocusEventProps {
  /**
   * The behavior of the button component.
   *
   * - `button`: Used to indicate the component acts as a button, meaning it has no default action.
   * - `reset`: Used to indicate the component acts as a reset button, meaning it resets the closest form (returning fields to their default values).
   * - `submit`: Used to indicate the component acts as a submit button, meaning it submits the closest form.
   *
   * This property is ignored if the component supports `href` or `commandFor`/`command` and one of them is set.
   *
   * @default 'button'
   */
  type?: 'submit' | 'button' | 'reset';
  /**
   * A callback fired when the button is activated, before performing the action indicated by `type`. Learn more about the [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).
   */
  onClick?: (event: Event) => void;
  /**
   * Whether the button is disabled, preventing it from being clicked or receiving focus.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Whether to replace the button content with a loading indicator while a background action is being performed.
   *
   * This also disables the button component.
   *
   * @default false
   */
  loading?: boolean;
}
/** @publicDocs */
export interface LinkBehaviorProps extends InteractionProps, FocusEventProps {
  /**
   * The URL to navigate to when clicked. The `click` event fires first, then navigation occurs. If `commandFor` is also set, the command executes instead of navigation.
   */
  href?: string;
  /**
   * The browsing context where the linked URL should be displayed.
   *
   * - `auto`: The target is automatically determined based on the origin of the URL.
   * - `_blank`: Opens the URL in a new window or tab.
   * - `_self`: Opens the URL in the same browsing context as the current one.
   * - `_parent`: Opens the URL in the parent browsing context of the current one. If there is no parent, behaves as `_self`.
   * - `_top`: Opens the URL in the topmost browsing context (the highest ancestor of the current one). If there is no ancestor, behaves as `_self`.
   *
   * @implementation Surfaces can set specific rules on how they handle each URL.
   * @implementation It’s expected that the behavior of `auto` is as `_self` except in specific cases.
   * @implementation For example, a surface could decide to open cross-origin URLs in a new window (as `_blank`).
   *
   * Learn more about the [target attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).
   *
   * @default 'auto'
   */
  target?: 'auto' | '_blank' | '_self' | '_parent' | '_top' | AnyString;
  /**
   * Prompts the browser to download the linked URL rather than navigate to it.
   * When set, the value specifies the suggested filename for the downloaded file.
   *
   * The filename suggestion is only respected for same-origin URLs, `blob:`, and `data:` schemes.
   * Cross-origin URLs can still trigger downloads, but browsers might ignore the suggested filename.
   *
   * Learn more about the [download attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).
   */
  download?: string;
  /**
   * A callback fired when the link is activated, before navigating to the location specified by `href`. Learn more about the [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).
   */
  onClick?: (event: Event) => void;
}
/** @publicDocs */
export interface InteractionProps {
  /**
   * The ID of the component to control when this component is activated. Pair with the `command` property to specify what action to perform on the target component. Learn more about the [commandfor attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor).
   */
  commandFor?: string;
  /**
   * The action that `commandFor` should take when this component is activated.
   *
   * - `--auto`: A default action for the target component.
   * - `--show`: Shows the target component.
   * - `--hide`: Hides the target component.
   * - `--toggle`: Toggles the visibility of the target component.
   * - `--copy`: Copies the target `ClipboardItem`.
   *
   * Learn more about the [command attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command).
   *
   * @default '--auto'
   */
  command?: '--auto' | '--show' | '--hide' | '--toggle' | '--copy';
  /**
   * The ID of the component to show when users hover over or focus on this component. Use this to connect interactive components to popovers or tooltips that provide additional context or information.
   */
  interestFor?: string;
}
/** @publicDocs */
export interface BaseClickableProps
  extends ButtonBehaviorProps,
    LinkBehaviorProps {}
interface ButtonProps$1 extends GlobalProps, BaseClickableProps {
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel?: string;
  /**
   * The label text or elements displayed inside the button component, describing the action that will be performed when clicked.
   */
  children?: ComponentChildren;
  /**
   * An icon displayed inside the button, typically positioned before the button text.
   * Use icons to help users quickly identify the button's action or to improve scannability.
   * Accepts any icon name from the icon library or a custom string identifier.
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
   * The visual appearance of the button component.
   *
   * - `auto`: The variant is automatically determined by the button component's context.
   * - `primary`: High emphasis button for the primary action on the page. Should be used sparingly.
   * - `secondary`: Medium emphasis button for secondary actions.
   * - `tertiary`: Low emphasis button for less important actions.
   *
   * @default 'auto'
   */
  variant?: 'auto' | 'primary' | 'secondary' | 'tertiary';
  /**
   * The semantic meaning and color treatment of the component.
   *
   * - `critical`: Urgent problems or destructive actions.
   * - `auto`: Automatically determined based on context.
   * - `neutral`: General information without specific intent.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * The language of the text content. Use this when the text is in a different language than the rest of the page, allowing assistive technologies such as screen readers to invoke the correct pronunciation. The value should be a valid language subtag from the [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
   */
  lang?: string;
}
interface ButtonGroupProps$1 extends GlobalProps, ActionSlots {
  /**
   * The buttons displayed within the button group component, which are arranged together as a cohesive set of related actions.
   */
  children?: ComponentChildren;
  /**
   * The spacing between buttons in the group.
   *
   * - `base`: Standard spacing that provides clear visual separation between buttons.
   * - `none`: No spacing, creating a connected button group.
   *
   * @default 'base'
   */
  gap?: 'base' | 'none';
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   *
   * @implementation Used as a hidden heading or an aria-label on the wrapping element.
   */
  accessibilityLabel?: string;
}
/** @publicDocs */
export interface BaseInputProps {
  /**
   * The name attribute for the field, used to identify the field's value when the form is submitted. Must be unique within the nearest containing form.
   */
  name?: string;
  /**
   * Whether the field is disabled, preventing any user interaction.
   *
   * @default false
   */
  disabled?: boolean;
}
/** @publicDocs */
export interface InputProps extends BaseInputProps {
  /**
   * A callback fired when the user has finished editing the field, such as when they blur the field or press Enter. Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  onChange?: (event: Event) => void;
  /**
   * A callback fired when the user makes any changes in the field, such as typing a character. Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).
   */
  onInput?: (event: Event) => void;
  value?: string;
  /**
   * The initial value of the field when it first loads. Unlike `placeholder`, this is a real value that the user can edit and that gets submitted with the form. Once the user starts typing, their input replaces it. Changing this property after the field has loaded has no effect. To update the field value at any time, use `value` instead.
   *
   * @implementation `defaultValue` reflects to the `value` attribute.
   */
  defaultValue?: string;
}
/** @publicDocs */
export interface MultipleInputProps extends BaseInputProps {
  /**
   * A callback fired when the user has selected one or more options. Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  onChange?: (event: Event) => void;
  /**
   * A callback fired when the user selects or deselects options. Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).
   */
  onInput?: (event: Event) => void;
  /**
   * An array of `value` attributes for the currently selected options. When provided, this property automatically sets the `selected` state on child option components that have matching `value` attributes. Options with values included in this array will be marked as selected, while others will be unselected.
   */
  values?: string[];
}
/** @publicDocs */
export interface FileInputProps extends BaseInputProps {
  /**
   * A callback fired when the user has finished selecting one or more files.
   */
  onChange?: (event: Event) => void;
  /**
   * A callback fired when the user makes any changes to the file selection.
   */
  onInput?: (event: Event) => void;
  /**
   * A string that represents the path to the selected file(s). If no file is selected yet, the value is an empty string ("").
   * When the user selected multiple files, the value represents the first file in the list of files they selected.
   * The value is always the file's name prefixed with "C:\fakepath\", which isn't the real path of the file.
   *
   * Learn more about the [file input value](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file#value).
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
/** @publicDocs */
export interface FieldErrorProps {
  /**
   * An error message displayed below the checkbox to indicate validation problems.
   * When set, the checkbox is styled with error indicators and the message is announced to screen readers.
   */
  error?: string;
}
/** @publicDocs */
export interface BasicFieldProps
  extends FieldErrorProps,
    LabelAccessibilityVisibilityProps {
  /**
   * Whether the field requires a value before form submission. Displays a visual indicator and adds semantic meaning, but doesn't automatically validate or show errors. Use the `error` property to display validation messages.
   *
   * @default false
   */
  required?: boolean;
  /**
   * The text displayed as the field label, which identifies the purpose of the field to users.
   * This label is associated with the field for accessibility and helps users understand what information to provide.
   */
  label?: string;
}
/** @publicDocs */
export interface FieldDetailsProps {
  /**
   * Supplementary text displayed below the checkbox to provide additional context, instructions, or help.
   * Use this to explain what checking the box means or provide guidance to users.
   * This text is announced to screen readers.
   */
  details?: string;
}
/** @publicDocs */
export interface FieldProps
  extends BasicFieldProps,
    InputProps,
    FocusEventProps,
    FieldDetailsProps {
  /**
   * The placeholder text displayed in the field when it's empty, providing a hint about the expected input format or value.
   */
  placeholder?: string;
}
/** @publicDocs */
export interface BaseTextFieldProps extends FieldProps {
  /**
   * Whether the field is read-only and can't be edited. Read-only fields remain focusable and their content is announced by screen readers.
   *
   * @default false
   */
  readOnly?: boolean;
}
/** @publicDocs */
export interface FieldDecorationProps {
  /**
   * A non-editable text value displayed immediately after the editable portion of the field. This is useful for displaying an implied part of the value, such as `@shopify.com` or `%`.
   *
   * This text can't be edited by the user and is not included in the field's value. The suffix might not appear until the user interacts with the field. For example, an inline label might occupy the suffix position until the user focuses the field.
   *
   * @default ''
   */
  suffix?: string;
  /**
   * A non-editable text value displayed immediately before the editable portion of the field. This is useful for displaying an implied part of the value, such as `https://` or `+353`.
   *
   * This text can't be edited by the user and is not included in the field's value. The prefix might not appear until the user interacts with the field. For example, an inline label might occupy the prefix position until the user focuses the field.
   *
   * @default ''
   */
  prefix?: string;
  /**
   * An icon displayed inside the field to provide visual context about the expected input or field purpose.
   * Commonly used for search fields, currency inputs, or to indicate field type.
   * Accepts any icon name from the icon library or a custom string identifier.
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
/** @publicDocs */
export interface NumberConstraintsProps {
  /**
   * The highest decimal or integer value accepted for the field. When used with `step`, the value rounds down to the maximum number.
   *
   * Users can still type values higher than the maximum using the keyboard. Implement validation to enforce this constraint.
   *
   * @default Infinity
   */
  max?: number;
  /**
   * The lowest decimal or integer value accepted for the field. When used with `step`, the value rounds up to the minimum number.
   *
   * Users can still type values lower than the minimum using the keyboard. Implement validation to enforce this constraint.
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
   * The type of controls displayed in the field.
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
/** @publicDocs */
export interface MinMaxLengthProps {
  /**
   * The maximum number of characters allowed in the field.
   *
   * @default Infinity
   */
  maxLength?: number;
  /**
   * The minimum number of characters required in the field.
   *
   * @default 0
   */
  minLength?: number;
}
/** @publicDocs */
export interface BaseSelectableProps {
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel?: string;
  /**
   * Whether the checkbox is disabled, preventing user interaction.
   * Disabled checkboxes appear dimmed and their values aren't submitted with forms.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The value submitted with the form when this checkbox is checked.
   * If not specified, the default value is "on".
   */
  value?: string;
}
/** @publicDocs */
export interface BaseOptionProps extends BaseSelectableProps {
  /**
   * Whether the option is currently selected. Use this for controlled components where you manage the selection state.
   *
   * @default false
   */
  selected?: boolean;
  /**
   * The initial selected state for uncontrolled components. Use this when you want the option to start selected
   * but don't need to control its state afterward.
   *
   * @implementation `defaultSelected` reflects to the `selected` attribute.
   *
   * @default false
   */
  defaultSelected?: boolean;
}
/** @publicDocs */
export interface BaseCheckableProps
  extends BaseSelectableProps,
    InteractionProps {
  /**
   * The text label displayed next to the checkbox that describes what the checkbox controls.
   * Clicking the label will also toggle the checkbox state.
   */
  label?: string;
  /**
   * Whether the control is currently checked. Use this for controlled components where you manage the checked state.
   *
   * @default false
   */
  checked?: boolean;
  /**
   * The initial checked state for uncontrolled components. Use this when you want the control to start checked
   * but don't need to control its state afterward.
   *
   * @implementation `defaultChecked` reflects to the `checked` attribute.
   *
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * The name used to identify this checkbox in form submissions.
   * When the checkbox is checked, its `name` and `value` are included in the form data.
   * Must be unique within the containing form.
   */
  name?: string;
  /**
   * A callback that is run whenever the control is changed. Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  onChange?: (event: Event) => void;
  /**
   * A callback that is run whenever the control is changed. Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).
   */
  onInput?: (event: Event) => void;
}
interface CheckboxProps$1
  extends GlobalProps,
    BaseCheckableProps,
    FieldErrorProps,
    FieldDetailsProps {
  /**
   * Whether the checkbox displays in an indeterminate state (neither checked nor unchecked),
   * typically used to indicate partial selection in hierarchical lists.
   *
   * This visual state takes priority over the `checked` prop in appearance only.
   * The form submission value is still determined by the `checked` prop.
   *
   * If `indeterminate` has not been explicitly set and hasn't been modified by user interaction,
   * it returns the value of `defaultIndeterminate`.
   *
   * @implementation The `indeterminate` property doesn't reflect to any attribute.
   */
  indeterminate?: boolean;
  /**
   * The initial indeterminate state for uncontrolled components. Use this when you want the checkbox to start
   * in an indeterminate state but don't need to control it afterward.
   *
   * This value applies until `indeterminate` is explicitly set or the user changes the checkbox state by clicking.
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
/** @publicDocs */
export interface ChipProps$1 extends GlobalProps {
  /**
   * The text label displayed within the chip component, typically representing a selected filter, tag, or removable item.
   */
  children?: ComponentChildren;
  /**
   * The graphic to display inside of the chip.
   *
   * @implementation Only `s-icon` is supported.
   */
  graphic?: ComponentChildren;
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel?: string;
  /**
   * The color emphasis level that controls visual intensity.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
}
interface ChipProps$2 extends ChipProps$1, GlobalProps {}
interface ChoiceProps$1 extends GlobalProps, BaseOptionProps {
  /**
   * The label that identifies this selectable choice option to users.
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
   * Whether to associate this choice with the error passed to choice list.
   *
   * @default false
   */
  error?: boolean;
  /**
   * The secondary content for a choice.
   */
  secondaryContent?: ComponentChildren;
  /**
   * The content to display when the option is selected.
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
   * The selectable options displayed to the user, each representing a choice they can make.
   *
   * Only accepts choice components as children. Each choice represents an individual selectable option with its own label and value.
   */
  children?: ComponentChildren;
  /**
   * Whether the field is disabled, preventing any user interaction. When `true`, the `disabled` property on any child choices is ignored.
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
   * Whether the component is in a loading state, which indicates to assistive technology that an action is in progress and prevents interaction.
   */
  loading?: BaseClickableProps['loading'];
  /**
   * Whether the component is disabled, preventing clicks and focus. When disabled, the `click` event won't fire and click events from child elements stop propagating immediately. Interactive child elements can still receive focus and be interacted with. This doesn't apply visual styling by default. You shouldapply disabled styling as needed.
   */
  disabled?: BaseClickableProps['disabled'];
  /**
   * The language of the text content.
   *
   * Use this when the text is in a different language than the rest of the page, allowing assistive technologies
   * such as screen readers to invoke the correct pronunciation.
   *
   * The value should be a valid language subtag from the [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
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
   * A callback fired when the chip is clicked.
   */
  onClick?: (event: Event) => void;
  /**
   * The URL to navigate to when clicked. The `click` event fires first, then navigation occurs. If `commandFor` is also set, the command executes instead of navigation.
   */
  href?: string;
  /**
   * Whether the chip displays a remove button for dismissal. When clicked, the `remove` callback fires.
   *
   * @default false
   */
  removable?: boolean;
  /**
   * A callback fired when the chip's remove button is clicked.
   */
  onRemove?: (event: Event) => void;
  /**
   * Whether the chip is hidden from view. When using controlled component pattern with `removable` chips, update this property when the `remove` event fires. For non-removable chips, manually toggle this property to show or hide the chip.
   *
   * @default false
   */
  hidden?: boolean;
  /**
   * A callback fired when the chip has fully hidden, including after any hide animations have completed.
   *
   * The `hidden` property will be `true` when this event fires.
   *
   * @implementation If implementations animate the hiding of the chip,
   * this event must fire after the chip has fully hidden.
   * We can add an `onHide` event in future if we want to provide a hook for the start of the animation.
   */
  onAfterHide?: (event: Event) => void;
  /**
   * Whether the chip is disabled, preventing any user interaction.
   *
   * @default false
   */
  disabled?: boolean;
}
interface ColorPickerProps$1
  extends GlobalProps,
    Omit<InputProps, 'value' | 'defaultValue'> {
  /**
   * Whether to enable alpha (transparency) channel selection in the color picker, allowing users to choose semi-transparent colors.
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
   * The currently selected color value. Accepts multiple input formats:
   *
   * - Hex: `#RGB`, `#RRGGBB`, `#RRGGBBAA` (3, 6, or 8 digits)
   * - RGB/RGBA: `rgb(255, 0, 0)` or `rgb(255 0 0)` (comma or space-separated)
   * - HSL/HSLA: `hsl(0, 100%, 50%)` or `hsl(0 100% 50%)`
   *
   * Returns an empty string if the value is invalid. The `change` event always emits values in hex format.
   */
  value?: string;
  /**
   * The initial color value when the field first loads. Unlike `placeholder`, this is a real value that the user can edit and that gets submitted with the form. Once the user starts interacting, their input replaces it. Changing this property after the field has loaded has no effect. To update the field value at any time, use `value` instead.
   */
  defaultValue?: string;
}
/** @publicDocs */
export interface AutocompleteProps<
  AutocompleteField extends AnyAutocompleteField,
> {
  /**
   * A hint about the intended content of the field for browser autofill.
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
   * Learn more about the set of [autocomplete values](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-detail-tokens) supported in browsers.
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
 * @publicDocs
 */
export type AutocompleteSection = `section-${string}`;
/**
 * The contact information group the autocomplete data should be sourced from.
 * @publicDocs
 */
export type AutocompleteGroup = 'shipping' | 'billing';
/**
 * The contact information subgroup the autocomplete data should be sourced from.
 * @publicDocs
 */
export type AutocompleteAddressGroup = 'fax' | 'home' | 'mobile' | 'pager';
/**
 * Represents all possible autocomplete field values as defined by the HTML autocomplete specification.
 * These values help browsers provide appropriate autofill suggestions for form fields.
 *
 * Learn more about [autocomplete values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).
 * @publicDocs
 */
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
/**
 * Represents autocomplete values that are valid for text input fields.
 * This is a subset of `AnyAutocompleteField` containing only fields suitable for text-based inputs.
 *
 * Available values:
 * - `name` - Full name
 * - `given-name` - First name
 * - `additional-name` - Middle name
 * - `family-name` - Last name
 * - `nickname` - Nickname or handle
 * - `username` - Username for login
 * - `honorific-prefix` - Name prefix (Mr., Mrs., Dr.)
 * - `honorific-suffix` - Name suffix (Jr., Sr., III)
 * - `organization` - Company or organization name
 * - `organization-title` - Job title or position
 * - `address-line1` - Street address (first line)
 * - `address-line2` - Street address (second line)
 * - `address-line3` - Street address (third line)
 * - `address-level1` - State or province
 * - `address-level2` - City or town
 * - `address-level3` - District or locality
 * - `address-level4` - Neighborhood or suburb
 * - `street-address` - Complete street address (multi-line)
 * - `postal-code` - Postal or ZIP code
 * - `country` - Country code (US, CA, GB)
 * - `country-name` - Country name (United States, Canada)
 * - `language` - Preferred language
 * - `sex` - Gender or sex
 * - `one-time-code` - One-time codes for authentication
 * - `transaction-currency` - Currency code (USD, EUR, GBP)
 * - `cc-name` - Name on credit card
 * - `cc-given-name` - First name on credit card
 * - `cc-additional-name` - Middle name on credit card
 * - `cc-family-name` - Last name on credit card
 * - `cc-type` - Credit card type (Visa, Mastercard)
 * @publicDocs
 */
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
    Omit<BaseTextFieldProps, 'value' | 'defaultValue'> {
  /**
   * Whether to enable alpha (transparency) channel selection in the color picker, allowing users to choose semi-transparent colors.
   *
   * @default false
   */
  alpha?: boolean;
  /**
   * The currently selected color value. Accepts multiple input formats:
   *
   * - Hex: `#RGB`, `#RRGGBB`, `#RRGGBBAA` (3, 6, or 8 digits)
   * - RGB/RGBA: `rgb(255, 0, 0)` or `rgb(255 0 0)` (comma or space-separated)
   * - HSL/HSLA: `hsl(0, 100%, 50%)` or `hsl(0 100% 50%)`
   *
   * Returns an empty string if the value is invalid. The `change` event always emits values in hex format.
   */
  value?: string;
  /**
   * The initial color value when the field first loads. Unlike `placeholder`, this is a real value that the user can edit and that gets submitted with the form. Once the user starts interacting, their input replaces it. Changing this property after the field has loaded has no effect. To update the field value at any time, use `value` instead.
   */
  defaultValue?: string;
  autocomplete?: Extract<
    AutocompleteProps<never>['autocomplete'],
    'on' | 'off'
  >;
}
interface DatePickerProps$1 extends GlobalProps, InputProps, FocusEventProps {
  /**
   * The default month to display in `YYYY-MM` format. Used until the `view` callback is set by user interaction or programmatically. Defaults to the current month in the user's locale.
   */
  defaultView?: string;
  /**
   * The currently displayed month in `YYYY-MM` format. When changed, the `viewchange` callback is triggered. Defaults to `defaultView`.
   */
  view?: string;
  /**
   * A callback fired whenever the displayed month changes in the calendar.
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
   * Specifies which dates can be selected as a comma-separated list. An empty string (default) allows all dates.
   *
   * **Formats:**
   * - `YYYY-MM-DD`: Single date
   * - `YYYY-MM`: Whole month
   * - `YYYY`: Whole year
   * - `start--end`: Date range (inclusive, unbounded if start/end omitted)
   *
   * **Examples:**
   * - `2024-02--2025`: February 2024 through end of 2025
   * - `2024-05-09, 2024-05-11`: Only May 9th and 11th, 2024
   *
   * @default ""
   */
  allow?: string;
  /**
   * Specifies which dates can't be selected as a comma-separated list. These dates are excluded from those specified in `allow`. An empty string (default) has no effect.
   *
   * **Formats:**
   * - `YYYY-MM-DD`: Single date
   * - `YYYY-MM`: Whole month
   * - `YYYY`: Whole year
   * - `start--end`: Date range (inclusive, unbounded if start/end omitted)
   *
   * **Examples:**
   * - `--2024-02`: All dates before February 2024
   * - `2024-05-09, 2024-05-11`: May 9th and 11th, 2024
   *
   * @default ""
   */
  disallow?: string;
  /**
   * Specifies which days of the week can be selected as a comma-separated list. Further restricts dates from `allow` and `disallow`. An empty string (default) has no effect.
   *
   * **Valid days**: `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`
   *
   * **Example:** `saturday, sunday` (only weekends)
   *
   * @default ""
   */
  allowDays?: string;
  /**
   * Specifies which days of the week can't be selected as a comma-separated list. Excludes days from `allowDays` and intersects with `allow` and `disallow`. An empty string (default) has no effect.
   *
   * **Valid days**: `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`
   *
   * **Example:** `saturday, sunday` (no weekends)
   *
   * @default ""
   */
  disallowDays?: string;
  /**
   * The initially selected date(s) when the component first renders. An empty string means no date is initially selected.
   *
   * - Single date in `YYYY-MM-DD` format when `type` is set to `"single"`
   * - Date range in `YYYY-MM-DD--YYYY-MM-DD` format (inclusive) when `type` is set to `"range"`
   *
   * @default ""
   */
  defaultValue?: string;
  /**
   * The currently selected date(s). An empty string means no date is selected.
   *
   * - Single date in `YYYY-MM-DD` format when `type` is set to `"single"`
   * - Date range in `YYYY-MM-DD--YYYY-MM-DD` format (inclusive) when `type` is set to `"range"`
   *
   * @default ""
   */
  value?: string;
  /**
   * A callback fired when any date is selected, before `onChange`. When `type` is set to `"range"`, also fires when the first date is selected with a partial value formatted as `YYYY-MM-DD--`.
   */
  onInput?: (event: Event) => void;
  /**
   * A callback fired when the date selection is committed and complete, after `onInput`. When `type` is set to `"range"`, fires only when the range is completed by selecting the end date.
   */
  onChange?: (event: Event) => void;
}
interface DateFieldProps$1
  extends GlobalProps,
    Omit<BaseTextFieldProps, 'value' | 'defaultValue'>,
    Pick<
      DatePickerProps$1,
      | 'view'
      | 'defaultView'
      | 'allow'
      | 'disallow'
      | 'allowDays'
      | 'disallowDays'
      | 'onViewChange'
    >,
    AutocompleteProps<DateAutocompleteField> {
  /**
   * The initial date value when the field first renders, in `YYYY-MM-DD` format. An empty string means no date is initially selected.
   *
   * @default ""
   */
  defaultValue?: string;
  /**
   * The currently selected date in `YYYY-MM-DD` format. An empty string means no date is selected.
   *
   * @default ""
   */
  value?: string;
  /**
   * A callback fired when the user makes any changes in the field, including when selecting a date using the date picker popup. This fires before `onChange`.
   */
  onInput?: (event: Event) => void;
  /**
   * A callback fired when the user has finished editing the field, such as when they blur the field or complete a date selection. This fires after `onInput`.
   */
  onChange?: (event: Event) => void;
  /**
   * A callback fired when the field contains an invalid date, either because the typed date is malformed, doesn't exist (such as February 31st), or is disabled by the `allow`/`disallow` constraints.
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
/**
 * Represents autocomplete values that are valid for date input fields.
 * This is a subset of `AnyAutocompleteField` containing only fields suitable for date-based inputs.
 *
 * Available values:
 * - `bday` - Complete birthday date
 * - `bday-day` - Day component of a birthday (1-31)
 * - `bday-month` - Month component of a birthday (1-12)
 * - `bday-year` - Year component of a birthday (1990)
 * - `cc-expiry` - Complete credit card expiration date
 * - `cc-expiry-month` - Month component of a credit card expiration date (1-12)
 * - `cc-expiry-year` - Year component of a credit card expiration date (2025)
 * @publicDocs
 */
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
   * The orientation of the divider line, using [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
   *
   * - `inline`: Horizontal divider for separating vertically stacked content
   * - `block`: Vertical divider for separating horizontally arranged content
   *
   * @default 'inline'
   */
  direction?: 'inline' | 'block';
  /**
   * The visual prominence of the divider line.
   *
   * - `base`: Standard divider for most separations (default)
   * - `strong`: More prominent divider for major section breaks
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
/**
 * Represents autocomplete values that are valid for email input fields.
 * This is a subset of `AnyAutocompleteField` containing only fields suitable for email inputs.
 *
 * Available values:
 * - `email` - Primary email address
 * - `home email` - Home email address
 * - `mobile email` - Mobile device email address
 * - `fax email` - Fax machine email address
 * - `pager email` - Pager device email address
 * @publicDocs
 */
export type EmailAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'email' | `${AutocompleteAddressGroup} email`
>;
interface FormProps$1 extends GlobalProps {
  /**
   * The form fields and controls displayed within the form component, typically including input fields, buttons, and other form elements.
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
/**
 * Represents an error that occurs when saving function settings data.
 *
 * These errors are returned when the extension-provided data fails validation or causes
 * issues during the commit process to Shopify's servers. Handle these errors in the
 * `onError` callback to provide feedback to users about what went wrong.
 * @publicDocs
 */
export interface FunctionSettingsError extends Error {
  /**
   * A unique identifier describing the “class” of error. These will match
   * the GraphQL error codes as closely as possible. For example the enums
   * returned by the `metafieldsSet` mutation.
   *
   * Learn more about [MetafieldsSetUserErrorCode](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldsSetUserErrorCode).
   */
  code: string;
  /**
   * The error type name, always set to `FunctionSettingsError`.
   *
   * This helps identify errors specific to function settings, distinguishing them from other error types.
   */
  name: 'FunctionSettingsError';
}
/**
 * Defines the spacing size between elements, using the standard size scale or `none` for no spacing.
 * @publicDocs
 */
export type SpacingKeyword = SizeKeyword | 'none';
export interface GapProps {
  /**
   * The spacing between child elements.
   *
   * Accepts a single value to apply to both axes, or two space-separated values to set the row and column gaps independently.
   * For example: `large-100 large-500` sets the row gap to `large-100` and column gap to `large-500`.
   *
   * @default 'none'
   */
  gap?: MaybeResponsive<MaybeTwoValuesShorthandProperty<SpacingKeyword>>;
  /**
   * The vertical spacing between elements (in horizontal writing modes).
   *
   * Sets the gap along the block axis. This overrides the row value specified in `gap`.
   *
   * @default '' - meaning no override
   */
  rowGap?: MaybeResponsive<SpacingKeyword | ''>;
  /**
   * The horizontal spacing between elements (in horizontal writing modes).
   *
   * Sets the gap along the inline axis. This overrides the column value specified in `gap`.
   *
   * @default '' - meaning no override
   */
  columnGap?: MaybeResponsive<SpacingKeyword | ''>;
}
/**
 * Represents baseline alignment positions used to align items relative to their baselines.
 * - `baseline`: Aligns to the baseline of the parent.
 * - `first baseline`: Aligns to the first baseline of the parent.
 * - `last baseline`: Aligns to the last baseline of the parent.
 * @publicDocs
 */
export type BaselinePosition = 'baseline' | 'first baseline' | 'last baseline';
/**
 * Defines how space is distributed between and around content items in flex and grid layouts.
 * - `space-between`: Distributes items evenly with the first item at the start and last at the end.
 * - `space-around`: Distributes items evenly with equal space around each item.
 * - `space-evenly`: Distributes items evenly with equal space between them.
 * - `stretch`: Stretches items to fill the container.
 * @publicDocs
 */
export type ContentDistribution =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
/**
 * Defines the position of content along an axis.
 * - `center`: Centers the content.
 * - `start`: Aligns content to the start.
 * - `end`: Aligns content to the end.
 * @publicDocs
 */
export type ContentPosition = 'center' | 'start' | 'end';
/**
 * Represents content positioning with overflow behavior control.
 * Use `safe` to prevent content from becoming inaccessible when it overflows, or `unsafe` to allow overflow regardless of accessibility.
 * @publicDocs
 */
export type OverflowPosition =
  | `unsafe ${ContentPosition}`
  | `safe ${ContentPosition}`;
/**
 * Justify items defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
 *
 * Learn more about the [justify-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items).
 * @publicDocs
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
 * Learn more about the [align-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
 * @publicDocs
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
 * Learn more about the [justify-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
 * @publicDocs
 */
export type JustifyContentKeyword =
  | 'normal'
  | ContentDistribution
  | OverflowPosition
  | ContentPosition;
/**
 * Align content sets the distribution of space between and around content items along a flexbox's cross axis, or a grid or block-level element's block axis.
 *
 * Learn more about the [align-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
 * @publicDocs
 */
export type AlignContentKeyword =
  | 'normal'
  | BaselinePosition
  | ContentDistribution
  | OverflowPosition
  | ContentPosition;
interface GridProps$1 extends GlobalProps, BaseBoxPropsWithRole, GapProps {
  /**
   * The columns in the grid and their sizes.
   *
   * Use values like `1fr 2fr` to create fluid columns, `200px 1fr` to mix fixed and flexible columns,
   * or `repeat(3, 1fr)` to create equal-width columns.
   *
   * Learn more about the [grid-template-columns property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns).
   *
   * @default 'none'
   */
  gridTemplateColumns?: MaybeResponsive<string>;
  /**
   * The rows in the grid and their sizes.
   *
   * Use values like `100px auto` to create rows with fixed and automatic heights,
   * or `repeat(3, 100px)` to create equal-height rows.
   *
   * Learn more about the [grid-template-rows property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows).
   *
   * @default 'none'
   */
  gridTemplateRows?: MaybeResponsive<string>;
  /**
   * The horizontal alignment of grid items within their grid areas (in horizontal layouts).
   *
   * Use this to position items along the inline axis (horizontal in left-to-right/right-to-left layouts, vertical in vertical writing modes).
   * This property overrides the inline value set by `placeItems`.
   *
   * Learn more about the [justify-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items).
   *
   * @default '' - meaning no override
   */
  justifyItems?: MaybeResponsive<JustifyItemsKeyword | ''>;
  /**
   * The vertical alignment of grid items within their grid areas (in horizontal layouts).
   *
   * Use this to position items along the block axis (vertical in left-to-right/right-to-left layouts, horizontal in vertical writing modes).
   * This property overrides the block value set by `placeItems`.
   *
   * Learn more about the [align-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
   *
   * @default '' - meaning no override
   */
  alignItems?: MaybeResponsive<AlignItemsKeyword | ''>;
  /**
   * A shorthand for setting both `justify-items` and `align-items` in a single declaration.
   *
   * Accepts either a single value (applied to both axes) or two space-separated values (align-items justify-items).
   *
   * Learn more about the [place-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items).
   *
   * @default 'normal normal'
   */
  placeItems?: MaybeResponsive<
    `${AlignItemsKeyword} ${JustifyItemsKeyword}` | AlignItemsKeyword
  >;
  /**
   * The horizontal alignment of the entire grid within its container (in horizontal layouts).
   *
   * Use this to distribute grid columns along the inline axis (horizontal in left-to-right/right-to-left layouts, vertical in vertical writing modes).
   * This property overrides the inline value set by `placeContent`.
   *
   * Learn more about the [justify-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
   *
   * @default '' - meaning no override
   */
  justifyContent?: MaybeResponsive<JustifyContentKeyword | ''>;
  /**
   * The vertical alignment of the entire grid within its container (in horizontal layouts).
   *
   * Use this to distribute grid rows along the block axis (vertical in left-to-right/right-to-left layouts, horizontal in vertical writing modes).
   * This property overrides the block value set by `placeContent`.
   *
   * Learn more about the [align-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
   *
   * @default '' - meaning no override
   */
  alignContent?: MaybeResponsive<AlignContentKeyword | ''>;
  /**
	  A shorthand property for `justify-content` and `align-content`.
  
	  Learn more about the [place-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/place-content).

	  @default 'normal normal'
	*/
  placeContent?: MaybeResponsive<
    `${AlignContentKeyword} ${JustifyContentKeyword}` | AlignContentKeyword
  >;
}
interface GridItemProps$1 extends GlobalProps, BaseBoxPropsWithRole {
  /**
   * The number of columns the item will span across.
   *
   * Learn more about the [grid-column property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column).
   *
   * @default 'auto'
   */
  gridColumn?: `span ${number}` | 'auto';
  /**
   * The number of rows the item will span across.
   *
   * Learn more about the [grid-row property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row).
   *
   * @default 'auto'
   */
  gridRow?: `span ${number}` | 'auto';
}
/** @publicDocs */
export interface BaseTypographyProps {
  /**
   * The color emphasis level that controls visual intensity.
   *
   * - `base`: Primary color for body text, standard UI elements, and general content with good readability.
   * - `subdued`: Deemphasized color for secondary text, supporting labels, and less critical interface elements.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * The semantic meaning and color treatment of the component.
   *
   * - `auto`: Automatically determined based on context.
   * - `neutral`: General information without specific intent.
   * - `info`: Informational content or helpful tips.
   * - `success`: Positive outcomes or successful states.
   * - `caution`: Advisory notices that need attention.
   * - `warning`: Important warnings about potential issues.
   * - `critical`: Urgent problems or destructive actions.
   * - `accent`: Highlighted or promotional content.
   * - `custom`: Custom styling controlled by your theme.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * The rendering style for numbers in the font.
   *
   * - `auto`: Inherits the setting from the parent element.
   * - `normal`: Uses the font's default numeric glyphs.
   * - `tabular-nums`: Uses fixed-width numeric glyphs, ensuring numbers align vertically in tables or lists.
   *
   * Learn more about the [font-variant-numeric property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric).
   *
   * @default 'auto'
   */
  fontVariantNumeric?: 'auto' | 'normal' | 'tabular-nums';
  /**
   * The language of the text content. Use this when the text is in a different language than the rest of the page, allowing assistive technologies such as screen readers to invoke the correct pronunciation.
   *
   * The value should be a valid language subtag from the [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
   *
   * It is recommended to combine it with the `dir` attribute to ensure the text is rendered correctly if the surrounding content’s direction is different.
   *
   * @default ''
   */
  lang?: string;
  /**
   * Indicates the directionality of the element’s text.
   *
   * - `""`: The direction is inherited from parent elements (equivalent to not setting the attribute).
   * - `auto`: The user agent determines the direction based on the content.
   * - `ltr`: The languages written from left to right (such as English).
   * - `rtl`: The languages written from right to left (such as Arabic).
   *
   * Learn more about the [dir attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir).
   *
   * @default ''
   */
  dir?: 'ltr' | 'rtl' | 'auto' | '';
}
/** @publicDocs */
export interface BlockTypographyProps {
  /**
   * The maximum number of lines to display before truncating the text content.
   *
   * Learn more about the [-webkit-line-clamp property](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp).
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
   * The heading text displayed within the heading component, which provides a title or section header for content.
   */
  children?: ComponentChildren;
  /**
   * The semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help users
   * navigate the page.
   *
   * - `none`: Completely hides the element and its content from assistive technologies
   * - `presentation`: Removes semantic meaning, making the image purely decorative and ignored by screen readers.
   * - `img`: Identifies the element as an image that conveys meaningful information to users.
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
   * The semantic meaning and color treatment of the component.
   *
   * - `info`: Informational content or helpful tips.
   * - `success`: Positive outcomes or successful states.
   * - `warning`: Important warnings about potential issues.
   * - `critical`: Urgent problems or destructive actions.
   * - `auto`: Automatically determined based on context.
   * - `neutral`: General information without specific intent.
   * - `caution`: Advisory notices that need attention.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * The color emphasis level that controls visual intensity.
   *
   * - `base`: Primary color for body text, standard UI elements, and general content with good readability.
   * - `subdued`: Deemphasized color for secondary text, supporting labels, and less critical interface elements.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * The size of the icon. Available sizes range from `small-500` (smallest) to `large-500` (largest), with `base` providing the default medium size.
   *
   * @default 'base'
   */
  size?: SizeKeyword;
  /**
   * The icon to display. Can be any icon name from the available icon library.
   */
  type?: IconType | AnyString;
}
/** @publicDocs */
export interface BaseImageProps {
  /**
   * Alternative text that describes the image for accessibility.
   *
   * Provides a text description of the image for users with assistive technology
   * and serves as a fallback when the image fails to load. A well-written description
   * enables people with visual impairments to understand non-text content.
   *
   * When a screen reader encounters an image, it reads this description aloud.
   * When an image fails to load, this text displays on screen, helping all users
   * understand what content was intended.
   *
   * Learn more about [writing effective alt text](https://www.shopify.com/ca/blog/image-alt-text#4)
   * and the [alt attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt).
   *
   * @default ``
   */
  alt?: string;
  /**
   * A set of media conditions and their corresponding sizes.
   *
   * Learn more about the [sizes attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes).
   */
  sizes?: string;
  /**
   * The image source (either a remote URL or a local file resource).
   *
   * When the image is loading or no `src` is provided, a placeholder is rendered.
   *
   * @implementation Surfaces may choose the style of the placeholder, but the space the image occupies should be
   * reserved, except in cases where the image area does not have a contextual inline or block size, which should be rare.
   *
   * Learn more about the [src attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src).
   */
  src?: string;
  /**
   * A set of image sources and their width or pixel density descriptors. This overrides the `src` property.
   *
   * Learn more about the [srcset attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset).
   */
  srcSet?: string;
}
interface ImageProps$1 extends GlobalProps, BaseImageProps, BorderProps {
  /**
   * The semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help users
   * navigate the page.
   *
   * - `none`: Completely hides the element and its content from assistive technologies
   * - `presentation`: Removes semantic meaning, making the image purely decorative and ignored by screen readers.
   * - `img`: Identifies the element as an image that conveys meaningful information to users.
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
   * Learn more about the [width attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width).
   *
   * @default 'fill'
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
   * Learn more about the [aspect-ratio property](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio).
   *
   * @default '1/1'
   */
  aspectRatio?:
    | `${number}${optionalSpace}/${optionalSpace}${number}`
    | `${number}`;
  /**
   * The image resizing behavior to fit within its container.
   *
   * - `contain`: Scales the image to fit within the container while maintaining its aspect ratio. The entire image is visible, but might leave empty space.
   * - `cover`: Scales the image to fill the entire container while maintaining its aspect ratio. The image might be cropped to fit.
   *
   * The image is always positioned in the center of the container.
   *
   * Learn more about the [object-fit property](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
   *
   * @default 'contain'
   */
  objectFit?: 'contain' | 'cover';
  /**
   * The loading strategy for the image.
   *
   * - `eager`: Immediately loads the image, irrespective of its position within the visible viewport.
   * - `lazy`: Delays loading the image until it approaches a specified distance from the viewport.
   *
   * Learn more about the [loading attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading).
   *
   * @default 'eager'
   */
  loading?: 'eager' | 'lazy';
  /**
   * A callback fired when load completes successfully. Learn more about the [load event](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload).
   */
  onLoad?: (event: Event) => void;
  /**
   * A callback fired when a load error occurs. Learn more about the [error event](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror).
   */
  onError?: (event: Event) => void;
}
interface LinkProps$1 extends GlobalProps, LinkBehaviorProps {
  /**
   * The text or elements displayed within the link component, which navigates users to a different location when activated.
   */
  children?: ComponentChildren;
  /**
   * The semantic meaning and color treatment of the component.
   *
   * - `critical`: Urgent problems or destructive actions.
   * - `auto`: Automatically determined based on context.
   * - `neutral`: General information without specific intent.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel?: string;
  /**
   * The language of the text content. Use this when the text is in a different language than the rest of the page, allowing assistive technologies such as screen readers to invoke the correct pronunciation. The value should be a valid language subtag from the [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
   */
  lang?: string;
}
interface ListItemProps$1 extends GlobalProps {
  /**
   * The content displayed within the list item, which represents a single entry in an ordered or unordered list.
   */
  children?: ComponentChildren;
}
interface MenuProps$1 extends GlobalProps {
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel?: string;
  /**
   * The children define the actions to render inside the menu. Only button components are allowed as children of a menu, and these buttons can perform actions (using `onClick`) or link to other parts of the application (using `to`/ `href`). Any other component placed here will be ignored.
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
   * A title that describes the content of the modal.
   *
   */
  heading?: string;
  /**
   * Adjust the padding around the modal content.
   *
   * `base`: applies padding that is appropriate for the element.
   *
   * `none`: removes all padding from the element. This can be useful when elements inside the modal need to span
   * to the edge of the modal. For example, a full-width image. In this case, rely on box with a padding of 'base'
   * to bring back the desired padding for the rest of the content.
   *
   * @default 'base'
   */
  padding?: 'base' | 'none';
  /**
   * Adjust the size of the modal.
   *
   * `max`: expands the modal to its maximum size as defined by the host application, on both the horizontal and vertical axes.
   *
   * @default 'base'
   */
  size?: SizeKeyword | 'max';
  /**
   * The content of the modal.
   */
  children?: ComponentChildren;
}
interface MoneyFieldProps$1
  extends GlobalProps,
    BaseTextFieldProps,
    NumberConstraintsProps,
    AutocompleteProps<MoneyAutocompleteField> {}
/**
 * Represents autocomplete values that are valid for money/currency input fields.
 * This is a subset of `AnyAutocompleteField` containing only fields suitable for monetary inputs.
 * @publicDocs
 */
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
   * The type of virtual keyboard to display on mobile devices.
   *
   * - `decimal`: Shows a numeric keyboard with a decimal point, suitable for prices or measurements.
   * - `numeric`: Shows a numeric keyboard without a decimal point, suitable for whole numbers like quantities.
   *
   * Learn more about the [inputmode attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode).
   *
   * @default 'decimal'
   */
  inputMode?: 'decimal' | 'numeric';
  /**
   * A callback fired when the user has finished editing the field, such as when they blur the field. This also fires after `onInput` on every step when using keyboard up/down arrows. Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  onChange?: (event: Event) => void;
  /**
   * A callback fired when the user makes any changes to the field value, including when using keyboard up/down arrows. This fires before `onChange`. Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).
   */
  onInput?: (event: Event) => void;
}
/**
 * Represents autocomplete values that are valid for number input fields.
 * This is a subset of `AnyAutocompleteField` containing only fields suitable for numeric inputs.
 *
 * Available values:
 * - `one-time-code` - One-time codes for authentication (OTP, 2FA codes)
 * - `cc-number` - Credit card number
 * - `cc-csc` - Credit card security code (CVV/CVC)
 * @publicDocs
 */
export type NumberAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'one-time-code' | 'cc-number' | 'cc-csc'
>;
interface OptionProps$1 extends GlobalProps, BaseOptionProps {
  /**
   * The text or elements displayed as the option label, which identifies the selectable choice to users in a dropdown or selection list.
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
   * The selectable options displayed in the dropdown list. Only accepts option components as children. Each option represents an individual selectable item with its own label and value.
   */
  children?: ComponentChildren;
}
interface OrderedListProps$1 extends GlobalProps {}
interface PageProps$1 extends GlobalProps, ActionSlots {
  /**
   * The content of the page.
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
   * The paragraph text content displayed within the paragraph component, which presents a block of related text with appropriate styling.
   */
  children?: ComponentChildren;
  /**
   * The semantic type and styling treatment for the paragraph content.
   *
   * Other presentation properties on `s-paragraph` override the default styling.
   *
   * @default 'paragraph'
   */
  type?: ParagraphType;
}
/** @publicDocs */
export type ParagraphType =
  /**
   * A semantic type that indicates the text is a structural grouping of related content.
   *
   * In an HTML host, the text will be rendered in an `<p>` element. Learn more about the [p element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p).
   */
  | 'paragraph'
  /**
   * A semantic type that indicates the text is considered less important than the main content, but is still necessary for the reader to understand.
   *
   * It can be used for secondary content but also for disclaimers, terms and conditions, or legal information.
   *
   * Surfaces should apply a smaller font size than the default size.
   *
   * In an HTML host, the text will be rendered in a `<small>` element. Learn more about the [small element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small).
   */
  | 'small';
interface PasswordFieldProps$1
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<PasswordAutocompleteField> {}
/**
 * Represents autocomplete values that are valid for password input fields.
 * This is a subset of `AnyAutocompleteField` containing only fields suitable for password inputs.
 *
 * Available values:
 * - `current-password` - Existing password for login or authentication
 * - `new-password` - New password when creating an account or changing password
 * @publicDocs
 */
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
interface QueryContainerProps$1 extends GlobalProps {
  /**
   * The content displayed within the query container component, which enables container queries for responsive styling based on the container's size rather than the viewport.
   */
  children?: ComponentChildren;
  /**
   * An identifier for this container that you can reference in CSS container queries to apply styles based on this specific container's size.
   *
   * All query container components automatically receive a container name of `s-default`. You can omit the container name in your queries, so `@container (inline-size <= 300px)` is equivalent to `@container s-default (inline-size <= 300px)`.
   *
   * When you provide a custom `containerName`, it's added alongside `s-default`. For example, `containerName="product-card"` results in `s-default product-card` being set on the `container-name` CSS property, allowing you to target this container with `@container product-card (inline-size <= 300px)`.
   *
   * Learn more about the [container-name property](https://developer.mozilla.org/en-US/docs/Web/CSS/container-name).
   *
   * @default ''
   *
   * @implementation You must always have a CSS `container-name` of `s-default` for this component.
   */
  containerName?: string;
}
interface SectionProps$1 extends GlobalProps, ActionSlots {
  /**
   * The content displayed within the section component, which groups related elements together in a logical unit with an optional heading.
   */
  children?: ComponentChildren;
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel?: string;
  /**
   * The heading text displayed at the top of the section. This heading provides a title for the section's content and automatically uses the appropriate semantic heading level (h2, h3, h4) based on nesting depth to maintain proper document structure.
   */
  heading?: string;
  /**
   * The padding applied to all edges of the element.
   *
   * - `base`: applies padding that is appropriate for the element. Note that it might result in no padding if
   * this is the right design decision in a particular context.
   * - `none`: removes all padding from the element. This can be useful when elements inside the section need to span
   * to the edge of the section. For example, a full-width image. In this case, rely on `s-box` with a padding of 'base'
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
   * The selectable options displayed in the dropdown list. Accepts option components for individual selectable items, and option group components to organize related options into logical groups with labels.
   */
  children?: ComponentChildren;
}
interface SpinnerProps$1 extends GlobalProps {
  /**
   * The size of the spinner icon. Available sizes range from `small-500` (smallest) to `large-500` (largest), with `base` providing the default medium size.
   *
   * @default 'base'
   */
  size?: SizeKeyword;
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel?: string;
}
interface StackProps$1 extends GlobalProps, BaseBoxPropsWithRole, GapProps {
  /**
   * The child elements displayed within the stack component, which are arranged vertically or horizontally with consistent spacing.
   */
  children?: ComponentChildren;
  /**
   * The direction in which children are arranged within the stack.
   *
   * - `block`: Arranges children vertically in a column (in horizontal writing modes). Children will not wrap.
   * - `inline`: Arranges children horizontally in a row (in horizontal writing modes). Children will wrap to the next line if needed.
   *
   * This uses [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values) to ensure proper behavior across different writing modes.
   *
   * @default 'block'
   */
  direction?: MaybeResponsive<'block' | 'inline'>;
  /**
   * The distribution of children along the stack component's main axis (the direction of stacking).
   *
   * For example, in a vertical stack (block direction), this controls vertical distribution.
   * Use this to space out children or align them to the start, center, or end.
   *
   * Learn more about the [justify-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
   *
   * @default 'normal'
   */
  justifyContent?: MaybeResponsive<JustifyContentKeyword>;
  /**
   * The alignment of individual children along the stack component's cross axis (perpendicular to the stacking direction).
   *
   * For example, in a vertical stack (block direction), this controls horizontal alignment of each child.
   *
   * Learn more about the [align-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
   *
   * @default 'normal'
   */
  alignItems?: MaybeResponsive<AlignItemsKeyword>;
  /**
   * The alignment of multiple lines of content along the stack component's cross axis.
   *
   * This only applies when content wraps to multiple lines (typically in inline direction).
   *
   * Learn more about the [align-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
   *
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
/** @publicDocs */
export interface PaginationProps {
  /**
   * Whether to use pagination controls.
   *
   * @default false
   */
  paginate?: boolean;
  /**
   * A callback fired when the previous page button is clicked.
   */
  onPreviousPage?: (event: Event) => void;
  /**
   * A callback fired when the next page button is clicked.
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
   * Whether the table is in a loading state, such as during initial page load or when loading the next page in a paginated table.
   * When `true`, the table might be in an inert state that prevents user interaction.
   *
   * @default false
   */
  loading?: boolean;
}
interface TableProps$1 extends GlobalProps, PaginationProps {
  /**
   * The table structure displayed within the table component, including table headers, rows, and cells that organize data in a grid format.
   */
  children?: ComponentChildren;
  /**
   * The filter controls displayed above the table, such as search field or other input components for searching and filtering table data.
   */
  filters?: ComponentChildren;
  /**
   * The layout variant of the table component.
   *
   * - `list`: Always displays as a list layout.
   * - `table`: Always displays as a traditional table layout.
   * - `auto`: Automatically displays as a table on wide screens and as a list on narrow screens.
   *
   * @default 'auto'
   */
  variant?: 'list' | 'table' | 'auto';
}
interface TableBodyProps$1 extends GlobalProps {
  /**
   * The rows containing the main data content of the table.
   * In the `table` variant, this represents the semantic table body. In the `list` variant, this might not have semantic meaning but still contains the data rows.
   */
  children?: ComponentChildren;
}
interface TableCellProps$1 extends GlobalProps {
  /**
   * The content displayed within the table cell, which represents a single data point in the table's grid structure.
   */
  children?: ComponentChildren;
}
/**
 * Represents the semantic type of content slots within list items.
 *
 * - `primary`: The main content or title of the list item.
 * - `secondary`: Supporting or descriptive content below the primary content.
 * - `kicker`: A small label or tag displayed above the primary content.
 * - `inline`: Content displayed inline with the primary content.
 * - `labeled`: Content with an associated label.
 * @publicDocs
 */
export type ListSlotType =
  | 'primary'
  | 'secondary'
  | 'kicker'
  | 'inline'
  | 'labeled';
/**
 * Represents the format options for table headers that control styling and alignment of column content.
 *
 * Available values:
 * - `base`: Standard format for text columns
 * - `currency`: Right-aligned format for monetary values
 * - `numeric`: Right-aligned format for numeric values
 * @publicDocs
 */
export type HeaderFormat = 'base' | 'currency' | 'numeric';
interface TableHeaderProps$1 extends GlobalProps {
  /**
   * The heading of the column in the `table` variant, and the label of its data in `list` variant.
   */
  children?: ComponentChildren;
  /**
   * The content designation for this column when the table displays in list variant on mobile devices.
   *
   * @default 'labeled'
   */
  listSlot?: ListSlotType;
  /**
   * The format of the column that controls styling and alignment of cell content.
   *
   * @default 'base'
   */
  format?: HeaderFormat;
}
interface TableHeaderRowProps$1 extends GlobalProps {
  /**
   * The header cells that define the columns of the table.
   * Only accepts table header components as children, with each header representing a column and providing its label.
   */
  children?: ComponentChildren;
}
interface TableRowProps$1 extends GlobalProps {
  /**
   * The data cells displayed within this table row, with each cell containing content for its corresponding column.
   * Only accepts table cell components as children.
   */
  children?: ComponentChildren;
  /**
   * The ID of an interactive element, such as `s-link`, in the row that will be the target of the click when the row is clicked.
   * This is the primary action for the row; it should not be used for secondary actions.
   *
   * This is a click-only affordance, and does not introduce any keyboard or screen reader affordances.
   * Which is why the target element must be in the table; so that keyboard and screen reader users can interact with it normally.
   *
   * @implementation no focus or keyboard affordances are introduced by this property. No aria attributes need to be added to the table row.
   * @implementation the row and/or delegate should have some affordance that indicates it is clickable. This may be a background color, a border, or a hover effect
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
   * The text content displayed within the text component, which applies semantic meaning and styling appropriate to the specified text type.
   */
  children?: ComponentChildren;
  /**
   * The semantic type and styling treatment for the text content.
   *
   * Other presentation properties on text override the default styling.
   *
   * @default 'generic'
   */
  type?: TextType;
}
/**
 * Defines the semantic type and styling treatment for text content.
 * Each type maps to appropriate HTML elements and applies specific styling for different contexts.
 * @publicDocs
 */
export type TextType =
  /**
   * A semantic type that indicates the text is contact information. Typically used for addresses.
   *
   * This must have `inline` layout (despite the default being `block` in HTML hosts).
   *
   * Surfaces may apply styling to this type.
   *
   * In an HTML host, the text will be rendered in an `<address>` element.
   *
   * @implementation vertical alignment should be `baseline` (`vertical-align: baseline`)
   *
   * Learn more about the [address element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address).
   */
  | 'address'
  /**
   * A semantic type that indicates the text is no longer accurate or no longer relevant. One such use-case is discounted prices.
   *
   * Surfaces should apply styling to this type to suggest its content no longer applies.
   *
   * In an HTML host, the text will be rendered in a `<s>` element. Learn more about the [s element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s).
   */
  | 'redundant'
  /**
   * A semantic type that indicates the text is marked or highlighted and relevant to the user’s current action.
   * One such use-case is to indicate the characters that matched a search query.
   *
   * Surfaces should apply styling to this type to draw attention to the content.
   *
   * In an HTML host, the text will be rendered in a `<mark>` element. Learn more about the [mark element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark).
   */
  | 'mark'
  /**
   * A semantic type that indicates emphatic stress. Typically for words that have a stressed emphasis compared to surrounding text.
   *
   * Surfaces should apply styling to this type to distinguish it from surrounding text. Italicization is a common choice, but not required.
   *
   * In an HTML host, the text will be rendered in an `<em>` element. Learn more about the [em element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em).
   */
  | 'emphasis'
  /**
   * A semantic type that indicates an offset from the normal prose of the text.
   *
   * Typically used to indicate a foreign word, fictional character thoughts, or when the text refers to the definition of a word instead of representing its semantic meaning.
   *
   * Surfaces should italicize this content by default.
   *
   * In an HTML host, the text will be rendered in a `<i>` tag. Learn more about the [i element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i).
   */
  | 'offset'
  /**
   * A semantic type that indicates strong importance, seriousness, or urgency.
   *
   * Surfaces should render this content bold by default.
   *
   * In an HTML host, the text will be rendered in a `<strong>` tag. Learn more about the [strong element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong).
   */
  | 'strong'
  /**
   * A semantic type that indicates the text is considered less important than the main content, but is still necessary for the reader to understand.
   * It can be used for secondary content but also for disclaimers, terms and conditions, or legal information.
   *
   * Surfaces should apply a smaller font size than the default size.
   *
   * In an HTML host, the text will be rendered in a `<small>` element. Learn more about the [small element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small).
   */
  | 'small'
  /**
   * No additional semantics or styling is applied.
   *
   * Surfaces must not apply any default styling to this type.
   *
   * In an HTML host, the text will be rendered in a `<span>` tag. Learn more about the [span element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span).
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
   * A callback fired when the provided image completes loading successfully. Learn more about the [load event](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload).
   */
  onLoad?: (event: Event) => void;
  /**
   * A callback fired when the provided image fails to load. Learn more about the [error event](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror).
   */
  onError?: (event: Event) => void;
  /**
   * The size of the product thumbnail image. Available sizes range from `small-500` (smallest) to `large-500` (largest), with `base` providing the default medium size.
   *
   * @default 'base'
   */
  size?: SizeKeyword;
}
interface TooltipProps$1 extends GlobalProps {
  /**
   * The informational text or elements displayed within the tooltip overlay, providing helpful context or explanations when users interact with the associated element.
   */
  children?: ComponentChildren;
}
interface UnorderedListProps$1 extends GlobalProps {}
interface URLFieldProps$1
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<URLAutocompleteField> {}
/**
 * Represents autocomplete values that are valid for URL input fields.
 * This is a subset of `AnyAutocompleteField` containing only fields suitable for URL inputs.
 *
 * Available values:
 * - `url` - General URL or web address
 * - `photo` - URL to a photo or image
 * - `impp` - Instant messaging protocol URL
 * - `home impp` - Home instant messaging protocol URL
 * - `mobile impp` - Mobile instant messaging protocol URL
 * - `fax impp` - Fax instant messaging protocol URL
 * - `pager impp` - Pager instant messaging protocol URL
 * @publicDocs
 */
export type URLAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'url' | 'photo' | 'impp' | `${AutocompleteAddressGroup} impp`
>;
//
// Preact Virtual DOM
// -----------------------------------
export interface VNode<P = {}> {
  /**
   * The component type or HTML element tag name that this VNode represents.
   */
  type: ComponentType<P> | string;
  /**
   * The properties passed to this component or element, including children.
   */
  props: P & {
    children: ComponentChildren$1;
  };
  /**
   * A unique key used to identify this element in lists for efficient reconciliation.
   */
  key: Key;
  /**
   * A ref to the element, which is not guaranteed by React.ReactElement. For compatibility reasons with popular react libs we define it as optional too.
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
/**
 * Represents a unique key for identifying elements in lists.
 * Can be a string, number, or any other value.
 * @publicDocs
 */
export type Key = string | number | any;
export interface RefObject<T> {
  /**
   * The current value of the ref, which holds a reference to the DOM element or component instance.
   * Will be `null` if the element is not yet mounted or has been unmounted.
   */
  current: T | null;
}
/**
 * Represents a callback function that receives a reference to a DOM element or component instance.
 * Called when the element is mounted or unmounted.
 * @publicDocs
 */
export type RefCallback<T> = (instance: T | null) => void;
/**
 * Represents a reference to a DOM element or component instance.
 * Can be either a ref object, callback function, or null.
 * @publicDocs
 */
export type Ref<T> = RefObject<T> | RefCallback<T> | null;
/**
 * Represents a single child element that can be rendered, including VNodes, primitives, or null/undefined values.
 * @publicDocs
 */
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
  /**
   * A unique key used to identify this element in lists for efficient reconciliation during re-renders.
   */
  key?: Key | undefined;
  /**
   * An internal flag indicating whether this element was created using JSX syntax.
   */
  jsx?: boolean | undefined;
}
/** @publicDocs */
export interface ErrorInfo {
  /**
   * A string representation of the component stack trace at the point where an error occurred.
   * Useful for debugging to understand which components were rendering when the error happened.
   */
  componentStack?: string;
}
/**
 * Represents the props that can be rendered by a component, combining custom props with standard attributes like children and ref.
 * @publicDocs
 */
export type RenderableProps<P, RefType = any> = P &
  Readonly<
    Attributes & {
      /**
       * The child elements to be rendered within this component.
       */
      children?: ComponentChildren$1;
      /**
       * A reference to the DOM element or component instance, allowing direct access to the underlying element.
       */
      ref?: Ref<RefType>;
    }
  >;
/**
 * Represents any valid component type, either a class component or a function component.
 * @publicDocs
 */
export type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;
export interface FunctionComponent<P = {}> {
  (props: RenderableProps<P>, context?: any): ComponentChildren$1;
  /**
   * A human-readable name for this component, used in debugging and dev tools.
   */
  displayName?: string;
  /**
   * The default values for props that will be used when props are not explicitly provided.
   */
  defaultProps?: Partial<P> | undefined;
}
/** @publicDocs */
export interface ComponentClass<P = {}, S = {}> {
  new (props: P, context?: any): Component<P, S>;
  /**
   * A human-readable name for this component class, used in debugging and dev tools.
   */
  displayName?: string;
  /**
   * The default values for props that will be used when props are not explicitly provided to component instances.
   */
  defaultProps?: Partial<P>;
  /**
   * The context type this component can consume. When set, the component will have access to this context's value.
   */
  contextType?: Context<any>;
  getDerivedStateFromProps?(
    props: Readonly<P>,
    state: Readonly<S>,
  ): Partial<S> | null;
  getDerivedStateFromError?(error: any): Partial<S> | null;
}
/** @publicDocs */
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
  /**
   * The current state of the component.
   */
  state: Readonly<S>;
  /**
   * The props passed to this component.
   */
  props: RenderableProps<P>;
  /**
   * The context value this component can access if a contextType is specified.
   */
  context: any;
  /**
   * The underlying DOM element or text node that this component rendered.
   */
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
    /**
     * A render function that receives the current context value and returns elements to render.
     * This function is called whenever the context value changes, allowing components to re-render with the updated value.
     */
    children: (value: T) => ComponentChildren$1;
  }> {}
/** @publicDocs */
export interface Provider<T>
  extends FunctionComponent<{
    /**
     * The context value to provide to consuming components.
     */
    value: T;
    /**
     * The child components that will have access to this context value.
     */
    children?: ComponentChildren$1;
  }> {}
/** @publicDocs */
export interface Context<T> extends Provider<T> {
  /**
   * A component that consumes the context value and re-renders when it changes.
   */
  Consumer: Consumer<T>;
  /**
   * A component that provides the context value to its descendants.
   */
  Provider: Provider<T>;
  /**
   * A human-readable name for this context, used in debugging and dev tools.
   */
  displayName?: string;
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
  extends Required<Pick<AvatarProps$1, 'initials' | 'src' | 'size'>> {
  /**
   * Alternative text that describes the avatar for accessibility.
   *
   * Provides a text description of the avatar for users with assistive technology
   * and serves as a fallback when the avatar fails to load. A well-written description
   * enables people with visual impairments to understand non-text content.
   *
   * When a screen reader encounters an avatar, it reads this description aloud.
   * When an avatar fails to load, this text displays on screen, helping all users
   * understand what content was intended.
   *
   * Learn more about [writing effective alt text](https://www.shopify.com/ca/blog/image-alt-text#4)
   * and the [alt attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt).
   */
  alt: string;
  /**
   * The size of the avatar image.
   *
   * - `small-200`: Extra small avatar, suitable for compact displays or lists with many items.
   * - `small`: Small avatar, good for secondary contexts or tight layouts.
   * - `base`: Default size that works well in most contexts.
   * - `large`: Large avatar for emphasis or when the avatar is a focal point.
   * - `large-200`: Extra large avatar for prominent display.
   */
  size: Extract<
    AvatarProps$1['size'],
    'small-200' | 'small' | 'base' | 'large' | 'large-200'
  >;
}

/**
 * Represents CSS styles as a string, typically used for inline styles or style injection.
 * @publicDocs
 */
export type Styles = string;
/**
 * Represents the implementation details for rendering components within a shadow DOM.
 * Extends `ShadowRootInit` with a render function and optional styles.
 * @publicDocs
 */
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChildren;
  styles?: Styles;
};
export interface ActivationEventEsque {
  /**
   * Whether the Shift key was pressed when the event occurred.
   */
  shiftKey: boolean;
  /**
   * Whether the Meta/Command key (Mac) or Windows key was pressed when the event occurred.
   */
  metaKey: boolean;
  /**
   * Whether the Ctrl key was pressed when the event occurred.
   */
  ctrlKey: boolean;
  /**
   * The button number that was pressed on the mouse. 0 for left button, 1 for middle button, 2 for right button.
   */
  button: number;
}
/** @publicDocs */
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
declare const BaseClass$4: typeof globalThis.HTMLElement;
declare abstract class PreactCustomElement extends BaseClass$4 {
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
   * A method that queues a run of the render function.
   * You shouldn't need to call this manually - it should be handled by changes to @property values.
   * @private
   */
  queueRender(): void;
  /**
   * A method like the standard `element.click()`, but you can influence the behavior with a `sourceEvent`.
   *
   * For example, if the `sourceEvent` was a middle click, or has particular keys held down,
   * components will attempt to produce the desired behavior on links, such as opening the page in the background tab.
   * @private
   * @param options
   */
  click({sourceEvent}?: ClickOptions): void;
}

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 * @publicDocs
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A toggle event with a strongly-typed `currentTarget` property.
 * Extends the `ToggleEvent` interface with type-safe access to the element that triggered the toggle.
 * @publicDocs
 */
export type CallbackToggleEvent<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends ToggleEvent = ToggleEvent,
> = TEvent & {
  currentTarget: HTMLElementTagNameMap[TTagName];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`.
 * Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 * @publicDocs
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
/**
 * A function that handles error events from UI components.
 * This type represents an event listener callback that receives both the event and an error object.
 * @publicDocs
 */
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
/**
 * A function that handles extendable events from UI components.
 * This type represents an event listener callback that can use `waitUntil` to extend the event lifetime.
 * @publicDocs
 */
export type CallbackExtendableEventListener<
  TTagName extends keyof HTMLElementTagNameMap,
> =
  | (EventListener & {
      (event: CallbackExtendableEvent<TTagName>): void;
    })
  | null;
export interface FieldReactProps<T extends keyof HTMLElementTagNameMap> {
  /**
   * A callback fired when the user makes changes to the field value. This fires before `onChange`.
   */
  onInput?: ((event: CallbackEvent<T>) => void) | null;
  /**
   * A callback fired when the user has finished editing the field, such as when they blur the field.
   */
  onChange?: ((event: CallbackEvent<T>) => void) | null;
  /**
   * A callback fired when the field receives focus.
   */
  onFocus?: ((event: CallbackEvent<T>) => void) | null;
  /**
   * A callback fired when the field loses focus.
   */
  onBlur?: ((event: CallbackEvent<T>) => void) | null;
}
/**
 * Base props for Preact custom elements without children support.
 * Includes common properties like key, ref, and slot for elements that don't accept child content.
 * @publicDocs
 */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /**
   * A unique identifier for this element, used by the virtual DOM to efficiently track and update elements in lists.
   * Essential for maintaining component state and optimizing re-renders when lists change.
   */
  key?: preact.Key;
  /**
   * A reference to access the underlying DOM element directly.
   * Typically created using `useRef()` to interact with the element imperatively or measure its properties.
   */
  ref?: preact.Ref<TClass>;
  /**
   * The named slot to which this element is assigned in the parent component's shadow DOM.
   *
   * Used for advanced component composition with web components.
   */
  slot?: Lowercase<string>;
}
/**
 * Base props for Preact custom elements with children support.
 * Extends PreactBaseElementProps with the ability to render child elements.
 * @publicDocs
 */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  /**
   * The child elements to be rendered within this component.
   */
  children?: preact.ComponentChildren;
}

/**
 * Configure the following properties on the avatar component.
 * @publicDocs
 */
declare class Avatar extends PreactCustomElement implements AvatarProps {
  accessor initials: AvatarProps['initials'];
  accessor src: AvatarProps['src'];
  accessor size: AvatarProps['size'];
  accessor alt: AvatarProps['alt'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$Z]: Avatar;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$Z]: AvatarJSXProps & PreactBaseElementProps<Avatar>;
    }
  }
}

declare const tagName$Z = 's-avatar';
export interface AvatarJSXProps
  extends Partial<AvatarProps>,
    Pick<AvatarProps$1, 'id'> {
  /**
   * A callback fired when the avatar image loads successfully.
   */
  onLoad?: () => void;
  /**
   * A callback fired when the avatar image fails to load.
   */
  onError?: () => void;
}

export interface IconProps
  extends Pick<
    IconProps$1,
    'type' | 'tone' | 'color' | 'size' | 'interestFor'
  > {
  /**
   * The icon to display from the icon library.
   *
   * Set to a valid icon name to display that icon. To hide the icon completely,
   * use an empty string `''`. To reserve the icon's space without displaying an icon,
   * use `'empty'`.
   */
  type: '' | IconType | 'empty';
  tone: Extract<
    IconProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
  /**
   * The size of the icon.
   *
   * - `small`: Smaller icon suitable for inline use within text or compact UI elements.
   * - `base`: Default size that works well for standalone icons and standard use cases.
   */
  size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

export interface BadgeProps
  extends Pick<BadgeProps$1, 'color' | 'icon' | 'size' | 'tone'> {
  color: Extract<BadgeProps$1['color'], 'base' | 'strong'>;
  icon: IconProps['type'] | '';
  /**
   * The size of the badge.
   *
   * - `base`: Default size suitable for most badge use cases.
   * - `large`: Larger badge for increased visibility and prominence.
   * - `large-100`: Extra large badge for maximum visibility in emphasized contexts.
   */
  size: Extract<BadgeProps$1['size'], 'base' | 'large' | 'large-100'>;
  tone: Extract<
    BadgeProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
}

/**
 * Configure the following properties on the badge component.
 * @publicDocs
 */
declare class Badge extends PreactCustomElement implements BadgeProps {
  accessor color: BadgeProps['color'];
  accessor icon: BadgeProps['icon'];
  accessor size: BadgeProps['size'];
  accessor tone: BadgeProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$Y]: Badge;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$Y]: BadgeJSXProps & PreactBaseElementPropsWithChildren<Badge>;
    }
  }
}

declare const tagName$Y = 's-badge';
export interface BadgeJSXProps
  extends Partial<BadgeProps>,
    Pick<BadgeProps$1, 'id' | 'children'> {
  /**
   * The text label displayed within the badge component, typically a short status indicator or category label.
   */
  children?: ComponentChildren;
}

/**
 * Represents the banner component props with all properties marked as required.
 * @publicDocs
 */
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

/**
 * Configure the following properties on the banner component.
 * @publicDocs
 */
declare class Banner extends PreactCustomElement implements BannerProps {
  accessor heading: BannerProps['heading'];
  accessor tone: BannerProps['tone'];
  accessor hidden: BannerProps['hidden'];
  accessor dismissible: BannerProps['dismissible'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$X]: Banner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$X]: Omit<BannerJSXProps, 'secondaryActions'> &
        PreactBaseElementPropsWithChildren<Banner>;
    }
  }
}

declare const tagName$X = 's-banner';
export interface BannerJSXProps
  extends Partial<BannerProps>,
    Pick<BannerProps$1, 'id' | 'children'> {
  /**
   * The main message content displayed within the banner component, providing important information or guidance to users.
   */
  children?: ComponentChildren;
  /**
   * Action buttons displayed at the bottom of the banner that let users respond to the message.
   * Accepts up to two button components with `variant="secondary"` or `variant="auto"`.
   */
  secondaryActions?: ComponentChildren;
  /**
   * A callback fired when the user dismisses the banner by clicking the close button.
   * Use this to update your app state and control the banner's visibility.
   */
  onDismiss?: ((event: CallbackEvent<typeof tagName$X>) => void) | null;
  /**
   * A callback fired when the banner is completely hidden, after any hide animations have completed.
   * Use this to perform cleanup or trigger subsequent actions after the banner is no longer visible.
   */
  onAfterHide?: ((event: CallbackEvent<typeof tagName$X>) => void) | null;
}

/**
 * Makes a type responsive by allowing it to be either the base value or a container query string.
 * This enables conditional styling based on container dimensions.
 * @publicDocs
 */
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
 * @publicDocs
 */
export type MakeResponsivePick<TType, TProperty extends keyof TType> = {
  [P in TProperty]: MakeResponsive<TType[P]>;
};

/**
 * Represents the box component props with all properties marked as required.
 * @publicDocs
 */
export type RequiredBoxProps = Required<BoxProps$1>;
/**
 * Represents the subset of border radius values supported by the component.
 *
 * - `small-200`: Extra small radius for subtle rounding.
 * - `small-100`: Small radius for minimal corner rounding.
 * - `small`: Standard small radius.
 * - `base`: Medium radius for moderate corner rounding.
 * - `large`: Standard large radius for pronounced rounding.
 * - `large-100`: Large radius for more prominent corner rounding.
 * - `large-200`: Extra large radius for maximum rounding.
 * - `none`: No border radius (sharp corners).
 * @publicDocs
 */
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
/**
 * Represents the subset of border style values supported by the box component.
 *
 * - `auto`: Default border style determined by the system.
 * - `none`: No border style (removes the border).
 * - `solid`: Continuous line border.
 * - `dashed`: Border made up of dashes.
 * @publicDocs
 */
export type BoxBorderStyles = Extract<
  RequiredBoxProps['borderStyle'],
  'none' | 'solid' | 'dashed' | 'auto'
>;
/**
 * Represents box props with responsive capabilities for layout properties.
 *
 * This enables conditional styling based on container queries.
 * @publicDocs
 */
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
   * The background color of the component.
   *
   * @default 'transparent'
   */
  background: Extract<
    RequiredBoxProps['background'],
    'transparent' | 'base' | 'subdued' | 'strong'
  >;
  /**
   * The thickness of the border on all sides.
   *
   * When set, this overrides the width value specified in the `border` property.
   * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) for specifying different widths per side.
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
   * The visual style of the border on all sides, such as solid, dashed, or dotted.
   *
   * When set, this overrides the style value specified in the `border` property.
   * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) for specifying different styles per side.
   *
   * @default '' - meaning no override
   */
  borderStyle:
    | MaybeAllValuesShorthandProperty<BoxBorderStyles>
    | Extract<RequiredBoxProps['borderStyle'], ''>;
  /**
   * The color of the border using the design system's color scale.
   *
   * When set, this overrides the color value specified in the `border` property.
   * Choose from `subdued`, `base`, or `strong` to match the visual emphasis needed.
   *
   * @default '' - meaning no override
   */
  borderColor: Extract<
    RequiredBoxProps['borderColor'],
    'subdued' | 'base' | 'strong' | ''
  >;
  /**
   * The roundedness of the element's corners using the design system's radius scale.
   *
   * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) for specifying different radii per corner. Use this to create rounded corners or fully rounded elements.
   *
   * @default 'none'
   */
  borderRadius: MaybeAllValuesShorthandProperty<BoxBorderRadii>;
  /**
   * The padding applied to all edges of the component.
   *
   * Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) using flow-relative values:
   * - 1 value applies to all sides
   * - 2 values apply to block (top/bottom) and inline (left/right)
   * - 3 values apply to block-start (top), inline (left/right), and block-end (bottom)
   * - 4 values apply to block-start (top), inline-end (right), block-end (bottom), and inline-start (left)
   *
   * **Examples:** `base`, `large none`, `base large-100 base small`
   *
   * Use `auto` to inherit padding from the nearest container with removed padding. Also accepts a [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default 'none'
   */
  padding: ResponsiveBoxProps['padding'];
  /**
   * The block-direction padding (top and bottom in horizontal writing modes).
   *
   * Accepts a single value for both sides or two space-separated values for block-start and block-end.
   *
   * **Example:** `large none` applies `large` to the top and `none` to the bottom.
   *
   * Overrides the block value from `padding`. Also accepts a [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlock: ResponsiveBoxProps['paddingBlock'];
  /**
   * The block-start padding (top in horizontal writing modes).
   *
   * Overrides the block-start value from `paddingBlock`. Also accepts a [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart: ResponsiveBoxProps['paddingBlockStart'];
  /**
   * The block-end padding (bottom in horizontal writing modes).
   *
   * Overrides the block-end value from `paddingBlock`. Also accepts a [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd: ResponsiveBoxProps['paddingBlockEnd'];
  /**
   * The inline-direction padding (left and right in horizontal writing modes).
   *
   * Accepts a single value for both sides or two space-separated values for inline-start and inline-end.
   *
   * **Example:** `large none` applies `large` to the left and `none` to the right.
   *
   * Overrides the inline value from `padding`. Also accepts a [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInline: ResponsiveBoxProps['paddingInline'];
  /**
   * The inline-start padding (left in LTR writing modes, right in RTL).
   *
   * Overrides the inline-start value from `paddingInline`. Also accepts a [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart: ResponsiveBoxProps['paddingInlineStart'];
  /**
   * The inline-end padding (right in LTR writing modes, left in RTL).
   *
   * Overrides the inline-end value from `paddingInline`. Also accepts a [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd: ResponsiveBoxProps['paddingInlineEnd'];
  /**
   * The outer [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) type of the component. The outer type sets a component's participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).
   *
   * - `auto` the component's initial value. The actual value depends on the component and context.
   * - `none` hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.
   *
   * @default 'auto'
   */
  display: ResponsiveBoxProps['display'];
  /**
   * The vertical size of the element in standard layouts (height in left-to-right or right-to-left writing modes).
   *
   * Block size adjusts based on the writing direction: in horizontal layouts, it controls the height;
   * in vertical layouts, it controls the width. This ensures consistent behavior across different text directions.
   *
   * Learn more about [block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).
   *
   * @default 'auto'
   */
  blockSize: SizeUnitsOrAuto;
  /**
   * The minimum height in horizontal writing modes, or minimum width in vertical writing modes.
   * Prevents the element from shrinking below this size.
   *
   * Learn more about [min-block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size).
   *
   * @default '0'
   */
  minBlockSize: SizeUnits;
  /**
   * The maximum height in horizontal writing modes, or maximum width in vertical writing modes.
   * Prevents the element from growing beyond this size.
   *
   * Learn more about [max-block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size).
   *
   * @default 'none'
   */
  maxBlockSize: SizeUnitsOrNone;
  /**
   * The width in horizontal writing modes, or height in vertical writing modes.
   * Use this for flow-relative sizing that adapts to text direction. Learn more about [inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).
   *
   * @default 'auto'
   */
  inlineSize: SizeUnitsOrAuto;
  /**
   * The minimum width in horizontal writing modes, or minimum height in vertical writing modes.
   * Prevents the element from shrinking below this size.
   *
   * Learn more about [min-inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size).
   *
   * @default '0'
   */
  minInlineSize: SizeUnits;
  /**
   * The maximum width in horizontal writing modes, or maximum height in vertical writing modes.
   * Prevents the element from growing beyond this size.
   *
   * Learn more about [max-inline-size](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size).
   *
   * @default 'none'
   */
  maxInlineSize: SizeUnitsOrNone;
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
  /**
   * A border applied using shorthand syntax to specify width, color, and style in a single property.
   */
  accessor border: BoxProps['border'];
  /**
   * The thickness of the border on all sides. When set, this overrides the width value specified in the `border` property.
   */
  accessor borderWidth: BoxProps['borderWidth'];
  /**
   * The visual style of the border on all sides, such as solid, dashed, or dotted. When set, this overrides the style value specified in the `border` property.
   */
  accessor borderStyle: BoxProps['borderStyle'];
  /**
   * The color of the border using the design system's color scale. When set, this overrides the color value specified in the `border` property.
   */
  accessor borderColor: BoxProps['borderColor'];
  /**
   * The roundedness of the element's corners using the design system's radius scale.
   */
  accessor borderRadius: BoxProps['borderRadius'];
  accessor accessibilityLabel: BoxProps['accessibilityLabel'];
  accessor accessibilityVisibility: BoxProps['accessibilityVisibility'];
  accessor display: BoxProps['display'];
}

/**
 * Configure the following properties on the box component.
 * @publicDocs
 */
declare class Box extends BoxElement implements BoxProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$W]: Box;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$W]: BoxJSXProps & PreactBaseElementPropsWithChildren<Box>;
    }
  }
}

declare const tagName$W = 's-box';
export interface BoxJSXProps
  extends Partial<BoxProps>,
    Pick<BoxProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the box component, which serves as a flexible container for organizing and styling other components.
   */
  children?: ComponentChildren;
}

/**
 * Represents button props that are specific to button-type elements only.
 * Extracts the subset of `ButtonProps` that includes the `type` property.
 * @publicDocs
 */
export type ButtonOnlyProps = Extract<
  ButtonProps$1,
  {
    type?: unknown;
  }
>;
/**
 * Represents the base button props with all properties marked as required.
 * @publicDocs
 */
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
  >
>;
export interface ButtonProps extends ButtonBaseProps {
  tone: Extract<ButtonProps$1['tone'], 'neutral' | 'critical' | 'auto'>;
  icon: IconProps['type'];
}

export interface PreactOverlayControlProps
  extends Pick<InteractionProps, 'commandFor' | 'interestFor'> {
  /**
   * The action that [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this component is activated.
   *
   * - `--auto`: A default action for the target component.
   * - `--show`: Shows the target component.
   * - `--hide`: Hides the target component.
   * - `--toggle`: Toggles the visibility of the target component.
   *
   * @default '--auto'
   */
  command: Extract<
    InteractionProps['command'],
    '--show' | '--hide' | '--toggle' | '--auto'
  >;
  /**
   * The component that [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this component is activated.
   */
  commandFor: Extract<InteractionProps['commandFor'], string>;
  /**
   * The ID of the component to show when users hover over or focus on this component. Use this to connect interactive components to popovers or tooltips that provide additional context or information.
   */
  interestFor: Extract<InteractionProps['interestFor'], string>;
}

declare const Button_base: (abstract new (
  args_0: RenderImpl,
) => PreactCustomElement & PreactOverlayControlProps) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;
/**
 * Configure the following properties on the button component.
 * @publicDocs
 */
declare class Button extends Button_base implements ButtonProps {
  accessor disabled: ButtonProps['disabled'];
  accessor icon: ButtonProps['icon'];
  accessor loading: ButtonProps['loading'];
  accessor variant: ButtonProps['variant'];
  accessor tone: ButtonProps['tone'];
  accessor target: ButtonProps['target'];
  accessor href: ButtonProps['href'];
  accessor download: ButtonProps['download'];
  accessor type: ButtonProps['type'];
  accessor accessibilityLabel: ButtonProps['accessibilityLabel'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$V]: Button;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$V]: ButtonJSXProps & PreactBaseElementPropsWithChildren<Button>;
    }
  }
}

declare const tagName$V = 's-button';
export interface ButtonJSXProps
  extends Partial<ButtonProps>,
    Pick<ButtonProps$1, 'id' | 'children'> {
  /**
   * The label text or elements displayed inside the button component, describing the action that will be performed when clicked.
   */
  children?: ComponentChildren;
  /**
   * A callback fired when the button is clicked.
   */
  onClick?: ((event: CallbackEvent<typeof tagName$V>) => void) | null;
  /**
   * A callback fired when the button receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$V>) => void) | null;
  /**
   * A callback fired when the button loses focus.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$V>) => void) | null;
}

export interface ButtonGroupProps
  extends Required<Pick<ButtonGroupProps$1, 'gap' | 'accessibilityLabel'>> {}

/**
 * Configure the following properties on the button group component.
 * @publicDocs
 */
declare class ButtonGroup
  extends PreactCustomElement
  implements ButtonGroupProps
{
  accessor gap: ButtonGroupProps['gap'];
  accessor accessibilityLabel: ButtonGroupProps['accessibilityLabel'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$U]: ButtonGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$U]: Omit<
        ButtonGroupJSXProps,
        'primaryAction' | 'secondaryActions'
      > &
        PreactBaseElementPropsWithChildren<ButtonGroup>;
    }
  }
}

declare const tagName$U = 's-button-group';
export interface ButtonGroupJSXProps
  extends Partial<ButtonGroupProps>,
    Pick<ButtonGroupProps$1, 'id' | 'children'> {
  /**
   * The buttons displayed within the button group component, which are arranged together as a cohesive set of related actions.
   */
  children?: ComponentChildren;
  /**
   * The main action for this group, displayed with high visual emphasis.
   * Accepts a single button with `variant="primary"`.
   *
   * Use this for the primary action you want users to take. This can't be used when `gap="none"`.
   */
  primaryAction?: ComponentChildren;
  /**
   * Supporting actions displayed with less emphasis than the primary action.
   * Accepts one or more button components with `variant="secondary"` or `variant="auto"`.
   *
   * Use these for alternative or less critical actions.
   */
  secondaryActions?: ComponentChildren;
}

declare const internals$4: unique symbol;
/**
 * Represents the essential input props required for Preact-based input elements.
 * Includes properties like `disabled`, `id`, `name`, and `value`.
 * @publicDocs
 */
export type PreactInputProps = Required<
  Pick<TextFieldProps$1, 'disabled' | 'id' | 'name' | 'value'>
>;
declare class PreactInputElement
  extends PreactCustomElement
  implements PreactInputProps
{
  static formAssociated: boolean;
  /** @private */
  [internals$4]: ElementInternals;
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
  /**
   * The value used in form data when the checkbox is checked.
   */
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
  static get observedAttributes(): string[];
  constructor(renderImpl: RenderImpl);
}

export interface CheckboxProps extends PreactCheckboxProps {
  /**
   * Whether the checkbox displays in an indeterminate state (neither checked nor unchecked),
   * typically used to indicate partial selection in hierarchical lists.
   *
   * This visual state takes priority over the `checked` prop in appearance only.
   * The form submission value is still determined by the `checked` prop.
   *
   * If `indeterminate` has not been explicitly set and hasn't been modified by user interaction,
   * it returns the value of `defaultIndeterminate`.
   */
  indeterminate: Required<CheckboxProps$1>['indeterminate'];
  /**
   * The initial indeterminate state for uncontrolled components. Use this when you want the checkbox to start
   * in an indeterminate state but don't need to control it afterward.
   *
   * This value applies until `indeterminate` is explicitly set or the user changes the checkbox state by clicking.
   *
   * @default false
   */
  defaultIndeterminate: Required<CheckboxProps$1>['defaultIndeterminate'];
}

/**
 * Configure the following properties on the checkbox component.
 * @publicDocs
 */
declare class Checkbox extends PreactCheckboxElement implements CheckboxProps {
  get indeterminate(): CheckboxProps['indeterminate'];
  set indeterminate(indeterminate: CheckboxProps['indeterminate']);
  accessor defaultIndeterminate: CheckboxProps['defaultIndeterminate'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$T]: Checkbox;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$T]: CheckboxJSXProps & PreactBaseElementProps<Checkbox>;
    }
  }
}

declare const tagName$T = 's-checkbox';
export interface CheckboxJSXProps
  extends Partial<CheckboxProps>,
    Pick<CheckboxProps$1, 'id'> {
  /**
   * A callback fired when the checkbox state changes and the user has finished interacting with it.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$T>) => void) | null;
  /**
   * A callback fired when the checkbox state changes, including intermediate states during user interaction.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$T>) => void) | null;
}

export interface ChipProps
  extends Required<Pick<ChipProps$2, 'color' | 'accessibilityLabel'>> {}

/**
 * Configure the following properties on the chip component.
 * @publicDocs
 */
declare class Chip extends PreactCustomElement implements ChipProps {
  accessor color: ChipProps['color'];
  accessor accessibilityLabel: ChipProps['accessibilityLabel'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$S]: Chip;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$S]: Omit<ChipJSXProps, 'graphic'> &
        PreactBaseElementPropsWithChildren<Chip>;
    }
  }
}

declare const tagName$S = 's-chip';
export interface ChipJSXProps
  extends Partial<ChipProps>,
    Pick<ChipProps$2, 'id' | 'children'> {
  /**
   * The text label displayed within the chip component, typically representing a selected filter, tag, or removable item.
   */
  children?: ComponentChildren;
  /**
   * An optional icon to display at the start of the chip. Accepts only icon components.
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

/**
 * The choice component creates individual selectable options within a choice list. Use choice to define each option that merchants can select, supporting both single selection (radio buttons) and multiple selection (checkboxes) modes.
 *
 * Choice components support labels, help text, and custom content through slots, providing flexible option presentation within choice lists.
 * @publicDocs
 */
declare class Choice extends PreactCustomElement implements ChoiceProps {
  accessor disabled: ChoiceProps['disabled'];
  get selected(): boolean;
  set selected(selected: ChoiceProps['selected']);
  accessor value: ChoiceProps['value'];
  accessor accessibilityLabel: ChoiceProps['accessibilityLabel'];
  accessor defaultSelected: ChoiceProps['defaultSelected'];
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$R]: Choice;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$R]: Omit<ChoiceJSXProps, 'details'> &
        PreactBaseElementPropsWithChildren<Choice>;
    }
  }
}

declare const tagName$R = 's-choice';
export interface ChoiceJSXProps
  extends Partial<ChoiceProps>,
    Pick<ChoiceProps$1, 'id' | 'children' | 'details'> {
  /**
   * The label that identifies this selectable choice option to users.
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
declare class BaseClass$3 extends PreactCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals$3]: ElementInternals;
}
/**
 * Configure the following properties on the choice list component.
 * @publicDocs
 */
declare class ChoiceList extends BaseClass$3 implements ChoiceListProps {
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
    [tagName$Q]: ChoiceList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$Q]: ChoiceListJSXProps &
        PreactBaseElementPropsWithChildren<ChoiceList>;
    }
  }
}

declare const tagName$Q = 's-choice-list';
export interface ChoiceListJSXProps
  extends Partial<ChoiceListProps>,
    Pick<ChoiceListProps$1, 'id' | 'children'> {
  /**
   * The choices a user can select from.
   *
   * Accepts choice components.
   */
  children?: ComponentChildren;
  /**
   * A callback fired when the user has finished changing the value.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$Q>) => void) | null;
  /**
   * A callback fired when the user makes any changes to the value.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$Q>) => void) | null;
}

/**
 * Represents the base clickable props with all properties marked as required.
 * @publicDocs
 */
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
  renderImpl: RenderImpl,
) => BoxElement & PreactOverlayControlProps) &
  Pick<typeof BoxElement, 'prototype' | 'observedAttributes'>;
/**
 * Configure the following properties on the clickable component.
 * @publicDocs
 */
declare class Clickable extends Clickable_base implements ClickableProps {
  accessor disabled: ClickableProps['disabled'];
  accessor loading: ClickableProps['loading'];
  accessor target: ClickableProps['target'];
  accessor href: ClickableProps['href'];
  accessor download: ClickableProps['download'];
  accessor type: ClickableProps['type'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$P]: Clickable;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$P]: ClickableJSXProps &
        PreactBaseElementPropsWithChildren<Clickable>;
    }
  }
}

declare const tagName$P = 's-clickable';
export interface ClickableJSXProps
  extends Partial<ClickableProps>,
    Pick<ClickableProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the clickable component, which makes any content interactive and clickable without the semantic meaning of a button or link.
   */
  children?: ComponentChildren;
  /**
   * A callback fired when the chip is clicked.
   */
  onClick?: ((event: CallbackEvent<typeof tagName$P>) => void) | null;
  /**
   * A callback fired when the chip receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$P>) => void) | null;
  /**
   * A callback fired when the chip loses focus.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$P>) => void) | null;
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
  args_0: RenderImpl,
) => PreactCustomElement & PreactOverlayControlProps) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;
/**
 * Configure the following properties on the clickable chip component.
 * @publicDocs
 */
declare class ClickableChip
  extends ClickableChip_base
  implements ClickableChipProps
{
  accessor color: ClickableChipProps['color'];
  accessor accessibilityLabel: ClickableChipProps['accessibilityLabel'];
  accessor removable: ClickableChipProps['removable'];
  accessor hidden: ClickableChipProps['hidden'];
  accessor disabled: ClickableChipProps['disabled'];
  accessor href: ClickableChipProps['href'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$O]: ClickableChip;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$O]: Omit<ClickableChipJSXProps, 'graphic'> &
        PreactBaseElementPropsWithChildren<ClickableChip>;
    }
  }
}

declare const tagName$O = 's-clickable-chip';
export interface ClickableChipJSXProps
  extends Partial<ClickableChipProps>,
    Pick<ClickableChipProps$1, 'id' | 'children'> {
  /**
   * The text label displayed within the chip, which represents an interactive filter, tag, or selectable item.
   */
  children?: ComponentChildren;
  /**
   * An optional icon to display at the start of the chip. Accepts only icon components.
   */
  graphic?: ComponentChildren;
  /**
   * A callback fired when the chip is clicked.
   */
  onClick?: ((event: CallbackEvent<typeof tagName$O>) => void) | null;
  /**
   * A callback fired when the user clicks the remove button on the chip.
   */
  onRemove?: ((event: CallbackEvent<typeof tagName$O>) => void) | null;
  /**
   * A callback fired when the chip is completely hidden, after any hide animations have completed.
   */
  onAfterHide?: ((event: CallbackEvent<typeof tagName$O>) => void) | null;
}

/**
 * Represents the props for Preact-based form field components with autocomplete support.
 * The generic type parameter allows specifying the valid autocomplete values for the field.
 * @publicDocs
 */
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
       * Controls browser autofill behavior for the field.
       *
       * Basic values:
       * - `on` - Enables autofill without specifying content type (default)
       * - `off` - Disables autofill for sensitive data or one-time codes
       *
       * Specific field values describe the expected data type. You can optionally prefix these with:
       * - `section-${string}` - Scopes autofill to a specific form section (when multiple forms exist on the same page)
       * - `shipping` or `billing` - Indicates whether the data is for shipping or billing purposes
       * - Both section and group (for example, `section-primary shipping email`)
       *
       * Providing a specific autofill token helps browsers suggest more relevant saved data.
       *
       * Learn more about the set of [autocomplete values](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-detail-tokens) supported in browsers.
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
   * Whether the shadow tree contains a focused input (input, textarea, select, <x contentEditable>).
   *
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

/**
 * Represents the props for color input field components.
 * Extends `PreactFieldProps` with autocomplete support for color-related fields.
 * @publicDocs
 */
export type ColorFieldProps = Omit<
  PreactFieldProps<Required<ColorFieldProps$1>['autocomplete']>,
  'value' | 'defaultValue'
> &
  Required<Pick<ColorFieldProps$1, 'alpha' | 'value' | 'defaultValue'>>;

/**
 * Configure the following properties on the color field component.
 * @publicDocs
 */
declare class ColorField
  extends PreactFieldElement<ColorFieldProps['autocomplete']>
  implements ColorFieldProps
{
  accessor alpha: ColorFieldProps['alpha'];
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
    [tagName$N]: ColorField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$N]: ColorFieldJSXProps & PreactBaseElementProps<ColorField>;
    }
  }
}

declare const tagName$N = 's-color-field';
export interface ColorFieldJSXProps
  extends Partial<
      Omit<ColorFieldProps, 'accessory' | 'value' | 'defaultValue'>
    >,
    Pick<ColorFieldProps$1, 'id' | 'alpha' | 'value' | 'defaultValue'>,
    FieldReactProps<typeof tagName$N> {
  onInput?: (event: CallbackEvent<typeof tagName$N>) => void;
  onChange?: (event: CallbackEvent<typeof tagName$N>) => void;
}

export interface ColorPickerProps
  extends Required<
    Pick<ColorPickerProps$1, 'id' | 'alpha' | 'value' | 'defaultValue' | 'name'>
  > {}

declare const internals$2: unique symbol;
declare class BaseClass$2 extends PreactCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals$2]: ElementInternals;
}
/**
 * Configure the following properties on the color picker component.
 * @publicDocs
 */
declare class ColorPicker extends BaseClass$2 implements ColorPickerProps {
  accessor alpha: boolean;
  accessor name: string;
  accessor defaultValue: string;
  get value(): string;
  set value(value: string);
  /**
   * A callback that fires when the containing form is reset (using the form's `reset()` method or a reset button). When triggered, the component's `value` reverts to its `defaultValue`.
   */
  formResetCallback(): void;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$M]: ColorPicker;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$M]: ColorPickerJSXProps & PreactBaseElementProps<ColorPicker>;
    }
  }
}

declare const tagName$M = 's-color-picker';
export interface ColorPickerJSXProps
  extends Partial<ColorPickerProps>,
    Pick<
      ColorPickerProps$1,
      'id' | 'alpha' | 'value' | 'defaultValue' | 'name'
    > {
  onInput?: (event: CallbackEvent<typeof tagName$M>) => void | null;
  onChange?: (event: CallbackEvent<typeof tagName$M>) => void | null;
}

export interface DateFieldProps
  extends Omit<
      PreactFieldProps<DateAutocompleteField>,
      'value' | 'defaultValue'
    >,
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

/**
 * Configure the following properties on the date field component.
 * @publicDocs
 */
declare class DateField
  extends PreactFieldElement<DateFieldProps['autocomplete']>
  implements DateFieldProps
{
  accessor allow: DateFieldProps['allow'];
  accessor disallow: DateFieldProps['disallow'];
  accessor allowDays: DateFieldProps['allowDays'];
  accessor disallowDays: DateFieldProps['disallowDays'];
  set view(view: string);
  get view(): string;
  accessor defaultView: DateFieldProps['defaultView'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$L]: DateField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$L]: DateFieldJSXProps & PreactBaseElementProps<DateField>;
    }
  }
}

declare const tagName$L = 's-date-field';
export interface DateFieldJSXProps
  extends Partial<Omit<DateFieldProps, 'value' | 'defaultValue'>>,
    Pick<DateFieldProps$1, 'id' | 'value' | 'defaultValue'> {
  /**
   * A callback fired when the date field loses focus.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$L>) => void) | null;
  /**
   * A callback fired when the user has finished editing the date and the field value changes.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$L>) => void) | null;
  /**
   * A callback fired when the date field receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$L>) => void) | null;
  /**
   * A callback fired when the user makes any changes to the date value.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$L>) => void) | null;
  /**
   * A callback fired when the field contains an invalid date.
   */
  onInvalid?: ((event: CallbackEvent<typeof tagName$L>) => void) | null;
  /**
   * A callback fired when the calendar view changes, such as when navigating between months.
   */
  onViewChange?: ((event: CallbackEvent<typeof tagName$L>) => void) | null;
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
  /**
   * The type of date selection allowed.
   *
   * - `single`: Select a single date
   * - `range`: Select a date range
   *
   * @default "single"
   */
  type: Extract<DatePickerProps$1['type'], 'single' | 'range'>;
}

declare const internals$1: unique symbol;
declare const dirtyStateSymbol: unique symbol;
declare class BaseClass$1 extends PreactCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals$1]: ElementInternals;
}
/**
 * Configure the following properties on the date picker component.
 * @publicDocs
 */
declare class DatePicker extends BaseClass$1 implements DatePickerProps {
  accessor defaultView: string;
  set view(view: string);
  get view(): string;
  accessor allow: DatePickerProps['allow'];
  accessor disallow: DatePickerProps['disallow'];
  accessor allowDays: DatePickerProps['allowDays'];
  accessor disallowDays: DatePickerProps['disallowDays'];
  accessor type: DatePickerProps['type'];
  accessor defaultValue: DatePickerProps['defaultValue'];
  accessor name: DatePickerProps['name'];
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
    [tagName$K]: DatePicker;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$K]: DatePickerJSXProps & PreactBaseElementProps<DatePicker>;
    }
  }
}

declare const tagName$K = 's-date-picker';
export interface DatePickerJSXProps
  extends Partial<DatePickerProps>,
    Pick<DatePickerProps$1, 'id'> {
  /**
   * A callback fired when the calendar view changes, such as when navigating between months.
   */
  onViewChange?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
  /**
   * A callback fired when the date picker receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
  /**
   * A callback fired when the date picker loses focus.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
  /**
   * A callback fired when the user makes any changes to the selected date.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
  /**
   * A callback fired when the user has finished selecting a date and the value changes.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$K>) => void) | null;
}

export interface DividerProps
  extends Pick<DividerProps$1, 'direction' | 'color'> {
  direction: Extract<DividerProps$1['direction'], 'inline' | 'block'>;
  color: Extract<DividerProps$1['color'], 'base' | 'strong'>;
}

/**
 * Configure the following properties on the divider component.
 * @publicDocs
 */
declare class Divider extends PreactCustomElement implements DividerProps {
  accessor direction: DividerProps['direction'];
  accessor color: DividerProps['color'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$J]: Divider;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$J]: DividerJSXProps & PreactBaseElementProps<Divider>;
    }
  }
}

declare const tagName$J = 's-divider';
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

/**
 * A utility type that replaces occurrences of one type with another within a union type.
 * Useful for type transformations where you need to swap out specific types.
 * @publicDocs
 */
export type ReplaceType<TType, TFrom, TTo> = Exclude<TType, TFrom> | TTo;

declare const setFiles: unique symbol;

declare const internals: unique symbol;
declare const getFileInput: unique symbol;
declare class BaseClass extends PreactCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals]: ElementInternals;
}
/**
 * Configure the following properties on the drop zone component.
 * @publicDocs
 */
declare class DropZone extends BaseClass implements DropZoneProps {
  accessor accept: DropZoneProps['accept'];
  accessor accessibilityLabel: DropZoneProps['accessibilityLabel'];
  accessor disabled: DropZoneProps['disabled'];
  accessor error: DropZoneProps['error'];
  accessor label: DropZoneProps['label'];
  accessor labelAccessibilityVisibility: DropZoneProps['labelAccessibilityVisibility'];
  accessor multiple: DropZoneProps['multiple'];
  accessor name: DropZoneProps['name'];
  accessor required: DropZoneProps['required'];
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
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$I]: DropZone;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$I]: DropZoneJSXProps &
        PreactBaseElementPropsWithChildren<DropZone>;
    }
  }
}

declare const tagName$I = 's-drop-zone';
export interface DropZoneJSXProps
  extends Partial<DropZoneProps>,
    Pick<DropZoneProps$1, 'id'> {
  /**
   * The content to include inside the drop zone container
   */
  children?: ComponentChildren;
  /**
   * A callback fired when the user has finished selecting files and the value changes.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$I>) => void) | null;
  /**
   * A callback fired when files are selected or dropped.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$I>) => void) | null;
  /**
   * A callback fired when a dropped file is rejected due to file type or size restrictions.
   */
  onDropRejected?: ((event: CallbackEvent<typeof tagName$I>) => void) | null;
}

/**
 * Represents the props for email input field components.
 * Extends `PreactFieldProps` with autocomplete support for email-related fields.
 * @publicDocs
 */
export type EmailFieldProps = PreactFieldProps<
  Required<EmailFieldProps$1>['autocomplete']
> &
  Required<Pick<EmailFieldProps$1, 'maxLength' | 'minLength'>>;

/**
 * Configure the following properties on the email field component.
 * @publicDocs
 */
declare class EmailField
  extends PreactFieldElement<EmailFieldProps['autocomplete']>
  implements EmailFieldProps
{
  accessor autocomplete: EmailFieldProps['autocomplete'];
  accessor maxLength: EmailFieldProps['maxLength'];
  accessor minLength: EmailFieldProps['minLength'];
  /**
   * The current email address value in the field. When setting this property programmatically, it updates the field's display value. When reading it, you get the user's current input. The field validates this value as an email address format when the user finishes editing.
   */
  get value(): string;
  set value(value: string);
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$H]: EmailField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$H]: EmailFieldJSXProps & PreactBaseElementProps<EmailField>;
    }
  }
}

declare const tagName$H = 's-email-field';
export interface EmailFieldJSXProps
  extends Partial<Omit<EmailFieldProps, 'accessory'>>,
    Pick<EmailFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$H> {}

/**
 * Represents the grid component props with all properties marked as required.
 * @publicDocs
 */
export type RequiredAlignedProps = Required<GridProps$1>;
/**
 * Represents grid props with responsive capabilities for layout properties.
 *
 * This enables conditional styling based on container queries.
 * @publicDocs
 */
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
   * Aligns the grid along the block axis. This overrides the block value of `placeContent`.
   *
   * @default '' - meaning no override
   */
  alignContent: AlignContentKeyword | '';
  /**
   * Aligns the grid along the inline axis. This overrides the inline value of `placeContent`.
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
   * Adjusts spacing between elements.
   *
   * Accepts:
   * - A single [`SpacingKeyword`](/docs/api/polaris/using-web-components#scale) value applied to both axes, such as `large-100`
   * - A pair of values, such as `large-100 large-500`, to set the inline and block axes respectively
   * - A [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported SpacingKeyword as a query value
   *
   * @default 'none'
   */
  gap: ResponsiveGridProps['gap'];
  /**
   * s spacing between elements in the block axis. This overrides the row value of `gap`.
   *
   * Accepts:
   * - A single [`SpacingKeyword`](/docs/api/polaris/using-web-components#scale) value, such as `large-100`
   * - A [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported SpacingKeyword as a query value
   *
   * @default '' - meaning no override
   */
  rowGap: ResponsiveGridProps['rowGap'];
  /**
   * Adjusts spacing between elements in the inline axis. This overrides the column value of `gap`.
   *
   * Accepts:
   * - A single [`SpacingKeyword`](/docs/api/polaris/using-web-components#scale) value, such as `large-100`
   * - A [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported SpacingKeyword as a query value
   *
   * @default '' - meaning no override
   */
  columnGap: ResponsiveGridProps['columnGap'];
  /**
   * The columns in the grid and their sizes.
   *
   * Accepts:
   * - [Track sizing values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#fixed_and_flexible_track_sizes), such as `1fr auto`
   * - A [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported track sizing values as a query value
   *
   * @default 'none'
   */
  gridTemplateColumns: ResponsiveGridProps['gridTemplateColumns'];
  /**
   * The rows in the grid and their sizes.
   *
   * Accepts:
   * - [Track sizing values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#fixed_and_flexible_track_sizes), such as `1fr auto`
   * - A [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported track sizing values as a query value
   *
   * @default 'none'
   */
  gridTemplateRows: ResponsiveGridProps['gridTemplateRows'];
}

/**
 * Configure the following properties on the grid component.
 * @publicDocs
 */
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
    [tagName$G]: Grid;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$G]: GridJSXProps & PreactBaseElementPropsWithChildren<Grid>;
    }
  }
}

declare const tagName$G = 's-grid';
export interface GridJSXProps
  extends Partial<GridProps>,
    Pick<GridProps$1, 'id' | 'children'> {
  /**
   * The child elements displayed within the grid component, which are arranged in a flexible grid layout with configurable columns, rows, and spacing.
   */
  children?: ComponentChildren;
}

/**
 * Represents the grid item component props with all properties marked as required.
 * @publicDocs
 */
export type RequiredGridItemProps = Required<GridItemProps$1>;
export interface GridItemProps
  extends BoxProps,
    Required<Pick<GridItemProps$1, 'gridColumn' | 'gridRow'>> {
  gridColumn: RequiredGridItemProps['gridColumn'];
  gridRow: RequiredGridItemProps['gridRow'];
}

/**
 * The grid item component represents a single cell within a grid layout, allowing you to control how content is positioned and sized within the grid. Use grid item as a child of grid to specify column span, row span, and positioning for individual content areas.
 *
 * Grid item supports precise placement control through column and row properties, enabling you to create complex layouts where different items occupy varying amounts of space or appear in specific grid positions.
 * @publicDocs
 */
declare class GridItem extends BoxElement implements GridItemProps {
  accessor gridColumn: GridItemProps['gridColumn'];
  accessor gridRow: GridItemProps['gridRow'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$F]: GridItem;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$F]: GridItemJSXProps &
        PreactBaseElementPropsWithChildren<GridItem>;
    }
  }
}

declare const tagName$F = 's-grid-item';
export interface GridItemJSXProps
  extends Partial<GridItemProps>,
    Pick<GridItemProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the grid item component, which represents a single cell in the grid layout and can span multiple columns or rows.
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

/**
 * Configure the following properties on the heading component.
 * @publicDocs
 */
declare class Heading extends PreactCustomElement implements HeadingProps {
  accessor accessibilityRole: HeadingProps['accessibilityRole'];
  accessor lineClamp: HeadingProps['lineClamp'];
  accessor accessibilityVisibility: HeadingProps['accessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$E]: Heading;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$E]: HeadingJSXProps &
        PreactBaseElementPropsWithChildren<Heading>;
    }
  }
}

declare const tagName$E = 's-heading';
export interface HeadingJSXProps
  extends Partial<HeadingProps>,
    Pick<HeadingProps$1, 'id' | 'children'> {
  /**
   * The heading text displayed within the heading component, which provides a title or section header for content.
   */
  children?: ComponentChildren;
}

/**
 * Configure the following properties on the icon component.
 * @publicDocs
 */
declare class Icon extends PreactCustomElement implements IconProps {
  accessor color: IconProps['color'];
  accessor tone: IconProps['tone'];
  accessor type: IconProps['type'];
  accessor size: IconProps['size'];
  accessor interestFor: string;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$D]: Icon;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$D]: IconJSXProps & PreactBaseElementProps<Icon>;
    }
  }
}

declare const tagName$D = 's-icon';
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

/**
 * Configure the following properties on the image component.
 * @publicDocs
 */
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
  /**
   * A border applied around the image using shorthand syntax to specify width, color, and style in a single property.
   */
  accessor border: ImageProps['border'];
  /**
   * The thickness of the border around the image. When set, this overrides the width value specified in the `border` property.
   */
  accessor borderWidth: ImageProps['borderWidth'];
  /**
   * The visual style of the border around the image, such as solid, dashed, or dotted. When set, this overrides the style value specified in the `border` property.
   */
  accessor borderStyle: ImageProps['borderStyle'];
  /**
   * The color of the border around the image using the design system's color scale. When set, this overrides the color value specified in the `border` property.
   */
  accessor borderColor: ImageProps['borderColor'];
  /**
   * The roundedness of the image's corners using the design system's radius scale.
   */
  accessor borderRadius: ImageProps['borderRadius'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$C]: Image;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$C]: ImageJSXProps & PreactBaseElementProps<Image>;
    }
  }
}

declare const tagName$C = 's-image';
export interface ImageJSXProps
  extends Partial<ImageProps>,
    Pick<ImageProps$1, 'id'> {
  /**
   * A callback fired when the image fails to load.
   */
  onError?: ((event: CallbackEvent<typeof tagName$C>) => void) | null;
  /**
   * A callback fired when the image loads successfully.
   */
  onLoad?: ((event: CallbackEvent<typeof tagName$C>) => void) | null;
}

/**
 * Represents the link component props with all properties marked as required.
 * @publicDocs
 */
export type RequiredLinkProps = Required<LinkProps$1>;
/**
 * Represents the base link props with all core properties marked as required.
 * @publicDocs
 */
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

declare const Link_base: (abstract new (
  args_0: RenderImpl,
) => PreactCustomElement & PreactOverlayControlProps) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;
/**
 * Configure the following properties on the link component.
 * @publicDocs
 */
declare class Link extends Link_base implements LinkProps {
  accessor tone: LinkProps['tone'];
  accessor accessibilityLabel: LinkProps['accessibilityLabel'];
  accessor href: LinkProps['href'];
  accessor target: LinkProps['target'];
  accessor download: LinkProps['download'];
  accessor lang: LinkProps['lang'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$B]: Link;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$B]: LinkJSXProps & PreactBaseElementPropsWithChildren<Link>;
    }
  }
}

declare const tagName$B = 's-link';
export interface LinkJSXProps
  extends Partial<LinkProps>,
    Pick<LinkProps$1, 'id' | 'lang' | 'children'> {
  /**
   * The text or elements displayed within the link component, which navigates users to a different location when activated.
   */
  children?: ComponentChildren;
  /**
   * A callback fired when the link is clicked.
   */
  onClick?: ((event: CallbackEvent<typeof tagName$B>) => void) | null;
}

export interface ListItemProps extends ListItemProps$1 {}

/**
 * The list item component represents a single entry within an ordered list or unordered list. Use list item to structure individual points, steps, or items within a list, with each item automatically receiving appropriate list markers (bullets or numbers) from its parent list.
 *
 * List item must be used as a direct child of ordered list or unordered list components. Each list item can contain text, inline formatting, or other components to create rich list content.
 * @publicDocs
 */
declare class ListItem extends PreactCustomElement implements ListItemProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$A]: ListItem;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$A]: ListItemJSXProps &
        PreactBaseElementPropsWithChildren<ListItem>;
    }
  }
}

declare const tagName$A = 's-list-item';
export interface ListItemJSXProps
  extends Partial<ListItemProps>,
    Pick<ListItemProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the list item, which represents a single entry in an ordered or unordered list.
   */
  children?: ComponentChildren;
}

export interface MenuProps
  extends Required<Pick<MenuProps$1, 'id' | 'accessibilityLabel'>> {}

/**
 * Shared symbols for overlay control functionality.
 * These symbols are used by components that implement overlay behavior
 * (like popover, tooltip, or modal) to communicate with the overlay control system.
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
/**
 * Represents the initialization object for creating a polyfill command event.
 * Used for overlay control commands in environments that require polyfills.
 * @publicDocs
 */
export type PolyfillCommandEventInit = EventInit & {
  source: HTMLElement | null | undefined;
  command: PreactOverlayControlProps['command'];
};
/**
 * Represents a polyfill command event for overlay controls.
 * Used in environments where native command events are not available.
 * @publicDocs
 */
export type PolyfillCommandEvent = Event & {
  source: PolyfillCommandEventInit['source'];
  command: PolyfillCommandEventInit['command'];
  /** Have to use `_s_shadowSource` because `source` is retargeted to the shadow host by browsers */
  _s_shadowSource: PolyfillCommandEventInit['source'];
};
declare global {
  interface GlobalEventHandlersEventMap {
    command: PolyfillCommandEvent;
  }
}

declare class PreactOverlayElement extends PreactCustomElement {
  constructor(renderImpl: RenderImpl);
  /** @private */
  [overlayHidden]: boolean;
  /** @private */
  [overlayActivator]: HTMLElement | null | undefined;
  /** @private */
  [overlayHideFrameId]?: number;
}

/**
 * Configure the following properties on the menu component.
 * @publicDocs
 */
declare class Menu extends PreactOverlayElement implements MenuProps {
  accessor accessibilityLabel: string;
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$z]: Menu;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$z]: MenuJSXProps & PreactBaseElementPropsWithChildren<Menu>;
    }
  }
}

declare const tagName$z = 's-menu';
export interface MenuJSXProps
  extends Partial<MenuProps>,
    Pick<MenuProps$1, 'id' | 'children'> {
  /**
   * The items displayed within the menu. Only accepts button and section components. Use button for individual menu actions and section to group related items.
   */
  children?: ComponentChildren;
}

/**
 * Represents the modal component props with all properties marked as required.
 * @publicDocs
 */
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
   * The size of the modal component, controlling its width and height. Larger sizes provide more space for content while smaller sizes are more compact.
   */
  size: Extract<
    ModalProps$1['size'],
    'small-100' | 'small' | 'base' | 'large' | 'large-100'
  >;
}

export interface Context<T> {
  /**
   * The default value for this context, used when no Provider is found in the component tree.
   */
  readonly defaultValue: T;
}
declare class AddedContext<T> extends EventTarget {
  constructor(defaultValue: T);
  /**
   * The current context value.
   */
  get value(): T;
  /**
   * The new context value to set, which will notify all consumers.
   */
  set value(value: T);
}

/**
 * A callback which is provided by a context requester and is called with the value satisfying the request.
 * This callback can be called multiple times by context providers as the requested value is changed.
 * @publicDocs
 */
export type ContextCallback<T> = (value: T) => void;
/**
 * An event fired by a context requester to signal it desires a named context.
 *
 * A provider should inspect the `context` property of the event to determine if it has a value that can
 * satisfy the request, calling the `callback` with the requested value if so.
 */
declare class ContextRequestEvent<T> extends Event {
  readonly context: Context<T>;
  readonly callback: ContextCallback<T>;
  constructor(context: Context<T>, callback: ContextCallback<T>);
}
declare global {
  interface HTMLElementEventMap {
    /**
     * A 'context-request' event can be emitted by any element which desires
     * a context value to be injected by an external provider.
     */
    'context-request': ContextRequestEvent<unknown>;
  }
}

declare const hasOpenChildModal: unique symbol;

declare const show: unique symbol;
declare const hide: unique symbol;
declare const isOpen: unique symbol;
declare const dialog: unique symbol;
declare const dismiss: unique symbol;
declare const focusedElement: unique symbol;
declare const onEscape: unique symbol;
declare const nestedModals: unique symbol;
declare const onBackdropClick: unique symbol;
declare const abortController: unique symbol;
declare const onChildModalChange: unique symbol;
declare const childrenRerenderObserver: unique symbol;
declare const shadowDomRerenderObserver: unique symbol;
/**
 * Configure the following properties on the modal component.
 * @publicDocs
 */
declare class Modal extends PreactOverlayElement implements ModalProps {
  accessor accessibilityLabel: ModalProps['accessibilityLabel'];
  accessor heading: ModalProps['heading'];
  accessor padding: ModalProps['padding'];
  accessor size: ModalProps['size'];
  /** @private */
  [abortController]: AbortController;
  /** @private */
  [dialog]: HTMLDialogElement | null;
  /** @private */
  [focusedElement]: HTMLElement | null;
  /** @private */
  [nestedModals]: Map<Modal, boolean>;
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
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$y]: Modal;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$y]: Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'> &
        PreactBaseElementPropsWithChildren<Modal>;
    }
  }
}

declare const tagName$y = 's-modal';
export interface ModalJSXProps
  extends Partial<ModalProps>,
    Pick<ModalProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the modal component, typically including form fields, information, or interactive elements.
   */
  children?: ComponentChildren;
  /**
   * The main action button displayed in the modal footer, representing the primary action users should take.
   *
   * Only accepts a single button component with a `variant` of `primary`. This action should align with the modal's main purpose.
   */
  primaryAction?: ComponentChildren;
  /**
   * Additional action buttons displayed in the modal footer, providing alternative or supporting actions.
   *
   * Only accepts button components with a `variant` of `secondary` or `auto`. These are visually de-emphasized to establish clear hierarchy.
   */
  secondaryActions?: ComponentChildren;
  /**
   * A callback fired immediately when the modal starts to hide.
   */
  onHide?: ((event: CallbackEvent<typeof tagName$y>) => void) | null;
  /**
   * A callback fired immediately when the modal starts to show.
   */
  onShow?: ((event: CallbackEvent<typeof tagName$y>) => void) | null;
  /**
   * A callback fired when the modal is completely hidden, after any hide animations have completed.
   */
  onAfterHide?: ((event: CallbackEvent<typeof tagName$y>) => void) | null;
  /**
   * A callback fired when the modal is completely shown, after any show animations have completed.
   */
  onAfterShow?: ((event: CallbackEvent<typeof tagName$y>) => void) | null;
}

/**
 * Represents the money field component props with all properties marked as required.
 * @publicDocs
 */
export type RequiredMoneyFieldProps = Required<MoneyFieldProps$1>;
export interface MoneyFieldProps
  extends Omit<PreactFieldProps, 'value'>,
    Pick<RequiredMoneyFieldProps, 'max' | 'min'> {
  value: Required<MoneyFieldProps$1>['value'];
}

/**
 * Configure the following properties on the money field component.
 * @publicDocs
 */
declare class MoneyField
  extends PreactFieldElement<MoneyFieldProps['autocomplete']>
  implements MoneyFieldProps
{
  accessor max: MoneyFieldProps['max'];
  accessor min: MoneyFieldProps['min'];
  /**
   * The current monetary value in the field as a string. When setting this property programmatically, it updates the field's display value. When reading it, you get the user's current input. The value should be a numeric string representing the amount in the store's currency.
   */
  get value(): string;
  set value(value: string);
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$x]: MoneyField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$x]: MoneyFieldJSXProps & PreactBaseElementProps<MoneyField>;
    }
  }
}

declare const tagName$x = 's-money-field';
export interface MoneyFieldJSXProps
  extends Partial<MoneyFieldProps>,
    FieldReactProps<typeof tagName$x>,
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

/**
 * Configure the following properties on the number field component.
 * @publicDocs
 */
declare class NumberField
  extends PreactFieldElement<NumberFieldProps['autocomplete']>
  implements NumberFieldProps
{
  /**
   * The current numeric value in the field as a string. When setting this property programmatically, it updates the field's display value. When reading it, you get the user's current input. The value should be a numeric string (decimal or integer).
   */
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
    [tagName$w]: NumberField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$w]: NumberFieldJSXProps & PreactBaseElementProps<NumberField>;
    }
  }
}

declare const tagName$w = 's-number-field';
export interface NumberFieldJSXProps
  extends Partial<NumberFieldProps>,
    Pick<NumberFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$w> {}

export interface OptionProps
  extends Required<
    Pick<OptionProps$1, 'disabled' | 'value' | 'selected' | 'defaultSelected'>
  > {}

/**
 * Represents a single option within a select component. Use only as a child of s-select components.
 * @publicDocs
 */
declare class Option extends PreactCustomElement implements OptionProps {
  accessor selected: OptionProps['selected'];
  accessor defaultSelected: OptionProps['defaultSelected'];
  accessor value: OptionProps['value'];
  accessor disabled: OptionProps['disabled'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$v]: Option;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$v]: OptionJSXProps & PreactBaseElementPropsWithChildren<Option>;
    }
  }
}

declare const tagName$v = 's-option';
export interface OptionJSXProps
  extends Partial<OptionProps>,
    Pick<OptionProps$1, 'id' | 'children'> {
  /**
   * The text or elements displayed as the option label, which identifies the selectable choice to users in a dropdown or selection list.
   */
  children?: ComponentChildren;
}

export interface OptionGroupProps
  extends Required<Pick<OptionGroupProps$1, 'disabled' | 'label'>> {}

/**
 * Represents a group of options within a select component. Use only as a child of `s-select` components.
 * @publicDocs
 */
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
    [tagName$u]: OptionGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$u]: OptionGroupJSXProps &
        PreactBaseElementPropsWithChildren<OptionGroup>;
    }
  }
}

declare const tagName$u = 's-option-group';
export interface OptionGroupJSXProps
  extends Partial<OptionGroupProps>,
    Pick<OptionGroupProps$1, 'id' | 'children'> {
  /**
   * The selectable options displayed in the dropdown list. Accepts option components for individual selectable items within this group.
   */
  children?: ComponentChildren;
}

export interface OrderedListProps extends OrderedListProps$1 {}

/**
 * Configure the following properties on the ordered list component.
 * @publicDocs
 */
declare class OrderedList
  extends PreactCustomElement
  implements OrderedListProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$t]: OrderedList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$t]: OrderedListJSXProps &
        PreactBaseElementPropsWithChildren<OrderedList>;
    }
  }
}

declare const tagName$t = 's-ordered-list';
export interface OrderedListJSXProps
  extends Partial<OrderedListProps>,
    Pick<OrderedListProps$1, 'id'> {
  /**
   * The list entries displayed within the ordered list, where each item is numbered sequentially. Only accepts list item components as children. Each list item represents a single numbered entry in the sequence.
   */
  children?: ComponentChildren;
}

export interface PageProps
  extends Required<Pick<PageProps$1, 'inlineSize' | 'heading'>> {
  inlineSize: Extract<PageProps$1['inlineSize'], 'base' | 'large' | 'small'>;
}

/**
 * Use as the outer wrapper of a page.
 * @publicDocs
 */
declare class Page extends PreactCustomElement implements PageProps {
  accessor inlineSize: PageProps['inlineSize'];
  accessor heading: PageProps['heading'];
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$s]: Page;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$s]: Omit<
        PageJSXProps,
        'aside' | 'primaryAction' | 'secondaryActions' | 'breadcrumbActions'
      > &
        PreactBaseElementPropsWithChildren<Page>;
    }
  }
}

declare const tagName$s = 's-page';
export interface PageJSXProps
  extends Partial<PageProps>,
    Pick<PageProps$1, 'id' | 'children'> {
  /**
   * The main page content displayed within the page component, which serves as the primary container for the page's information and interface elements.
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
   * Only accepts a single button component with a `variant` of `primary`.
   *
   */
  primaryAction?: ComponentChildren;
  /**
   * The secondary actions for the page.
   *
   * Only accepts button group and button components with a `variant` of `secondary` or `auto`.
   */
  secondaryActions?: ComponentChildren;
  /**
   * The navigation back actions for the page.
   *
   * Only accepts link components.
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
  /**
   * The semantic tone that's applied to the paragraph text, which changes its color to convey meaning.
   *
   * - `info`: Informational content or helpful tips (blue).
   * - `success`: Positive outcomes or successful states (green).
   * - `warning`: Important warnings about potential issues (orange).
   * - `critical`: Urgent problems or destructive actions (red).
   * - `caution`: Advisory notices that need attention (yellow).
   */
  tone: Extract<
    ParagraphProps$1['tone'],
    'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  color: Extract<ParagraphProps$1['color'], 'base' | 'subdued'>;
}

/**
 * Configure the following properties on the paragraph component.
 * @publicDocs
 */
declare class Paragraph extends PreactCustomElement implements ParagraphProps {
  accessor fontVariantNumeric: ParagraphProps['fontVariantNumeric'];
  accessor lineClamp: ParagraphProps['lineClamp'];
  /**
   * The semantic tone that's applied to the paragraph text, which changes its color to convey meaning.
   *
   * - `info`: Informational content or helpful tips (blue).
   * - `success`: Positive outcomes or successful states (green).
   * - `warning`: Important warnings about potential issues (orange).
   * - `critical`: Urgent problems or destructive actions (red).
   * - `caution`: Advisory notices that need attention (yellow).
   */
  accessor tone: ParagraphProps['tone'];

  accessor color: ParagraphProps['color'];
  accessor dir: ParagraphProps['dir'];
  accessor accessibilityVisibility: ParagraphProps['accessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$r]: Paragraph;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$r]: ParagraphJSXProps &
        PreactBaseElementPropsWithChildren<Paragraph>;
    }
  }
}

declare const tagName$r = 's-paragraph';
export interface ParagraphJSXProps
  extends Partial<ParagraphProps>,
    Pick<ParagraphProps$1, 'id' | 'children'> {
  /**
   * The paragraph text content displayed within the paragraph component, which presents a block of related text with appropriate styling.
   */
  children?: ComponentChildren;
}

/**
 * Represents the props for password input field components.
 * Extends `PreactFieldProps` with autocomplete support for password-related fields.
 * @publicDocs
 */
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

/**
 * Configure the following properties on the password field component.
 * @publicDocs
 */
declare class PasswordField
  extends PreactFieldElement<PasswordFieldProps['autocomplete']>
  implements PasswordFieldProps
{
  accessor maxLength: PasswordFieldProps['maxLength'];
  accessor minLength: PasswordFieldProps['minLength'];
  /**
   * The current password value in the field as a string. When setting this property programmatically, it updates the field's display value. When reading it, you get the user's current input. The value is masked in the UI for security.
   */
  get value(): string;
  set value(value: string);
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$q]: PasswordField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$q]: PasswordFieldJSXProps &
        PreactBaseElementProps<PasswordField>;
    }
  }
}

declare const tagName$q = 's-password-field';
export interface PasswordFieldJSXProps
  extends Partial<PasswordFieldProps>,
    Pick<PasswordFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$q> {}

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
  accessor blockSize: BoxProps['blockSize'];
  accessor minBlockSize: BoxProps['minBlockSize'];
  accessor maxBlockSize: BoxProps['maxBlockSize'];
  accessor inlineSize: BoxProps['inlineSize'];
  accessor minInlineSize: BoxProps['minInlineSize'];
  accessor maxInlineSize: BoxProps['maxInlineSize'];
}

/**
 * Configure the following properties on the popover component.
 * @publicDocs
 */
declare class Popover
  extends PreactPopoverElement<typeof tagName$p>
  implements PopoverProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$p]: Popover;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$p]: PopoverJSXProps &
        PreactBaseElementPropsWithChildren<Popover>;
    }
  }
}

declare const tagName$p = 's-popover';
export interface PopoverJSXProps
  extends Partial<PopoverProps>,
    Pick<PopoverProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the popover component, which appears in an overlay positioned relative to its trigger element.
   */
  children?: ComponentChildren;
  /**
   * A callback fired immediately when the popover starts to hide.
   */
  onHide?: (event: CallbackEvent<typeof tagName$p>) => void | null;
  /**
   * A callback fired immediately when the popover starts to show.
   */
  onShow?: (event: CallbackEvent<typeof tagName$p>) => void | null;
  /**
   * A callback fired when the popover is completely hidden, after any hide animations have completed.
   */
  onAfterHide?: (event: CallbackEvent<typeof tagName$p>) => void | null;
  /**
   * A callback fired when the popover is completely shown, after any show animations have completed.
   */
  onAfterShow?: (event: CallbackEvent<typeof tagName$p>) => void | null;
  /**
   * A callback fired immediately when the popover state changes, before any animations.
   */
  onToggle?: (event: CallbackToggleEvent<typeof tagName$p>) => void | null;
  /**
   * A callback fired when the popover state changes, after any toggle animations have finished.
   */
  onAfterToggle?: (event: CallbackToggleEvent<typeof tagName$p>) => void | null;
}

export interface QueryContainerProps
  extends Required<Pick<QueryContainerProps$1, 'id' | 'containerName'>> {}

/**
 * Configure the following properties on the query container component.
 * @publicDocs
 */
declare class QueryContainer
  extends PreactCustomElement
  implements QueryContainerProps
{
  accessor containerName: QueryContainerProps['containerName'];
  /** @private */
  static globalStylesApplied: boolean;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$o]: QueryContainer;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$o]: QueryContainerJSXProps &
        PreactBaseElementPropsWithChildren<QueryContainer>;
    }
  }
}

declare const tagName$o = 's-query-container';
export interface QueryContainerJSXProps
  extends Partial<QueryContainerProps$1>,
    Pick<QueryContainerProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the query container component, which enables container queries for responsive styling based on the container's size rather than the viewport.
   */
  children?: ComponentChildren;
}

/**
 * Represents the props for search input field components.
 * Extends `PreactFieldProps` for search-specific functionality.
 * @publicDocs
 */
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

/**
 * Configure the following properties on the search field component.
 * @publicDocs
 */
declare class SearchField
  extends PreactFieldElement<SearchFieldProps['autocomplete']>
  implements SearchFieldProps
{
  accessor maxLength: SearchFieldProps['maxLength'];
  accessor minLength: SearchFieldProps['minLength'];
  /**
   * The current search query value in the field as a string. When setting this property programmatically, it updates the field's display value. When reading it, you get the user's current input.
   */
  get value(): string;
  set value(value: string);
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

/**
 * Represents the section component props with all properties marked as required.
 * @publicDocs
 */
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

/**
 * Configure the following properties on the section component.
 * @publicDocs
 */
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
   * The content displayed within the section component, which groups related elements together in a logical unit with an optional heading.
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

/**
 * Configure the following properties on the select component.
 * @publicDocs
 */
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
  /**
   * A lifecycle callback that fires when the component is removed from the DOM. Performs cleanup operations.
   * @private
   */
  disconnectedCallback(): void;
  constructor();
  /**
   * A flag used to determine if no value or defaultValue was set, in which case the first non-disabled option was used.
   *
   * This is important because we need to use the placeholder in these situations, even though the first value will be submitted as part of the form.
   * @private
   */
  [usedFirstOptionSymbol]: boolean;
  /**
   * @private
   */
  [hasInitialValueSymbol]: boolean;
  /**
   * The value of the currently selected option. When setting this property programmatically, it updates which option appears selected in the dropdown. When reading it, you get the `value` attribute of the currently selected option component.
   */
  get value(): string;
  set value(value: string);
  /** @private */
  formResetCallback(): void;
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
   * The selectable options displayed in the dropdown list. Accepts option components for individual selectable items, and option group components to organize related options into logical groups with labels.
   */
  children?: ComponentChildren;
  onChange?: (event: CallbackEvent<typeof tagName$l>) => void;
  onInput?: (event: CallbackEvent<typeof tagName$l>) => void;
  onBlur?: (event: CallbackEvent<typeof tagName$l>) => void;
  onFocus?: (event: CallbackEvent<typeof tagName$l>) => void;
}

export interface SpinnerProps
  extends Required<Pick<SpinnerProps$1, 'accessibilityLabel'>> {
  /**
   * The size of the loading spinner.
   *
   * - `base`: Default size suitable for inline loading indicators or standard UI contexts.
   * - `large`: Larger spinner for more prominent loading states.
   * - `large-100`: Extra large spinner for full-page or emphasized loading states.
   */
  size: Extract<SpinnerProps$1['size'], 'large' | 'large-100' | 'base'>;
}

/**
 * Configure the following properties on the spinner component.
 * @publicDocs
 */
declare class Spinner extends PreactCustomElement implements SpinnerProps {
  accessor accessibilityLabel: string;
  accessor size: SpinnerProps['size'];
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

/**
 * Represents the stack component props with all properties marked as required.
 * @publicDocs
 */
export type AlignedStackProps = Required<StackProps$1>;
/**
 * Represents stack props with responsive capabilities for layout properties.
 *
 * This enables conditional styling based on container queries.
 * @publicDocs
 */
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
   * Controls the distribution of children along the inline axis (horizontally in horizontal writing modes).
   *
   * Use this to position items along the primary axis of the stack - horizontally for inline stacks or vertically for block stacks when wrapped into multiple lines.
   *
   * @default 'normal'
   */
  justifyContent: JustifyContentKeyword;
  /**
   * Controls the alignment of children along the block axis (vertically in horizontal writing modes).
   *
   * Use this to align items perpendicular to the stack direction - vertically for inline stacks or horizontally for block stacks.
   *
   * @default 'normal'
   */
  alignItems: AlignItemsKeyword;
  /**
   * Controls the distribution of lines along the block axis when content wraps into multiple lines.
   *
   * This property only affects stacks with wrapping content. For single-line stacks, use `alignItems` instead.
   *
   * @default 'normal'
   */
  alignContent: AlignContentKeyword;
  /**
   * Adjusts spacing between elements.
   *
   * Accepts:
   * - A single [`SpacingKeyword`](/docs/api/polaris/using-web-components#scale) value applied to both axes, such as `large-100`
   * - A pair of values, such as `large-100 large-500`, to set the inline and block axes respectively
   * - A [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported SpacingKeyword as a query value
   *
   * @default 'none'
   */
  gap: ResponsiveStackProps['gap'];
  /**
   * Adjusts spacing between elements in the block axis. This overrides the row value of `gap`.
   *
   * Accepts:
   * - A single [`SpacingKeyword`](/docs/api/polaris/using-web-components#scale) value, such as `large-100`
   * - A [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported SpacingKeyword as a query value
   *
   * @default '' - meaning no override
   */
  rowGap: ResponsiveStackProps['rowGap'];
  /**
   * Adjusts spacing between elements in the inline axis. This overrides the column value of `gap`.
   *
   * Accepts:
   * - A single [`SpacingKeyword`](/docs/api/polaris/using-web-components#scale) value, such as `large-100`
   * - A [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported SpacingKeyword as a query value
   *
   * @default '' - meaning no override
   */
  columnGap: ResponsiveStackProps['columnGap'];
  /**
   * The direction in which the stack's children are placed within the stack.
   *
   * Accepts:
   * - A single value, either `inline` or `block`
   * - A [responsive value](/docs/api/polaris/using-web-components#responsive-values) string with the supported direction values as a query value
   *
   * @default 'block'
   *
   * @implementation the content will wrap if the direction is 'inline', and not wrap if the direction is 'block'
   */
  direction: ResponsiveStackProps['direction'];
}

/**
 * Configure the following properties on the stack component.
 * @publicDocs
 */
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
   * The child elements displayed within the stack component, which are arranged vertically or horizontally with consistent spacing.
   */
  children?: ComponentChildren;
}

export interface SwitchProps
  extends PreactCheckboxProps,
    Required<Pick<SwitchProps$1, 'labelAccessibilityVisibility'>> {}

/**
 * Configure the following properties on the switch component.
 * @publicDocs
 */
declare class Switch extends PreactCheckboxElement implements SwitchProps {
  accessor labelAccessibilityVisibility: SwitchProps['labelAccessibilityVisibility'];
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
  /**
   * A callback fired when the switch state changes and the user has finished interacting with it.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$i>) => void) | null;
  /**
   * A callback fired when the switch state changes, including intermediate states during user interaction.
   */
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

/**
 * Represents the format options for table headers that control styling and alignment of column content.
 *
 * Available values:
 * - `base`: Standard format for text columns
 * - `currency`: Right-aligned format for monetary values
 * - `numeric`: Right-aligned format for numeric values
 * @publicDocs
 */
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
/**
 * Represents the actual rendered variant of a table component.
 * - `table`: Displays as a traditional table layout.
 * - `list`: Displays as a list layout.
 * @publicDocs
 */
export type ActualTableVariant = 'table' | 'list';

/**
 * Configure the following properties on the table component.
 * @publicDocs
 */
declare class Table extends PreactCustomElement implements TableProps {
  accessor variant: TableProps['variant'];
  accessor loading: TableProps['loading'];
  accessor paginate: TableProps['paginate'];
  accessor hasPreviousPage: TableProps['hasPreviousPage'];
  accessor hasNextPage: TableProps['hasNextPage'];
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
   * The table structure displayed within the table component, including table headers, rows, and cells that organize data in a grid format.
   */
  children?: ComponentChildren;
  /**
   * Additional filters to display in the table, such as search fields or other input components that allow users to narrow down the displayed data.
   */
  filters?: ComponentChildren;
}

export interface TableBodyProps extends TableBodyProps$1 {}

/**
 * The table body component represents the main content area of a table, containing the data rows. Use table body as a child of table to structure your table data, with each table row within the body representing a single record or entry.
 *
 * Table body must contain table row components, which in turn contain table cell components for the actual data values.
 * @publicDocs
 */
declare class TableBody extends PreactCustomElement implements TableBodyProps {
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
   * The rows containing the main data content of the table.
   * In the `table` variant, this represents the semantic table body. In the `list` variant, this might not have semantic meaning but still contains the data rows.
   */
  children?: ComponentChildren;
}

export interface TableCellProps extends TableCellProps$1 {}

declare const headerFormatSymbol: unique symbol;

/**
 * The table cell component represents a single data cell within a table row. Use table cell as a child of table row to display individual data values, with each cell corresponding to a column in the table.
 *
 * Table cell automatically inherits styling and alignment from its parent table structure and supports text content or other inline components.
 * @publicDocs
 */
declare class TableCell extends PreactCustomElement implements TableCellProps {
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
   * The content displayed within the table cell, which represents a single data point in the table's grid structure.
   */
  children?: ComponentChildren;
}

/**
 * The table header component represents a single column header within a table header row. Use table header as a child of table header row to define column headings and optionally enable column sorting.
 *
 * Table header provides semantic meaning for screen readers and can include sorting controls when configured. Each header corresponds to a column in the table body.
 * @publicDocs
 */
declare class TableHeader
  extends PreactCustomElement
  implements TableHeaderProps
{
  accessor listSlot: TableHeaderProps['listSlot'];
  accessor format: TableHeaderProps['format'];
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

/**
 * The table header row component represents the header row of a table, containing column headings. Use table header row as the first child of table (before table body) to define the table structure and provide column labels.
 *
 * Table header row must contain table header components for each column. These headers provide context for the data columns and can support sorting functionality.
 * @publicDocs
 */
declare class TableHeaderRow
  extends PreactCustomElement
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
   * The header cells that define the columns of the table.
   * Only accepts table header components as children, with each header representing a column and providing its label.
   */
  children?: ComponentChildren;
}

export interface TableRowProps
  extends Pick<TableRowProps$1, 'children' | 'clickDelegate'> {}

/**
 * The table row component represents a single row of data within a table body. Use table row as a child of table body to structure individual records or entries in the table.
 *
 * Table row must contain table cell components, with each cell representing a data value for the corresponding column. The number of cells should match the number of headers in the table.
 * @publicDocs
 */
declare class TableRow extends PreactCustomElement implements TableRowProps {
  constructor();
  accessor clickDelegate: string;
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
   * The data cells displayed within this table row, with each cell containing content for its corresponding column.
   * Only accepts table cell components as children.
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
  /**
   * The semantic type and styling treatment for the text content.
   *
   * Other presentation properties on text override the default styling.
   *
   * - `strong`: Emphasizes the text with strong importance, typically displayed in bold.
   * - `generic`: Standard text with no special semantic meaning or styling.
   * - `address`: Marks the text as contact information, such as a physical or email address.
   * - `redundant`: Indicates the text is redundant or duplicated information for screen reader context.
   *
   * @default 'generic'
   */
  type: Extract<
    TextProps$1['type'],
    'strong' | 'generic' | 'address' | 'redundant'
  >;
  /**
   * The semantic tone that's applied to the text, which changes its color to convey meaning.
   *
   * - `info`: Informational content or helpful tips (blue).
   * - `success`: Positive outcomes or successful states (green).
   * - `warning`: Important warnings about potential issues (orange).
   * - `critical`: Urgent problems or destructive actions (red).
   * - `auto`: Automatically determined based on context.
   * - `neutral`: General information without specific intent (gray).
   * - `caution`: Advisory notices that need attention (yellow).
   *
   * @default 'auto'
   */
  tone: Extract<
    TextProps$1['tone'],
    'info' | 'success' | 'warning' | 'critical' | 'auto' | 'neutral' | 'caution'
  >;
  fontVariantNumeric: Extract<
    TextProps$1['fontVariantNumeric'],
    'auto' | 'normal' | 'tabular-nums'
  >;
}

/**
 * Configure the following properties on the text component.
 * @publicDocs
 */
declare class Text extends PreactCustomElement implements TextProps {
  accessor fontVariantNumeric: TextProps['fontVariantNumeric'];
  accessor color: TextProps['color'];
  /**
   * The semantic tone that's applied to the text, which changes its color to convey meaning.
   *
   * - `info`: Informational content or helpful tips (blue).
   * - `success`: Positive outcomes or successful states (green).
   * - `warning`: Important warnings about potential issues (orange).
   * - `critical`: Urgent problems or destructive actions (red).
   * - `auto`: Automatically determined based on context.
   * - `neutral`: General information without specific intent (gray).
   * - `caution`: Advisory notices that need attention (yellow).
   */
  accessor tone: TextProps['tone'];
  /**
   * The semantic type and styling treatment for the text content.
   *
   * - `strong`: Emphasizes the text with strong importance, typically displayed in bold.
   * - `generic`: Standard text with no special semantic meaning or styling.
   * - `address`: Marks the text as contact information, such as a physical or email address.
   * - `redundant`: Indicates the text is redundant or duplicated information for screen reader context.
   */
  accessor type: TextProps['type'];
  accessor dir: TextProps['dir'];
  accessor accessibilityVisibility: TextProps['accessibilityVisibility'];
  accessor interestFor: string;
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
   * The text content displayed within the text component, which applies semantic meaning and styling appropriate to the specified text type.
   */
  children?: ComponentChildren;
}

/**
 * Represents the props for textarea components.
 * Extends `PreactFieldProps` for multi-line text input functionality.
 * @publicDocs
 */
export type TextAreaProps = PreactFieldProps<
  Required<TextAreaProps$1>['autocomplete']
> &
  Required<Pick<TextAreaProps$1, 'maxLength' | 'minLength' | 'rows'>>;

/**
 * Configure the following properties on the text area component.
 * @publicDocs
 */
declare class TextArea
  extends PreactFieldElement<TextAreaProps['autocomplete']>
  implements TextAreaProps
{
  accessor maxLength: TextAreaProps['maxLength'];
  accessor minLength: TextAreaProps['minLength'];
  accessor rows: TextAreaProps['rows'];
  /**
   * The current text value in the field as a string. When setting this property programmatically, it updates the field's display value. When reading it, you get the user's current input.
   */
  get value(): string;
  set value(value: string);
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

/**
 * Represents the props for text input field components.
 * Extends `PreactFieldProps` with autocomplete support for text-related fields.
 * @publicDocs
 */
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

/**
 * Configure the following properties on the text field component.
 * @publicDocs
 */
declare class TextField
  extends PreactFieldElement<TextFieldProps['autocomplete']>
  implements TextFieldProps
{
  accessor icon: TextFieldProps['icon'];
  accessor maxLength: TextFieldProps['maxLength'];
  accessor minLength: TextFieldProps['minLength'];
  accessor prefix: TextFieldProps['prefix'];
  accessor suffix: TextFieldProps['suffix'];
  /**
   * The current text value in the field as a string. When setting this property programmatically, it updates the field's display value. When reading it, you get the user's current input.
   */
  get value(): string;
  set value(value: string);
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
   * Additional content displayed alongside the text field, typically an icon or button that provides related functionality like opening a help tooltip or triggering a modal.
   */
  accessory?: ComponentChildren;
}

export interface ThumbnailProps
  extends Required<Pick<ThumbnailProps$1, 'src' | 'alt' | 'size'>> {
  /**
   * The size of the product thumbnail image.
   *
   * - `small-200`: Smallest thumbnail size, ideal for compact product lists or tables.
   * - `small-100`: Very small thumbnail, suitable for dense layouts.
   * - `small`: Small thumbnail for space-constrained contexts.
   * - `base`: Default size that balances visibility and space efficiency.
   * - `large`: Larger thumbnail for featured products or detailed views.
   * - `large-100`: Extra large thumbnail for prominent product display.
   */
  size: Extract<
    ThumbnailProps$1['size'],
    'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100'
  >;
}

/**
 * Configure the following properties on the thumbnail component.
 * @publicDocs
 */
declare class Thumbnail extends PreactCustomElement implements ThumbnailProps {
  accessor src: ThumbnailProps['src'];
  accessor alt: ThumbnailProps['alt'];
  accessor size: ThumbnailProps['size'];
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
  /**
   * A callback fired when the thumbnail image loads successfully.
   */
  onLoad?: ((event: CallbackEvent<typeof tagName$8>) => void) | null;
  /**
   * A callback fired when the thumbnail image fails to load.
   */
  onError?: ((event: CallbackEvent<typeof tagName$8>) => void) | null;
}

export interface TooltipProps extends Required<Pick<TooltipProps$1, 'id'>> {}

/**
 * Configure the following properties on the tooltip component.
 * @publicDocs
 */
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
   * The informational text or elements displayed within the tooltip overlay, providing helpful context or explanations when users interact with the associated element.
   *
   * Only accepts text, paragraph components, and raw `textContent`.
   */
  children?: ComponentChildren;
}

/**
 * Represents the props for URL input field components.
 * Extends `PreactFieldProps` with autocomplete support for URL-related fields.
 * @publicDocs
 */
export type URLFieldProps = PreactFieldProps<
  Required<URLFieldProps$1>['autocomplete']
> &
  Required<Pick<URLFieldProps$1, 'maxLength' | 'minLength'>>;

/**
 * Configure the following properties on the URL field component.
 * @publicDocs
 */
declare class URLField
  extends PreactFieldElement<URLFieldProps['autocomplete']>
  implements URLFieldProps
{
  accessor autocomplete: URLFieldProps['autocomplete'];
  accessor maxLength: URLFieldProps['maxLength'];
  accessor minLength: URLFieldProps['minLength'];
  /**
   * The current URL value in the field as a string. When setting this property programmatically, it updates the field's display value. When reading it, you get the user's current input. The field validates this value as a URL format when the user finishes editing.
   */
  get value(): string;
  set value(value: string);
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

/**
 * Configure the following properties on the unordered list component.
 * @publicDocs
 */
declare class UnorderedList
  extends PreactCustomElement
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
   * The list entries displayed within the unordered list, where each item is marked with a bullet point. Only accepts list item components as children. Each list item represents a single bulleted entry in the list.
   */
  children?: ComponentChildren;
}

/**
 * Configure the following properties on the admin action component.
 * @publicDocs
 */
export interface AdminActionProps
  extends Pick<AdminActionProps$1, 'heading' | 'loading'> {}

declare const tagName$4 = 's-admin-action';
export interface AdminActionJSXProps
  extends Partial<AdminActionProps>,
    Pick<AdminActionProps$1, 'id'> {
  /**
   * The main action button or link displayed in the admin action modal.
   * This represents the primary or most important action that users can take in this modal context, typically displayed with high visual prominence.
   */
  primaryAction: ComponentChildren;
  /**
   * Additional action buttons or links displayed in the admin action modal.
   * These provide alternative or supporting actions, visually de-emphasized compared to the primary action to establish clear hierarchy.
   */
  secondaryActions: ComponentChildren;
}

/**
 * Configure the following properties on the admin action component.
 * @publicDocs
 */
declare class AdminAction
  extends PreactCustomElement
  implements AdminActionProps
{
  /**
   * The text to use as the Action modal's title. If not provided, the name of the extension will be used.
   */
  heading: string;
  /**
   * Whether the action is in a loading state, such as during initial page load or when the action is being opened.
   * When `true`, the action might be in an inert state that prevents user interaction.
   */
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

/**
 * Configure the following properties on the admin block component.
 * @publicDocs
 */
export interface AdminBlockProps
  extends Pick<AdminBlockProps$1, 'heading' | 'collapsedSummary'> {}

declare const tagName$3 = 's-admin-block';
export interface AdminBlockJSXProps
  extends Partial<AdminBlockProps>,
    Pick<AdminBlockProps$1, 'id'> {}

/**
 * Configure the following properties on the admin block component.
 * @publicDocs
 */
declare class AdminBlock
  extends PreactCustomElement
  implements AdminBlockProps
{
  /**
   * The text displayed as the block's title in the header. If not provided, the extension name will be used.
   */
  heading: string;
  /**
   * The summary text displayed when the app block is collapsed. Summaries longer than 30 characters will be truncated.
   */
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

/**
 * Configure the following properties on the admin print action component.
 * @publicDocs
 */
export interface AdminPrintActionProps
  extends Pick<AdminPrintActionProps$1, 'src'> {}

declare const tagName$2 = 's-admin-print-action';
export interface AdminPrintActionJSXProps
  extends Partial<AdminPrintActionProps>,
    Pick<AdminPrintActionProps$1, 'id'> {}

/**
 * Configure the following properties on the admin print action component.
 * @publicDocs
 */
declare class AdminPrintAction
  extends PreactCustomElement
  implements AdminPrintActionProps
{
  /**
   * The `src` URL of the preview and the document to print.
   * If not provided, the preview will show an empty state and the print button will be disabled.
   * HTML, PDFs, and images are supported.
   */
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

/**
 * Configure the following properties on the form component.
 * @publicDocs
 */
declare class Form extends PreactCustomElement implements FormProps {
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

/**
 * Represents the event type for function settings errors.
 * Extracted from the parameters of the `onFunctionSettingsError` callback.
 * @publicDocs
 */
export type FunctionSettingsErrorEvent = Parameters<
  NonNullable<FunctionSettingsProps$1['onError']>
>[0];
/**
 * Configure the following properties on the function settings component.
 * @publicDocs
 */
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
  QueryContainer,
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
  AvatarJSXProps,
  BadgeJSXProps,
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
  QueryContainerJSXProps,
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

/**
 * The avatar component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface AvatarEvents {
  /**
   * A callback fired when the avatar image successfully loads.
   *
   * Learn more about the [load event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/load_event).
   */
  load: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the avatar image fails to load.
   *
   * Learn more about the [error event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/error_event).
   */
  error: OnErrorEventHandler = null;
}

/**
 * The badge component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface BadgeSlots {
  /**
   * The text label displayed within the badge component, typically a short status indicator or category label.
   */
  children?: HTMLElement;
}

/**
 * The banner component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface BannerEvents {
  /**
   * A callback fired when the banner is dismissed.
   */
  dismiss: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired after the banner is hidden.
   */
  afterhide: CallbackEventListener<typeof tagName> | null = null;
}

/**
 * The banner component supports slots for additional content placement within the banner. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface BannerSlots {
  /**
   * The main message content displayed within the banner component, providing important information or guidance to users.
   */
  children?: HTMLElement;
  /**
   * Action buttons displayed at the bottom of the banner that let users respond to the message.
   * Accepts up to two button components with `variant="secondary"` or `variant="auto"`.
   */
  'secondary-actions'?: HTMLElement;
}

/**
 * The box component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface BoxSlots {
  /**
   * The content displayed within the box component, which serves as a flexible container for organizing and styling other components.
   */
  children?: HTMLElement;
}

/**
 * The button component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface ButtonEvents {
  /**
   * A callback fired when the button is clicked.
   *
   * Learn more about the [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).
   */
  click: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the button loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the button receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<typeof tagName> | null = null;
}

/**
 * The button component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface ButtonSlots {
  /**
   * The label text or elements displayed inside the button component, describing the action that will be performed when clicked.
   */
  children?: HTMLElement;
}

/**
 * The button group component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface ButtonGroupSlots {
  /**
   * The buttons displayed within the button group component, which are arranged together as a cohesive set of related actions.
   */
  children?: HTMLElement;
  /**
   * The main action for this group, displayed with high visual emphasis.
   * Accepts a single button with `variant="primary"`.
   *
   * Use this for the primary action you want users to take. This can't be used when `gap="none"`.
   */
  'primary-action'?: HTMLElement;
  /**
   * Supporting actions displayed with less emphasis than the primary action.
   * Accepts one or more button components with `variant="secondary"` or `variant="auto"`.
   *
   * Use these for alternative or less critical actions.
   */
  'secondary-actions'?: HTMLElement;
}

/**
 * The checkbox component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface CheckboxEvents {
  /**
   * A callback fired when the checkbox value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<'input'>;
  /**
   * A callback fired when the user inputs data into the checkbox.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<'input'>;
}

/**
 * The chip component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface ChipSlots {
  /**
   * The text label displayed within the chip component, typically representing a selected filter, tag, or removable item.
   */
  children?: HTMLElement;
  /**
   * An optional icon to display at the start of the chip. Accepts only icon components.
   */
  graphic?: HTMLElement;
}

/**
 * The choice list component supports slots for additional content placement within each choice. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface ChoiceSlots {
  /**
   * The label text or elements that identify this selectable choice to users.
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
}

/**
 * The choice list component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface ChoiceListEvents {
  /**
   * A callback fired when the choice list selection changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the user inputs data into the choice list.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<typeof tagName> | null = null;
}

/**
 * The choice list component supports slots for additional content placement within each choice. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface ChoiceListSlots {
  /**
   * The choices a user can select from.
   *
   * Accepts choice components.
   */
  children?: HTMLElement;
}

/**
 * The clickable component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface ClickableEvents {
  /**
   * A callback fired when the component is clicked.
   *
   * Learn more about the [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).
   */
  click: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the component loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the component receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<typeof tagName> | null = null;
}

/**
 * The clickable component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface ClickableSlots {
  /**
   * The content displayed within the clickable component, which makes any content interactive and clickable without the semantic meaning of a button or link.
   */
  children?: HTMLElement;
}

/**
 * The clickable chip component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface ClickableChipEvents {
  /**
   * A callback fired when the chip is clicked.
   *
   * Learn more about the [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).
   */
  click: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the chip is removed.
   */
  remove: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired after the chip is hidden.
   */
  afterhide: CallbackEventListener<typeof tagName> | null = null;
}

/**
 * The clickable chip component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface ClickableChipSlots {
  /**
   * The text label displayed within the chip, which represents an interactive filter, tag, or selectable item.
   */
  children?: HTMLElement;
  /**
   * An optional icon to display at the start of the chip. Accepts only icon components.
   */
  graphic?: HTMLElement;
}

/**
 * The color field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface ColorFieldEvents {
  /**
   * A callback fired when the color field value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<'input'>;
  /**
   * A callback fired when the user inputs data into the color field.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<'input'>;
  /**
   * A callback fired when the color field loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<'input'>;
  /**
   * A callback fired when the color field receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<'input'>;
}

/**
 * The color picker component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface ColorPickerEvents {
  /**
   * A callback fired when the color picker value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the user inputs data into the color picker.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<typeof tagName> | null = null;
}

/**
 * The date field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface DateFieldEvents {
  /**
   * A callback fired when the date field value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<'input'>;
  /**
   * A callback fired when the user inputs data into the date field.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<'input'>;
  /**
   * A callback fired when the date field loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<'input'>;
  /**
   * A callback fired when the date field receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<'input'>;
  /**
   * A callback fired when the calendar view changes (such as when navigating between months).
   */
  viewchange: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the date field value is invalid.
   *
   * Learn more about the [invalid event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event).
   */
  invalid: CallbackEventListener<typeof tagName> | null = null;
}

/**
 * The date picker component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface DatePickerEvents {
  /**
   * A callback fired when the calendar view changes, such as when navigating between months.
   */
  viewchange: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the date picker receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the date picker loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the user inputs data into the date picker.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the date picker value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<typeof tagName> | null = null;
}

/**
 * The drop zone component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface DropZoneEvents {
  /**
   * A callback fired when the drop zone value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<typeof tagName> = null;
  /**
   * A callback fired when the user inputs data into the drop zone.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<typeof tagName> = null;
  /**
   * A callback fired when a dropped file is rejected due to file type or size restrictions.
   */
  droprejected: CallbackEventListener<typeof tagName> = null;
}

/**
 * The drop zone component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface DropZoneSlots {
  /**
   * The content to include inside the drop zone container
   */
  children?: HTMLElement;
}

/**
 * The email field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface EmailFieldEvents {
  /**
   * A callback fired when the email field value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<'input'>;
  /**
   * A callback fired when the user inputs data into the email field.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<'input'>;
  /**
   * A callback fired when the email field loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<'input'>;
  /**
   * A callback fired when the email field receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<'input'>;
}

/**
 * The grid component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface GridSlots {
  /**
   * The child elements displayed within the grid component, which are arranged in a flexible grid layout with configurable columns, rows, and spacing.
   */
  children?: HTMLElement;
}

/**
 * The grid item component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface GridItemSlots {
  /**
   * The content displayed within the grid item component, which represents a single cell in the grid layout and can span multiple columns or rows.
   */
  children?: HTMLElement;
}

/**
 * The heading component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface HeadingSlots {
  /**
   * The heading text displayed within the heading component, which provides a title or section header for content.
   */
  children?: HTMLElement;
}

/**
 * The image component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface ImageEvents {
  /**
   * A callback fired when the image successfully loads.
   *
   * Learn more about the [load event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/load_event).
   */
  load: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the image fails to load.
   *
   * Learn more about the [error event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/error_event).
   */
  error: OnErrorEventHandler = null;
}

/**
 * The link component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface LinkEvents {
  /**
   * A callback fired when the link is clicked.
   *
   * Learn more about the [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).
   */
  click: CallbackEventListener<typeof tagName> | null = null;
}

/**
 * The link component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface LinkSlots {
  /**
   * The text or elements displayed within the link component, which navigates users to a different location when activated.
   */
  children?: HTMLElement;
}

/**
 * The list item component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface ListItemSlots {
  /**
   * The content displayed within the list item, which represents a single entry in an ordered or unordered list.
   */
  children?: HTMLElement;
}

/**
 * The menu component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface MenuSlots {
  /**
   * The items displayed within the menu. Only accepts button and section components. Use button for individual menu actions and section to group related items.
   */
  children?: HTMLElement;
}

/**
 * The modal component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface ModalEvents {
  /**
   * A callback fired when the modal is hidden.
   */
  hide: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the modal is shown.
   */
  show: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired after the modal is hidden.
   */
  afterhide: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired after the modal is shown.
   */
  aftershow: CallbackEventListener<typeof tagName> | null = null;
}

/**
 * The modal component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface ModalSlots {
  /**
   * The content displayed within the modal component, typically including form fields, information, or interactive elements.
   */
  children?: HTMLElement;
  /**
   * The main action button displayed in the modal footer, representing the primary action users should take.
   *
   * Only accepts a single button component with a `variant` of `primary`. This action should align with the modal's main purpose.
   */
  'primary-action'?: HTMLElement;
  /**
   * Additional action buttons displayed in the modal footer, providing alternative or supporting actions.
   *
   * Only accepts button components with a `variant` of `secondary` or `auto`. These are visually de-emphasized to establish clear hierarchy.
   */
  'secondary-actions'?: HTMLElement;
}

/**
 * The money field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface MoneyFieldEvents {
  /**
   * A callback fired when the money field value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<'input'>;
  /**
   * A callback fired when the user inputs data into the money field.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<'input'>;
  /**
   * A callback fired when the money field loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<'input'>;
  /**
   * A callback fired when the money field receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<'input'>;
}

/**
 * The number field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface NumberFieldEvents {
  /**
   * A callback fired when the number field value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<'input'>;
  /**
   * A callback fired when the user inputs data into the number field.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<'input'>;
  /**
   * A callback fired when the number field loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<'input'>;
  /**
   * A callback fired when the number field receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<'input'>;
}

/**
 * The option component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface OptionSlots {
  /**
   * The text or elements displayed as the option label, which identifies the selectable choice to users in a dropdown or selection list.
   */
  children?: HTMLElement;
}

/**
 * The option group component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface OptionGroupSlots {
  /**
   * The selectable options displayed in the dropdown list. Accepts option components for individual selectable items within this group.
   */
  children?: HTMLElement;
}

/**
 * The ordered list component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface OrderedListSlots {
  /**
   * The list entries displayed within the ordered list, where each item is numbered sequentially. Only accepts list item components as children. Each list item represents a single numbered entry in the sequence.
   */
  children?: HTMLElement;
}

/**
 * The page component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface PageSlots {
  /**
   * The main page content displayed within the page component, which serves as the primary container for the page's information and interface elements.
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
   * Only accepts a single button component with a `variant` of `primary`.
   *
   */
  'primary-action'?: HTMLElement;
  /**
   * The secondary actions for the page.
   *
   * Only accepts button group and button components with a `variant` of `secondary` or `auto`.
   */
  'secondary-actions'?: HTMLElement;
  /**
   * The navigation back actions for the page.
   *
   * Only accepts link components.
   */
  'breadcrumb-actions'?: HTMLElement;
}

/**
 * The paragraph component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface ParagraphSlots {
  /**
   * The paragraph text content displayed within the paragraph component, which presents a block of related text with appropriate styling.
   */
  children?: HTMLElement;
}

/**
 * The password field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface PasswordFieldEvents {
  /**
   * A callback fired when the password field value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<'input'>;
  /**
   * A callback fired when the user inputs data into the password field.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<'input'>;
  /**
   * A callback fired when the password field loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<'input'>;
  /**
   * A callback fired when the password field receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<'input'>;
}

/**
 * The popover component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface PopoverEvents {
  /**
   * A callback fired when the popover is shown.
   */
  show: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired when the popover is hidden.
   */
  hide: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired after the popover is shown.
   */
  aftershow: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired after the popover is hidden.
   */
  afterhide: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired when the popover is toggled.
   */
  toggle: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired after the popover is toggled.
   */
  aftertoggle: CallbackEventListener<TTagName> | null;
}

/**
 * The popover component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface PopoverSlots {
  /**
   * The content displayed within the popover component, which appears in an overlay positioned relative to its trigger element.
   */
  children?: HTMLElement;
}

/**
 * The query container component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface QueryContainerSlots {
  /**
   * The content displayed within the query container component, which enables container queries for responsive styling based on the container's size rather than the viewport.
   */
  children?: HTMLElement;
}

/**
 * The search field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface SearchFieldEvents {
  /**
   * A callback fired when the search field value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<'input'>;
  /**
   * A callback fired when the user inputs data into the search field.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<'input'>;
  /**
   * A callback fired when the search field loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<'input'>;
  /**
   * A callback fired when the search field receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<'input'>;
}

/**
 * The section component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface SectionSlots {
  /**
   * The content displayed within the section component, which groups related elements together in a logical unit with an optional heading.
   */
  children?: HTMLElement;
}

/**
 * The select component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface SelectEvents {
  /**
   * A callback fired when the select value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<'input'>;
  /**
   * A callback fired when the user inputs data into the select.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<'input'>;
}

/**
 * The select component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface SelectSlots {
  /**
   * The selectable options displayed in the dropdown list. Accepts option components for individual selectable items, and option group components to organize related options into logical groups with labels.
   */
  children?: HTMLElement;
}

/**
 * The stack component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface StackSlots {
  /**
   * The child elements displayed within the stack component, which are arranged vertically or horizontally with consistent spacing.
   */
  children?: HTMLElement;
}

/**
 * The switch component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface SwitchEvents {
  /**
   * A callback fired when the switch value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<'input'>;
  /**
   * A callback fired when the user inputs data into the switch.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<'input'>;
}

/**
 * The table component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface TableEvents {
  /**
   * A callback fired when the user navigates to the previous page.
   */
  previouspage: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the user navigates to the next page.
   */
  nextpage: CallbackEventListener<typeof tagName> | null = null;
}

/**
 * The table component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface TableSlots {
  /**
   * The table structure defining headers and data rows.
   *
   * Accepts table header row (for column headers) and table body (for data rows) components. Structure your table with a table header row first, followed by table body.
   */
  children?: HTMLElement;
  /**
   * Filter controls displayed above the table.
   *
   * Accepts input components like search field or select for filtering table data. These controls appear in a dedicated area above the table content.
   */
  filters?: HTMLElement;
}

/**
 * The table body component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface TableBodySlots {
  /**
   * The data rows displayed in the table body.
   *
   * Accepts table row components, with each row representing a single record or entry in the table.
   */
  children?: HTMLElement;
}

/**
 * The table cell component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface TableCellSlots {
  /**
   * The data value displayed in this cell.
   *
   * Accepts text content or inline components representing the cell's data value.
   */
  children?: HTMLElement;
}

/**
 * The table header component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface TableHeaderSlots {
  /**
   * The column heading text.
   *
   * This text labels the column in table variant and appears as a label for data in list variant.
   */
  children?: HTMLElement;
}

/**
 * The table header row component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface TableHeaderRowSlots {
  /**
   * The column headers displayed in the table header row.
   *
   * Accepts table header components, with each header defining a column and providing its label.
   */
  children?: HTMLElement;
}

/**
 * The table row component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface TableRowSlots {
  /**
   * The data cells displayed in this table row.
   *
   * Accepts table cell components, with each cell containing a data value for the corresponding column.
   */
  children?: HTMLElement;
}

/**
 * The text component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface TextSlots {
  /**
   * The text content displayed within the text component, which applies semantic meaning and styling appropriate to the specified text type.
   */
  children?: HTMLElement;
}

/**
 * The text area component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface TextAreaEvents {
  /**
   * A callback fired when the text area value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<'input'>;
  /**
   * A callback fired when the user inputs data into the text area.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<'input'>;
  /**
   * A callback fired when the text area loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<'input'>;
  /**
   * A callback fired when the text area receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<'input'>;
}

/**
 * The text field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface TextFieldEvents {
  /**
   * A callback fired when the text field value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<'input'>;
  /**
   * A callback fired when the user inputs data into the text field.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<'input'>;
  /**
   * A callback fired when the text field loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<'input'>;
  /**
   * A callback fired when the text field receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<'input'>;
}

/**
 * The text field component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface TextFieldSlots {
  /**
   * Additional interactive content displayed within the text field.
   *
   * Accepts button and clickable components with text content only. Other component types or complex layouts are not supported.
   */
  accessory?: HTMLElement;
}

/**
 * The thumbnail component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface ThumbnailEvents {
  /**
   * A callback fired when the thumbnail image successfully loads.
   *
   * Learn more about the [load event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/load_event).
   */
  load: CallbackEventListener<typeof tagName> | null = null;
  /**
   * A callback fired when the thumbnail image fails to load.
   *
   * Learn more about the [error event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/error_event).
   */
  error: OnErrorEventHandler = null;
}

/**
 * The tooltip component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface TooltipSlots {
  /**
   * The informational text or elements displayed within the tooltip overlay, providing helpful context or explanations when users interact with the associated element.
   *
   * Only accepts text, paragraph components, and raw `textContent`.
   */
  children?: HTMLElement;
}

/**
 * The URL field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface URLFieldEvents {
  /**
   * A callback fired when the URL field value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<'input'>;
  /**
   * A callback fired when the user inputs data into the URL field.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<'input'>;
  /**
   * A callback fired when the URL field loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<'input'>;
  /**
   * A callback fired when the URL field receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<'input'>;
}

/**
 * The unordered list component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface UnorderedListSlots {
  /**
   * The list entries displayed within the unordered list, where each item is marked with a bullet point. Only accepts list item components as children. Each list item represents a single bulleted entry in the list.
   */
  children?: HTMLElement;
}

/**
 * The admin action component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface AdminActionSlots {
  /**
   * The main action button or link displayed in the admin action modal.
   * This represents the primary or most important action that users can take in this modal context, typically displayed with high visual prominence.
   */
  'primary-action': HTMLElement;
  /**
   * Additional action buttons or links displayed in the admin action modal.
   * These provide alternative or supporting actions, visually de-emphasized compared to the primary action to establish clear hierarchy.
   */
  'secondary-actions': HTMLElement;
}

/**
 * The form component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
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

/**
 * The function settings component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
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
      [tagName$Z]: AvatarJSXProps & ReactBaseElementProps<Avatar>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Z]: AvatarJSXProps & ReactBaseElementProps<Avatar>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Y]: BadgeJSXProps & ReactBaseElementPropsWithChildren<Badge>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Y]: BadgeJSXProps & ReactBaseElementPropsWithChildren<Badge>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$X]: Omit<BannerJSXProps, 'secondaryActions'> &
        ReactBaseElementPropsWithChildren<Banner>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$X]: Omit<BannerJSXProps, 'secondaryActions'> &
        ReactBaseElementPropsWithChildren<Banner>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$W]: BoxJSXProps & ReactBaseElementPropsWithChildren<Box>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$W]: BoxJSXProps & ReactBaseElementPropsWithChildren<Box>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$V]: ButtonJSXProps & ReactBaseElementPropsWithChildren<Button>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$V]: ButtonJSXProps & ReactBaseElementPropsWithChildren<Button>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$U]: Omit<
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
      [tagName$U]: Omit<
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
      [tagName$T]: CheckboxJSXProps & ReactBaseElementProps<Checkbox>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$T]: CheckboxJSXProps & ReactBaseElementProps<Checkbox>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$S]: Omit<ChipJSXProps, 'graphic'> &
        ReactBaseElementPropsWithChildren<Chip>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$S]: Omit<ChipJSXProps, 'graphic'> &
        ReactBaseElementPropsWithChildren<Chip>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$R]: Omit<ChoiceJSXProps, 'details'> &
        ReactBaseElementPropsWithChildren<Choice>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$R]: Omit<ChoiceJSXProps, 'details'> &
        ReactBaseElementPropsWithChildren<Choice>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Q]: ChoiceListJSXProps &
        ReactBaseElementPropsWithChildren<ChoiceList>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Q]: ChoiceListJSXProps &
        ReactBaseElementPropsWithChildren<ChoiceList>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$P]: ClickableJSXProps &
        ReactBaseElementPropsWithChildren<Clickable>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$P]: ClickableJSXProps &
        ReactBaseElementPropsWithChildren<Clickable>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$O]: Omit<ClickableChipJSXProps, 'graphic'> &
        ReactBaseElementPropsWithChildren<ClickableChip>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$O]: Omit<ClickableChipJSXProps, 'graphic'> &
        ReactBaseElementPropsWithChildren<ClickableChip>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$N]: ColorFieldJSXProps & ReactBaseElementProps<ColorField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$N]: ColorFieldJSXProps & ReactBaseElementProps<ColorField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$M]: ColorPickerJSXProps & ReactBaseElementProps<ColorPicker>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$M]: ColorPickerJSXProps & ReactBaseElementProps<ColorPicker>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$L]: DateFieldJSXProps & ReactBaseElementProps<DateField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$L]: DateFieldJSXProps & ReactBaseElementProps<DateField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$K]: DatePickerJSXProps & ReactBaseElementProps<DatePicker>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$K]: DatePickerJSXProps & ReactBaseElementProps<DatePicker>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$J]: DividerJSXProps & ReactBaseElementProps<Divider>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$J]: DividerJSXProps & ReactBaseElementProps<Divider>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$I]: DropZoneJSXProps &
        ReactBaseElementPropsWithChildren<DropZone>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$I]: DropZoneJSXProps &
        ReactBaseElementPropsWithChildren<DropZone>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$H]: EmailFieldJSXProps & ReactBaseElementProps<EmailField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$H]: EmailFieldJSXProps & ReactBaseElementProps<EmailField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$G]: GridJSXProps & ReactBaseElementPropsWithChildren<Grid>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$G]: GridJSXProps & ReactBaseElementPropsWithChildren<Grid>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$F]: GridItemJSXProps &
        ReactBaseElementPropsWithChildren<GridItem>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$F]: GridItemJSXProps &
        ReactBaseElementPropsWithChildren<GridItem>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$E]: HeadingJSXProps & ReactBaseElementPropsWithChildren<Heading>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$E]: HeadingJSXProps & ReactBaseElementPropsWithChildren<Heading>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$D]: IconJSXProps & ReactBaseElementProps<Icon>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$D]: IconJSXProps & ReactBaseElementProps<Icon>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$C]: ImageJSXProps & ReactBaseElementProps<Image>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$C]: ImageJSXProps & ReactBaseElementProps<Image>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$B]: LinkJSXProps & ReactBaseElementPropsWithChildren<Link>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$B]: LinkJSXProps & ReactBaseElementPropsWithChildren<Link>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$A]: ListItemJSXProps &
        ReactBaseElementPropsWithChildren<ListItem>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$A]: ListItemJSXProps &
        ReactBaseElementPropsWithChildren<ListItem>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$z]: MenuJSXProps & ReactBaseElementPropsWithChildren<Menu>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$z]: MenuJSXProps & ReactBaseElementPropsWithChildren<Menu>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$y]: Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'> &
        ReactBaseElementPropsWithChildren<Modal>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$y]: Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'> &
        ReactBaseElementPropsWithChildren<Modal>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$x]: MoneyFieldJSXProps & ReactBaseElementProps<MoneyField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$x]: MoneyFieldJSXProps & ReactBaseElementProps<MoneyField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$w]: NumberFieldJSXProps & ReactBaseElementProps<NumberField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$w]: NumberFieldJSXProps & ReactBaseElementProps<NumberField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$v]: OptionJSXProps & ReactBaseElementPropsWithChildren<Option>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$v]: OptionJSXProps & ReactBaseElementPropsWithChildren<Option>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$u]: OptionGroupJSXProps &
        ReactBaseElementPropsWithChildren<OptionGroup>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$u]: OptionGroupJSXProps &
        ReactBaseElementPropsWithChildren<OptionGroup>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$t]: OrderedListJSXProps &
        ReactBaseElementPropsWithChildren<OrderedList>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$t]: OrderedListJSXProps &
        ReactBaseElementPropsWithChildren<OrderedList>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$s]: Omit<
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
      [tagName$s]: Omit<
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
      [tagName$r]: ParagraphJSXProps &
        ReactBaseElementPropsWithChildren<Paragraph>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$r]: ParagraphJSXProps &
        ReactBaseElementPropsWithChildren<Paragraph>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$q]: PasswordFieldJSXProps & ReactBaseElementProps<PasswordField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$q]: PasswordFieldJSXProps & ReactBaseElementProps<PasswordField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$p]: PopoverJSXProps & ReactBaseElementPropsWithChildren<Popover>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$p]: PopoverJSXProps & ReactBaseElementPropsWithChildren<Popover>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$o]: QueryContainerJSXProps &
        ReactBaseElementPropsWithChildren<QueryContainer>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$o]: QueryContainerJSXProps &
        ReactBaseElementPropsWithChildren<QueryContainer>;
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
