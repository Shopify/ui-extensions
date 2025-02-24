/** VERSION: 0.34.0 **/
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import * as preact from 'preact';

type ComponentChildren = any;
type SizeKeyword =
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
type ColorKeyword = 'subdued' | 'base' | 'strong';
interface GlobalProps {
  /**
   * A unique identifier for the element.
   */
  id?: string;
}
type BackgroundColorKeyword = 'transparent' | ColorKeyword;
interface BackgroundProps {
  /**
   * Adjust the background of the element.
   *
   * @default 'transparent'
   */
  background?: BackgroundColorKeyword;
}
type ToneKeyword =
  | 'auto'
  | 'neutral'
  | 'info'
  | 'success'
  | 'caution'
  | 'warning'
  | 'critical'
  | 'custom';
type IconType =
  | '3d-environment'
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
  | 'arrow-down-circle'
  | 'arrow-down-right'
  | 'arrow-down'
  | 'arrow-left-circle'
  | 'arrow-left'
  | 'arrow-right-circle'
  | 'arrow-right'
  | 'arrow-up-circle'
  | 'arrow-up-right'
  | 'arrow-up'
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
  | 'book-open'
  | 'book'
  | 'bug'
  | 'bullet'
  | 'button-press'
  | 'button'
  | 'calculator'
  | 'calendar-check'
  | 'calendar-compare'
  | 'calendar-time'
  | 'calendar'
  | 'camera-flip'
  | 'camera'
  | 'caret-down'
  | 'caret-up'
  | 'cart-abandoned'
  | 'cart-discount'
  | 'cart-down'
  | 'cart-sale'
  | 'cart-up'
  | 'cart'
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
  | 'chart-histogram-first-last'
  | 'chart-histogram-first'
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
  | 'chat-new'
  | 'chat-referral'
  | 'chat'
  | 'check-circle'
  | 'check-circle-filled'
  | 'check'
  | 'checkbox'
  | 'chevron-down-circle'
  | 'chevron-down'
  | 'chevron-left-circle'
  | 'chevron-left'
  | 'chevron-right-circle'
  | 'chevron-right'
  | 'chevron-up-circle'
  | 'chevron-up'
  | 'circle'
  | 'circle-dashed'
  | 'clipboard-check'
  | 'clipboard-checklist'
  | 'clipboard'
  | 'clock-revert'
  | 'clock'
  | 'code-add'
  | 'code'
  | 'collection-featured'
  | 'collection-list'
  | 'collection-reference'
  | 'collection'
  | 'color-none'
  | 'color'
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
  | 'credit-card-cancel'
  | 'credit-card-percent'
  | 'credit-card-reader-chip'
  | 'credit-card-reader-tap'
  | 'credit-card-reader'
  | 'credit-card-secure'
  | 'credit-card-tap-chip'
  | 'credit-card'
  | 'crop'
  | 'currency-convert'
  | 'cursor-banner'
  | 'cursor-option'
  | 'cursor'
  | 'data-presentation'
  | 'data-table'
  | 'database-add'
  | 'database-connect'
  | 'database'
  | 'delete'
  | 'delivered'
  | 'delivery'
  | 'desktop'
  | 'disabled'
  | 'discount-code'
  | 'discount'
  | 'dns-settings'
  | 'dock-floating'
  | 'dock-side'
  | 'domain-landing-page'
  | 'domain-new'
  | 'domain-redirect'
  | 'domain'
  | 'download'
  | 'drag-drop'
  | 'drag-handle'
  | 'duplicate'
  | 'edit'
  | 'email-follow-up'
  | 'email-newsletter'
  | 'email'
  | 'empty'
  | 'enabled'
  | 'enter'
  | 'envelope-soft-pack'
  | 'envelope'
  | 'exchange'
  | 'exit'
  | 'export'
  | 'external'
  | 'eye-check-mark'
  | 'eye-dropper'
  | 'eye-first'
  | 'eyeglasses'
  | 'fav'
  | 'favicon'
  | 'file'
  | 'filter'
  | 'flag'
  | 'flip-horizontal'
  | 'flip-vertical'
  | 'flower'
  | 'folder-add'
  | 'folder-down'
  | 'folder-remove'
  | 'folder-up'
  | 'folder'
  | 'food'
  | 'foreground'
  | 'forklift'
  | 'forms'
  | 'games'
  | 'gauge'
  | 'geolocation'
  | 'gift-card'
  | 'gift'
  | 'git-branch'
  | 'git-commit'
  | 'git-repository'
  | 'globe-asia'
  | 'globe-europe'
  | 'globe-lines'
  | 'globe'
  | 'grid'
  | 'hashtag-decimal'
  | 'hashtag'
  | 'heart'
  | 'hide'
  | 'hide-filled'
  | 'home'
  | 'icons'
  | 'identity-card'
  | 'image-add'
  | 'image-alt'
  | 'image-explore'
  | 'image-magic'
  | 'image-none'
  | 'image-with-text-overlay'
  | 'image'
  | 'images'
  | 'import'
  | 'in-progress'
  | 'incentive'
  | 'incoming'
  | 'incomplete'
  | 'info'
  | 'inventory-updated'
  | 'inventory'
  | 'iq'
  | 'key'
  | 'keyboard-filled'
  | 'keyboard-hide'
  | 'keyboard'
  | 'label-printer'
  | 'language-translate'
  | 'language'
  | 'layout-block'
  | 'layout-buy-button-horizontal'
  | 'layout-buy-button-vertical'
  | 'layout-buy-button'
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
  | 'list-bulleted'
  | 'list-numbered'
  | 'live'
  | 'location-none'
  | 'location'
  | 'lock'
  | 'map'
  | 'markets-euro'
  | 'markets-rupee'
  | 'markets-yen'
  | 'markets'
  | 'maximize'
  | 'measurement-size'
  | 'measurement-volume'
  | 'measurement-weight'
  | 'media-receiver'
  | 'megaphone'
  | 'mention'
  | 'menu-horizontal'
  | 'menu-vertical'
  | 'menu'
  | 'merge'
  | 'metafields'
  | 'metaobject-list'
  | 'metaobject-reference'
  | 'metaobject'
  | 'microphone'
  | 'minimize'
  | 'minus-circle'
  | 'minus'
  | 'mobile'
  | 'money-none'
  | 'money'
  | 'moon'
  | 'nature'
  | 'note-add'
  | 'note'
  | 'notification'
  | 'order-draft'
  | 'order-first'
  | 'order-fulfilled'
  | 'order-repeat'
  | 'order-unfulfilled'
  | 'order'
  | 'orders-status'
  | 'organization'
  | 'outdent'
  | 'outgoing'
  | 'package-fulfilled'
  | 'package-on-hold'
  | 'package-returned'
  | 'package'
  | 'page-add'
  | 'page-attachment'
  | 'page-clock'
  | 'page-down'
  | 'page-heart'
  | 'page-reference'
  | 'page-remove'
  | 'page-report'
  | 'page-up'
  | 'page'
  | 'pagination-end'
  | 'pagination-start'
  | 'paint-brush-flat'
  | 'paint-brush-round'
  | 'paper-check'
  | 'partially-complete'
  | 'passkey'
  | 'pause-circle'
  | 'payment-capture'
  | 'payment'
  | 'payout-dollar'
  | 'payout-euro'
  | 'payout-pound'
  | 'payout-rupee'
  | 'payout-yen'
  | 'payout'
  | 'person-add'
  | 'person-exit'
  | 'person-lock'
  | 'person-remove'
  | 'person-segment'
  | 'person'
  | 'personalized-text'
  | 'phone-in'
  | 'phone-out'
  | 'phone'
  | 'pin'
  | 'plan'
  | 'play-circle'
  | 'play'
  | 'plus-circle'
  | 'plus'
  | 'point-of-sale'
  | 'price-list'
  | 'print'
  | 'product-add'
  | 'product-cost'
  | 'product-list'
  | 'product-reference'
  | 'product-remove'
  | 'product-return'
  | 'product-unavailable'
  | 'product'
  | 'profile'
  | 'profile-filled'
  | 'question-circle'
  | 'question-circle-filled'
  | 'receipt-dollar'
  | 'receipt-euro'
  | 'receipt-folded'
  | 'receipt-paid'
  | 'receipt-pound'
  | 'receipt-refund'
  | 'receipt-rupee'
  | 'receipt-yen'
  | 'receipt'
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
  | 'search-list'
  | 'search-recent'
  | 'search-resource'
  | 'search'
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
  | 'sort-ascending'
  | 'sort-descending'
  | 'sort'
  | 'sound'
  | 'sports'
  | 'star-filled'
  | 'star'
  | 'status-active'
  | 'status'
  | 'stop-circle'
  | 'store-import'
  | 'store-managed'
  | 'store-online'
  | 'store'
  | 'sun'
  | 'table'
  | 'table-masonry'
  | 'tablet'
  | 'target'
  | 'tax'
  | 'team'
  | 'text-align-center'
  | 'text-align-left'
  | 'text-align-right'
  | 'text-block'
  | 'text-bold'
  | 'text-color'
  | 'text-font-list'
  | 'text-font'
  | 'text-grammar'
  | 'text-in-columns'
  | 'text-in-rows'
  | 'text-indent-remove'
  | 'text-indent'
  | 'text-italic'
  | 'text-quote'
  | 'text-title'
  | 'text-underline'
  | 'text-with-image'
  | 'text'
  | 'theme-edit'
  | 'theme-store'
  | 'theme-template'
  | 'theme'
  | 'thumbs-down'
  | 'thumbs-up'
  | 'tip-jar'
  | 'toggle-off'
  | 'toggle-on'
  | 'transaction-fee-dollar'
  | 'transaction-fee-euro'
  | 'transaction-fee-pound'
  | 'transaction-fee-rupee'
  | 'transaction-fee-yen'
  | 'transaction'
  | 'transfer-in'
  | 'transfer-internal'
  | 'transfer-out'
  | 'transfer'
  | 'truck'
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
  | 'wrench'
  | 'x-circle'
  | 'x';
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
interface ActionSlots {
  /**
   * The primary action to perform, provided as a button or link type element.
   */
  primaryAction?: ComponentChildren;
  /**
   * The secondary actions to perform, provided as button or link type elements.
   */
  secondaryActions?: ComponentChildren;
}
interface BannerProps$1 extends GlobalProps, ActionSlots {
  /**
   * The title of the banner.
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
   */
  collapsible?: boolean;
  /**
	 * Determines whether the close button of the banner is visible.
  
	 * This component is controlled, so you must manage the visibility of the banner in state by using the `onDismiss` callback,
	 * or by listening to the `dismiss` event.
	 */
  dismissible?: boolean;
  /**
   * Callback when banner is dismissed.
   * This component is controlled, so you must manage the visibility of the banner in state by using the `onDismiss` callback.
   */
  onDismiss?: () => void;
}
type ExtractStrict<T, U extends T> = Extract<T, U>;
export type MaybeAllValuesShorthandProperty<T extends string> =
  | T
  | `${T} ${T}`
  | `${T} ${T} ${T}`
  | `${T} ${T} ${T} ${T}`;
