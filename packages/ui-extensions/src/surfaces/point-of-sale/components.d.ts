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
/**
 * Represents any valid child content that can be rendered within a component.
 */
export type ComponentChildren = any;
/**
 * Represents text-only child content.
 */
export type StringChildren = string;
/**
 * Properties that are available on all components.
 */
export interface GlobalProps {
  /**
   * A unique identifier for the element within the document. This ID is used for multiple purposes: targeting the element from JavaScript code, creating relationships between elements (using `commandFor`, `interestFor`, ARIA attributes), linking labels to form controls, enabling fragment navigation with URL anchors (for example, `#section-id`), and applying element-specific styles. The ID must be unique across the entire page—duplicate IDs will cause unexpected behavior and accessibility issues. Use descriptive, semantic IDs that indicate the element's purpose (for example, `"checkout-button"`, `"main-nav"`, `"product-details-modal"`) rather than generic numbers or arbitrary strings. IDs are case-sensitive and should only contain letters, digits, hyphens, and underscores. If you don't need to reference the element externally, you can omit the ID.
   */
  id?: string;
}
/**
 * Provides slots for primary and secondary action elements.
 */
export interface ActionSlots {
  /**
   * The primary action element to display, typically a `Button` or clickable link representing the most important action the user can take in the current context. This action should align with the user's primary goal or the main purpose of the interface. For example, "Save changes", "Checkout", "Add to cart", or "Submit order". The primary action typically receives visual emphasis through styling to draw user attention. Only one primary action should be provided to avoid confusion about the main call-to-action. If no primary action is needed, omit this property rather than providing an empty or placeholder action.
   */
  primaryAction?: ComponentChildren;
  /**
   * Secondary action elements to display, typically `Button` or clickable link elements representing alternative or supporting actions that are less important than the primary action. These might include "Cancel", "Save draft", "Skip", "Learn more", or other optional actions. Secondary actions receive less visual prominence than the primary action to maintain clear hierarchy. Multiple secondary actions can be provided and will typically be displayed together, often in a different visual style or position than the primary action. If no secondary actions are needed, omit this property. The order of actions in the array may affect their display order depending on the component.
   */
  secondaryActions?: ComponentChildren;
}
/**
 * Properties for overlay lifecycle callbacks.
 */
export interface BaseOverlayProps {
  /**
   * Called when the overlay begins to appear, immediately after `showOverlay()` is called or the `hidden` property changes to `false`, but before any show animations start. The element may not be visible yet. Use this for initializing overlay content, fetching data needed for display, setting focus on the first interactive element, or tracking analytics events for when users begin viewing the overlay. Avoid layout calculations here as the element may not have final dimensions yet.
   */
  onShow?: (event: Event) => void;
  /**
   * Called after the overlay is fully visible and all show animations have completed. At this point, the overlay is completely rendered with final dimensions and positioning. Use this for operations that require the overlay to be fully displayed, such as focusing specific elements after animations complete, measuring rendered content dimensions, triggering secondary animations, or initializing interactive features that depend on final layout. This is the safest place for DOM measurements and layout-dependent operations.
   */
  onAfterShow?: (event: Event) => void;
  /**
   * Called when the overlay begins to hide, immediately after `hideOverlay()` is called or the `hidden` property changes to `true`, but before any hide animations start. The element is still visible. Use this for cleanup operations, saving overlay state before it disappears, canceling pending requests, or preparing for the post-hide state. This is your last opportunity to interact with the visible overlay before animations begin.
   */
  onHide?: (event: Event) => void;
  /**
   * Called after the overlay is completely hidden and all hide animations have finished. The element is no longer visible or interactive. Use this for final cleanup, focusing the element that triggered the overlay, navigating to another view, freeing resources, or performing operations that should only occur after the overlay is completely dismissed. This is the appropriate place for post-dismissal navigation or state updates that would be jarring if they occurred during animations.
   */
  onAfterHide?: (event: Event) => void;
}
/**
 * Methods for controlling overlay visibility. These methods are required (not optional) because:
 * - Components implementing this interface must provide all methods
 * - Unlike props/attributes, methods aren't rendered in HTML but are JavaScript APIs
 * - Consumers expect these methods to be consistently available on all instances
 */
export interface BaseOverlayMethods {
  /**
   * Programmatically displays the overlay element. When called, the overlay becomes visible and triggers any associated `onShow` and `onAfterShow` callbacks. Use this method to open modals, dialogs, or other overlay components in response to user actions or application state changes.
   *
   * @implementation This is a method to be called on the element and not a callback and should hence be camelCase
   */
  showOverlay: () => void;
  /**
   * Programmatically hides the overlay element. When called, the overlay becomes hidden and triggers any associated `onHide` and `onAfterHide` callbacks. Use this method to close modals, dismiss dialogs, or hide overlay components programmatically rather than waiting for user interaction.
   *
   * @implementation This is a method to be called on the element and not a callback and should hence be camelCase
   */
  hideOverlay: () => void;
  /**
   * Programmatically toggles the overlay's visibility state. If currently visible, the overlay will be hidden; if currently hidden, it will be shown. This triggers the appropriate show/hide callbacks based on the resulting state. Use this method to create toggle buttons or cycle through overlay visibility states.
   *
   * @implementation This is a method to be called on the element and not a callback and should hence be camelCase
   */
  toggleOverlay: () => void;
}
/**
 * Properties for focus event callbacks.
 */
