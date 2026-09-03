/** VERSION: 2.23.0 **/

/* eslint-disable @typescript-eslint/ban-types */

/* eslint-disable @typescript-eslint/member-ordering */

/**
 * Represents any valid children that can be rendered within a component, including elements, strings, numbers, or arrays of these types. This is an alias for Preact's `ComponentChildren` type.
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
   * A unique identifier for the element. Use this to reference the element in JavaScript, link labels to form controls, or target specific elements for styling or scripting.
   */
  id?: string;
}
/**
 * @publicDocs
 */
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
   * The primary action button or link, representing the main or most important action available in this context. Typically displayed with higher visual prominence than secondary actions to establish clear hierarchy.
   */
  primaryAction?: ComponentChildren;
  /**
   * Additional action buttons or links that provide alternative or supporting actions. Visually de-emphasized compared to the primary action.
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
  /**
   * Programmatically controls the loading state of the component.
   * When true, displays a loading indicator. The component also shows loading automatically when fetching the preview.
   *
   * @default false
   */
  loading?: boolean;
}
interface AppNavProps$1 extends GlobalProps {
  /**
   * The navigation items to inject into the external host navigation.
   * One child Link is required and represents the home/root navigation item.
   *
   * @implementation This does not render UI
   * @implementation This item is not rendered as a clickable link but configures the home route.
   */
  children?: ComponentChildren;
}
/**
 * @publicDocs
 */
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
 * All methods are required (not optional) because components implementing this interface must provide consistent JavaScript APIs. Unlike props/attributes, methods are not rendered in HTML and consumers expect them to be available on all component instances.
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
/**
 * @publicDocs
 */
export interface FocusEventProps {
  /**
   * A callback fired when the component loses focus. Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
   */
  onBlur?: (event: FocusEvent) => void;
  /**
   * A callback fired when the component receives focus. Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
   */
  onFocus?: (event: FocusEvent) => void;
}
/**
 * @publicDocs
 */
