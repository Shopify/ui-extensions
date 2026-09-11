/** VERSION: 2.26.0 **/

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';
import * as _shopify_admin_web_component_foundations from '@shopify/admin-web-component-foundations';
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
   * An error message displayed below the field to indicate validation problems. When set, the field is styled with error indicators and the message is announced to screen readers.
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
   * Supplementary text displayed below the field to provide additional context, instructions, or help. Use this to clarify the expected input or provide guidance to users. This text is announced to screen readers.
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
   * Whether the control is disabled, preventing user interaction. Disabled controls appear dimmed and their values aren't submitted with forms.
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * The value submitted with the form when this control is selected. If not specified, the default value is "on".
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
   * The text label displayed next to the control that describes what it does. Clicking the label will also toggle the control state.
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
   * The name used to identify this control in form submissions. When the control is checked, its `name` and `value` are included in the form data. Must be unique within the containing form.
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
interface ProgressProps$1 extends GlobalProps {
  /**
   * A label that describes the purpose of the progress. When set,
   * it will be announced to users using assistive technologies and will
   * provide them with more context.
   *
   * Use it to provide context of what is progressing.
   */
  accessibilityLabel?: string;
  /**
   * Sets the tone of the progress, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Specifies how much of the task has been completed.
   *
   * It must be a valid floating point number between 0 and `max`, or between 0 and 1 if `max` is omitted.
   * If there is no value attribute, the progress bar is indeterminate;
   * this indicates that an activity is ongoing with no indication of how long it is expected to take.
   *
   * @implementation Surfaces should apply styling to cover that indeterminate state.
   * @implementation In a HTML host, you can customize the progress animation via the :indeterminate pseudo-class.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#value
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate#progress_bar
   */
  value?: number;
  /**
   * This attribute describes how much work the task indicated by the progress element requires.
   *
   * The `max` attribute, if present, must have a value greater than 0 and be a valid floating point number.
   *
   * @default 1
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#max
   */
  max?: number;
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

export type ReadOnlyPropKeys<Config> = Config extends {
  readonly readOnlyProps: ReadonlyArray<infer Key>;
}
  ? Extract<Key, string>
  : never;
export type ReactIntrinsicElementChildren<PreactProps extends object> =
  'children' extends keyof PreactProps
    ? {
        children?: ReactNode;
      }
    : Record<never, never>;
export type ReactIntrinsicElementProps<
  PreactProps extends object,
  ElementType,
> = Omit<PreactProps, 'children' | 'key' | 'ref' | 'slot'> &
  ReactIntrinsicElementChildren<PreactProps> &
  RefAttributes<ElementType> & {
    slot?: Lowercase<string>;
  };
export type ReactIntrinsicElements = {
  [Tag in Exclude<
    Extract<keyof preact$1.createElement.JSX.IntrinsicElements, `s-${string}`>,
    `s-test-${string}`
  >]: ReactIntrinsicElementProps<
    preact$1.createElement.JSX.IntrinsicElements[Tag],
    Tag extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[Tag]
      : HTMLElement
  >;
};
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ReactIntrinsicElements {}
  }
}

/**
 * Configure the following properties on the avatar component.
 */