export interface FocusEventProps {
  /**
   * Called when focus is removed from the element, either by the user moving to another field (tabbing, clicking elsewhere) or programmatically using `blur()`. This event fires before `onChange` for modified fields. The event contains information about which element is receiving focus next (`relatedTarget`). Use this for triggering validation, saving in-progress changes, hiding related UI elements like autocomplete dropdowns, or tracking field interaction analytics. Common pattern: validate and show errors on blur to avoid disrupting users while they're still typing.
   *
   * Learn more about [blur events on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  onBlur?: (event: FocusEvent) => void;
  /**
   * Called when the element receives focus through user interaction (clicking, tabbing) or programmatic methods like `focus()`. This event fires before any input occurs. The event contains information about which element previously had focus (`relatedTarget`). Use this for showing helper text, highlighting the active field, displaying related UI like autocomplete suggestions, preselecting content, or tracking which fields users interact with. Common pattern: clear errors on focus to provide a fresh start when users re-attempt input after validation failure. Learn more about [focus events on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  onFocus?: (event: FocusEvent) => void;
}
/**
 * Defines the available size options for icons using a semantic scale. Provides granular control over icon dimensions from compact inline sizes to prominent display sizes.
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
 * Defines the available color intensity options for icons. Controls the visual prominence and contrast of icon elements within the interface.
 */
export type ColorKeyword = 'subdued' | 'base' | 'strong';
/**
 * A background color keyword including transparent option.
 */
export type BackgroundColorKeyword = 'transparent' | ColorKeyword;
/**
 * Properties for controlling the background color of an element.
 */
export interface BackgroundProps {
  /**
   * Sets the background color intensity of the element. Controls how the element stands out from its surroundings.
   *
   * @default 'transparent'
   */
  background?: BackgroundColorKeyword;
}
/**
 * Defines the semantic tone options for icons. Controls the color and visual emphasis based on the information type and importance being communicated.
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
 * A valid icon identifier from the available icon set.
 */
export type IconType = (typeof privateIconArray)[number];
/**
 * Like `Extract`, but ensures that the extracted type is a strict subtype of the input type.
 */
export type ExtractStrict<T, U extends T> = Extract<T, U>;
/**
 * A utility type for properties that support [1-to-4-value shorthand syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties#edges_of_a_box).
 */
export type MaybeAllValuesShorthandProperty<T extends string> =
  | T
  | `${T} ${T}`
  | `${T} ${T} ${T}`
  | `${T} ${T} ${T} ${T}`;
/**
 * Defines a shorthand property that accepts either a single value or two space-separated values for directional properties like padding and spacing.
 */
export type MaybeTwoValuesShorthandProperty<T extends string> = T | `${T} ${T}`;
/**
 * A utility type for values that can be responsive using container queries.
 */
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
 * A utility type that allows optional spacing in string literal values.
 *
 * For example, in the `aspectRatio` property, `16/9` and `16 / 9` are both valid.
 */
export type optionalSpace = '' | ' ';
export interface BadgeProps extends GlobalProps {
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
  /**
   * The semantic tone of the badge, based on the intention of the information being conveyed. Affects color and styling to communicate meaning. Badges rely on the tone system for semantic meaning, so using custom styling may not clearly convey meaning to merchants.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * The color intensity of the badge. Controls how prominent or subtle the badge appears within the interface.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * The icon identifier specifying which icon to display within the badge. Accepts any valid icon name from the icon set.
   *
   * @default ''
   */
  icon?: IconType | AnyString;
  /**
   * The position of the icon relative to the badge text content:
   * - `'start'`: Icon appears before the text
   * - `'end'`: Icon appears after the text
   */
  iconPosition?: 'start' | 'end';
  /**
   * Adjusts the size of the badge and its icon. Available sizes range from `'small-500'` (smallest) through `'base'` (default) to `'large-500'` (largest), allowing you to match badge size to your interface hierarchy.
   *
   * @default 'base'
   */
  size?: SizeKeyword;
}
export interface BannerProps extends GlobalProps, ActionSlots {
  /**
   * The title text displayed prominently at the top of the banner. This is the only property for text content—body text content isn't supported. You can't place `<s-text>` or other text elements as children.
   *
   * @default ''
   */
  heading?: string;
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
  /**
   * Sets the visual appearance and accessibility behavior of the banner. The tone determines both the color scheme and how screen readers announce the banner. Available options:
   * - `'auto'` - Lets the system automatically choose the appropriate tone based on context
   * - `'success'` - Green styling for positive outcomes and successful operations. Creates an informative live region for screen readers
   * - `'info'` - Blue styling for general information and neutral updates. Creates an informative live region for screen readers
   * - `'warning'` - Orange styling for important notices that require attention. Creates an informative live region for screen readers
   * - `'critical'` - Red styling for errors and urgent issues requiring immediate action. Creates an assertive live region that is announced immediately by screen readers.
   *
   * Learn more about [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), [alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role), and [status role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) on MDN.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Whether the banner content can be collapsed and expanded. When `true`, the banner displays a collapse/expand toggle control and child elements are initially hidden. Users can click the toggle to reveal or hide the content. Use for lengthy banners or supplementary information that users can choose to view. Collapsed state persists during the component lifecycle but resets on re-render.
   *
   * @default false
   */
  collapsible?: boolean;
  /**
   * Whether a close button is displayed in the banner. When `true`, a close (X) button appears allowing users to permanently dismiss the banner. Once dismissed, the banner triggers the `onDismiss` callback and remains hidden until the component is re-rendered or the `hidden` property is changed. Use for non-critical notifications or messages that users can choose to dismiss after reading.
   *
   * @default false
   */
  dismissible?: boolean;
  /**
   * Called when the user dismisses the banner by clicking the close (X) button. This only fires for user-initiated dismissals through the UI close button, not when the banner is hidden programmatically using the `hidden` property. The callback fires after the user clicks but before hide animations begin. Use this for tracking dismissal metrics, saving user preferences to avoid showing the banner again, performing cleanup when banners are dismissed, or triggering follow-up actions. The banner remains in the DOM after dismissal (just hidden) until re-rendered—to completely remove it, control rendering at the component level based on dismissal state.
   */
  onDismiss?: (event: Event) => void;
  /**
   * Called after the element is fully hidden and all hide animations have completed.
   *
   * @implementation If implementations animate the hiding of the banner,
   * this event must fire after the banner has fully hidden.
   * We can add an `onHide` event in future if we want to provide a hook for the start of the animation.
   */
  onAfterHide?: (event: Event) => void;
  /**
   * Whether the banner is visible or hidden. When set to `true`, the banner is completely hidden from view and removed from the accessibility tree, meaning screen readers won't announce it. Changing this value triggers hide/show animations if configured. Unlike temporary dismissal with the close button, this provides programmatic control for conditional visibility based on application state, user permissions, or other dynamic conditions.
   *
   * @default false
   */
  hidden?: boolean;
}
/**
 * Properties for controlling the display behavior of an element.
 */
export interface DisplayProps {
  /**
   * Sets the outer display type controlling the element's participation in flow layout. Use `'auto'` for default behavior or `'none'` to hide the element and remove it from the accessibility tree.
   * Learn more about the [CSS display property on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display).
   *
   * @default 'auto'
   */
  display?: MaybeResponsive<'auto' | 'none'>;
}
/**
 * Properties for defining the semantic role of an element for assistive technologies.
 */
export interface AccessibilityRoleProps {
  /**
   * Sets the semantic role for assistive technologies. Helps screen reader users navigate and understand page structure.
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
   * Used to define a live region containing advisory information for the user that isn't important enough to be an alert.
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
   * Used to create a container element with no specific semantic meaning.
   *
   * In an HTML host `generic'` will render a `<div>` element.
   * Learn more about the [`generic` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role) in the MDN web docs.
   */
  | 'generic'
  /**
   * Used to remove semantic meaning from an element while preserving its visual styling.
   *
   * Synonym for `none`
   * Learn more about the [`presentation` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) in the MDN web docs.
   */
  | 'presentation'
  /**
   * Used to remove semantic meaning from an element while preserving its visual styling.
   *
   * Synonym for `presentation`
   * Learn more about the [`none` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/none_role) in the MDN web docs.
   */
  | 'none';
/**
 * Properties for controlling visibility to assistive technologies.
 */
export interface AccessibilityVisibilityProps {
  /**
   * Controls visibility for assistive technologies:
   * - `'visible'`: Announced normally by screen readers
   * - `'hidden'`: Hidden from screen readers while remaining visually visible
   * - `'exclusive'`: Only this element is announced to screen readers, hiding other content
   *
   * @default 'visible'
   */
  accessibilityVisibility?: 'visible' | 'hidden' | 'exclusive';
}
/**
 * Properties for controlling the visibility of field labels to screen readers.
 */
export interface LabelAccessibilityVisibilityProps {
  /**
   * Controls whether the label is announced to screen readers:
   * - `'visible'`: Label is announced normally by screen readers
   * - `'exclusive'`: Only the label is announced, hiding other related content from screen readers
   *
   * @default 'visible'
   */
  labelAccessibilityVisibility?: ExtractStrict<
    AccessibilityVisibilityProps['accessibilityVisibility'],
    'visible' | 'exclusive'
  >;
}
/**
 * Defines the available padding size options using a semantic scale. Provides consistent spacing values that align with the POS design system.
 */
export type PaddingKeyword = SizeKeyword | 'none';
/**
 * Properties for controlling the padding (internal spacing) of an element.
 */
export interface PaddingProps {
  /**
   * The padding applied to all edges of the container. Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties#edges_of_a_box) using flow-relative values in the order:
   *
   * - 4 values: `block-start inline-end block-end inline-start`
   * - 3 values: `block-start inline block-end`
   * - 2 values: `block inline`
   *
   * For example:
   *
   * - `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
   * - `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
   * - `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
   * - `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
   *
   * An `auto` value inherits the default padding from the closest container that has removed its usual padding.
   *
   * @default 'none'
   */
  padding?: MaybeResponsive<MaybeAllValuesShorthandProperty<PaddingKeyword>>;
  /**
   * The block-axis padding for the container. Overrides the block value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingBlock?: MaybeResponsive<
    MaybeTwoValuesShorthandProperty<PaddingKeyword> | ''
  >;
  /**
   * The block-start padding for the container. Overrides the block-start value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart?: MaybeResponsive<PaddingKeyword | ''>;
  /**
   * The block-end padding for the container. Overrides the block-end value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd?: MaybeResponsive<PaddingKeyword | ''>;
  /**
   * The inline-axis padding for the container. Supports two-value syntax where `large none` sets inline-start to `large` and inline-end to `none`. Overrides the inline value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingInline?: MaybeResponsive<
    MaybeTwoValuesShorthandProperty<PaddingKeyword> | ''
  >;
  /**
   * The inline-start padding for the container. Overrides the inline-start value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart?: MaybeResponsive<PaddingKeyword | ''>;
  /**
   * The inline-end padding for the container. Overrides the inline-end value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd?: MaybeResponsive<PaddingKeyword | ''>;
}
/**
 * Defines exact size measurements without automatic or unconstrained options. Limited to specific pixel values, percentages, or zero.
 */
export type SizeUnits = `${number}px` | `${number}%` | `0`;
/**
 * Defines size values that can be specified as exact measurements or automatic sizing. Supports pixel values, percentages, zero, or automatic sizing based on content.
 */
export type SizeUnitsOrAuto = SizeUnits | 'auto';
/**
 * Defines size values that can be specified as exact measurements or no constraint. Supports pixel values, percentages, zero, or no maximum limit.
 */
export type SizeUnitsOrNone = SizeUnits | 'none';
/**
 * Properties for controlling the dimensions of an element.
 */
export interface SizingProps {
  /**
   * The block size of the container. Auto automatically sizes based on the container's children.
   *
   * @default 'auto'
   */
  blockSize?: MaybeResponsive<SizeUnitsOrAuto>;
  /**
   * The minimum block size constraint for the container.
   *
   * @default '0'
   */
  minBlockSize?: MaybeResponsive<SizeUnits>;
  /**
   * The maximum block size constraint for the container.
   *
   * @default 'none'
   */
  maxBlockSize?: MaybeResponsive<SizeUnitsOrNone>;
  /**
   * The inline size of the container. Auto automatically sizes based on the container's children.
   *
   * @default 'auto'
   */
  inlineSize?: MaybeResponsive<SizeUnitsOrAuto>;
  /**
   * The minimum inline size constraint for the container.
   *
   * @default '0'
   */
  minInlineSize?: MaybeResponsive<SizeUnits>;
  /**
   * The maximum inline size constraint for the container.
   *
   * @default 'none'
   */
  maxInlineSize?: MaybeResponsive<SizeUnitsOrNone>;
}
/**
 * A border line style keyword.
 */
export type BorderStyleKeyword =
  | 'none'
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'auto';
/**
 * A border thickness keyword.
 */
export type BorderSizeKeyword = SizeKeyword | 'none';
/**
 * A border radius keyword including maximum rounding option.
 */
export type BorderRadiusKeyword = SizeKeyword | 'max' | 'none';
/**
 * Represents a shorthand for defining a border. It can be a combination of size, optionally followed by color, optionally followed by style.
 */
export type BorderShorthand =
  | BorderSizeKeyword
  | `${BorderSizeKeyword} ${ColorKeyword}`
  | `${BorderSizeKeyword} ${ColorKeyword} ${BorderStyleKeyword}`;
/**
 * Properties for controlling the border styling of an element.
 */
export interface BorderProps {
  /**
   * Sets the border style, width, and color using shorthand syntax. Accepts a size keyword, optionally followed by a color keyword, optionally followed by a style keyword.
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
   * Sets the thickness of the border using size keywords. Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) for specifying different widths per edge.
   *
   * @default '' - meaning no override
   */
  borderWidth?: MaybeAllValuesShorthandProperty<BorderSizeKeyword> | '';
  /**
   * Sets the line style of the border. Controls the visual pattern of the border lines (for example, solid, dashed, dotted). Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) for specifying different styles per edge.
   *
   * @default '' - meaning no override
   */
  borderStyle?: MaybeAllValuesShorthandProperty<BorderStyleKeyword> | '';
  /**
   * Sets the color intensity of the border. Controls how prominent the border appears.
   *
   * @default '' - meaning no override
   */
  borderColor?: ColorKeyword | '';
  /**
   * Sets the corner rounding radius of the border. Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) for specifying different radii per corner.
   *
   * @defaultValue 'none'
   */
  borderRadius?: MaybeAllValuesShorthandProperty<BorderRadiusKeyword>;
}
/**
 * Properties for controlling overflow behavior when content exceeds container bounds.
 */
export interface OverflowProps {
  /**
   * Controls how the container handles content that exceeds its dimensions:
   * - `'visible'`: Content extends beyond the container's boundaries without clipping or scrolling. Overflow content is fully visible and may overlap other elements. This is the default behavior and works well for containers that should expand to fit their content naturally.
   * - `'hidden'`: Content that exceeds the container is clipped and hidden from view—users can't see or access the overflow content. No scrollbars appear. Use this for intentionally limiting visible content, creating masked effects, or preventing content from breaking layouts. Be cautious with accessibility—hidden content may include important information users can't access.
   * - `'auto'`: Adds scrollbars automatically when content exceeds the container, allowing users to scroll to view overflow content. Scrollbars only appear when needed. Use for scrollable regions, content lists, or any container where users should access all content but space is limited.
   *
   * Setting overflow establishes a new block formatting context, which affects layout behaviors like margin collapsing and positioning.
   *
   * @default 'visible'
   */
  overflow?: 'hidden' | 'visible';
}
/**
 * Base properties for box-like container elements.
 */
export interface BaseBoxProps
  extends AccessibilityVisibilityProps,
    BackgroundProps,
    DisplayProps,
    SizingProps,
    PaddingProps,
    BorderProps,
    OverflowProps {
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
  /**
   * A label that describes the purpose or contents of the element. Announced to users with assistive technologies such as screen readers to provide context.
   */
  accessibilityLabel?: string;
}
/**
 * Base properties for box-like container elements with semantic role support.
 */
export interface BaseBoxPropsWithRole
  extends BaseBoxProps,
    AccessibilityRoleProps {}
/**
 * Properties for button-like interactive elements with form-related behavior.
 */
export interface ButtonBehaviorProps extends InteractionProps, FocusEventProps {
  /**
   * The semantic meaning of the button action within a form context:
   * - `'button'`: A standard button with no default form behavior
   * - `'submit'`: Submits the containing form when activated
   * - `'reset'`: Resets the containing form to its initial values when activated
   *
   * @default 'button'
   */
  type?: 'submit' | 'button' | 'reset';
  /**
   * Called when the element is clicked or activated.
   *
   * Learn more about [click events on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).
   */
  onClick?: (event: Event) => void;
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Indicates whether the button action is currently in progress. When `true`, replaces all button content with a loading spinner and prevents additional clicks to avoid duplicate submissions. The button remains visually enabled but unresponsive to interaction. Set to `true` when starting an async operation (for example, API call, navigation) and back to `false` when the operation completes or fails. This provides user feedback during long-running operations and prevents race conditions from multiple rapid clicks. Custom loading indicators or partial content updates aren't supported.
   *
   * @default false
   */
  loading?: boolean;
}
/**
 * Properties for link-like interactive elements with navigation behavior.
 */
export interface LinkBehaviorProps extends InteractionProps, FocusEventProps {
  /**
   * The URL to navigate to when the element is clicked or activated. Supports absolute URLs (for example, `https://shopify.com`), relative URLs (for example, `/products`), and anchor links (for example, `#section-id`). Navigation is triggered after the `onClick` event completes, allowing you to cancel navigation by preventing the default event action. The actual navigation behavior depends on the `target` property—same page, new tab, or external navigation. For security, browsers may block navigation to certain protocols or untrusted origins. Use this to create navigational links, external resource links, or in-app routing.
   */
  href?: string;
  /**
   * Specifies where to display the linked URL:
   * - `'auto'`: The target is automatically determined based on the origin of the URL (typically behaves as `'_self'` but surfaces may handle cross-origin URLs differently).
   * - `'_blank'`: Opens the URL in a new tab or window.
   * - `'_self'`: Opens the URL in the same browsing context.
   * - `'_parent'`: Opens the URL in the parent browsing context.
   * - `'_top'`: Opens the URL in the topmost browsing context.
   * - Custom string: Any other valid target name.
   *
   * Learn more about the [`target` attribute on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).
   *
   * @implementation Surfaces can set specific rules on how they handle each URL.
   * @implementation It's expected that the behavior of `auto` is as `_self` except in specific cases.
   * @implementation For example, a surface could decide to open cross-origin URLs in a new window (as `_blank`).
   *
   * @default 'auto'
   */
  target?: 'auto' | '_blank' | '_self' | '_parent' | '_top' | AnyString;
  /**
   * Treats the link as a file download instead of navigation. When set, clicking the link downloads the resource at the `href` URL rather than navigating to it. The value becomes the suggested filename shown in the download dialog or used by the browser's default save behavior (for example, `download="receipt.pdf"` saves as "receipt.pdf"). If the value is an empty string, the browser determines the filename from the URL or server headers. This only works for same-origin URLs (your app's domain) or `blob:` and `data:` URLs for security reasons—cross-origin URLs will navigate normally. Learn more about the [`download` attribute on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).
   */
  download?: string;
  /**
   * Called when the element is clicked or activated.
   *
   * Learn more about [click events on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).
   */
  onClick?: (event: Event) => void;
}
/**
 * Properties for controlling interactions between elements using commands.
 */
export interface InteractionProps {
  /**
   * The ID of the target element that should respond when this element is clicked or activated. This creates a relationship where clicking this control (button, clickable) triggers an action on another element in the DOM. The target element must have a matching `id` attribute. Use with the `command` property to specify what action should occur (show, hide, toggle). This enables declarative element control without writing custom click handlers, improving accessibility and reducing JavaScript. Common use cases include: opening modals from buttons, toggling content visibility, showing/hiding sidebars, or controlling overlay states. If both `commandFor` and `onClick` are present, both will execute—the command action occurs first, then the click handler.
   * Learn more about [`commandfor` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor).
   */
  commandFor?: string;
  /**
   * The action to perform on the target element specified by `commandFor`:
   * - `'--auto'`: Execute the target element's default action (typically show for overlays, or the element's primary interaction).
   * - `'--show'`: Make the target element visible by calling its `showOverlay()` method or setting appropriate visibility properties.
   * - `'--hide'`: Hide the target element by calling its `hideOverlay()` method or setting appropriate visibility properties.
   * - `'--toggle'`: Switch the target element's visibility state—if visible, hide it; if hidden, show it.
   * - `'--copy'`: Copy content to the clipboard (requires the target to be a compatible element with copy functionality).
   *
   * The command executes when this element is clicked, before any `onClick` handlers fire. If the target element doesn't support the specified command, the action may fail silently.
   * Learn more about [button commands on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command).
   *
   * @default '--auto'
   */
  command?: '--auto' | '--show' | '--hide' | '--toggle' | '--copy';
  /**
   * The ID of a target element that should respond to hover and focus events on this element, creating an "interest" relationship. When the user hovers over or focuses this element, the target element receives corresponding interest events, allowing it to preview or prepare content. This is useful for implementing tooltip-like previews, image zoom on hover, showing additional details before clicking, or loading content speculatively when the user shows interest. The target element must have a matching `id` and listen for interest events. Unlike `commandFor` which responds to clicks, this responds to hover and focus, providing earlier user intent signals.
   */
  interestFor?: string;
}
/**
 * Combined properties for elements that can behave as both buttons and links.
 */
export interface BaseClickableProps
  extends ButtonBehaviorProps,
    LinkBehaviorProps {}
export interface ButtonProps extends GlobalProps, BaseClickableProps {
  /**
   * A label that describes the purpose or contents of the element. Announced to users with assistive technologies such as screen readers to provide context.
   */
  accessibilityLabel?: string;
  /**
   * The child elements to render within this component. Button content must be plain text.
   */
  children?: ComponentChildren;
  /**
   * The icon identifier specifying which icon to display. Accepts any valid icon name from the icon set.
   *
   * @default ''
   */
  icon?: IconType | AnyString;
  /**
   * Controls how the element's width adapts to its container and content.
   *
   * @default 'auto'
   */
  inlineSize?: 'auto' | 'fill' | 'fit-content';
  /**
   * Changes the visual appearance and prominence of the button:
   * - `'auto'`: The variant is automatically determined by context
   * - `'primary'`: Creates a prominent call-to-action button with high visual emphasis for the most important action on a screen
   * - `'secondary'`: Provides a less prominent button appearance for supporting actions and secondary interactions
   * - `'tertiary'`: Provides the least prominent button appearance for tertiary or optional actions
   *
   * @default 'auto'
   */
  variant?: 'auto' | 'primary' | 'secondary' | 'tertiary';
  /**
   * Sets the tone of the button, based on the intention of the action being performed:
   * - `'auto'`: Automatically determines the appropriate tone based on context
   * - `'neutral'`: The standard tone for general actions and interactions
   * - `'caution'`: Indicates actions that require careful consideration
   * - `'warning'`: Alerts users to potential issues or important information
   * - `'critical'`: Used for destructive actions like deleting or removing content
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Indicates the language of the text content. Useful when text is in a different language than the rest of the page, allowing assistive technologies to invoke correct pronunciation. [Reference of language subtag values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
   */
  lang?: string;
}
/**
 * Base properties for all form input elements.
 */
export interface BaseInputProps {
  /**
   * An identifier for the field that is unique within the nearest containing form. This name is used as the key when the form data is submitted. If omitted, the field's value won't be included in form submissions. Use meaningful names that describe the data being collected (for example, `"email"`, `"quantity"`, `"customer-note"`).
   */
  name?: string;
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: boolean;
}
/**
 * Properties for controlled form input elements with value and change callbacks.
 */
export interface InputProps extends BaseInputProps {
  /**
   * Called when the user has committed a value change, typically triggered when the field loses focus (blur) after the value has been modified. Unlike `onInput`, this fires only once after editing is complete, not during typing. The event contains the finalized value. Use this for validation, saving data, or triggering actions that should occur after the user finishes editing rather than during typing. For controlled components, update the `value` prop in this callback. This is ideal for expensive operations like API calls that shouldn't happen on every keystroke.
   * Learn more about [change events on MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  onChange?: (event: Event) => void;
  /**
   * Called immediately when the user makes any change to the field value. Fires on every keystroke, paste, or other input modification before the field loses focus. The event contains the current field value. Use this for real-time validation, character counting, formatting input as users type, or implementing autocomplete/search-as-you-type features. For controlled components, update the `value` prop in this callback to keep state in sync. Be cautious with expensive operations here as this fires frequently during typing.
   * Learn more about [input events on MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).
   */
  onInput?: (event: Event) => void;
  /**
   * The current value of the field. When provided, this creates a controlled component where this value must be updated in response to user input using `onChange` or `onInput` callbacks. The format and valid values depend on the specific field type. If both `value` and `defaultValue` are provided, `value` takes precedence.
   */
  value?: string;
  /**
   * The default value used when the field is first rendered. Only applies if no `value` prop is provided, creating an uncontrolled component where the browser manages the field state internally. After initial render, the component handles its own state and you can read the current value from the DOM. Use this for forms where you don't need to control every state change but want to set initial values. For controlled components with full state management, use `value` instead.
   *
   * @implementation `defaultValue` reflects to the `value` attribute.
   */
  defaultValue?: string;
}
/**
 * Properties for form inputs that support multiple selections.
 */
export interface MultipleInputProps extends BaseInputProps {
  /**
   * Called when the user has finished editing the field, typically triggered on blur after the value has changed.
   * Learn more about [change events on MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  onChange?: (event: Event) => void;
  /**
   * Called when the user makes any change to the field value. Fires on each keystroke or interaction.
   * Learn more about [input events on MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).
   */
  onInput?: (event: Event) => void;
  /**
   * An array containing the values of currently selected options in a multi-select choice list. When provided, this creates a controlled component where this array must be updated in response to user selections using the `onChange` callback. The array should contain the `value` properties of selected child `Choice` components. For single-select lists (`multiple={false}`), this array should contain zero or one items. For multi-select lists, it can contain multiple items. This is a convenience property that automatically sets the `selected` state on matching child choices based on their `value` properties. When a choice's value appears in this array, it's automatically marked as selected. Update this array immutably in callbacks (create new arrays rather than mutating).
   */
  values?: string[];
}
/**
 * Properties for displaying field validation errors.
 */
export interface FieldErrorProps {
  /**
   * An error message to display when the field contains invalid data or fails validation. When set, the field receives error styling (typically a red border and error icon) and the message appears below the field to guide users toward fixing the issue. The error is announced to screen readers for accessibility. Clear the error by setting this to an empty string or `undefined`. Display errors after validation fails, typically on blur or form submission.
   */
  error?: string;
}
/**
 * Basic properties for form fields including labels, validation requirements, and error states.
 */
export interface BasicFieldProps
  extends FieldErrorProps,
    LabelAccessibilityVisibilityProps {
  /**
   * Whether the field must have a value before form submission. When `true`, the field is marked as required (typically with an asterisk), announced as required to screen readers, and triggers browser validation on form submit. This property adds semantic meaning but doesn't prevent submission on its own - validation logic must be implemented and the `error` property to display validation messages.
   *
   * @default false
   */
  required?: boolean;
  /**
   * The text label that describes what information the field is requesting from the user. Labels are always visible (unlike placeholders which disappear on input) and are announced by screen readers, making them critical for accessibility. Labels typically appear above or beside the field and remain visible while the user interacts with the field. Use clear, concise labels that describe the expected input (for example, "Email address", "Quantity", "Customer note"). Required fields should be indicated in the label or use the `required` property for semantic marking.
   */
  label?: string;
}
/**
 * Properties for adding supplementary help text to form fields.
 */
export interface FieldDetailsProps {
  /**
   * Supplementary help text that provides additional context, instructions, or constraints for the field. This text typically appears below the label in a smaller, subdued style and remains visible at all times (unlike placeholders). Screen readers announce this text along with the label to provide complete field context. Use for format requirements (for example, "Use YYYY-MM-DD format"), character limits (for example, "Maximum 500 characters"), helpful hints (for example, "This will be shown on the receipt"), or clarifying instructions (for example, "Leave blank to use default shipping address"). Avoid duplicating information already in the label or placeholder.
   */
  details?: string;
}
/**
 * Complete properties for standard form fields including value, label, placeholder, validation, and callbacks.
 */
export interface FieldProps
  extends BasicFieldProps,
    InputProps,
    FocusEventProps,
    FieldDetailsProps {
  /**
   * A short hint that provides guidance about the expected value or format of the field. Displayed when the field is empty and disappears once the user starts typing. Placeholders should supplement the label, not replace it - always provide a `label` as well since placeholders may not be accessible to all screen readers. Use for format examples (for example, "YYYY-MM-DD"), helpful hints (for example, "Leave blank for default"), or clarifying expected input (for example, "Enter SKU or product name").
   */
  placeholder?: string;
}
/**
 * Base properties for text-based input fields including placeholder and read-only state.
 */
export interface BaseTextFieldProps extends FieldProps {
  /**
   * Indicates whether the field can be edited. When `true`, the field is focusable and announced by screen readers but can't be modified by the user. Unlike `disabled`, read-only fields can still receive focus, be copied, and participate in form submission. Use read-only for data that users need to see and interact with but shouldn't change, such as calculated values or reference information.
   *
   * @default false
   */
  readOnly?: boolean;
}
/**
 * Properties for adding decorative elements like icons, prefixes, suffixes, and accessories to form fields.
 */
export interface FieldDecorationProps {
  /**
   * Static text displayed immediately after the editable portion of the field, typically inside the field border. This text is non-interactive and purely decorative—users can't edit it and it's not included in the field's value when submitted. The suffix remains visible at all times, even when the field is empty. Common uses include domain suffixes (for example, "@shopify.com" for email fields), units of measurement (for example, "kg", "%", "USD"), or clarifying context (for example, "/month" for subscription pricing). Choose between suffix and prefix based on natural reading order for your use case.
   *
   * @default ''
   */
  suffix?: string;
  /**
   * Static text displayed immediately before the editable portion of the field, typically inside the field border. This text is non-interactive and purely decorative—users can't edit it and it's not included in the field's value when submitted. The prefix remains visible at all times, even when the field is empty. Common uses include currency symbols (for example, "$", "€", "£"), protocol indicators (for example, "https://"), measurement prefixes (for example, "#", "@"), or fixed identifiers. The prefix helps users understand the expected format without consuming characters from maxLength limits.
   *
   * @default ''
   */
  prefix?: string;
  /**
   * The icon identifier specifying which icon to display in the field, typically positioned at the start of the field before the input area. The icon is decorative and helps users quickly identify the field's purpose through visual recognition. The icon is announced to screen readers along with the field's accessible name. Use icons that clearly communicate the field's purpose (for example, search icon for search fields, calendar icon for date fields, lock icon for password fields). The icon doesn't affect the field's functionality but improves visual recognition and scannability in forms. Avoid using both icon and prefix simultaneously as this can create visual clutter.
   *
   * @default ''
   */
  icon?: IconType | AnyString;
  /**
   * Additional interactive content displayed within the field, typically positioned at the end of the field after the input area. Only text-only `Button` and `Clickable` components are supported—no icons or complex content. Use the `slot="accessory"` attribute to place elements here. Common uses include action buttons (for example, "Copy" button, "Generate" button, "Clear" button), toggle visibility controls (for example, "Show password" button), or quick actions related to the field (for example, "Paste from clipboard"). The accessory must not interfere with the field's primary input functionality. Ensure sufficient contrast and touch target sizes for mobile usability.
   */
  accessory?: ComponentChildren;
}
/**
 * Properties for defining numeric value constraints and controls.
 */
export interface NumberConstraintsProps {
  /**
   * The highest decimal or integer value that the field accepts. When used with `stepper` controls, the increment button becomes disabled at this value and attempting to increment rounds down to max. When users type values using keyboard, they can enter numbers above max—browser validation will flag these as invalid but won't prevent entry, so implement your own validation in `onChange` or before form submission. Use this to enforce business rules like maximum quantities, price caps, or valid ranges. Set to `Infinity` (default) for no upper limit.
   *
   * @default Infinity
   */
  max?: number;
  /**
   * The lowest decimal or integer value that the field accepts. When used with `stepper` controls, the decrement button becomes disabled at this value and attempting to decrement rounds up to min. When users type values using keyboard, they can enter numbers below min—browser validation will flag these as invalid but won't prevent entry, so implement your own validation in `onChange` or before form submission. Use this to enforce business rules like minimum quantities, preventing negative values, or valid ranges. Set to `-Infinity` (default) for no lower limit.
   *
   * @default -Infinity
   */
  min?: number;
  /**
   * The increment/decrement amount for adjusting the numeric value. Determines how much the value changes when users click stepper buttons or press keyboard arrow keys (up/down). For example, `step="0.01"` allows currency precision, `step="5"` for quantities in increments of 5, or `step="0.25"` for quarter-hour time intervals. The browser may also use this for validation, flagging values that aren't valid steps from the `min` value. Decimals are supported unless using `stepper` controls which only accept integers.
   *
   * @default 1
   */
  step?: number;
  /**
   * The type of controls displayed for the field:
   *
   * - `'auto'` - An automatic setting where the presence of controls depends on the surface and context. The system determines the most appropriate control type based on the usage scenario.
   * - `'stepper'` - Displays increment (+) and decrement (-) buttons for adjusting the numeric value. When `stepper` controls are enabled, the field behavior is constrained: it accepts only integer values, always contains a value (never empty), and automatically validates against `min` and `max` bounds. The `label`, `details`, `placeholder`, `error`, `required`, and `inputMode` properties aren't supported with `stepper` controls.
   * - `'none'` - A control type with no visible controls where users must input the value manually using the keyboard.
   *
   * @default 'auto'
   */
  controls?: 'auto' | 'stepper' | 'none';
}
/**
 * Properties for defining minimum and maximum character length constraints on text inputs.
 */
export interface MinMaxLengthProps {
  /**
   * The maximum number of characters allowed in the text field. The browser prevents users from typing or pasting beyond this limit—additional characters are automatically truncated. The character count includes all characters (letters, numbers, spaces, special characters). This provides immediate feedback by blocking input rather than showing validation errors. Use this for enforcing hard limits like database column sizes, API constraints, or UX requirements. Commonly combined with character counter displays to show remaining space (for example, "45/100 characters").
   *
   * @default Infinity
   */
  maxLength?: number;
  /**
   * The minimum number of characters required for the field value to be considered valid. Unlike `maxLength`, this doesn't prevent users from entering fewer characters—instead, browser validation marks the field as invalid if the value is too short. Validation typically occurs on form submission or blur. The field can be empty unless also marked `required`. Use this for ensuring sufficient input quality, like minimum password lengths, meaningful descriptions, or codes with fixed lengths. Combine with the `error` property to display user-friendly validation messages.
   *
   * @default 0
   */
  minLength?: number;
}
/**
 * Base properties for selectable options including value, disabled state, and accessibility labels.
 */
export interface BaseSelectableProps {
  /**
   * A label that describes the purpose or contents of the element. Announced to users with assistive technologies such as screen readers to provide context.
   */
  accessibilityLabel?: string;
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The unique value associated with this selectable option. This value is what gets submitted with forms when the option is selected, and is used to identify which options are selected in the parent `ChoiceList`'s `values` array. The value should be unique among siblings within the same choice list to avoid selection ambiguity. When a choice is selected, this value appears in form data and in the parent's `values` array. Use meaningful, stable values that identify the choice semantically (for example, `"small"`, `"express-shipping"`, `"agree-to-terms"`) rather than display text which may change or be localized. The value isn't displayed to users—use the choice's `children` or label for visible text.
   */
  value?: string;
}
/**
 * Properties for individual options within choice lists, including selection state management.
 */
export interface BaseOptionProps extends BaseSelectableProps {
  /**
   * Whether the choice control is currently active or selected. This creates a controlled component - this value must be updated in response to user interactions using `onChange` handlers. When `true`, the choice appears selected with appropriate visual styling and is included in form submissions. Use this for controlled selection state where you manage the selected state in your application. If both `selected` and `defaultSelected` are provided, `selected` takes precedence.
   *
   * @default false
   */
  selected?: boolean;
  /**
   * Indicates whether the control is selected by default when first rendered. This creates an uncontrolled component where the browser manages selection state internally. Use this when you want initial selection state but don't need to control every state change. The component will handle selection internally after the initial render. Prefer `selected` for controlled components where you need full control over selection state.
   *
   * @implementation `defaultSelected` reflects to the `selected` attribute.
   *
   * @default false
   */
  defaultSelected?: boolean;
}
/**
 * Properties for a single choice option including label, details, selection state, and additional content.
 */
export interface ChoiceProps extends GlobalProps, BaseOptionProps {
  /**
   * The label content for the choice option.
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
   * Additional text or content that provides context or guidance for the choice option. Displayed alongside the option label to offer more information or instructions to the user. Also exposed to screen reader users.
   *
   * @implementation this content should be linked to the input with an `aria-describedby` attribute.
   */
  details?: ComponentChildren;
  /**
   * An error state indicator for the choice option. When `true`, the option will be given specific stylistic treatment to communicate validation issues.
   *
   * @default false
   */
  error?: boolean;
  /**
   * The additional content displayed alongside the primary choice label. Useful for providing supplementary information or context.
   */
  secondaryContent?: ComponentChildren;
  /**
   * The content displayed only when the option is selected. Useful for showing additional details or confirmation information.
   */
  selectedContent?: ComponentChildren;
}
/**
 * Properties for a list of choice options with support for single or multiple selection modes.
 */
export interface ChoiceListProps
  extends GlobalProps,
    Pick<BasicFieldProps, 'label' | 'labelAccessibilityVisibility' | 'error'>,
    MultipleInputProps,
    FieldDetailsProps {
  /**
   * Whether multiple choices can be selected simultaneously. When `true`, users can select multiple options and the `values` array will contain all selected values. When `false`, only one option can be selected at a time and selecting a new option automatically deselects the previous one.
   *
   * @default false
   */
  multiple?: boolean;
  /**
   * The child elements to render within this component. Within `ChoiceList`, use only `Choice` components as children. Other component types can't be used as options within the choice list.
   */
  children?: ComponentChildren;
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: MultipleInputProps['disabled'];
  /**
   * Controls the visual layout and presentation style of the choice options:
   * - `'auto'`: The layout is automatically determined based on context
   * - `'list'`: Displays choices in a vertical list format
   * - `'inline'`: Displays choices in a horizontal inline format
   * - `'block'`: Displays choices as block-level button-like elements
   * - `'grid'`: Displays choices in a grid layout
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
   * Indicates whether the action is currently in progress. When `true`, typically displays a loading indicator and may disable interaction.
   */
  loading?: BaseClickableProps['loading'];
  /**
   * Whether the element is disabled, preventing user interaction. Use when temporarily unavailable due to application state, permissions, or dependencies. Child elements can still receive focus and be interacted with.
   */
  disabled?: BaseClickableProps['disabled'];
  /**
   * Specifies the language of text content using an [IETF BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) language tag (for example, `"en"` for English, `"fr"` for French, `"es-MX"` for Mexican Spanish, `"zh-Hans"` for Simplified Chinese). This enables assistive technologies to use correct pronunciation and language-specific text rendering.
   *
   * @default ''
   */
  lang?: string;
}
/**
 * Properties for enabling browser autocomplete functionality on form fields.
 */
export interface AutocompleteProps<
  AutocompleteField extends AnyAutocompleteField,
> {
  /**
   * Specifies the type of data expected in the field to enable browser autocomplete functionality. When set to a specific field type (for example, `'email'`, `'name'`, `'address-line1'`), browsers offer suggestions from previously entered or saved information, improving data entry speed and accuracy. Set to `'on'` to enable generic autocomplete without specifying data type. Set to `'off'` to disable autocomplete entirely for sensitive fields (for example, one-time codes, PINs, credit card security codes). The browser respects user preferences and privacy settings, so autocomplete suggestions may not always appear even when enabled. Prefix field types with section identifiers (`section-shipping`) or groups (`billing`, `shipping`) to disambiguate when multiple similar fields exist on the same page. Accepts standard [HTML autocomplete tokens per the WHATWG specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-detail-tokens).
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
 * A section prefix that scopes the autocomplete data to a specific area of the page.
 *
 * Commonly used when there are multiple fields with the same autocomplete needs
 * in the same page. For example: 2 shipping address forms in the same page.
 */
export type AutocompleteSection = `section-${string}`;
/**
 * The contact information category that autocomplete data should be sourced from.
 */
export type AutocompleteGroup = 'shipping' | 'billing';
/**
 * The contact information subcategory that autocomplete data should be sourced from.
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
/**
 * Autocomplete field types applicable to text input fields.
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
/**
 * Properties for an interactive date picker component with single, multiple, or range selection modes.
 */
export interface DatePickerProps
  extends GlobalProps,
    InputProps,
    FocusEventProps {
  /**
   * The default month to display in `YYYY-MM` format when the picker is first shown.
   *
   * This value is used until `view` is set, either directly or as a result of user interaction.
   *
   * Defaults to the current month in the user's locale.
   */
  defaultView?: string;
  /**
   * The currently displayed month in `YYYY-MM` format. Controls which month is visible in the date picker.
   */
  view?: string;
  /**
   * Called when the visible month displayed in the date picker changes, either through user navigation (clicking next/previous month buttons) or programmatic updates to the `view` property. The callback receives the new month as a string in `YYYY-MM` format (for example, `"2024-05"`). Use this to track which month users are viewing, load month-specific data (like availability or pricing), sync the view with external state, or implement custom navigation controls. For controlled date pickers, update the `view` property in this callback to keep the displayed month in sync with your application state. The callback fires after the month has changed but before the new month's dates are fully rendered, making it ideal for triggering data fetches.
   */
  onViewChange?: (view: string) => void;
  /**
   * Controls the selection mode of the date picker:
   * - `'single'`: Allows selecting one date
   * - `'multiple'`: Allows selecting multiple individual dates
   * - `'range'`: Allows selecting a continuous range of dates
   *
   * @default "single"
   */
  type?: 'single' | 'multiple' | 'range';
  /**
   * Specifies allowed date values or ranges for selection. Uses ISO date format (YYYY-MM-DD) or partial dates (YYYY-MM, YYYY). Supports range syntax with `--` separator and comma-separated values.
   *
   * @default ""
   *
   * @example
   * `2024-02--2025` // allow any date from February 2024 to the end of 2025
   * `2024-02--` // allow any date from February 2024 onwards
   * `2024-05-09, 2024-05-11` // allow only the 9th and 11th of May 2024
   */
  allow?: string;
  /**
   * Specifies disallowed date values or ranges that can't be selected. Uses ISO date format (YYYY-MM-DD) or partial dates (YYYY-MM, YYYY). Supports range syntax with `--` separator and comma-separated values. Takes precedence over `allow`.
   *
   * @default ""
   *
   * @example
   * `--2024-02` // disallow any date before February 2024
   * `2024-05-09, 2024-05-11` // disallow the 9th and 11th of May 2024
   */
  disallow?: string;
  /**
   * Specifies which days of the week can be selected. Accepts comma-separated day names (case-insensitive). Further restricts dates within the result of `allow` and `disallow`.
   *
   * @default ""
   *
   * @example
   * 'saturday, sunday' // allow only weekends
   * 'monday, wednesday, friday' // allow only specific weekdays
   */
  allowDays?: string;
  /**
   * Specifies which days of the week can't be selected. Accepts comma-separated day names (case-insensitive). Further restricts dates within the result of `allow` and `disallow`.
   *
   * @default ""
   *
   * @example
   * 'saturday, sunday' // disallow weekends
   * 'monday' // disallow Mondays
   */
  disallowDays?: string;
  /**
   * The default date value used when the field is first rendered, in ISO date format (YYYY-MM-DD, for example, `"2024-05-15"`). An empty string means no default date. For date ranges, use comma-separated dates. Only applies if no `value` prop is provided.
   *
   * @default ""
   */
  defaultValue?: string;
  /**
   * The currently selected date value in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`, for example, `"2024-05-15"`). An empty string means no date is selected. For date ranges, use comma-separated dates (for example, `"2024-05-15,2024-05-20"`). Other date formats require conversion before setting this property. The selection mode (`type` property) is inferred from the value format: single date for one value, multiple dates for comma-separated values without a range, and range for two comma-separated dates when `type` is set to 'range'.
   *
   * @default ""
   */
  value?: string;
  /**
   * Called when the user makes any change to the field value. Fires on each keystroke or interaction.
   */
  onInput?: (event: Event) => void;
  /**
   * Called when the user has finished editing the field, typically triggered on blur after the value has changed.
   */
  onChange?: (event: Event) => void;
}
/**
 * Properties for a text-based date input field with validation and autocomplete support.
 */
export interface DateFieldProps
  extends GlobalProps,
    BaseTextFieldProps,
    Pick<
      DatePickerProps,
      | 'view'
      | 'defaultView'
      | 'defaultValue'
      | 'allow'
      | 'disallow'
      | 'allowDays'
      | 'disallowDays'
      | 'onViewChange'
    >,
    AutocompleteProps<DateAutocompleteField> {
  /**
   * Called when the user enters an invalid value. Fires after change validation fails.
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
/**
 * Properties for a spinner-style date selector with increment/decrement controls.
 */
export interface DateSpinnerProps
  extends GlobalProps,
    Pick<
      DatePickerProps,
      'defaultValue' | 'value' | 'onInput' | 'onChange' | 'onBlur' | 'onFocus'
    > {
  /**
   * The default date value used when the field is first rendered, in ISO date format (YYYY-MM-DD, for example, `"2024-05-15"`). An empty string means no default date. Only applies if no `value` prop is provided.
   *
   * @default ""
   */
  defaultValue?: string;
  /**
   * The currently selected date value in ISO date format (YYYY-MM-DD, for example, `"2024-05-15"`). An empty string means no date is selected.
   *
   * @default ""
   */
  value?: string;
  /**
   * Called when the user makes any change to the field value. Fires on each keystroke or interaction.
   */
  onInput?: (event: Event) => void;
  /**
   * Called when the user has finished editing the field, typically triggered on blur after the value has changed. Date validation occurs when the user finishes editing (on blur), rather than on every keystroke.
   */
  onChange?: (event: Event) => void;
}
/**
 * Properties for a visual divider line that separates content sections.
 */
export interface DividerProps extends GlobalProps {
  /**
   * The direction of the divider using [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values). An inline divider runs horizontally across the content flow, while a block divider runs vertically along the content flow.
   *
   * Available options:
   * - `'inline'`: A horizontal divider that runs perpendicular to the text direction, creating separation between vertically stacked content sections.
   * - `'block'`: A vertical divider that runs parallel to the text direction, creating separation between horizontally arranged content sections.
   *
   * @default 'inline'
   */
  direction?: 'inline' | 'block';
  /**
   * The color intensity of the divider. Controls how prominent or subtle the divider appears.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
}
/**
 * Properties for an email address input field with validation and autocomplete support.
 */
export interface EmailFieldProps
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<EmailAutocompleteField> {}
/**
 * Autocomplete field types applicable to email input fields.
 */
export type EmailAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'email' | `${AutocompleteAddressGroup} email`
>;
/**
 * A spacing size keyword including the option for no spacing.
 */
export type SpacingKeyword = SizeKeyword | 'none';
/**
 * Properties for controlling the spacing between child elements in a container.
 */
export interface GapProps {
  /**
   * The spacing between child elements. A single value applies to both axes. Two values (for example, `large-100 large-500`) set the block axis (first value) and inline axis (second value) respectively.
   *
   * @default 'none'
   */
  gap?: MaybeResponsive<MaybeTwoValuesShorthandProperty<SpacingKeyword>>;
  /**
   * The spacing between child elements along the block axis (typically vertical). Overrides the block axis value from `gap`.
   *
   * @default '' - meaning no override
   */
  rowGap?: MaybeResponsive<SpacingKeyword | ''>;
  /**
   * The spacing between child elements along the inline axis (typically horizontal). Overrides the inline axis value from `gap`.
   *
   * @default '' - meaning no override
   */
  columnGap?: MaybeResponsive<SpacingKeyword | ''>;
}
/**
 * A baseline alignment position keyword.
 */
export type BaselinePosition = 'baseline' | 'first baseline' | 'last baseline';
/**
 * A content distribution strategy keyword for spacing.
 */
export type ContentDistribution =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
/**
 * A content position alignment keyword.
 */
export type ContentPosition = 'center' | 'start' | 'end';
/**
 * A content position with optional overflow safety modifier.
 */
export type OverflowPosition =
  | `unsafe ${ContentPosition}`
  | `safe ${ContentPosition}`;
/**
 * A type that defines how children are aligned along the cross axis.
 * Sets the align-self value on all direct children as a group.
 *
 * Learn more about [`align-items` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
 */
export type AlignItemsKeyword =
  | 'normal'
  | 'stretch'
  | BaselinePosition
  | OverflowPosition
  | ContentPosition;
/**
 * A type that defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
 *
 * Learn more about [`justify-content` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
 */
export type JustifyContentKeyword =
  | 'normal'
  | ContentDistribution
  | OverflowPosition
  | ContentPosition;
/**
 * A type that defines the distribution of space between and around content items along a flexbox's cross axis, or a grid or block-level element's block axis.
 *
 * Learn more about [`align-content` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
 */
export type AlignContentKeyword =
  | 'normal'
  | BaselinePosition
  | ContentDistribution
  | OverflowPosition
  | ContentPosition;
/**
 * Base properties for text styling and appearance.
 */
export interface BaseTypographyProps {
  /**
   * The color intensity of the text. Controls how prominent or subtle the text appears within the interface.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * The semantic tone of the text, based on the intention of the information being conveyed. Affects color and styling to communicate meaning.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Controls how numbers are displayed in the text:
   * - `'auto'`: Inherits the setting from the parent element.
   * - `'normal'`: Uses the default number rendering for the font.
   * - `'tabular-nums'`: Uses fixed-width numbers for better alignment in tables and lists.
   *
   * Learn more about [`font-variant-numeric` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric).
   *
   * @default 'auto'
   */
  fontVariantNumeric?: 'auto' | 'normal' | 'tabular-nums';
  /**
   * Specifies the language of text content using an [IETF BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) language tag (for example, `"en"` for English, `"fr"` for French, `"es-MX"` for Mexican Spanish, `"zh-Hans"` for Simplified Chinese). This enables assistive technologies to use correct pronunciation and language-specific text rendering.
   *
   * @default ''
   */
  lang?: string;
  /**
   * Indicates the directionality of the element's text:
   * - `ltr`: languages written from left to right (for example, English).
   * - `rtl`: languages written from right to left (for example, Arabic).
   * - `auto`: the user agent determines the direction based on the content.
   * - `''`: direction is inherited from parent elements (equivalent to not setting the attribute).
   *
   * Learn more about the [`dir` attribute on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir).
   *
   * @default ''
   */
  dir?: 'ltr' | 'rtl' | 'auto' | '';
}
/**
 * Properties for controlling multi-line text behavior and truncation.
 */
export interface BlockTypographyProps {
  /**
   * Limits the text content to a specified number of visible lines. When text exceeds this limit, it's truncated and an ellipsis (`…`) appears at the end of the last visible line to indicate more content exists. The truncation happens automatically based on the container's width, font size, and line height—narrow containers or large fonts will show fewer words per line. For example, `lineClamp={3}` allows maximum three lines of text regardless of total content length. Users can't access the hidden text unless an expansion mechanism (like a "Read more" button) or tooltip is provided. Commonly applied to maintain consistent layout heights in cards, lists, or grids where varying text lengths would disrupt visual alignment. Common values include 1-2 for titles/labels, 2-3 for descriptions, and 4-6 for preview text. The actual text content remains in the DOM and is accessible to screen readers (full text is announced), search engines, and selection—only the visual display is truncated. Learn more about [`line-clamp` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp).
   *
   * @default Infinity - no truncation is applied
   */
  lineClamp?: number;
}
/**
 * Properties for heading text elements with semantic structure and line clamping.
 */
export interface HeadingProps
  extends GlobalProps,
    AccessibilityVisibilityProps,
    BlockTypographyProps {
  /**
   * The child elements to render within this component. Use plain text or simple inline elements only for heading content. Rich text format isn't supported.
   */
  children?: ComponentChildren;
  /**
   * Sets the semantic role for assistive technologies. Helps screen reader users navigate and understand page structure.
   *
   * @default 'heading'
   *
   * @implementation The `heading` role doesn't need to be applied if
   * the host applies it for you; for example, an HTML host rendering
   * an `<h2>` element shouldn't apply the `heading` role.
   */
  accessibilityRole?:
    | 'heading'
    | ExtractStrict<AccessibilityRole, 'presentation' | 'none'>;
}
/**
 * Properties for icon elements including type, size, color, and tone.
 */
export interface IconProps
  extends GlobalProps,
    Pick<InteractionProps, 'interestFor'> {
  /**
   * Sets the tone of the icon, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Modify the color to be more or less intense. Use `'subdued'` for secondary icons, `'base'` for standard visibility, or `'strong'` for emphasized icons that need to stand out.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * Adjusts the size of the icon. Available sizes range from `'small-500'` (smallest) through `'base'` (default) to `'large-500'` (largest), allowing you to match icon size to your interface hierarchy.
   *
   * @default 'base'
   */
  size?: SizeKeyword;
  /**
   * The type of icon to display.
   */
  type?: IconType | AnyString;
}
/**
 * Base properties for image elements including source URLs and alternative text.
 */
export interface BaseImageProps {
  /**
   * Alternative text that describes the image content for users who can't see the image. This text is announced by screen readers, displayed when images fail to load or are blocked, and used by search engines for image indexing. Write concise, descriptive alt text that conveys the image's purpose and content (for example, "Product photo of blue running shoes" not "image" or "photo"). For decorative images that don't convey information, use an empty string (`alt=""`) to hide them from screen readers. For images containing text, include that text in the alt description. For complex images like charts or diagrams, consider providing a longer description elsewhere and summarizing in alt text. Alt text is required for accessibility compliance and should describe what users would miss if they couldn't see the image.
   *
   * @default `''`
   * Learn more about [`alt` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt).
   */
  alt?: string;
  /**
   * Defines the image sizes for different viewport widths to help the browser select the optimal image from `srcSet`. This is a comma-separated list of media conditions and corresponding sizes (for example, `"(max-width: 600px) 480px, 800px"`). The browser uses this with `srcSet` to determine which image variant to download based on the device's screen size and pixel density, improving performance by loading appropriately-sized images. For example, mobile devices receive smaller images while desktops get larger, higher-resolution versions. When `srcSet` provides multiple image sizes, `sizes` tells the browser the rendered size at different viewport widths. If omitted, the browser assumes `100vw` (full viewport width). This only affects which image is selected, not how it's displayed—use CSS or `inlineSize` for display sizing.
   *
   * Learn more about [`sizes` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes).
   */
  sizes?: string;
  /**
   * The image source URL (remote URL or local file resource). When loading or no src is provided, a placeholder is rendered. Ensure URLs are properly formatted and properly formatted.
   */
  src?: string;
  /**
   * A set of image source URLs with descriptors for responsive image selection. Provides multiple image variants at different widths or pixel densities, allowing browsers to choose the most appropriate image for the user's device and screen. Format: comma-separated list of `URL descriptor` pairs where descriptors are either width (`w`) or pixel density (`x`). For example: `"small.jpg 480w, medium.jpg 800w, large.jpg 1200w"` for different widths, or `"standard.jpg 1x, retina.jpg 2x"` for different pixel densities. The browser considers the device's screen size, resolution, network speed, and user preferences when selecting which image to download. This improves performance (smaller images on mobile) and quality (high-DPI images on retina displays). When used with `sizes`, enables fully responsive images. The `src` property serves as fallback for browsers that don't support `srcSet`.
   *
   * Learn more about [`src` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src).set
   */
  srcSet?: string;
}
/**
 * Properties for image elements including size, aspect ratio, loading behavior, and border styling.
 */
export interface ImageProps extends GlobalProps, BaseImageProps, BorderProps {
  /**
   * Sets the semantic role for assistive technologies. Helps screen reader users navigate and understand page structure.
   *
   * @default 'img'
   *
   * @implementation The `img` role doesn't need to be applied if
   * the host applies it for you; for example, an HTML host rendering
   * an `<img>` element shouldn't apply the `img` role.
   */
  accessibilityRole?:
    | 'img'
    | ExtractStrict<AccessibilityRole, 'presentation' | 'none'>;
  /**
   * Controls the displayed width of the image. Choose based on your layout requirements. For mobile interfaces, consider using `'fill'` with defined container dimensions to ensure consistent image display, as dynamic container heights can cause layout inconsistencies in scrollable views.
   *
   * - `'auto'` - Displays the image at its natural size. The image will not render until it has loaded, and the aspect ratio will be ignored. Use for images where maintaining original dimensions is important.
   * - `'fill'` - Makes the image take up 100% of the available inline size. The aspect ratio will be respected and the image will take the necessary space. Use for responsive layouts and flexible image containers.
   *
   * @default 'fill'
   */
  inlineSize?: 'fill' | 'auto';
  /**
   * The aspect ratio of the image, expressed as width divided by height.
   *
   * The rendering of the image will depend on the `inlineSize` value:
   *
   * - `inlineSize="fill"`: The aspect ratio will be respected and the image will take the necessary space.
   * - `inlineSize="auto"`: The image won't render until it has loaded and the aspect ratio will be ignored.
   *
   * For example, if the value is set as `50 / 100`, the getter returns `50 / 100`.
   * If the value is set as `0.5`, the getter returns `0.5 / 1`.
   *
   * @default '1/1'
   */
  aspectRatio?:
    | `${number}${optionalSpace}/${optionalSpace}${number}`
    | `${number}`;
  /**
   * Controls how the image content is resized within its container.
   *
   * - `'contain'` - Scales the image to fit within the container while maintaining aspect ratio. The entire image will be visible, but there may be empty space. Use when showing the complete image is important.
   * - `'cover'` - Scales the image to fill the entire container while maintaining aspect ratio. Parts of the image may be cropped. Use when filling the container completely is more important than showing the entire image.
   *
   * @default 'contain'
   */
  objectFit?: 'contain' | 'cover';
  /**
   * Controls when the browser should begin loading the image resource:
   * - `'eager'`: Loads the image immediately when the page loads, regardless of whether it's visible in the viewport. The image downloads in parallel with other page resources. Use for above-the-fold images, critical product photos, or images that will definitely be viewed. This ensures images are ready when needed but increases initial page load bandwidth.
   * - `'lazy'`: Defers image loading until the image is approaching the viewport (typically a few hundred pixels before becoming visible). The browser only downloads the image when the user is likely to see it soon. Use for below-the-fold images, gallery images, or images in scrollable lists. This improves initial page load performance and saves bandwidth for images users may never scroll to. The browser maintains a buffer distance so images load before users reach them, preventing visible loading delays.
   *
   * Lazy loading is most effective for pages with many images, long scrollable content, or mobile users on limited bandwidth. Modern browsers support native lazy loading—older browsers ignore this and load eagerly.
   *
   * @default 'eager'
   * Learn more about [`loading` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading).
   */
  loading?: 'eager' | 'lazy';
  /**
   * Called when the image finishes loading successfully and is ready to display. This fires after the browser has downloaded the image data and decoded it, but may fire before the image is actually painted to the screen. Use this for hiding loading indicators, triggering dependent actions that require the image (like image processing), tracking image load metrics, or executing layout operations that depend on image dimensions. For performance tracking, compare timestamps between navigation start and this callback. Note that cached images may trigger this callback synchronously (immediately), so handle both async and sync invocation in your code. This won't fire if the image fails to load—listen to `onError` for failures.
   *
   * Learn more about [`onload` on MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload).
   */
  onLoad?: (event: Event) => void;
  /**
   * Called when the image fails to load due to network errors, invalid URLs, unsupported formats, [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) issues, or server errors (for example, 404, 500). The event contains limited error details for security reasons—the browser console provides specific failure reasons. Common operations include displaying fallback images (`event.target.src = 'fallback.jpg'`), showing error messages to users, logging failures for monitoring, hiding broken image icons, or providing alternative content when images are unavailable. A common pattern involves attempting to load a fallback image, and if that fails too, hiding the image container entirely. For critical images like product photos, a placeholder SVG or icon may be shown instead of a broken image indicator. This callback doesn't fire for images that are blocked by browser content policies or ad blockers.
   *
   * Learn more about [`onerror` on MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror).
   */
  onError?: (event: Event) => void;
}
/**
 * Properties for modal overlay dialogs including size, padding, actions, and lifecycle callbacks.
 */
export interface ModalProps
  extends GlobalProps,
    BaseOverlayProps,
    BaseOverlayMethods,
    ActionSlots {
  /**
   * A label that describes the purpose or contents of the element. Announced to users with assistive technologies such as screen readers to provide context.
   */
  accessibilityLabel?: string;
  /**
   * The title text displayed in the modal header. If omitted and no actions are provided, the modal will be rendered without a header.
   */
  heading?: string;
  /**
   * The padding applied to all edges of the modal content.
   *
   * @default 'base'
   */
  padding?: 'base' | 'none';
  /**
   * Controls the display size of the modal:
   * - Size keywords (for example, `'small'`, `'base'`, `'large'`): Fixed size options.
   * - `'max'`: Modal expands to fill the maximum available space.
   *
   * @default 'base'
   */
  size?: SizeKeyword | 'max';
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
/**
 * Properties for numeric input fields with validation, constraints, and optional stepper controls.
 */
export interface NumberFieldProps
  extends GlobalProps,
    BaseTextFieldProps,
    AutocompleteProps<NumberAutocompleteField>,
    NumberConstraintsProps,
    FieldDecorationProps {
  /**
   * The virtual keyboard layout that the field displays for numeric input. This property isn't supported when using `stepper` controls.
   *
   * - `'decimal'` - A keyboard layout that includes decimal point support for entering fractional numbers, prices, or measurements with decimal precision.
   * - `'numeric'` - A keyboard layout optimized for integer-only entry without decimal point support, ideal for quantities, counts, or whole number values.
   *
   * @default 'decimal'
   */
  inputMode?: 'decimal' | 'numeric';
}
/**
 * Autocomplete field types applicable to number input fields.
 */
export type NumberAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'one-time-code' | 'cc-number' | 'cc-csc'
>;
/**
 * Properties for page-level layouts including header, breadcrumbs, actions, and sidebar content.
 */
export interface PageProps extends GlobalProps, ActionSlots {
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
  /**
   * The title text displayed in the page header. If omitted and no actions are provided, the page will be rendered without a header.
   */
  heading?: string;
  /**
   * A secondary page heading displayed under the main heading in the action bar.
   */
  subheading?: string;
  /**
   * The additional content displayed in the header area. Commonly used to display clickable text or action elements. Only `Button` and `Clickable` components with text content only are supported in this slot. Use the `slot="accessory"` attribute to place elements in this area.
   */
  accessory?: ComponentChildren;
  /**
   * The navigation breadcrumb links displayed in the page header as link elements. These show the hierarchical path to the current page.
   */
  breadcrumbActions?: ComponentChildren;
  /**
   * The content to display in the page's sidebar. This area is for content that is tangentially related to the main content, such as navigation or contextual information. Use the `slot="aside"` attribute to place content in this area.
   *
   * @implementation surfaces built ontop of the web platform should implement this using the <aside> element https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
   */
  aside?: ComponentChildren;
  /**
   * Controls the maximum width of the page content.
   *
   * @default 'base'
   */
  inlineSize?: SizeKeyword;
}
/**
 * Properties for POS-specific content blocks with optional heading and secondary actions.
 */
export interface POSBlockProps
  extends GlobalProps,
    Pick<ActionSlots, 'secondaryActions'> {
  /**
   * The title text displayed in the block header. If omitted and no secondary actions are provided, the block will be rendered without a header.
   */
  heading?: string;
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
  /**
   * The secondary actions to perform, provided as button or link type elements.
   */
  secondaryActions?: ComponentChildren;
}
/**
 * Properties for QR code elements including content, size, border, and optional logo.
 */
export interface QRCodeProps extends GlobalProps {
  /**
   * Controls whether a border is displayed around the QR code.
   *
   * @default 'base'
   */
  border?: 'base' | 'none';
  /**
   * The content to be encoded in the QR code. This can be any string such as a URL, email address, plain text, or other data. Specific string formatting can trigger actions on the user's device when scanned, like opening geolocation coordinates on a map, opening a preferred app or app store entry, preparing an email, text message, and more.
   */
  content?: string;
  /**
   * Controls the display size of the QR code:
   * - `'base'`: Fixed size QR code
   * - `'fill'`: QR code expands to fill available space
   *
   * @default 'base'
   */
  size?: 'base' | 'fill';
  /**
   * A label that describes the purpose or contents of the element. Announced to users with assistive technologies such as screen readers to provide context.
   *
   * @default 'QR code' (translated to the user's locale)
   */
  accessibilityLabel?: string;
  /**
   * Called when the resource fails to load.
   */
  onError?: (event: Event) => void;
  /**
   * The URL of an image to be displayed in the center of the QR code.
   * This is useful for branding or to indicate to the user what scanning the QR code will do.
   * By default, no image is displayed.
   */
  logo?: string;
}
/**
 * Properties for scroll-related event callbacks and edge detection.
 */
export interface ScrollEventProps {
  /**
   * Called when scrolling reaches or moves away from any edge of the scrollable container.
   *
   * Provides information about which edges are currently reached:
   * - `inline: 'start'` - at the inline-start edge (typically left in LTR)
   * - `inline: 'end'` - at the inline-end edge (typically right in LTR)
   * - `block: 'start'` - at the block-start edge (typically top)
   * - `block: 'end'` - at the block-end edge (typically bottom)
   * - `null` - not at that edge
   */
  onScrollToEdge?: (
    inline: 'start' | 'end' | null,
    block: 'start' | 'end' | null,
  ) => void;
  /**
   * The threshold distance from each edge at which `onScrollToEdge` triggers. Percentage values are relative to the scrollable content's size in that axis. Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) in the order:
   * - 4 values: `block-start inline-end block-end inline-start`
   * - 3 values: `block-start inline block-end`
   * - 2 values: `block inline`
   * - 1 value: applies to all edges
   *
   * For example:
   * - `48px` - triggers 48px from all edges
   * - `48px 0` - triggers 48px from block edges, 0px from inline edges
   * - `48px 0 48px 10%` - custom distance for each edge
   *
   * @default '0'
   * Learn more about [`scrollMargin` on MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/scrollMargin).
   */
  scrollMargin?: MaybeAllValuesShorthandProperty<SizeUnits>;
}
/**
 * An overflow behavior keyword.
 */
export type OverflowKeyword = 'auto' | 'hidden';
/**
 * Properties for scrollable container elements with overflow control and scroll event detection.
 */
export interface ScrollBoxProps
  extends GlobalProps,
    ScrollEventProps,
    Omit<BaseBoxPropsWithRole, 'overflow'> {
  /**
   * Sets overflow behavior when content exceeds container dimensions. Use `'auto'` for scrolling or `'hidden'` to clip content.
   *
   * @default 'auto'
   *
   * Learn more about [CSS overflow on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow).
   */
  overflow?: OverflowKeyword | `${OverflowKeyword} ${OverflowKeyword}`;
}
/**
 * Properties for search input fields with text validation and autocomplete support.
 */
export interface SearchFieldProps
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<SearchAutocompleteField> {}
/**
 * Autocomplete field types applicable to search input fields (same as text fields).
 */
export type SearchAutocompleteField = TextAutocompleteField;
/**
 * Properties for content sections with optional heading and actions.
 */
export interface SectionProps extends GlobalProps, ActionSlots {
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
  /**
   * A label that describes the purpose or contents of the element. Announced to users with assistive technologies such as screen readers to provide context.
   */
  accessibilityLabel?: string;
  /**
   * A title that describes the content of the section. If omitted and no secondary actions are provided, the section will be rendered without a header.
   */
  heading?: string;
  /**
   * The padding applied to all edges of the section content.
   *
   * @default 'base'
   */
  padding?: 'base' | 'none';
}
/**
 * Properties for flexible layout containers with directional flow and alignment control.
 */
export interface StackProps
  extends GlobalProps,
    BaseBoxPropsWithRole,
    GapProps {
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
  /**
   * The direction in which children are laid out using logical properties:
   * - `'block'`: Vertical arrangement along the block axis (typically top to bottom) without wrapping
   * - `'inline'`: Horizontal arrangement along the inline axis (typically left to right) with automatic wrapping when space is insufficient
   *
   * @default 'block'
   *
   * @implementation the content will wrap if the direction is 'inline', and not wrap if the direction is 'block'
   */
  direction?: MaybeResponsive<'block' | 'inline'>;
  /**
   * Controls the distribution and alignment of children along the main axis (the axis defined by the `direction` property).
   *
   * Learn more about [`justify-content` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
   * @default 'normal'
   */
  justifyContent?: MaybeResponsive<JustifyContentKeyword>;
  /**
   * Controls the alignment of individual children along the cross axis (perpendicular to the main axis).
   *
   * Learn more about [`align-items` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
   * @default 'normal'
   */
  alignItems?: MaybeResponsive<AlignItemsKeyword>;
  /**
   * Controls the distribution of space between and around lines of wrapped content along the cross axis.
   *
   * Learn more about [`align-content` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
   * @default 'normal'
   */
  alignContent?: MaybeResponsive<AlignContentKeyword>;
}
/**
 * Properties for inline text elements with semantic meaning and styling options.
 */
export interface TextProps
  extends GlobalProps,
    AccessibilityVisibilityProps,
    BaseTypographyProps,
    DisplayProps,
    Pick<InteractionProps, 'interestFor'> {
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
  /**
   * The semantic meaning of the text, which may affect its default styling and how screen readers announce it. Other presentation properties can override the default styling.
   *
   * @default 'generic'
   */
  type?: TextType;
}
export type TextType =
  /**
   * Indicates that the text is contact information. Typically used for addresses.
   *
   * This must have `inline` layout (despite the default being `block` in HTML hosts).
   *
   * Surfaces may apply styling to this type.
   *
   * In an HTML host, the text will be rendered in an `<address>` element.
   *
   * @implementation vertical alignment should be `baseline` (`vertical-align: baseline`)
   *
   * Learn more about the [`address` element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address).
   */
  | 'address'
  /**
   * Indicates that the text is no longer accurate or no longer relevant. One such use-case is discounted prices.
   *
   * Surfaces should apply styling to this type to suggest its content no longer applies.
   *
   * In an HTML host, the text will be rendered in a `<s>` element.
   * Learn more about the [`s` element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s).
   */
  | 'redundant'
  /**
   * Indicates that the text is marked or highlighted and relevant to the user's current action.
   * One such use-case is to indicate the characters that matched a search query.
   *
   * Surfaces should apply styling to this type to draw attention to the content.
   *
   * In an HTML host, the text will be rendered in a `<mark>` element.
   * Learn more about [mark element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark).
   */
  | 'mark'
  /**
   * Indicates emphatic stress. Typically for words that have a stressed emphasis compared to surrounding text.
   *
   * Surfaces should apply styling to this type to distinguish it from surrounding text. Italicization is a common choice, but not required.
   *
   * In an HTML host, the text will be rendered in an `<em>` element.
   * Learn more about the [`em` element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em).
   */
  | 'emphasis'
  /**
   * Indicates an offset from the normal prose of the text. Typically used to indicate
   * a foreign word, fictional character thoughts, or when the text refers to the definition of a word
   * instead of representing its semantic meaning.
   *
   * Surfaces should italicize this content by default.
   *
   * In an HTML host, the text will be rendered in a `<i>` tag.
   * Learn more about the [`i` element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i).
   */
  | 'offset'
  /**
   * Indicates strong importance, seriousness, or urgency.
   *
   * Surfaces should render this content bold by default.
   *
   * In an HTML host, the text will be rendered in a `<strong>` tag.
   * Learn more about the [`s` element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s).trong
   */
  | 'strong'
  /**
   * Indicates that the text is considered less important than the main content, but is still necessary for the reader to understand.
   * It can be used for secondary content but also for disclaimers, terms and conditions, or legal information.
   *
   * Surfaces should apply a smaller font size than the default size.
   *
   * In an HTML host, the text will be rendered in a `<small>` element.
   * Learn more about the [`s` element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s).mall
   */
  | 'small'
  /**
   * Indicates that no additional semantics or styling is applied.
   *
   * Surfaces must not apply any default styling to this type.
   *
   * In an HTML host, the text will be rendered in a `<span>` tag.
   * Learn more about the [`s` element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s).pan
   */
  | 'generic';
/**
 * Properties for multi-line text input areas with character length constraints and autocomplete support.
 */
export interface TextAreaProps
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<TextAutocompleteField> {
  /**
   * The number of visible text lines that determines the initial height of the text area. Each row represents one line of text at the current font size. When users enter more content than fits in the specified rows, the text area becomes scrollable vertically, allowing access to overflow content. The text area doesn't auto-expand beyond this height. For example, `rows={3}` displays three lines of text at once. Use smaller values (2-3) for brief inputs like comments or notes, larger values (5-10) for substantial text entry like descriptions or feedback. This only sets initial height—users can resize the text area if the browser/surface allows it. The actual pixel height depends on font size and line height.
   *
   * @default 2
   */
  rows?: number;
}
/**
 * Properties for single-line text input fields with decorations, constraints, and autocomplete support.
 */
export interface TextFieldProps
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<TextAutocompleteField>,
    FieldDecorationProps {}
/**
 * Properties for clickable tile elements with heading, subheading, and optional count indicator.
 */
export interface TileProps
  extends GlobalProps,
    Pick<BaseClickableProps, 'onClick' | 'disabled'> {
  /**
   * The primary text label displayed prominently in the tile.
   *
   * @default ''
   */
  heading?: string;
  /**
   * The secondary descriptive text displayed below the heading.
   *
   * @default ''
   */
  subheading?: string;
  /**
   * A numeric value displayed as a counter or badge indicator. Used for showing quantities, notifications, or step numbers.
   */
  itemCount?: number;
  /**
   * Sets the visual tone of the tile based on the intention of the information being conveyed. Use `'accent'` to highlight important or primary actions, `'neutral'` for standard actions, or `'auto'` (default) to let the system determine the appropriate tone based on context.
   *
   * @default 'auto'
   */
  tone?: ExtractStrict<ToneKeyword, 'auto' | 'neutral' | 'accent'>;
}
/**
 * Properties for an interactive time picker component with allow/disallow time ranges.
 */
export interface TimePickerProps
  extends GlobalProps,
    InputProps,
    FocusEventProps {
  /**
   * Specifies allowed time values or ranges for selection. Uses 24-hour format (HH:mm or HH:mm:ss). Supports range syntax with `--` separator and comma-separated values.
   *
   * @default ''
   *
   * @example
   * `09:00--10:00, 13:00--14:00` - allows selecting times within these ranges based on step value
   * `12:00--` - allows selecting `12:00` and all times after it
   */
  allow?: string;
  /**
   * Specifies disallowed time values or ranges that can't be selected. Uses 24-hour format (HH:mm or HH:mm:ss). Supports range syntax with `--` separator and comma-separated values. Takes precedence over `allow`.
   *
   * @default ''
   *
   * @example
   * `09:00--10:00, 13:00--14:00` - disallows selecting times within these ranges
   */
  disallow?: string;
  /**
   * The default time value used when the field is first rendered, in 24-hour format with leading zeros (HH:mm:ss format, for example, `"09:05:00"`). An empty string means no default time. Only applies if no `value` prop is provided.
   *
   * @default ''
   */
  defaultValue?: string;
  /**
   * The currently selected time value in 24-hour format with leading zeros (HH:mm:ss format, for example, `"00:00:00"`, `"09:05:00"`, `"23:59:00"`, `"14:03:30"`). An empty string means no time is selected. This follows the [HTML time input value format](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time#value).
   *
   * @default ''
   */
  value?: string;
  /**
   * The increment step between selectable time values, specified in seconds. For example, `60` for one-minute intervals or `3600` for one-hour intervals.
   *
   * @default 60
   */
  step?: number;
}
/**
 * Properties for a text-based time input field with validation and time range constraints.
 */
export interface TimeFieldProps
  extends GlobalProps,
    BaseTextFieldProps,
    Pick<
      TimePickerProps,
      'value' | 'defaultValue' | 'allow' | 'disallow' | 'step'
    > {
  /**
   * Called when the user enters an invalid value. Fires after change validation fails.
   */
  onInvalid?: (event: Event) => void;
  /**
   * The currently selected time value in 24-hour format with leading zeros (HH:mm:ss format, for example, `"00:00:00"`, `"09:05:00"`, `"23:59:00"`, `"14:03:30"`). An empty string means no time is selected.
   */
  value?: string;
  /**
   * The default time value used when the field is first rendered, in 24-hour format with leading zeros (HH:mm:ss format, for example, `"09:05:00"`). An empty string means no default time. Only applies if no `value` prop is provided.
   */
  defaultValue?: string;
}
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
   * ref isn't guaranteed by React.ReactElement, for compatibility reasons
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
  // Static members can't reference class type parameters. This isn't
  // supported in TypeScript. Reusing the same type arguments from `Component`
  // will lead to an impossible state where one can't satisfy the type
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

type ComponentChildren = any;
/**
 * Used when an element doesn't have children.
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
type IntrinsicElementProps<T> = T & BaseElementPropsWithChildren<T>;
/**
 * Represents the event object passed to callback functions when interactive events occur. Contains metadata about the event, including the target element, event phase, and propagation behavior.
 */
interface CallbackEvent<T extends keyof HTMLElementTagNameMap> {
  /**
   * The element that the event listener is attached to.
   */
  currentTarget: HTMLElementTagNameMap[T];
  /**
   * Whether the event bubbles up through the DOM tree.
   */
  bubbles?: boolean;
  /**
   * Whether the event can be canceled.
   */
  cancelable?: boolean;
  /**
   * Whether the event will trigger listeners outside of a shadow root.
   */
  composed?: boolean;
  /**
   * Additional data associated with the event.
   */
  detail?: any;
  /**
   * The current phase of the event flow.
   */
  eventPhase: number;
  /**
   * The element that triggered the event.
   */
  target: HTMLElementTagNameMap[T] | null;
}

declare const tagName$t = 's-button';
interface ButtonJSXProps
  extends Pick<
    ButtonProps,
    'id' | 'disabled' | 'command' | 'commandFor' | 'loading'
  > {
  /**
   * The action to perform on the target element specified by `commandFor`:
   * - `'--auto'`: Execute the target's default action
   * - `'--show'`: Display the target element
   * - `'--hide'`: Hide the target element
   * - `'--toggle'`: Switch the target's visibility state
   *
   * Learn more about [`command` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command).
   *
   * @default '--auto'
   *
   */
  command?: Extract<
    ButtonProps['command'],
    '--auto' | '--show' | '--hide' | '--toggle'
  >;
  /**
   * Sets the tone of the button, based on the intention of the information being conveyed.
   *
   * - `'auto'` - Automatically determines the appropriate tone based on context.
   * - `'neutral'` - The standard tone for general actions and interactions.
   * - `'caution'` - Indicates actions that require careful consideration.
   * - `'warning'` - Alerts users to potential issues or important information.
   * - `'critical'` - Used for destructive actions like deleting or removing content.
   *
   * @default 'auto'
   */
  tone?: Extract<
    ButtonProps['tone'],
    'auto' | 'critical' | 'neutral' | 'warning' | 'caution'
  >;
  /**
   * The visual appearance and prominence of the button:
   * - `'primary'`: High visual emphasis for the most important action
   * - `'secondary'`: Less prominent appearance for supporting actions
   *
   * @default 'auto' - the variant is automatically determined by context
   */
  variant?: Extract<ButtonProps['variant'], 'primary' | 'secondary'>;
  /**
   * Called when the element is clicked or activated.
   */
  onClick?: (event: CallbackEvent<typeof tagName$t>) => void;
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$t]: ButtonJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$t]: IntrinsicElementProps<ButtonJSXProps>;
    }
  }
}

declare const tagName$s = 's-text';
interface TextJSXProps extends Pick<TextProps, 'id'> {
  /**
   * The color intensity of the text. Controls how prominent or subtle the text appears within the interface.
   *
   * @default 'base'
   */
  color?: Extract<TextProps['color'], 'base' | 'strong' | 'subdued'>;
  /**
   * The semantic meaning and default styling of the text. Other presentation properties override the default styling provided by the type. Available options:
   *
   * - `'generic'` - The default text type for general content without specific semantic meaning or emphasis.
   * - `'strong'` - A text type that provides emphasis and importance, typically rendered with increased font weight or visual prominence.
   * - `'small'` - A text type for secondary or supplementary content, typically rendered with reduced size for captions, fine print, or less important information.
   *
   * @default 'generic'
   */
  type?: Extract<TextProps['type'], 'generic' | 'strong' | 'small'>;
  /**
   * Determines the visual appearance and semantic meaning of the text. Available options:
   *
   * - `'auto'` - Lets the system automatically choose the appropriate tone based on context. Use when you want the system to determine the most appropriate styling.
   * - `'neutral'` - Gray styling for general status information that doesn't require emphasis. Use for general status updates and standard information.
   * - `'info'` - Blue styling for informational content and neutral updates. Use for informational content that provides helpful context.
   * - `'success'` - Green styling for positive states, completed actions, and successful operations. Use for positive outcomes and successful processes.
   * - `'caution'` - Yellow styling for situations that need attention but aren't urgent. Use for potential issues that require awareness.
   * - `'warning'` - Orange styling for important notices that require merchant awareness. Use for situations that need attention but aren't critical.
   * - `'critical'` - Red styling for errors, failures, and urgent issues requiring immediate action. Use for urgent issues that need immediate merchant attention.
   *
   * @default 'auto'
   */
  tone?: Extract<
    TextProps['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical' | 'caution'
  >;
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$s]: TextJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$s]: IntrinsicElementProps<TextJSXProps>;
    }
  }
}