type MaybeTwoValuesShorthandProperty<T extends string> = T | `${T} ${T}`;
type AnyString = string & {};
interface DisplayProps {
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
interface AccessibilityRoleProps {
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
type AccessibilityRole =
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
interface AccessibilityVisibilityProps {
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
interface LabelAccessibilityVisibilityProps {
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
type PaddingKeyword = SizeKeyword | 'none';
interface PaddingProps {
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
type SizeUnits = `${number}px` | `${number}%` | `0`;
type SizeUnitsOrAuto = SizeUnits | 'auto';
type SizeUnitsOrNone = SizeUnits | 'none';
interface SizingProps {
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
type BorderStyleKeyword = 'none' | 'solid' | 'dashed' | 'dotted' | 'auto';
type BorderSizeKeyword = SizeKeyword | 'none';
type BorderRadiusKeyword = SizeKeyword | 'none';
type BorderShorthand =
  | BorderSizeKeyword
  | `${BorderSizeKeyword} ${ColorKeyword}`
  | `${BorderSizeKeyword} ${ColorKeyword} ${BorderStyleKeyword}`;
interface BorderProps {
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
interface OverflowProps {
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
interface BaseBoxProps
  extends GlobalProps,
    AccessibilityVisibilityProps,
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
interface BaseBoxPropsWithRole extends BaseBoxProps, AccessibilityRoleProps {}
interface BoxProps$1 extends BaseBoxPropsWithRole {}
interface FocusEventProps {
  /**
   * Callback when the element loses focus.
   */
  onBlur?: () => void;
  /**
   * Callback when the element receives focus.
   */
  onFocus?: () => void;
}
interface ButtonBehaviorProps extends InteractionProps, FocusEventProps {
  /**
   * The behavior of the button.
   *
   * 'submit' - Used to indicate the component acts as a submit button, meaning it submits the closest form.
   * 'button' - Used to indicate the component acts as a button, meaning it has no default action.
   * 'reset' - Used to indicate the component acts as a reset button, meaning it resets the closest form (returning fields to their default values).
   *
   * This property is ignored if the component supports `href` or `activateTarget`/`activateAction` and one of them is set.
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
interface LinkBehaviorProps extends InteractionProps, FocusEventProps {
  /**
   * The URL to link to.
   *
   * - If set, it will navigate to the location specified by `href` after executing the `onClick` callback.
   * - If an `activateTarget` is set, the `activateAction` will be executed instead of the navigation.
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
   * See `activateAction` for how to control the behavior of the target.
   */
  activateTarget?: string;
  /**
   * Sets the action the `activateTarget` should take when this clickable is activated.
   *
   * See the documentation of particular components for the actions they support.
   *
   * @default 'auto' - a default action for the target component.
   */
  activateAction?: 'auto' | 'show' | 'hide' | 'toggle' | 'copy';
}
interface BaseClickableProps extends ButtonBehaviorProps, LinkBehaviorProps {}
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
interface BaseInputProps {
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
interface InputProps extends BaseInputProps {
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
interface FieldErrorProps {
  /**
   * Indicate an error to the user. The field will be given a specific stylistic treatment
   * to communicate problems that have to be resolved immediately.
   */
  error?: string;
}
interface BasicFieldProps
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
interface FieldDetailsProps {
  /**
   * Additional text to provide context or guidance for the field.
   * This text is displayed along with the field and its label
   * to offer more information or instructions to the user.
   *
   * This will also be exposed to screen reader users.
   */
  details?: string;
}
interface FieldProps
  extends BasicFieldProps,
    InputProps,
    FocusEventProps,
    FieldDetailsProps {
  /**
   * A short hint that describes the expected value of the field.
   */
  placeholder?: string;
}
interface BaseTextFieldProps extends FieldProps {
  /**
   * The field cannot be edited by the user. It is focusable will be announced by screen readers.
   */
  readOnly?: boolean;
}
interface FieldDecorationProps {
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
interface NumberConstraintsProps {
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
interface MinMaxLengthProps {
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
interface BaseSelectableProps {
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
interface BaseOptionProps extends BaseSelectableProps {
  /**
   * Whether the control is active.
   */
  selected?: boolean;
  /**
   * Whether the control is active by default.
   */
  defaultSelected?: boolean;
}
interface BaseCheckableProps extends BaseSelectableProps {
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
interface CheckboxProps$1 extends GlobalProps, BaseCheckableProps {
  /**
   * Indicate an error to the user. The field will be given a specific stylistic treatment
   * to communicate problems that have to be resolved immediately.
   */
  error?: string;
  /**
   * Additional text to provide context or guidance for the input.
   * This text is displayed along with the input and its label
   * to offer more information or instructions to the user.
   */
  details?: string;
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
interface AutocompleteProps<AutocompleteField extends AnyAutocompleteField> {
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
   * @default 'on'
   */
  autocomplete?:
    | AutocompleteField
    | `${AutocompleteSection} ${AutocompleteField}`
    | `${AutocompleteGroup} ${AutocompleteField}`
    | `${AutocompleteSection} ${AutocompleteGroup} ${AutocompleteField}`
    | 'on'
    | 'off';
}
type AutocompleteSection = `section-${string}`;
type AutocompleteGroup = 'shipping' | 'billing';
type AutocompleteAddressGroup = 'fax' | 'home' | 'mobile' | 'pager';
type AutocompleteFieldTelephoneAlias = 'tel' | 'telephone';
type AutocompleteFieldBirthdayAlias = 'bday' | 'birthday';
type AutocompleteFieldCreditCardAlias = 'cc' | 'credit-card';
type AutocompleteFieldInstantMessageAlias = 'impp' | 'instant-message';
type AutocompleteFieldSecurityCodeAlias = 'csc' | 'security-code';
type AnyAutocompleteField =
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
  | `${AutocompleteFieldBirthdayAlias}-day`
  | `${AutocompleteFieldBirthdayAlias}-month`
  | `${AutocompleteFieldBirthdayAlias}-year`
  | `${AutocompleteFieldBirthdayAlias}`
  | `${AutocompleteFieldCreditCardAlias}-additional-name`
  | `${AutocompleteFieldCreditCardAlias}-expiry-month`
  | `${AutocompleteFieldCreditCardAlias}-expiry-year`
  | `${AutocompleteFieldCreditCardAlias}-expiry`
  | `${AutocompleteFieldCreditCardAlias}-family-name`
  | `${AutocompleteFieldCreditCardAlias}-given-name`
  | `${AutocompleteFieldCreditCardAlias}-name`
  | `${AutocompleteFieldCreditCardAlias}-number`
  | `${AutocompleteFieldCreditCardAlias}-${AutocompleteFieldSecurityCodeAlias}`
  | `${AutocompleteFieldCreditCardAlias}-type`
  | `${AutocompleteAddressGroup} email`
  | `${AutocompleteFieldInstantMessageAlias}`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldInstantMessageAlias}`
  | `${AutocompleteFieldTelephoneAlias}`
  | `${AutocompleteFieldTelephoneAlias}-area-code`
  | `${AutocompleteFieldTelephoneAlias}-country-code`
  | `${AutocompleteFieldTelephoneAlias}-extension`
  | `${AutocompleteFieldTelephoneAlias}-local-prefix`
  | `${AutocompleteFieldTelephoneAlias}-local-suffix`
  | `${AutocompleteFieldTelephoneAlias}-local`
  | `${AutocompleteFieldTelephoneAlias}-national`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-area-code`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-country-code`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-extension`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-local-prefix`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-local-suffix`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-local`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-national`;
type TextAutocompleteField = ExtractStrict<
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
  | `${AutocompleteFieldCreditCardAlias}-name`
  | `${AutocompleteFieldCreditCardAlias}-given-name`
  | `${AutocompleteFieldCreditCardAlias}-additional-name`
  | `${AutocompleteFieldCreditCardAlias}-family-name`
  | `${AutocompleteFieldCreditCardAlias}-type`
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
type SpacingKeyword = SizeKeyword | 'none';
interface GapProps {
  /**
   * Adjust spacing between elements.
   *
   * A single value applies to both axes.
   * A pair of values (eg `large-100 large-500`) can be used to set the inline and block axes respectively.
   *
   * @default 'auto'
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
type BaselinePosition = 'baseline' | 'first baseline' | 'last baseline';
type ContentDistribution =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
type ContentPosition = 'center' | 'start' | 'end';
type OverflowPosition = `unsafe ${ContentPosition}` | `safe ${ContentPosition}`;
type AlignItemsKeyword =
  | 'normal'
  | 'stretch'
  | BaselinePosition
  | OverflowPosition
  | ContentPosition;
type JustifyContentKeyword =
  | 'normal'
  | ContentDistribution
  | OverflowPosition
  | ContentPosition;
type AlignContentKeyword =
  | 'normal'
  | BaselinePosition
  | ContentDistribution
  | OverflowPosition
  | ContentPosition;
interface BaseTypographyProps {
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
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
   *
   * @default ''
   */
  dir?: 'ltr' | 'rtl' | 'auto' | '';
}
interface BlockTypographyProps {
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
   * @default 'heading'
   *
   * - `heading` defines the element as a heading to a page or section.
   * - `presentation` means the heading level will be stripped,
   * and will prevent the element’s implicit ARIA semantics from
   * being exposed to the accessibility tree.
   * - `none` is a synonym for the `presentation` role.
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
interface BaseImageProps {
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
type optionalSpace = '' | ' ';
interface ImageProps$1 extends GlobalProps, BaseImageProps, BorderProps {
  /**
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help users
   * navigate the page.
   *
   * @default 'img'. Note that the `img` role doesn't need to be applied if
   * the host applies it for you; for example, an HTML host rendering
   * an `<img>` element should NOT apply the `img` role.
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
   * This will be respected even if the image hasn’t loaded yet.
   *
   * Getters for this value should return `auto` or the ratio in `number / number` form. Input fractions should not be ‘simplified’.
   * For example, if the value is set as `50 /    100`, the getter returns `50 / 100`.
   * If the value is set as `0.5`, the getter returns `0.5 / 1`.
   *
   * @default 'auto'
   */
  aspectRatio?:
    | `${number}${optionalSpace}/${optionalSpace}${number}`
    | `${number}`
    | 'auto';
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
   * @default `eager`
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
type NumberAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  | 'one-time-code'
  | `${AutocompleteFieldCreditCardAlias}-number`
  | `${AutocompleteFieldCreditCardAlias}-${AutocompleteFieldSecurityCodeAlias}`
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
interface ParagraphProps$1
  extends GlobalProps,
    BaseTypographyProps,
    BlockTypographyProps,
    AccessibilityVisibilityProps {
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
type ParagraphType =
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
   * Surfaces should apply a smaller font size than the default size for Paragraph.
   *
   * In an HTML host, the text will be rendered in a `<small>` element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
   */
  | 'small';
interface SectionProps$1 extends GlobalProps {
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
   * `auto`: applies padding that is appropriate for the element. Note that it may result in no padding if Shopify
   * believes this is the right design decision in a particular context.
   *
   * `none`: removes all padding from the element. This can be useful when elements inside the Section need to span
   * to the edge of the Section. For example, a full-width image. In this case, rely on `Box` with a padding of 'base'
   * to bring back the desired padding for the rest of the content.
   *
   * @default "auto"
   */
  padding?: 'auto' | 'none';
}
interface SelectProps$1
  extends GlobalProps,
    AutocompleteProps<AnyAutocompleteField>,
    Pick<FieldDecorationProps, 'icon'>,
    Exclude<FieldProps, 'defaultValue'>,
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
   * @default 'inline'
   */
  direction?: 'inline' | 'block';
  /**
   * Aligns the Stack along the main axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   * @default 'normal'
   */
  justifyContent: JustifyContentKeyword;
  /**
   * Aligns the Stack's children along the cross axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   * @default 'normal'
   */
  alignItems: AlignItemsKeyword;
  /**
   * Aligns the Stack along the cross axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   * @default 'normal'
   */
  alignContent: AlignContentKeyword;
}
interface PaginationProps {
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
interface TableProps$1 extends GlobalProps, PaginationProps {
  /**
   * The content of the Table.
   */
  children?: ComponentChildren;
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
type ListSlotType = 'primary' | 'secondary' | 'kicker' | 'inline' | 'labeled';
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
type TextType =
  /**
   * Indicate the text is contact information. Typically used for addresses.
   *
   * This must have `inline` layout (despite the default being `block` in HTML hosts).
   *
   * Surfaces may apply styling to this type.
   *
   * In an HTML host, the text will be rendered in an `<address>` element.
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
type IconType$1 =
  | '3d-environment'
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
  | 'eye-first'
  | 'eyeglasses'
  | 'favicon'
  | 'file'
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
  | 'grid'
  | 'hashtag'
  | 'hashtag-decimal'
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
  | 'measurement-volume'
  | 'measurement-weight'
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
  | 'page-reference'
  | 'page-remove'
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
  | 'wrench'
  | 'x'
  | 'x-circle';
interface VNode<P = {}> {
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
type Key = string | number | any;
interface RefObject<T> {
  current: T | null;
}
type RefCallback<T> = (instance: T | null) => void;
type Ref<T> = RefObject<T> | RefCallback<T> | null;
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
interface Attributes {
  key?: Key | undefined;
  jsx?: boolean | undefined;
}
interface ErrorInfo {
  componentStack?: string;
}
type RenderableProps<P, RefType = any> = P &
  Readonly<
    Attributes & {
      children?: ComponentChildren$1;
      ref?: Ref<RefType>;
    }
  >;
type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;
interface FunctionComponent<P = {}> {
  (props: RenderableProps<P>, context?: any): VNode<any> | null;
  displayName?: string;
  defaultProps?: Partial<P> | undefined;
}
interface ComponentClass<P = {}, S = {}> {
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
interface Component<P = {}, S = {}> {
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
  ): ComponentChild;
}
interface Consumer<T>
  extends FunctionComponent<{
    children: (value: T) => ComponentChildren$1;
  }> {}
interface Provider<T>
  extends FunctionComponent<{
    value: T;
    children?: ComponentChildren$1;
  }> {}
interface Context<T> {
  Consumer: Consumer<T>;
  Provider: Provider<T>;
  displayName?: string;
}

export interface IconProps {
  type: '' | IconType | 'empty';
  tone: Extract<
    IconProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
  size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

export interface BadgeProps {
  color: Extract<BadgeProps$1['color'], 'base' | 'strong'>;
  icon: IconProps['type'] | '';
  size: Extract<BadgeProps$1['size'], 'base' | 'large' | 'large-100'>;
  tone: Extract<
    BadgeProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
}

export type Style = string | CSSStyleSheet;
export type Styles = Style[] | Style;
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
declare const BaseClass: typeof globalThis.HTMLElement;
declare abstract class PreactCustomElement extends BaseClass {
  /** @private */
  static get observedAttributes(): string[];
  static globalStylesApplied: boolean;
  constructor({
    styles,
    ShadowRoot: renderFunction,
    delegatesFocus,
    ...options
  }: RenderImpl);

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
   * Internal function to add styles for legacy browsers.
   *
   * @private
   */
  _addLegacyStyleComponent(style: string): void;
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
    [tagName$u]: Badge;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$u]: HTMLAttributes<HTMLElement> & BadgeJSXProps;
    }
  }
}

declare const tagName$u = 's-badge';
export interface BadgeJSXProps
  extends Partial<BadgeProps>,
    Pick<BadgeProps$1, 'id'> {}

export type RequiredBannerProps = Required<BannerProps$1>;
export interface BannerProps
  extends Pick<RequiredBannerProps, 'heading' | 'dismissible'> {
  tone: Extract<
    RequiredBannerProps['tone'],
    'critical' | 'warning' | 'success' | 'info'
  >;
}

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  target: HTMLElementTagNameMap[T];
};
export interface FieldReactProps<T extends keyof HTMLElementTagNameMap> {
  onInput?: ((event: CallbackEvent<T>) => void) | null;
  onChange?: ((event: CallbackEvent<T>) => void) | null;
  onFocus?: ((event: CallbackEvent<T>) => void) | null;
  onBlur?: ((event: CallbackEvent<T>) => void) | null;
}

declare class Banner extends PreactCustomElement implements BannerProps {
  accessor heading: BannerProps['heading'];
  accessor tone: BannerProps['tone'];
  accessor dismissible: BannerProps['dismissible'];
  accessor ondismiss: EventListener | null;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$t]: Banner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$t]: HTMLAttributes<HTMLElement> & BannerJSXProps;
    }
  }
}

declare const tagName$t = 's-banner';
export interface BannerJSXProps
  extends Partial<BannerProps>,
    Pick<BannerProps$1, 'id'> {
  secondaryActions?: ComponentChild;
  onDismiss?: ((event: CallbackEvent<typeof tagName$t>) => void) | null;
}

export type AlignedBox = Required<BoxProps$1>;
export interface BoxProps {
  accessibilityRole: AlignedBox['accessibilityRole'];
  background: Extract<
    AlignedBox['background'],
    'transparent' | 'base' | 'subdued' | 'strong'
  >;
  blockSize: AlignedBox['blockSize'];
  minBlockSize: AlignedBox['minBlockSize'];
  maxBlockSize: AlignedBox['maxBlockSize'];
  inlineSize: AlignedBox['inlineSize'];
  minInlineSize: AlignedBox['minInlineSize'];
  maxInlineSize: AlignedBox['maxInlineSize'];
  padding: AlignedBox['padding'];
  paddingBlock: AlignedBox['paddingBlock'];
  paddingBlockStart: AlignedBox['paddingBlockStart'];
  paddingBlockEnd: AlignedBox['paddingBlockEnd'];
  paddingInline: AlignedBox['paddingInline'];
  paddingInlineStart: AlignedBox['paddingInlineStart'];
  paddingInlineEnd: AlignedBox['paddingInlineEnd'];
  border: AlignedBox['border'] | 'none';
  borderWidth:
    | MaybeAllValuesShorthandProperty<
        Extract<
          AlignedBox['borderWidth'],
          'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'none'
        >
      >
    | Extract<AlignedBox['borderWidth'], ''>;
  borderStyle:
    | MaybeAllValuesShorthandProperty<
        Extract<AlignedBox['borderStyle'], 'none' | 'solid' | 'dashed'>
      >
    | Extract<AlignedBox['borderStyle'], ''>;
  borderColor: Extract<
    AlignedBox['borderColor'],
    'subdued' | 'base' | 'strong' | ''
  >;
  borderRadius: MaybeAllValuesShorthandProperty<
    Extract<
      AlignedBox['borderRadius'],
      | 'none'
      | 'small-200'
      | 'small-100'
      | 'small'
      | 'base'
      | 'large'
      | 'large-100'
      | 'large-200'
    >
  >;
  accessibilityLabel: AlignedBox['accessibilityLabel'];
  accessibilityVisibility: AlignedBox['accessibilityVisibility'];
  display: AlignedBox['display'];
  overflow: AlignedBox['overflow'];
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
    [tagName$s]: Box;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$s]: HTMLAttributes<HTMLElement> & BoxJSXProps;
    }
  }
}

declare const tagName$s = 's-box';
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
    | 'activateAction'
    | 'activateTarget'
    | 'lang'
    | 'loading'
    | 'type'
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
  extends Required<Pick<InteractionProps, 'activateTarget'>> {
  activateAction: Extract<
    InteractionProps['activateAction'],
    'show' | 'hide' | 'toggle' | 'auto'
  >;
}

declare const Button_base: (abstract new (...args: any) => {
  activateTarget: PreactOverlayControlProps['activateTarget'];
  activateAction: PreactOverlayControlProps['activateAction'];
  '__#44918@#queueRender': (() => void) | undefined;
  '__#44918@#legacyStyleComponents': Map<string, preact.VNode<{}>>;
  attributeChangedCallback(name: string): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  adoptedCallback(): void;
  queueRender(): void;
  '__#44918@#checkElementPrototype'(): void;
  _addLegacyStyleComponent(style: string): void;
  click({sourceEvent}?: ClickOptions): void;
  accessKey: string;
  readonly accessKeyLabel: string;
  autocapitalize: string;
  dir: string;
  draggable: boolean;
  hidden: boolean;
  inert: boolean;
  innerText: string;
  lang: string;
  readonly offsetHeight: number;
  readonly offsetLeft: number;
  readonly offsetParent: Element | null;
  readonly offsetTop: number;
  readonly offsetWidth: number;
  outerText: string;
  popover: string | null;
  spellcheck: boolean;
  title: string;
  translate: boolean;
  attachInternals(): ElementInternals;
  hidePopover(): void;
  showPopover(): void;
  togglePopover(force?: boolean): boolean;
  addEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
  readonly attributes: NamedNodeMap;
  readonly classList: DOMTokenList;
  className: string;
  readonly clientHeight: number;
  readonly clientLeft: number;
  readonly clientTop: number;
  readonly clientWidth: number;
  id: string;
  innerHTML: string;
  readonly localName: string;
  readonly namespaceURI: string | null;
  onfullscreenchange: ((this: Element, ev: Event) => any) | null;
  onfullscreenerror: ((this: Element, ev: Event) => any) | null;
  outerHTML: string;
  readonly ownerDocument: Document;
  readonly part: DOMTokenList;
  readonly prefix: string | null;
  readonly scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  readonly scrollWidth: number;
  readonly shadowRoot: ShadowRoot | null;
  slot: string;
  readonly tagName: string;
  attachShadow(init: ShadowRootInit): ShadowRoot;
  checkVisibility(options?: CheckVisibilityOptions): boolean;
  closest<K extends keyof HTMLElementTagNameMap>(
    selector: K,
  ): HTMLElementTagNameMap[K] | null;
  closest<K extends keyof SVGElementTagNameMap>(
    selector: K,
  ): SVGElementTagNameMap[K] | null;
  closest<K extends keyof MathMLElementTagNameMap>(
    selector: K,
  ): MathMLElementTagNameMap[K] | null;
  closest<E extends Element = Element>(selectors: string): E | null;
  computedStyleMap(): StylePropertyMapReadOnly;
  getAttribute(qualifiedName: string): string | null;
  getAttributeNS(namespace: string | null, localName: string): string | null;
  getAttributeNames(): string[];
  getAttributeNode(qualifiedName: string): Attr | null;
  getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
  getBoundingClientRect(): DOMRect;
  getClientRects(): DOMRectList;
  getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
  getElementsByTagName<K extends keyof HTMLElementTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
  getElementsByTagName<K extends keyof SVGElementTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<SVGElementTagNameMap[K]>;
  getElementsByTagName<K extends keyof MathMLElementTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
  getElementsByTagName<K extends keyof HTMLElementDeprecatedTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
  getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
  getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/1999/xhtml',
    localName: string,
  ): HTMLCollectionOf<HTMLElement>;
  getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    localName: string,
  ): HTMLCollectionOf<SVGElement>;
  getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/1998/Math/MathML',
    localName: string,
  ): HTMLCollectionOf<MathMLElement>;
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string,
  ): HTMLCollectionOf<Element>;
  getHTML(options?: GetHTMLOptions): string;
  hasAttribute(qualifiedName: string): boolean;
  hasAttributeNS(namespace: string | null, localName: string): boolean;
  hasAttributes(): boolean;
  hasPointerCapture(pointerId: number): boolean;
  insertAdjacentElement(
    where: InsertPosition,
    element: Element,
  ): Element | null;
  insertAdjacentHTML(position: InsertPosition, string: string): void;
  insertAdjacentText(where: InsertPosition, data: string): void;
  matches(selectors: string): boolean;
  releasePointerCapture(pointerId: number): void;
  removeAttribute(qualifiedName: string): void;
  removeAttributeNS(namespace: string | null, localName: string): void;
  removeAttributeNode(attr: Attr): Attr;
  requestFullscreen(options?: FullscreenOptions): Promise<void>;
  requestPointerLock(options?: PointerLockOptions): Promise<void>;
  scroll(options?: ScrollToOptions): void;
  scroll(x: number, y: number): void;
  scrollBy(options?: ScrollToOptions): void;
  scrollBy(x: number, y: number): void;
  scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
  scrollTo(options?: ScrollToOptions): void;
  scrollTo(x: number, y: number): void;
  setAttribute(qualifiedName: string, value: string): void;
  setAttributeNS(
    namespace: string | null,
    qualifiedName: string,
    value: string,
  ): void;
  setAttributeNode(attr: Attr): Attr | null;
  setAttributeNodeNS(attr: Attr): Attr | null;
  setHTMLUnsafe(html: string): void;
  setPointerCapture(pointerId: number): void;
  toggleAttribute(qualifiedName: string, force?: boolean): boolean;
  webkitMatchesSelector(selectors: string): boolean;
  readonly baseURI: string;
  readonly childNodes: NodeListOf<ChildNode>;
  readonly firstChild: ChildNode | null;
  readonly isConnected: boolean;
  readonly lastChild: ChildNode | null;
  readonly nextSibling: ChildNode | null;
  readonly nodeName: string;
  readonly nodeType: number;
  nodeValue: string | null;
  readonly parentElement: HTMLElement | null;
  readonly parentNode: ParentNode | null;
  readonly previousSibling: ChildNode | null;
  textContent: string | null;
  appendChild<T extends Node>(node: T): T;
  cloneNode(deep?: boolean): Node;
  compareDocumentPosition(other: Node): number;
  contains(other: Node | null): boolean;
  getRootNode(options?: GetRootNodeOptions): Node;
  hasChildNodes(): boolean;
  insertBefore<T extends Node>(node: T, child: Node | null): T;
  isDefaultNamespace(namespace: string | null): boolean;
  isEqualNode(otherNode: Node | null): boolean;
  isSameNode(otherNode: Node | null): boolean;
  lookupNamespaceURI(prefix: string | null): string | null;
  lookupPrefix(namespace: string | null): string | null;
  normalize(): void;
  removeChild<T extends Node>(child: T): T;
  replaceChild<T extends Node>(node: Node, child: T): T;
  readonly ELEMENT_NODE: 1;
  readonly ATTRIBUTE_NODE: 2;
  readonly TEXT_NODE: 3;
  readonly CDATA_SECTION_NODE: 4;
  readonly ENTITY_REFERENCE_NODE: 5;
  readonly ENTITY_NODE: 6;
  readonly PROCESSING_INSTRUCTION_NODE: 7;
  readonly COMMENT_NODE: 8;
  readonly DOCUMENT_NODE: 9;
  readonly DOCUMENT_TYPE_NODE: 10;
  readonly DOCUMENT_FRAGMENT_NODE: 11;
  readonly NOTATION_NODE: 12;
  readonly DOCUMENT_POSITION_DISCONNECTED: 1;
  readonly DOCUMENT_POSITION_PRECEDING: 2;
  readonly DOCUMENT_POSITION_FOLLOWING: 4;
  readonly DOCUMENT_POSITION_CONTAINS: 8;
  readonly DOCUMENT_POSITION_CONTAINED_BY: 16;
  readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32;
  dispatchEvent(event: Event): boolean;
  ariaAtomic: string | null;
  ariaAutoComplete: string | null;
  ariaBrailleLabel: string | null;
  ariaBrailleRoleDescription: string | null;
  ariaBusy: string | null;
  ariaChecked: string | null;
  ariaColCount: string | null;
  ariaColIndex: string | null;
  ariaColSpan: string | null;
  ariaCurrent: string | null;
  ariaDescription: string | null;
  ariaDisabled: string | null;
  ariaExpanded: string | null;
  ariaHasPopup: string | null;
  ariaHidden: string | null;
  ariaInvalid: string | null;
  ariaKeyShortcuts: string | null;
  ariaLabel: string | null;
  ariaLevel: string | null;
  ariaLive: string | null;
  ariaModal: string | null;
  ariaMultiLine: string | null;
  ariaMultiSelectable: string | null;
  ariaOrientation: string | null;
  ariaPlaceholder: string | null;
  ariaPosInSet: string | null;
  ariaPressed: string | null;
  ariaReadOnly: string | null;
  ariaRequired: string | null;
  ariaRoleDescription: string | null;
  ariaRowCount: string | null;
  ariaRowIndex: string | null;
  ariaRowSpan: string | null;
  ariaSelected: string | null;
  ariaSetSize: string | null;
  ariaSort: string | null;
  ariaValueMax: string | null;
  ariaValueMin: string | null;
  ariaValueNow: string | null;
  ariaValueText: string | null;
  role: string | null;
  animate(
    keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
    options?: number | KeyframeAnimationOptions,
  ): Animation;
  getAnimations(options?: GetAnimationsOptions): Animation[];
  after(...nodes: (Node | string)[]): void;
  before(...nodes: (Node | string)[]): void;
  remove(): void;
  replaceWith(...nodes: (Node | string)[]): void;
  readonly nextElementSibling: Element | null;
  readonly previousElementSibling: Element | null;
  readonly childElementCount: number;
  readonly children: HTMLCollection;
  readonly firstElementChild: Element | null;
  readonly lastElementChild: Element | null;
  append(...nodes: (Node | string)[]): void;
  prepend(...nodes: (Node | string)[]): void;
  querySelector<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): HTMLElementTagNameMap[K] | null;
  querySelector<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): SVGElementTagNameMap[K] | null;
  querySelector<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): MathMLElementTagNameMap[K] | null;
  querySelector<K extends keyof HTMLElementDeprecatedTagNameMap>(
    selectors: K,
  ): HTMLElementDeprecatedTagNameMap[K] | null;
  querySelector<E extends Element = Element>(selectors: string): E | null;
  querySelectorAll<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<HTMLElementTagNameMap[K]>;
  querySelectorAll<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): NodeListOf<SVGElementTagNameMap[K]>;
  querySelectorAll<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<MathMLElementTagNameMap[K]>;
  querySelectorAll<K extends keyof HTMLElementDeprecatedTagNameMap>(
    selectors: K,
  ): NodeListOf<HTMLElementDeprecatedTagNameMap[K]>;
  querySelectorAll<E extends Element = Element>(
    selectors: string,
  ): NodeListOf<E>;
  replaceChildren(...nodes: (Node | string)[]): void;
  readonly assignedSlot: HTMLSlotElement | null;
  readonly attributeStyleMap: StylePropertyMap;
  readonly style: CSSStyleDeclaration;
  contentEditable: string;
  enterKeyHint: string;
  inputMode: string;
  readonly isContentEditable: boolean;
  onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  onanimationcancel:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onanimationend:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onanimationiteration:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onanimationstart:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onauxclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onbeforeinput: ((this: GlobalEventHandlers, ev: InputEvent) => any) | null;
  onbeforetoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncontextlost: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  oncontextrestored: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncopy: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
  oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncut: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
  ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onerror: OnErrorEventHandler;
  onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  onformdata: ((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null;
  ongotpointercapture:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onlostpointercapture:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onpaste: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
  onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onpointercancel:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
  onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  onscroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onscrollend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onsecuritypolicyviolation:
    | ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any)
    | null;
  onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselect: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselectionchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselectstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onslotchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onsubmit: ((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null;
  onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontouchcancel?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontouchend?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontouchmove?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontouchstart?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontransitioncancel:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  ontransitionend:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  ontransitionrun:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  ontransitionstart:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwebkitanimationend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwebkitanimationiteration:
    | ((this: GlobalEventHandlers, ev: Event) => any)
    | null;
  onwebkitanimationstart:
    | ((this: GlobalEventHandlers, ev: Event) => any)
    | null;
  onwebkittransitionend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
  autofocus: boolean;
  readonly dataset: DOMStringMap;
  nonce?: string;
  tabIndex: number;
  blur(): void;
  focus(options?: FocusOptions): void;
}) &
  typeof PreactCustomElement;
declare class Button extends Button_base implements ButtonProps {
  accessor disabled: ButtonProps['disabled'];
  accessor icon: ButtonProps['icon'];
  accessor loading: ButtonProps['loading'];
  accessor variant: ButtonProps['variant'];
  accessor tone: ButtonProps['tone'];
  accessor target: ButtonProps['target'];
  accessor href: ButtonProps['href'];
  accessor download: ButtonProps['download'];
  accessor onclick: EventListener | null;
  accessor onblur: EventListener | null;
  accessor onfocus: EventListener | null;
  accessor type: ButtonProps['type'];
  accessor accessibilityLabel: ButtonProps['accessibilityLabel'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$r]: Button;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$r]: HTMLAttributes<HTMLElement> & ButtonJSXProps;
    }
  }
}