export interface AvatarProps
  extends Required<Pick<AvatarProps$1, 'initials' | 'src' | 'alt' | 'size'>> {
  /**
   * The size of the avatar image.
   *
   * - `small-200`: Extra small avatar, suitable for compact displays or lists with many items.
   * - `small-100`: Alias of `small`.
   * - `small`: Small avatar, good for secondary contexts or tight layouts.
   * - `base`: Default size that works well in most contexts.
   * - `large`: Large avatar for emphasis or when the avatar is a focal point.
   * - `large-100`: Alias of `large`.
   * - `large-200`: Extra large avatar for prominent display.
   */
  size: Extract<
    AvatarProps$1['size'],
    | 'small-200'
    | 'small-100'
    | 'small'
    | 'base'
    | 'large'
    | 'large-100'
    | 'large-200'
  >;
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
  alt: Required<AvatarProps$1>['alt'];
  /**
   * The URL or path to the avatar image. When provided, the image takes priority over `initials`.
   * If the image fails to load or loads slowly, `initials` will be rendered as a fallback.
   */
  src: Required<AvatarProps$1>['src'];
  /**
   * The initials to display in the avatar when no image is provided or fails to load.
   * Typically one or two characters representing a person's first and last name initials, such as "JD" for John Doe.
   */
  initials: Required<AvatarProps$1>['initials'];
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
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
 * A toggle event with a strongly-typed `currentTarget` property. Extends the `ToggleEvent` interface with type-safe access to the element that triggered the toggle.
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
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`. Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
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
 * A function that handles error events from UI components. This type represents an event listener callback that receives both the event and an error object.
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
 * A function that handles extendable events from UI components. This type represents an event listener callback that can use `waitUntil` to extend the event lifetime.
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
 * Props for field slot content (label, error, details) that accept
 * either a string or JSX content in the React wrapper.
 *
 * Internal use only — not exported publicly. External consumers receive
 * string-only types via FieldSlotPreactProps.
 */
export interface FieldSlotInternalReactProps {
  error?: preact.ComponentChildren;
  details?: preact.ComponentChildren;
}
/**
 * Preact JSX string-only versions of field slot props.
 * Used in Preact module declarations after Omit-ing the ComponentChildren
 * versions (required by force-omit-react-slots lint rule).
 */
export interface FieldSlotPreactProps {
  error?: string;
  details?: string;
}
/**
 * Base props for Preact custom elements without children support. Includes common properties like key, ref, and slot for elements that don't accept child content.
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
 * Base props for Preact custom elements with children support. Extends PreactBaseElementProps with the ability to render child elements.
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
declare class Avatar extends PolarisCustomElement implements AvatarProps {
  initials: AvatarProps['initials'];
  src: AvatarProps['src'];
  size: AvatarProps['size'];
  alt: AvatarProps['alt'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$13]: Avatar;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$13]: AvatarJSXProps & PreactBaseElementProps<Avatar>;
    }
  }
}

declare const tagName$13 = 's-avatar';
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

/**
 * Configure the following properties on the icon component.
 */
export interface IconProps
  extends Required<
    Pick<IconProps$1, 'type' | 'tone' | 'color' | 'size' | 'interestFor'>
  > {
  /**
   * The icon to display from the icon library.
   *
   * Set to a valid icon name to display that icon. To hide the icon completely,
   * use an empty string `''`. To reserve the icon's space without displaying an icon,
   * use `'empty'`.
   */
  type:
    | ''
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
    | 'empty';
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
  tone: Extract<
    IconProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  /**
   * The color emphasis level that controls visual intensity.
   *
   * - `base`: Primary color for body text, standard UI elements, and general content with good readability.
   * - `subdued`: Deemphasized color for secondary text, supporting labels, and less critical interface elements.
   *
   * @default 'base'
   */
  color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
  /**
   * The size of the icon.
   *
   * - `small`: Smaller icon suitable for inline use within text or compact UI elements.
   * - `base`: Default size that works well for standalone icons and standard use cases.
   */
  size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

/**
 * Configure the following properties on the badge component.
 */
export interface BadgeProps
  extends Pick<BadgeProps$1, 'color' | 'icon' | 'size' | 'tone'> {
  /**
   * Controls the visual weight and emphasis of the badge.
   *
   * - `base`: Standard weight with moderate emphasis, suitable for most use cases.
   * - `strong`: Increased visual weight for higher emphasis and prominence.
   *
   * @default 'base'
   */
  color: Extract<BadgeProps$1['color'], 'base' | 'strong'>;
  /**
   * An icon displayed inside the badge to provide additional visual context or reinforce the badge's meaning.
   * Accepts any icon name from the icon library or a custom string identifier.
   *
   * @default ''
   */
  icon: IconProps['type'] | '';
  /**
   * The size of the badge.
   *
   * - `base`: Default size suitable for most badge use cases.
   * - `large`: Larger badge for increased visibility and prominence.
   * - `large-100`: Extra large badge for maximum visibility in emphasized contexts.
   */
  size: Extract<BadgeProps$1['size'], 'base' | 'large' | 'large-100'>;
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

/**
 * Configure the following properties on the badge component.
 * @publicDocs
 */
declare class Badge extends BadgeBase implements BadgeProps {
  icon: BadgeProps['icon'];
  tone: BadgeProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$12]: Badge;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$12]: BadgeJSXProps & PreactBaseElementPropsWithChildren<Badge>;
    }
  }
}

declare const tagName$12 = 's-badge';
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
/**
 * Configure the following properties on the banner component.
 */
export interface BannerProps
  extends Pick<
    RequiredBannerProps,
    'heading' | 'dismissible' | 'hidden' | 'tone'
  > {
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
  tone: Extract<
    RequiredBannerProps['tone'],
    'auto' | 'critical' | 'warning' | 'success' | 'info'
  >;
  /**
   * The heading text displayed at the top of the banner.
   *
   * @default ''
   */
  heading: RequiredBannerProps['heading'];
  /**
   * Whether the banner displays a close button that allows users to dismiss it.
   *
   * When the close button is pressed, the `dismiss` event fires, then `hidden` is set to `true`,
   * any animation completes, and the `afterhide` event fires.
   *
   * @default false
   */
  dismissible: RequiredBannerProps['dismissible'];
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
  hidden: RequiredBannerProps['hidden'];
}

/**
 * Configure the following properties on the banner component.
 * @publicDocs
 */
declare class Banner extends PolarisCustomElement implements BannerProps {
  heading: BannerProps['heading'];
  tone: BannerProps['tone'];
  hidden: BannerProps['hidden'];
  dismissible: BannerProps['dismissible'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$11]: Banner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$11]: Omit<BannerJSXProps, 'secondaryActions'> &
        PreactBaseElementPropsWithChildren<Banner>;
    }
  }
}

declare const tagName$11 = 's-banner';
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
  onDismiss?: ((event: CallbackEvent<typeof tagName$11>) => void) | null;
  /**
   * A callback fired when the banner is completely hidden, after any hide animations have completed.
   * Use this to perform cleanup or trigger subsequent actions after the banner is no longer visible.
   */
  onAfterHide?: ((event: CallbackEvent<typeof tagName$11>) => void) | null;
}

/**
 * Makes a type responsive by allowing it to be either the base value or a container query string. This enables conditional styling based on container dimensions.
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
   * A border applied using shorthand syntax to specify width, color, and style in a single property.
   *
   * @default 'none'
   */
  border: RequiredBoxProps['border'];
  /**
   * The thickness of the border on all sides. When set, this overrides the width value specified in the `border` property.
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
   * The visual style of the border on all sides, such as solid, dashed, or dotted. When set, this overrides the style value specified in the `border` property.
   *
   * @default '' - meaning no override
   */
  borderStyle:
    | MaybeAllValuesShorthandProperty<BoxBorderStyles>
    | Extract<RequiredBoxProps['borderStyle'], ''>;
  /**
   * The color of the border using the design system's color scale. When set, this overrides the color value specified in the `border` property.
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
   * Use `auto` to inherit padding from the nearest container with removed padding. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
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
   * Overrides the block value from `padding`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlock: ResponsiveBoxProps['paddingBlock'];
  /**
   * The block-start padding (top in horizontal writing modes).
   *
   * Overrides the block-start value from `paddingBlock`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart: ResponsiveBoxProps['paddingBlockStart'];
  /**
   * The block-end padding (bottom in horizontal writing modes).
   *
   * Overrides the block-end value from `paddingBlock`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
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
   * Overrides the inline value from `padding`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInline: ResponsiveBoxProps['paddingInline'];
  /**
   * The inline-start padding (left in LTR writing modes, right in RTL).
   *
   * Overrides the inline-start value from `paddingInline`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart: ResponsiveBoxProps['paddingInlineStart'];
  /**
   * The inline-end padding (right in LTR writing modes, left in RTL).
   *
   * Overrides the inline-end value from `paddingInline`. Also accepts a [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported `PaddingKeyword` as a query value.
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

/**
 * Configure the following properties on the box component.
 * @publicDocs
 */
declare class Box extends BoxElement implements BoxProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$10]: Box;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$10]: BoxJSXProps & PreactBaseElementPropsWithChildren<Box>;
    }
  }
}

declare const tagName$10 = 's-box';
export interface BoxJSXProps
  extends Partial<BoxProps>,
    Pick<BoxProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the box component, which serves as a flexible container for organizing and styling other components.
   */
  children?: ComponentChildren;
}

/**
 * Represents button props that are specific to button-type elements only. Extracts the subset of `ButtonProps` that includes the `type` property.
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
    | 'inlineSize'
  >
>;
/**
 * Configure the following properties on the button component.
 */
export interface ButtonProps extends ButtonBaseProps {
  /**
   * The semantic meaning and color treatment of the component.
   *
   * - `critical`: Urgent problems or destructive actions.
   * - `auto`: Automatically determined based on context.
   * - `neutral`: General information without specific intent.
   *
   * @default 'auto'
   */
  tone: Extract<ButtonProps$1['tone'], 'neutral' | 'critical' | 'auto'>;
  /**
   * An icon displayed inside the button, typically positioned before the button text.
   * Use icons to help users quickly identify the button's action or to improve scannability.
   * Accepts any icon name from the icon library or a custom string identifier.
   *
   * @default ''
   */
  icon: IconProps['type'];
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel: Required<ButtonOnlyProps>['accessibilityLabel'];
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
  variant: Required<ButtonOnlyProps>['variant'];
  /**
   * The language of the text content. Use this when the text is in a different language than the rest of the page, allowing assistive technologies such as screen readers to invoke the correct pronunciation. The value should be a valid language subtag from the [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
   */
  lang: Required<ButtonOnlyProps>['lang'];
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

/**
 * Configure the following properties on the button component.
 * @publicDocs
 */
declare class Button
  extends ButtonBase<typeof tagName$$>
  implements ButtonProps
{
  icon: ButtonProps['icon'];
  variant: ButtonProps['variant'];
  tone: ButtonProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$$]: Button;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$$]: ButtonJSXProps & PreactBaseElementPropsWithChildren<Button>;
    }
  }
}

declare const tagName$$ = 's-button';
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
  onClick?: ((event: CallbackEvent<typeof tagName$$>) => void) | null;
  /**
   * A callback fired when the button receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$$>) => void) | null;
  /**
   * A callback fired when the button loses focus.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$$>) => void) | null;
}

/**
 * Configure the following properties on the button group component.
 */
export interface ButtonGroupProps
  extends Required<Pick<ButtonGroupProps$1, 'gap' | 'accessibilityLabel'>> {
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   *
   * @implementation Used as a hidden heading or an aria-label on the wrapping element.
   */
  accessibilityLabel: Required<ButtonGroupProps$1>['accessibilityLabel'];
  /**
   * The spacing between buttons in the group.
   *
   * - `base`: Standard spacing that provides clear visual separation between buttons.
   * - `none`: No spacing, creating a connected button group.
   *
   * @default 'base'
   */
  gap: Required<ButtonGroupProps$1>['gap'];
}

declare abstract class ButtonGroupBase
  extends PolarisCustomElement
  implements Pick<ButtonGroupProps, 'gap' | 'accessibilityLabel'>
{
  gap: ButtonGroupProps['gap'];
  accessibilityLabel: ButtonGroupProps['accessibilityLabel'];
  constructor(renderImpl: RenderImpl);
  /**
   * Actions whose translucent fill can't paint over a seam, so the neighbour
   * has to be told not to draw it. The foundation resolves the list.
   * @private
   */
  setInertActions(actions: ReadonlyArray<Element>): void;
  /** @private */
  disconnectedCallback(): void;
}

/**
 * Configure the following properties on the button group component.
 * @publicDocs
 */
declare class ButtonGroup extends ButtonGroupBase implements ButtonGroupProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$_]: ButtonGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$_]: Omit<
        ButtonGroupJSXProps,
        'primaryAction' | 'secondaryActions'
      > &
        PreactBaseElementPropsWithChildren<ButtonGroup>;
    }
  }
}

declare const tagName$_ = 's-button-group';
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
 * Represents the essential input props required for Preact-based input elements. Includes properties like `disabled`, `id`, `name`, and `value`.
 * @publicDocs
 */
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
  /**
   * The value used in form data when the control is checked.
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
   * The value used in form data when the control is checked.
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

/**
 * Configure the following properties on the checkbox component.
 */
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
  /**
   * Whether the field needs a value. This requirement adds semantic value
   * to the field, but it will not cause an error to appear automatically.
   * If you want to present an error when this field is empty, you can do
   * so with the `error` property.
   *
   * @default false
   */
  required: Required<CheckboxProps$1>['required'];
  /**
   * Changes the visibility of the component's label.
   *
   * - `visible`: the label is visible to all users.
   * - `exclusive`: the label is visually hidden but remains in the accessibility tree.
   *
   * @default 'visible'
   */
  labelAccessibilityVisibility: Required<CheckboxProps$1>['labelAccessibilityVisibility'];
}

declare abstract class CheckboxBase
  extends PreactCheckboxElement
  implements
    Pick<
      CheckboxProps,
      'defaultIndeterminate' | 'indeterminate' | 'labelAccessibilityVisibility'
    >
{
  get indeterminate(): CheckboxProps['indeterminate'];
  set indeterminate(indeterminate: CheckboxProps['indeterminate']);
  defaultIndeterminate: CheckboxProps['defaultIndeterminate'];
  labelAccessibilityVisibility: CheckboxProps['labelAccessibilityVisibility'];
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the checkbox component.
 * @publicDocs
 */
declare class Checkbox extends CheckboxBase implements CheckboxProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$Z]: Checkbox;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$Z]: Omit<CheckboxJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementProps<Checkbox>;
    }
  }
}

declare const tagName$Z = 's-checkbox';
export interface CheckboxJSXProps
  extends Partial<Omit<CheckboxProps, 'error' | 'details'>>,
    Pick<CheckboxProps$1, 'id'>,
    FieldSlotInternalReactProps {
  /**
   * A callback fired when the checkbox state changes and the user has finished interacting with it.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$Z>) => void) | null;
  /**
   * A callback fired when the checkbox state changes, including intermediate states during user interaction.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$Z>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$Z>) => void) | null;
}

/**
 * Configure the following properties on the chip component.
 */
export interface ChipProps
  extends Required<
    Pick<ChipProps$2, 'color' | 'accessibilityLabel' | 'removable'>
  > {
  /**
   * The color emphasis level that controls visual intensity.
   *
   * @default 'base'
   */
  color: Required<ChipProps$2>['color'];
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel: Required<ChipProps$2>['accessibilityLabel'];
}

/**
 * Configure the following properties on the chip component.
 * @publicDocs
 */
declare class Chip extends PolarisCustomElement implements ChipProps {
  color: ChipProps['color'];
  accessibilityLabel: ChipProps['accessibilityLabel'];
  removable: ChipProps['removable'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$Y]: Chip;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$Y]: Omit<ChipJSXProps, 'graphic'> &
        PreactBaseElementPropsWithChildren<Chip>;
    }
  }
}

declare const tagName$Y = 's-chip';
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
  onRemove?: ((event: CallbackEvent<typeof tagName$Y>) => void) | null;
}

/**
 * The choice component creates individual selectable options within a choice list. Use choice to define each option that merchants can select, supporting both single selection (radio buttons) and multiple selection (checkboxes) modes.
 *
 * Choice components support labels, help text, and custom content through slots, providing flexible option presentation within choice lists.
 */
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
declare class Choice extends PolarisCustomElement implements ChoiceProps {
  /**
   * Whether the control is disabled, preventing user interaction. Disabled controls appear dimmed and their values aren't submitted with forms.
   */
  disabled: ChoiceProps['disabled'];
  /**
   * Whether the option is currently selected. Use this for controlled components where you manage the selection state.
   */
  get selected(): boolean;
  /**
   * Whether the option is currently selected. Use this for controlled components where you manage the selection state.
   */
  set selected(selected: ChoiceProps['selected']);
  /**
   * The value submitted with the form when this control is selected. If not specified, the default value is "on".
   */
  value: ChoiceProps['value'];
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel: ChoiceProps['accessibilityLabel'];
  /**
   * The initial selected state for uncontrolled components. Use this when you want the option to start selected but don't need to control its state afterward.
   */
  defaultSelected: ChoiceProps['defaultSelected'];
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$X]: Choice;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$X]: Omit<ChoiceJSXProps, 'details' | 'secondaryContent'> &
        PreactBaseElementPropsWithChildren<Choice>;
    }
  }
}

declare const tagName$X = 's-choice';
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
  /**
   * Additional content to display below the choice label.
   * Can include rich content like TextFields, Buttons, or other interactive components.
   * Event handlers on React components are preserved.
   */
  secondaryContent?: ComponentChildren;
}

/**
 * Configure the following properties on the choice list component.
 */
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
  > {
  /**
   * Whether the field is disabled, preventing any user interaction. When `true`, the `disabled` property on any child choices is ignored.
   *
   * @default false
   */
  disabled: Required<ChoiceListProps$1>['disabled'];
  /**
   * Whether multiple choices can be selected.
   *
   * @default false
   */
  multiple: Required<ChoiceListProps$1>['multiple'];
}

declare const internals$3: unique symbol;
declare class BaseClass$1 extends PolarisCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals$3]: ElementInternals;
}
/**
 * Configure the following properties on the choice list component.
 * @publicDocs
 */
declare class ChoiceList extends BaseClass$1 implements ChoiceListProps {
  /**
   * Wraps change and input event listeners so they only fire when the event
   * was dispatched directly on this ChoiceList (event.eventPhase === Event.AT_TARGET).
   *
   * This prevents form events from elements inside secondary content (e.g.
   * TextField, native <input>) from being mistakenly treated as ChoiceList
   * value-change events, while still allowing those events to bubble normally
   * through the DOM (preserving React's event delegation).
   * @private
   */
  addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: AddEventListenerOptions | boolean,
  ): void;

  /** @private */
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean,
  ): void;

  disabled: ChoiceListProps['disabled'];
  /**
   * The name attribute for the field, used to identify the field's value when the form is submitted. Must be unique within the nearest containing form.
   */
  name: ChoiceListProps['name'];
  /**
   * An error message displayed below the field to indicate validation problems. When set, the field is styled with error indicators and the message is announced to screen readers.
   */
  error: ChoiceListProps['error'];
  /**
   * Supplementary text displayed below the field to provide additional context, instructions, or help. Use this to clarify the expected input or provide guidance to users. This text is announced to screen readers.
   */
  details: ChoiceListProps['details'];
  multiple: ChoiceListProps['multiple'];
  /**
   * The text displayed as the field label, which identifies the purpose of the field to users. This label is associated with the field for accessibility and helps users understand what information to provide.
   */
  label: ChoiceListProps['label'];
  /**
   * Controls whether the label is visible to all users or only to screen readers.
   *
   * - `visible`: The label is shown to everyone (default).
   * - `exclusive`: The label is visually hidden but still announced by screen readers.
   *
   * Use `exclusive` when the surrounding context makes the label redundant visually, but screen reader users still need it for clarity.
   */
  labelAccessibilityVisibility: ChoiceListProps['labelAccessibilityVisibility'];
  /**
   * An array of `value` attributes for the currently selected options. When provided, this property automatically sets the `selected` state on child option components that have matching `value` attributes. Options with values included in this array will be marked as selected, while others will be unselected.
   */
  get values(): ChoiceListProps['values'];
  /**
   * An array of `value` attributes for the currently selected options. When provided, this property automatically sets the `selected` state on child option components that have matching `value` attributes. Options with values included in this array will be marked as selected, while others will be unselected.
   */
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
    [tagName$W]: ChoiceList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$W]: ChoiceListJSXProps &
        PreactBaseElementPropsWithChildren<ChoiceList>;
    }
  }
}

declare const tagName$W = 's-choice-list';
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
  onChange?: ((event: CallbackEvent<typeof tagName$W>) => void) | null;
  /**
   * A callback fired when the user makes any changes to the value.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$W>) => void) | null;
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
/**
 * Configure the following properties on the clickable component.
 */
export interface ClickableProps extends Required<BoxProps>, ClickableBaseProps {
  /**
   * Whether the component is in a loading state, which indicates to assistive technology that an action is in progress and prevents interaction.
   */
  loading: Required<ClickableProps$1>['loading'];
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
  lang: Required<ClickableProps$1>['lang'];
  /**
   * Whether the component is disabled, preventing clicks and focus. When disabled, the `click` event won't fire and click events from child elements stop propagating immediately. Interactive child elements can still receive focus and be interacted with. This doesn't apply visual styling by default. You should apply disabled styling as needed.
   */
  disabled: Required<ClickableProps$1>['disabled'];
}

declare const Clickable_base: (abstract new (
  renderImpl: _shopify_admin_web_component_foundations.RenderImpl,
) => BoxElement & PreactOverlayControlProps) &
  Pick<typeof BoxElement, 'prototype' | 'observedAttributes'>;
/**
 * Configure the following properties on the clickable component.
 * @publicDocs
 */
declare class Clickable extends Clickable_base implements ClickableProps {
  disabled: ClickableProps['disabled'];
  loading: ClickableProps['loading'];
  /**
   * The browsing context where the linked URL should be displayed.
   *
   * - `auto`: The target is automatically determined based on the origin of the URL.
   * - `_blank`: Opens the URL in a new window or tab.
   * - `_self`: Opens the URL in the same browsing context as the current one.
   * - `_parent`: Opens the URL in the parent browsing context of the current one. If there is no parent, behaves as `_self`.
   * - `_top`: Opens the URL in the topmost browsing context (the highest ancestor of the current one). If there is no ancestor, behaves as `_self`.
   */
  target: ClickableProps['target'];
  /**
   * The URL to navigate to when clicked. The `click` event fires first, then navigation occurs. If `commandFor` is also set, the command executes instead of navigation.
   */
  href: ClickableProps['href'];
  /**
   * Prompts the browser to download the linked URL rather than navigate to it. When set, the value specifies the suggested filename for the downloaded file.
   *
   * The filename suggestion is only respected for same-origin URLs, `blob:`, and `data:` schemes. Cross-origin URLs can still trigger downloads, but browsers might ignore the suggested filename.
   *
   * Learn more about the [download attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).
   */
  download: ClickableProps['download'];
  /**
   * The behavior of the button component.
   *
   * - `button`: Used to indicate the component acts as a button, meaning it has no default action.
   * - `reset`: Used to indicate the component acts as a reset button, meaning it resets the closest form (returning fields to their default values).
   * - `submit`: Used to indicate the component acts as a submit button, meaning it submits the closest form.
   *
   * This property is ignored if the component supports `href` or `commandFor`/`command` and one of them is set.
   */
  type: ClickableProps['type'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$V]: Clickable;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$V]: ClickableJSXProps &
        PreactBaseElementPropsWithChildren<Clickable>;
    }
  }
}

declare const tagName$V = 's-clickable';
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
  onClick?: ((event: CallbackEvent<typeof tagName$V>) => void) | null;
  /**
   * A callback fired when the chip receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$V>) => void) | null;
  /**
   * A callback fired when the chip loses focus.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$V>) => void) | null;
}

/**
 * Configure the following properties on the clickable chip component.
 */
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
  > {
  /**
   * Whether the chip is hidden from view. When using controlled component pattern with `removable` chips, update this property when the `remove` event fires. For non-removable chips, manually toggle this property to show or hide the chip.
   *
   * @default false
   */
  hidden: Required<ClickableChipProps$1>['hidden'];
  /**
   * Whether the chip is disabled, preventing any user interaction.
   *
   * @default false
   */
  disabled: Required<ClickableChipProps$1>['disabled'];
  /**
   * The URL to navigate to when clicked. The `click` event fires first, then navigation occurs. If `commandFor` is also set, the command executes instead of navigation.
   */
  href: Required<ClickableChipProps$1>['href'];
  /**
   * Whether the chip displays a remove button for dismissal. When clicked, the `remove` callback fires.
   *
   * @default false
   */
  removable: Required<ClickableChipProps$1>['removable'];
}

declare const ClickableChipBase_base: (abstract new (
  renderImpl: Omit<RenderImpl, 'globalShadowCSS'>,
) => PolarisCustomElement & PreactOverlayControlProps) &
  Pick<typeof PolarisCustomElement, 'prototype' | 'observedAttributes'>;
declare abstract class ClickableChipBase<
    TTagName extends keyof HTMLElementTagNameMap,
  >
  extends ClickableChipBase_base
  implements
    Pick<
      ClickableChipProps,
      'accessibilityLabel' | 'removable' | 'hidden' | 'disabled' | 'href'
    >
{
  accessibilityLabel: ClickableChipProps['accessibilityLabel'];
  removable: ClickableChipProps['removable'];
  hidden: ClickableChipProps['hidden'];
  disabled: ClickableChipProps['disabled'];
  href: ClickableChipProps['href'];
  abstract color: string;
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/**
 * Configure the following properties on the clickable chip component.
 * @publicDocs
 */
declare class ClickableChip
  extends ClickableChipBase<typeof tagName$U>
  implements ClickableChipProps
{
  /**
   * The color emphasis level that controls visual intensity.
   */
  color: ClickableChipProps['color'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$U]: ClickableChip;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$U]: Omit<ClickableChipJSXProps, 'graphic'> &
        PreactBaseElementPropsWithChildren<ClickableChip>;
    }
  }
}

declare const tagName$U = 's-clickable-chip';
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
  onClick?: ((event: CallbackEvent<typeof tagName$U>) => void) | null;
  /**
   * A callback fired when the user clicks the remove button on the chip.
   */
  onRemove?: ((event: CallbackEvent<typeof tagName$U>) => void) | null;
  /**
   * A callback fired when the chip is completely hidden, after any hide animations have completed.
   */
  onAfterHide?: ((event: CallbackEvent<typeof tagName$U>) => void) | null;
}

/**
 * Represents the props for Preact-based form field components with autocomplete support. The generic type parameter allows specifying the valid autocomplete values for the field.
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

/**
 * Represents the props for color input field components. Extends `PreactFieldProps` with autocomplete support for color-related fields.
 * @publicDocs
 */
export type ColorFieldProps = PreactFieldProps<
  Required<ColorFieldProps$1>['autocomplete']
> &
  Required<Pick<ColorFieldProps$1, 'alpha' | 'value' | 'defaultValue'>>;

declare abstract class ColorFieldBase
  extends PreactFieldElement<ColorFieldProps['autocomplete']>
  implements Pick<ColorFieldProps, 'alpha' | 'value'>
{
  alpha: ColorFieldProps['alpha'];
  get value(): string;
  set value(value: string);
  /** @private */
  formResetCallback(): void;
  constructor(renderImpl: RenderImpl);
  /** @private */
  setInternalValue(value: string, normalize: boolean): void;
}

/**
 * Configure the following properties on the color field component.
 * @publicDocs
 */
declare class ColorField extends ColorFieldBase implements ColorFieldProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$T]: ColorField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$T]: Omit<ColorFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementProps<ColorField>;
    }
  }
}

declare const tagName$T = 's-color-field';
export interface ColorFieldJSXProps
  extends Partial<Omit<ColorFieldProps, 'accessory' | 'error' | 'details'>>,
    Pick<ColorFieldProps$1, 'id' | 'alpha' | 'value' | 'defaultValue'>,
    FieldReactProps<typeof tagName$T>,
    FieldSlotInternalReactProps {
  onInput?: (event: CallbackEvent<typeof tagName$T>) => void;
  onChange?: (event: CallbackEvent<typeof tagName$T>) => void;
}

/**
 * Configure the following properties on the color picker component.
 */
export interface ColorPickerProps
  extends Required<
    Pick<ColorPickerProps$1, 'id' | 'alpha' | 'value' | 'defaultValue' | 'name'>
  > {
  /**
   * The currently selected color value. Accepts multiple input formats:
   *
   * - Hex: `#RGB`, `#RRGGBB`, `#RRGGBBAA` (3, 6, or 8 digits)
   * - RGB/RGBA: `rgb(255, 0, 0)` or `rgb(255 0 0)` (comma or space-separated)
   * - HSL/HSLA: `hsl(0, 100%, 50%)` or `hsl(0 100% 50%)`
   *
   * Returns an empty string if the value is invalid. The `change` event always emits values in hex format.
   */
  value: Required<ColorPickerProps$1>['value'];
  /**
   * The initial color value when the field first loads. Unlike `placeholder`, this is a real value that the user can edit and that gets submitted with the form. Once the user starts interacting, their input replaces it. Changing this property after the field has loaded has no effect. To update the field value at any time, use `value` instead.
   */
  defaultValue: Required<ColorPickerProps$1>['defaultValue'];
  /**
   * Whether to enable alpha (transparency) channel selection in the color picker, allowing users to choose semi-transparent colors.
   *
   * @default false
   */
  alpha: Required<ColorPickerProps$1>['alpha'];
}