type PaddingKeyword$2 = SizeKeyword | 'none';
declare const tagName$r = 's-scroll-box';
interface ScrollBoxJSXProps extends Pick<ScrollBoxProps, 'id'> {
  /**
   * The block size of the scrollable container. Auto automatically sizes based on the container's content and available space.
   *
   * @default 'auto'
   */
  blockSize?: SizeUnitsOrAuto;
  /**
   * The inline size of the scrollable container. Auto automatically sizes based on the container's content and available space.
   *
   * @default 'auto'
   */
  inlineSize?: SizeUnitsOrAuto;
  /**
   * The maximum block size constraint for the scrollable container.
   *
   * @default 'none'
   */
  maxBlockSize?: SizeUnitsOrNone;
  /**
   * The maximum inline size constraint for the scrollable container.
   *
   * @default 'none'
   */
  maxInlineSize?: SizeUnitsOrNone;
  /**
   * The minimum block size constraint for the scrollable container.
   *
   * @default '0'
   */
  minBlockSize?: SizeUnits;
  /**
   * The minimum inline size constraint for the scrollable container.
   *
   * @default '0'
   */
  minInlineSize?: SizeUnits;
  /**
   * The padding applied to all edges of the scrollable container. Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties#edges_of_a_box) using flow-relative values in the order:
   *
   * - 4 values: `block-start inline-end block-end inline-start`
   * - 3 values: `block-start inline block-end`
   * - 2 values: `block inline`
   *
   * For example:
   *
   * - `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
   * - `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
   * - `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
   * - `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
   *
   * An `auto` value inherits the default padding from the closest container that has removed its usual padding.
   *
   * @default 'none'
   */
  padding?: MaybeAllValuesShorthandProperty<PaddingKeyword$2>;
  /**
   * The block-axis padding for the scrollable container. Overrides the block value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingBlock?: MaybeTwoValuesShorthandProperty<PaddingKeyword$2> | '';
  /**
   * The block-start padding for the scrollable container. Overrides the block-start value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart?: PaddingKeyword$2 | '';
  /**
   * The block-end padding for the scrollable container. Overrides the block-end value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd?: PaddingKeyword$2 | '';
  /**
   * The inline-axis padding for the scrollable container. Supports two-value syntax where `large none` sets inline-start to `large` and inline-end to `none`. Overrides the inline value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingInline?: MaybeTwoValuesShorthandProperty<PaddingKeyword$2> | '';
  /**
   * The inline-start padding for the scrollable container. Overrides the inline-start value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart?: PaddingKeyword$2 | '';
  /**
   * The inline-end padding for the scrollable container. Overrides the inline-end value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd?: PaddingKeyword$2 | '';
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$r]: ScrollBoxJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$r]: IntrinsicElementProps<ScrollBoxJSXProps>;
    }
  }
}

declare const tagName$q = 's-tile';
interface TileJSXProps
  extends Pick<
    TileProps,
    'heading' | 'id' | 'itemCount' | 'tone' | 'subheading'
  > {
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: TileProps['disabled'];
  /**
   * Called when the element is clicked or activated.
   */
  onClick?: (event: CallbackEvent<typeof tagName$q>) => void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$q]: TileJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$q]: IntrinsicElementProps<TileJSXProps>;
    }
  }
}