declare const tagName$r = 's-button';
export interface ButtonJSXProps
  extends Partial<ButtonProps>,
    Pick<ButtonProps$1, 'id'> {
  onClick?: ((event: CallbackEvent<typeof tagName$r>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$r>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$r>) => void) | null;
}

declare const internals: unique symbol;
export type PreactInputProps = Required<
  Pick<TextFieldProps$1, 'disabled' | 'id' | 'name' | 'value'>
>;
declare class PreactInputElement
  extends PreactCustomElement
  implements PreactInputProps
{
  static formAssociated: boolean;
  /** @private */
  [internals]: ElementInternals;
  protected getDefaultValue(): string;
  accessor onchange: EventListener | null;
  accessor oninput: EventListener | null;
  accessor disabled: PreactInputProps['disabled'];
  accessor id: PreactInputProps['id'];
  accessor name: PreactInputProps['name'];
  get value(): PreactInputProps['value'];
  set value(value: PreactInputProps['value']);
  constructor(renderImpl: RenderImpl);
}

export type CheckboxProps = PreactInputProps &
  Required<
    Pick<
      CheckboxProps$1,
      | 'accessibilityLabel'
      | 'checked'
      | 'details'
      | 'error'
      | 'indeterminate'
      | 'label'
      | 'required'
      | 'defaultChecked'
      | 'defaultIndeterminate'
    >
  >;