declare const internals$2: unique symbol;
declare class BaseClass extends PolarisCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals$2]: ElementInternals;
}
/**
 * Configure the following properties on the color picker component.
 * @publicDocs
 */
declare class ColorPicker extends BaseClass implements ColorPickerProps {
  alpha: boolean;
  /**
   * The name attribute for the field, used to identify the field's value when the form is submitted. Must be unique within the nearest containing form.
   */
  name: string;
  defaultValue: string;
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
    [tagName$S]: ColorPicker;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$S]: ColorPickerJSXProps & PreactBaseElementProps<ColorPicker>;
    }
  }
}

declare const tagName$S = 's-color-picker';
export interface ColorPickerJSXProps
  extends Partial<ColorPickerProps>,
    Pick<
      ColorPickerProps$1,
      'id' | 'alpha' | 'value' | 'defaultValue' | 'name'
    > {
  onInput?: (event: CallbackEvent<typeof tagName$S>) => void | null;
  onChange?: (event: CallbackEvent<typeof tagName$S>) => void | null;
}

/**
 * Configure the following properties on the date field component.
 */
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
    > {
  /**
   * The currently selected date in `YYYY-MM-DD` format. An empty string means no date is selected.
   *
   * @default ""
   */
  value: Required<DateFieldProps$1>['value'];
  /**
   * The initial date value when the field first renders, in `YYYY-MM-DD` format. An empty string means no date is initially selected.
   *
   * @default ""
   */
  defaultValue: Required<DateFieldProps$1>['defaultValue'];
}

declare abstract class DateFieldBase
  extends PreactFieldElement<DateFieldProps['autocomplete']>
  implements
    Pick<
      DateFieldProps,
      | 'allow'
      | 'disallow'
      | 'allowDays'
      | 'disallowDays'
      | 'view'
      | 'defaultView'
    >
{
  allow: DateFieldProps['allow'];
  disallow: DateFieldProps['disallow'];
  allowDays: DateFieldProps['allowDays'];
  disallowDays: DateFieldProps['disallowDays'];
  set view(view: string);
  get view(): string;
  defaultView: DateFieldProps['defaultView'];
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the date field component.
 * @publicDocs
 */
declare class DateField extends DateFieldBase implements DateFieldProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$R]: DateField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$R]: Omit<DateFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementProps<DateField>;
    }
  }
}

declare const tagName$R = 's-date-field';
export interface DateFieldJSXProps
  extends Partial<Omit<DateFieldProps, 'error' | 'details'>>,
    Pick<DateFieldProps$1, 'id'>,
    FieldSlotInternalReactProps {
  /**
   * A callback fired when the date field loses focus.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$R>) => void) | null;
  /**
   * A callback fired when the user has finished editing the date and the field value changes.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$R>) => void) | null;
  /**
   * A callback fired when the date field receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$R>) => void) | null;
  /**
   * A callback fired when the user makes any changes to the date value.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$R>) => void) | null;
  /**
   * A callback fired when the field contains an invalid date.
   */
  onInvalid?: ((event: CallbackEvent<typeof tagName$R>) => void) | null;
  /**
   * A callback fired when the calendar view changes, such as when navigating between months.
   */
  onViewChange?: ((event: CallbackEvent<typeof tagName$R>) => void) | null;
}

/**
 * Configure the following properties on the date picker component.
 */
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
  /**
   * The currently selected date(s). An empty string means no date is selected.
   *
   * - Single date in `YYYY-MM-DD` format when `type` is set to `"single"`
   * - Date range in `YYYY-MM-DD--YYYY-MM-DD` format (inclusive) when `type` is set to `"range"`
   *
   * @default ""
   */
  value: Required<DatePickerProps$1>['value'];
  /**
   * The initially selected date(s) when the component first renders. An empty string means no date is initially selected.
   *
   * - Single date in `YYYY-MM-DD` format when `type` is set to `"single"`
   * - Date range in `YYYY-MM-DD--YYYY-MM-DD` format (inclusive) when `type` is set to `"range"`
   *
   * @default ""
   */
  defaultValue: Required<DatePickerProps$1>['defaultValue'];
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
  allow: Required<DatePickerProps$1>['allow'];
  /**
   * Specifies which days of the week can be selected as a comma-separated list. Further restricts dates from `allow` and `disallow`. An empty string (default) has no effect.
   *
   * **Valid days**: `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`
   *
   * **Example:** `saturday, sunday` (only weekends)
   *
   * @default ""
   */
  allowDays: Required<DatePickerProps$1>['allowDays'];
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
  disallow: Required<DatePickerProps$1>['disallow'];
  /**
   * Specifies which days of the week can't be selected as a comma-separated list. Excludes days from `allowDays` and intersects with `allow` and `disallow`. An empty string (default) has no effect.
   *
   * **Valid days**: `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`
   *
   * **Example:** `saturday, sunday` (no weekends)
   *
   * @default ""
   */
  disallowDays: Required<DatePickerProps$1>['disallowDays'];
  /**
   * The currently displayed month in `YYYY-MM` format. When changed, the `viewchange` callback is triggered. Defaults to `defaultView`.
   */
  view: Required<DatePickerProps$1>['view'];
  /**
   * The default month to display in `YYYY-MM` format. Used until the `view` callback is set by user interaction or programmatically. Defaults to the current month in the user's locale.
   */
  defaultView: Required<DatePickerProps$1>['defaultView'];
  /**
   * Controls how many months are displayed.
   *
   * - `'auto'`: Context-driven. Today this renders a single month, matching `'1'`.
   * - `'1'`: Renders one month at a time.
   * - `'2'`: Renders two consecutive months side-by-side.
   *
   * @default 'auto'
   */
  visibleMonths: 'auto' | '1' | '2';
}

declare const internals$1: unique symbol;
declare const dirtyStateSymbol: unique symbol;
declare abstract class DatePickerBase<
    TagName extends 's-date-picker' | 's-internal-date-picker',
  >
  extends PolarisCustomElement
  implements DatePickerProps
{
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals$1]: ElementInternals;
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
  visibleMonths: DatePickerProps['visibleMonths'];
  set value(value: string);
  get value(): string;
  /** @private */
  [dirtyStateSymbol]: boolean;
  /** @private */
  formResetCallback(): void;
}

/**
 * Configure the following properties on the date picker component.
 * @publicDocs
 */
declare class DatePicker
  extends DatePickerBase<typeof tagName$Q>
  implements DatePickerProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$Q]: DatePicker;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$Q]: DatePickerJSXProps & PreactBaseElementProps<DatePicker>;
    }
  }
}

declare const tagName$Q = 's-date-picker';
export interface DatePickerJSXProps
  extends Partial<DatePickerProps>,
    Pick<DatePickerProps$1, 'id'> {
  /**
   * A callback fired when the calendar view changes, such as when navigating between months.
   */
  onViewChange?: ((event: CallbackEvent<typeof tagName$Q>) => void) | null;
  /**
   * A callback fired when the date picker receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName$Q>) => void) | null;
  /**
   * A callback fired when the date picker loses focus.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName$Q>) => void) | null;
  /**
   * A callback fired when the user makes any changes to the selected date.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$Q>) => void) | null;
  /**
   * A callback fired when the user has finished selecting a date and the value changes.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$Q>) => void) | null;
}

/**
 * Configure the following properties on the divider component.
 */
export interface DividerProps
  extends Pick<DividerProps$1, 'direction' | 'color'> {
  /**
   * The orientation of the divider line, using [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
   *
   * - `inline`: Horizontal divider for separating vertically stacked content
   * - `block`: Vertical divider for separating horizontally arranged content
   *
   * @default 'inline'
   */
  direction: Extract<DividerProps$1['direction'], 'inline' | 'block'>;
  /**
   * The visual prominence of the divider line.
   *
   * - `base`: Standard divider for most separations (default)
   * - `strong`: More prominent divider for major section breaks
   *
   * @default 'base'
   */
  color: Extract<DividerProps$1['color'], 'base' | 'strong'>;
}

/**
 * Configure the following properties on the divider component.
 * @publicDocs
 */
declare class Divider extends PolarisCustomElement implements DividerProps {
  direction: DividerProps['direction'];
  color: DividerProps['color'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$P]: Divider;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$P]: DividerJSXProps & PreactBaseElementProps<Divider>;
    }
  }
}

declare const tagName$P = 's-divider';
export interface DividerJSXProps
  extends Partial<DividerProps>,
    Pick<DividerProps$1, 'id'> {}

/**
 * Configure the following properties on the drop zone component.
 */
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
  > {
  /**
   * A label that describes the purpose or contents of the item. When set,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel: Required<DropZoneProps$1>['accessibilityLabel'];
  /**
   * Whether multiple files can be selected or dropped at once.
   *
   * @default false
   */
  multiple: Required<DropZoneProps$1>['multiple'];
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
  accept: Required<DropZoneProps$1>['accept'];
}

/**
 * A utility type that replaces occurrences of one type with another within a union type. Useful for type transformations where you need to swap out specific types.
 * @publicDocs
 */
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

/**
 * Configure the following properties on the drop zone component.
 * @publicDocs
 */
declare class DropZone extends DropZoneBase implements DropZoneProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$O]: DropZone;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$O]: Omit<
        DropZoneJSXProps,
        ReadOnlyPropKeys<typeof reactWrapperConfig>
      > & {
        value?: '' | null;
      } & PreactBaseElementPropsWithChildren<DropZone>;
    }
  }
}

declare const tagName$O = 's-drop-zone';
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
  onChange?: ((event: CallbackEvent<typeof tagName$O>) => void) | null;
  /**
   * A callback fired when files are selected or dropped.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$O>) => void) | null;
  /**
   * A callback fired when a dropped file is rejected due to file type or size restrictions.
   */
  onDropRejected?: ((event: CallbackEvent<typeof tagName$O>) => void) | null;
}
declare const reactWrapperConfig: {
  readonly readOnlyProps: readonly ['files', 'value'];
};

/**
 * Represents the props for email input field components. Extends `PreactFieldProps` with autocomplete support for email-related fields.
 * @publicDocs
 */
export type EmailFieldProps = PreactFieldProps<
  Required<EmailFieldProps$1>['autocomplete']
> &
  Required<Pick<EmailFieldProps$1, 'maxLength' | 'minLength'>>;

declare abstract class EmailFieldBase
  extends PreactFieldElement<EmailFieldProps['autocomplete']>
  implements Pick<EmailFieldProps, 'autocomplete' | 'maxLength' | 'minLength'>
{
  autocomplete: EmailFieldProps['autocomplete'];
  maxLength: EmailFieldProps['maxLength'];
  minLength: EmailFieldProps['minLength'];
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the email field component.
 * @publicDocs
 */
declare class EmailField extends EmailFieldBase implements EmailFieldProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$N]: EmailField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$N]: Omit<EmailFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementProps<EmailField>;
    }
  }
}

declare const tagName$N = 's-email-field';
export interface EmailFieldJSXProps
  extends Partial<Omit<EmailFieldProps, 'accessory' | 'error' | 'details'>>,
    Pick<EmailFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$N>,
    FieldSlotInternalReactProps {}

export interface EmptyStateProps
  extends Required<Pick<EmptyStateProps$1, 'heading'>> {}

/**
 * Configure the following properties on the empty state component.
 * @publicDocs
 */
declare class EmptyState
  extends PolarisCustomElement
  implements EmptyStateProps
{
  constructor();
  heading: EmptyStateProps['heading'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$M]: EmptyState;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$M]: Omit<
        EmptyStateJSXProps,
        'primaryAction' | 'secondaryActions' | 'graphic' | 'subheading'
      > &
        PreactBaseElementPropsWithChildren<EmptyState>;
    }
  }
}

declare const tagName$M = 's-empty-state';
export interface EmptyStateJSXProps
  extends Partial<EmptyStateProps>,
    Pick<EmptyStateProps$1, 'id'> {
  /**
   * The main call to action, rendered below the text content. Accepts a single `Button` with a `variant` of `primary`; anything else is ignored with a development warning.
   */
  primaryAction?: ComponentChildren;
  /**
   * An alternative action, rendered beside the primary one. Accepts a single `Button` with a `variant` of `secondary` or `auto` — despite the plural name, only one is rendered.
   */
  secondaryActions?: ComponentChildren;
  /**
   * An illustration or symbol shown above the heading. Accepts a single `Image` or `Icon`, either directly or as the only child of a wrapping element.
   */
  graphic?: ComponentChildren;
  /**
   * Supporting text below the heading, explaining what's missing or what to do next. Accepts `Text` and `Link` components.
   */
  subheading?: ComponentChildren;
}

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
/**
 * Configure the following properties on the grid component.
 */
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
   * - A single [`SpacingKeyword`](/docs/api/polaris/using-polaris-web-components#scale) value applied to both axes, such as `large-100`
   * - A pair of values, such as `large-100 large-500`, to set the inline and block axes respectively
   * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported SpacingKeyword as a query value
   *
   * @default 'none'
   */
  gap: ResponsiveGridProps['gap'];
  /**
   * Adjusts spacing between elements in the block axis. This overrides the row value of `gap`.
   *
   * Accepts:
   * - A single [`SpacingKeyword`](/docs/api/polaris/using-polaris-web-components#scale) value, such as `large-100`
   * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported SpacingKeyword as a query value
   *
   * @default '' - meaning no override
   */
  rowGap: ResponsiveGridProps['rowGap'];
  /**
   * Adjusts spacing between elements in the inline axis. This overrides the column value of `gap`.
   *
   * Accepts:
   * - A single [`SpacingKeyword`](/docs/api/polaris/using-polaris-web-components#scale) value, such as `large-100`
   * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported SpacingKeyword as a query value
   *
   * @default '' - meaning no override
   */
  columnGap: ResponsiveGridProps['columnGap'];
  /**
   * The columns in the grid and their sizes.
   *
   * Accepts:
   * - [Track sizing values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#fixed_and_flexible_track_sizes), such as `1fr auto`
   * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported track sizing values as a query value
   *
   * @default 'none'
   */
  gridTemplateColumns: ResponsiveGridProps['gridTemplateColumns'];
  /**
   * The rows in the grid and their sizes.
   *
   * Accepts:
   * - [Track sizing values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#fixed_and_flexible_track_sizes), such as `1fr auto`
   * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported track sizing values as a query value
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
    [tagName$L]: Grid;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$L]: GridJSXProps & PreactBaseElementPropsWithChildren<Grid>;
    }
  }
}

declare const tagName$L = 's-grid';
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
/**
 * The grid item component represents a single cell within a grid layout, allowing you to control how content is positioned and sized within the grid. Use grid item as a child of grid to specify column span, row span, and positioning for individual content areas.
 *
 * Grid item supports precise placement control through column and row properties, enabling you to create complex layouts where different items occupy varying amounts of space or appear in specific grid positions.
 */
export interface GridItemProps
  extends BoxProps,
    Required<Pick<GridItemProps$1, 'gridColumn' | 'gridRow'>> {
  /**
   * The number of columns the item will span across.
   *
   * Learn more about the [grid-column property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column).
   *
   * @default 'auto'
   */
  gridColumn: RequiredGridItemProps['gridColumn'];
  /**
   * The number of rows the item will span across.
   *
   * Learn more about the [grid-row property](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row).
   *
   * @default 'auto'
   */
  gridRow: RequiredGridItemProps['gridRow'];
}

/**
 * The grid item component represents a single cell within a grid layout, allowing you to control how content is positioned and sized within the grid. Use grid item as a child of grid to specify column span, row span, and positioning for individual content areas.
 *
 * Grid item supports precise placement control through column and row properties, enabling you to create complex layouts where different items occupy varying amounts of space or appear in specific grid positions.
 * @publicDocs
 */
declare class GridItem extends BoxElement implements GridItemProps {
  gridColumn: GridItemProps['gridColumn'];
  gridRow: GridItemProps['gridRow'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$K]: GridItem;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$K]: GridItemJSXProps &
        PreactBaseElementPropsWithChildren<GridItem>;
    }
  }
}