declare const tagName$p = 's-banner';
interface BannerJSXProps extends Pick<BannerProps, 'heading' | 'id'> {
  /**
   * Whether the banner is visible or hidden. When set to `true`, the banner will be hidden from view. Use this to programmatically show or hide banners based on application state.
   *
   * @default false
   */
  hidden?: BannerProps['hidden'];
  /**
   * Sets the visual appearance of the banner. The tone determines the color scheme. Available options:
   *
   * - `'auto'` - Lets the system automatically choose the appropriate tone based on context.
   * - `'success'` - Green styling for positive outcomes and successful operations.
   * - `'info'` - Blue styling for general information and neutral updates.
   * - `'warning'` - Orange styling for important notices that require attention.
   * - `'critical'` - Red styling for errors and urgent issues requiring immediate action.
   *
   * @default 'auto'
   */
  tone?: Extract<
    BannerProps['tone'],
    'auto' | 'success' | 'info' | 'warning' | 'critical'
  >;
  /**
   * The primary action element displayed in the banner. Typically a button element.
   */
  primaryAction?: ComponentChild;
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
type ElementProps$9 = Omit<BannerJSXProps, 'primaryAction'>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName$p]: ElementProps$9;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$p]: IntrinsicElementProps<ElementProps$9>;
    }
  }
}