declare class Checkbox extends PreactInputElement implements CheckboxProps {
  get checked(): boolean;
  set checked(checked: CheckboxProps['checked']);
  get value(): string;
  set value(value: string);
  accessor defaultChecked: CheckboxProps['defaultChecked'];
  accessor accessibilityLabel: CheckboxProps['accessibilityLabel'];
  accessor details: CheckboxProps['details'];
  accessor error: CheckboxProps['error'];
  get indeterminate(): CheckboxProps['indeterminate'];
  set indeterminate(indeterminate: CheckboxProps['indeterminate']);
  accessor defaultIndeterminate: CheckboxProps['defaultIndeterminate'];
  accessor label: CheckboxProps['label'];
  accessor required: CheckboxProps['required'];
  formResetCallback(): void;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$q]: Checkbox;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$q]: HTMLAttributes<HTMLElement> & CheckboxJSXProps;
    }
  }
}

declare const tagName$q = 's-checkbox';
export interface CheckboxJSXProps
  extends Partial<CheckboxProps>,
    Pick<CheckboxProps$1, 'id'> {
  onChange?: ((event: CallbackEvent<typeof tagName$q>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$q>) => void) | null;
}

export type ClickableBaseProps = Required<
  Pick<
    ClickableProps$1,
    | 'activateAction'
    | 'activateTarget'
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