export interface ToggleEventProps {
  /**
   * A callback fired when the element state changes, after any toggle animations have finished.
   *
   * - If the element transitioned from hidden to showing, the `oldState` property will be set to `closed` and the   `newState` property will be set to `open`.
   * - If the element transitioned from showing to hidden, the `oldState` property will be set to `open` and the   `newState` will be `closed`.
   *
   * Learn more about [ToggleEvent.newState](https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/newState) and [ToggleEvent.oldState](https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/oldState).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/newState
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/oldState
   */
  onAfterToggle?: (event: ToggleEvent$1) => void;
  /**
   * A callback fired immediately when the element state changes, before any animations.
   *
   * - If the element is transitioning from hidden to showing, the `oldState` property will be set to `closed` and the   `newState` property will be set to `open`.
   * - If the element is transitioning from showing to hidden, then `oldState` property will be set to `open` and the   `newState` will be `closed`.
   *
   * Learn more about the [toggle event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/toggle_event), [ToggleEvent.newState](https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/newState), and [ToggleEvent.oldState](https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/oldState).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/toggle_event
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/newState
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ToggleEvent/oldState
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
  readonly newState: ToggleState;
  readonly oldState: ToggleState;
}
/**
 * @publicDocs
 */
export interface ExtendableEvent extends Event {
  /**
   * A method that accepts a promise signaling the duration and eventual success or failure of event-related actions.
   *
   * Can be called multiple times to add promises to the event, but must be called synchronously during event dispatch. Cannot be called after a `setTimeout` or within a microtask.
   */
  waitUntil?: (promise: Promise<void>) => void;
}
interface AggregateError$1<T extends Error> extends Error {
  errors: T[];
}
/**
 * @publicDocs
 */
export interface AggregateErrorEvent<T extends Error> extends ErrorEvent {
  /**
   * The aggregated error object containing multiple individual errors. Access the `errors` property to retrieve the array of individual error instances.
   */
  error: AggregateError$1<T>;
}
/**
 * Defines component sizes using a consistent scale from extra small to extra large.
 *
 * - `small-500` through `small-100`: Extra small to small sizes, progressively increasing.
 * - `small`: Standard small size.
 * - `base`: Default medium size that works well in most contexts.
 * - `large`: Standard large size.
 * - `large-100` through `large-500`: Large to extra large sizes, progressively increasing.
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
 * @publicDocs
 */
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
/**
 * Defines the background color intensity or emphasis level for UI elements.
 *
 * - `transparent`: No background, allowing the underlying surface to show through.
 * - `ColorKeyword`: Applies color intensity levels (subdued, base, strong) to create spatial emphasis and containment.
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
 * Tones apply coordinated color schemes (text, background, icons) across the component. Some components, like banner, also use tone to determine accessibility attributes and screen reader announcements.
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
/**
 * Represents the available icon names that can be used in icon components. This is derived from the complete list of supported icons in the design system.
 * @publicDocs
 */
export type IconType =
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
  | 'alert-triangle-filled'
  | 'align-horizontal-centers'
  | 'app-extension'
  | 'apps'
  | 'archive'
  | 'arrow-down'
  | 'arrow-down-circle'
  | 'arrow-down-right'
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
  | 'battery-low'
  | 'bill'
  | 'blank'
  | 'blog'
  | 'bolt'
  | 'bolt-filled'
  | 'book'
  | 'book-open'
  | 'brain'
  | 'broom'
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
  | 'cart-filled'
  | 'cart-sale'
  | 'cart-send'
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
  | 'complete'
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
  | 'delivered'
  | 'delivery'
  | 'desktop'
  | 'disabled'
  | 'disabled-filled'
  | 'discount'
  | 'discount-add'
  | 'discount-automatic'
  | 'discount-code'
  | 'discount-remove'
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
  | 'drawer'
  | 'duplicate'
  | 'edit'
  | 'email'
  | 'email-follow-up'
  | 'email-newsletter'
  | 'empty'
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
  | 'fav'
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
  | 'geolocation'
  | 'gift'
  | 'gift-card'
  | 'git-branch'
  | 'git-commit'
  | 'git-repository'
  | 'globe'
  | 'globe-asia'
  | 'globe-europe'
  | 'globe-lines'
  | 'globe-list'
  | 'graduation-hat'
  | 'grid'
  | 'hashtag'
  | 'hashtag-decimal'
  | 'hashtag-list'
  | 'heart'
  | 'hide'
  | 'hide-filled'
  | 'home'
  | 'home-filled'
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
  | 'info-filled'
  | 'inheritance'
  | 'inventory'
  | 'inventory-edit'
  | 'inventory-list'
  | 'inventory-transfer'
  | 'inventory-updated'
  | 'iq'
  | 'key'
  | 'keyboard'
  | 'keyboard-filled'
  | 'keyboard-hide'
  | 'keypad'
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
  | 'layer'
  | 'lightbulb'
  | 'link'
  | 'link-list'
  | 'list-bulleted'
  | 'list-bulleted-filled'
  | 'list-numbered'
  | 'live'
  | 'live-critical'
  | 'live-none'
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
  | 'menu-filled'
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
  | 'money-split'
  | 'moon'
  | 'nature'
  | 'note'
  | 'note-add'
  | 'notification'
  | 'number-one'
  | 'order'
  | 'order-batches'
  | 'order-draft'
  | 'order-filled'
  | 'order-first'
  | 'order-fulfilled'
  | 'order-repeat'
  | 'order-unfulfilled'
  | 'orders-status'
  | 'organization'
  | 'outdent'
  | 'outgoing'
  | 'package'
  | 'package-cancel'
  | 'package-fulfilled'
  | 'package-on-hold'
  | 'package-reassign'
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
  | 'partially-complete'
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
  | 'person-filled'
  | 'person-list'
  | 'person-lock'
  | 'person-remove'
  | 'person-segment'
  | 'personalized-text'
  | 'phablet'
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
  | 'point-of-sale-register'
  | 'price-list'
  | 'print'
  | 'product'
  | 'product-add'
  | 'product-cost'
  | 'product-filled'
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
  | 'receipt-folded'
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
  | 'reorder'
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
  | 'savings'
  | 'scan-qr-code'
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
  | 'shipping-label-cancel'
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
  | 'star-circle'
  | 'star-filled'
  | 'star-half'
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
  | 'text-indent-remove'
  | 'text-italic'
  | 'text-quote'
  | 'text-title'
  | 'text-underline'
  | 'text-with-image'
  | 'theme'
  | 'theme-cart'
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
  | 'transaction-fee-add'
  | 'transaction-fee-dollar'
  | 'transaction-fee-euro'
  | 'transaction-fee-pound'
  | 'transaction-fee-rupee'
  | 'transaction-fee-yen'
  | 'transfer'
  | 'transfer-in'
  | 'transfer-internal'
  | 'transfer-out'
  | 'truck'
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
  | 'x-circle'
  | 'x-circle-filled';
/**
 * A type-safe version of TypeScript's `Extract` utility that constrains the second type parameter to be assignable to the first. This provides compile-time validation that you're only extracting types that actually exist within the union, catching potential errors earlier in development.
 * @publicDocs
 */
export type ExtractStrict<T, U extends T> = Extract<T, U>;
/**
 * Represents CSS shorthand properties that accept one to four values. Supports specifying values for all four sides: top, right, bottom, and left.
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
 * Represents CSS shorthand properties that accept one or two values. Supports specifying the same value for both dimensions or different values.
 *
 * - `T`: Single value that applies to both dimensions.
 * - `${T} ${T}`: Two values for block axis (vertical) and inline axis (horizontal).
 * @publicDocs
 */
export type MaybeTwoValuesShorthandProperty<T extends string> = T | `${T} ${T}`;
/**
 * Makes a property responsive by allowing it to be set conditionally based on container query conditions. The value can be either a base value or a container query string.
 *
 * - `T`: Base value that applies in all conditions.
 * - `@container${string}`: Container query string for conditional responsive styling based on container size.
 * @publicDocs
 */
export type MaybeResponsive<T> = T | `@container${string}`;
/**
 * A utility type that enables autocomplete for specific string literals while still accepting any string value. By intersecting `string` with an empty object type, this prevents TypeScript from widening literal types, preserving IDE suggestions for known values while maintaining flexibility for custom strings.
 *
 * @example
 * type PropName = 'foo' | 'bar' | string
 * //   ^? string
 * type PropName = 'foo' | 'bar' | (string & {})
 * //   ^? 'foo' | 'bar' | (string & {})
 * @publicDocs
 */
export type AnyString = string & {};
/**
 * A utility type representing an optional space character for use in string literal type composition. Allows flexible formatting of compound values where spacing is a matter of preference rather than semantic difference.
 * @publicDocs
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
  icon?:
    | (
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
        | 'alert-triangle-filled'
        | 'align-horizontal-centers'
        | 'app-extension'
        | 'apps'
        | 'archive'
        | 'arrow-down'
        | 'arrow-down-circle'
        | 'arrow-down-right'
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
        | 'battery-low'
        | 'bill'
        | 'blank'
        | 'blog'
        | 'bolt'
        | 'bolt-filled'
        | 'book'
        | 'book-open'
        | 'brain'
        | 'broom'
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
        | 'cart-filled'
        | 'cart-sale'
        | 'cart-send'
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
        | 'complete'
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
        | 'delivered'
        | 'delivery'
        | 'desktop'
        | 'disabled'
        | 'disabled-filled'
        | 'discount'
        | 'discount-add'
        | 'discount-automatic'
        | 'discount-code'
        | 'discount-remove'
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
        | 'drawer'
        | 'duplicate'
        | 'edit'
        | 'email'
        | 'email-follow-up'
        | 'email-newsletter'
        | 'empty'
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
        | 'fav'
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
        | 'geolocation'
        | 'gift'
        | 'gift-card'
        | 'git-branch'
        | 'git-commit'
        | 'git-repository'
        | 'globe'
        | 'globe-asia'
        | 'globe-europe'
        | 'globe-lines'
        | 'globe-list'
        | 'graduation-hat'
        | 'grid'
        | 'hashtag'
        | 'hashtag-decimal'
        | 'hashtag-list'
        | 'heart'
        | 'hide'
        | 'hide-filled'
        | 'home'
        | 'home-filled'
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
        | 'info-filled'
        | 'inheritance'
        | 'inventory'
        | 'inventory-edit'
        | 'inventory-list'
        | 'inventory-transfer'
        | 'inventory-updated'
        | 'iq'
        | 'key'
        | 'keyboard'
        | 'keyboard-filled'
        | 'keyboard-hide'
        | 'keypad'
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
        | 'layer'
        | 'lightbulb'
        | 'link'
        | 'link-list'
        | 'list-bulleted'
        | 'list-bulleted-filled'
        | 'list-numbered'
        | 'live'
        | 'live-critical'
        | 'live-none'
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
        | 'menu-filled'
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
        | 'money-split'
        | 'moon'
        | 'nature'
        | 'note'
        | 'note-add'
        | 'notification'
        | 'number-one'
        | 'order'
        | 'order-batches'
        | 'order-draft'
        | 'order-filled'
        | 'order-first'
        | 'order-fulfilled'
        | 'order-repeat'
        | 'order-unfulfilled'
        | 'orders-status'
        | 'organization'
        | 'outdent'
        | 'outgoing'
        | 'package'
        | 'package-cancel'
        | 'package-fulfilled'
        | 'package-on-hold'
        | 'package-reassign'
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
        | 'partially-complete'
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
        | 'person-filled'
        | 'person-list'
        | 'person-lock'
        | 'person-remove'
        | 'person-segment'
        | 'personalized-text'
        | 'phablet'
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
        | 'point-of-sale-register'
        | 'price-list'
        | 'print'
        | 'product'
        | 'product-add'
        | 'product-cost'
        | 'product-filled'
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
        | 'receipt-folded'
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
        | 'reorder'
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
        | 'savings'
        | 'scan-qr-code'
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
        | 'shipping-label-cancel'
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
        | 'star-circle'
        | 'star-filled'
        | 'star-half'
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
        | 'text-indent-remove'
        | 'text-italic'
        | 'text-quote'
        | 'text-title'
        | 'text-underline'
        | 'text-with-image'
        | 'theme'
        | 'theme-cart'
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
        | 'transaction-fee-add'
        | 'transaction-fee-dollar'
        | 'transaction-fee-euro'
        | 'transaction-fee-pound'
        | 'transaction-fee-rupee'
        | 'transaction-fee-yen'
        | 'transfer'
        | 'transfer-in'
        | 'transfer-internal'
        | 'transfer-out'
        | 'truck'
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
        | 'x-circle'
        | 'x-circle-filled'
      )
    | AnyString;
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
/**
 * @publicDocs
 */
export interface DisplayProps {
  /**
   * The outer display type of the component. The outer type sets a component’s participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).
   *
   * - `auto`: the component’s initial value. The actual value depends on the component and context.
   * - `none`: hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.
   *
   * Learn more about the [display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
   * @default 'auto'
   */
  display?: MaybeResponsive<'auto' | 'none'>;
}
/**
 * @publicDocs
 */
export interface AccessibilityRoleProps {
  /**
   * The semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help users navigate the page.
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
 * Accessibility roles help users with disabilities understand the purpose and structure of content. These roles map to HTML elements and ARIA roles, providing semantic meaning beyond visual presentation.
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
/**
 * @publicDocs
 */
export interface LabelAccessibilityVisibilityProps {
  /**
   * Controls whether the label is visible to all users or only to screen readers.
   *
   * - `visible`: The label is shown to everyone (default).
   * - `exclusive`: The label is visually hidden but still announced by screen readers.
   *
   * Use `exclusive` when the surrounding context makes the label redundant visually, but screen reader users still need it for clarity.
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
   * Block size adjusts based on the writing direction: in horizontal layouts, it controls the height; in vertical layouts, it controls the width. This ensures consistent behavior across different text directions.
   *
   * Learn more about the [block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).
   *
   * - `SizeUnits`: Specific size values in pixels, percentages, or zero for precise control.
   * - `auto`: Automatically sizes based on content and layout constraints.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/block-size
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
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size
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
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size
   *
   * @default 'none'
   */
  maxBlockSize?: MaybeResponsive<SizeUnitsOrNone>;
  /**
   * The horizontal size of the element in standard layouts (width in left-to-right or right-to-left writing modes).
   *
   * Inline size adjusts based on the writing direction: in horizontal layouts, it controls the width; in vertical layouts, it controls the height. This ensures consistent behavior across different text directions.
   *
   * Learn more about the [inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).
   *
   * - `SizeUnits`: Specific size values in pixels, percentages, or zero for precise control.
   * - `auto`: Automatically sizes based on content and layout constraints.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size
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
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size
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
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size
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
   * Accepts a size value, optionally followed by a color, optionally followed by a style. Omitted values use defaults: color defaults to `base`, style defaults to `auto`.
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
   * When set, this overrides the color value specified in the `border` property. Choose from `subdued`, `base`, or `strong` to match the visual emphasis needed.
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
/**
 * @publicDocs
 */
export interface OverflowProps {
  /**
   * The overflow behavior of the element.
   *
   * - `visible`: the content that extends beyond the element’s container is visible.
   * - `hidden`: clips the content when it is larger than the element’s container. The element will not be scrollable and the users will not be able to access the clipped content by dragging or using a scroll wheel on a mouse.
   *
   * @default 'visible'
   */
  overflow?: 'hidden' | 'visible';
}
/**
 * @publicDocs
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
   * The content displayed within the box component, which serves as a flexible container for organizing and styling other components.
   */
  children?: ComponentChildren;
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel?: string;
}
/**
 * @publicDocs
 */
export interface BaseBoxPropsWithRole
  extends BaseBoxProps,
    AccessibilityRoleProps {}
interface BoxProps$1 extends BaseBoxPropsWithRole, GlobalProps {}
/**
 * @publicDocs
 */
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
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
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
/**
 * @publicDocs
 */
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
   * Prompts the browser to download the linked URL rather than navigate to it. When set, the value specifies the suggested filename for the downloaded file.
   *
   * The filename suggestion is only respected for same-origin URLs, `blob:`, and `data:` schemes. Cross-origin URLs can still trigger downloads, but browsers might ignore the suggested filename.
   *
   * Learn more about the [download attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download
   */
  download?: string;
  /**
   * A callback fired when the link is activated, before navigating to the location specified by `href`. Learn more about the [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
   */
  onClick?: (event: Event) => void;
}
/**
 * @publicDocs
 */
export interface InteractionProps {
  /**
   * The ID of the component to control when this component is activated. Pair with the `command` property to specify what action to perform on the target component. Learn more about the [commandfor attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor
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
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command
   */
  command?: '--auto' | '--show' | '--hide' | '--toggle' | '--copy';
  /**
   * The ID of the component to show when users hover over or focus on this component. Use this to connect interactive components to popovers or tooltips that provide additional context or information.
   */
  interestFor?: string;
}
/**
 * @publicDocs
 */
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
  icon?:
    | (
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
        | 'alert-triangle-filled'
        | 'align-horizontal-centers'
        | 'app-extension'
        | 'apps'
        | 'archive'
        | 'arrow-down'
        | 'arrow-down-circle'
        | 'arrow-down-right'
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
        | 'battery-low'
        | 'bill'
        | 'blank'
        | 'blog'
        | 'bolt'
        | 'bolt-filled'
        | 'book'
        | 'book-open'
        | 'brain'
        | 'broom'
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
        | 'cart-filled'
        | 'cart-sale'
        | 'cart-send'
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
        | 'complete'
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
        | 'delivered'
        | 'delivery'
        | 'desktop'
        | 'disabled'
        | 'disabled-filled'
        | 'discount'
        | 'discount-add'
        | 'discount-automatic'
        | 'discount-code'
        | 'discount-remove'
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
        | 'drawer'
        | 'duplicate'
        | 'edit'
        | 'email'
        | 'email-follow-up'
        | 'email-newsletter'
        | 'empty'
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
        | 'fav'
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
        | 'geolocation'
        | 'gift'
        | 'gift-card'
        | 'git-branch'
        | 'git-commit'
        | 'git-repository'
        | 'globe'
        | 'globe-asia'
        | 'globe-europe'
        | 'globe-lines'
        | 'globe-list'
        | 'graduation-hat'
        | 'grid'
        | 'hashtag'
        | 'hashtag-decimal'
        | 'hashtag-list'
        | 'heart'
        | 'hide'
        | 'hide-filled'
        | 'home'
        | 'home-filled'
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
        | 'info-filled'
        | 'inheritance'
        | 'inventory'
        | 'inventory-edit'
        | 'inventory-list'
        | 'inventory-transfer'
        | 'inventory-updated'
        | 'iq'
        | 'key'
        | 'keyboard'
        | 'keyboard-filled'
        | 'keyboard-hide'
        | 'keypad'
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
        | 'layer'
        | 'lightbulb'
        | 'link'
        | 'link-list'
        | 'list-bulleted'
        | 'list-bulleted-filled'
        | 'list-numbered'
        | 'live'
        | 'live-critical'
        | 'live-none'
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
        | 'menu-filled'
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
        | 'money-split'
        | 'moon'
        | 'nature'
        | 'note'
        | 'note-add'
        | 'notification'
        | 'number-one'
        | 'order'
        | 'order-batches'
        | 'order-draft'
        | 'order-filled'
        | 'order-first'
        | 'order-fulfilled'
        | 'order-repeat'
        | 'order-unfulfilled'
        | 'orders-status'
        | 'organization'
        | 'outdent'
        | 'outgoing'
        | 'package'
        | 'package-cancel'
        | 'package-fulfilled'
        | 'package-on-hold'
        | 'package-reassign'
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
        | 'partially-complete'
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
        | 'person-filled'
        | 'person-list'
        | 'person-lock'
        | 'person-remove'
        | 'person-segment'
        | 'personalized-text'
        | 'phablet'
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
        | 'point-of-sale-register'
        | 'price-list'
        | 'print'
        | 'product'
        | 'product-add'
        | 'product-cost'
        | 'product-filled'
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
        | 'receipt-folded'
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
        | 'reorder'
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
        | 'savings'
        | 'scan-qr-code'
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
        | 'shipping-label-cancel'
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
        | 'star-circle'
        | 'star-filled'
        | 'star-half'
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
        | 'text-indent-remove'
        | 'text-italic'
        | 'text-quote'
        | 'text-title'
        | 'text-underline'
        | 'text-with-image'
        | 'theme'
        | 'theme-cart'
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
        | 'transaction-fee-add'
        | 'transaction-fee-dollar'
        | 'transaction-fee-euro'
        | 'transaction-fee-pound'
        | 'transaction-fee-rupee'
        | 'transaction-fee-yen'
        | 'transfer'
        | 'transfer-in'
        | 'transfer-internal'
        | 'transfer-out'
        | 'truck'
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
        | 'x-circle'
        | 'x-circle-filled'
      )
    | AnyString;
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
/**
 * @publicDocs
 */
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
/**
 * @publicDocs
 */
export interface InputProps extends BaseInputProps {
  /**
   * A callback fired when the user has finished editing the field, such as when they blur the field or press Enter. Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
   */
  onChange?: (event: Event) => void;
  /**
   * A callback fired when the user makes any changes in the field, such as typing a character. Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
   */
  onInput?: (event: Event) => void;
  /**
   * The current value for the field. If omitted, the field will be empty.
   */
  value?: string;
  /**
   * The initial value of the field when it first loads. Unlike `placeholder`, this is a real value that the user can edit and that gets submitted with the form. Once the user starts typing, their input replaces it. Changing this property after the field has loaded has no effect. To update the field value at any time, use `value` instead.
   *
   * @implementation `defaultValue` reflects to the `value` attribute.
   */
  defaultValue?: string;
}
/**
 * @publicDocs
 */
export interface MultipleInputProps extends BaseInputProps {
  /**
   * A callback fired when the user has selected one or more options. Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
   */
  onChange?: (event: Event) => void;
  /**
   * A callback fired when the user selects or deselects options. Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
   */
  onInput?: (event: Event) => void;
  /**
   * An array of `value` attributes for the currently selected options. When provided, this property automatically sets the `selected` state on child option components that have matching `value` attributes. Options with values included in this array will be marked as selected, while others will be unselected.
   */
  values?: string[];
}
/**
 * @publicDocs
 */
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
   * A string that represents the path to the selected file(s). If no file is selected yet, the value is an empty string (""). When the user selected multiple files, the value represents the first file in the list of files they selected. The value is always the file's name prefixed with "C:\fakepath\", which isn't the real path of the file.
   *
   * Learn more about the [file input value](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file#value).
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
/**
 * @publicDocs
 */
export interface FieldErrorProps {
  /**
   * An error message displayed below the checkbox to indicate validation problems. When set, the checkbox is styled with error indicators and the message is announced to screen readers.
   *
   * @implementation (string) The error is a simple string that will be displayed to the user.
   *
   * @implementation (ComponentChildren) Behaves as a slot: any elements passed
   * are rendered as the error content (subject to surface constraints); there
   * is no coercion to a string.
   */
  error?: string | ComponentChildren;
}
/**
 * @publicDocs
 */
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
   * The text displayed as the field label, which identifies the purpose of the field to users. This label is associated with the field for accessibility and helps users understand what information to provide.
   *
   * @implementation (string) The label is a simple string that will be displayed to the user.
   *
   * @implementation (ComponentChildren) Behaves as a slot: any elements passed
   * are rendered as the label content (subject to surface constraints); there
   * is no coercion to a string.
   */
  label?: string | ComponentChildren;
}
/**
 * @publicDocs
 */
export interface FieldDetailsProps {
  /**
   * Supplementary text displayed below the checkbox to provide additional context, instructions, or help. Use this to explain what checking the box means or provide guidance to users. This text is announced to screen readers.
   *
   * @implementation (string) The details is a simple string that will be displayed to the user.
   *
   * @implementation (ComponentChildren) Behaves as a slot: any elements passed
   * are rendered as the details content (subject to surface constraints); there
   * is no coercion to a string.
   */
  details?: string | ComponentChildren;
}
/**
 * @publicDocs
 */
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
/**
 * @publicDocs
 */
export interface BaseTextFieldProps extends FieldProps {
  /**
   * Whether the field is read-only and can't be edited. Read-only fields remain focusable and their content is announced by screen readers.
   *
   * @default false
   */
  readOnly?: boolean;
}
/**
 * @publicDocs
 */
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
   * An icon displayed inside the field to provide visual context about the expected input or field purpose. Commonly used for search fields, currency inputs, or to indicate field type. Accepts any icon name from the icon library or a custom string identifier.
   *
   * @default ''
   */
  icon?:
    | (
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
        | 'alert-triangle-filled'
        | 'align-horizontal-centers'
        | 'app-extension'
        | 'apps'
        | 'archive'
        | 'arrow-down'
        | 'arrow-down-circle'
        | 'arrow-down-right'
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
        | 'battery-low'
        | 'bill'
        | 'blank'
        | 'blog'
        | 'bolt'
        | 'bolt-filled'
        | 'book'
        | 'book-open'
        | 'brain'
        | 'broom'
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
        | 'cart-filled'
        | 'cart-sale'
        | 'cart-send'
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
        | 'complete'
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
        | 'delivered'
        | 'delivery'
        | 'desktop'
        | 'disabled'
        | 'disabled-filled'
        | 'discount'
        | 'discount-add'
        | 'discount-automatic'
        | 'discount-code'
        | 'discount-remove'
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
        | 'drawer'
        | 'duplicate'
        | 'edit'
        | 'email'
        | 'email-follow-up'
        | 'email-newsletter'
        | 'empty'
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
        | 'fav'
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
        | 'geolocation'
        | 'gift'
        | 'gift-card'
        | 'git-branch'
        | 'git-commit'
        | 'git-repository'
        | 'globe'
        | 'globe-asia'
        | 'globe-europe'
        | 'globe-lines'
        | 'globe-list'
        | 'graduation-hat'
        | 'grid'
        | 'hashtag'
        | 'hashtag-decimal'
        | 'hashtag-list'
        | 'heart'
        | 'hide'
        | 'hide-filled'
        | 'home'
        | 'home-filled'
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
        | 'info-filled'
        | 'inheritance'
        | 'inventory'
        | 'inventory-edit'
        | 'inventory-list'
        | 'inventory-transfer'
        | 'inventory-updated'
        | 'iq'
        | 'key'
        | 'keyboard'
        | 'keyboard-filled'
        | 'keyboard-hide'
        | 'keypad'
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
        | 'layer'
        | 'lightbulb'
        | 'link'
        | 'link-list'
        | 'list-bulleted'
        | 'list-bulleted-filled'
        | 'list-numbered'
        | 'live'
        | 'live-critical'
        | 'live-none'
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
        | 'menu-filled'
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
        | 'money-split'
        | 'moon'
        | 'nature'
        | 'note'
        | 'note-add'
        | 'notification'
        | 'number-one'
        | 'order'
        | 'order-batches'
        | 'order-draft'
        | 'order-filled'
        | 'order-first'
        | 'order-fulfilled'
        | 'order-repeat'
        | 'order-unfulfilled'
        | 'orders-status'
        | 'organization'
        | 'outdent'
        | 'outgoing'
        | 'package'
        | 'package-cancel'
        | 'package-fulfilled'
        | 'package-on-hold'
        | 'package-reassign'
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
        | 'partially-complete'
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
        | 'person-filled'
        | 'person-list'
        | 'person-lock'
        | 'person-remove'
        | 'person-segment'
        | 'personalized-text'
        | 'phablet'
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
        | 'point-of-sale-register'
        | 'price-list'
        | 'print'
        | 'product'
        | 'product-add'
        | 'product-cost'
        | 'product-filled'
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
        | 'receipt-folded'
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
        | 'reorder'
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
        | 'savings'
        | 'scan-qr-code'
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
        | 'shipping-label-cancel'
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
        | 'star-circle'
        | 'star-filled'
        | 'star-half'
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
        | 'text-indent-remove'
        | 'text-italic'
        | 'text-quote'
        | 'text-title'
        | 'text-underline'
        | 'text-with-image'
        | 'theme'
        | 'theme-cart'
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
        | 'transaction-fee-add'
        | 'transaction-fee-dollar'
        | 'transaction-fee-euro'
        | 'transaction-fee-pound'
        | 'transaction-fee-rupee'
        | 'transaction-fee-yen'
        | 'transfer'
        | 'transfer-in'
        | 'transfer-internal'
        | 'transfer-out'
        | 'truck'
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
        | 'x-circle'
        | 'x-circle-filled'
      )
    | AnyString;
  /**
   * Additional content to be displayed in the field.
   * Commonly used to display an icon that activates a tooltip providing more information.
   */
  accessory?: ComponentChildren;
}
/**
 * @publicDocs
 */
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
   * - `stepper`: displays buttons to increase or decrease the value of the field by the stepping interval defined in the `step` property. Appropriate mouse and [keyboard interactions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role#keyboard_interactions) to control the value of the field are enabled.
   * - `none`: no controls are displayed and users must input the value manually. Arrow keys and scroll wheels can’t be used either to avoid accidental changes.
   * - `auto`: the presence of the controls depends on the surface and context.
   *
   * @default 'auto'
   */
  controls?: 'auto' | 'stepper' | 'none';
}
/**
 * @publicDocs
 */
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
/**
 * @publicDocs
 */
export interface BaseSelectableProps {
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel?: string;
  /**
   * Whether the checkbox is disabled, preventing user interaction. Disabled checkboxes appear dimmed and their values aren't submitted with forms.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The value submitted with the form when this checkbox is checked. If not specified, the default value is "on".
   */
  value?: string;
}
/**
 * @publicDocs
 */
export interface BaseOptionProps extends BaseSelectableProps {
  /**
   * Whether the option is currently selected. Use this for controlled components where you manage the selection state.
   *
   * @default false
   */
  selected?: boolean;
  /**
   * The initial selected state for uncontrolled components. Use this when you want the option to start selected but don't need to control its state afterward.
   *
   * @implementation `defaultSelected` reflects to the `selected` attribute.
   *
   * @default false
   */
  defaultSelected?: boolean;
}
/**
 * @publicDocs
 */
export interface BaseCheckableProps
  extends BaseSelectableProps,
    FocusEventProps,
    LabelAccessibilityVisibilityProps,
    InteractionProps {
  /**
   * The text label displayed next to the checkbox that describes what the checkbox controls. Clicking the label will also toggle the checkbox state.
   *
   * @implementation (string) The label is a simple string that will be displayed to the user.
   *
   * @implementation (ComponentChildren) Behaves as a slot: any elements passed
   * are rendered as the label content (subject to surface constraints); there
   * is no coercion to a string.
   */
  label?: string | ComponentChildren;
  /**
   * Whether the control is currently checked. Use this for controlled components where you manage the checked state.
   *
   * @default false
   */
  checked?: boolean;
  /**
   * The initial checked state for uncontrolled components. Use this when you want the control to start checked but don't need to control its state afterward.
   *
   * @implementation `defaultChecked` reflects to the `checked` attribute.
   *
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * The name used to identify this checkbox in form submissions. When the checkbox is checked, its `name` and `value` are included in the form data. Must be unique within the containing form.
   */
  name?: string;
  /**
   * A callback that is run whenever the control is changed. Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
   */
  onChange?: (event: Event) => void;
  /**
   * A callback that is run whenever the control is changed. Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).
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
/**
 * @publicDocs
 */
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
/**
 * @publicDocs
 */
export interface AutocompleteProps<
  AutocompleteField extends AnyAutocompleteField,
> {
  /**
   * A hint about the intended content of the field for browser autofill.
   *
   * When set to `on` (the default), this property indicates that the field should support autofill, but you do not have any more semantic information on the intended contents.
   *
   * When set to `off`, you are indicating that this field contains sensitive information, or contents that are never saved, like one-time codes.
   *
   * Alternatively, you can provide value which describes the specific data you would like to be entered into this field during autofill.
   *
   * Learn more about the set of [autocomplete values](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-detail-tokens) supported in browsers.
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
 * The “section” scopes the autocomplete data that should be inserted to a specific area of the page.
 *
 * Commonly used when there are multiple fields with the same autocomplete needs in the same page. For example: 2 shipping address forms in the same page.
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
 * Represents all possible autocomplete field values as defined by the HTML autocomplete specification. These values help browsers provide appropriate autofill suggestions for form fields.
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
 * Represents autocomplete values that are valid for text input fields. This is a subset of `AnyAutocompleteField` containing only fields suitable for text-based inputs.
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
/**
 * Represents autocomplete values that are valid for date input fields. This is a subset of `AnyAutocompleteField` containing only fields suitable for date-based inputs.
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
/**
 * Represents autocomplete values that are valid for email input fields. This is a subset of `AnyAutocompleteField` containing only fields suitable for email inputs.
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
interface EmptyStateProps$1 extends GlobalProps, ActionSlots {
  /**
   * The heading of the EmptyState.
   */
  heading?: string;
  /**
   * The subheading of the EmptyState.
   */
  subheading?: ComponentChildren | StringChildren;
  /**
   * The graphic to display in the EmptyState. The only supported components are `Image` and `Icon`.
   */
  graphic?: ComponentChildren;
}
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
/**
 * Represents an error that occurs when saving function settings data.
 *
 * These errors are returned when the extension-provided data fails validation or causes issues during the commit process to Shopify's servers. Handle these errors in the `onError` callback to provide feedback to users about what went wrong.
 * @publicDocs
 */
export interface FunctionSettingsError extends Error {
  /**
   * A unique identifier describing the “class” of error. These will match the GraphQL error codes as closely as possible. For example the enums returned by the `metafieldsSet` mutation.
   *
   * Learn more about [MetafieldsSetUserErrorCode](/docs/api/admin-graphql/latest/enums/MetafieldsSetUserErrorCode).
   *
   * @see https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldsSetUserErrorCode
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
   * Accepts a single value to apply to both axes, or two space-separated values to set the row and column gaps independently. For example: `large-100 large-500` sets the row gap to `large-100` and column gap to `large-500`.
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
 * Represents content positioning with overflow behavior control. Use `safe` to prevent content from becoming inaccessible when it overflows, or `unsafe` to allow overflow regardless of accessibility.
 * @publicDocs
 */
export type OverflowPosition =
  | `unsafe ${ContentPosition}`
  | `safe ${ContentPosition}`;
/**
 * Justify items defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
 *
 * Learn more about the [justify-items property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items).
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
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
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
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
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
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
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
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
/**
 * @publicDocs
 */
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
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric
   *
   * @default 'auto' - inherit from the parent element
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
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
   *
   * @default ''
   */
  dir?: 'ltr' | 'rtl' | 'auto' | '';
}
/**
 * @publicDocs
 */
export interface BlockTypographyProps {
  /**
   * The maximum number of lines to display before truncating the text content.
   *
   * Learn more about the [-webkit-line-clamp property](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp).
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
  type?:
    | (
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
        | 'alert-triangle-filled'
        | 'align-horizontal-centers'
        | 'app-extension'
        | 'apps'
        | 'archive'
        | 'arrow-down'
        | 'arrow-down-circle'
        | 'arrow-down-right'
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
        | 'battery-low'
        | 'bill'
        | 'blank'
        | 'blog'
        | 'bolt'
        | 'bolt-filled'
        | 'book'
        | 'book-open'
        | 'brain'
        | 'broom'
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
        | 'cart-filled'
        | 'cart-sale'
        | 'cart-send'
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
        | 'complete'
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
        | 'delivered'
        | 'delivery'
        | 'desktop'
        | 'disabled'
        | 'disabled-filled'
        | 'discount'
        | 'discount-add'
        | 'discount-automatic'
        | 'discount-code'
        | 'discount-remove'
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
        | 'drawer'
        | 'duplicate'
        | 'edit'
        | 'email'
        | 'email-follow-up'
        | 'email-newsletter'
        | 'empty'
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
        | 'fav'
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
        | 'geolocation'
        | 'gift'
        | 'gift-card'
        | 'git-branch'
        | 'git-commit'
        | 'git-repository'
        | 'globe'
        | 'globe-asia'
        | 'globe-europe'
        | 'globe-lines'
        | 'globe-list'
        | 'graduation-hat'
        | 'grid'
        | 'hashtag'
        | 'hashtag-decimal'
        | 'hashtag-list'
        | 'heart'
        | 'hide'
        | 'hide-filled'
        | 'home'
        | 'home-filled'
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
        | 'info-filled'
        | 'inheritance'
        | 'inventory'
        | 'inventory-edit'
        | 'inventory-list'
        | 'inventory-transfer'
        | 'inventory-updated'
        | 'iq'
        | 'key'
        | 'keyboard'
        | 'keyboard-filled'
        | 'keyboard-hide'
        | 'keypad'
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
        | 'layer'
        | 'lightbulb'
        | 'link'
        | 'link-list'
        | 'list-bulleted'
        | 'list-bulleted-filled'
        | 'list-numbered'
        | 'live'
        | 'live-critical'
        | 'live-none'
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
        | 'menu-filled'
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
        | 'money-split'
        | 'moon'
        | 'nature'
        | 'note'
        | 'note-add'
        | 'notification'
        | 'number-one'
        | 'order'
        | 'order-batches'
        | 'order-draft'
        | 'order-filled'
        | 'order-first'
        | 'order-fulfilled'
        | 'order-repeat'
        | 'order-unfulfilled'
        | 'orders-status'
        | 'organization'
        | 'outdent'
        | 'outgoing'
        | 'package'
        | 'package-cancel'
        | 'package-fulfilled'
        | 'package-on-hold'
        | 'package-reassign'
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
        | 'partially-complete'
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
        | 'person-filled'
        | 'person-list'
        | 'person-lock'
        | 'person-remove'
        | 'person-segment'
        | 'personalized-text'
        | 'phablet'
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
        | 'point-of-sale-register'
        | 'price-list'
        | 'print'
        | 'product'
        | 'product-add'
        | 'product-cost'
        | 'product-filled'
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
        | 'receipt-folded'
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
        | 'reorder'
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
        | 'savings'
        | 'scan-qr-code'
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
        | 'shipping-label-cancel'
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
        | 'star-circle'
        | 'star-filled'
        | 'star-half'
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
        | 'text-indent-remove'
        | 'text-italic'
        | 'text-quote'
        | 'text-title'
        | 'text-underline'
        | 'text-with-image'
        | 'theme'
        | 'theme-cart'
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
        | 'transaction-fee-add'
        | 'transaction-fee-dollar'
        | 'transaction-fee-euro'
        | 'transaction-fee-pound'
        | 'transaction-fee-rupee'
        | 'transaction-fee-yen'
        | 'transfer'
        | 'transfer-in'
        | 'transfer-internal'
        | 'transfer-out'
        | 'truck'
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
        | 'x-circle'
        | 'x-circle-filled'
      )
    | AnyString;
}
/**
 * @publicDocs
 */
export interface BaseImageProps {
  /**
   * Alternative text that describes the image for accessibility.
   *
   * Provides a text description of the image for users with assistive technology and serves as a fallback when the image fails to load. A well-written description enables people with visual impairments to understand non-text content.
   *
   * When a screen reader encounters an image, it reads this description aloud. When an image fails to load, this text displays on screen, helping all users understand what content was intended.
   *
   * Learn more about [writing effective alt text](https://www.shopify.com/ca/blog/image-alt-text#4) and the [alt attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt).
   *
   * @default `''`
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt
   */
  alt?: string;
  /**
   * A set of media conditions and their corresponding sizes.
   *
   * Learn more about the [sizes attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes
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
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src
   */
  src?: string;
  /**
   * A set of image sources and their width or pixel density descriptors. This overrides the `src` property.
   *
   * Learn more about the [srcset attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset).
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
   * The children define the actions to render inside the Menu. Only Button and SearchField components are allowed as children of a Menu, and these Buttons can perform actions (using `onClick`) or link to other parts of the application (using `to`/ `href`). Any other component placed here will be ignored.
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
    AutocompleteProps<MoneyAutocompleteField> {
  /**
   * The currency code of the field.
   *
   * When set to 'auto', the field will display the currency code of the shop.
   * If no currency code is set for the shop, resolve to 'XXX' the explicit non value.
   *
   * This value will match the global currency code of the shop, so if you need to know the currency code of the field,
   * you can read the value from those APIs.
   *
   * @default 'auto'
   */
  currencyCode?:
    | (
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
        | 'XXX'
      )
    | 'auto';
}
/**
 * Represents autocomplete values that are valid for money/currency input fields. This is a subset of `AnyAutocompleteField` containing only fields suitable for monetary inputs.
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
/**
 * Represents autocomplete values that are valid for number input fields. This is a subset of `AnyAutocompleteField` containing only fields suitable for numeric inputs.
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
  /**
   * A slot for content that comes before the main content, such as an `s-banner`.
   *
   * @implementation surfaces could restrict the content of this slot to certain elements, such as only allowing an `s-banner`.
   */
  supplementalStart?: ComponentChildren;
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
/**
 * @publicDocs
 */
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
/**
 * Represents autocomplete values that are valid for password input fields. This is a subset of `AnyAutocompleteField` containing only fields suitable for password inputs.
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
   *
   * @implementation the content will wrap if the direction is 'inline', and not wrap if the direction is 'block'
   */
  direction?: MaybeResponsive<'block' | 'inline'>;
  /**
   * The distribution of children along the stack component's main axis (the direction of stacking).
   *
   * For example, in a vertical stack (block direction), this controls vertical distribution. Use this to space out children or align them to the start, center, or end.
   *
   * Learn more about the [justify-content property](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
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
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
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
/**
 * @publicDocs
 */
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
   * Whether the table is in a loading state, such as during initial page load or when loading the next page in a paginated table. When `true`, the table might be in an inert state that prevents user interaction.
   *
   * @default false
   */
  loading?: boolean;
}
export type ComputedTableVariant = 'list' | 'table';
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
   * - `list`: The Table is displayed as a list.
   * - `table`: The Table is displayed as a table.
   * - `auto`: The Table is displayed as a table on wide devices and as a list on narrow devices.
   *
   * @default 'auto'
   */
  variant?: ComputedTableVariant | 'auto';
  /**
   * The currently-used variant of the Table.
   * This is only a getter; you cannot set it.
   */
  computedVariant?: ComputedTableVariant;
  /**
   * Event is emitted when the computed variant of the Table changes.
   */
  onComputedVariantChange?: (event: Event) => void;
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
/**
 * Defines the semantic type and styling treatment for text content. Each type maps to appropriate HTML elements and applies specific styling for different contexts.
 * @publicDocs
 */
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
/**
 * Represents autocomplete values that are valid for URL input fields. This is a subset of `AnyAutocompleteField` containing only fields suitable for URL inputs.
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
 * Represents a unique key for identifying elements in lists. Can be a string, number, or any other value.
 * @publicDocs
 */
export type Key = string | number | any;
export interface RefObject<T> {
  current: T | null;
}
/**
 * Represents a callback function that receives a reference to a DOM element or component instance. Called when the element is mounted or unmounted.
 * @publicDocs
 */
export type RefCallback<T> = (instance: T | null) => void | (() => void);
/**
 * Represents a reference to a DOM element or component instance. Can be either a ref object, callback function, or null.
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
/**
 * @publicDocs
 */
export interface ErrorInfo {
  /**
   * A string representation of the component stack trace at the point where an error occurred. Useful for debugging to understand which components were rendering when the error happened.
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
      children?: ComponentChildren$1;
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
/**
 * @publicDocs
 */
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
/**
 * @publicDocs
 */
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
    children: (value: T) => ComponentChildren$1;
  }> {}
/**
 * @publicDocs
 */
export interface Provider<T>
  extends FunctionComponent<{
    value: T;
    children?: ComponentChildren$1;
  }> {}
/**
 * @publicDocs
 */
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
/**
 * Represents CSS styles as a string, typically used for inline styles or style injection.
 * @publicDocs
 */
export type Styles = string;
declare const shadowRootSymbol: unique symbol;
declare const flushRenderSymbol: unique symbol;
/**
 * Represents the implementation details for rendering components within a shadow DOM. Extends `ShadowRootInit` with a render function and optional styles.
 * @publicDocs
 */
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChildren$1;
  styles?: Styles;
  /**
   * Only needed once in the root element, to inject global shadow CSS for all components.
   */
  globalShadowCSS?: Styles;
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
/**
 * @publicDocs
 */
export interface ClickOptions {
  /**
   * The event you want to influence the synthetic click.
   */
  sourceEvent?: ActivationEventEsque;
}
declare const BaseClass: {
  new (): HTMLElement;
  prototype: HTMLElement;
};
export declare abstract class PreactCustomElement extends BaseClass {
  /** @private */
  static get observedAttributes(): string[];
  /** @private */
  [shadowRootSymbol]: ShadowRoot | null;
  /**
   * A promise that resolves after the next render completes.
   * Useful for non-React consumers who need to wait for the shadow DOM
   * to be populated after setting properties.
   * @private
   */
  get updateComplete(): Promise<void>;
  constructor({
    styles,
    ShadowRoot: renderFunction,
    delegatesFocus,
    globalShadowCSS,
    ...options
  }: RenderImpl);

  /**
   * Flush any pending render synchronously.
   *
   * Called by reactWrap's useLayoutEffect after all props are set,
   * ensuring the shadow DOM is populated before the consumer's
   * useLayoutEffect fires. The version counter invalidates any
   * pending microtask so the total render count stays at 1.
   *
   * Uses a Symbol key so this method is not callable by external
   * consumers — only internal code that imports flushRenderSymbol
   * can invoke it.
   *
   * Guarded by #hasPendingRender to avoid spurious Preact re-renders.
   * React creates a new props object reference on every parent render,
   * so reactWrap's useLayoutEffect (which depends on [props]) fires
   * even when no prop *values* changed. Without the guard, every
   * unrelated parent re-render would trigger a full Preact
   * reconciliation — proportional to parent re-render frequency.
   * @private
   */
  [flushRenderSymbol](): void;
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
  | 'arrows-out-horizontal-filled'
  | 'asterisk'
  | 'attachment'
  | 'automation'
  | 'automation-filled'
  | 'backspace'
  | 'bag'
  | 'bank'
  | 'barcode'
  | 'bill'
  | 'bill-filled'
  | 'blank'
  | 'blank-filled'
  | 'blog'
  | 'blog-filled'
  | 'bolt'
  | 'bolt-filled'
  | 'book'
  | 'book-open'
  | 'brain'
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
  | 'cart-abandoned-filled'
  | 'cart-discount'
  | 'cart-down'
  | 'cart-down-filled'
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
  | 'collection-filled'
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
  | 'file-filled'
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
  | 'gauge-filled'
  | 'generated-app'
  | 'generated-app-filled'
  | 'gift-card'
  | 'git-branch'
  | 'git-commit'
  | 'git-repository'
  | 'globe'
  | 'globe-asia'
  | 'globe-asia-filled'
  | 'globe-europe'
  | 'globe-europe-filled'
  | 'globe-filled'
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
  | 'identity-card-filled'
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
  | 'inventory-filled'
  | 'inventory-updated'
  | 'iq'
  | 'key'
  | 'keyboard'
  | 'keyboard-filled'
  | 'keyboard-hide'
  | 'label-printer'
  | 'language'
  | 'language-translate'
  | 'layer'
  | 'layout-block'
  | 'layout-block-ai'
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
  | 'list-bulleted-filled'
  | 'list-numbered'
  | 'live'
  | 'live-filled'
  | 'location'
  | 'location-none'
  | 'lock'
  | 'logo-apple-tap-to-pay-filled'
  | 'magic'
  | 'map'
  | 'markets'
  | 'markets-euro'
  | 'markets-euro-filled'
  | 'markets-rupee'
  | 'markets-rupee-filled'
  | 'markets-yen'
  | 'markets-yen-filled'
  | 'maximize'
  | 'measurement-size'
  | 'measurement-size-list'
  | 'measurement-volume'
  | 'measurement-volume-list'
  | 'measurement-weight'
  | 'measurement-weight-list'
  | 'media-receiver'
  | 'megaphone'
  | 'megaphone-filled'
  | 'mention'
  | 'menu'
  | 'menu-horizontal'
  | 'menu-vertical'
  | 'merge'
  | 'metafields'
  | 'metaobject'
  | 'metaobject-filled'
  | 'metaobject-list'
  | 'metaobject-reference'
  | 'microphone'
  | 'microphone-muted'
  | 'minimize'
  | 'minus'
  | 'minus-circle'
  | 'mobile'
  | 'money'
  | 'money-filled'
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
  | 'order-draft-filled'
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
  | 'passkey-filled'
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
  | 'pin-filled'
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
  | 'price-list-filled'
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
  | 'rank-bottom'
  | 'rank-top'
  | 'receipt'
  | 'receipt-dollar'
  | 'receipt-euro'
  | 'receipt-euro-filled'
  | 'receipt-paid'
  | 'receipt-pound'
  | 'receipt-pound-filled'
  | 'receipt-refund'
  | 'receipt-rupee'
  | 'receipt-rupee-filled'
  | 'receipt-yen'
  | 'receipt-yen-filled'
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
  | 'shield-network'
  | 'shield-none'
  | 'shield-pending'
  | 'shield-person'
  | 'shipping-label'
  | 'shipping-label-filled'
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
  | 'text-ai'
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
  | 'text-in-rows-filled'
  | 'text-indent'
  | 'text-italic'
  | 'text-quote'
  | 'text-title'
  | 'text-underline'
  | 'text-with-image'
  | 'theme'
  | 'theme-cart'
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
  | 'wallet-filled'
  | 'wand'
  | 'watch'
  | 'wifi'
  | 'work'
  | 'work-filled'
  | 'work-list'
  | 'wrench'
  | 'x'
  | 'x-circle';