declare const tagName$o = 's-box';
type PaddingKeyword$1 = SizeKeyword | 'none';
interface BoxJSXProps {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * The block size of the container. Auto automatically sizes based on the container's children.
   *
   * @default 'auto'
   */
  blockSize?: SizeUnitsOrAuto;
  /**
   * The inline size of the container. Auto automatically sizes based on the container's children.
   *
   * @default 'auto'
   */
  inlineSize?: SizeUnitsOrAuto;
  /**
   * The maximum block size constraint for the container.
   *
   * @default 'none'
   */
  maxBlockSize?: SizeUnitsOrNone;
  /**
   * The maximum inline size constraint for the container.
   *
   * @default 'none'
   */
  maxInlineSize?: SizeUnitsOrNone;
  /**
   * The minimum block size constraint for the container.
   *
   * @default '0'
   */
  minBlockSize?: SizeUnits;
  /**
   * The minimum inline size constraint for the container.
   *
   * @default '0'
   */
  minInlineSize?: SizeUnits;
  /**
   * The padding applied to all edges of the container. Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties#edges_of_a_box) using flow-relative values in the order:
   *
   * - 4 values: `block-start inline-end block-end inline-start`
   * - 3 values: `block-start inline block-end`
   * - 2 values: `block inline`
   *
   * For example:
   *
   * - `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
   * - `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
   * - `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
   * - `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
   *
   * An `auto` value inherits the default padding from the closest container that has removed its usual padding.
   *
   * @default 'none'
   */
  padding?: MaybeAllValuesShorthandProperty<PaddingKeyword$1>;
  /**
   * The block-axis padding for the container. Overrides the block value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingBlock?: MaybeTwoValuesShorthandProperty<PaddingKeyword$1> | '';
  /**
   * The block-start padding for the container. Overrides the block-start value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart?: PaddingKeyword$1 | '';
  /**
   * The block-end padding for the container. Overrides the block-end value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd?: PaddingKeyword$1 | '';
  /**
   * The inline-axis padding for the container. Supports two-value syntax where `large none` sets inline-start to `large` and inline-end to `none`. Overrides the inline value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingInline?: MaybeTwoValuesShorthandProperty<PaddingKeyword$1> | '';
  /**
   * The inline-start padding for the container. Overrides the inline-start value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart?: PaddingKeyword$1 | '';
  /**
   * The inline-end padding for the container. Overrides the inline-end value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd?: PaddingKeyword$1 | '';
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$o]: BoxJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$o]: IntrinsicElementProps<BoxJSXProps>;
    }
  }
}

declare const tagName$n = 's-icon';
/**
 * Lists all currently supported icon names available for use in the POS interface. Reference this list when selecting icons to ensure compatibility and availability.
 */
type SupportedIconNames = Extract<
  IconProps['type'],
  | 'alert-circle'
  | 'apps'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'backspace'
  | 'barcode'
  | 'battery-low'
  | 'bolt-filled'
  | 'bullet'
  | 'camera-flip'
  | 'caret-down'
  | 'caret-up'
  | 'cart'
  | 'cart-down'
  | 'cart-filled'
  | 'cart-send'
  | 'cart-up'
  | 'chart-line'
  | 'chart-vertical'
  | 'check'
  | 'check-circle-filled'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'circle'
  | 'clipboard-checklist'
  | 'clock'
  | 'collection'
  | 'credit-card'
  | 'credit-card-reader'
  | 'delete'
  | 'delivery'
  | 'desktop'
  | 'disabled'
  | 'disabled-filled'
  | 'discount'
  | 'discount-add'
  | 'discount-automatic'
  | 'discount-code'
  | 'discount-remove'
  | 'drag-handle'
  | 'drawer'
  | 'duplicate'
  | 'edit'
  | 'email'
  | 'exchange'
  | 'external'
  | 'flag'
  | 'gift-card'
  | 'graduation-hat'
  | 'grid'
  | 'hide-filled'
  | 'home'
  | 'home-filled'
  | 'image'
  | 'images'
  | 'info'
  | 'inventory'
  | 'inventory-edit'
  | 'inventory-list'
  | 'inventory-transfer'
  | 'keyboard-hide'
  | 'keypad'
  | 'link'
  | 'list-bulleted'
  | 'list-bulleted-filled'
  | 'live'
  | 'live-critical'
  | 'live-none'
  | 'location'
  | 'lock'
  | 'maximize'
  | 'menu'
  | 'menu-filled'
  | 'menu-horizontal'
  | 'minimize'
  | 'minus'
  | 'mobile'
  | 'money'
  | 'money-split'
  | 'note'
  | 'order'
  | 'order-draft'
  | 'order-filled'
  | 'package'
  | 'package-cancel'
  | 'package-reassign'
  | 'payment'
  | 'person'
  | 'person-add'
  | 'person-filled'
  | 'phablet'
  | 'phone-out'
  | 'play-circle'
  | 'plus'
  | 'point-of-sale'
  | 'point-of-sale-register'
  | 'print'
  | 'product'
  | 'product-filled'
  | 'profile'
  | 'question-circle-filled'
  | 'receipt'
  | 'refresh'
  | 'return'
  | 'scan-qr-code'
  | 'search'
  | 'send'
  | 'settings'
  | 'shipping-label-cancel'
  | 'sort'
  | 'star-circle'
  | 'star-filled'
  | 'store'
  | 'tablet'
  | 'transaction-fee-add'
  | 'unlock'
  | 'variant'
  | 'view'
  | 'wallet'
  | 'x'
  | 'x-circle'
>;
interface IconJSXProps
  extends Pick<IconProps, 'id' | 'tone' | 'color' | 'size'> {
  /**
   * The type of icon to display.
   *
   * @default ''
   */
  type?: SupportedIconNames;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$n]: IconJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$n]: IntrinsicElementProps<IconJSXProps>;
    }
  }
}

declare const tagName$m = 's-stack';
type PaddingKeyword = SizeKeyword | 'none';
type PickedProps = Pick<
  StackProps,
  | 'id'
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
  | 'rowGap'
>;
interface StackJSXProps extends PickedProps {
  /**
   * The padding applied to all edges of the container. Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties#edges_of_a_box) using flow-relative values in the order:
   *
   * - 4 values: `block-start inline-end block-end inline-start`
   * - 3 values: `block-start inline block-end`
   * - 2 values: `block inline`
   *
   * For example:
   *
   * - `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
   * - `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
   * - `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
   * - `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
   *
   * An `auto` value inherits the default padding from the closest container that has removed its usual padding.
   *
   * @default 'none'
   */
  padding?: MaybeAllValuesShorthandProperty<PaddingKeyword>;
  /**
   * The block-axis padding for the container. Overrides the block value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingBlock?: MaybeTwoValuesShorthandProperty<PaddingKeyword | ''>;
  /**
   * The block-start padding for the container. Overrides the block-start value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart?: PaddingKeyword | '';
  /**
   * The block-end padding for the container. Overrides the block-end value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd?: PaddingKeyword | '';
  /**
   * The inline-axis padding for the container. Supports two-value syntax where `large none` sets inline-start to `large` and inline-end to `none`. Overrides the inline value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingInline?: MaybeTwoValuesShorthandProperty<PaddingKeyword | ''>;
  /**
   * The inline-start padding for the container. Overrides the inline-start value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart?: PaddingKeyword | '';
  /**
   * The inline-end padding for the container. Overrides the inline-end value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd?: PaddingKeyword | '';
  /**
   * The block size of the container. Auto automatically sizes based on the container's children.
   *
   * @default 'auto'
   */
  blockSize?: SizeUnitsOrAuto;
  /**
   * The maximum block size constraint for the container.
   *
   * @default 'none'
   */
  maxBlockSize?: SizeUnitsOrNone;
  /**
   * The maximum inline size constraint for the container.
   *
   * @default 'none'
   */
  maxInlineSize?: SizeUnitsOrNone;
  /**
   * The minimum block size constraint for the container.
   *
   * @default '0'
   */
  minBlockSize?: SizeUnits;
  /**
   * The minimum inline size constraint for the container.
   *
   * @default '0'
   */
  minInlineSize?: SizeUnits;
  /**
   * Controls the alignment of individual children along the cross axis (perpendicular to the main axis).
   */
  alignItems?: AlignItemsKeyword;
  /**
   * Controls the distribution of space between and around lines of wrapped content along the cross axis.
   */
  alignContent?: AlignContentKeyword;
  /**
   * The spacing between elements. A single value applies to both axes. A pair of values (eg large-100 large-500) can be used to set the inline and block axes respectively.
   *
   * @default 'none'
   */
  gap?: MaybeTwoValuesShorthandProperty<SpacingKeyword>;
  /**
   * The spacing between elements in the inline axis. This overrides the column value of gap.
   *
   * @default '' - meaning no override
   */
  columnGap?: SpacingKeyword | '';
  /**
   * The direction in which children are laid out using logical properties:
   * - `'block'`: Vertical arrangement along the block axis (typically top to bottom) without wrapping
   * - `'inline'`: Horizontal arrangement along the inline axis (typically left to right) with automatic wrapping when space is insufficient
   *
   * @default 'block'
   * @implementation - the content will wrap if the direction is 'inline', and not wrap if the direction is 'block'
   */
  direction?: 'block' | 'inline';
  /**
   * The inline size (width in horizontal writing modes) of the element.
   *
   * Learn more about [`inline-size` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).
   *
   * @default 'auto'
   */
  inlineSize?: SizeUnitsOrAuto;
  /**
   * Controls the distribution and alignment of children along the main axis (the axis defined by the `direction` property).
   *
   * Learn more about [`justify-content` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
   *
   * @default 'normal'
   */
  justifyContent?: JustifyContentKeyword;
  /**
   * The spacing between elements in the block axis. This overrides the row value of gap.
   *
   * @default '' - meaning no override
   */
  rowGap?: SpacingKeyword | '';
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$m]: StackJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$m]: IntrinsicElementProps<StackJSXProps>;
    }
  }
}