declare const Clickable_base: (abstract new (...args: any) => {
  activateTarget: PreactOverlayControlProps['activateTarget'];
  activateAction: PreactOverlayControlProps['activateAction'];
  '__#44918@#queueRender': (() => void) | undefined;
  '__#44918@#legacyStyleComponents': Map<string, preact.VNode<{}>>;
  attributeChangedCallback(name: string): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  adoptedCallback(): void;
  queueRender(): void;
  '__#44918@#checkElementPrototype'(): void;
  _addLegacyStyleComponent(style: string): void;
  click({sourceEvent}?: ClickOptions): void;
  accessKey: string;
  readonly accessKeyLabel: string;
  autocapitalize: string;
  dir: string;
  draggable: boolean;
  hidden: boolean;
  inert: boolean;
  innerText: string;
  lang: string;
  readonly offsetHeight: number;
  readonly offsetLeft: number;
  readonly offsetParent: Element | null;
  readonly offsetTop: number;
  readonly offsetWidth: number;
  outerText: string;
  popover: string | null;
  spellcheck: boolean;
  title: string;
  translate: boolean;
  attachInternals(): ElementInternals;
  hidePopover(): void;
  showPopover(): void;
  togglePopover(force?: boolean): boolean;
  addEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
  readonly attributes: NamedNodeMap;
  readonly classList: DOMTokenList;
  className: string;
  readonly clientHeight: number;
  readonly clientLeft: number;
  readonly clientTop: number;
  readonly clientWidth: number;
  id: string;
  innerHTML: string;
  readonly localName: string;
  readonly namespaceURI: string | null;
  onfullscreenchange: ((this: Element, ev: Event) => any) | null;
  onfullscreenerror: ((this: Element, ev: Event) => any) | null;
  outerHTML: string;
  readonly ownerDocument: Document;
  readonly part: DOMTokenList;
  readonly prefix: string | null;
  readonly scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  readonly scrollWidth: number;
  readonly shadowRoot: ShadowRoot | null;
  slot: string;
  readonly tagName: string;
  attachShadow(init: ShadowRootInit): ShadowRoot;
  checkVisibility(options?: CheckVisibilityOptions): boolean;
  closest<K extends keyof HTMLElementTagNameMap>(
    selector: K,
  ): HTMLElementTagNameMap[K] | null;
  closest<K extends keyof SVGElementTagNameMap>(
    selector: K,
  ): SVGElementTagNameMap[K] | null;
  closest<K extends keyof MathMLElementTagNameMap>(
    selector: K,
  ): MathMLElementTagNameMap[K] | null;
  closest<E extends Element = Element>(selectors: string): E | null;
  computedStyleMap(): StylePropertyMapReadOnly;
  getAttribute(qualifiedName: string): string | null;
  getAttributeNS(namespace: string | null, localName: string): string | null;
  getAttributeNames(): string[];
  getAttributeNode(qualifiedName: string): Attr | null;
  getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
  getBoundingClientRect(): DOMRect;
  getClientRects(): DOMRectList;
  getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
  getElementsByTagName<K extends keyof HTMLElementTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
  getElementsByTagName<K extends keyof SVGElementTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<SVGElementTagNameMap[K]>;
  getElementsByTagName<K extends keyof MathMLElementTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
  getElementsByTagName<K extends keyof HTMLElementDeprecatedTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
  getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
  getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/1999/xhtml',
    localName: string,
  ): HTMLCollectionOf<HTMLElement>;
  getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    localName: string,
  ): HTMLCollectionOf<SVGElement>;
  getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/1998/Math/MathML',
    localName: string,
  ): HTMLCollectionOf<MathMLElement>;
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string,
  ): HTMLCollectionOf<Element>;
  getHTML(options?: GetHTMLOptions): string;
  hasAttribute(qualifiedName: string): boolean;
  hasAttributeNS(namespace: string | null, localName: string): boolean;
  hasAttributes(): boolean;
  hasPointerCapture(pointerId: number): boolean;
  insertAdjacentElement(
    where: InsertPosition,
    element: Element,
  ): Element | null;
  insertAdjacentHTML(position: InsertPosition, string: string): void;
  insertAdjacentText(where: InsertPosition, data: string): void;
  matches(selectors: string): boolean;
  releasePointerCapture(pointerId: number): void;
  removeAttribute(qualifiedName: string): void;
  removeAttributeNS(namespace: string | null, localName: string): void;
  removeAttributeNode(attr: Attr): Attr;
  requestFullscreen(options?: FullscreenOptions): Promise<void>;
  requestPointerLock(options?: PointerLockOptions): Promise<void>;
  scroll(options?: ScrollToOptions): void;
  scroll(x: number, y: number): void;
  scrollBy(options?: ScrollToOptions): void;
  scrollBy(x: number, y: number): void;
  scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
  scrollTo(options?: ScrollToOptions): void;
  scrollTo(x: number, y: number): void;
  setAttribute(qualifiedName: string, value: string): void;
  setAttributeNS(
    namespace: string | null,
    qualifiedName: string,
    value: string,
  ): void;
  setAttributeNode(attr: Attr): Attr | null;
  setAttributeNodeNS(attr: Attr): Attr | null;
  setHTMLUnsafe(html: string): void;
  setPointerCapture(pointerId: number): void;
  toggleAttribute(qualifiedName: string, force?: boolean): boolean;
  webkitMatchesSelector(selectors: string): boolean;
  readonly baseURI: string;
  readonly childNodes: NodeListOf<ChildNode>;
  readonly firstChild: ChildNode | null;
  readonly isConnected: boolean;
  readonly lastChild: ChildNode | null;
  readonly nextSibling: ChildNode | null;
  readonly nodeName: string;
  readonly nodeType: number;
  nodeValue: string | null;
  readonly parentElement: HTMLElement | null;
  readonly parentNode: ParentNode | null;
  readonly previousSibling: ChildNode | null;
  textContent: string | null;
  appendChild<T extends Node>(node: T): T;
  cloneNode(deep?: boolean): Node;
  compareDocumentPosition(other: Node): number;
  contains(other: Node | null): boolean;
  getRootNode(options?: GetRootNodeOptions): Node;
  hasChildNodes(): boolean;
  insertBefore<T extends Node>(node: T, child: Node | null): T;
  isDefaultNamespace(namespace: string | null): boolean;
  isEqualNode(otherNode: Node | null): boolean;
  isSameNode(otherNode: Node | null): boolean;
  lookupNamespaceURI(prefix: string | null): string | null;
  lookupPrefix(namespace: string | null): string | null;
  normalize(): void;
  removeChild<T extends Node>(child: T): T;
  replaceChild<T extends Node>(node: Node, child: T): T;
  readonly ELEMENT_NODE: 1;
  readonly ATTRIBUTE_NODE: 2;
  readonly TEXT_NODE: 3;
  readonly CDATA_SECTION_NODE: 4;
  readonly ENTITY_REFERENCE_NODE: 5;
  readonly ENTITY_NODE: 6;
  readonly PROCESSING_INSTRUCTION_NODE: 7;
  readonly COMMENT_NODE: 8;
  readonly DOCUMENT_NODE: 9;
  readonly DOCUMENT_TYPE_NODE: 10;
  readonly DOCUMENT_FRAGMENT_NODE: 11;
  readonly NOTATION_NODE: 12;
  readonly DOCUMENT_POSITION_DISCONNECTED: 1;
  readonly DOCUMENT_POSITION_PRECEDING: 2;
  readonly DOCUMENT_POSITION_FOLLOWING: 4;
  readonly DOCUMENT_POSITION_CONTAINS: 8;
  readonly DOCUMENT_POSITION_CONTAINED_BY: 16;
  readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32;
  dispatchEvent(event: Event): boolean;
  ariaAtomic: string | null;
  ariaAutoComplete: string | null;
  ariaBrailleLabel: string | null;
  ariaBrailleRoleDescription: string | null;
  ariaBusy: string | null;
  ariaChecked: string | null;
  ariaColCount: string | null;
  ariaColIndex: string | null;
  ariaColSpan: string | null;
  ariaCurrent: string | null;
  ariaDescription: string | null;
  ariaDisabled: string | null;
  ariaExpanded: string | null;
  ariaHasPopup: string | null;
  ariaHidden: string | null;
  ariaInvalid: string | null;
  ariaKeyShortcuts: string | null;
  ariaLabel: string | null;
  ariaLevel: string | null;
  ariaLive: string | null;
  ariaModal: string | null;
  ariaMultiLine: string | null;
  ariaMultiSelectable: string | null;
  ariaOrientation: string | null;
  ariaPlaceholder: string | null;
  ariaPosInSet: string | null;
  ariaPressed: string | null;
  ariaReadOnly: string | null;
  ariaRequired: string | null;
  ariaRoleDescription: string | null;
  ariaRowCount: string | null;
  ariaRowIndex: string | null;
  ariaRowSpan: string | null;
  ariaSelected: string | null;
  ariaSetSize: string | null;
  ariaSort: string | null;
  ariaValueMax: string | null;
  ariaValueMin: string | null;
  ariaValueNow: string | null;
  ariaValueText: string | null;
  role: string | null;
  animate(
    keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
    options?: number | KeyframeAnimationOptions,
  ): Animation;
  getAnimations(options?: GetAnimationsOptions): Animation[];
  after(...nodes: (Node | string)[]): void;
  before(...nodes: (Node | string)[]): void;
  remove(): void;
  replaceWith(...nodes: (Node | string)[]): void;
  readonly nextElementSibling: Element | null;
  readonly previousElementSibling: Element | null;
  readonly childElementCount: number;
  readonly children: HTMLCollection;
  readonly firstElementChild: Element | null;
  readonly lastElementChild: Element | null;
  append(...nodes: (Node | string)[]): void;
  prepend(...nodes: (Node | string)[]): void;
  querySelector<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): HTMLElementTagNameMap[K] | null;
  querySelector<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): SVGElementTagNameMap[K] | null;
  querySelector<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): MathMLElementTagNameMap[K] | null;
  querySelector<K extends keyof HTMLElementDeprecatedTagNameMap>(
    selectors: K,
  ): HTMLElementDeprecatedTagNameMap[K] | null;
  querySelector<E extends Element = Element>(selectors: string): E | null;
  querySelectorAll<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<HTMLElementTagNameMap[K]>;
  querySelectorAll<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): NodeListOf<SVGElementTagNameMap[K]>;
  querySelectorAll<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<MathMLElementTagNameMap[K]>;
  querySelectorAll<K extends keyof HTMLElementDeprecatedTagNameMap>(
    selectors: K,
  ): NodeListOf<HTMLElementDeprecatedTagNameMap[K]>;
  querySelectorAll<E extends Element = Element>(
    selectors: string,
  ): NodeListOf<E>;
  replaceChildren(...nodes: (Node | string)[]): void;
  readonly assignedSlot: HTMLSlotElement | null;
  readonly attributeStyleMap: StylePropertyMap;
  readonly style: CSSStyleDeclaration;
  contentEditable: string;
  enterKeyHint: string;
  inputMode: string;
  readonly isContentEditable: boolean;
  onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  onanimationcancel:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onanimationend:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onanimationiteration:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onanimationstart:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onauxclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onbeforeinput: ((this: GlobalEventHandlers, ev: InputEvent) => any) | null;
  onbeforetoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncontextlost: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  oncontextrestored: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncopy: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
  oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncut: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
  ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onerror: OnErrorEventHandler;
  onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  onformdata: ((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null;
  ongotpointercapture:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onlostpointercapture:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onpaste: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
  onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onpointercancel:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
  onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  onscroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onscrollend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onsecuritypolicyviolation:
    | ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any)
    | null;
  onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselect: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselectionchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselectstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onslotchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onsubmit: ((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null;
  onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontouchcancel?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontouchend?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontouchmove?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontouchstart?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontransitioncancel:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  ontransitionend:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  ontransitionrun:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  ontransitionstart:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwebkitanimationend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwebkitanimationiteration:
    | ((this: GlobalEventHandlers, ev: Event) => any)
    | null;
  onwebkitanimationstart:
    | ((this: GlobalEventHandlers, ev: Event) => any)
    | null;
  onwebkittransitionend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
  autofocus: boolean;
  readonly dataset: DOMStringMap;
  nonce?: string;
  tabIndex: number;
  blur(): void;
  focus(options?: FocusOptions): void;
}) &
  typeof BoxElement;
declare class Clickable extends Clickable_base implements ClickableProps {
  accessor disabled: ClickableProps['disabled'];
  accessor loading: ClickableProps['loading'];
  accessor target: ClickableProps['target'];
  accessor href: ClickableProps['href'];
  accessor download: ClickableProps['download'];
  accessor onclick: EventListener | null;
  accessor onblur: EventListener | null;
  accessor onfocus: EventListener | null;
  accessor type: ClickableProps['type'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$p]: Clickable;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$p]: HTMLAttributes<HTMLElement> & ClickableJSXProps;
    }
  }
}