declare const tagName$K = 's-grid-item';
export interface GridItemJSXProps
  extends Partial<GridItemProps>,
    Pick<GridItemProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the grid item component, which represents a single cell in the grid layout and can span multiple columns or rows.
   */
  children?: ComponentChildren;
}

declare const typographyFontWeights: readonly [
  'auto',
  'base',
  'medium',
  'semibold',
  'bold',
];
export type TypographyFontWeight = (typeof typographyFontWeights)[number];
declare const bodyFontSizes: readonly [
  'auto',
  'small-200',
  'small-100',
  'small',
  'base',
  'large',
  'large-100',
];
export type BodyFontSize = (typeof bodyFontSizes)[number];
declare const headingFontSizes: readonly [
  'auto',
  'small',
  'base',
  'large',
  'large-100',
  'large-200',
  'large-300',
  'large-400',
];
export type HeadingFontSize = (typeof headingFontSizes)[number];

/**
 * Configure the following properties on the heading component.
 */
export interface HeadingProps
  extends Required<
    Pick<
      HeadingProps$1,
      'accessibilityRole' | 'accessibilityVisibility' | 'lineClamp'
    >
  > {
  /**
   * The font size of the heading. The named values also apply their matching
   * line-height and letter-spacing:
   *
   * - 'small' maps to headingXs
   * - 'base' maps to headingSm
   * - 'large' / 'large-100' maps to headingMd
   * - 'large-200' maps to headingLg
   * - 'large-300' maps to headingXl
   * - 'large-400' maps to heading2xl
   *
   * @default 'auto'
   */
  fontSize: HeadingFontSize;
  /**
   * The semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help users
   * navigate the page.
   *
   * - `heading`: Identifies the element as a heading for assistive technologies.
   * - `none`: Removes semantic meaning from the heading element.
   * - `presentation`: Removes semantic meaning from the heading element.
   *
   * @default 'heading'
   *
   * @implementation The `heading` role doesn't need to be applied if
   * the host applies it for you; for example, an HTML host rendering
   * an `<h2>` element should not apply the `heading` role.
   */
  accessibilityRole: Required<HeadingProps$1>['accessibilityRole'];
}

declare abstract class HeadingBase
  extends PolarisCustomElement
  implements
    Pick<
      HeadingProps,
      'accessibilityRole' | 'accessibilityVisibility' | 'fontSize' | 'lineClamp'
    >
{
  fontSize: HeadingProps['fontSize'];
  accessibilityRole: HeadingProps['accessibilityRole'];
  lineClamp: HeadingProps['lineClamp'];
  accessibilityVisibility: HeadingProps['accessibilityVisibility'];
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the heading component.
 * @publicDocs
 */
declare class Heading extends HeadingBase implements HeadingProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$J]: Heading;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$J]: HeadingJSXProps &
        PreactBaseElementPropsWithChildren<Heading>;
    }
  }
}

declare const tagName$J = 's-heading';
export interface HeadingJSXProps
  extends Partial<HeadingProps>,
    Pick<HeadingProps$1, 'id' | 'children'> {
  /**
   * The heading text displayed within the heading component, which provides a title or section header for content.
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

/**
 * Configure the following properties on the icon component.
 * @publicDocs
 */
declare class Icon extends IconBase implements IconProps {
  tone: IconProps['tone'];
  type: IconProps['type'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$I]: Icon;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$I]: IconJSXProps & PreactBaseElementProps<Icon>;
    }
  }
}

declare const tagName$I = 's-icon';
export interface IconJSXProps
  extends Partial<IconProps>,
    Pick<IconProps$1, 'id'> {}

/**
 * Configure the following properties on the image component.
 */
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
  loading: Required<ImageProps$1>['loading'];
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
  accessibilityRole: Required<ImageProps$1>['accessibilityRole'];
  /**
   * The displayed inline width of the image.
   *
   * - `fill`: the image will take up 100% of the available inline size.
   * - `auto`: the image will be displayed at its natural size.
   *
   * Learn more about the [width attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width).
   *
   * @default 'fill'
   */
  inlineSize: Required<ImageProps$1>['inlineSize'];
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
  aspectRatio: Required<ImageProps$1>['aspectRatio'];
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
  objectFit: Required<ImageProps$1>['objectFit'];
}

/**
 * Configure the following properties on the image component.
 * @publicDocs
 */
declare class Image extends PolarisCustomElement implements ImageProps {
  /**
   * The image source (either a remote URL or a local file resource).
   *
   * When the image is loading or no `src` is provided, a placeholder is rendered.
   */
  src: ImageProps['src'];
  /**
   * A set of image sources and their width or pixel density descriptors. This overrides the `src` property.
   *
   * Learn more about the [srcset attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset).
   */
  srcSet: ImageProps['srcSet'];
  /**
   * A set of media conditions and their corresponding sizes.
   *
   * Learn more about the [sizes attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes).
   */
  sizes: ImageProps['sizes'];
  /**
   * Alternative text that describes the image for accessibility.
   *
   * Provides a text description of the image for users with assistive technology and serves as a fallback when the image fails to load. A well-written description enables people with visual impairments to understand non-text content.
   *
   * When a screen reader encounters an image, it reads this description aloud. When an image fails to load, this text displays on screen, helping all users understand what content was intended.
   *
   * Learn more about [writing effective alt text](https://www.shopify.com/ca/blog/image-alt-text#4) and the [alt attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt).
   */
  alt: ImageProps['alt'];
  aspectRatio: ImageProps['aspectRatio'];
  objectFit: ImageProps['objectFit'];
  loading: ImageProps['loading'];
  accessibilityRole: ImageProps['accessibilityRole'];
  inlineSize: ImageProps['inlineSize'];
  /**
   * A border applied around the image using shorthand syntax to specify width, color, and style in a single property.
   */
  border: ImageProps['border'];
  /**
   * The thickness of the border around the image. When set, this overrides the width value specified in the `border` property.
   */
  borderWidth: ImageProps['borderWidth'];
  /**
   * The visual style of the border around the image, such as solid, dashed, or dotted. When set, this overrides the style value specified in the `border` property.
   */
  borderStyle: ImageProps['borderStyle'];
  /**
   * The color of the border around the image using the design system's color scale. When set, this overrides the color value specified in the `border` property.
   */
  borderColor: ImageProps['borderColor'];
  /**
   * The roundedness of the image's corners using the design system's radius scale.
   */
  borderRadius: ImageProps['borderRadius'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$H]: Image;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$H]: ImageJSXProps & PreactBaseElementProps<Image>;
    }
  }
}

declare const tagName$H = 's-image';
export interface ImageJSXProps
  extends Partial<ImageProps>,
    Pick<ImageProps$1, 'id'> {
  /**
   * A callback fired when the image fails to load.
   */
  onError?: ((event: CallbackEvent<typeof tagName$H>) => void) | null;
  /**
   * A callback fired when the image loads successfully.
   */
  onLoad?: ((event: CallbackEvent<typeof tagName$H>) => void) | null;
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
/**
 * Configure the following properties on the link component.
 */
export interface LinkProps extends LinkBaseProps {
  /**
   * The semantic meaning and color treatment of the component.
   *
   * - `critical`: Urgent problems or destructive actions.
   * - `auto`: Automatically determined based on context.
   * - `neutral`: General information without specific intent.
   *
   * @default 'auto'
   */
  tone: Extract<RequiredLinkProps['tone'], 'auto' | 'neutral' | 'critical'>;
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel: Required<LinkProps$1>['accessibilityLabel'];
  /**
   * The language of the text content. Use this when the text is in a different language than the rest of the page, allowing assistive technologies such as screen readers to invoke the correct pronunciation. The value should be a valid language subtag from the [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
   */
  lang: Required<LinkProps$1>['lang'];
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
      | 'accessibilityLabel'
      | 'interestFor'
      | 'href'
      | 'target'
      | 'download'
      | 'lang'
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

/**
 * Configure the following properties on the link component.
 * @publicDocs
 */
declare class Link extends LinkBase<typeof tagName$G> implements LinkProps {
  tone: LinkProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$G]: Link;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$G]: LinkJSXProps & PreactBaseElementPropsWithChildren<Link>;
    }
  }
}

declare const tagName$G = 's-link';
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
  onClick?: ((event: CallbackEvent<typeof tagName$G>) => void) | null;
}

/**
 * The list item component represents a single entry within an ordered list or unordered list. Use list item to structure individual points, steps, or items within a list, with each item automatically receiving appropriate list markers (bullets or numbers) from its parent list.
 *
 * List item must be used as a direct child of ordered list or unordered list components. Each list item can contain text, inline formatting, or other components to create rich list content.
 */
export interface ListItemProps extends ListItemProps$1 {
  /**
   * The content displayed within the list item, which represents a single entry in an ordered or unordered list.
   */
  children?: ListItemProps$1['children'];
}

/**
 * The list item component represents a single entry within an ordered list or unordered list. Use list item to structure individual points, steps, or items within a list, with each item automatically receiving appropriate list markers (bullets or numbers) from its parent list.
 *
 * List item must be used as a direct child of ordered list or unordered list components. Each list item can contain text, inline formatting, or other components to create rich list content.
 * @publicDocs
 */
declare class ListItem extends PolarisCustomElement implements ListItemProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$F]: ListItem;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$F]: ListItemJSXProps &
        PreactBaseElementPropsWithChildren<ListItem>;
    }
  }
}

declare const tagName$F = 's-list-item';
export interface ListItemJSXProps
  extends Partial<ListItemProps>,
    Pick<ListItemProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the list item, which represents a single entry in an ordered or unordered list.
   */
  children?: ComponentChildren;
}

/**
 * Configure the following properties on the menu component.
 */
export interface MenuProps
  extends Required<Pick<MenuProps$1, 'id' | 'accessibilityLabel'>> {
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel: Required<MenuProps$1>['accessibilityLabel'];
}

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
/**
 * Represents the initialization object for creating a polyfill command event. Used for overlay control commands in environments that require polyfills.
 * @publicDocs
 */
export type PolyfillCommandEventInit = EventInit & {
  source: HTMLElement | null | undefined;
  command: PreactOverlayControlProps['command'];
  rootActivator?: HTMLElement | null;
};
/**
 * Represents a polyfill command event for overlay controls. Used in environments where native command events are not available.
 * @publicDocs
 */
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
  disconnectedCallback(): void;
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
  accessibilityLabel: string;
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$E]: Menu;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$E]: MenuJSXProps & PreactBaseElementPropsWithChildren<Menu>;
    }
  }
}

declare const tagName$E = 's-menu';
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
/**
 * Configure the following properties on the modal component.
 */
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
  /**
   * A title that describes the content of the modal.
   *
   */
  heading: RequiredAlignedModalProps['heading'];
  /**
   * A label that describes the purpose of the modal. When set,
   * it will be announced to users using assistive technologies and will
   * provide them with more context.
   *
   * This overrides the `heading` prop for screen readers.
   */
  accessibilityLabel: RequiredAlignedModalProps['accessibilityLabel'];
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
  padding: RequiredAlignedModalProps['padding'];
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
declare const onKeyUp: unique symbol;
declare const onBackdropMouseDown: unique symbol;
declare const onBackdropMouseUp: unique symbol;
declare const onBackdropClick: unique symbol;
declare const backdropMouseDownOnDialog: unique symbol;
declare const backdropMouseUpOnDialog: unique symbol;
declare const abortController: unique symbol;
declare const onChildModalChange: unique symbol;
declare const childrenRerenderObserver: unique symbol;
declare const shadowDomRerenderObserver: unique symbol;
declare const focusTrapController: unique symbol;
declare const escapeKeyUpController: unique symbol;
declare const ensureDialogRef: unique symbol;
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
  [nestedModals]: Map<HTMLElement, boolean>;
  /** @private */
  [childrenRerenderObserver]: MutationObserver;
  /** @private */
  [shadowDomRerenderObserver]: MutationObserver;
  /**
   * Focus trap keydown handler reference, stored for cleanup.
   *
   * The focus trap is managed imperatively here in ModalBase rather than
   * via a Preact useEffect in foundation.tsx. This is because aftershow
   * (fired after CSS animations complete) and useEffect (fired after
   * Preact's async effect scheduling) are independent async chains with
   * no synchronization — the useEffect could run before or after
   * aftershow, making tests non-deterministic.
   *
   * By attaching the focus trap in the same .then() chain as aftershow,
   * we guarantee it is active before aftershow dispatches.
   *
   * Lifecycle (mirrors the old useEffect's isActiveModal dependency):
   * - Attached: in aftershow chain, right before aftershow dispatches
   * - Detached: on dismiss(), disconnectedCallback(), or child modal open
   * - Re-attached: when all child modals close
   * @private
   */
  [focusTrapController]: AbortController | null;
  /**
   * Holds the in-flight document keyup suppressor below so a second Escape
   * close replaces it instead of stacking another one.
   * @private
   */
  [escapeKeyUpController]: AbortController | null;
  /** @private */
  [onEscape]: (event: KeyboardEvent) => void;
  /** @private */
  [onKeyUp]: (event: KeyboardEvent) => void;
  /**
   * Whether the most recent mousedown / mouseup on the dialog landed on the
   * backdrop area (the `<dialog>` element itself, outside its content box)
   * rather than inside the modal content.
   *
   * Used by [onBackdropClick] to distinguish a true backdrop click from a
   * `click` event whose target is the dialog only because the user dragged
   * across the content/backdrop boundary. Reset on every backdrop
   * interaction (or when no click follows).
   * @private
   */
  [backdropMouseDownOnDialog]: boolean;
  /** @private */
  [backdropMouseUpOnDialog]: boolean;
  /** @private */
  [onBackdropMouseDown]: (event: MouseEvent) => void;
  /** @private */
  [onBackdropMouseUp]: (event: MouseEvent) => void;
  /** @private */
  [onBackdropClick]: (event: MouseEvent) => void;
  /** @private */
  [onChildModalChange]: EventListenerOrEventListenerObject;
  /**
   * Ensures `this[dialog]` is set by synchronously querying the shadow DOM
   * and attaching event listeners if needed.
   * Works around a Safari timing issue where the MutationObserver callback
   * (which normally sets `this[dialog]`) may not have fired yet when
   * `show()` / `dismiss()` run — especially when `heading` or
   * `accessibilityLabel` adds child custom-elements whose own lifecycle
   * microtasks can delay the observer.
   * @private
   */
  [ensureDialogRef](): void;
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
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the modal component.
 * @publicDocs
 */
declare class Modal extends ModalBase<typeof tagName$D> implements ModalProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$D]: Modal;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$D]: Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'> &
        PreactBaseElementPropsWithChildren<Modal>;
    }
  }
}

declare const tagName$D = 's-modal';
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
  onHide?: ((event: CallbackEvent<typeof tagName$D>) => void) | null;
  /**
   * A callback fired immediately when the modal starts to show.
   */
  onShow?: ((event: CallbackEvent<typeof tagName$D>) => void) | null;
  /**
   * A callback fired when the modal is completely hidden, after any hide animations have completed.
   */
  onAfterHide?: ((event: CallbackEvent<typeof tagName$D>) => void) | null;
  /**
   * A callback fired when the modal is completely shown, after any show animations have completed.
   */
  onAfterShow?: ((event: CallbackEvent<typeof tagName$D>) => void) | null;
}

/**
 * Represents the money field component props with all properties marked as required.
 * @publicDocs
 */
export type RequiredMoneyFieldProps = Required<MoneyFieldProps$1>;
/**
 * Configure the following properties on the money field component.
 */
export interface MoneyFieldProps
  extends Omit<PreactFieldProps, 'value'>,
    Pick<RequiredMoneyFieldProps, 'max' | 'min' | 'currencyCode'> {
  value: Required<MoneyFieldProps$1>['value'];
}

declare abstract class MoneyFieldBase
  extends PreactFieldElement<MoneyFieldProps['autocomplete']>
  implements Pick<MoneyFieldProps, 'max' | 'min' | 'currencyCode' | 'value'>
{
  max: MoneyFieldProps['max'];
  min: MoneyFieldProps['min'];
  currencyCode: MoneyFieldProps['currencyCode'];
  get value(): string;
  set value(value: string);
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the money field component.
 * @publicDocs
 */
declare class MoneyField extends MoneyFieldBase implements MoneyFieldProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$C]: MoneyField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$C]: Omit<MoneyFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementProps<MoneyField>;
    }
  }
}