declare const tagName$l = 's-badge';
interface BadgeJSXProps extends Pick<BadgeProps, 'id'> {
  /**
   * Determines the visual appearance and semantic meaning of the badge. Badges rely on the tone system for semantic meaning, so using custom styling may not clearly convey meaning to merchants. Available options:
   *
   * - `'auto'` - Lets the system automatically choose the appropriate tone based on context.
   * - `'neutral'` - Gray styling for general status information that doesn't require emphasis.
   * - `'info'` - Blue styling for informational content and neutral updates.
   * - `'success'` - Green styling for positive states, completed actions, and successful operations.
   * - `'caution'` - Yellow styling for situations that need attention but aren't urgent.
   * - `'warning'` - Orange styling for important notices that require merchant awareness.
   * - `'critical'` - Red styling for errors, failures, and urgent issues requiring immediate action.
   *
   * @default 'auto'
   */
  tone?: Extract<
    BadgeProps['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical' | 'caution'
  >;
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$l]: BadgeJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$l]: IntrinsicElementProps<BadgeJSXProps>;
    }
  }
}

declare const tagName$k = 's-choice-list';
interface ChoiceListJSXProps
  extends Pick<ChoiceListProps, 'id' | 'values' | 'multiple'> {
  /**
   * Called when the user makes any change to the field value. Fires on each keystroke or interaction.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$k>) => void) | null;
  /**
   * Called when the user has finished editing the field, typically triggered on blur after the value has changed.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$k>) => void) | null;
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$k]: ChoiceListJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$k]: IntrinsicElementProps<ChoiceListJSXProps>;
    }
  }
}

declare const tagName$j = 's-choice';
interface ChoiceJSXProps
  extends Pick<ChoiceProps, 'id' | 'value' | 'disabled' | 'selected'> {
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$j]: ChoiceJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$j]: IntrinsicElementProps<ChoiceJSXProps>;
    }
  }
}

declare const tagName$i = 's-modal';
interface ModalJSXProps extends Pick<ModalProps, 'id' | 'heading'> {
  /**
   * A callback function that is executed when the element begins to hide, before any hide animations.
   */
  onHide?: (event: CallbackEvent<typeof tagName$i>) => void | null;
  /**
   * A callback function that is executed when the element begins to appear, before any show animations.
   */
  onShow?: (event: CallbackEvent<typeof tagName$i>) => void | null;
  /**
   * The primary action button element displayed in the modal.
   *
   * The tone of the button is used to define the tone of the modal.
   *
   * If omitted, the modal will default to an 'info' tone, and show an 'OK' button, translated according to the user's locale.
   */
  primaryAction?: ComponentChild;
  /**
   * The secondary action button elements displayed in the modal.
   */
  secondaryActions?: ComponentChild;
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
type ElementProps$8 = Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName$i]: ElementProps$8;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$i]: IntrinsicElementProps<ElementProps$8>;
    }
  }
}

declare const tagName$h = 's-text-field';
interface TextFieldJSXProps
  extends Pick<
    TextFieldProps,
    | 'id'
    | 'label'
    | 'details'
    | 'value'
    | 'placeholder'
    | 'disabled'
    | 'error'
    | 'required'
    | 'maxLength'
  > {
  /**
   * Called when the user makes any change to the field value. Fires on each keystroke or interaction.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$h>) => void) | null;
  /**
   * Called when the user has finished editing the field, typically triggered on blur after the value has changed.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$h>) => void) | null;
  /**
   * Called when focus is removed from the element.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$h>) => void) | null;
  /**
   * Called when the element receives focus through user interaction or programmatic focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$h>) => void) | null;
  /**
   * The additional content to be displayed in the field. Commonly used to display clickable text or action elements. Only `Button` and `Clickable` components with text content only are supported in this slot. Use the `slot="accessory"` attribute to place elements in this area.
   */
  accessory?: ComponentChild;
}
type ElementProps$7 = Omit<TextFieldJSXProps, 'accessory'>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName$h]: ElementProps$7;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$h]: IntrinsicElementProps<ElementProps$7>;
    }
  }
}

declare const tagName$g = 's-search-field';
interface SearchFieldJSXProps
  extends Pick<SearchFieldProps, 'id' | 'disabled' | 'placeholder' | 'value'> {
  /**
   * Called when the user makes any change to the field value. Fires on each keystroke or interaction.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$g>) => void) | null;
  /**
   * Called when the user has finished editing the field, typically triggered on blur after the value has changed.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$g>) => void) | null;
  /**
   * Called when focus is removed from the element.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$g>) => void) | null;
  /**
   * Called when the element receives focus through user interaction or programmatic focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$g>) => void) | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$g]: SearchFieldJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$g]: IntrinsicElementProps<SearchFieldJSXProps>;
    }
  }
}

declare const tagName$f = 's-email-field';
interface EmailFieldJSXProps
  extends Pick<
    EmailFieldProps,
    | 'id'
    | 'label'
    | 'value'
    | 'placeholder'
    | 'disabled'
    | 'error'
    | 'required'
    | 'maxLength'
    | 'details'
  > {
  /**
   * Called when the user makes any change to the field value. Fires on each keystroke or interaction.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$f>) => void) | null;
  /**
   * Called when the user has finished editing the field, typically triggered on blur after the value has changed.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$f>) => void) | null;
  /**
   * Called when focus is removed from the element.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$f>) => void) | null;
  /**
   * Called when the element receives focus through user interaction or programmatic focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$f>) => void) | null;
  /**
   * The additional content to be displayed in the field. Commonly used to display clickable text or action elements. Only `Button` and `Clickable` components with text content only are supported in this slot. Use the `slot="accessory"` attribute to place elements in this area.
   */
  accessory?: ComponentChild;
}
type ElementProps$6 = Omit<EmailFieldJSXProps, 'accessory'>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName$f]: ElementProps$6;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$f]: IntrinsicElementProps<ElementProps$6>;
    }
  }
}

declare const tagName$e = 's-clickable';
interface ClickableJSXProps extends Pick<ClickableProps, 'id' | 'disabled'> {
  /**
   * Called when the element is clicked or activated.
   */
  onClick?: (event: CallbackEvent<typeof tagName$e>) => void;
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$e]: ClickableJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$e]: IntrinsicElementProps<ClickableJSXProps>;
    }
  }
}

declare const tagName$d = 's-text-area';
interface TextAreaJSXProps
  extends Pick<
    TextAreaProps,
    | 'id'
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
  /**
   * Callback when the user makes any changes in the field.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$d>) => void) | null;
  /**
   * Called when the user has finished editing the field, typically triggered on blur after the value has changed.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$d>) => void) | null;
  /**
   * Called when focus is removed from the element.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$d>) => void) | null;
  /**
   * Called when the element receives focus through user interaction or programmatic focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$d>) => void) | null;
  /**
   * The additional content to be displayed in the field. Commonly used to display clickable text or action elements. Only `Button` and `Clickable` components with text content only are supported in this slot. Use the `slot="accessory"` attribute to place elements in this area.
   */
  accessory?: ComponentChild;
}
type ElementProps$5 = Omit<TextAreaJSXProps, 'accessory'>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName$d]: ElementProps$5;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$d]: IntrinsicElementProps<ElementProps$5>;
    }
  }
}

declare const tagName$c = 's-number-field';
interface NumberFieldJSXProps
  extends Pick<
    NumberFieldProps,
    | 'id'
    | 'label'
    | 'details'
    | 'value'
    | 'placeholder'
    | 'disabled'
    | 'error'
    | 'required'
    | 'max'
    | 'min'
    | 'controls'
  > {
  /**
   * The content to use as the field label that describes the time information being requested.
   */
  label?: NumberFieldProps['label'];
  /**
   * The additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user. This will also be exposed to screen reader users.
   */
  details?: NumberFieldProps['details'];
  /**
   * Whether the field needs a value. This requirement adds semantic value to the field but doesn't cause an error to appear automatically. Use the `error` property to present validation errors.
   *
   * @default false
   *
   * Required isn't supported when using Stepper controls
   */
  required?: NumberFieldProps['required'];
  /**
   * An error message to indicate a problem to the user. The field will be given specific stylistic treatment to communicate issues that must be resolved immediately.
   */
  error?: NumberFieldProps['error'];
  /**
   * The virtual keyboard layout that the field displays for numeric input. This property isn't supported when using `stepper` controls.
   *
   * - `'decimal'` - A keyboard layout that includes decimal point support for entering fractional numbers, prices, or measurements with decimal precision.
   * - `'numeric'` - A keyboard layout optimized for integer-only entry without decimal point support, ideal for quantities, counts, or whole number values.
   *
   * @default 'decimal'
   */
  inputMode?: NumberFieldProps['inputMode'];
  /**
   * A short hint that provides guidance about the expected value of the field.
   */
  placeholder?: NumberFieldProps['placeholder'];
  /**
   * The additional content to be displayed in the field. Commonly used to display clickable text or action elements. Only `Button` and `Clickable` components with text content only are supported in this slot. Use the `slot="accessory"` attribute to place elements in this area.
   */
  accessory?: ComponentChild;
  /**
   * The type of controls displayed for the field:
   *
   * - `'auto'` - An automatic setting where the presence of controls depends on the surface and context. The system determines the most appropriate control type based on the usage scenario.
   * - `'stepper'` - Displays increment (+) and decrement (-) buttons for adjusting the numeric value. When `stepper` controls are enabled, the field behavior is constrained: it accepts only integer values, always contains a value (never empty), and automatically validates against `min` and `max` bounds. The `label`, `details`, `placeholder`, `error`, `required`, and `inputMode` properties aren't supported with `stepper` controls.
   * - `'none'` - A control type with no visible controls where users must input the value manually using the keyboard.
   *
   * @default 'auto'
   */
  controls?: NumberFieldProps['controls'];
  /**
   * Called when the user makes any change to the field value. Fires on each keystroke or interaction.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$c>) => void) | null;
  /**
   * Called when the user has finished editing the field, typically triggered on blur after the value has changed.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$c>) => void) | null;
  /**
   * Called when focus is removed from the element.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$c>) => void) | null;
  /**
   * Called when the element receives focus through user interaction or programmatic focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$c>) => void) | null;
}
type ElementProps$4 = Omit<NumberFieldJSXProps, 'accessory'>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName$c]: ElementProps$4;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$c]: IntrinsicElementProps<ElementProps$4>;
    }
  }
}

declare const tagName$b = 's-date-field';
interface DateFieldJSXProps
  extends Pick<
    DateFieldProps,
    'id' | 'label' | 'details' | 'value' | 'disabled' | 'error'
  > {
  /**
   * Called when the user makes any change to the field value. Fires on each keystroke or interaction.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$b>) => void) | null;
  /**
   * Called when the user has finished editing the field, typically triggered on blur after the value has changed.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$b>) => void) | null;
  /**
   * Called when focus is removed from the element.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$b>) => void) | null;
  /**
   * Called when the element receives focus through user interaction or programmatic focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$b>) => void) | null;
}
type ElementProps$3 = Omit<DateFieldJSXProps, 'accessory'>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName$b]: ElementProps$3;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$b]: IntrinsicElementProps<ElementProps$3>;
    }
  }
}

declare const tagName$a = 's-date-picker';
interface DatePickerJSXProps extends Pick<DatePickerProps, 'id' | 'value'> {
  /**
   * Called when the user makes any change to the field value. Fires on each keystroke or interaction.
   */
  onInput?: (event: CallbackEvent<typeof tagName$a>) => void | null;
  /**
   * Called when the user has finished editing the field, typically triggered on blur after the value has changed.
   */
  onChange?: (event: CallbackEvent<typeof tagName$a>) => void | null;
  /**
   * Called when focus is removed from the element.
   */
  onBlur?: (event: CallbackEvent<typeof tagName$a>) => void | null;
  /**
   * Called when the element receives focus through user interaction or programmatic focus.
   */
  onFocus?: (event: CallbackEvent<typeof tagName$a>) => void | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$a]: DatePickerJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$a]: IntrinsicElementProps<DatePickerJSXProps>;
    }
  }
}

declare const tagName$9 = 's-date-spinner';
interface DateSpinnerJSXProps extends Pick<DateSpinnerProps, 'id' | 'value'> {
  /**
   * Called when the user makes any change to the field value. Fires on each keystroke or interaction.
   */
  onInput?: (event: CallbackEvent<typeof tagName$9>) => void | null;
  /**
   * Called when the user has finished editing the field, typically triggered on blur after the value has changed.
   */
  onChange?: (event: CallbackEvent<typeof tagName$9>) => void | null;
  /**
   * Called when focus is removed from the element.
   */
  onBlur?: (event: CallbackEvent<typeof tagName$9>) => void | null;
  /**
   * Called when the element receives focus through user interaction or programmatic focus.
   */
  onFocus?: (event: CallbackEvent<typeof tagName$9>) => void | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$9]: DateSpinnerJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$9]: IntrinsicElementProps<DateSpinnerJSXProps>;
    }
  }
}

declare const tagName$8 = 's-section';
interface SectionJSXProps extends Pick<SectionProps, 'id'> {
  /**
   * A title that describes the content of the section. If omitted and no secondary actions are provided, the section will be rendered without a header.
   */
  heading?: string;
  /**
   * Button element to display in the section heading. A single button is supported.
   */
  secondaryActions?: ComponentChild;
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
type ElementProps$2 = Omit<SectionJSXProps, 'secondaryActions'>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName$8]: ElementProps$2;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$8]: IntrinsicElementProps<ElementProps$2>;
    }
  }
}

declare const tagName$7 = 's-heading';
interface HeadingJSXProps extends Pick<HeadingProps, 'id'> {
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$7]: HeadingJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$7]: IntrinsicElementProps<HeadingJSXProps>;
    }
  }
}

declare const tagName$6 = 's-time-picker';
interface TimePickerJSXProps extends Pick<TimePickerProps, 'id' | 'value'> {
  /**
   * Called when the user makes any change to the field value. Fires on each keystroke or interaction.
   */
  onInput?: (event: CallbackEvent<typeof tagName$6>) => void | null;
  /**
   * Called when the user has finished editing the field, typically triggered on blur after the value has changed.
   */
  onChange?: (event: CallbackEvent<typeof tagName$6>) => void | null;
  /**
   * Called when focus is removed from the element.
   */
  onBlur?: (event: CallbackEvent<typeof tagName$6>) => void | null;
  /**
   * Called when the element receives focus through user interaction or programmatic focus.
   */
  onFocus?: (event: CallbackEvent<typeof tagName$6>) => void | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$6]: TimePickerJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$6]: IntrinsicElementProps<TimePickerJSXProps>;
    }
  }
}

declare const tagName$5 = 's-image';
interface ImageJSXProps extends Pick<ImageProps, 'id' | 'objectFit'> {
  /**
   * Controls the displayed width of the image. Choose based on your layout requirements. For mobile interfaces, consider using `'fill'` with defined container dimensions to ensure consistent image display, as dynamic container heights can cause layout inconsistencies in scrollable views.
   *
   * - `'auto'` - Displays the image at its natural size. The image will not render until it has loaded, and the aspect ratio will be ignored. Use for images where maintaining original dimensions is important.
   * - `'fill'` - Makes the image take up 100% of the available inline size. The aspect ratio will be respected and the image will take the necessary space. Use for responsive layouts and flexible image containers.
   *
   * @default 'fill'
   */
  inlineSize?: ImageProps['inlineSize'];
  /**
   * The image source URL (remote URL or local file resource). When loading or no src is provided, a placeholder is rendered. Ensure URLs are properly formatted and properly formatted.
   */
  src?: ImageProps['src'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$5]: ImageJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$5]: IntrinsicElementProps<ImageJSXProps>;
    }
  }
}

declare const tagName$4 = 's-page';
interface PageJSXProps extends Pick<PageProps, 'id'> {
  /**
   * A title that describes the content of the section. If omitted and no secondary actions are provided, the section will be rendered without a header.
   *
   * @default: ''
   */
  heading?: PageProps['heading'];
  /**
   * A secondary page heading displayed under the main heading in the action bar.
   */
  subheading?: PageProps['subheading'];
  /**
   * Button element to display in the action bar. Only a single button is supported.
   */
  secondaryActions?: ComponentChild;
  /**
   * The content to display in the page's sidebar. This area is for content that is tangentially related to the main content, such as navigation or contextual information. Use the `slot="aside"` attribute to place content in this area.
   */
  aside?: ComponentChild;
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
type ElementProps$1 = Omit<PageJSXProps, 'secondaryActions' | 'aside'>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName$4]: ElementProps$1;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$4]: IntrinsicElementProps<ElementProps$1>;
    }
  }
}

declare const tagName$3 = 's-time-field';
interface TimeFieldJSXProps
  extends Pick<
    TimeFieldProps,
    'id' | 'label' | 'disabled' | 'value' | 'error' | 'details'
  > {
  /**
   * Called when the user makes any change to the field value. Fires on each keystroke or interaction.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$3>) => void) | null;
  /**
   * Called when the user has finished editing the field, typically triggered on blur after the value has changed.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$3>) => void) | null;
  /**
   * Called when focus is removed from the element.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$3>) => void) | null;
  /**
   * Called when the element receives focus through user interaction or programmatic focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$3>) => void) | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$3]: TimeFieldJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$3]: IntrinsicElementProps<TimeFieldJSXProps>;
    }
  }
}

declare const tagName$2 = 's-pos-block';
interface PosBlockJSXProps extends Pick<POSBlockProps, 'id' | 'heading'> {
  /**
   * The secondary actions to perform, provided as button or link type elements.
   */
  secondaryActions?: ComponentChild;
  /**
   * The child elements to render within this component.
   */
  children?: ComponentChildren;
}
type ElementProps = Omit<PosBlockJSXProps, 'secondaryActions'>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName$2]: ElementProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$2]: IntrinsicElementProps<ElementProps>;
    }
  }
}

declare const tagName$1 = 's-qr-code';
interface QrCodeJSXProps extends Pick<QRCodeProps, 'id' | 'content'> {}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$1]: QrCodeJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$1]: IntrinsicElementProps<QrCodeJSXProps>;
    }
  }
}

declare const tagName = 's-divider';
interface DividerJSXProps extends Pick<DividerProps, 'id' | 'direction'> {}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: DividerJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<DividerJSXProps>;
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
  DatePickerJSXProps,
  DateSpinnerJSXProps,
  DividerJSXProps,
  EmailFieldJSXProps,
  HeadingJSXProps,
  IconJSXProps,
  ImageJSXProps,
  ModalJSXProps,
  NumberFieldJSXProps,
  PageJSXProps,
  PosBlockJSXProps,
  QrCodeJSXProps,
  ScrollBoxJSXProps,
  SearchFieldJSXProps,
  SectionJSXProps,
  StackJSXProps,
  TextAreaJSXProps,
  TextFieldJSXProps,
  TextJSXProps,
  TileJSXProps,
  TimeFieldJSXProps,
  TimePickerJSXProps,
};

interface Badge {
  /**
   * Determines the visual appearance and semantic meaning of the badge. Badges rely on the tone system for semantic meaning, so using custom styling may not clearly convey meaning to merchants. Available options:
   *
   * - `'auto'` - Lets the system automatically choose the appropriate tone based on context.
   * - `'neutral'` - Gray styling for general status information that doesn't require emphasis.
   * - `'info'` - Blue styling for informational content and neutral updates.
   * - `'success'` - Green styling for positive states, completed actions, and successful operations.
   * - `'caution'` - Yellow styling for situations that need attention but aren't urgent.
   * - `'warning'` - Orange styling for important notices that require merchant awareness.
   * - `'critical'` - Red styling for errors, failures, and urgent issues requiring immediate action.
   *
   * @default 'auto'
   */
  tone?:
    | 'auto'
    | 'neutral'
    | 'info'
    | 'success'
    | 'caution'
    | 'warning'
    | 'critical';
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
}