declare const tagName$p = 's-clickable';
export interface ClickableJSXProps
  extends Partial<ClickableProps>,
    Pick<ClickableProps$1, 'id'> {
  onClick?: ((event: CallbackEvent<typeof tagName$p>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$p>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$p>) => void) | null;
}

export interface DividerProps {
  direction: Extract<DividerProps$1['direction'], 'inline' | 'block'>;
  color: Extract<DividerProps$1['color'], 'subdued' | 'base' | 'strong'>;
}

declare class Divider extends PreactCustomElement implements DividerProps {
  accessor direction: DividerProps['direction'];
  accessor color: DividerProps['color'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$o]: Divider;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$o]: HTMLAttributes<HTMLElement> & DividerJSXProps;
    }
  }
}

declare const tagName$o = 's-divider';
export interface DividerJSXProps
  extends Partial<DividerProps>,
    Pick<DividerProps$1, 'id'> {}

export type RequiredHeadingProps = Required<HeadingProps$1>;
export interface HeadingProps {
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
    [tagName$n]: Heading;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$n]: HTMLAttributes<HTMLElement> & HeadingJSXProps;
    }
  }
}

declare const tagName$n = 's-heading';
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
    [tagName$m]: Icon;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$m]: Omit<HTMLAttributes<HTMLElement>, 'size'> & IconJSXProps;
    }
  }
}

declare const tagName$m = 's-icon';
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
  > {}

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
  accessor onload: EventListener | null;
  accessor onerror: OnErrorEventHandler;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$l]: Image;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$l]: HTMLAttributes<HTMLElement> & ImageJSXProps;
    }
  }
}

declare const tagName$l = 's-image';
export interface ImageJSXProps
  extends Partial<ImageProps>,
    Pick<ImageProps$1, 'id'> {
  onError?: ((event: CallbackEvent<typeof tagName$l>) => void) | null;
  onLoad?: ((event: CallbackEvent<typeof tagName$l>) => void) | null;
}

export type RequiredLinkProps = Required<LinkProps$1>;
export interface LinkProps {
  accessibilityLabel: RequiredLinkProps['accessibilityLabel'];
  activateAction: RequiredLinkProps['activateAction'];
  activateTarget: RequiredLinkProps['activateTarget'];
  download: RequiredLinkProps['download'];
  href: RequiredLinkProps['href'];
  lang: RequiredLinkProps['lang'];
  target: RequiredLinkProps['target'];
  tone: Extract<RequiredLinkProps['tone'], 'auto' | 'neutral' | 'critical'>;
}