declare const tagName$C = 's-money-field';
export interface MoneyFieldJSXProps
  extends Partial<Omit<MoneyFieldProps, 'error' | 'details'>>,
    FieldReactProps<typeof tagName$C>,
    Pick<MoneyFieldProps$1, 'id'>,
    FieldSlotInternalReactProps {}

export type NumberFontSize = BodyFontSize;
export type NumberFontWeight = TypographyFontWeight;
export interface NumberProps
  extends Required<Pick<TextProps$1, 'accessibilityVisibility' | 'dir'>> {
  /**
   * The semantic tone that's applied to the number, which changes its color to convey meaning.
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
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'caution' | 'critical'
  >;
  /**
   * The color emphasis applied to the number.
   *
   * - `base`: Standard emphasis for numeric content.
   * - `subdued`: Deemphasized color for secondary or supporting numeric content.
   *
   * @default 'base'
   */
  color: Extract<TextProps$1['color'], 'base' | 'subdued'>;
  /**
   * Font size of the number. The named values also apply their matching
   * line-height and letter-spacing.
   *
   * @default 'auto'
   */
  fontSize: NumberFontSize;
  /**
   * Font weight of the number.
   *
   * @default 'auto'
   */
  fontWeight: NumberFontWeight;
}

/**
 * Configure the following properties on the number component.
 * @publicDocs
 */
declare class Number extends PolarisCustomElement implements NumberProps {
  tone: NumberProps['tone'];
  color: NumberProps['color'];
  fontSize: NumberProps['fontSize'];
  fontWeight: NumberProps['fontWeight'];
  dir: NumberProps['dir'];
  accessibilityVisibility: NumberProps['accessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$B]: Number;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$B]: NumberJSXProps & PreactBaseElementPropsWithChildren<Number>;
    }
  }
}

declare const tagName$B = 's-number';

export interface NumberJSXProps
  extends Partial<NumberProps>,
    Pick<TextProps$1, 'id' | 'lang' | 'children'> {
  /**
   * The number to display. The component styles the value you pass in — typography, tone, and color — and renders it as given, so format and localize it yourself.
   */
  children?: ComponentChildren;
}

/**
 * Configure the following properties on the number field component.
 */
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
  inputMode: Required<NumberFieldProps$1>['inputMode'];
}

declare abstract class NumberFieldBase
  extends PreactFieldElement<NumberFieldProps['autocomplete']>
  implements
    Pick<
      NumberFieldProps,
      'inputMode' | 'step' | 'max' | 'min' | 'prefix' | 'suffix' | 'value'
    >
{
  get value(): string;
  set value(value: string);
  inputMode: NumberFieldProps['inputMode'];
  step: NumberFieldProps['step'];
  max: NumberFieldProps['max'];
  min: NumberFieldProps['min'];
  prefix: NumberFieldProps['prefix'];
  suffix: NumberFieldProps['suffix'];
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the number field component.
 * @publicDocs
 */
declare class NumberField extends NumberFieldBase implements NumberFieldProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$A]: NumberField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$A]: Omit<NumberFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementProps<NumberField>;
    }
  }
}

declare const tagName$A = 's-number-field';
export interface NumberFieldJSXProps
  extends Partial<Omit<NumberFieldProps, 'error' | 'details'>>,
    Pick<NumberFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$A>,
    FieldSlotInternalReactProps {}

/**
 * Represents a single option within a select component. Use only as a child of s-select components.
 */
export interface OptionProps
  extends Required<
    Pick<OptionProps$1, 'disabled' | 'value' | 'selected' | 'defaultSelected'>
  > {}

/**
 * Represents a single option within a select component. Use only as a child of s-select components.
 * @publicDocs
 */
declare class Option extends PolarisCustomElement implements OptionProps {
  /**
   * Whether the option is currently selected. Use this for controlled components where you manage the selection state.
   */
  selected: OptionProps['selected'];
  /**
   * The initial selected state for uncontrolled components. Use this when you want the option to start selected but don't need to control its state afterward.
   */
  defaultSelected: OptionProps['defaultSelected'];
  /**
   * The value submitted with the form when this control is selected. If not specified, the default value is "on".
   */
  value: OptionProps['value'];
  /**
   * Whether the control is disabled, preventing user interaction. Disabled controls appear dimmed and their values aren't submitted with forms.
   */
  disabled: OptionProps['disabled'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$z]: Option;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$z]: OptionJSXProps & PreactBaseElementPropsWithChildren<Option>;
    }
  }
}

declare const tagName$z = 's-option';
export interface OptionJSXProps
  extends Partial<OptionProps>,
    Pick<OptionProps$1, 'id' | 'children'> {
  /**
   * The text or elements displayed as the option label, which identifies the selectable choice to users in a dropdown or selection list.
   */
  children?: ComponentChildren;
}

/**
 * Represents a group of options within a select component. Use only as a child of `s-select` components.
 */
export interface OptionGroupProps
  extends Required<Pick<OptionGroupProps$1, 'disabled' | 'label'>> {
  /**
   * Whether the options within this group can be selected or not.
   *
   * @default false
   */
  disabled: Required<OptionGroupProps$1>['disabled'];
  /**
   * The user-facing label for this group of options.
   */
  label: Required<OptionGroupProps$1>['label'];
}

/**
 * Represents a group of options within a select component. Use only as a child of `s-select` components.
 * @publicDocs
 */
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
    [tagName$y]: OptionGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$y]: OptionGroupJSXProps &
        PreactBaseElementPropsWithChildren<OptionGroup>;
    }
  }
}

declare const tagName$y = 's-option-group';
export interface OptionGroupJSXProps
  extends Partial<OptionGroupProps>,
    Pick<OptionGroupProps$1, 'id' | 'children'> {
  /**
   * The selectable options displayed in the dropdown list. Accepts option components for individual selectable items within this group.
   */
  children?: ComponentChildren;
}

/**
 * Configure the following properties on the ordered list component.
 */
export interface OrderedListProps extends OrderedListProps$1 {}

/**
 * Configure the following properties on the ordered list component.
 * @publicDocs
 */
declare class OrderedList
  extends PolarisCustomElement
  implements OrderedListProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$x]: OrderedList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$x]: OrderedListJSXProps &
        PreactBaseElementPropsWithChildren<OrderedList>;
    }
  }
}

declare const tagName$x = 's-ordered-list';
export interface OrderedListJSXProps
  extends Partial<OrderedListProps>,
    Pick<OrderedListProps$1, 'id'> {
  /**
   * The list entries displayed within the ordered list, where each item is numbered sequentially. Only accepts list item components as children. Each list item represents a single numbered entry in the sequence.
   */
  children?: ComponentChildren;
}

/**
 * Use as the outer wrapper of a page.
 */
export interface PageProps
  extends Required<Pick<PageProps$1, 'inlineSize' | 'heading'>> {
  /**
   * The inline size of the page
   * - `base` corresponds to a set default inline size
   * - `large` full width with whitespace
   *
   * @default 'base'
   */
  inlineSize: Extract<PageProps$1['inlineSize'], 'base' | 'large' | 'small'>;
  /**
   * The main page heading
   */
  heading: Required<PageProps$1>['heading'];
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

/**
 * Use as the outer wrapper of a page.
 * @publicDocs
 */
declare class Page extends PageBase implements PageProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$w]: Page;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$w]: Omit<
        PageJSXProps,
        | 'aside'
        | 'primaryAction'
        | 'secondaryActions'
        | 'breadcrumbActions'
        | 'supplementalStart'
      > &
        PreactBaseElementPropsWithChildren<Page>;
    }
  }
}

declare const tagName$w = 's-page';
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
  /**
   * A slot for content that comes before the main content, such as an `s-banner`.
   */
  supplementalStart?: ComponentChildren;
}

export type ParagraphFontSize = BodyFontSize;
export type ParagraphFontWeight = TypographyFontWeight;
/**
 * Configure the following properties on the paragraph component.
 */
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
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  /**
   * Font size of the paragraph. The named values also apply their matching
   * line-height and letter-spacing.
   *
   * @default 'auto'
   */
  fontSize: ParagraphFontSize;
  /**
   * Font weight of the paragraph.
   *
   * @default 'auto'
   */
  fontWeight: ParagraphFontWeight;
  /**
   * @deprecated Use `Number` for inline numeric values instead.
   */
  fontVariantNumeric: Extract<
    ParagraphProps$1['fontVariantNumeric'],
    'auto' | 'normal' | 'tabular-nums'
  >;
}

declare abstract class ParagraphBase
  extends PolarisCustomElement
  implements
    Pick<
      ParagraphProps,
      | 'fontVariantNumeric'
      | 'fontSize'
      | 'fontWeight'
      | 'lineClamp'
      | 'color'
      | 'dir'
      | 'accessibilityVisibility'
    >
{
  fontSize: ParagraphProps['fontSize'];
  fontWeight: ParagraphProps['fontWeight'];
  /**
   * @deprecated Use `Number` for inline numeric values instead.
   */
  fontVariantNumeric: ParagraphProps['fontVariantNumeric'];
  lineClamp: ParagraphProps['lineClamp'];
  abstract tone: string;
  color: ParagraphProps['color'];
  dir: ParagraphProps['dir'];
  accessibilityVisibility: ParagraphProps['accessibilityVisibility'];
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the paragraph component.
 * @publicDocs
 */
declare class Paragraph extends ParagraphBase implements ParagraphProps {
  tone: ParagraphProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$v]: Paragraph;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$v]: ParagraphJSXProps &
        PreactBaseElementPropsWithChildren<Paragraph>;
    }
  }
}

declare const tagName$v = 's-paragraph';
export interface ParagraphJSXProps
  extends Partial<ParagraphProps>,
    Pick<ParagraphProps$1, 'id' | 'children'> {
  /**
   * The paragraph text content displayed within the paragraph component, which presents a block of related text with appropriate styling.
   */
  children?: ComponentChildren;
}

/**
 * Represents the props for password input field components. Extends `PreactFieldProps` with autocomplete support for password-related fields.
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

declare abstract class PasswordFieldBase
  extends PreactFieldElement<PasswordFieldProps['autocomplete']>
  implements Pick<PasswordFieldProps, 'maxLength' | 'minLength'>
{
  maxLength: PasswordFieldProps['maxLength'];
  minLength: PasswordFieldProps['minLength'];
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the password field component.
 * @publicDocs
 */
declare class PasswordField
  extends PasswordFieldBase
  implements PasswordFieldProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$u]: PasswordField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$u]: Omit<PasswordFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementProps<PasswordField>;
    }
  }
}

declare const tagName$u = 's-password-field';
export interface PasswordFieldJSXProps
  extends Partial<Omit<PasswordFieldProps, 'error' | 'details'>>,
    Pick<PasswordFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$u>,
    FieldSlotInternalReactProps {}

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
  /**
   * The vertical size of the element in standard layouts (height in left-to-right or right-to-left writing modes).
   *
   * Block size adjusts based on the writing direction: in horizontal layouts, it controls the height; in vertical layouts, it controls the width. This ensures consistent behavior across different text directions.
   *
   * Learn more about the [block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size).
   *
   * - `SizeUnits`: Specific size values in pixels, percentages, or zero for precise control.
   * - `auto`: Automatically sizes based on content and layout constraints.
   */
  blockSize: BoxProps['blockSize'];
  /**
   * The minimum vertical size of the element in standard layouts (min-height in left-to-right or right-to-left writing modes).
   *
   * Prevents the element from becoming smaller than this size along the block axis.
   *
   * Learn more about the [min-block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size).
   */
  minBlockSize: BoxProps['minBlockSize'];
  /**
   * The maximum vertical size of the element in standard layouts (max-height in left-to-right or right-to-left writing modes).
   *
   * Prevents the element from becoming larger than this size along the block axis.
   *
   * Learn more about the [max-block-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size).
   */
  maxBlockSize: BoxProps['maxBlockSize'];
  /**
   * The horizontal size of the element in standard layouts (width in left-to-right or right-to-left writing modes).
   *
   * Inline size adjusts based on the writing direction: in horizontal layouts, it controls the width; in vertical layouts, it controls the height. This ensures consistent behavior across different text directions.
   *
   * Learn more about the [inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size).
   *
   * - `SizeUnits`: Specific size values in pixels, percentages, or zero for precise control.
   * - `auto`: Automatically sizes based on content and layout constraints.
   */
  inlineSize: BoxProps['inlineSize'];
  /**
   * The minimum horizontal size of the element in standard layouts (min-width in left-to-right or right-to-left writing modes).
   *
   * Prevents the element from becoming smaller than this size along the inline axis.
   *
   * Learn more about the [min-inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size).
   */
  minInlineSize: BoxProps['minInlineSize'];
  /**
   * The maximum horizontal size of the element in standard layouts (max-width in left-to-right or right-to-left writing modes).
   *
   * Prevents the element from becoming larger than this size along the inline axis.
   *
   * Learn more about the [max-inline-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size).
   */
  maxInlineSize: BoxProps['maxInlineSize'];
}

/**
 * Configure the following properties on the popover component.
 * @publicDocs
 */
declare class Popover
  extends PreactPopoverElement<typeof tagName$t>
  implements PopoverProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$t]: Popover;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$t]: PopoverJSXProps &
        PreactBaseElementPropsWithChildren<Popover>;
    }
  }
}

declare const tagName$t = 's-popover';
export interface PopoverJSXProps
  extends Partial<PopoverProps>,
    Pick<PopoverProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the popover, which appears in an overlay positioned relative
   * to its trigger element. Typically contains menus, action lists, or supplementary information.
   */
  children?: ComponentChildren;
  /**
   * A callback fired immediately when the popover starts to hide, before any exit animation.
   * Use to perform cleanup or save state before the popover dismisses.
   */
  onHide?: (event: CallbackEvent<typeof tagName$t>) => void | null;
  /**
   * A callback fired immediately when the popover starts to show, before any entrance animation.
   * Use to prepare content or update positioning logic.
   */
  onShow?: (event: CallbackEvent<typeof tagName$t>) => void | null;
  /**
   * A callback fired after the popover has fully hidden and any exit animation completes.
   * Use to reset selections or update the trigger button state.
   */
  onAfterHide?: (event: CallbackEvent<typeof tagName$t>) => void | null;
  /**
   * A callback fired after the popover has fully shown and any entrance animation completes.
   * Use to focus an element inside the popover or announce content to screen readers.
   */
  onAfterShow?: (event: CallbackEvent<typeof tagName$t>) => void | null;
  /**
   * A callback fired when the popover visibility toggles. Use for unified open/close
   * handling when you don't need separate show and hide logic.
   */
  onToggle?: (event: CallbackToggleEvent<typeof tagName$t>) => void | null;
  /**
   * A callback fired after the popover visibility toggle completes and any animation finishes.
   * Use for post-transition updates.
   */
  onAfterToggle?: (event: CallbackToggleEvent<typeof tagName$t>) => void | null;
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
    [tagName$s]: PressButton;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$s]: PressButtonJSXProps &
        PreactBaseElementPropsWithChildren<PressButton>;
    }
  }
}

declare const tagName$s = 's-press-button';
export interface PressButtonJSXProps
  extends Partial<PressButtonProps>,
    Pick<PressButtonProps$1, 'children'> {
  /**
   * The content of the PressButton.
   */
  children?: ComponentChildren;
  onClick?: ((event: CallbackEvent<typeof tagName$s>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$s>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$s>) => void) | null;
}

/**
 * Configure the following properties on the progress component.
 */
export interface ProgressProps
  extends Pick<
    ProgressProps$1,
    'accessibilityLabel' | 'max' | 'tone' | 'value'
  > {
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey what is progressing.
   */
  accessibilityLabel: Required<ProgressProps$1>['accessibilityLabel'];
  /**
   * How much work the task requires in total. Must be greater than `0`.
   *
   * @default 1
   */
  max: Required<ProgressProps$1>['max'];
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
   *
   * @default 'auto'
   */
  tone: Extract<
    ProgressProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  /**
   * How much of the task has been completed, as a number between `0` and `max`.
   *
   * Without a `value` the progress is indeterminate: the task is ongoing with no
   * indication of how long it is expected to take.
   *
   * @default 0
   */
  value: Required<ProgressProps$1>['value'];
}