/**
 * The `Banner` component supports slots for additional content placement within the banner. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 */
interface BannerSlots {
  /**
   * The primary action element displayed within the banner, typically a button. Use this slot to provide interactive elements that allow users to respond to the banner's message, such as "Dismiss," "Learn More," or "Retry" buttons.
   */
  'primary-action'?: HTMLElement;
}

interface Banner {
  /**
   * Whether the banner is visible or hidden. When set to `true`, the banner will be hidden from view. Use this to programmatically show or hide banners based on app state.
   *
   * @default false
   */
  hidden?: boolean;
  /**
   * Sets the visual appearance of the banner. The tone determines the color scheme. Available options:
   *
   * - `'auto'` - Lets the system automatically choose the appropriate tone based on context.
   * - `'success'` - Green styling for positive outcomes and successful operations.
   * - `'info'` - Blue styling for general information and neutral updates.
   * - `'warning'` - Orange styling for important notices that require attention.
   * - `'critical'` - Red styling for errors and urgent issues requiring immediate action.
   *
   * @default 'auto'
   */
  tone?: 'auto' | 'info' | 'success' | 'warning' | 'critical';
  /**
   * The title text displayed prominently at the top of the banner. This is the only property for text content—body text content isn't supported. You can't place `<s-text>` or other text elements as children.
   *
   * @default ''
   */
  heading?: string;
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
}

interface Box {
  /**
   * A unique identifier for the element used for targeting with CSS or JavaScript.
   */
  id?: string;
  /**
   * The block size of the container. Auto automatically sizes based on the container's children.
   *
   * @default 'auto'
   */
  blockSize?: SizeUnitsOrAuto;
  /**
   * The inline size of the container. Auto automatically sizes based on the container's children.
   *
   * @default 'auto'
   */
  inlineSize?: SizeUnitsOrAuto;
  /**
   * The maximum block size constraint for the container.
   *
   * @default 'none'
   */
  maxBlockSize?: SizeUnitsOrNone;
  /**
   * The maximum inline size constraint for the container.
   *
   * @default 'none'
   */
  maxInlineSize?: SizeUnitsOrNone;
  /**
   * The minimum block size constraint for the container.
   *
   * @default '0'
   */
  minBlockSize?: SizeUnits;
  /**
   * The minimum inline size constraint for the container.
   *
   * @default '0'
   */
  minInlineSize?: SizeUnits;
  /**
   * The padding applied to all edges of the container. Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties#edges_of_a_box) using flow-relative values in the order:
   *
   * - 4 values: `block-start inline-end block-end inline-start`
   * - 3 values: `block-start inline block-end`
   * - 2 values: `block inline`
   *
   * For example:
   *
   * - `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
   * - `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
   * - `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
   * - `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
   *
   * An `auto` value inherits the default padding from the closest container that has removed its usual padding.
   *
   * @default 'none'
   */
  padding?: MaybeAllValuesShorthandProperty<PaddingKeyword>;
  /**
   * The block-axis padding for the container. Overrides the block value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingBlock?: '' | MaybeTwoValuesShorthandProperty<PaddingKeyword>;
  /**
   * The block-start padding for the container. Overrides the block-start value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart?: '' | PaddingKeyword;
  /**
   * The block-end padding for the container. Overrides the block-end value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd?: '' | PaddingKeyword;
  /**
   * The inline-axis padding for the container. Supports two-value syntax where `large none` sets inline-start to `large` and inline-end to `none`. Overrides the inline value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingInline?: '' | MaybeTwoValuesShorthandProperty<PaddingKeyword>;
  /**
   * The inline-start padding for the container. Overrides the inline-start value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart?: '' | PaddingKeyword;
  /**
   * The inline-end padding for the container. Overrides the inline-end value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd?: '' | PaddingKeyword;
}

/**
 * The `Button` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 */
interface ButtonEvents {
  /**
   * The callback when the element is activated.
   */
  click?: (event: CallbackEvent<typeof tagName$t>) => void;
}

interface Button {
  /**
   * The action to perform on the target element specified by `commandFor`:
   * - `'--auto'`: Execute the target's default action
   * - `'--show'`: Display the target element
   * - `'--hide'`: Hide the target element
   * - `'--toggle'`: Switch the target's visibility state
   *
   * Learn more about [`command` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command).
   *
   * @default '--auto'
   *
   */
  command?: '--auto' | '--show' | '--hide' | '--toggle';
  /**
   * Sets the tone of the button, based on the intention of the information being conveyed.
   *
   * - `'auto'` - Automatically determines the appropriate tone based on context.
   * - `'neutral'` - The standard tone for general actions and interactions.
   * - `'caution'` - Indicates actions that require careful consideration.
   * - `'warning'` - Alerts users to potential issues or important information.
   * - `'critical'` - Used for destructive actions like deleting or removing content.
   *
   * @default 'auto'
   */
  tone?: 'auto' | 'neutral' | 'caution' | 'warning' | 'critical';
  /**
   * The visual appearance and prominence of the button:
   * - `'primary'`: High visual emphasis for the most important action
   * - `'secondary'`: Less prominent appearance for supporting actions
   *
   * @default 'auto' - the variant is automatically determined by context
   */
  variant?: 'primary' | 'secondary';
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The ID of the target element that should respond to interactions (such as clicks) on this element. Used with `command` to control other components.
   * Learn more about [`commandfor` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor).
   */
  commandFor?: string;
  /**
   * Indicates whether the button action is currently in progress. When `true`, typically displays a loading indicator and may disable interaction.
   *
   * @default false
   */
  loading?: boolean;
}

interface Choice {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * The unique value associated with this choice option. This value is used to identify the option and gets submitted with forms when selected. Use meaningful values like `"small"`, `"medium"`, or `"large"` rather than display text.
   */
  value?: string;
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Whether the choice control is currently active or selected.
   *
   * @default false
   */
  selected?: boolean;
}

/**
 * The `ChoiceList` component provides event callbacks for handling user interactions and validation. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 */
interface ChoiceListEvents {
  /**
   * Called when the user makes any changes in the field.
   */
  input?: (event: CallbackEvent<typeof tagName$k>) => void;
  /**
   * Called after editing completes, typically on blur.
   */
  change?: (event: CallbackEvent<typeof tagName$k>) => void;
}

interface ChoiceList {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * An array of the values of the selected options. This is a convenience property for setting the selected state on child choice components.
   */
  values?: string[];
  /**
   * Whether multiple choices can be selected simultaneously.
   *
   * @default false
   */
  multiple?: boolean;
}

/**
 * The `Clickable` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 */
interface ClickableEvents {
  /**
   * The callback when the element is activated.
   */
  click?: (event: CallbackEvent<typeof tagName$e>) => void;
}

interface Clickable {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   */
  disabled?: boolean;
}

/**
 * The `DateField` component provides event callbacks for handling user interactions and validation. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 */
interface DateFieldEvents {
  /**
   * Called when the user makes any changes in the field.
   */
  input?: (event: CallbackEvent<typeof tagName$b>) => void;
  /**
   * Called after editing completes, typically on blur.
   */
  change?: (event: CallbackEvent<typeof tagName$b>) => void;
  /**
   * Called when the element loses focus.
   */
  blur?: (event: CallbackEvent<typeof tagName$b>) => void;
  /**
   * Called when the element receives focus.
   */
  focus?: (event: CallbackEvent<typeof tagName$b>) => void;
}

interface DateField {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * The content to use as the field label that describes the date information being requested.
   */
  label?: string;
  /**
   * The additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user. This will also be exposed to screen reader users.
   */
  details?: string;
  /**
   * The currently selected date value in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`, for example, `"2024-05-15"`). An empty string means no date is selected. Other date formats require conversion before setting this property. Validation occurs when the user finishes editing (on blur), rather than on every keystroke, so invalid dates are flagged after completing entry.
   */
  value?: string;
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * An error message to indicate a problem to the user. The field will be given specific stylistic treatment to communicate issues that must be resolved immediately.
   */
  error?: string;
}

/**
 * The `DatePicker` component provides event callbacks for handling user interactions and validation. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 */
interface DatePickerEvents {
  /**
   * Called when the user makes any changes in the field.
   */
  input?: (event: CallbackEvent<typeof tagName$a>) => void | null;
  /**
   * Called after editing completes, typically on blur.
   */
  change?: (event: CallbackEvent<typeof tagName$a>) => void | null;
  /**
   * Called when the element loses focus.
   */
  blur?: (event: CallbackEvent<typeof tagName$a>) => void | null;
  /**
   * Called when the element receives focus.
   */
  focus?: (event: CallbackEvent<typeof tagName$a>) => void | null;
}

interface DatePicker {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * The currently selected date value in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`, for example, `"2024-05-15"`). An empty string means no date is selected. Other date formats require conversion before setting this property. Validation occurs when the user finishes editing (on blur), rather than on every keystroke, so invalid dates are flagged after completing entry.
   *
   * @default ""
   */
  value?: string;
}

/**
 * The `DateSpinner` component provides event callbacks for handling user interactions and validation. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 */
interface DateSpinnerEvents {
  /**
   * Called when the user makes any changes in the field.
   */
  input?: (event: CallbackEvent<typeof tagName$9>) => void | null;
  /**
   * Called after editing completes, typically on blur.
   */
  change?: (event: CallbackEvent<typeof tagName$9>) => void | null;
  /**
   * Called when the element loses focus.
   */
  blur?: (event: CallbackEvent<typeof tagName$9>) => void | null;
  /**
   * Called when the element receives focus.
   */
  focus?: (event: CallbackEvent<typeof tagName$9>) => void | null;
}

interface DateSpinner {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * The currently selected date value in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`, for example, `"2024-05-15"`). An empty string means no date is selected. Other date formats require conversion before setting this property. Validation occurs when the user finishes editing (on blur), rather than on every keystroke, so invalid dates are flagged after completing entry.
   *
   * @default ""
   */
  value?: string;
}

interface Divider {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * The direction in which children are laid out using logical properties:
   * - `'block'`: Vertical arrangement along the block axis (typically top to bottom) without wrapping
   * - `'inline'`: Horizontal arrangement along the inline axis (typically left to right) with automatic wrapping when space is insufficient
   *
   * @default 'inline'
   */
  direction?: 'inline' | 'block';
}

/**
 * The `EmailField` component provides event callbacks for handling user interactions and validation. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 */
interface EmailFieldEvents {
  /**
   * Called when the user makes any changes in the field.
   */
  input?: (event: CallbackEvent<typeof tagName$f>) => void;
  /**
   * Called after editing completes, typically on blur.
   */
  change?: (event: CallbackEvent<typeof tagName$f>) => void;
  /**
   * Called when the element loses focus.
   */
  blur?: (event: CallbackEvent<typeof tagName$f>) => void;
  /**
   * Called when the element receives focus.
   */
  focus?: (event: CallbackEvent<typeof tagName$f>) => void;
}

/**
 * The `EmailField` component supports slots for additional content placement within the field. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 */
interface EmailFieldSlots {
  /**
   * The additional content to be displayed in the field. Commonly used to display clickable text or action elements. Only `Button` and `Clickable` components with text content only are supported in this slot. Use the `slot="accessory"` attribute to place elements in this area.
   */
  accessory?: HTMLElement;
}

interface EmailField {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * The content to use as the field label that describes the email information being requested.
   */
  label?: string;
  /**
   * The current email address entered in the field. An empty string means no email is entered.
   */
  value?: string;
  /**
   * A short hint that provides guidance about the expected value of the field.
   */
  placeholder?: string;
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * An error message to indicate a problem to the user. The field will be given specific stylistic treatment to communicate issues that must be resolved immediately.
   */
  error?: string;
  /**
   * Whether the field needs a value. This requirement adds semantic value to the field but doesn't cause an error to appear automatically. Use the `error` property to present validation errors.
   *
   * @default false
   */
  required?: boolean;
  /**
   * The maximum number of characters allowed in the text field.
   *
   * @default Infinity
   */
  maxLength?: number;
  /**
   * The additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user. This will also be exposed to screen reader users.
   */
  details?: string;
}

interface Heading {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
}

interface Icon {
  /**
   * The type of icon to display.
   *
   * @default ''
   */
  type?: SupportedIconNames;
  /**
   * A unique identifier for the element. Use this to reference the icon in JavaScript or CSS.
   */
  id?: string;
  /**
   * Sets the tone of the icon, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Modify the color to be more or less intense. Use `'subdued'` for secondary icons, `'base'` for standard visibility, or `'strong'` for emphasized icons that need to stand out.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * Adjusts the size of the icon. Available sizes range from `'small-500'` (smallest) through `'base'` (default) to `'large-500'` (largest), allowing you to match icon size to your interface hierarchy.
   *
   * @default 'base'
   */
  size?: SizeKeyword;
}

interface Image {
  /**
   * Controls the displayed width of the image. Choose based on your layout requirements. For mobile interfaces, consider using `'fill'` with defined container dimensions to ensure consistent image display, as dynamic container heights can cause layout inconsistencies in scrollable views.
   *
   * - `'auto'` - Displays the image at its natural size. The image will not render until it has loaded, and the aspect ratio will be ignored. Use for images where maintaining original dimensions is important.
   * - `'fill'` - Makes the image take up 100% of the available inline size. The aspect ratio will be respected and the image will take the necessary space. Use for responsive layouts and flexible image containers.
   *
   * @default 'fill'
   */
  inlineSize?: 'fill' | 'auto';
  /**
   * The image source URL (remote URL or local file resource). When loading or no src is provided, a placeholder is rendered. Ensure URLs are properly formatted and properly formatted.
   *
   * @implementation Surfaces may choose the style of the placeholder, but the space the image occupies should be
   * reserved, except in cases where the image area doesn't have a contextual inline or block size, which should be rare.
   */
  src?: string;
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * Controls how the image content is resized within its container.
   *
   * - `'contain'` - Scales the image to fit within the container while maintaining aspect ratio. The entire image will be visible, but there may be empty space. Use when showing the complete image is important.
   * - `'cover'` - Scales the image to fill the entire container while maintaining aspect ratio. Parts of the image may be cropped. Use when filling the container completely is more important than showing the entire image.
   *
   * @default 'contain'
   */
  objectFit?: 'contain' | 'cover';
}

/**
 * The `Modal` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 */
interface ModalEvents {
  /**
   * The callback when the modal is hidden. Use this event to perform cleanup tasks, update application state, or trigger other actions when the modal is dismissed or closed.
   */
  hide?: (event: CallbackEvent<typeof tagName$i>) => void | null;
  /**
   * The callback when the modal is shown. Use this event to initialize modal content, focus specific elements, or perform setup tasks when the modal becomes visible.
   */
  show?: (event: CallbackEvent<typeof tagName$i>) => void | null;
}

/**
 * The `Modal` component supports slots for additional content placement within the modal. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 */
interface ModalSlots {
  /**
   * The primary action button displayed in the modal. The tone of the button is used to define the tone of the modal. If omitted, the modal will default to an `'info'` tone, and show an OK button, translated according to the user's locale.
   */
  'primary-action'?: HTMLElement;
  /**
   * The secondary action buttons displayed in the modal. Use this slot to provide alternative actions or cancel options that give users flexibility in how they respond to the modal.
   */
  'secondary-actions'?: HTMLElement;
}

interface Modal {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * A title that describes the content of the section. If omitted and no secondary actions are provided, the section will be rendered without a header.
   */
  heading?: string;
}

/**
 * The `NumberField` component provides event callbacks for handling user interactions and validation. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 */
interface NumberFieldEvents {
  /**
   * Called when the user makes any changes in the field.
   */
  input?: (event: CallbackEvent<typeof tagName$c>) => void;
  /**
   * Called after editing completes, typically on blur.
   */
  change?: (event: CallbackEvent<typeof tagName$c>) => void;
  /**
   * Called when the element loses focus.
   */
  blur?: (event: CallbackEvent<typeof tagName$c>) => void;
  /**
   * Called when the element receives focus.
   */
  focus?: (event: CallbackEvent<typeof tagName$c>) => void;
}

/**
 * The `NumberField` component supports slots for additional content placement within the field. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 */
interface NumberFieldSlots {
  /**
   * The additional content to be displayed in the field. Commonly used to display clickable text or action elements. Only `Button` and `Clickable` components with text content only are supported in this slot. Use the `slot="accessory"` attribute to place elements in this area.
   */
  accessory?: HTMLElement;
}

interface NumberField {
  /**
   * The content to use as the field label that describes the numeric information being requested.
   */
  label?: string;
  /**
   * The additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user. This will also be exposed to screen reader users.
   */
  details?: string;
  /**
   * Whether the field needs a value. This requirement adds semantic value to the field but doesn't cause an error to appear automatically. Use the `error` property to present validation errors.
   *
   * @default false
   *
   * Required isn't supported when using Stepper controls
   */
  required?: boolean;
  /**
   * An error message to indicate a problem to the user. The field will be given specific stylistic treatment to communicate issues that must be resolved immediately.
   */
  error?: string;
  /**
   * The virtual keyboard layout that the field displays for numeric input. This property isn't supported when using `stepper` controls.
   *
   * - `'decimal'` - A keyboard layout that includes decimal point support for entering fractional numbers, prices, or measurements with decimal precision.
   * - `'numeric'` - A keyboard layout optimized for integer-only entry without decimal point support, ideal for quantities, counts, or whole number values.
   *
   * @default 'decimal'
   */
  inputMode?: 'decimal' | 'numeric';
  /**
   * A short hint that provides guidance about the expected value of the field.
   */
  placeholder?: string;
  /**
   * The type of controls displayed for the field:
   *
   * - `'auto'` - An automatic setting where the presence of controls depends on the surface and context. The system determines the most appropriate control type based on the usage scenario.
   * - `'stepper'` - Displays increment (+) and decrement (-) buttons for adjusting the numeric value. When `stepper` controls are enabled, the field behavior is constrained: it accepts only integer values, always contains a value (never empty), and automatically validates against `min` and `max` bounds. The `label`, `details`, `placeholder`, `error`, `required`, and `inputMode` properties aren't supported with `stepper` controls.
   * - `'none'` - A control type with no visible controls where users must input the value manually using the keyboard.
   *
   * @default 'auto'
   */
  controls?: 'auto' | 'stepper' | 'none';
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * The current numeric value entered in the field. An empty string means no value is entered.
   */
  value?: string;
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The highest decimal or integer value that the field accepts. When used with `stepper` controls, the value rounds down to the max number. Users can still input higher numbers by keyboard—validation should be implemented.
   *
   * @default Infinity
   */
  max?: number;
  /**
   * The lowest decimal or integer value that the field accepts. When used with `stepper` controls, the value rounds up to the min number. Users can still input lower numbers by keyboard—validation should be implemented.
   *
   * @default -Infinity
   */
  min?: number;
}

/**
 * The `Page` component supports slots for additional content placement within the page. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 */
interface PageSlots {
  /**
   * A button element to display in the action bar. Only a single button is supported. Use the `slot="secondary-actions"` attribute to place content in this area.
   */
  'secondary-actions'?: HTMLElement;
  /**
   * The content to display in the page's sidebar. This area is for content that is tangentially related to the main content, such as navigation or contextual information. Use the `slot="aside"` attribute to place content in this area.
   */
  aside?: HTMLElement;
}

interface Page {
  /**
   * A title that describes the content of the section. If omitted and no secondary actions are provided, the section will be rendered without a header.
   *
   * @default : ''
   */
  heading?: string;
  /**
   * A secondary page heading displayed under the main heading in the action bar.
   */
  subheading?: string;
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
}

/**
 * The `PosBlock` component supports slots for additional content placement within the block. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 */
interface PosBlockSlots {
  /**
   * The secondary actions to perform, provided as button or link type elements. Use the `slot="secondary-actions"` attribute to place interactive elements that allow users to take actions related to the block's content.
   */
  'secondary-actions'?: HTMLElement;
}