declare const Link_base: (abstract new (...args: any) => {
  activateTarget: PreactOverlayControlProps['activateTarget'];
  activateAction: PreactOverlayControlProps['activateAction'];
  '__#44918@#queueRender': (() => void) | undefined;
  '__#44918@#legacyStyleComponents': Map<string, preact.VNode<{}>>;
  attributeChangedCallback(name: string): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  adoptedCallback(): void;
  queueRender(): void;
  '__#44918@#checkElementPrototype'(): void;
  _addLegacyStyleComponent(style: string): void;
  click({sourceEvent}?: ClickOptions): void;
  accessKey: string;
  readonly accessKeyLabel: string;
  autocapitalize: string;
  dir: string;
  draggable: boolean;
  hidden: boolean;
  inert: boolean;
  innerText: string;
  lang: string;
  readonly offsetHeight: number;
  readonly offsetLeft: number;
  readonly offsetParent: Element | null;
  readonly offsetTop: number;
  readonly offsetWidth: number;
  outerText: string;
  popover: string | null;
  spellcheck: boolean;
  title: string;
  translate: boolean;
  attachInternals(): ElementInternals;
  hidePopover(): void;
  showPopover(): void;
  togglePopover(force?: boolean): boolean;
  addEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
  readonly attributes: NamedNodeMap;
  readonly classList: DOMTokenList;
  className: string;
  readonly clientHeight: number;
  readonly clientLeft: number;
  readonly clientTop: number;
  readonly clientWidth: number;
  id: string;
  innerHTML: string;
  readonly localName: string;
  readonly namespaceURI: string | null;
  onfullscreenchange: ((this: Element, ev: Event) => any) | null;
  onfullscreenerror: ((this: Element, ev: Event) => any) | null;
  outerHTML: string;
  readonly ownerDocument: Document;
  readonly part: DOMTokenList;
  readonly prefix: string | null;
  readonly scrollHeight: number;
  scrollLeft: number;
  scrollTop: number;
  readonly scrollWidth: number;
  readonly shadowRoot: ShadowRoot | null;
  slot: string;
  readonly tagName: string;
  attachShadow(init: ShadowRootInit): ShadowRoot;
  checkVisibility(options?: CheckVisibilityOptions): boolean;
  closest<K extends keyof HTMLElementTagNameMap>(
    selector: K,
  ): HTMLElementTagNameMap[K] | null;
  closest<K extends keyof SVGElementTagNameMap>(
    selector: K,
  ): SVGElementTagNameMap[K] | null;
  closest<K extends keyof MathMLElementTagNameMap>(
    selector: K,
  ): MathMLElementTagNameMap[K] | null;
  closest<E extends Element = Element>(selectors: string): E | null;
  computedStyleMap(): StylePropertyMapReadOnly;
  getAttribute(qualifiedName: string): string | null;
  getAttributeNS(namespace: string | null, localName: string): string | null;
  getAttributeNames(): string[];
  getAttributeNode(qualifiedName: string): Attr | null;
  getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
  getBoundingClientRect(): DOMRect;
  getClientRects(): DOMRectList;
  getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
  getElementsByTagName<K extends keyof HTMLElementTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
  getElementsByTagName<K extends keyof SVGElementTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<SVGElementTagNameMap[K]>;
  getElementsByTagName<K extends keyof MathMLElementTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
  getElementsByTagName<K extends keyof HTMLElementDeprecatedTagNameMap>(
    qualifiedName: K,
  ): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
  getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
  getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/1999/xhtml',
    localName: string,
  ): HTMLCollectionOf<HTMLElement>;
  getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/2000/svg',
    localName: string,
  ): HTMLCollectionOf<SVGElement>;
  getElementsByTagNameNS(
    namespaceURI: 'http://www.w3.org/1998/Math/MathML',
    localName: string,
  ): HTMLCollectionOf<MathMLElement>;
  getElementsByTagNameNS(
    namespace: string | null,
    localName: string,
  ): HTMLCollectionOf<Element>;
  getHTML(options?: GetHTMLOptions): string;
  hasAttribute(qualifiedName: string): boolean;
  hasAttributeNS(namespace: string | null, localName: string): boolean;
  hasAttributes(): boolean;
  hasPointerCapture(pointerId: number): boolean;
  insertAdjacentElement(
    where: InsertPosition,
    element: Element,
  ): Element | null;
  insertAdjacentHTML(position: InsertPosition, string: string): void;
  insertAdjacentText(where: InsertPosition, data: string): void;
  matches(selectors: string): boolean;
  releasePointerCapture(pointerId: number): void;
  removeAttribute(qualifiedName: string): void;
  removeAttributeNS(namespace: string | null, localName: string): void;
  removeAttributeNode(attr: Attr): Attr;
  requestFullscreen(options?: FullscreenOptions): Promise<void>;
  requestPointerLock(options?: PointerLockOptions): Promise<void>;
  scroll(options?: ScrollToOptions): void;
  scroll(x: number, y: number): void;
  scrollBy(options?: ScrollToOptions): void;
  scrollBy(x: number, y: number): void;
  scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
  scrollTo(options?: ScrollToOptions): void;
  scrollTo(x: number, y: number): void;
  setAttribute(qualifiedName: string, value: string): void;
  setAttributeNS(
    namespace: string | null,
    qualifiedName: string,
    value: string,
  ): void;
  setAttributeNode(attr: Attr): Attr | null;
  setAttributeNodeNS(attr: Attr): Attr | null;
  setHTMLUnsafe(html: string): void;
  setPointerCapture(pointerId: number): void;
  toggleAttribute(qualifiedName: string, force?: boolean): boolean;
  webkitMatchesSelector(selectors: string): boolean;
  readonly baseURI: string;
  readonly childNodes: NodeListOf<ChildNode>;
  readonly firstChild: ChildNode | null;
  readonly isConnected: boolean;
  readonly lastChild: ChildNode | null;
  readonly nextSibling: ChildNode | null;
  readonly nodeName: string;
  readonly nodeType: number;
  nodeValue: string | null;
  readonly parentElement: HTMLElement | null;
  readonly parentNode: ParentNode | null;
  readonly previousSibling: ChildNode | null;
  textContent: string | null;
  appendChild<T extends Node>(node: T): T;
  cloneNode(deep?: boolean): Node;
  compareDocumentPosition(other: Node): number;
  contains(other: Node | null): boolean;
  getRootNode(options?: GetRootNodeOptions): Node;
  hasChildNodes(): boolean;
  insertBefore<T extends Node>(node: T, child: Node | null): T;
  isDefaultNamespace(namespace: string | null): boolean;
  isEqualNode(otherNode: Node | null): boolean;
  isSameNode(otherNode: Node | null): boolean;
  lookupNamespaceURI(prefix: string | null): string | null;
  lookupPrefix(namespace: string | null): string | null;
  normalize(): void;
  removeChild<T extends Node>(child: T): T;
  replaceChild<T extends Node>(node: Node, child: T): T;
  readonly ELEMENT_NODE: 1;
  readonly ATTRIBUTE_NODE: 2;
  readonly TEXT_NODE: 3;
  readonly CDATA_SECTION_NODE: 4;
  readonly ENTITY_REFERENCE_NODE: 5;
  readonly ENTITY_NODE: 6;
  readonly PROCESSING_INSTRUCTION_NODE: 7;
  readonly COMMENT_NODE: 8;
  readonly DOCUMENT_NODE: 9;
  readonly DOCUMENT_TYPE_NODE: 10;
  readonly DOCUMENT_FRAGMENT_NODE: 11;
  readonly NOTATION_NODE: 12;
  readonly DOCUMENT_POSITION_DISCONNECTED: 1;
  readonly DOCUMENT_POSITION_PRECEDING: 2;
  readonly DOCUMENT_POSITION_FOLLOWING: 4;
  readonly DOCUMENT_POSITION_CONTAINS: 8;
  readonly DOCUMENT_POSITION_CONTAINED_BY: 16;
  readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32;
  dispatchEvent(event: Event): boolean;
  ariaAtomic: string | null;
  ariaAutoComplete: string | null;
  ariaBrailleLabel: string | null;
  ariaBrailleRoleDescription: string | null;
  ariaBusy: string | null;
  ariaChecked: string | null;
  ariaColCount: string | null;
  ariaColIndex: string | null;
  ariaColSpan: string | null;
  ariaCurrent: string | null;
  ariaDescription: string | null;
  ariaDisabled: string | null;
  ariaExpanded: string | null;
  ariaHasPopup: string | null;
  ariaHidden: string | null;
  ariaInvalid: string | null;
  ariaKeyShortcuts: string | null;
  ariaLabel: string | null;
  ariaLevel: string | null;
  ariaLive: string | null;
  ariaModal: string | null;
  ariaMultiLine: string | null;
  ariaMultiSelectable: string | null;
  ariaOrientation: string | null;
  ariaPlaceholder: string | null;
  ariaPosInSet: string | null;
  ariaPressed: string | null;
  ariaReadOnly: string | null;
  ariaRequired: string | null;
  ariaRoleDescription: string | null;
  ariaRowCount: string | null;
  ariaRowIndex: string | null;
  ariaRowSpan: string | null;
  ariaSelected: string | null;
  ariaSetSize: string | null;
  ariaSort: string | null;
  ariaValueMax: string | null;
  ariaValueMin: string | null;
  ariaValueNow: string | null;
  ariaValueText: string | null;
  role: string | null;
  animate(
    keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
    options?: number | KeyframeAnimationOptions,
  ): Animation;
  getAnimations(options?: GetAnimationsOptions): Animation[];
  after(...nodes: (Node | string)[]): void;
  before(...nodes: (Node | string)[]): void;
  remove(): void;
  replaceWith(...nodes: (Node | string)[]): void;
  readonly nextElementSibling: Element | null;
  readonly previousElementSibling: Element | null;
  readonly childElementCount: number;
  readonly children: HTMLCollection;
  readonly firstElementChild: Element | null;
  readonly lastElementChild: Element | null;
  append(...nodes: (Node | string)[]): void;
  prepend(...nodes: (Node | string)[]): void;
  querySelector<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): HTMLElementTagNameMap[K] | null;
  querySelector<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): SVGElementTagNameMap[K] | null;
  querySelector<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): MathMLElementTagNameMap[K] | null;
  querySelector<K extends keyof HTMLElementDeprecatedTagNameMap>(
    selectors: K,
  ): HTMLElementDeprecatedTagNameMap[K] | null;
  querySelector<E extends Element = Element>(selectors: string): E | null;
  querySelectorAll<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<HTMLElementTagNameMap[K]>;
  querySelectorAll<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): NodeListOf<SVGElementTagNameMap[K]>;
  querySelectorAll<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<MathMLElementTagNameMap[K]>;
  querySelectorAll<K extends keyof HTMLElementDeprecatedTagNameMap>(
    selectors: K,
  ): NodeListOf<HTMLElementDeprecatedTagNameMap[K]>;
  querySelectorAll<E extends Element = Element>(
    selectors: string,
  ): NodeListOf<E>;
  replaceChildren(...nodes: (Node | string)[]): void;
  readonly assignedSlot: HTMLSlotElement | null;
  readonly attributeStyleMap: StylePropertyMap;
  readonly style: CSSStyleDeclaration;
  contentEditable: string;
  enterKeyHint: string;
  inputMode: string;
  readonly isContentEditable: boolean;
  onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  onanimationcancel:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onanimationend:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onanimationiteration:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onanimationstart:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onauxclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onbeforeinput: ((this: GlobalEventHandlers, ev: InputEvent) => any) | null;
  onbeforetoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncontextlost: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  oncontextrestored: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncopy: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
  oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oncut: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
  ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onerror: OnErrorEventHandler;
  onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  onformdata: ((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null;
  ongotpointercapture:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onlostpointercapture:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onpaste: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
  onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onpointercancel:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
  onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  onscroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onscrollend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onsecuritypolicyviolation:
    | ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any)
    | null;
  onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselect: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselectionchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onselectstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onslotchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onsubmit: ((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null;
  onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  ontouchcancel?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontouchend?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontouchmove?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontouchstart?:
    | ((this: GlobalEventHandlers, ev: TouchEvent) => any)
    | null
    | undefined;
  ontransitioncancel:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  ontransitionend:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  ontransitionrun:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  ontransitionstart:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwebkitanimationend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwebkitanimationiteration:
    | ((this: GlobalEventHandlers, ev: Event) => any)
    | null;
  onwebkitanimationstart:
    | ((this: GlobalEventHandlers, ev: Event) => any)
    | null;
  onwebkittransitionend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
  autofocus: boolean;
  readonly dataset: DOMStringMap;
  nonce?: string;
  tabIndex: number;
  blur(): void;
  focus(options?: FocusOptions): void;
}) &
  typeof PreactCustomElement;
declare class Link extends Link_base implements LinkProps {
  accessor tone: LinkProps['tone'];
  accessor accessibilityLabel: LinkProps['accessibilityLabel'];
  accessor href: LinkProps['href'];
  accessor target: LinkProps['target'];
  accessor download: LinkProps['download'];
  accessor lang: LinkProps['lang'];
  accessor onclick: EventListener | null;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$k]: Link;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$k]: HTMLAttributes<HTMLElement> & LinkJSXProps;
    }
  }
}

declare const tagName$k = 's-link';
export interface LinkJSXProps
  extends Partial<LinkProps>,
    Pick<LinkProps$1, 'id' | 'lang'> {
  onClick?: ((event: CallbackEvent<typeof tagName$k>) => void) | null;
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
      autocomplete: Autocomplete;
    };
declare class PreactFieldElement<Autocomplete extends string = string>
  extends PreactInputElement
  implements PreactFieldProps<Autocomplete>
{
  accessor onblur: EventListener | null;
  accessor onfocus: EventListener | null;
  accessor autocomplete: PreactFieldProps<Autocomplete>['autocomplete'];
  accessor defaultValue: PreactFieldProps['defaultValue'];
  accessor details: PreactFieldProps['details'];
  accessor error: PreactFieldProps['error'];
  accessor label: PreactFieldProps['label'];
  accessor labelAccessibilityVisibility: PreactFieldProps['labelAccessibilityVisibility'];
  accessor placeholder: PreactFieldProps['placeholder'];
  accessor readOnly: PreactFieldProps['readOnly'];
  accessor required: PreactFieldProps['required'];
  protected getDefaultValue(): string;
  /**
   * Global keyboard event handlers for things like key bindings typically
   * ignore keystrokes originating from within input elements. Unfortunately,
   * these never account for a Custom Element being the input element.
   *
   * To fix this, we spoof getAttribute & hasAttribute to make a PreactFieldElement
   * appear as a contentEditable "input" when it contains a focused input element.
   */
  getAttribute(qualifiedName: string): string | null;
  hasAttribute(qualifiedName: string): boolean;
  /**
   * Checks if the shadow tree contains a focused input (input, textarea, select, <x contentEditable>).
   * Note: this does _not_ return true for focussed non-field form elements like buttons.
   */
  get isContentEditable(): boolean;
  formResetCallback(): void;
  connectedCallback(): void;
  constructor(renderImpl: RenderImpl);
}

export type NumberFieldProps = PreactFieldProps<
  Required<NumberFieldProps$1>['autocomplete']
> &
  Required<
    Pick<
      NumberFieldProps$1,
      'inputMode' | 'max' | 'min' | 'prefix' | 'step' | 'suffix'
    >
  >;

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
    [tagName$j]: NumberField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$j]: HTMLAttributes<HTMLElement> & NumberFieldJSXProps;
    }
  }
}

declare const tagName$j = 's-number-field';
export interface NumberFieldJSXProps
  extends Partial<NumberFieldProps>,
    Pick<NumberFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$j> {}

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
    [tagName$i]: Option;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$i]: HTMLAttributes<HTMLElement> & OptionJSXProps;
    }
  }
}

declare const tagName$i = 's-option';
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
    [tagName$h]: OptionGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$h]: HTMLAttributes<HTMLElement> & OptionGroupJSXProps;
    }
  }
}

declare const tagName$h = 's-option-group';
export interface OptionGroupJSXProps extends Partial<OptionGroupProps> {}

export interface ParagraphProps
  extends Required<
    Pick<
      ParagraphProps$1,
      'accessibilityVisibility' | 'fontVariantNumeric' | 'tone' | 'dir'
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
    [tagName$g]: Paragraph;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$g]: HTMLAttributes<HTMLElement> & ParagraphJSXProps;
    }
  }
}

declare const tagName$g = 's-paragraph';
export interface ParagraphJSXProps
  extends Partial<ParagraphProps>,
    Pick<ParagraphProps$1, 'id'> {}