/**
 * Configure the following properties on the progress component.
 * @publicDocs
 */
declare class Progress extends PolarisCustomElement implements ProgressProps {
  accessibilityLabel: string;
  max: ProgressProps['max'];
  tone: ProgressProps['tone'];
  value: ProgressProps['value'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$r]: Progress;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$r]: ProgressJSXProps & PreactBaseElementProps<Progress>;
    }
  }
}

declare const tagName$r = 's-progress';
export interface ProgressJSXProps
  extends Partial<ProgressProps>,
    Pick<ProgressProps$1, 'id'> {}

/**
 * Configure the following properties on the query container component.
 */
export interface QueryContainerProps
  extends Required<Pick<QueryContainerProps$1, 'id' | 'containerName'>> {
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
  containerName: Required<QueryContainerProps$1>['containerName'];
}

/**
 * Configure the following properties on the query container component.
 * @publicDocs
 */
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
    [tagName$q]: QueryContainer;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$q]: QueryContainerJSXProps &
        PreactBaseElementPropsWithChildren<QueryContainer>;
    }
  }
}

declare const tagName$q = 's-query-container';
export interface QueryContainerJSXProps
  extends Partial<QueryContainerProps$1>,
    Pick<QueryContainerProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the query container component, which enables container queries for responsive styling based on the container's size rather than the viewport.
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
  extends ScrollBoxBase<typeof tagName$p>
  implements ScrollBoxProps
{
  constructor();
  adoptedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$p]: ScrollBox;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$p]: ScrollBoxJSXProps &
        PreactBaseElementPropsWithChildren<ScrollBox>;
    }
  }
}

declare const tagName$p = 's-scroll-box';
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
  onscroll?: ((event: CallbackEvent<typeof tagName$p>) => void) | null;
  /**
   * Callback fired when the scroll container reaches an edge.
   */
  onscrolltoedge?: ((event: CallbackEvent<typeof tagName$p>) => void) | null;
}

/**
 * Represents the props for search input field components. Extends `PreactFieldProps` for search-specific functionality.
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

declare abstract class SearchFieldBase
  extends PreactFieldElement<SearchFieldProps['autocomplete']>
  implements Pick<SearchFieldProps, 'maxLength' | 'minLength'>
{
  maxLength: SearchFieldProps['maxLength'];
  minLength: SearchFieldProps['minLength'];
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the search field component.
 * @publicDocs
 */
declare class SearchField extends SearchFieldBase implements SearchFieldProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$o]: SearchField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$o]: Omit<SearchFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementProps<SearchField>;
    }
  }
}

declare const tagName$o = 's-search-field';
export interface SearchFieldJSXProps
  extends Partial<Omit<SearchFieldProps, 'error' | 'details'>>,
    Pick<TextFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$o>,
    FieldSlotInternalReactProps {}

/**
 * Represents the section component props with all properties marked as required.
 * @publicDocs
 */
export type RequiredSectionProps = Required<SectionProps$1>;
/**
 * Configure the following properties on the section component.
 */
export interface SectionProps
  extends Pick<
    RequiredSectionProps,
    'accessibilityLabel' | 'heading' | 'padding'
  > {
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel: RequiredSectionProps['accessibilityLabel'];
  /**
   * The heading text displayed at the top of the section. This heading provides a title for the section's content and automatically uses the appropriate semantic heading level (h2, h3, h4) based on nesting depth to maintain proper document structure.
   */
  heading: RequiredSectionProps['heading'];
  /**
   * Supporting text that expands on the heading, rendered beneath it in a subdued treatment.
   *
   * This is not a heading: it adds no entry to the document outline, doesn't change the heading level of the section's children, and isn't announced as part of the heading. Keep whatever distinguishes this section from another in `heading`, since that is what someone navigating by heading hears.
   */
  subheading: string;
  /**
   * The padding applied to all edges of the element's content.
   *
   * - `base`: applies padding that is appropriate for the element. Note that it might result in no padding if
   * this is the right design decision in a particular context.
   * - `none`: removes all padding from the element's content. This can be useful when elements inside the section
   * need to span to the edge of the section. For example, a full-width image. In this case, rely on `s-box` with a
   * padding of 'base' to bring back the desired padding for the rest of the content. The `heading` and header
   * actions keep their padding, so they can be combined with `none`.
   *
   * @default 'base'
   */
  padding: RequiredSectionProps['padding'];
}

declare abstract class SectionBase
  extends PolarisCustomElement
  implements SectionProps
{
  constructor(renderImpl: RenderImpl);
  /**
   * The element the section currently renders as its graphic, which sizes a
   * Badge inside it.
   * @private
   */
  setGraphicNode(node: Element | null): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  accessibilityLabel: SectionProps['accessibilityLabel'];
  heading: SectionProps['heading'];
  subheading: SectionProps['subheading'];
  padding: SectionProps['padding'];
}

/**
 * Configure the following properties on the section component.
 * @publicDocs
 */
declare class Section extends SectionBase implements SectionProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$n]: Section;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$n]: Omit<
        SectionJSXProps,
        | 'primaryAction'
        | 'secondaryActions'
        | 'graphic'
        | 'accessory'
        | 'supplemental'
      > &
        PreactBaseElementPropsWithChildren<Section>;
    }
  }
}

declare const tagName$n = 's-section';
export interface SectionJSXProps
  extends Partial<SectionProps>,
    Pick<SectionProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the section component, which groups related elements together in a logical unit with an optional heading.
   */
  children?: ComponentChildren;
  /**
   * The primary action button or link, representing the main or most important action available in this context. Typically displayed with higher visual prominence than secondary actions to establish clear hierarchy.
   */
  primaryAction?: ComponentChildren;
  /**
   * Additional action buttons or links that provide alternative or supporting actions. Visually de-emphasized compared to the primary action.
   *
   * A ButtonGroup holding an action and the icon-only activator for its Menu renders as one segmented group with a chevron activator. The group needs an `accessibilityLabel`, and must hold exactly one Button with text followed by one Button with no text that has an `accessibilityLabel` and a `commandFor` opening a Menu, both with a `variant` of `secondary` or `auto`.
   */
  secondaryActions?: ComponentChildren;
  /**
   * A decorative visual that reinforces the heading, rendered before it.
   *
   * Accepts a single Icon with a `size` of `base`, or an icon-only Badge (`icon` set, no text content) with a `size` of `large`. The heading identifies the section, so this content is not announced by assistive technologies, and it is not rendered at all when the section has no `heading`.
   */
  graphic?: ComponentChildren;
  /**
   * Additional contextual information that qualifies the heading, rendered inline beside the heading text.
   *
   * Only accepts Badge, Icon, Button, Menu, Text, Avatar, Thumbnail, and Tooltip elements. Text must use `tone`, `fontSize`, and `fontWeight` of `auto`; Icon, Avatar, and Thumbnail must use `size="base"`; Badge must use `size="base"` and `color="base"`; Button must use `inlineSize="auto"`.
   *
   * A Tooltip an accessory element's `interestFor` points at can be slotted here beside it.
   */
  accessory?: ComponentChildren;
  /**
   * Status or metadata that describes the section as a whole rather than qualifying its heading, rendered at the inline-end of the header before any actions.
   *
   * This is not an action. Only accepts Badge, Avatar, Text, Icon, and Thumbnail elements, under the same prop constraints as `accessory`.
   */
  supplemental?: ComponentChildren;
}

/**
 * Configure the following properties on the select component.
 */
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

/**
 * Configure the following properties on the select component.
 * @publicDocs
 */
declare class Select extends SelectBase implements SelectProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$m]: Select;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$m]: Omit<SelectJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementPropsWithChildren<Select>;
    }
  }
}

declare const tagName$m = 's-select';
export interface SelectJSXProps
  extends Partial<Omit<SelectProps, 'error' | 'details'>>,
    Pick<SelectProps$1, 'id' | 'children'>,
    FieldSlotInternalReactProps {
  /**
   * The selectable options displayed in the dropdown list. Accepts option components for individual selectable items, and option group components to organize related options into logical groups with labels.
   */
  children?: ComponentChildren;
  onChange?: (event: CallbackEvent<typeof tagName$m>) => void;
  onInput?: (event: CallbackEvent<typeof tagName$m>) => void;
  onBlur?: (event: CallbackEvent<typeof tagName$m>) => void;
  onFocus?: (event: CallbackEvent<typeof tagName$m>) => void;
}

/**
 * Configure the following properties on the spinner component.
 */
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
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel: Required<SpinnerProps$1>['accessibilityLabel'];
}

/**
 * Configure the following properties on the spinner component.
 * @publicDocs
 */
declare class Spinner extends PolarisCustomElement implements SpinnerProps {
  accessibilityLabel: string;
  size: SpinnerProps['size'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$l]: Spinner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$l]: SpinnerJSXProps & PreactBaseElementProps<Spinner>;
    }
  }
}

declare const tagName$l = 's-spinner';
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
/**
 * Configure the following properties on the stack component.
 */
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
   * - A single [`SpacingKeyword`](/docs/api/polaris/using-polaris-web-components#scale) value applied to both axes, such as `large-100`
   * - A pair of values, such as `large-100 large-500`, to set the inline and block axes respectively
   * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported SpacingKeyword as a query value
   *
   * @default 'none'
   */
  gap: ResponsiveStackProps['gap'];
  /**
   * Adjusts spacing between elements in the block axis. This overrides the row value of `gap`.
   *
   * Accepts:
   * - A single [`SpacingKeyword`](/docs/api/polaris/using-polaris-web-components#scale) value, such as `large-100`
   * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported SpacingKeyword as a query value
   *
   * @default '' - meaning no override
   */
  rowGap: ResponsiveStackProps['rowGap'];
  /**
   * Adjusts spacing between elements in the inline axis. This overrides the column value of `gap`.
   *
   * Accepts:
   * - A single [`SpacingKeyword`](/docs/api/polaris/using-polaris-web-components#scale) value, such as `large-100`
   * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported SpacingKeyword as a query value
   *
   * @default '' - meaning no override
   */
  columnGap: ResponsiveStackProps['columnGap'];
  /**
   * The direction in which the stack's children are placed within the stack.
   *
   * Accepts:
   * - A single value, either `inline` or `block`
   * - A [responsive value](/docs/api/polaris/using-polaris-web-components#responsive-values) string with the supported direction values as a query value
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
    [tagName$k]: Stack;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$k]: StackJSXProps & PreactBaseElementPropsWithChildren<Stack>;
    }
  }
}

declare const tagName$k = 's-stack';
export interface StackJSXProps
  extends Partial<StackProps>,
    Pick<StackProps$1, 'id' | 'children'> {
  /**
   * The child elements displayed within the stack component, which are arranged vertically or horizontally with consistent spacing.
   */
  children?: ComponentChildren;
}

/**
 * Configure the following properties on the switch component.
 */
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

/**
 * Configure the following properties on the switch component.
 * @publicDocs
 */
declare class Switch extends SwitchBase implements SwitchProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$j]: Switch;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$j]: SwitchJSXProps & PreactBaseElementProps<Switch>;
    }
  }
}

declare const tagName$j = 's-switch';
export interface SwitchJSXProps
  extends Partial<SwitchProps>,
    Pick<SwitchProps$1, 'id'> {
  /**
   * A callback fired when the switch state changes and the user has finished interacting with it.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$j>) => void) | null;
  /**
   * A callback fired when the switch state changes, including intermediate states during user interaction.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$j>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$j>) => void) | null;
}

/**
 * Configure the following properties on the table component.
 */
export interface TableProps
  extends Required<
    Pick<
      TableProps$1,
      'loading' | 'paginate' | 'hasPreviousPage' | 'hasNextPage' | 'variant'
    >
  > {
  /**
   * The layout variant of the table component.
   *
   * - `list`: Always displays as a list layout.
   * - `auto`: Automatically displays as a table on wide screens and as a list on narrow screens.
   *
   * @default 'auto'
   */
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
/**
 * The table header component represents a single column header within a table header row. Use table header as a child of table header row to define column headings and optionally enable column sorting.
 *
 * Table header provides semantic meaning for screen readers and can include sorting controls when configured. Each header corresponds to a column in the table body.
 */
export interface TableHeaderProps
  extends Pick<TableHeaderProps$1, 'listSlot' | 'format'> {
  /**
   * The content designation for this column when the table displays in list variant on mobile devices.
   *
   * @default 'labeled'
   */
  listSlot: Extract<
    TableHeaderProps$1['listSlot'],
    'primary' | 'secondary' | 'labeled' | 'kicker' | 'inline'
  >;
  /**
   * The format of the column that controls styling and alignment of cell content.
   *
   * @default 'base'
   */
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
declare const elementInternals: unique symbol;

/**
 * Configure the following properties on the table component.
 * @publicDocs
 */
declare class Table extends PolarisCustomElement implements TableProps {
  /** @private */
  [elementInternals]: ElementInternals;
  variant: TableProps['variant'];
  /**
   * Whether the table is in a loading state, such as during initial page load or when loading the next page in a paginated table. When `true`, the table might be in an inert state that prevents user interaction.
   */
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
    [tagName$i]: Table;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$i]: Omit<TableJSXProps, 'filters'> &
        PreactBaseElementPropsWithChildren<Table>;
    }
  }
}

declare const tagName$i = 's-table';
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

/**
 * The table body component represents the main content area of a table, containing the data rows. Use table body as a child of table to structure your table data, with each table row within the body representing a single record or entry.
 *
 * Table body must contain table row components, which in turn contain table cell components for the actual data values.
 */
export interface TableBodyProps extends TableBodyProps$1 {
  /**
   * The rows containing the main data content of the table.
   * In the `table` variant, this represents the semantic table body. In the `list` variant, this might not have semantic meaning but still contains the data rows.
   */
  children?: TableBodyProps$1['children'];
}

/**
 * The table body component represents the main content area of a table, containing the data rows. Use table body as a child of table to structure your table data, with each table row within the body representing a single record or entry.
 *
 * Table body must contain table row components, which in turn contain table cell components for the actual data values.
 * @publicDocs
 */
declare class TableBody extends PolarisCustomElement implements TableBodyProps {
  /** @private */
  [elementInternals]: ElementInternals;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$h]: TableBody;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$h]: TableBodyJSXProps &
        PreactBaseElementPropsWithChildren<TableBody>;
    }
  }
}

declare const tagName$h = 's-table-body';
export interface TableBodyJSXProps
  extends Partial<TableBodyProps>,
    Pick<TableBodyProps$1, 'id' | 'children'> {
  /**
   * The rows containing the main data content of the table.
   * In the `table` variant, this represents the semantic table body. In the `list` variant, this might not have semantic meaning but still contains the data rows.
   */
  children?: ComponentChildren;
}

/**
 * The table cell component represents a single data cell within a table row. Use table cell as a child of table row to display individual data values, with each cell corresponding to a column in the table.
 *
 * Table cell automatically inherits styling and alignment from its parent table structure and supports text content or other inline components.
 */
export interface TableCellProps extends TableCellProps$1 {
  /**
   * The content displayed within the table cell, which represents a single data point in the table's grid structure.
   */
  children?: TableCellProps$1['children'];
}

declare const headerFormatSymbol: unique symbol;

/**
 * The table cell component represents a single data cell within a table row. Use table cell as a child of table row to display individual data values, with each cell corresponding to a column in the table.
 *
 * Table cell automatically inherits styling and alignment from its parent table structure and supports text content or other inline components.
 * @publicDocs
 */
declare class TableCell extends PolarisCustomElement implements TableCellProps {
  /** @private */
  [elementInternals]: ElementInternals;
  constructor();
  /** @private */
  get [headerFormatSymbol](): HeaderFormat;
  /** @private */
  set [headerFormatSymbol](format: HeaderFormat);
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$g]: TableCell;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$g]: TableCellJSXProps &
        PreactBaseElementPropsWithChildren<TableCell>;
    }
  }
}

declare const tagName$g = 's-table-cell';
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
  extends PolarisCustomElement
  implements TableHeaderProps
{
  /** @private */
  [elementInternals]: ElementInternals;
  listSlot: TableHeaderProps['listSlot'];
  format: TableHeaderProps['format'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$f]: TableHeader;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$f]: TableHeaderJSXProps &
        PreactBaseElementPropsWithChildren<TableHeader>;
    }
  }
}