interface PosBlock {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * A title that describes the content of the section. If omitted and no secondary actions are provided, the section will be rendered without a header.
   */
  heading?: string;
}

interface QrCode {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * The content to be encoded in the QR code. This can be any string such as a URL, email address, plain text, or other data. Specific string formatting can trigger actions on the user's device when scanned, like opening geolocation coordinates on a map, opening a preferred app or app store entry, preparing an email, text message, and more.
   */
  content?: string;
}

interface ScrollBox {
  /**
   * The block size of the scrollable container. Auto automatically sizes based on the container's content and available space.
   *
   * @default 'auto'
   */
  blockSize?: SizeUnitsOrAuto;
  /**
   * The inline size of the scrollable container. Auto automatically sizes based on the container's content and available space.
   *
   * @default 'auto'
   */
  inlineSize?: SizeUnitsOrAuto;
  /**
   * The maximum block size constraint for the scrollable container.
   *
   * @default 'none'
   */
  maxBlockSize?: SizeUnitsOrNone;
  /**
   * The maximum inline size constraint for the scrollable container.
   *
   * @default 'none'
   */
  maxInlineSize?: SizeUnitsOrNone;
  /**
   * The minimum block size constraint for the scrollable container.
   *
   * @default '0'
   */
  minBlockSize?: SizeUnits;
  /**
   * The minimum inline size constraint for the scrollable container.
   *
   * @default '0'
   */
  minInlineSize?: SizeUnits;
  /**
   * The padding applied to all edges of the scrollable container. Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties#edges_of_a_box) using flow-relative values in the order:
   *
   * - 4 values: `block-start inline-end block-end inline-start`
   * - 3 values: `block-start inline block-end`
   * - 2 values: `block inline`
   *
   * For example:
   *
   * - `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
   * - `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
   * - `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
   * - `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
   *
   * An `auto` value inherits the default padding from the closest container that has removed its usual padding.
   *
   * @default 'none'
   */
  padding?: MaybeAllValuesShorthandProperty<PaddingKeyword>;
  /**
   * The block-axis padding for the scrollable container. Overrides the block value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingBlock?: '' | MaybeTwoValuesShorthandProperty<PaddingKeyword>;
  /**
   * The block-start padding for the scrollable container. Overrides the block-start value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart?: '' | PaddingKeyword;
  /**
   * The block-end padding for the scrollable container. Overrides the block-end value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd?: '' | PaddingKeyword;
  /**
   * The inline-axis padding for the scrollable container. Supports two-value syntax where `large none` sets inline-start to `large` and inline-end to `none`. Overrides the inline value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingInline?: '' | MaybeTwoValuesShorthandProperty<PaddingKeyword>;
  /**
   * The inline-start padding for the scrollable container. Overrides the inline-start value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart?: '' | PaddingKeyword;
  /**
   * The inline-end padding for the scrollable container. Overrides the inline-end value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd?: '' | PaddingKeyword;
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
}

/**
 * The `SearchField` component provides event callbacks for handling user interactions and validation. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 */
interface SearchFieldEvents {
  /**
   * Called when the user makes any changes in the field.
   */
  input?: (event: CallbackEvent<typeof tagName$g>) => void;
  /**
   * Called after editing completes, typically on blur.
   */
  change?: (event: CallbackEvent<typeof tagName$g>) => void;
  /**
   * Called when the element loses focus.
   */
  blur?: (event: CallbackEvent<typeof tagName$g>) => void;
  /**
   * Called when the element receives focus.
   */
  focus?: (event: CallbackEvent<typeof tagName$g>) => void;
}

interface SearchField {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * A short hint that provides guidance about the expected value of the field.
   */
  placeholder?: string;
  /**
   * The current search query text entered in the field. An empty string means no search query is entered.
   */
  value?: string;
}

/**
 * The `Section` component supports slots for additional content placement within the section. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 */
interface SectionSlots {
  /**
   * A button element to display in the section heading. Only a single button is supported. Use the `slot="secondary-actions"` attribute to place action elements that relate to the entire section's content.
   */
  'secondary-actions'?: HTMLElement;
}

interface Section {
  /**
   * A title that describes the content of the section. If omitted and no secondary actions are provided, the section will be rendered without a header.
   */
  heading?: string;
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
}

interface Stack {
  /**
   * The padding applied to all edges of the container. Supports [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties#edges_of_a_box) using flow-relative values in the order:
   *
   * - 4 values: `block-start inline-end block-end inline-start`
   * - 3 values: `block-start inline block-end`
   * - 2 values: `block inline`
   *
   * For example:
   *
   * - `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
   * - `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
   * - `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
   * - `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
   *
   * An `auto` value inherits the default padding from the closest container that has removed its usual padding.
   *
   * @default 'none'
   */
  padding?: MaybeAllValuesShorthandProperty<PaddingKeyword>;
  /**
   * The block-axis padding for the container. Overrides the block value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingBlock?: MaybeTwoValuesShorthandProperty<'' | PaddingKeyword>;
  /**
   * The block-start padding for the container. Overrides the block-start value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart?: '' | PaddingKeyword;
  /**
   * The block-end padding for the container. Overrides the block-end value of the `paddingBlock` property.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd?: '' | PaddingKeyword;
  /**
   * The inline-axis padding for the container. Supports two-value syntax where `large none` sets inline-start to `large` and inline-end to `none`. Overrides the inline value of the `padding` property.
   *
   * @default '' - meaning no override
   */
  paddingInline?: MaybeTwoValuesShorthandProperty<'' | PaddingKeyword>;
  /**
   * The inline-start padding for the container. Overrides the inline-start value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart?: '' | PaddingKeyword;
  /**
   * The inline-end padding for the container. Overrides the inline-end value of the `paddingInline` property.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd?: '' | PaddingKeyword;
  /**
   * The block size of the container. Auto automatically sizes based on the container's children.
   *
   * @default 'auto'
   */
  blockSize?: SizeUnitsOrAuto;
  /**
   * The maximum block size constraint for the container.
   *
   * @default 'none'
   */
  maxBlockSize?: SizeUnitsOrNone;
  /**
   * The maximum inline size constraint for the container.
   *
   * @default 'none'
   */
  maxInlineSize?: SizeUnitsOrNone;
  /**
   * The minimum block size constraint for the container.
   *
   * @default '0'
   */
  minBlockSize?: SizeUnits;
  /**
   * The minimum inline size constraint for the container.
   *
   * @default '0'
   */
  minInlineSize?: SizeUnits;
  /**
   * Controls the alignment of individual children along the cross axis (perpendicular to the main axis).
   */
  alignItems?: AlignItemsKeyword;
  /**
   * Controls the distribution of space between and around lines of wrapped content along the cross axis.
   */
  alignContent?: AlignContentKeyword;
  /**
   * The spacing between elements. A single value applies to both axes. A pair of values (eg large-100 large-500) can be used to set the inline and block axes respectively.
   *
   * @default 'none'
   */
  gap?: MaybeTwoValuesShorthandProperty<SpacingKeyword>;
  /**
   * The spacing between elements in the inline axis. This overrides the column value of gap.
   *
   * @default '' - meaning no override
   */
  columnGap?: '' | SpacingKeyword;
  /**
   * The direction in which children are laid out using logical properties:
   * - `'block'`: Vertical arrangement along the block axis (typically top to bottom) without wrapping
   * - `'inline'`: Horizontal arrangement along the inline axis (typically left to right) with automatic wrapping when space is insufficient
   *
   * @default 'block'
   * @implementation - the content will wrap if the direction is 'inline', and not wrap if the direction is 'block'
   */
  direction?: 'block' | 'inline';
  /**
   * The inline size (width in horizontal writing modes) of the element.
   *
   * Learn more about [`inline-size` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).
   * @default 'auto'
   */
  inlineSize?: SizeUnitsOrAuto;
  /**
   * Controls the distribution and alignment of children along the main axis (the axis defined by the `direction` property).
   *
   * Learn more about [`justify-content` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
   * @default 'normal'
   */
  justifyContent?: JustifyContentKeyword;
  /**
   * The spacing between elements in the block axis. This overrides the row value of gap.
   *
   * @default '' - meaning no override
   */
  rowGap?: '' | SpacingKeyword;
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
}

interface Text {
  /**
   * The color intensity of the text. Controls how prominent or subtle the text appears within the interface.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * The semantic meaning and default styling of the text. Other presentation properties override the default styling provided by the type. Available options:
   *
   * - `'generic'` - The default text type for general content without specific semantic meaning or emphasis.
   * - `'strong'` - A text type that provides emphasis and importance, typically rendered with increased font weight or visual prominence.
   * - `'small'` - A text type for secondary or supplementary content, typically rendered with reduced size for captions, fine print, or less important information.
   *
   * @default 'generic'
   */
  type?: 'strong' | 'small' | 'generic';
  /**
   * Determines the visual appearance and semantic meaning of the text. Available options:
   *
   * - `'auto'` - Lets the system automatically choose the appropriate tone based on context. Use when you want the system to determine the most appropriate styling.
   * - `'neutral'` - Gray styling for general status information that doesn't require emphasis. Use for general status updates and standard information.
   * - `'info'` - Blue styling for informational content and neutral updates. Use for informational content that provides helpful context.
   * - `'success'` - Green styling for positive states, completed actions, and successful operations. Use for positive outcomes and successful processes.
   * - `'caution'` - Yellow styling for situations that need attention but aren't urgent. Use for potential issues that require awareness.
   * - `'warning'` - Orange styling for important notices that require merchant awareness. Use for situations that need attention but aren't critical.
   * - `'critical'` - Red styling for errors, failures, and urgent issues requiring immediate action. Use for urgent issues that need immediate merchant attention.
   *
   * @default 'auto'
   */
  tone?:
    | 'auto'
    | 'neutral'
    | 'info'
    | 'success'
    | 'caution'
    | 'warning'
    | 'critical';
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
}

/**
 * The `TextArea` component provides event callbacks for handling user interactions and validation. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 */
interface TextAreaEvents {
  /**
   * Called when the user makes any changes in the field.
   */
  input?: (event: CallbackEvent<typeof tagName$d>) => void;
  /**
   * Called after editing completes, typically on blur.
   */
  change?: (event: CallbackEvent<typeof tagName$d>) => void;
  /**
   * Called when the element loses focus.
   */
  blur?: (event: CallbackEvent<typeof tagName$d>) => void;
  /**
   * Called when the element receives focus.
   */
  focus?: (event: CallbackEvent<typeof tagName$d>) => void;
}

/**
 * The `TextArea` component supports slots for additional content placement within the field. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 */
interface TextAreaSlots {
  /**
   * The additional content to be displayed in the field. Commonly used to display clickable text or action elements. Only `Button` and `Clickable` components with text content only are supported in this slot. Use the `slot="accessory"` attribute to place elements in this area.
   */
  accessory?: HTMLElement;
}

interface TextArea {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * The content to use as the field label that describes the text information being requested.
   */
  label?: string;
  /**
   * The additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user. This will also be exposed to screen reader users.
   */
  details?: string;
  /**
   * The current text content entered in the field. An empty string means no text is entered.
   */
  value?: string;
  /**
   * A short hint that provides guidance about the expected value of the field.
   */
  placeholder?: string;
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * An error message to indicate a problem to the user. The field will be given specific stylistic treatment to communicate issues that must be resolved immediately.
   */
  error?: string;
  /**
   * Whether the field needs a value. This requirement adds semantic value to the field but doesn't cause an error to appear automatically. Use the `error` property to present validation errors.
   *
   * @default false
   */
  required?: boolean;
  /**
   * The maximum number of characters allowed in the text field.
   *
   * @default Infinity
   */
  maxLength?: number;
  /**
   * The number of visible text lines that determines the initial height of the text area.
   *
   * @default 2
   */
  rows?: number;
}

/**
 * The `TextField` component provides event callbacks for handling user interactions and validation. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 */
interface TextFieldEvents {
  /**
   * Called when the user makes any changes in the field.
   */
  input?: (event: CallbackEvent<typeof tagName$h>) => void;
  /**
   * Called after editing completes, typically on blur.
   */
  change?: (event: CallbackEvent<typeof tagName$h>) => void;
  /**
   * Called when the element loses focus.
   */
  blur?: (event: CallbackEvent<typeof tagName$h>) => void;
  /**
   * Called when the element receives focus.
   */
  focus?: (event: CallbackEvent<typeof tagName$h>) => void;
}

/**
 * The `TextField` component supports slots for additional content placement within the field. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 */
interface TextFieldSlots {
  /**
   * The additional content to be displayed in the field. Commonly used to display clickable text or action elements. Only `Button` and `Clickable` components with text content only are supported in this slot. Use the `slot="accessory"` attribute to place elements in this area.
   */
  accessory?: HTMLElement;
}

interface TextField {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * The content to use as the field label that describes the text information being requested.
   */
  label?: string;
  /**
   * The additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user. This will also be exposed to screen reader users.
   */
  details?: string;
  /**
   * The current text content entered in the field. An empty string means no text is entered.
   */
  value?: string;
  /**
   * A short hint that provides guidance about the expected value of the field.
   */
  placeholder?: string;
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * An error message to indicate a problem to the user. The field will be given specific stylistic treatment to communicate issues that must be resolved immediately.
   */
  error?: string;
  /**
   * Whether the field needs a value. This requirement adds semantic value to the field but doesn't cause an error to appear automatically. Use the `error` property to present validation errors.
   *
   * @default false
   */
  required?: boolean;
  /**
   * The maximum number of characters allowed in the text field.
   *
   * @default Infinity
   */
  maxLength?: number;
}

interface TileEvents {
  /**
   * The callback when the element is activated.
   */
  click?: (event: CallbackEvent<typeof tagName$q>) => void;
}

interface Tile {
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * A title that describes the content of the section. If omitted and no secondary actions are provided, the section will be rendered without a header.
   *
   * @default ''
   */
  heading?: string;
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * A numeric value displayed as a counter or badge. Used for showing quantities, notifications, or step numbers.
   */
  itemCount?: number;
  /**
   * Sets the visual tone of the tile based on the intention of the information being conveyed. Use `'accent'` to highlight important or primary actions, `'neutral'` for standard actions, or `'auto'` (default) to let the system determine the appropriate tone based on context.
   *
   * @default 'auto'
   */
  tone?: ExtractStrict<ToneKeyword, 'auto' | 'neutral' | 'accent'>;
  /**
   * A secondary page heading displayed under the main heading in the action bar.
   *
   * @default ''
   */
  subheading?: string;
}

/**
 * The `TimeField` component provides event callbacks for handling user interactions and validation. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 */
interface TimeFieldEvents {
  /**
   * Called when the user makes any changes in the field.
   */
  input?: (event: CallbackEvent<typeof tagName$3>) => void;
  /**
   * Called after editing completes, typically on blur.
   */
  change?: (event: CallbackEvent<typeof tagName$3>) => void;
  /**
   * Called when the element loses focus.
   */
  blur?: (event: CallbackEvent<typeof tagName$3>) => void;
  /**
   * Called when the element receives focus.
   */
  focus?: (event: CallbackEvent<typeof tagName$3>) => void;
}

interface TimeField {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * The content to use as the field label that describes the time information being requested.
   */
  label?: string;
  /**
   * Whether the field is disabled, preventing user interaction. Use when the field is temporarily unavailable due to application state, permissions, or dependencies.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The current selected value in 24-hour format. An empty string means no time is selected. The value must be in `HH:mm:ss` format with leading zeros (for example, `"00:00:00"`, `"09:05:00"`, `"23:59:00"`, `"14:03:30"`). This follows the [HTML time input value format](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time#value), which is always 24-hour with leading zeros regardless of UI presentation.
   */
  value?: string;
  /**
   * An error message to indicate a problem to the user. The field will be given specific stylistic treatment to communicate issues that must be resolved immediately.
   */
  error?: string;
  /**
   * The additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user. This will also be exposed to screen reader users.
   */
  details?: string;
}

/**
 * The `TimePicker` component provides event callbacks for handling user interactions and validation. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 */
interface TimePickerEvents {
  /**
   * Called when the user makes any changes in the field.
   */
  input?: (event: CallbackEvent<typeof tagName$6>) => void | null;
  /**
   * Called after editing completes, typically on blur.
   */
  change?: (event: CallbackEvent<typeof tagName$6>) => void | null;
  /**
   * Called when the element loses focus.
   */
  blur?: (event: CallbackEvent<typeof tagName$6>) => void | null;
  /**
   * Called when the element receives focus.
   */
  focus?: (event: CallbackEvent<typeof tagName$6>) => void | null;
}

interface TimePicker {
  /**
   * A unique identifier for the element used for targeting with CSS, JavaScript, or accessibility features.
   */
  id?: string;
  /**
   * The current selected value in 24-hour format. An empty string means no time is selected. The value must be in `HH:mm:ss` format with leading zeros (for example, `"00:00:00"`, `"09:05:00"`, `"23:59:00"`, `"14:03:30"`). This follows the [HTML time input value format](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time#value), which is always 24-hour with leading zeros regardless of UI presentation.
   *
   * @default ''
   */
  value?: string;
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$t]: IntrinsicElementProps<ButtonJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$t]: IntrinsicElementProps<ButtonJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$s]: IntrinsicElementProps<TextJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$s]: IntrinsicElementProps<TextJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$r]: IntrinsicElementProps<ScrollBoxJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$r]: IntrinsicElementProps<ScrollBoxJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$q]: IntrinsicElementProps<TileJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$q]: IntrinsicElementProps<TileJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$p]: IntrinsicElementProps<ElementProps$9>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$p]: IntrinsicElementProps<ElementProps$9>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$o]: IntrinsicElementProps<BoxJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$o]: IntrinsicElementProps<BoxJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$n]: IntrinsicElementProps<IconJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$n]: IntrinsicElementProps<IconJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$m]: IntrinsicElementProps<StackJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$m]: IntrinsicElementProps<StackJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$l]: IntrinsicElementProps<BadgeJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$l]: IntrinsicElementProps<BadgeJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$k]: IntrinsicElementProps<ChoiceListJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$k]: IntrinsicElementProps<ChoiceListJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$j]: IntrinsicElementProps<ChoiceJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$j]: IntrinsicElementProps<ChoiceJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$i]: IntrinsicElementProps<ElementProps$8>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$i]: IntrinsicElementProps<ElementProps$8>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$h]: IntrinsicElementProps<ElementProps$7>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$h]: IntrinsicElementProps<ElementProps$7>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$g]: IntrinsicElementProps<SearchFieldJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$g]: IntrinsicElementProps<SearchFieldJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$f]: IntrinsicElementProps<ElementProps$6>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$f]: IntrinsicElementProps<ElementProps$6>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$e]: IntrinsicElementProps<ClickableJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$e]: IntrinsicElementProps<ClickableJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$d]: IntrinsicElementProps<ElementProps$5>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$d]: IntrinsicElementProps<ElementProps$5>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$c]: IntrinsicElementProps<ElementProps$4>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$c]: IntrinsicElementProps<ElementProps$4>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$b]: IntrinsicElementProps<ElementProps$3>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$b]: IntrinsicElementProps<ElementProps$3>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$a]: IntrinsicElementProps<DatePickerJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$a]: IntrinsicElementProps<DatePickerJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$9]: IntrinsicElementProps<DateSpinnerJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$9]: IntrinsicElementProps<DateSpinnerJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$8]: IntrinsicElementProps<ElementProps$2>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$8]: IntrinsicElementProps<ElementProps$2>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$7]: IntrinsicElementProps<HeadingJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$7]: IntrinsicElementProps<HeadingJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$6]: IntrinsicElementProps<TimePickerJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$6]: IntrinsicElementProps<TimePickerJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$5]: IntrinsicElementProps<ImageJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$5]: IntrinsicElementProps<ImageJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$4]: IntrinsicElementProps<ElementProps$1>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$4]: IntrinsicElementProps<ElementProps$1>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$3]: IntrinsicElementProps<TimeFieldJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$3]: IntrinsicElementProps<TimeFieldJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$2]: IntrinsicElementProps<ElementProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$2]: IntrinsicElementProps<ElementProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$1]: IntrinsicElementProps<QrCodeJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$1]: IntrinsicElementProps<QrCodeJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<DividerJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<DividerJSXProps>;
    }
  }
}