export type RequiredSectionProps = Required<SectionProps$1>;
export interface SectionProps {
  accessibilityLabel: RequiredSectionProps['accessibilityLabel'];
  heading: RequiredSectionProps['heading'];
  padding: RequiredSectionProps['padding'];
}

declare class Section extends PreactCustomElement implements SectionProps {
  constructor();
  connectedCallback(): void;
  accessor accessibilityLabel: SectionProps['accessibilityLabel'];
  accessor heading: SectionProps['heading'];
  accessor padding: SectionProps['padding'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$f]: Section;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$f]: HTMLAttributes<HTMLElement> & SectionJSXProps;
    }
  }
}

declare const tagName$f = 's-section';
export interface SectionJSXProps
  extends Partial<SectionProps>,
    Pick<SectionProps$1, 'id'> {}

export type SelectProps = PreactInputProps &
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
      | 'value'
      | 'icon'
      | 'labelAccessibilityVisibility'
    >
  >;

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
  connectedCallback(): void;
  disconnectedCallback(): void;
  constructor();
  /**
   * used to determine if no value or defaultValue was set, in which case the first non-disabled option was used
   *
   * this is important because we need to use the placeholder in these situations, even though the first value will be submitted as part of the form
   */
  [usedFirstOptionSymbol]: boolean;
  [hasInitialValueSymbol]: boolean;
  get value(): string;
  set value(value: string);
  formResetCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$e]: Select;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$e]: HTMLAttributes<HTMLElement> & SelectJSXProps;
    }
  }
}

declare const tagName$e = 's-select';
export interface SelectJSXProps extends Partial<SelectProps> {}

export interface SpinnerProps
  extends Required<Pick<SpinnerProps$1, 'accessibilityLabel'>> {
  /**
   * The size of the component.
   *
   * @default 'base'
   */
  size: Extract<SpinnerProps$1['size'], 'large' | 'large-100' | 'base'>;
}

declare class Spinner extends PreactCustomElement implements SpinnerProps {
  accessor accessibilityLabel: string;
  accessor size: SpinnerProps['size'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$d]: Spinner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$d]: Omit<HTMLAttributes<HTMLElement>, 'size'> & SpinnerJSXProps;
    }
  }
}

declare const tagName$d = 's-spinner';
export interface SpinnerJSXProps
  extends Partial<SpinnerProps>,
    Pick<SpinnerProps$1, 'id'> {}

export type AlignedStackProps = Required<StackProps$1>;
export interface StackProps extends BoxProps {
  justifyContent: AlignedStackProps['justifyContent'];
  alignItems: AlignedStackProps['alignItems'];
  alignContent: AlignedStackProps['alignContent'];
  gap: AlignedStackProps['gap'];
  rowGap: AlignedStackProps['rowGap'];
  columnGap: AlignedStackProps['columnGap'];
  direction: AlignedStackProps['direction'];
}

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
    [tagName$c]: Stack;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$c]: HTMLAttributes<HTMLElement> & StackJSXProps;
    }
  }
}

declare const tagName$c = 's-stack';
export interface StackJSXProps
  extends Partial<StackProps>,
    Pick<StackProps$1, 'id'> {}

export interface TableProps
  extends Required<
    Pick<
      TableProps$1,
      'loading' | 'paginate' | 'hasPreviousPage' | 'hasNextPage'
    >
  > {
  variant: Extract<TableProps$1['variant'], 'list' | 'auto'>;
}

export interface TableHeaderProps {
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
  accessor onpreviouspage: EventListener | null;
  accessor onnextpage: EventListener | null;
  /**
   * The actual table variant, which is either 'table' or 'list'.
   */
  [actualTableVariantSymbol]: AddedContext<ActualTableVariant>;
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
    [tagName$b]: Table;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$b]: HTMLAttributes<HTMLElement> & TableJSXProps;
    }
  }
}

declare const tagName$b = 's-table';
export interface TableJSXProps
  extends Partial<TableProps>,
    Pick<TableProps$1, 'id' | 'onNextPage' | 'onPreviousPage'> {}

export interface TableBodyProps extends TableBodyProps$1 {}

declare class TableBody extends PreactCustomElement implements TableBodyProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$a]: TableBody;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$a]: HTMLAttributes<HTMLElement> & TableBodyJSXProps;
    }
  }
}

declare const tagName$a = 's-table-body';
export interface TableBodyJSXProps
  extends Partial<TableBodyProps>,
    Pick<TableBodyProps$1, 'id'> {}

export interface TableCellProps extends TableCellProps$1 {}

declare class TableCell extends PreactCustomElement implements TableCellProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$9]: TableCell;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$9]: HTMLAttributes<HTMLElement> & TableCellJSXProps;
    }
  }
}

declare const tagName$9 = 's-table-cell';
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
    [tagName$8]: TableHeader;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$8]: HTMLAttributes<HTMLElement> & TableHeaderJSXProps;
    }
  }
}

declare const tagName$8 = 's-table-header';
export interface TableHeaderJSXProps
  extends Partial<TableHeaderProps>,
    Pick<TableHeaderProps$1, 'id'> {}

export interface TableHeaderRowProps extends TableHeaderRowProps$1 {}

declare class TableHeaderRow
  extends PreactCustomElement
  implements TableHeaderRowProps
{
  constructor();
  connectedCallback(): void;
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$7]: TableHeaderRow;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$7]: HTMLAttributes<HTMLElement> & TableHeaderRowJSXProps;
    }
  }
}

declare const tagName$7 = 's-table-header-row';
export interface TableHeaderRowJSXProps
  extends Partial<TableHeaderRowProps>,
    Pick<TableHeaderRowProps$1, 'id'> {}

export interface TableRowProps extends TableRowProps$1 {}

declare class TableRow extends PreactCustomElement implements TableRowProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$6]: TableRow;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$6]: HTMLAttributes<HTMLElement> & TableRowJSXProps;
    }
  }
}

declare const tagName$6 = 's-table-row';
export interface TableRowJSXProps
  extends Partial<TableRowProps>,
    Pick<TableRowProps$1, 'id'> {}

export interface TextProps
  extends Required<
    Pick<TextProps$1, 'display' | 'accessibilityVisibility' | 'dir'>
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
  accessor display: TextProps['display'];
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
    [tagName$5]: Text;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$5]: HTMLAttributes<HTMLElement> & TextJSXProps;
    }
  }
}

declare const tagName$5 = 's-text';
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
    [tagName$4]: TextArea;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$4]: HTMLAttributes<HTMLElement> & TextAreaJSXProps;
    }
  }
}

declare const tagName$4 = 's-text-area';
export interface TextAreaJSXProps
  extends Partial<TextAreaProps>,
    Pick<TextAreaProps$1, 'id'>,
    FieldReactProps<typeof tagName$4> {}

export type TextFieldProps = PreactFieldProps<
  Required<TextFieldProps$1>['autocomplete']
> &
  Required<
    Pick<
      TextFieldProps$1,
      'accessory' | 'icon' | 'maxLength' | 'minLength' | 'prefix' | 'suffix'
    >
  >;

declare class TextField
  extends PreactFieldElement<TextFieldProps['autocomplete']>
  implements TextFieldProps
{
  accessor accessory: TextFieldProps['accessory'];
  accessor icon: TextFieldProps['icon'];
  accessor maxLength: TextFieldProps['maxLength'];
  accessor minLength: TextFieldProps['minLength'];
  accessor prefix: TextFieldProps['prefix'];
  accessor suffix: TextFieldProps['suffix'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$3]: TextField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$3]: HTMLAttributes<HTMLElement> & TextFieldJSXProps;
    }
  }
}

declare const tagName$3 = 's-text-field';
export interface TextFieldJSXProps
  extends Partial<Omit<TextFieldProps, 'accessory'>>,
    Pick<TextFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$3> {
  accessory?: ComponentChild;
}

declare const tagName$2 = 's-admin-action';
export interface AdminActionProps {
  /**
   * Sets the title of the Action container. If empty, the name of the extension will be used. Titles longer than 40 characters will be truncated.
   */
  title: string;
  /**
   * Sets the loading state of the action modal
   */
  loading?: boolean;
}
declare class AdminAction
  extends PreactCustomElement
  implements AdminActionProps
{
  title: string;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$2]: AdminAction;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$2]: HTMLAttributes<HTMLElement> & AdminActionJSXProps;
    }
  }
}

export interface AdminActionJSXProps extends Partial<AdminActionProps> {
  id?: string;
  primaryAction: ComponentChild;
  secondaryAction: ComponentChild;
}

declare const tagName$1 = 's-admin-block';
export interface AdminBlockProps {
  /**
   * The title to display at the top of the app block. If empty, the name of the extension will be used. Titles longer than 40 characters will be truncated.
   */
  title: string;
  /**
   * The summary to display when the app block is collapsed.
   */
  collapsedSummary: string;
}
declare class AdminBlock
  extends PreactCustomElement
  implements AdminBlockProps
{
  constructor();
  title: string;
  collapsedSummary: string;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$1]: AdminBlock;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$1]: HTMLAttributes<HTMLElement> & AdminBlockJSXProps;
    }
  }
}

export interface AdminBlockJSXProps extends Partial<AdminBlockProps> {
  id?: string;
}

declare const tagName = 's-admin-print-action';
export interface AdminPrintActionProps {
  /**
   * Sets the src URL of the preview and the document to print.
   * If not provided, the preview will show an empty state and the print button will be disabled.
   * HTML, PDFs and images are supported.
   */
  src: string;
}
declare class AdminPrintAction
  extends PreactCustomElement
  implements AdminPrintActionProps
{
  src: string;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: AdminPrintAction;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: HTMLAttributes<HTMLElement> & AdminPrintActionJSXProps;
    }
  }
}

export interface AdminPrintActionJSXProps
  extends Partial<AdminPrintActionProps> {
  id?: string;
}

export {
  AdminAction,
  type AdminActionJSXProps,
  AdminBlock,
  type AdminBlockJSXProps,
  AdminPrintAction,
  type AdminPrintActionJSXProps,
  Badge,
  type BadgeJSXProps,
  Banner,
  type BannerJSXProps,
  Box,
  type BoxJSXProps,
  Button,
  type ButtonJSXProps,
  Checkbox,
  type CheckboxJSXProps,
  Clickable,
  type ClickableJSXProps,
  Divider,
  type DividerJSXProps,
  Heading,
  type HeadingJSXProps,
  Icon,
  type IconJSXProps,
  Image,
  type ImageJSXProps,
  Link,
  type LinkJSXProps,
  NumberField,
  type NumberFieldJSXProps,
  Option,
  OptionGroup,
  type OptionGroupJSXProps,
  type OptionJSXProps,
  Paragraph,
  type ParagraphJSXProps,
  Section,
  type SectionJSXProps,
  Select,
  type SelectJSXProps,
  Spinner,
  type SpinnerJSXProps,
  Stack,
  type StackJSXProps,
  Table,
  TableBody,
  type TableBodyJSXProps,
  TableCell,
  type TableCellJSXProps,
  TableHeader,
  type TableHeaderJSXProps,
  TableHeaderRow,
  type TableHeaderRowJSXProps,
  type TableJSXProps,
  TableRow,
  type TableRowJSXProps,
  Text,
  TextArea,
  type TextAreaJSXProps,
  TextField,
  type TextFieldJSXProps,
  type TextJSXProps,
};