declare const tagName$f = 's-table-header';
export interface TableHeaderJSXProps
  extends Partial<TableHeaderProps>,
    Pick<TableHeaderProps$1, 'id' | 'children'> {
  /**
   * The heading of the column in the `table` variant, and the label of its data in `list` variant.
   */
  children?: ComponentChildren;
}

/**
 * The table header row component represents the header row of a table, containing column headings. Use table header row as the first child of table (before table body) to define the table structure and provide column labels.
 *
 * Table header row must contain table header components for each column. These headers provide context for the data columns and can support sorting functionality.
 */
export interface TableHeaderRowProps extends TableHeaderRowProps$1 {
  /**
   * The header cells that define the columns of the table.
   * Only accepts table header components as children, with each header representing a column and providing its label.
   */
  children?: TableHeaderRowProps$1['children'];
}

/**
 * The table header row component represents the header row of a table, containing column headings. Use table header row as the first child of table (before table body) to define the table structure and provide column labels.
 *
 * Table header row must contain table header components for each column. These headers provide context for the data columns and can support sorting functionality.
 * @publicDocs
 */
declare class TableHeaderRow
  extends PolarisCustomElement
  implements TableHeaderRowProps
{
  /** @private */
  [elementInternals]: ElementInternals;
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$e]: TableHeaderRow;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$e]: TableHeaderRowJSXProps &
        PreactBaseElementPropsWithChildren<TableHeaderRow>;
    }
  }
}

declare const tagName$e = 's-table-header-row';
export interface TableHeaderRowJSXProps
  extends Partial<TableHeaderRowProps>,
    Pick<TableHeaderRowProps$1, 'id' | 'children'> {
  /**
   * The header cells that define the columns of the table.
   * Only accepts table header components as children, with each header representing a column and providing its label.
   */
  children?: ComponentChildren;
}

/**
 * The table row component represents a single row of data within a table body. Use table row as a child of table body to structure individual records or entries in the table.
 *
 * Table row must contain table cell components, with each cell representing a data value for the corresponding column. The number of cells should match the number of headers in the table.
 */
export interface TableRowProps
  extends Pick<TableRowProps$1, 'children' | 'clickDelegate'> {
  /**
   * The data cells displayed within this table row, with each cell containing content for its corresponding column.
   * Only accepts table cell components as children.
   */
  children?: TableRowProps$1['children'];
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
  clickDelegate?: TableRowProps$1['clickDelegate'];
}

/**
 * The table row component represents a single row of data within a table body. Use table row as a child of table body to structure individual records or entries in the table.
 *
 * Table row must contain table cell components, with each cell representing a data value for the corresponding column. The number of cells should match the number of headers in the table.
 * @publicDocs
 */
declare class TableRow extends PolarisCustomElement implements TableRowProps {
  /** @private */
  [elementInternals]: ElementInternals;
  constructor();
  clickDelegate: string;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$d]: TableRow;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$d]: TableRowJSXProps &
        PreactBaseElementPropsWithChildren<TableRow>;
    }
  }
}

declare const tagName$d = 's-table-row';
export interface TableRowJSXProps
  extends Partial<TableRowProps>,
    Pick<TableRowProps$1, 'id' | 'children'> {
  /**
   * The data cells displayed within this table row, with each cell containing content for its corresponding column.
   * Only accepts table cell components as children.
   */
  children?: ComponentChildren;
}

export type TextFontSize = BodyFontSize;
export type TextFontWeight = TypographyFontWeight;
/**
 * Configure the following properties on the text component.
 */
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
    'address' | 'redundant' | 'strong' | 'generic'
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
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'caution' | 'critical'
  >;
  /**
   * @deprecated Use `Number` for inline numeric values instead.
   */
  fontVariantNumeric: Extract<
    TextProps$1['fontVariantNumeric'],
    'auto' | 'normal' | 'tabular-nums'
  >;
  /**
   * Font size of the text. The named values also apply their matching
   * line-height and letter-spacing.
   *
   * @default 'auto'
   */
  fontSize: TextFontSize;
  /**
   * Font weight of the text.
   *
   * @default 'auto'
   */
  fontWeight: TextFontWeight;
}

declare abstract class TextBase
  extends PolarisCustomElement
  implements
    Pick<
      TextProps,
      | 'fontVariantNumeric'
      | 'fontSize'
      | 'fontWeight'
      | 'color'
      | 'type'
      | 'dir'
      | 'accessibilityVisibility'
      | 'interestFor'
    >
{
  fontSize: TextProps['fontSize'];
  fontWeight: TextProps['fontWeight'];
  /**
   * @deprecated Use `Number` for inline numeric values instead.
   */
  fontVariantNumeric: TextProps['fontVariantNumeric'];
  color: TextProps['color'];
  type: TextProps['type'];
  dir: TextProps['dir'];
  accessibilityVisibility: TextProps['accessibilityVisibility'];
  interestFor: string;
  abstract tone: string;
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the text component.
 * @publicDocs
 */
declare class Text extends TextBase implements TextProps {
  tone: TextProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$c]: Text;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$c]: TextJSXProps & PreactBaseElementPropsWithChildren<Text>;
    }
  }
}

declare const tagName$c = 's-text';
export interface TextJSXProps
  extends Partial<TextProps>,
    Pick<TextProps$1, 'id' | 'children'> {
  /**
   * The text content displayed within the text component, which applies semantic meaning and styling appropriate to the specified text type.
   */
  children?: ComponentChildren;
}

/**
 * Represents the props for textarea components. Extends `PreactFieldProps` for multi-line text input functionality.
 * @publicDocs
 */
export type TextAreaProps = PreactFieldProps<
  Required<TextAreaProps$1>['autocomplete']
> &
  Required<Pick<TextAreaProps$1, 'maxLength' | 'minLength' | 'rows'>>;

declare abstract class TextAreaBase
  extends PreactFieldElement<TextAreaProps['autocomplete']>
  implements Pick<TextAreaProps, 'maxLength' | 'minLength' | 'rows'>
{
  maxLength: TextAreaProps['maxLength'];
  minLength: TextAreaProps['minLength'];
  rows: TextAreaProps['rows'];
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the text area component.
 * @publicDocs
 */
declare class TextArea extends TextAreaBase implements TextAreaProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$b]: TextArea;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$b]: Omit<TextAreaJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementProps<TextArea>;
    }
  }
}

declare const tagName$b = 's-text-area';
export interface TextAreaJSXProps
  extends Partial<Omit<TextAreaProps, 'error' | 'details'>>,
    Pick<TextAreaProps$1, 'id'>,
    FieldReactProps<typeof tagName$b>,
    FieldSlotInternalReactProps {}

/**
 * Represents the props for text input field components. Extends `PreactFieldProps` with autocomplete support for text-related fields.
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

/**
 * Configure the following properties on the text field component.
 * @publicDocs
 */
declare class TextField extends TextFieldBase implements TextFieldProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$a]: TextField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$a]: Omit<TextFieldJSXProps, 'accessory' | 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementPropsWithChildren<TextField>;
    }
  }
}

declare const tagName$a = 's-text-field';
export interface TextFieldJSXProps
  extends Partial<Omit<TextFieldProps, 'accessory' | 'error' | 'details'>>,
    Pick<TextFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$a>,
    FieldSlotInternalReactProps {
  /**
   * Additional content displayed alongside the text field, typically an icon or button that provides related functionality like opening a help tooltip or triggering a modal.
   */
  accessory?: ComponentChildren;
}

/**
 * Configure the following properties on the thumbnail component.
 */
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
declare class Thumbnail extends PolarisCustomElement implements ThumbnailProps {
  /**
   * The image source (either a remote URL or a local file resource).
   *
   * When the image is loading or no `src` is provided, a placeholder is rendered.
   */
  src: ThumbnailProps['src'];
  /**
   * Alternative text that describes the image for accessibility.
   *
   * Provides a text description of the image for users with assistive technology and serves as a fallback when the image fails to load. A well-written description enables people with visual impairments to understand non-text content.
   *
   * When a screen reader encounters an image, it reads this description aloud. When an image fails to load, this text displays on screen, helping all users understand what content was intended.
   *
   * Learn more about [writing effective alt text](https://www.shopify.com/ca/blog/image-alt-text#4) and the [alt attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt).
   */
  alt: ThumbnailProps['alt'];
  size: ThumbnailProps['size'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$9]: Thumbnail;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$9]: ThumbnailJSXProps & PreactBaseElementProps<Thumbnail>;
    }
  }
}

declare const tagName$9 = 's-thumbnail';
export interface ThumbnailJSXProps
  extends Partial<ThumbnailProps>,
    Pick<ThumbnailProps$1, 'id'> {
  /**
   * A callback fired when the thumbnail image loads successfully.
   */
  onLoad?: ((event: CallbackEvent<typeof tagName$9>) => void) | null;
  /**
   * A callback fired when the thumbnail image fails to load.
   */
  onError?: ((event: CallbackEvent<typeof tagName$9>) => void) | null;
}

/**
 * Configure the following properties on the tooltip component.
 */
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
    [tagName$8]: Tooltip;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$8]: TooltipJSXProps &
        PreactBaseElementPropsWithChildren<Tooltip>;
    }
  }
}

declare const tagName$8 = 's-tooltip';
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
 * Represents the props for URL input field components. Extends `PreactFieldProps` with autocomplete support for URL-related fields.
 * @publicDocs
 */
export type URLFieldProps = PreactFieldProps<
  Required<URLFieldProps$1>['autocomplete']
> &
  Required<Pick<URLFieldProps$1, 'maxLength' | 'minLength'>>;

declare abstract class URLFieldBase
  extends PreactFieldElement<URLFieldProps['autocomplete']>
  implements Pick<URLFieldProps, 'autocomplete' | 'maxLength' | 'minLength'>
{
  autocomplete: URLFieldProps['autocomplete'];
  maxLength: URLFieldProps['maxLength'];
  minLength: URLFieldProps['minLength'];
  constructor(renderImpl: RenderImpl);
}

/**
 * Configure the following properties on the URL field component.
 * @publicDocs
 */
declare class URLField extends URLFieldBase implements URLFieldProps {
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
      [tagName$7]: Omit<URLFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        PreactBaseElementProps<URLField>;
    }
  }
}

declare const tagName$7 = 's-url-field';
export interface URLFieldJSXProps
  extends Partial<Omit<URLFieldProps, 'accessory' | 'error' | 'details'>>,
    Pick<URLFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$7>,
    FieldSlotInternalReactProps {}

/**
 * Configure the following properties on the unordered list component.
 */
export interface UnorderedListProps extends UnorderedListProps$1 {}

/**
 * Configure the following properties on the unordered list component.
 * @publicDocs
 */
declare class UnorderedList
  extends PolarisCustomElement
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
      [tagName$6]: UnorderedListJSXProps &
        PreactBaseElementPropsWithChildren<UnorderedList>;
    }
  }
}

declare const tagName$6 = 's-unordered-list';
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
  extends Pick<AdminActionProps$1, 'heading' | 'loading'> {
  /**
   * Whether the action is in a loading state, such as during initial page load or when the action is being opened.
   * When `true`, the action is in an inert state that prevents user interaction.
   *
   * @default false
   */
  loading: AdminActionProps$1['loading'];
}

declare const tagName$5 = 's-admin-action';
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
  extends PolarisCustomElement
  implements AdminActionProps
{
  /**
   * The text to use as the Action modal's title. If not provided, the name of the extension will be used.
   */
  heading: string;
  /**
   * Whether the action is in a loading state, such as during initial page load or when the action is being opened. When `true`, the action might be in an inert state that prevents user interaction.
   */
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
  extends Pick<AdminBlockProps$1, 'heading' | 'collapsedSummary'> {
  /**
   * The text displayed as the block's title in the header. If not provided, the extension name will be used.
   */
  heading: AdminBlockProps$1['heading'];
  /**
   * The summary text displayed when the app block is collapsed. Summaries longer than 30 characters will be truncated.
   */
  collapsedSummary: AdminBlockProps$1['collapsedSummary'];
}

declare const tagName$4 = 's-admin-block';
export interface AdminBlockJSXProps
  extends Partial<AdminBlockProps>,
    Pick<AdminBlockProps$1, 'id'> {}

/**
 * Configure the following properties on the admin block component.
 * @publicDocs
 */
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
    [tagName$4]: AdminBlock;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$4]: AdminBlockJSXProps & {
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
  extends Pick<AdminPrintActionProps$1, 'src'> {
  /**
   * The URL of the document to preview and print. Supports HTML, PDF, and image formats.
   * If not provided, the preview will show an empty state and the print button will be disabled.
   */
  src: AdminPrintActionProps$1['src'];
}

declare const tagName$3 = 's-admin-print-action';
export interface AdminPrintActionJSXProps
  extends Partial<AdminPrintActionProps>,
    Pick<AdminPrintActionProps$1, 'id'> {}

/**
 * Configure the following properties on the admin print action component.
 * @publicDocs
 */
declare class AdminPrintAction
  extends PolarisCustomElement
  implements AdminPrintActionProps
{
  /**
   * The `src` URL of the preview and the document to print. If not provided, the preview will show an empty state and the print button will be disabled. HTML, PDFs, and images are supported.
   */
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
      [tagName$3]: AdminPrintActionJSXProps & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

export interface AppNavProps {}

declare const tagName$2 = 's-app-nav';
export interface AppNavJSXProps
  extends Partial<AppNavProps>,
    Pick<AppNavProps$1, 'id'> {}

declare class AppNav extends PolarisCustomElement implements AppNavProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$2]: AppNav;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$2]: AppNavJSXProps & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

/**
 * Configure the following properties on the form component.
 */
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

/**
 * Configure the following properties on the function settings component.
 */
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
 * Represents the event type for function settings errors. Extracted from the parameters of the `onFunctionSettingsError` callback.
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
  AppNav,
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
  EmptyState,
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
  Number,
  NumberField,
  Option,
  OptionGroup,
  OrderedList,
  Page,
  Paragraph,
  PasswordField,
  Popover,
  PressButton,
  Progress,
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
  AppNavJSXProps,
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
  EmptyStateJSXProps,
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
  NumberJSXProps,
  OptionGroupJSXProps,
  OptionJSXProps,
  OrderedListJSXProps,
  PageJSXProps,
  ParagraphJSXProps,
  PasswordFieldJSXProps,
  PopoverJSXProps,
  PressButtonJSXProps,
  ProgressJSXProps,
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
  click: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired when the button loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired when the button receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<TTagName> | null;
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
  /**
   * A callback fired when the checkbox loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<'input'>;
}

/** The chip component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events). */
export interface ChipEvents {
  remove: CallbackEventListener<typeof tagName> | null = null;
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
   * The label is produced by extracting and concatenating the text nodes from the provided content; any markup or element structure is ignored.
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
  click: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired when the chip is removed.
   */
  remove: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired after the chip is hidden.
   */
  afterhide: CallbackEventListener<TTagName> | null;
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
  viewchange: CallbackEventListener<'s-date-field'> | null;
  /**
   * A callback fired when the date field value is invalid.
   *
   * Learn more about the [invalid event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event).
   */
  invalid: CallbackEventListener<'s-date-field'> | null;
}

/**
 * The date picker component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).
 * @publicDocs
 */
export interface DatePickerEvents {
  /**
   * A callback fired when the calendar view changes, such as when navigating between months.
   */
  viewchange: CallbackEventListener<TagName> | null;
  /**
   * A callback fired when the date picker receives focus.
   *
   * Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
   */
  focus: CallbackEventListener<TagName> | null;
  /**
   * A callback fired when the date picker loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<TagName> | null;
  /**
   * A callback fired when the user inputs data into the date picker.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<TagName> | null;
  /**
   * A callback fired when the date picker value changes.
   *
   * Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
   */
  change: CallbackEventListener<TagName> | null;
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
  change: CallbackEventListener<typeof tagName$O>;
  /**
   * A callback fired when the user inputs data into the drop zone.
   *
   * Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event).
   */
  input: CallbackEventListener<typeof tagName$O>;
  /**
   * A callback fired when a dropped file is rejected due to file type or size restrictions.
   */
  droprejected: CallbackEventListener<typeof tagName$O>;
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
 * The empty state component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface EmptyStateSlots {
  /**
   * The main call to action, rendered below the text content. Accepts a single `Button` with a `variant` of `primary`; anything else is ignored with a development warning.
   */
  'primary-action'?: HTMLElement;
  /**
   * An alternative action, rendered beside the primary one. Accepts a single `Button` with a `variant` of `secondary` or `auto` — despite the plural name, only one is rendered.
   */
  'secondary-actions'?: HTMLElement;
  /**
   * An illustration or symbol shown above the heading. Accepts a single `Image` or `Icon`, either directly or as the only child of a wrapping element.
   */
  graphic?: HTMLElement;
  /**
   * Supporting text below the heading, explaining what's missing or what to do next. Accepts `Text` and `Link` components.
   */
  subheading?: HTMLElement;
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
  click: CallbackEventListener<TTagName> | null;
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
  hide: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired when the modal is shown.
   */
  show: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired after the modal is hidden.
   */
  afterhide: CallbackEventListener<TTagName> | null;
  /**
   * A callback fired after the modal is shown.
   */
  aftershow: CallbackEventListener<TTagName> | null;
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
 * The number component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).
 * @publicDocs
 */
export interface NumberSlots {
  /**
   * The number to display. The component styles the value you pass in — typography, tone, and color — and renders it as given, so format and localize it yourself.
   */
  children?: HTMLElement;
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
  /**
   * A slot for content that comes before the main content, such as an `s-banner`.
   */
  'supplemental-start'?: HTMLElement;
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

/** The press button component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events). */
export interface PressButtonEvents {
  click: CallbackEventListener<typeof tagName> | null = null;
  blur: CallbackEventListener<typeof tagName> | null = null;
  focus: CallbackEventListener<typeof tagName> | null = null;
}

/** The press button component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots). */
export interface PressButtonSlots {
  /**
   * The content of the PressButton.
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

/** The scroll box component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events). */
export interface ScrollBoxEvents {
  scroll: CallbackEventListener<TTagName> | null;
  scrolltoedge: CallbackEventListener<TTagName> | null;
}

/** The scroll box component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots). */
export interface ScrollBoxSlots {
  /**
   * The content of the ScrollBox.
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
  /**
   * The primary action button or link, representing the main or most important action available in this context. Typically displayed with higher visual prominence than secondary actions to establish clear hierarchy.
   */
  'primary-action'?: HTMLElement;
  /**
   * Additional action buttons or links that provide alternative or supporting actions. Visually de-emphasized compared to the primary action.
   *
   * A ButtonGroup holding an action and the icon-only activator for its Menu renders as one segmented group with a chevron activator. The group needs an `accessibilityLabel`, and must hold exactly one Button with text followed by one Button with no text that has an `accessibilityLabel` and a `commandFor` opening a Menu, both with a `variant` of `secondary` or `auto`.
   */
  'secondary-actions'?: HTMLElement;
  /**
   * A decorative visual that reinforces the heading, rendered before it.
   *
   * Accepts a single Icon with a `size` of `base`, or an icon-only Badge (`icon` set, no text content) with a `size` of `large`. The heading identifies the section, so this content is not announced by assistive technologies, and it is not rendered at all when the section has no `heading`.
   */
  graphic?: HTMLElement;
  /**
   * Additional contextual information that qualifies the heading, rendered inline beside the heading text.
   *
   * Only accepts Badge, Icon, Button, Menu, Text, Avatar, Thumbnail, and Tooltip elements. Text must use `tone`, `fontSize`, and `fontWeight` of `auto`; Icon, Avatar, and Thumbnail must use `size="base"`; Badge must use `size="base"` and `color="base"`; Button must use `inlineSize="auto"`.
   *
   * A Tooltip an accessory element's `interestFor` points at can be slotted here beside it.
   */
  accessory?: HTMLElement;
  /**
   * Status or metadata that describes the section as a whole rather than qualifying its heading, rendered at the inline-end of the header before any actions.
   *
   * This is not an action. Only accepts Badge, Avatar, Text, Icon, and Thumbnail elements, under the same prop constraints as `accessory`.
   */
  supplemental?: HTMLElement;
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
  /**
   * A callback fired when the switch loses focus.
   *
   * Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
   */
  blur: CallbackEventListener<'input'>;
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
      [tagName$13]: AvatarJSXProps & ReactBaseElementProps<Avatar>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$13]: AvatarJSXProps & ReactBaseElementProps<Avatar>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$12]: BadgeJSXProps & ReactBaseElementPropsWithChildren<Badge>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$12]: BadgeJSXProps & ReactBaseElementPropsWithChildren<Badge>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$11]: Omit<BannerJSXProps, 'secondaryActions'> &
        ReactBaseElementPropsWithChildren<Banner>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$11]: Omit<BannerJSXProps, 'secondaryActions'> &
        ReactBaseElementPropsWithChildren<Banner>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$10]: BoxJSXProps & ReactBaseElementPropsWithChildren<Box>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$10]: BoxJSXProps & ReactBaseElementPropsWithChildren<Box>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$$]: ButtonJSXProps & ReactBaseElementPropsWithChildren<Button>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$$]: ButtonJSXProps & ReactBaseElementPropsWithChildren<Button>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$_]: Omit<
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
      [tagName$_]: Omit<
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
      [tagName$Z]: Omit<CheckboxJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<Checkbox>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Z]: Omit<CheckboxJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<Checkbox>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Y]: Omit<ChipJSXProps, 'graphic'> &
        ReactBaseElementPropsWithChildren<Chip>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Y]: Omit<ChipJSXProps, 'graphic'> &
        ReactBaseElementPropsWithChildren<Chip>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$X]: Omit<ChoiceJSXProps, 'details' | 'secondaryContent'> &
        ReactBaseElementPropsWithChildren<Choice>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$X]: Omit<ChoiceJSXProps, 'details' | 'secondaryContent'> &
        ReactBaseElementPropsWithChildren<Choice>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$W]: ChoiceListJSXProps &
        ReactBaseElementPropsWithChildren<ChoiceList>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$W]: ChoiceListJSXProps &
        ReactBaseElementPropsWithChildren<ChoiceList>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$V]: ClickableJSXProps &
        ReactBaseElementPropsWithChildren<Clickable>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$V]: ClickableJSXProps &
        ReactBaseElementPropsWithChildren<Clickable>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$U]: Omit<ClickableChipJSXProps, 'graphic'> &
        ReactBaseElementPropsWithChildren<ClickableChip>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$U]: Omit<ClickableChipJSXProps, 'graphic'> &
        ReactBaseElementPropsWithChildren<ClickableChip>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$T]: Omit<ColorFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<ColorField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$T]: Omit<ColorFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<ColorField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$S]: ColorPickerJSXProps & ReactBaseElementProps<ColorPicker>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$S]: ColorPickerJSXProps & ReactBaseElementProps<ColorPicker>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$R]: Omit<DateFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<DateField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$R]: Omit<DateFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<DateField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Q]: DatePickerJSXProps & ReactBaseElementProps<DatePicker>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$Q]: DatePickerJSXProps & ReactBaseElementProps<DatePicker>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$P]: DividerJSXProps & ReactBaseElementProps<Divider>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$P]: DividerJSXProps & ReactBaseElementProps<Divider>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$O]: Omit<
        DropZoneJSXProps,
        ReadOnlyPropKeys<typeof reactWrapperConfig>
      > & {
        value?: '' | null;
      } & ReactBaseElementPropsWithChildren<DropZone>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$O]: Omit<
        DropZoneJSXProps,
        ReadOnlyPropKeys<typeof reactWrapperConfig>
      > & {
        value?: '' | null;
      } & ReactBaseElementPropsWithChildren<DropZone>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$N]: Omit<EmailFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<EmailField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$N]: Omit<EmailFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<EmailField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$M]: Omit<
        EmptyStateJSXProps,
        'primaryAction' | 'secondaryActions' | 'graphic' | 'subheading'
      > &
        ReactBaseElementPropsWithChildren<EmptyState>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$M]: Omit<
        EmptyStateJSXProps,
        'primaryAction' | 'secondaryActions' | 'graphic' | 'subheading'
      > &
        ReactBaseElementPropsWithChildren<EmptyState>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$L]: GridJSXProps & ReactBaseElementPropsWithChildren<Grid>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$L]: GridJSXProps & ReactBaseElementPropsWithChildren<Grid>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$K]: GridItemJSXProps &
        ReactBaseElementPropsWithChildren<GridItem>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$K]: GridItemJSXProps &
        ReactBaseElementPropsWithChildren<GridItem>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$J]: HeadingJSXProps & ReactBaseElementPropsWithChildren<Heading>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$J]: HeadingJSXProps & ReactBaseElementPropsWithChildren<Heading>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$I]: IconJSXProps & ReactBaseElementProps<Icon>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$I]: IconJSXProps & ReactBaseElementProps<Icon>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$H]: ImageJSXProps & ReactBaseElementProps<Image>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$H]: ImageJSXProps & ReactBaseElementProps<Image>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$G]: LinkJSXProps & ReactBaseElementPropsWithChildren<Link>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$G]: LinkJSXProps & ReactBaseElementPropsWithChildren<Link>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$F]: ListItemJSXProps &
        ReactBaseElementPropsWithChildren<ListItem>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$F]: ListItemJSXProps &
        ReactBaseElementPropsWithChildren<ListItem>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$E]: MenuJSXProps & ReactBaseElementPropsWithChildren<Menu>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$E]: MenuJSXProps & ReactBaseElementPropsWithChildren<Menu>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$D]: Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'> &
        ReactBaseElementPropsWithChildren<Modal>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$D]: Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'> &
        ReactBaseElementPropsWithChildren<Modal>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$C]: Omit<MoneyFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<MoneyField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$C]: Omit<MoneyFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<MoneyField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$B]: NumberJSXProps & ReactBaseElementPropsWithChildren<Number>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$B]: NumberJSXProps & ReactBaseElementPropsWithChildren<Number>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$A]: Omit<NumberFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<NumberField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$A]: Omit<NumberFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<NumberField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$z]: OptionJSXProps & ReactBaseElementPropsWithChildren<Option>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$z]: OptionJSXProps & ReactBaseElementPropsWithChildren<Option>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$y]: OptionGroupJSXProps &
        ReactBaseElementPropsWithChildren<OptionGroup>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$y]: OptionGroupJSXProps &
        ReactBaseElementPropsWithChildren<OptionGroup>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$x]: OrderedListJSXProps &
        ReactBaseElementPropsWithChildren<OrderedList>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$x]: OrderedListJSXProps &
        ReactBaseElementPropsWithChildren<OrderedList>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$w]: Omit<
        PageJSXProps,
        | 'aside'
        | 'primaryAction'
        | 'secondaryActions'
        | 'breadcrumbActions'
        | 'supplementalStart'
      > &
        ReactBaseElementPropsWithChildren<Page>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$w]: Omit<
        PageJSXProps,
        | 'aside'
        | 'primaryAction'
        | 'secondaryActions'
        | 'breadcrumbActions'
        | 'supplementalStart'
      > &
        ReactBaseElementPropsWithChildren<Page>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$v]: ParagraphJSXProps &
        ReactBaseElementPropsWithChildren<Paragraph>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$v]: ParagraphJSXProps &
        ReactBaseElementPropsWithChildren<Paragraph>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$u]: Omit<PasswordFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<PasswordField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$u]: Omit<PasswordFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<PasswordField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$t]: PopoverJSXProps & ReactBaseElementPropsWithChildren<Popover>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$t]: PopoverJSXProps & ReactBaseElementPropsWithChildren<Popover>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$s]: PressButtonJSXProps &
        ReactBaseElementPropsWithChildren<PressButton>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$s]: PressButtonJSXProps &
        ReactBaseElementPropsWithChildren<PressButton>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$r]: ProgressJSXProps & ReactBaseElementProps<Progress>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$r]: ProgressJSXProps & ReactBaseElementProps<Progress>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$q]: QueryContainerJSXProps &
        ReactBaseElementPropsWithChildren<QueryContainer>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$q]: QueryContainerJSXProps &
        ReactBaseElementPropsWithChildren<QueryContainer>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$p]: ScrollBoxJSXProps &
        ReactBaseElementPropsWithChildren<ScrollBox>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$p]: ScrollBoxJSXProps &
        ReactBaseElementPropsWithChildren<ScrollBox>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$o]: Omit<SearchFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<SearchField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$o]: Omit<SearchFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<SearchField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$n]: Omit<
        SectionJSXProps,
        | 'primaryAction'
        | 'secondaryActions'
        | 'graphic'
        | 'accessory'
        | 'supplemental'
      > &
        ReactBaseElementPropsWithChildren<Section>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$n]: Omit<
        SectionJSXProps,
        | 'primaryAction'
        | 'secondaryActions'
        | 'graphic'
        | 'accessory'
        | 'supplemental'
      > &
        ReactBaseElementPropsWithChildren<Section>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$m]: Omit<SelectJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementPropsWithChildren<Select>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$m]: Omit<SelectJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementPropsWithChildren<Select>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$l]: SpinnerJSXProps & ReactBaseElementProps<Spinner>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$l]: SpinnerJSXProps & ReactBaseElementProps<Spinner>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$k]: StackJSXProps & ReactBaseElementPropsWithChildren<Stack>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$k]: StackJSXProps & ReactBaseElementPropsWithChildren<Stack>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$j]: SwitchJSXProps & ReactBaseElementProps<Switch>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$j]: SwitchJSXProps & ReactBaseElementProps<Switch>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$i]: Omit<TableJSXProps, 'filters'> &
        ReactBaseElementPropsWithChildren<Table>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$i]: Omit<TableJSXProps, 'filters'> &
        ReactBaseElementPropsWithChildren<Table>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$h]: TableBodyJSXProps &
        ReactBaseElementPropsWithChildren<TableBody>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$h]: TableBodyJSXProps &
        ReactBaseElementPropsWithChildren<TableBody>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$g]: TableCellJSXProps &
        ReactBaseElementPropsWithChildren<TableCell>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$g]: TableCellJSXProps &
        ReactBaseElementPropsWithChildren<TableCell>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$f]: TableHeaderJSXProps &
        ReactBaseElementPropsWithChildren<TableHeader>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$f]: TableHeaderJSXProps &
        ReactBaseElementPropsWithChildren<TableHeader>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$e]: TableHeaderRowJSXProps &
        ReactBaseElementPropsWithChildren<TableHeaderRow>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$e]: TableHeaderRowJSXProps &
        ReactBaseElementPropsWithChildren<TableHeaderRow>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$d]: TableRowJSXProps &
        ReactBaseElementPropsWithChildren<TableRow>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$d]: TableRowJSXProps &
        ReactBaseElementPropsWithChildren<TableRow>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$c]: TextJSXProps & ReactBaseElementPropsWithChildren<Text>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$c]: TextJSXProps & ReactBaseElementPropsWithChildren<Text>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$b]: Omit<TextAreaJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<TextArea>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$b]: Omit<TextAreaJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<TextArea>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$a]: Omit<TextFieldJSXProps, 'accessory' | 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementPropsWithChildren<TextField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$a]: Omit<TextFieldJSXProps, 'accessory' | 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementPropsWithChildren<TextField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$9]: ThumbnailJSXProps & ReactBaseElementProps<Thumbnail>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$9]: ThumbnailJSXProps & ReactBaseElementProps<Thumbnail>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$8]: TooltipJSXProps & ReactBaseElementPropsWithChildren<Tooltip>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$8]: TooltipJSXProps & ReactBaseElementPropsWithChildren<Tooltip>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$7]: Omit<URLFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<URLField>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$7]: Omit<URLFieldJSXProps, 'error' | 'details'> &
        FieldSlotPreactProps &
        ReactBaseElementProps<URLField>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$6]: UnorderedListJSXProps &
        ReactBaseElementPropsWithChildren<UnorderedList>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$6]: UnorderedListJSXProps &
        ReactBaseElementPropsWithChildren<UnorderedList>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$5]: Omit<
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
      [tagName$5]: Omit<
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
      [tagName$4]: AdminBlockJSXProps & {
        children?: React.ReactNode;
      };
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$4]: AdminBlockJSXProps & {
        children?: React.ReactNode;
      };
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$3]: AdminPrintActionJSXProps & {
        children?: React.ReactNode;
      };
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$3]: AdminPrintActionJSXProps & {
        children?: React.ReactNode;
      };
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$2]: AppNavJSXProps & {
        children?: React.ReactNode;
      };
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$2]: AppNavJSXProps & {
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
