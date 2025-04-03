/** VERSION: 0.45.0 **/

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */

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
type IconType = (typeof privateIconArray)[number];
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
interface ActionProps {
  /**
   * The text to use as the Action modal’s title. If not provided, the name of the extension will be used.
   */
  heading?: string;
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
type BorderRadiusKeyword = SizeKeyword | 'max' | 'none';
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
interface LinkBehaviorProps extends InteractionProps, FocusEventProps {
  /**
   * The URL to link to.
   *
   * - If set, it will navigate to the location specified by `href` after executing the `onClick` callback.
   * - If an `commandFor` is set, the `command` will be executed instead of the navigation.
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
   * '--auto': a default action for the target component.
   * '--show': shows the target component.
   * '--hide': hides the target component.
   * '--toggle': toggles the target component.
   * '--copy': copies the target ClipboardItem.
   *
   * @default '--auto'
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command
   */
  command?: '--auto' | '--show' | '--hide' | '--toggle' | '--copy';
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
interface MultipleInputProps extends BaseInputProps {
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
interface BaseCheckableProps extends BaseSelectableProps, InteractionProps {
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
    MultipleInputProps,
    FieldDetailsProps,
    FieldErrorProps {
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
type AutocompleteSection = `section-${string}`;
type AutocompleteGroup = 'shipping' | 'billing';
type AutocompleteAddressGroup = 'fax' | 'home' | 'mobile' | 'pager';
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
type EmailAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'email' | `${AutocompleteAddressGroup} email`
>;
type SpacingKeyword = SizeKeyword | 'none';
interface GapProps {
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
type BaselinePosition = 'baseline' | 'first baseline' | 'last baseline';
type ContentDistribution =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
type ContentPosition = 'center' | 'start' | 'end';
type OverflowPosition = `unsafe ${ContentPosition}` | `safe ${ContentPosition}`;
type JustifyItemsKeyword =
  | 'normal'
  | 'stretch'
  | BaselinePosition
  | OverflowPosition
  | ContentPosition;
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
type optionalSpace = '' | ' ';
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
   * - `auto`: the image will be displayed at its natural aspect ratio.
   *
   * The ratio will be respected even if the image hasn’t loaded yet unless it is set to `auto`. In that case, the
   * rendering will depends on the `inlineSize` value:
   *
   * - `inlineSize="fill"`: the aspect ratio will be `1/1`.
   * - `inlineSize="auto"`: the image will not render until it has loaded.
   *
   * Getters for this value should return `auto` or the ratio in `number / number` form. Input fractions should not be ‘simplified’.
   * For example, if the value is set as `50 /    100`, the getter returns `50 / 100`.
   * If the value is set as `0.5`, the getter returns `0.5 / 1`.
   *
   * @default 'auto'
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
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
type MoneyAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'transaction-amount'
>;
type CurrencyCode =
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
type NumberAutocompleteField = ExtractStrict<
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
interface PageProps$1 extends GlobalProps {
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
   * @default base
   * base corresponds to a set default inline size
   * `large` expands the component to match the width of the page header
   */
  inlineSize?: SizeKeyword;
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
type PasswordAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  'new-password' | 'current-password'
>;
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
   * @default 'inline'
   */
  direction?: 'inline' | 'block';
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
type URLAutocompleteField = ExtractStrict<
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
  | 'wrench'
  | 'x'
  | 'x-circle';
type Defaultize<Props, Defaults> =
  // Distribute over unions
  Props extends any // Make any properties included in Default optional
    ? Partial<Pick<Props, Extract<keyof Props, keyof Defaults>>> & // Include the remaining properties from Props
        Pick<Props, Exclude<keyof Props, keyof Defaults>>
    : never;
type Booleanish = boolean | 'true' | 'false';
interface ToggleEvent$1 extends Event {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ToggleEvent/newState) */
  readonly newState: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ToggleEvent/oldState) */
  readonly oldState: string;
}
declare var ToggleEvent$1: {
  prototype: ToggleEvent$1;
  new (type: string, eventInitDict?: ToggleEventInit$1): ToggleEvent$1;
};
interface ToggleEventInit$1 extends EventInit {
  newState?: string;
  oldState?: string;
}
declare namespace JSXInternal {
  export type LibraryManagedAttributes<Component, Props> = Component extends {
    defaultProps: infer Defaults;
  }
    ? Defaultize<Props, Defaults>
    : Props;
  export interface IntrinsicAttributes {
    key?: any;
  }
  export type ElementType<P = any> =
    | {
        [K in keyof IntrinsicElements]: P extends IntrinsicElements[K]
          ? K
          : never;
      }[keyof IntrinsicElements]
    | ComponentType<P>;
  export interface Element extends VNode<any> {}
  export type ElementClass = Component<any, any> | FunctionComponent<any>;
  export interface ElementAttributesProperty {
    props: any;
  }
  export interface ElementChildrenAttribute {
    children: any;
  }
  export type DOMCSSProperties = {
    [key in keyof Omit<
      CSSStyleDeclaration,
      | 'item'
      | 'setProperty'
      | 'removeProperty'
      | 'getPropertyValue'
      | 'getPropertyPriority'
    >]?: string | number | null | undefined;
  };
  export interface AllCSSProperties {
    [key: string]: string | number | null | undefined;
  }
  export interface CSSProperties extends AllCSSProperties, DOMCSSProperties {
    cssText?: string | null;
  }
  export interface SignalLike<T> {
    value: T;
    peek(): T;
    subscribe(fn: (value: T) => void): () => void;
  }
  export type Signalish<T> = T | SignalLike<T>;
  export type UnpackSignal<T> = T extends SignalLike<infer V> ? V : T;
  export interface SVGAttributes<Target extends EventTarget = SVGElement>
    extends HTMLAttributes<Target> {
    accentHeight?: Signalish<number | string | undefined>;
    accumulate?: Signalish<'none' | 'sum' | undefined>;
    additive?: Signalish<'replace' | 'sum' | undefined>;
    alignmentBaseline?: Signalish<
      | 'auto'
      | 'baseline'
      | 'before-edge'
      | 'text-before-edge'
      | 'middle'
      | 'central'
      | 'after-edge'
      | 'text-after-edge'
      | 'ideographic'
      | 'alphabetic'
      | 'hanging'
      | 'mathematical'
      | 'inherit'
      | undefined
    >;
    'alignment-baseline'?: Signalish<
      | 'auto'
      | 'baseline'
      | 'before-edge'
      | 'text-before-edge'
      | 'middle'
      | 'central'
      | 'after-edge'
      | 'text-after-edge'
      | 'ideographic'
      | 'alphabetic'
      | 'hanging'
      | 'mathematical'
      | 'inherit'
      | undefined
    >;
    allowReorder?: Signalish<'no' | 'yes' | undefined>;
    'allow-reorder'?: Signalish<'no' | 'yes' | undefined>;
    alphabetic?: Signalish<number | string | undefined>;
    amplitude?: Signalish<number | string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/arabic-form */
    arabicForm?: Signalish<
      'initial' | 'medial' | 'terminal' | 'isolated' | undefined
    >;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/arabic-form */
    'arabic-form'?: Signalish<
      'initial' | 'medial' | 'terminal' | 'isolated' | undefined
    >;
    ascent?: Signalish<number | string | undefined>;
    attributeName?: Signalish<string | undefined>;
    attributeType?: Signalish<string | undefined>;
    azimuth?: Signalish<number | string | undefined>;
    baseFrequency?: Signalish<number | string | undefined>;
    baselineShift?: Signalish<number | string | undefined>;
    'baseline-shift'?: Signalish<number | string | undefined>;
    baseProfile?: Signalish<number | string | undefined>;
    bbox?: Signalish<number | string | undefined>;
    begin?: Signalish<number | string | undefined>;
    bias?: Signalish<number | string | undefined>;
    by?: Signalish<number | string | undefined>;
    calcMode?: Signalish<number | string | undefined>;
    capHeight?: Signalish<number | string | undefined>;
    'cap-height'?: Signalish<number | string | undefined>;
    clip?: Signalish<number | string | undefined>;
    clipPath?: Signalish<string | undefined>;
    'clip-path'?: Signalish<string | undefined>;
    clipPathUnits?: Signalish<number | string | undefined>;
    clipRule?: Signalish<number | string | undefined>;
    'clip-rule'?: Signalish<number | string | undefined>;
    colorInterpolation?: Signalish<number | string | undefined>;
    'color-interpolation'?: Signalish<number | string | undefined>;
    colorInterpolationFilters?: Signalish<
      'auto' | 'sRGB' | 'linearRGB' | 'inherit' | undefined
    >;
    'color-interpolation-filters'?: Signalish<
      'auto' | 'sRGB' | 'linearRGB' | 'inherit' | undefined
    >;
    colorProfile?: Signalish<number | string | undefined>;
    'color-profile'?: Signalish<number | string | undefined>;
    colorRendering?: Signalish<number | string | undefined>;
    'color-rendering'?: Signalish<number | string | undefined>;
    contentScriptType?: Signalish<number | string | undefined>;
    'content-script-type'?: Signalish<number | string | undefined>;
    contentStyleType?: Signalish<number | string | undefined>;
    'content-style-type'?: Signalish<number | string | undefined>;
    cursor?: Signalish<number | string | undefined>;
    cx?: Signalish<number | string | undefined>;
    cy?: Signalish<number | string | undefined>;
    d?: Signalish<string | undefined>;
    decelerate?: Signalish<number | string | undefined>;
    descent?: Signalish<number | string | undefined>;
    diffuseConstant?: Signalish<number | string | undefined>;
    direction?: Signalish<number | string | undefined>;
    display?: Signalish<number | string | undefined>;
    divisor?: Signalish<number | string | undefined>;
    dominantBaseline?: Signalish<number | string | undefined>;
    'dominant-baseline'?: Signalish<number | string | undefined>;
    dur?: Signalish<number | string | undefined>;
    dx?: Signalish<number | string | undefined>;
    dy?: Signalish<number | string | undefined>;
    edgeMode?: Signalish<number | string | undefined>;
    elevation?: Signalish<number | string | undefined>;
    enableBackground?: Signalish<number | string | undefined>;
    'enable-background'?: Signalish<number | string | undefined>;
    end?: Signalish<number | string | undefined>;
    exponent?: Signalish<number | string | undefined>;
    externalResourcesRequired?: Signalish<number | string | undefined>;
    fill?: Signalish<string | undefined>;
    fillOpacity?: Signalish<number | string | undefined>;
    'fill-opacity'?: Signalish<number | string | undefined>;
    fillRule?: Signalish<'nonzero' | 'evenodd' | 'inherit' | undefined>;
    'fill-rule'?: Signalish<'nonzero' | 'evenodd' | 'inherit' | undefined>;
    filter?: Signalish<string | undefined>;
    filterRes?: Signalish<number | string | undefined>;
    filterUnits?: Signalish<number | string | undefined>;
    floodColor?: Signalish<number | string | undefined>;
    'flood-color'?: Signalish<number | string | undefined>;
    floodOpacity?: Signalish<number | string | undefined>;
    'flood-opacity'?: Signalish<number | string | undefined>;
    focusable?: Signalish<number | string | undefined>;
    fontFamily?: Signalish<string | undefined>;
    'font-family'?: Signalish<string | undefined>;
    fontSize?: Signalish<number | string | undefined>;
    'font-size'?: Signalish<number | string | undefined>;
    fontSizeAdjust?: Signalish<number | string | undefined>;
    'font-size-adjust'?: Signalish<number | string | undefined>;
    fontStretch?: Signalish<number | string | undefined>;
    'font-stretch'?: Signalish<number | string | undefined>;
    fontStyle?: Signalish<number | string | undefined>;
    'font-style'?: Signalish<number | string | undefined>;
    fontVariant?: Signalish<number | string | undefined>;
    'font-variant'?: Signalish<number | string | undefined>;
    fontWeight?: Signalish<number | string | undefined>;
    'font-weight'?: Signalish<number | string | undefined>;
    format?: Signalish<number | string | undefined>;
    from?: Signalish<number | string | undefined>;
    fx?: Signalish<number | string | undefined>;
    fy?: Signalish<number | string | undefined>;
    g1?: Signalish<number | string | undefined>;
    g2?: Signalish<number | string | undefined>;
    glyphName?: Signalish<number | string | undefined>;
    'glyph-name'?: Signalish<number | string | undefined>;
    glyphOrientationHorizontal?: Signalish<number | string | undefined>;
    'glyph-orientation-horizontal'?: Signalish<number | string | undefined>;
    glyphOrientationVertical?: Signalish<number | string | undefined>;
    'glyph-orientation-vertical'?: Signalish<number | string | undefined>;
    glyphRef?: Signalish<number | string | undefined>;
    gradientTransform?: Signalish<string | undefined>;
    gradientUnits?: Signalish<string | undefined>;
    hanging?: Signalish<number | string | undefined>;
    height?: Signalish<number | string | undefined>;
    horizAdvX?: Signalish<number | string | undefined>;
    'horiz-adv-x'?: Signalish<number | string | undefined>;
    horizOriginX?: Signalish<number | string | undefined>;
    'horiz-origin-x'?: Signalish<number | string | undefined>;
    href?: Signalish<string | undefined>;
    hreflang?: Signalish<string | undefined>;
    hrefLang?: Signalish<string | undefined>;
    ideographic?: Signalish<number | string | undefined>;
    imageRendering?: Signalish<number | string | undefined>;
    'image-rendering'?: Signalish<number | string | undefined>;
    in2?: Signalish<number | string | undefined>;
    in?: Signalish<string | undefined>;
    intercept?: Signalish<number | string | undefined>;
    k1?: Signalish<number | string | undefined>;
    k2?: Signalish<number | string | undefined>;
    k3?: Signalish<number | string | undefined>;
    k4?: Signalish<number | string | undefined>;
    k?: Signalish<number | string | undefined>;
    kernelMatrix?: Signalish<number | string | undefined>;
    kernelUnitLength?: Signalish<number | string | undefined>;
    kerning?: Signalish<number | string | undefined>;
    keyPoints?: Signalish<number | string | undefined>;
    keySplines?: Signalish<number | string | undefined>;
    keyTimes?: Signalish<number | string | undefined>;
    lengthAdjust?: Signalish<number | string | undefined>;
    letterSpacing?: Signalish<number | string | undefined>;
    'letter-spacing'?: Signalish<number | string | undefined>;
    lightingColor?: Signalish<number | string | undefined>;
    'lighting-color'?: Signalish<number | string | undefined>;
    limitingConeAngle?: Signalish<number | string | undefined>;
    local?: Signalish<number | string | undefined>;
    markerEnd?: Signalish<string | undefined>;
    'marker-end'?: Signalish<string | undefined>;
    markerHeight?: Signalish<number | string | undefined>;
    markerMid?: Signalish<string | undefined>;
    'marker-mid'?: Signalish<string | undefined>;
    markerStart?: Signalish<string | undefined>;
    'marker-start'?: Signalish<string | undefined>;
    markerUnits?: Signalish<number | string | undefined>;
    markerWidth?: Signalish<number | string | undefined>;
    mask?: Signalish<string | undefined>;
    maskContentUnits?: Signalish<number | string | undefined>;
    maskUnits?: Signalish<number | string | undefined>;
    mathematical?: Signalish<number | string | undefined>;
    mode?: Signalish<number | string | undefined>;
    numOctaves?: Signalish<number | string | undefined>;
    offset?: Signalish<number | string | undefined>;
    opacity?: Signalish<number | string | undefined>;
    operator?: Signalish<number | string | undefined>;
    order?: Signalish<number | string | undefined>;
    orient?: Signalish<number | string | undefined>;
    orientation?: Signalish<number | string | undefined>;
    origin?: Signalish<number | string | undefined>;
    overflow?: Signalish<number | string | undefined>;
    overlinePosition?: Signalish<number | string | undefined>;
    'overline-position'?: Signalish<number | string | undefined>;
    overlineThickness?: Signalish<number | string | undefined>;
    'overline-thickness'?: Signalish<number | string | undefined>;
    paintOrder?: Signalish<number | string | undefined>;
    'paint-order'?: Signalish<number | string | undefined>;
    panose1?: Signalish<number | string | undefined>;
    'panose-1'?: Signalish<number | string | undefined>;
    pathLength?: Signalish<number | string | undefined>;
    patternContentUnits?: Signalish<string | undefined>;
    patternTransform?: Signalish<number | string | undefined>;
    patternUnits?: Signalish<string | undefined>;
    pointerEvents?: Signalish<number | string | undefined>;
    'pointer-events'?: Signalish<number | string | undefined>;
    points?: Signalish<string | undefined>;
    pointsAtX?: Signalish<number | string | undefined>;
    pointsAtY?: Signalish<number | string | undefined>;
    pointsAtZ?: Signalish<number | string | undefined>;
    preserveAlpha?: Signalish<number | string | undefined>;
    preserveAspectRatio?: Signalish<string | undefined>;
    primitiveUnits?: Signalish<number | string | undefined>;
    r?: Signalish<number | string | undefined>;
    radius?: Signalish<number | string | undefined>;
    refX?: Signalish<number | string | undefined>;
    refY?: Signalish<number | string | undefined>;
    renderingIntent?: Signalish<number | string | undefined>;
    'rendering-intent'?: Signalish<number | string | undefined>;
    repeatCount?: Signalish<number | string | undefined>;
    'repeat-count'?: Signalish<number | string | undefined>;
    repeatDur?: Signalish<number | string | undefined>;
    'repeat-dur'?: Signalish<number | string | undefined>;
    requiredExtensions?: Signalish<number | string | undefined>;
    requiredFeatures?: Signalish<number | string | undefined>;
    restart?: Signalish<number | string | undefined>;
    result?: Signalish<string | undefined>;
    rotate?: Signalish<number | string | undefined>;
    rx?: Signalish<number | string | undefined>;
    ry?: Signalish<number | string | undefined>;
    scale?: Signalish<number | string | undefined>;
    seed?: Signalish<number | string | undefined>;
    shapeRendering?: Signalish<number | string | undefined>;
    'shape-rendering'?: Signalish<number | string | undefined>;
    slope?: Signalish<number | string | undefined>;
    spacing?: Signalish<number | string | undefined>;
    specularConstant?: Signalish<number | string | undefined>;
    specularExponent?: Signalish<number | string | undefined>;
    speed?: Signalish<number | string | undefined>;
    spreadMethod?: Signalish<string | undefined>;
    startOffset?: Signalish<number | string | undefined>;
    stdDeviation?: Signalish<number | string | undefined>;
    stemh?: Signalish<number | string | undefined>;
    stemv?: Signalish<number | string | undefined>;
    stitchTiles?: Signalish<number | string | undefined>;
    stopColor?: Signalish<string | undefined>;
    'stop-color'?: Signalish<string | undefined>;
    stopOpacity?: Signalish<number | string | undefined>;
    'stop-opacity'?: Signalish<number | string | undefined>;
    strikethroughPosition?: Signalish<number | string | undefined>;
    'strikethrough-position'?: Signalish<number | string | undefined>;
    strikethroughThickness?: Signalish<number | string | undefined>;
    'strikethrough-thickness'?: Signalish<number | string | undefined>;
    string?: Signalish<number | string | undefined>;
    stroke?: Signalish<string | undefined>;
    strokeDasharray?: Signalish<string | number | undefined>;
    'stroke-dasharray'?: Signalish<string | number | undefined>;
    strokeDashoffset?: Signalish<string | number | undefined>;
    'stroke-dashoffset'?: Signalish<string | number | undefined>;
    strokeLinecap?: Signalish<
      'butt' | 'round' | 'square' | 'inherit' | undefined
    >;
    'stroke-linecap'?: Signalish<
      'butt' | 'round' | 'square' | 'inherit' | undefined
    >;
    strokeLinejoin?: Signalish<
      'miter' | 'round' | 'bevel' | 'inherit' | undefined
    >;
    'stroke-linejoin'?: Signalish<
      'miter' | 'round' | 'bevel' | 'inherit' | undefined
    >;
    strokeMiterlimit?: Signalish<string | number | undefined>;
    'stroke-miterlimit'?: Signalish<string | number | undefined>;
    strokeOpacity?: Signalish<number | string | undefined>;
    'stroke-opacity'?: Signalish<number | string | undefined>;
    strokeWidth?: Signalish<number | string | undefined>;
    'stroke-width'?: Signalish<number | string | undefined>;
    surfaceScale?: Signalish<number | string | undefined>;
    systemLanguage?: Signalish<number | string | undefined>;
    tableValues?: Signalish<number | string | undefined>;
    targetX?: Signalish<number | string | undefined>;
    targetY?: Signalish<number | string | undefined>;
    textAnchor?: Signalish<string | undefined>;
    'text-anchor'?: Signalish<string | undefined>;
    textDecoration?: Signalish<number | string | undefined>;
    'text-decoration'?: Signalish<number | string | undefined>;
    textLength?: Signalish<number | string | undefined>;
    textRendering?: Signalish<number | string | undefined>;
    'text-rendering'?: Signalish<number | string | undefined>;
    to?: Signalish<number | string | undefined>;
    transform?: Signalish<string | undefined>;
    transformOrigin?: Signalish<string | undefined>;
    'transform-origin'?: Signalish<string | undefined>;
    type?: Signalish<string | undefined>;
    u1?: Signalish<number | string | undefined>;
    u2?: Signalish<number | string | undefined>;
    underlinePosition?: Signalish<number | string | undefined>;
    'underline-position'?: Signalish<number | string | undefined>;
    underlineThickness?: Signalish<number | string | undefined>;
    'underline-thickness'?: Signalish<number | string | undefined>;
    unicode?: Signalish<number | string | undefined>;
    unicodeBidi?: Signalish<number | string | undefined>;
    'unicode-bidi'?: Signalish<number | string | undefined>;
    unicodeRange?: Signalish<number | string | undefined>;
    'unicode-range'?: Signalish<number | string | undefined>;
    unitsPerEm?: Signalish<number | string | undefined>;
    'units-per-em'?: Signalish<number | string | undefined>;
    vAlphabetic?: Signalish<number | string | undefined>;
    'v-alphabetic'?: Signalish<number | string | undefined>;
    values?: Signalish<string | undefined>;
    vectorEffect?: Signalish<number | string | undefined>;
    'vector-effect'?: Signalish<number | string | undefined>;
    version?: Signalish<string | undefined>;
    vertAdvY?: Signalish<number | string | undefined>;
    'vert-adv-y'?: Signalish<number | string | undefined>;
    vertOriginX?: Signalish<number | string | undefined>;
    'vert-origin-x'?: Signalish<number | string | undefined>;
    vertOriginY?: Signalish<number | string | undefined>;
    'vert-origin-y'?: Signalish<number | string | undefined>;
    vHanging?: Signalish<number | string | undefined>;
    'v-hanging'?: Signalish<number | string | undefined>;
    vIdeographic?: Signalish<number | string | undefined>;
    'v-ideographic'?: Signalish<number | string | undefined>;
    viewBox?: Signalish<string | undefined>;
    viewTarget?: Signalish<number | string | undefined>;
    visibility?: Signalish<number | string | undefined>;
    vMathematical?: Signalish<number | string | undefined>;
    'v-mathematical'?: Signalish<number | string | undefined>;
    width?: Signalish<number | string | undefined>;
    wordSpacing?: Signalish<number | string | undefined>;
    'word-spacing'?: Signalish<number | string | undefined>;
    writingMode?: Signalish<number | string | undefined>;
    'writing-mode'?: Signalish<number | string | undefined>;
    x1?: Signalish<number | string | undefined>;
    x2?: Signalish<number | string | undefined>;
    x?: Signalish<number | string | undefined>;
    xChannelSelector?: Signalish<string | undefined>;
    xHeight?: Signalish<number | string | undefined>;
    'x-height'?: Signalish<number | string | undefined>;
    xlinkActuate?: Signalish<string | undefined>;
    'xlink:actuate'?: Signalish<SVGAttributes['xlinkActuate']>;
    xlinkArcrole?: Signalish<string | undefined>;
    'xlink:arcrole'?: Signalish<string | undefined>;
    xlinkHref?: Signalish<string | undefined>;
    'xlink:href'?: Signalish<string | undefined>;
    xlinkRole?: Signalish<string | undefined>;
    'xlink:role'?: Signalish<string | undefined>;
    xlinkShow?: Signalish<string | undefined>;
    'xlink:show'?: Signalish<string | undefined>;
    xlinkTitle?: Signalish<string | undefined>;
    'xlink:title'?: Signalish<string | undefined>;
    xlinkType?: Signalish<string | undefined>;
    'xlink:type'?: Signalish<string | undefined>;
    xmlBase?: Signalish<string | undefined>;
    'xml:base'?: Signalish<string | undefined>;
    xmlLang?: Signalish<string | undefined>;
    'xml:lang'?: Signalish<string | undefined>;
    xmlns?: Signalish<string | undefined>;
    xmlnsXlink?: Signalish<string | undefined>;
    xmlSpace?: Signalish<string | undefined>;
    'xml:space'?: Signalish<string | undefined>;
    y1?: Signalish<number | string | undefined>;
    y2?: Signalish<number | string | undefined>;
    y?: Signalish<number | string | undefined>;
    yChannelSelector?: Signalish<string | undefined>;
    z?: Signalish<number | string | undefined>;
    zoomAndPan?: Signalish<string | undefined>;
  }
  export interface PathAttributes {
    d: string;
  }
  export type TargetedEvent<
    Target extends EventTarget = EventTarget,
    TypedEvent extends Event = Event,
  > = Omit<TypedEvent, 'currentTarget'> & {
    readonly currentTarget: Target;
  };
  export type TargetedAnimationEvent<Target extends EventTarget> =
    TargetedEvent<Target, AnimationEvent>;
  export type TargetedClipboardEvent<Target extends EventTarget> =
    TargetedEvent<Target, ClipboardEvent>;
  export type TargetedCompositionEvent<Target extends EventTarget> =
    TargetedEvent<Target, CompositionEvent>;
  export type TargetedDragEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    DragEvent
  >;
  export type TargetedFocusEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    FocusEvent
  >;
  export type TargetedInputEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    InputEvent
  >;
  export type TargetedKeyboardEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    KeyboardEvent
  >;
  export type TargetedMouseEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    MouseEvent
  >;
  export type TargetedPointerEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    PointerEvent
  >;
  export type TargetedSubmitEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    SubmitEvent
  >;
  export type TargetedTouchEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    TouchEvent
  >;
  export type TargetedToggleEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    ToggleEvent$1
  >;
  export type TargetedTransitionEvent<Target extends EventTarget> =
    TargetedEvent<Target, TransitionEvent>;
  export type TargetedUIEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    UIEvent
  >;
  export type TargetedWheelEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    WheelEvent
  >;
  export type TargetedPictureInPictureEvent<Target extends EventTarget> =
    TargetedEvent<Target, PictureInPictureEvent>;
  export type EventHandler<E extends TargetedEvent> = {
    bivarianceHack(event: E): void;
  }['bivarianceHack'];
  export type AnimationEventHandler<Target extends EventTarget> = EventHandler<
    TargetedAnimationEvent<Target>
  >;
  export type ClipboardEventHandler<Target extends EventTarget> = EventHandler<
    TargetedClipboardEvent<Target>
  >;
  export type CompositionEventHandler<Target extends EventTarget> =
    EventHandler<TargetedCompositionEvent<Target>>;
  export type DragEventHandler<Target extends EventTarget> = EventHandler<
    TargetedDragEvent<Target>
  >;
  export type ToggleEventHandler<Target extends EventTarget> = EventHandler<
    TargetedToggleEvent<Target>
  >;
  export type FocusEventHandler<Target extends EventTarget> = EventHandler<
    TargetedFocusEvent<Target>
  >;
  export type GenericEventHandler<Target extends EventTarget> = EventHandler<
    TargetedEvent<Target>
  >;
  export type InputEventHandler<Target extends EventTarget> = EventHandler<
    TargetedInputEvent<Target>
  >;
  export type KeyboardEventHandler<Target extends EventTarget> = EventHandler<
    TargetedKeyboardEvent<Target>
  >;
  export type MouseEventHandler<Target extends EventTarget> = EventHandler<
    TargetedMouseEvent<Target>
  >;
  export type PointerEventHandler<Target extends EventTarget> = EventHandler<
    TargetedPointerEvent<Target>
  >;
  export type SubmitEventHandler<Target extends EventTarget> = EventHandler<
    TargetedSubmitEvent<Target>
  >;
  export type TouchEventHandler<Target extends EventTarget> = EventHandler<
    TargetedTouchEvent<Target>
  >;
  export type TransitionEventHandler<Target extends EventTarget> = EventHandler<
    TargetedTransitionEvent<Target>
  >;
  export type UIEventHandler<Target extends EventTarget> = EventHandler<
    TargetedUIEvent<Target>
  >;
  export type WheelEventHandler<Target extends EventTarget> = EventHandler<
    TargetedWheelEvent<Target>
  >;
  export type PictureInPictureEventHandler<Target extends EventTarget> =
    EventHandler<TargetedPictureInPictureEvent<Target>>;
  export interface DOMAttributes<Target extends EventTarget>
    extends PreactDOMAttributes {
    // Image Events
    onLoad?: GenericEventHandler<Target> | undefined;
    onLoadCapture?: GenericEventHandler<Target> | undefined;
    onError?: GenericEventHandler<Target> | undefined;
    onErrorCapture?: GenericEventHandler<Target> | undefined;
    // Clipboard Events
    onCopy?: ClipboardEventHandler<Target> | undefined;
    onCopyCapture?: ClipboardEventHandler<Target> | undefined;
    onCut?: ClipboardEventHandler<Target> | undefined;
    onCutCapture?: ClipboardEventHandler<Target> | undefined;
    onPaste?: ClipboardEventHandler<Target> | undefined;
    onPasteCapture?: ClipboardEventHandler<Target> | undefined;
    // Composition Events
    onCompositionEnd?: CompositionEventHandler<Target> | undefined;
    onCompositionEndCapture?: CompositionEventHandler<Target> | undefined;
    onCompositionStart?: CompositionEventHandler<Target> | undefined;
    onCompositionStartCapture?: CompositionEventHandler<Target> | undefined;
    onCompositionUpdate?: CompositionEventHandler<Target> | undefined;
    onCompositionUpdateCapture?: CompositionEventHandler<Target> | undefined;
    // Details Events
    onToggle?: ToggleEventHandler<Target> | undefined;
    // Dialog Events
    onClose?: GenericEventHandler<Target> | undefined;
    onCancel?: GenericEventHandler<Target> | undefined;
    // Focus Events
    onFocus?: FocusEventHandler<Target> | undefined;
    onFocusCapture?: FocusEventHandler<Target> | undefined;
    onFocusIn?: FocusEventHandler<Target> | undefined;
    onFocusInCapture?: FocusEventHandler<Target> | undefined;
    onFocusOut?: FocusEventHandler<Target> | undefined;
    onFocusOutCapture?: FocusEventHandler<Target> | undefined;
    onBlur?: FocusEventHandler<Target> | undefined;
    onBlurCapture?: FocusEventHandler<Target> | undefined;
    // Form Events
    onChange?: GenericEventHandler<Target> | undefined;
    onChangeCapture?: GenericEventHandler<Target> | undefined;
    onInput?: InputEventHandler<Target> | undefined;
    onInputCapture?: InputEventHandler<Target> | undefined;
    onBeforeInput?: InputEventHandler<Target> | undefined;
    onBeforeInputCapture?: InputEventHandler<Target> | undefined;
    onSearch?: GenericEventHandler<Target> | undefined;
    onSearchCapture?: GenericEventHandler<Target> | undefined;
    onSubmit?: SubmitEventHandler<Target> | undefined;
    onSubmitCapture?: SubmitEventHandler<Target> | undefined;
    onInvalid?: GenericEventHandler<Target> | undefined;
    onInvalidCapture?: GenericEventHandler<Target> | undefined;
    onReset?: GenericEventHandler<Target> | undefined;
    onResetCapture?: GenericEventHandler<Target> | undefined;
    onFormData?: GenericEventHandler<Target> | undefined;
    onFormDataCapture?: GenericEventHandler<Target> | undefined;
    // Keyboard Events
    onKeyDown?: KeyboardEventHandler<Target> | undefined;
    onKeyDownCapture?: KeyboardEventHandler<Target> | undefined;
    onKeyPress?: KeyboardEventHandler<Target> | undefined;
    onKeyPressCapture?: KeyboardEventHandler<Target> | undefined;
    onKeyUp?: KeyboardEventHandler<Target> | undefined;
    onKeyUpCapture?: KeyboardEventHandler<Target> | undefined;
    // Media Events
    onAbort?: GenericEventHandler<Target> | undefined;
    onAbortCapture?: GenericEventHandler<Target> | undefined;
    onCanPlay?: GenericEventHandler<Target> | undefined;
    onCanPlayCapture?: GenericEventHandler<Target> | undefined;
    onCanPlayThrough?: GenericEventHandler<Target> | undefined;
    onCanPlayThroughCapture?: GenericEventHandler<Target> | undefined;
    onDurationChange?: GenericEventHandler<Target> | undefined;
    onDurationChangeCapture?: GenericEventHandler<Target> | undefined;
    onEmptied?: GenericEventHandler<Target> | undefined;
    onEmptiedCapture?: GenericEventHandler<Target> | undefined;
    onEncrypted?: GenericEventHandler<Target> | undefined;
    onEncryptedCapture?: GenericEventHandler<Target> | undefined;
    onEnded?: GenericEventHandler<Target> | undefined;
    onEndedCapture?: GenericEventHandler<Target> | undefined;
    onLoadedData?: GenericEventHandler<Target> | undefined;
    onLoadedDataCapture?: GenericEventHandler<Target> | undefined;
    onLoadedMetadata?: GenericEventHandler<Target> | undefined;
    onLoadedMetadataCapture?: GenericEventHandler<Target> | undefined;
    onLoadStart?: GenericEventHandler<Target> | undefined;
    onLoadStartCapture?: GenericEventHandler<Target> | undefined;
    onPause?: GenericEventHandler<Target> | undefined;
    onPauseCapture?: GenericEventHandler<Target> | undefined;
    onPlay?: GenericEventHandler<Target> | undefined;
    onPlayCapture?: GenericEventHandler<Target> | undefined;
    onPlaying?: GenericEventHandler<Target> | undefined;
    onPlayingCapture?: GenericEventHandler<Target> | undefined;
    onProgress?: GenericEventHandler<Target> | undefined;
    onProgressCapture?: GenericEventHandler<Target> | undefined;
    onRateChange?: GenericEventHandler<Target> | undefined;
    onRateChangeCapture?: GenericEventHandler<Target> | undefined;
    onSeeked?: GenericEventHandler<Target> | undefined;
    onSeekedCapture?: GenericEventHandler<Target> | undefined;
    onSeeking?: GenericEventHandler<Target> | undefined;
    onSeekingCapture?: GenericEventHandler<Target> | undefined;
    onStalled?: GenericEventHandler<Target> | undefined;
    onStalledCapture?: GenericEventHandler<Target> | undefined;
    onSuspend?: GenericEventHandler<Target> | undefined;
    onSuspendCapture?: GenericEventHandler<Target> | undefined;
    onTimeUpdate?: GenericEventHandler<Target> | undefined;
    onTimeUpdateCapture?: GenericEventHandler<Target> | undefined;
    onVolumeChange?: GenericEventHandler<Target> | undefined;
    onVolumeChangeCapture?: GenericEventHandler<Target> | undefined;
    onWaiting?: GenericEventHandler<Target> | undefined;
    onWaitingCapture?: GenericEventHandler<Target> | undefined;
    // MouseEvents
    onClick?: MouseEventHandler<Target> | undefined;
    onClickCapture?: MouseEventHandler<Target> | undefined;
    onContextMenu?: MouseEventHandler<Target> | undefined;
    onContextMenuCapture?: MouseEventHandler<Target> | undefined;
    onDblClick?: MouseEventHandler<Target> | undefined;
    onDblClickCapture?: MouseEventHandler<Target> | undefined;
    onDrag?: DragEventHandler<Target> | undefined;
    onDragCapture?: DragEventHandler<Target> | undefined;
    onDragEnd?: DragEventHandler<Target> | undefined;
    onDragEndCapture?: DragEventHandler<Target> | undefined;
    onDragEnter?: DragEventHandler<Target> | undefined;
    onDragEnterCapture?: DragEventHandler<Target> | undefined;
    onDragExit?: DragEventHandler<Target> | undefined;
    onDragExitCapture?: DragEventHandler<Target> | undefined;
    onDragLeave?: DragEventHandler<Target> | undefined;
    onDragLeaveCapture?: DragEventHandler<Target> | undefined;
    onDragOver?: DragEventHandler<Target> | undefined;
    onDragOverCapture?: DragEventHandler<Target> | undefined;
    onDragStart?: DragEventHandler<Target> | undefined;
    onDragStartCapture?: DragEventHandler<Target> | undefined;
    onDrop?: DragEventHandler<Target> | undefined;
    onDropCapture?: DragEventHandler<Target> | undefined;
    onMouseDown?: MouseEventHandler<Target> | undefined;
    onMouseDownCapture?: MouseEventHandler<Target> | undefined;
    onMouseEnter?: MouseEventHandler<Target> | undefined;
    onMouseEnterCapture?: MouseEventHandler<Target> | undefined;
    onMouseLeave?: MouseEventHandler<Target> | undefined;
    onMouseLeaveCapture?: MouseEventHandler<Target> | undefined;
    onMouseMove?: MouseEventHandler<Target> | undefined;
    onMouseMoveCapture?: MouseEventHandler<Target> | undefined;
    onMouseOut?: MouseEventHandler<Target> | undefined;
    onMouseOutCapture?: MouseEventHandler<Target> | undefined;
    onMouseOver?: MouseEventHandler<Target> | undefined;
    onMouseOverCapture?: MouseEventHandler<Target> | undefined;
    onMouseUp?: MouseEventHandler<Target> | undefined;
    onMouseUpCapture?: MouseEventHandler<Target> | undefined;
    // Selection Events
    onSelect?: GenericEventHandler<Target> | undefined;
    onSelectCapture?: GenericEventHandler<Target> | undefined;
    // Touch Events
    onTouchCancel?: TouchEventHandler<Target> | undefined;
    onTouchCancelCapture?: TouchEventHandler<Target> | undefined;
    onTouchEnd?: TouchEventHandler<Target> | undefined;
    onTouchEndCapture?: TouchEventHandler<Target> | undefined;
    onTouchMove?: TouchEventHandler<Target> | undefined;
    onTouchMoveCapture?: TouchEventHandler<Target> | undefined;
    onTouchStart?: TouchEventHandler<Target> | undefined;
    onTouchStartCapture?: TouchEventHandler<Target> | undefined;
    // Pointer Events
    onPointerOver?: PointerEventHandler<Target> | undefined;
    onPointerOverCapture?: PointerEventHandler<Target> | undefined;
    onPointerEnter?: PointerEventHandler<Target> | undefined;
    onPointerEnterCapture?: PointerEventHandler<Target> | undefined;
    onPointerDown?: PointerEventHandler<Target> | undefined;
    onPointerDownCapture?: PointerEventHandler<Target> | undefined;
    onPointerMove?: PointerEventHandler<Target> | undefined;
    onPointerMoveCapture?: PointerEventHandler<Target> | undefined;
    onPointerUp?: PointerEventHandler<Target> | undefined;
    onPointerUpCapture?: PointerEventHandler<Target> | undefined;
    onPointerCancel?: PointerEventHandler<Target> | undefined;
    onPointerCancelCapture?: PointerEventHandler<Target> | undefined;
    onPointerOut?: PointerEventHandler<Target> | undefined;
    onPointerOutCapture?: PointerEventHandler<Target> | undefined;
    onPointerLeave?: PointerEventHandler<Target> | undefined;
    onPointerLeaveCapture?: PointerEventHandler<Target> | undefined;
    onGotPointerCapture?: PointerEventHandler<Target> | undefined;
    onGotPointerCaptureCapture?: PointerEventHandler<Target> | undefined;
    onLostPointerCapture?: PointerEventHandler<Target> | undefined;
    onLostPointerCaptureCapture?: PointerEventHandler<Target> | undefined;
    // UI Events
    onScroll?: UIEventHandler<Target> | undefined;
    onScrollEnd?: UIEventHandler<Target> | undefined;
    onScrollCapture?: UIEventHandler<Target> | undefined;
    // Wheel Events
    onWheel?: WheelEventHandler<Target> | undefined;
    onWheelCapture?: WheelEventHandler<Target> | undefined;
    // Animation Events
    onAnimationStart?: AnimationEventHandler<Target> | undefined;
    onAnimationStartCapture?: AnimationEventHandler<Target> | undefined;
    onAnimationEnd?: AnimationEventHandler<Target> | undefined;
    onAnimationEndCapture?: AnimationEventHandler<Target> | undefined;
    onAnimationIteration?: AnimationEventHandler<Target> | undefined;
    onAnimationIterationCapture?: AnimationEventHandler<Target> | undefined;
    // Transition Events
    onTransitionCancel?: TransitionEventHandler<Target>;
    onTransitionCancelCapture?: TransitionEventHandler<Target>;
    onTransitionEnd?: TransitionEventHandler<Target>;
    onTransitionEndCapture?: TransitionEventHandler<Target>;
    onTransitionRun?: TransitionEventHandler<Target>;
    onTransitionRunCapture?: TransitionEventHandler<Target>;
    onTransitionStart?: TransitionEventHandler<Target>;
    onTransitionStartCapture?: TransitionEventHandler<Target>;
    // PictureInPicture Events
    onEnterPictureInPicture?: PictureInPictureEventHandler<Target>;
    onEnterPictureInPictureCapture?: PictureInPictureEventHandler<Target>;
    onLeavePictureInPicture?: PictureInPictureEventHandler<Target>;
    onLeavePictureInPictureCapture?: PictureInPictureEventHandler<Target>;
    onResize?: PictureInPictureEventHandler<Target>;
    onResizeCapture?: PictureInPictureEventHandler<Target>;
  }
  // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
  export interface AriaAttributes {
    /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
    'aria-activedescendant'?: Signalish<string | undefined>;
    /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
    'aria-atomic'?: Signalish<Booleanish | undefined>;
    /**
     * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
     * presented if they are made.
     */
    'aria-autocomplete'?: Signalish<
      'none' | 'inline' | 'list' | 'both' | undefined
    >;
    /**
     * Defines a string value that labels the current element, which is intended to be converted into Braille.
     * @see aria-label.
     */
    'aria-braillelabel'?: Signalish<string | undefined>;
    /**
     * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
     * @see aria-roledescription.
     */
    'aria-brailleroledescription'?: Signalish<string | undefined>;
    /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
    'aria-busy'?: Signalish<Booleanish | undefined>;
    /**
     * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
     * @see aria-pressed
     * @see aria-selected.
     */
    'aria-checked'?: Signalish<Booleanish | 'mixed' | undefined>;
    /**
     * Defines the total number of columns in a table, grid, or treegrid.
     * @see aria-colindex.
     */
    'aria-colcount'?: Signalish<number | undefined>;
    /**
     * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
     * @see aria-colcount
     * @see aria-colspan.
     */
    'aria-colindex'?: Signalish<number | undefined>;
    /**
     * Defines a human readable text alternative of aria-colindex.
     * @see aria-rowindextext.
     */
    'aria-colindextext'?: Signalish<string | undefined>;
    /**
     * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see aria-colindex
     * @see aria-rowspan.
     */
    'aria-colspan'?: Signalish<number | undefined>;
    /**
     * Identifies the element (or elements) whose contents or presence are controlled by the current element.
     * @see aria-owns.
     */
    'aria-controls'?: Signalish<string | undefined>;
    /** Indicates the element that represents the current item within a container or set of related elements. */
    'aria-current'?: Signalish<
      Booleanish | 'page' | 'step' | 'location' | 'date' | 'time' | undefined
    >;
    /**
     * Identifies the element (or elements) that describes the object.
     * @see aria-labelledby
     */
    'aria-describedby'?: Signalish<string | undefined>;
    /**
     * Defines a string value that describes or annotates the current element.
     * @see related aria-describedby.
     */
    'aria-description'?: Signalish<string | undefined>;
    /**
     * Identifies the element that provides a detailed, extended description for the object.
     * @see aria-describedby.
     */
    'aria-details'?: Signalish<string | undefined>;
    /**
     * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
     * @see aria-hidden
     * @see aria-readonly.
     */
    'aria-disabled'?: Signalish<Booleanish | undefined>;
    /**
     * Indicates what functions can be performed when a dragged object is released on the drop target.
     * @deprecated in ARIA 1.1
     */
    'aria-dropeffect'?: Signalish<
      'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup' | undefined
    >;
    /**
     * Identifies the element that provides an error message for the object.
     * @see aria-invalid
     * @see aria-describedby.
     */
    'aria-errormessage'?: Signalish<string | undefined>;
    /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
    'aria-expanded'?: Signalish<Booleanish | undefined>;
    /**
     * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
     * allows assistive technology to override the general default of reading in document source order.
     */
    'aria-flowto'?: Signalish<string | undefined>;
    /**
     * Indicates an element's "grabbed" state in a drag-and-drop operation.
     * @deprecated in ARIA 1.1
     */
    'aria-grabbed'?: Signalish<Booleanish | undefined>;
    /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
    'aria-haspopup'?: Signalish<
      Booleanish | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | undefined
    >;
    /**
     * Indicates whether the element is exposed to an accessibility API.
     * @see aria-disabled.
     */
    'aria-hidden'?: Signalish<Booleanish | undefined>;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     * @see aria-errormessage.
     */
    'aria-invalid'?: Signalish<Booleanish | 'grammar' | 'spelling' | undefined>;
    /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
    'aria-keyshortcuts'?: Signalish<string | undefined>;
    /**
     * Defines a string value that labels the current element.
     * @see aria-labelledby.
     */
    'aria-label'?: Signalish<string | undefined>;
    /**
     * Identifies the element (or elements) that labels the current element.
     * @see aria-describedby.
     */
    'aria-labelledby'?: Signalish<string | undefined>;
    /** Defines the hierarchical level of an element within a structure. */
    'aria-level'?: Signalish<number | undefined>;
    /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
    'aria-live'?: Signalish<'off' | 'assertive' | 'polite' | undefined>;
    /** Indicates whether an element is modal when displayed. */
    'aria-modal'?: Signalish<Booleanish | undefined>;
    /** Indicates whether a text box accepts multiple lines of input or only a single line. */
    'aria-multiline'?: Signalish<Booleanish | undefined>;
    /** Indicates that the user may select more than one item from the current selectable descendants. */
    'aria-multiselectable'?: Signalish<Booleanish | undefined>;
    /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
    'aria-orientation'?: Signalish<'horizontal' | 'vertical' | undefined>;
    /**
     * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
     * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
     * @see aria-controls.
     */
    'aria-owns'?: Signalish<string | undefined>;
    /**
     * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
     * A hint could be a sample value or a brief description of the expected format.
     */
    'aria-placeholder'?: Signalish<string | undefined>;
    /**
     * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see aria-setsize.
     */
    'aria-posinset'?: Signalish<number | undefined>;
    /**
     * Indicates the current "pressed" state of toggle buttons.
     * @see aria-checked
     * @see aria-selected.
     */
    'aria-pressed'?: Signalish<Booleanish | 'mixed' | undefined>;
    /**
     * Indicates that the element is not editable, but is otherwise operable.
     * @see aria-disabled.
     */
    'aria-readonly'?: Signalish<Booleanish | undefined>;
    /**
     * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
     * @see aria-atomic.
     */
    'aria-relevant'?: Signalish<
      | 'additions'
      | 'additions removals'
      | 'additions text'
      | 'all'
      | 'removals'
      | 'removals additions'
      | 'removals text'
      | 'text'
      | 'text additions'
      | 'text removals'
      | undefined
    >;
    /** Indicates that user input is required on the element before a form may be submitted. */
    'aria-required'?: Signalish<Booleanish | undefined>;
    /** Defines a human-readable, author-localized description for the role of an element. */
    'aria-roledescription'?: Signalish<string | undefined>;
    /**
     * Defines the total number of rows in a table, grid, or treegrid.
     * @see aria-rowindex.
     */
    'aria-rowcount'?: Signalish<number | undefined>;
    /**
     * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
     * @see aria-rowcount
     * @see aria-rowspan.
     */
    'aria-rowindex'?: Signalish<number | undefined>;
    /**
     * Defines a human readable text alternative of aria-rowindex.
     * @see aria-colindextext.
     */
    'aria-rowindextext'?: Signalish<string | undefined>;
    /**
     * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see aria-rowindex
     * @see aria-colspan.
     */
    'aria-rowspan'?: Signalish<number | undefined>;
    /**
     * Indicates the current "selected" state of various widgets.
     * @see aria-checked
     * @see aria-pressed.
     */
    'aria-selected'?: Signalish<Booleanish | undefined>;
    /**
     * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see aria-posinset.
     */
    'aria-setsize'?: Signalish<number | undefined>;
    /** Indicates if items in a table or grid are sorted in ascending or descending order. */
    'aria-sort'?: Signalish<
      'none' | 'ascending' | 'descending' | 'other' | undefined
    >;
    /** Defines the maximum allowed value for a range widget. */
    'aria-valuemax'?: Signalish<number | undefined>;
    /** Defines the minimum allowed value for a range widget. */
    'aria-valuemin'?: Signalish<number | undefined>;
    /**
     * Defines the current value for a range widget.
     * @see aria-valuetext.
     */
    'aria-valuenow'?: Signalish<number | undefined>;
    /** Defines the human readable text alternative of aria-valuenow for a range widget. */
    'aria-valuetext'?: Signalish<string | undefined>;
  }
  // All the WAI-ARIA 1.2 role attribute values from https://www.w3.org/TR/wai-aria-1.2/#role_definitions
  export type WAIAriaRole =
    | 'alert'
    | 'alertdialog'
    | 'application'
    | 'article'
    | 'banner'
    | 'blockquote'
    | 'button'
    | 'caption'
    | 'cell'
    | 'checkbox'
    | 'code'
    | 'columnheader'
    | 'combobox'
    | 'command'
    | 'complementary'
    | 'composite'
    | 'contentinfo'
    | 'definition'
    | 'deletion'
    | 'dialog'
    | 'directory'
    | 'document'
    | 'emphasis'
    | 'feed'
    | 'figure'
    | 'form'
    | 'generic'
    | 'grid'
    | 'gridcell'
    | 'group'
    | 'heading'
    | 'img'
    | 'input'
    | 'insertion'
    | 'landmark'
    | 'link'
    | 'list'
    | 'listbox'
    | 'listitem'
    | 'log'
    | 'main'
    | 'marquee'
    | 'math'
    | 'meter'
    | 'menu'
    | 'menubar'
    | 'menuitem'
    | 'menuitemcheckbox'
    | 'menuitemradio'
    | 'navigation'
    | 'none'
    | 'note'
    | 'option'
    | 'paragraph'
    | 'presentation'
    | 'progressbar'
    | 'radio'
    | 'radiogroup'
    | 'range'
    | 'region'
    | 'roletype'
    | 'row'
    | 'rowgroup'
    | 'rowheader'
    | 'scrollbar'
    | 'search'
    | 'searchbox'
    | 'section'
    | 'sectionhead'
    | 'select'
    | 'separator'
    | 'slider'
    | 'spinbutton'
    | 'status'
    | 'strong'
    | 'structure'
    | 'subscript'
    | 'superscript'
    | 'switch'
    | 'tab'
    | 'table'
    | 'tablist'
    | 'tabpanel'
    | 'term'
    | 'textbox'
    | 'time'
    | 'timer'
    | 'toolbar'
    | 'tooltip'
    | 'tree'
    | 'treegrid'
    | 'treeitem'
    | 'widget'
    | 'window'
    | 'none presentation';
  // All the Digital Publishing WAI-ARIA 1.0 role attribute values from https://www.w3.org/TR/dpub-aria-1.0/#role_definitions
  export type DPubAriaRole =
    | 'doc-abstract'
    | 'doc-acknowledgments'
    | 'doc-afterword'
    | 'doc-appendix'
    | 'doc-backlink'
    | 'doc-biblioentry'
    | 'doc-bibliography'
    | 'doc-biblioref'
    | 'doc-chapter'
    | 'doc-colophon'
    | 'doc-conclusion'
    | 'doc-cover'
    | 'doc-credit'
    | 'doc-credits'
    | 'doc-dedication'
    | 'doc-endnote'
    | 'doc-endnotes'
    | 'doc-epigraph'
    | 'doc-epilogue'
    | 'doc-errata'
    | 'doc-example'
    | 'doc-footnote'
    | 'doc-foreword'
    | 'doc-glossary'
    | 'doc-glossref'
    | 'doc-index'
    | 'doc-introduction'
    | 'doc-noteref'
    | 'doc-notice'
    | 'doc-pagebreak'
    | 'doc-pagelist'
    | 'doc-part'
    | 'doc-preface'
    | 'doc-prologue'
    | 'doc-pullquote'
    | 'doc-qna'
    | 'doc-subtitle'
    | 'doc-tip'
    | 'doc-toc';
  export type AriaRole = WAIAriaRole | DPubAriaRole;
  export interface AllHTMLAttributes<RefType extends EventTarget = EventTarget>
    extends ClassAttributes<RefType>,
      DOMAttributes<RefType>,
      AriaAttributes {
    // Standard HTML Attributes
    accept?: Signalish<string | undefined>;
    acceptCharset?: Signalish<string | undefined>;
    'accept-charset'?: Signalish<AllHTMLAttributes['acceptCharset']>;
    accessKey?: Signalish<string | undefined>;
    accesskey?: Signalish<AllHTMLAttributes['accessKey']>;
    action?: Signalish<string | undefined>;
    allow?: Signalish<string | undefined>;
    allowFullScreen?: Signalish<boolean | undefined>;
    allowTransparency?: Signalish<boolean | undefined>;
    alt?: Signalish<string | undefined>;
    as?: Signalish<string | undefined>;
    async?: Signalish<boolean | undefined>;
    autocomplete?: Signalish<string | undefined>;
    autoComplete?: Signalish<string | undefined>;
    autocorrect?: Signalish<string | undefined>;
    autoCorrect?: Signalish<string | undefined>;
    autofocus?: Signalish<boolean | undefined>;
    autoFocus?: Signalish<boolean | undefined>;
    autoPlay?: Signalish<boolean | undefined>;
    autoplay?: Signalish<boolean | undefined>;
    capture?: Signalish<boolean | string | undefined>;
    cellPadding?: Signalish<number | string | undefined>;
    cellSpacing?: Signalish<number | string | undefined>;
    charSet?: Signalish<string | undefined>;
    charset?: Signalish<string | undefined>;
    challenge?: Signalish<string | undefined>;
    checked?: Signalish<boolean | undefined>;
    cite?: Signalish<string | undefined>;
    class?: Signalish<string | undefined>;
    className?: Signalish<string | undefined>;
    cols?: Signalish<number | undefined>;
    colSpan?: Signalish<number | undefined>;
    colspan?: Signalish<number | undefined>;
    content?: Signalish<string | undefined>;
    contentEditable?: Signalish<
      Booleanish | '' | 'plaintext-only' | 'inherit' | undefined
    >;
    contenteditable?: Signalish<AllHTMLAttributes['contentEditable']>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contextmenu */
    contextMenu?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contextmenu */
    contextmenu?: Signalish<string | undefined>;
    controls?: Signalish<boolean | undefined>;
    controlsList?: Signalish<string | undefined>;
    coords?: Signalish<string | undefined>;
    crossOrigin?: Signalish<string | undefined>;
    crossorigin?: Signalish<string | undefined>;
    data?: Signalish<string | undefined>;
    dateTime?: Signalish<string | undefined>;
    datetime?: Signalish<string | undefined>;
    default?: Signalish<boolean | undefined>;
    defaultChecked?: Signalish<boolean | undefined>;
    defaultValue?: Signalish<string | undefined>;
    defer?: Signalish<boolean | undefined>;
    dir?: Signalish<'auto' | 'rtl' | 'ltr' | undefined>;
    disabled?: Signalish<boolean | undefined>;
    disableRemotePlayback?: Signalish<boolean | undefined>;
    download?: Signalish<any | undefined>;
    decoding?: Signalish<'sync' | 'async' | 'auto' | undefined>;
    draggable?: Signalish<boolean | undefined>;
    encType?: Signalish<string | undefined>;
    enctype?: Signalish<string | undefined>;
    enterkeyhint?: Signalish<
      | 'enter'
      | 'done'
      | 'go'
      | 'next'
      | 'previous'
      | 'search'
      | 'send'
      | undefined
    >;
    elementTiming?: Signalish<string | undefined>;
    elementtiming?: Signalish<AllHTMLAttributes['elementTiming']>;
    exportparts?: Signalish<string | undefined>;
    for?: Signalish<string | undefined>;
    form?: Signalish<string | undefined>;
    formAction?: Signalish<string | undefined>;
    formaction?: Signalish<string | undefined>;
    formEncType?: Signalish<string | undefined>;
    formenctype?: Signalish<string | undefined>;
    formMethod?: Signalish<string | undefined>;
    formmethod?: Signalish<string | undefined>;
    formNoValidate?: Signalish<boolean | undefined>;
    formnovalidate?: Signalish<boolean | undefined>;
    formTarget?: Signalish<string | undefined>;
    formtarget?: Signalish<string | undefined>;
    frameBorder?: Signalish<number | string | undefined>;
    frameborder?: Signalish<number | string | undefined>;
    headers?: Signalish<string | undefined>;
    height?: Signalish<number | string | undefined>;
    hidden?: Signalish<boolean | 'hidden' | 'until-found' | undefined>;
    high?: Signalish<number | undefined>;
    href?: Signalish<string | undefined>;
    hrefLang?: Signalish<string | undefined>;
    hreflang?: Signalish<string | undefined>;
    htmlFor?: Signalish<string | undefined>;
    httpEquiv?: Signalish<string | undefined>;
    'http-equiv'?: Signalish<string | undefined>;
    icon?: Signalish<string | undefined>;
    id?: Signalish<string | undefined>;
    indeterminate?: Signalish<boolean | undefined>;
    inert?: Signalish<boolean | undefined>;
    inputMode?: Signalish<string | undefined>;
    inputmode?: Signalish<string | undefined>;
    integrity?: Signalish<string | undefined>;
    is?: Signalish<string | undefined>;
    keyParams?: Signalish<string | undefined>;
    keyType?: Signalish<string | undefined>;
    kind?: Signalish<string | undefined>;
    label?: Signalish<string | undefined>;
    lang?: Signalish<string | undefined>;
    list?: Signalish<string | undefined>;
    loading?: Signalish<'eager' | 'lazy' | undefined>;
    loop?: Signalish<boolean | undefined>;
    low?: Signalish<number | undefined>;
    manifest?: Signalish<string | undefined>;
    marginHeight?: Signalish<number | undefined>;
    marginWidth?: Signalish<number | undefined>;
    max?: Signalish<number | string | undefined>;
    maxLength?: Signalish<number | undefined>;
    maxlength?: Signalish<number | undefined>;
    media?: Signalish<string | undefined>;
    mediaGroup?: Signalish<string | undefined>;
    method?: Signalish<string | undefined>;
    min?: Signalish<number | string | undefined>;
    minLength?: Signalish<number | undefined>;
    minlength?: Signalish<number | undefined>;
    multiple?: Signalish<boolean | undefined>;
    muted?: Signalish<boolean | undefined>;
    name?: Signalish<string | undefined>;
    nomodule?: Signalish<boolean | undefined>;
    nonce?: Signalish<string | undefined>;
    noValidate?: Signalish<boolean | undefined>;
    novalidate?: Signalish<boolean | undefined>;
    open?: Signalish<boolean | undefined>;
    optimum?: Signalish<number | undefined>;
    part?: Signalish<string | undefined>;
    pattern?: Signalish<string | undefined>;
    ping?: Signalish<string | undefined>;
    placeholder?: Signalish<string | undefined>;
    playsInline?: Signalish<boolean | undefined>;
    playsinline?: Signalish<boolean | undefined>;
    popover?: Signalish<'auto' | 'hint' | 'manual' | boolean | undefined>;
    popovertarget?: Signalish<string | undefined>;
    popoverTarget?: Signalish<string | undefined>;
    popovertargetaction?: Signalish<'hide' | 'show' | 'toggle' | undefined>;
    popoverTargetAction?: Signalish<'hide' | 'show' | 'toggle' | undefined>;
    poster?: Signalish<string | undefined>;
    preload?: Signalish<string | undefined>;
    radioGroup?: Signalish<string | undefined>;
    readonly?: Signalish<boolean | undefined>;
    readOnly?: Signalish<boolean | undefined>;
    referrerpolicy?: Signalish<
      | 'no-referrer'
      | 'no-referrer-when-downgrade'
      | 'origin'
      | 'origin-when-cross-origin'
      | 'same-origin'
      | 'strict-origin'
      | 'strict-origin-when-cross-origin'
      | 'unsafe-url'
      | undefined
    >;
    rel?: Signalish<string | undefined>;
    required?: Signalish<boolean | undefined>;
    reversed?: Signalish<boolean | undefined>;
    role?: Signalish<AriaRole | undefined>;
    rows?: Signalish<number | undefined>;
    rowSpan?: Signalish<number | undefined>;
    rowspan?: Signalish<number | undefined>;
    sandbox?: Signalish<string | undefined>;
    scope?: Signalish<string | undefined>;
    scoped?: Signalish<boolean | undefined>;
    scrolling?: Signalish<string | undefined>;
    seamless?: Signalish<boolean | undefined>;
    selected?: Signalish<boolean | undefined>;
    shape?: Signalish<string | undefined>;
    size?: Signalish<number | undefined>;
    sizes?: Signalish<string | undefined>;
    slot?: Signalish<string | undefined>;
    span?: Signalish<number | undefined>;
    spellcheck?: Signalish<boolean | undefined>;
    src?: Signalish<string | undefined>;
    srcSet?: Signalish<string | undefined>;
    srcset?: Signalish<string | undefined>;
    srcDoc?: Signalish<string | undefined>;
    srcdoc?: Signalish<string | undefined>;
    srcLang?: Signalish<string | undefined>;
    srclang?: Signalish<string | undefined>;
    start?: Signalish<number | undefined>;
    step?: Signalish<number | string | undefined>;
    style?: Signalish<string | CSSProperties | undefined>;
    summary?: Signalish<string | undefined>;
    tabIndex?: Signalish<number | undefined>;
    tabindex?: Signalish<number | undefined>;
    target?: Signalish<string | undefined>;
    title?: Signalish<string | undefined>;
    type?: Signalish<string | undefined>;
    useMap?: Signalish<string | undefined>;
    usemap?: Signalish<string | undefined>;
    value?: Signalish<string | string[] | number | undefined>;
    volume?: Signalish<string | number | undefined>;
    width?: Signalish<number | string | undefined>;
    wmode?: Signalish<string | undefined>;
    wrap?: Signalish<string | undefined>;
    // Non-standard Attributes
    autocapitalize?: Signalish<
      'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | undefined
    >;
    autoCapitalize?: Signalish<
      'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | undefined
    >;
    disablePictureInPicture?: Signalish<boolean | undefined>;
    results?: Signalish<number | undefined>;
    translate?: Signalish<boolean | undefined>;
    // RDFa Attributes
    about?: Signalish<string | undefined>;
    datatype?: Signalish<string | undefined>;
    inlist?: Signalish<any>;
    prefix?: Signalish<string | undefined>;
    property?: Signalish<string | undefined>;
    resource?: Signalish<string | undefined>;
    typeof?: Signalish<string | undefined>;
    vocab?: Signalish<string | undefined>;
    // Microdata Attributes
    itemProp?: Signalish<string | undefined>;
    itemprop?: Signalish<string | undefined>;
    itemScope?: Signalish<boolean | undefined>;
    itemscope?: Signalish<boolean | undefined>;
    itemType?: Signalish<string | undefined>;
    itemtype?: Signalish<string | undefined>;
    itemID?: Signalish<string | undefined>;
    itemid?: Signalish<string | undefined>;
    itemRef?: Signalish<string | undefined>;
    itemref?: Signalish<string | undefined>;
  }
  export interface HTMLAttributes<RefType extends EventTarget = EventTarget>
    extends ClassAttributes<RefType>,
      DOMAttributes<RefType>,
      AriaAttributes {
    // Standard HTML Attributes
    accesskey?: Signalish<string | undefined>;
    accessKey?: Signalish<string | undefined>;
    autocapitalize?: Signalish<
      'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | undefined
    >;
    autoCapitalize?: Signalish<
      'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | undefined
    >;
    autocorrect?: Signalish<string | undefined>;
    autoCorrect?: Signalish<string | undefined>;
    autofocus?: Signalish<boolean | undefined>;
    autoFocus?: Signalish<boolean | undefined>;
    class?: Signalish<string | undefined>;
    className?: Signalish<string | undefined>;
    contenteditable?: Signalish<
      Booleanish | '' | 'plaintext-only' | 'inherit' | undefined
    >;
    contentEditable?: Signalish<
      Booleanish | '' | 'plaintext-only' | 'inherit' | undefined
    >;
    dir?: Signalish<'auto' | 'rtl' | 'ltr' | undefined>;
    draggable?: Signalish<boolean | undefined>;
    enterkeyhint?: Signalish<
      | 'enter'
      | 'done'
      | 'go'
      | 'next'
      | 'previous'
      | 'search'
      | 'send'
      | undefined
    >;
    exportparts?: Signalish<string | undefined>;
    hidden?: Signalish<boolean | 'hidden' | 'until-found' | undefined>;
    id?: Signalish<string | undefined>;
    inert?: Signalish<boolean | undefined>;
    inputmode?: Signalish<string | undefined>;
    inputMode?: Signalish<string | undefined>;
    is?: Signalish<string | undefined>;
    lang?: Signalish<string | undefined>;
    nonce?: Signalish<string | undefined>;
    part?: Signalish<string | undefined>;
    popover?: Signalish<'auto' | 'hint' | 'manual' | boolean | undefined>;
    slot?: Signalish<string | undefined>;
    spellcheck?: Signalish<boolean | undefined>;
    style?: Signalish<string | CSSProperties | undefined>;
    tabindex?: Signalish<number | undefined>;
    tabIndex?: Signalish<number | undefined>;
    title?: Signalish<string | undefined>;
    translate?: Signalish<boolean | undefined>;
    // WAI-ARIA Attributes
    role?: Signalish<AriaRole | undefined>;
    // Non-standard Attributes
    disablePictureInPicture?: Signalish<boolean | undefined>;
    elementtiming?: Signalish<string | undefined>;
    elementTiming?: Signalish<string | undefined>;
    results?: Signalish<number | undefined>;
    // RDFa Attributes
    about?: Signalish<string | undefined>;
    datatype?: Signalish<string | undefined>;
    inlist?: Signalish<any>;
    prefix?: Signalish<string | undefined>;
    property?: Signalish<string | undefined>;
    resource?: Signalish<string | undefined>;
    typeof?: Signalish<string | undefined>;
    vocab?: Signalish<string | undefined>;
    // Microdata Attributes
    itemid?: Signalish<string | undefined>;
    itemID?: Signalish<string | undefined>;
    itemprop?: Signalish<string | undefined>;
    itemProp?: Signalish<string | undefined>;
    itemref?: Signalish<string | undefined>;
    itemRef?: Signalish<string | undefined>;
    itemscope?: Signalish<boolean | undefined>;
    itemScope?: Signalish<boolean | undefined>;
    itemtype?: Signalish<string | undefined>;
    itemType?: Signalish<string | undefined>;
  }
  type HTMLAttributeReferrerPolicy =
    | ''
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
  type HTMLAttributeAnchorTarget =
    | '_self'
    | '_blank'
    | '_parent'
    | '_top'
    | (string & {});
  interface AnchorHTMLAttributes<T extends EventTarget = HTMLAnchorElement>
    extends HTMLAttributes<T> {
    download?: Signalish<any>;
    href?: Signalish<string | undefined>;
    hreflang?: Signalish<string | undefined>;
    hrefLang?: Signalish<string | undefined>;
    media?: Signalish<string | undefined>;
    ping?: Signalish<string | undefined>;
    rel?: Signalish<string | undefined>;
    target?: Signalish<HTMLAttributeAnchorTarget | undefined>;
    type?: Signalish<string | undefined>;
    referrerpolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
    referrerPolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
  }
  interface AreaHTMLAttributes<T extends EventTarget = HTMLAreaElement>
    extends HTMLAttributes<T> {
    alt?: Signalish<string | undefined>;
    coords?: Signalish<string | undefined>;
    download?: Signalish<any>;
    href?: Signalish<string | undefined>;
    hreflang?: Signalish<string | undefined>;
    hrefLang?: Signalish<string | undefined>;
    media?: Signalish<string | undefined>;
    referrerpolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
    referrerPolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
    rel?: Signalish<string | undefined>;
    shape?: Signalish<string | undefined>;
    target?: Signalish<string | undefined>;
  }
  interface AudioHTMLAttributes<T extends EventTarget = HTMLAudioElement>
    extends MediaHTMLAttributes<T> {}
  interface BaseHTMLAttributes<T extends EventTarget = HTMLBaseElement>
    extends HTMLAttributes<T> {
    href?: Signalish<string | undefined>;
    target?: Signalish<string | undefined>;
  }
  interface BlockquoteHTMLAttributes<T extends EventTarget = HTMLQuoteElement>
    extends HTMLAttributes<T> {
    cite?: Signalish<string | undefined>;
  }
  interface ButtonHTMLAttributes<T extends EventTarget = HTMLButtonElement>
    extends HTMLAttributes<T> {
    disabled?: Signalish<boolean | undefined>;
    form?: Signalish<string | undefined>;
    formaction?: Signalish<string | undefined>;
    formAction?: Signalish<string | undefined>;
    formenctype?: Signalish<string | undefined>;
    formEncType?: Signalish<string | undefined>;
    formmethod?: Signalish<string | undefined>;
    formMethod?: Signalish<string | undefined>;
    formnovalidate?: Signalish<boolean | undefined>;
    formNoValidate?: Signalish<boolean | undefined>;
    formtarget?: Signalish<string | undefined>;
    formTarget?: Signalish<string | undefined>;
    name?: Signalish<string | undefined>;
    popovertarget?: Signalish<string | undefined>;
    popoverTarget?: Signalish<string | undefined>;
    popovertargetaction?: Signalish<'hide' | 'show' | 'toggle' | undefined>;
    popoverTargetAction?: Signalish<'hide' | 'show' | 'toggle' | undefined>;
    type?: Signalish<'submit' | 'reset' | 'button' | undefined>;
    value?: Signalish<string | number | undefined>;
  }
  interface CanvasHTMLAttributes<T extends EventTarget = HTMLCanvasElement>
    extends HTMLAttributes<T> {
    height?: Signalish<number | string | undefined>;
    width?: Signalish<number | string | undefined>;
  }
  interface ColHTMLAttributes<T extends EventTarget = HTMLTableColElement>
    extends HTMLAttributes<T> {
    span?: Signalish<number | undefined>;
    width?: Signalish<number | string | undefined>;
  }
  interface ColgroupHTMLAttributes<T extends EventTarget = HTMLTableColElement>
    extends HTMLAttributes<T> {
    span?: Signalish<number | undefined>;
  }
  interface DataHTMLAttributes<T extends EventTarget = HTMLDataElement>
    extends HTMLAttributes<T> {
    value?: Signalish<string | number | undefined>;
  }
  interface DelHTMLAttributes<T extends EventTarget = HTMLModElement>
    extends HTMLAttributes<T> {
    cite?: Signalish<string | undefined>;
    datetime?: Signalish<string | undefined>;
    dateTime?: Signalish<string | undefined>;
  }
  interface DetailsHTMLAttributes<T extends EventTarget = HTMLDetailsElement>
    extends HTMLAttributes<T> {
    open?: Signalish<boolean | undefined>;
    onToggle?: GenericEventHandler<T> | undefined;
  }
  interface DialogHTMLAttributes<T extends EventTarget = HTMLDialogElement>
    extends HTMLAttributes<T> {
    onCancel?: GenericEventHandler<T> | undefined;
    onClose?: GenericEventHandler<T> | undefined;
    open?: Signalish<boolean | undefined>;
  }
  interface EmbedHTMLAttributes<T extends EventTarget = HTMLEmbedElement>
    extends HTMLAttributes<T> {
    height?: Signalish<number | string | undefined>;
    src?: Signalish<string | undefined>;
    type?: Signalish<string | undefined>;
    width?: Signalish<number | string | undefined>;
  }
  interface FieldsetHTMLAttributes<T extends EventTarget = HTMLFieldSetElement>
    extends HTMLAttributes<T> {
    disabled?: Signalish<boolean | undefined>;
    form?: Signalish<string | undefined>;
    name?: Signalish<string | undefined>;
  }
  interface FormHTMLAttributes<T extends EventTarget = HTMLFormElement>
    extends HTMLAttributes<T> {
    'accept-charset'?: Signalish<string | undefined>;
    acceptCharset?: Signalish<string | undefined>;
    action?: Signalish<string | undefined>;
    autocomplete?: Signalish<string | undefined>;
    autoComplete?: Signalish<string | undefined>;
    enctype?: Signalish<string | undefined>;
    encType?: Signalish<string | undefined>;
    method?: Signalish<string | undefined>;
    name?: Signalish<string | undefined>;
    novalidate?: Signalish<boolean | undefined>;
    noValidate?: Signalish<boolean | undefined>;
    rel?: Signalish<string | undefined>;
    target?: Signalish<string | undefined>;
  }
  interface IframeHTMLAttributes<T extends EventTarget = HTMLIFrameElement>
    extends HTMLAttributes<T> {
    allow?: Signalish<string | undefined>;
    allowFullScreen?: Signalish<boolean | undefined>;
    allowTransparency?: Signalish<boolean | undefined>;
    /** @deprecated */
    frameborder?: Signalish<number | string | undefined>;
    /** @deprecated */
    frameBorder?: Signalish<number | string | undefined>;
    height?: Signalish<number | string | undefined>;
    loading?: 'eager' | 'lazy' | undefined;
    /** @deprecated */
    marginHeight?: Signalish<number | undefined>;
    /** @deprecated */
    marginWidth?: Signalish<number | undefined>;
    name?: Signalish<string | undefined>;
    referrerpolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
    referrerPolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
    sandbox?: Signalish<string | undefined>;
    /** @deprecated */
    scrolling?: Signalish<string | undefined>;
    seamless?: Signalish<boolean | undefined>;
    src?: Signalish<string | undefined>;
    srcdoc?: Signalish<string | undefined>;
    srcDoc?: Signalish<string | undefined>;
    width?: Signalish<number | string | undefined>;
  }
  type HTMLAttributeCrossOrigin = 'anonymous' | 'use-credentials';
  interface ImgHTMLAttributes<T extends EventTarget = HTMLImageElement>
    extends HTMLAttributes<T> {
    alt?: Signalish<string | undefined>;
    crossorigin?: Signalish<HTMLAttributeCrossOrigin>;
    crossOrigin?: Signalish<HTMLAttributeCrossOrigin>;
    decoding?: Signalish<'async' | 'auto' | 'sync' | undefined>;
    height?: Signalish<number | string | undefined>;
    loading?: Signalish<'eager' | 'lazy' | undefined>;
    referrerpolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
    referrerPolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
    sizes?: Signalish<string | undefined>;
    src?: Signalish<string | undefined>;
    srcset?: Signalish<string | undefined>;
    srcSet?: Signalish<string | undefined>;
    usemap?: Signalish<string | undefined>;
    useMap?: Signalish<string | undefined>;
    width?: Signalish<number | string | undefined>;
  }
  type HTMLInputTypeAttribute =
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | (string & {});
  interface InputHTMLAttributes<T extends EventTarget = HTMLInputElement>
    extends HTMLAttributes<T> {
    accept?: Signalish<string | undefined>;
    alt?: Signalish<string | undefined>;
    autocomplete?: Signalish<string | undefined>;
    autoComplete?: Signalish<string | undefined>;
    capture?: Signalish<'user' | 'environment' | undefined>; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
    checked?: Signalish<boolean | undefined>;
    defaultChecked?: Signalish<boolean | undefined>;
    defaultValue?: Signalish<string | number | undefined>;
    disabled?: Signalish<boolean | undefined>;
    enterKeyHint?: Signalish<
      | 'enter'
      | 'done'
      | 'go'
      | 'next'
      | 'previous'
      | 'search'
      | 'send'
      | undefined
    >;
    form?: Signalish<string | undefined>;
    formaction?: Signalish<string | undefined>;
    formAction?: Signalish<string | undefined>;
    formenctype?: Signalish<string | undefined>;
    formEncType?: Signalish<string | undefined>;
    formmethod?: Signalish<string | undefined>;
    formMethod?: Signalish<string | undefined>;
    formnovalidate?: Signalish<boolean | undefined>;
    formNoValidate?: Signalish<boolean | undefined>;
    formtarget?: Signalish<string | undefined>;
    formTarget?: Signalish<string | undefined>;
    height?: Signalish<number | string | undefined>;
    indeterminate?: Signalish<boolean | undefined>;
    list?: Signalish<string | undefined>;
    max?: Signalish<number | string | undefined>;
    maxlength?: Signalish<number | undefined>;
    maxLength?: Signalish<number | undefined>;
    min?: Signalish<number | string | undefined>;
    minlength?: Signalish<number | undefined>;
    minLength?: Signalish<number | undefined>;
    multiple?: Signalish<boolean | undefined>;
    name?: Signalish<string | undefined>;
    pattern?: Signalish<string | undefined>;
    placeholder?: Signalish<string | undefined>;
    readonly?: Signalish<boolean | undefined>;
    readOnly?: Signalish<boolean | undefined>;
    required?: Signalish<boolean | undefined>;
    size?: Signalish<number | undefined>;
    src?: Signalish<string | undefined>;
    step?: Signalish<number | string | undefined>;
    type?: HTMLInputTypeAttribute | undefined;
    value?: Signalish<string | number | undefined>;
    width?: Signalish<number | string | undefined>;
    onChange?: GenericEventHandler<T> | undefined;
  }
  interface InsHTMLAttributes<T extends EventTarget = HTMLModElement>
    extends HTMLAttributes<T> {
    cite?: Signalish<string | undefined>;
    datetime?: Signalish<string | undefined>;
    dateTime?: Signalish<string | undefined>;
  }
  interface KeygenHTMLAttributes<T extends EventTarget = HTMLUnknownElement>
    extends HTMLAttributes<T> {
    challenge?: Signalish<string | undefined>;
    disabled?: Signalish<boolean | undefined>;
    form?: Signalish<string | undefined>;
    keyType?: Signalish<string | undefined>;
    keyParams?: Signalish<string | undefined>;
    name?: Signalish<string | undefined>;
  }
  interface LabelHTMLAttributes<T extends EventTarget = HTMLLabelElement>
    extends HTMLAttributes<T> {
    for?: Signalish<string | undefined>;
    form?: Signalish<string | undefined>;
    htmlFor?: Signalish<string | undefined>;
  }
  interface LiHTMLAttributes<T extends EventTarget = HTMLLIElement>
    extends HTMLAttributes<T> {
    value?: Signalish<string | number | undefined>;
  }
  interface LinkHTMLAttributes<T extends EventTarget = HTMLLinkElement>
    extends HTMLAttributes<T> {
    as?: Signalish<string | undefined>;
    crossorigin?: Signalish<HTMLAttributeCrossOrigin>;
    crossOrigin?: Signalish<HTMLAttributeCrossOrigin>;
    fetchPriority?: Signalish<'high' | 'low' | 'auto'>;
    href?: Signalish<string | undefined>;
    hreflang?: Signalish<string | undefined>;
    hrefLang?: Signalish<string | undefined>;
    integrity?: Signalish<string | undefined>;
    media?: Signalish<string | undefined>;
    imageSrcSet?: Signalish<string | undefined>;
    referrerpolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
    referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    rel?: Signalish<string | undefined>;
    sizes?: Signalish<string | undefined>;
    type?: Signalish<string | undefined>;
    charset?: Signalish<string | undefined>;
    charSet?: Signalish<string | undefined>;
  }
  interface MapHTMLAttributes<T extends EventTarget = HTMLMapElement>
    extends HTMLAttributes<T> {
    name?: Signalish<string | undefined>;
  }
  interface MarqueeHTMLAttributes<T extends EventTarget = HTMLMarqueeElement>
    extends HTMLAttributes<T> {
    behavior?: Signalish<'scroll' | 'slide' | 'alternate' | undefined>;
    bgColor?: Signalish<string | undefined>;
    direction?: Signalish<'left' | 'right' | 'up' | 'down' | undefined>;
    height?: Signalish<number | string | undefined>;
    hspace?: Signalish<number | string | undefined>;
    loop?: Signalish<number | string | undefined>;
    scrollAmount?: Signalish<number | string | undefined>;
    scrollDelay?: Signalish<number | string | undefined>;
    trueSpeed?: Signalish<boolean | undefined>;
    vspace?: Signalish<number | string | undefined>;
    width?: Signalish<number | string | undefined>;
  }
  interface MediaHTMLAttributes<T extends EventTarget = HTMLMediaElement>
    extends HTMLAttributes<T> {
    autoplay?: Signalish<boolean | undefined>;
    autoPlay?: Signalish<boolean | undefined>;
    controls?: Signalish<boolean | undefined>;
    controlsList?: Signalish<string | undefined>;
    crossorigin?: Signalish<HTMLAttributeCrossOrigin>;
    crossOrigin?: Signalish<HTMLAttributeCrossOrigin>;
    loop?: Signalish<boolean | undefined>;
    mediaGroup?: Signalish<string | undefined>;
    muted?: Signalish<boolean | undefined>;
    playsinline?: Signalish<boolean | undefined>;
    playsInline?: Signalish<boolean | undefined>;
    preload?: Signalish<string | undefined>;
    src?: Signalish<string | undefined>;
    volume?: Signalish<string | number | undefined>;
  }
  interface MenuHTMLAttributes<T extends EventTarget = HTMLMenuElement>
    extends HTMLAttributes<T> {
    type?: Signalish<string | undefined>;
  }
  interface MetaHTMLAttributes<T extends EventTarget = HTMLMetaElement>
    extends HTMLAttributes<T> {
    charset?: Signalish<string | undefined>;
    charSet?: Signalish<string | undefined>;
    content?: Signalish<string | undefined>;
    'http-equiv'?: Signalish<string | undefined>;
    httpEquiv?: Signalish<string | undefined>;
    name?: Signalish<string | undefined>;
    media?: Signalish<string | undefined>;
  }
  interface MeterHTMLAttributes<T extends EventTarget = HTMLMeterElement>
    extends HTMLAttributes<T> {
    form?: Signalish<string | undefined>;
    high?: Signalish<number | undefined>;
    low?: Signalish<number | undefined>;
    max?: Signalish<number | string | undefined>;
    min?: Signalish<number | string | undefined>;
    optimum?: Signalish<number | undefined>;
    value?: Signalish<string | number | undefined>;
  }
  interface ObjectHTMLAttributes<T extends EventTarget = HTMLObjectElement>
    extends HTMLAttributes<T> {
    classID?: Signalish<string | undefined>;
    data?: Signalish<string | undefined>;
    form?: Signalish<string | undefined>;
    height?: Signalish<number | string | undefined>;
    name?: Signalish<string | undefined>;
    type?: Signalish<string | undefined>;
    usemap?: Signalish<string | undefined>;
    useMap?: Signalish<string | undefined>;
    width?: Signalish<number | string | undefined>;
    wmode?: Signalish<string | undefined>;
  }
  interface OlHTMLAttributes<T extends EventTarget = HTMLOListElement>
    extends HTMLAttributes<T> {
    reversed?: Signalish<boolean | undefined>;
    start?: Signalish<number | undefined>;
    type?: Signalish<'1' | 'a' | 'A' | 'i' | 'I' | undefined>;
  }
  interface OptgroupHTMLAttributes<T extends EventTarget = HTMLOptGroupElement>
    extends HTMLAttributes<T> {
    disabled?: Signalish<boolean | undefined>;
    label?: Signalish<string | undefined>;
  }
  interface OptionHTMLAttributes<T extends EventTarget = HTMLOptionElement>
    extends HTMLAttributes<T> {
    disabled?: Signalish<boolean | undefined>;
    label?: Signalish<string | undefined>;
    selected?: Signalish<boolean | undefined>;
    value?: Signalish<string | number | undefined>;
  }
  interface OutputHTMLAttributes<T extends EventTarget = HTMLOutputElement>
    extends HTMLAttributes<T> {
    for?: Signalish<string | undefined>;
    form?: Signalish<string | undefined>;
    htmlFor?: Signalish<string | undefined>;
    name?: Signalish<string | undefined>;
  }
  interface ParamHTMLAttributes<T extends EventTarget = HTMLParamElement>
    extends HTMLAttributes<T> {
    name?: Signalish<string | undefined>;
    value?: Signalish<string | number | undefined>;
  }
  interface ProgressHTMLAttributes<T extends EventTarget = HTMLProgressElement>
    extends HTMLAttributes<T> {
    max?: Signalish<number | string | undefined>;
    value?: Signalish<string | number | undefined>;
  }
  interface QuoteHTMLAttributes<T extends EventTarget = HTMLQuoteElement>
    extends HTMLAttributes<T> {
    cite?: Signalish<string | undefined>;
  }
  interface ScriptHTMLAttributes<T extends EventTarget = HTMLScriptElement>
    extends HTMLAttributes<T> {
    async?: Signalish<boolean | undefined>;
    /** @deprecated */
    charset?: Signalish<string | undefined>;
    /** @deprecated */
    charSet?: Signalish<string | undefined>;
    crossorigin?: Signalish<HTMLAttributeCrossOrigin>;
    crossOrigin?: Signalish<HTMLAttributeCrossOrigin>;
    defer?: Signalish<boolean | undefined>;
    integrity?: Signalish<string | undefined>;
    nomodule?: Signalish<boolean | undefined>;
    noModule?: Signalish<boolean | undefined>;
    referrerpolicy?: Signalish<HTMLAttributeReferrerPolicy | undefined>;
    referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    src?: Signalish<string | undefined>;
    type?: Signalish<string | undefined>;
  }
  interface SelectHTMLAttributes<T extends EventTarget = HTMLSelectElement>
    extends HTMLAttributes<T> {
    autocomplete?: Signalish<string | undefined>;
    autoComplete?: Signalish<string | undefined>;
    defaultValue?: Signalish<string | number | undefined>;
    disabled?: Signalish<boolean | undefined>;
    form?: Signalish<string | undefined>;
    multiple?: Signalish<boolean | undefined>;
    name?: Signalish<string | undefined>;
    required?: Signalish<boolean | undefined>;
    size?: Signalish<number | undefined>;
    value?: Signalish<string | number | undefined>;
    onChange?: GenericEventHandler<T> | undefined;
  }
  interface SlotHTMLAttributes<T extends EventTarget = HTMLSlotElement>
    extends HTMLAttributes<T> {
    name?: Signalish<string | undefined>;
  }
  interface SourceHTMLAttributes<T extends EventTarget = HTMLSourceElement>
    extends HTMLAttributes<T> {
    height?: Signalish<number | string | undefined>;
    media?: Signalish<string | undefined>;
    sizes?: Signalish<string | undefined>;
    src?: Signalish<string | undefined>;
    srcset?: Signalish<string | undefined>;
    srcSet?: Signalish<string | undefined>;
    type?: Signalish<string | undefined>;
    width?: Signalish<number | string | undefined>;
  }
  interface StyleHTMLAttributes<T extends EventTarget = HTMLStyleElement>
    extends HTMLAttributes<T> {
    media?: Signalish<string | undefined>;
    scoped?: Signalish<boolean | undefined>;
    type?: Signalish<string | undefined>;
  }
  interface TableHTMLAttributes<T extends EventTarget = HTMLTableElement>
    extends HTMLAttributes<T> {
    cellPadding?: Signalish<string | undefined>;
    cellSpacing?: Signalish<string | undefined>;
    summary?: Signalish<string | undefined>;
    width?: Signalish<number | string | undefined>;
  }
  interface TdHTMLAttributes<T extends EventTarget = HTMLTableCellElement>
    extends HTMLAttributes<T> {
    align?: Signalish<
      'left' | 'center' | 'right' | 'justify' | 'char' | undefined
    >;
    colspan?: Signalish<number | undefined>;
    colSpan?: Signalish<number | undefined>;
    headers?: Signalish<string | undefined>;
    rowspan?: Signalish<number | undefined>;
    rowSpan?: Signalish<number | undefined>;
    scope?: Signalish<string | undefined>;
    abbr?: Signalish<string | undefined>;
    height?: Signalish<number | string | undefined>;
    width?: Signalish<number | string | undefined>;
    valign?: Signalish<'top' | 'middle' | 'bottom' | 'baseline' | undefined>;
  }
  interface TextareaHTMLAttributes<T extends EventTarget = HTMLTextAreaElement>
    extends HTMLAttributes<T> {
    autocomplete?: Signalish<string | undefined>;
    autoComplete?: Signalish<string | undefined>;
    cols?: Signalish<number | undefined>;
    defaultValue?: Signalish<string | undefined>;
    dirName?: Signalish<string | undefined>;
    disabled?: Signalish<boolean | undefined>;
    form?: Signalish<string | undefined>;
    maxlength?: Signalish<number | undefined>;
    maxLength?: Signalish<number | undefined>;
    minlength?: Signalish<number | undefined>;
    minLength?: Signalish<number | undefined>;
    name?: Signalish<string | undefined>;
    placeholder?: Signalish<string | undefined>;
    readOnly?: Signalish<boolean | undefined>;
    required?: Signalish<boolean | undefined>;
    rows?: Signalish<number | undefined>;
    value?: Signalish<string | number | undefined>;
    wrap?: Signalish<string | undefined>;
    onChange?: GenericEventHandler<T> | undefined;
  }
  interface ThHTMLAttributes<T extends EventTarget = HTMLTableCellElement>
    extends HTMLAttributes<T> {
    align?: Signalish<
      'left' | 'center' | 'right' | 'justify' | 'char' | undefined
    >;
    colspan?: Signalish<number | undefined>;
    colSpan?: Signalish<number | undefined>;
    headers?: Signalish<string | undefined>;
    rowspan?: Signalish<number | undefined>;
    rowSpan?: Signalish<number | undefined>;
    scope?: Signalish<string | undefined>;
    abbr?: Signalish<string | undefined>;
  }
  interface TimeHTMLAttributes<T extends EventTarget = HTMLTimeElement>
    extends HTMLAttributes<T> {
    datetime?: Signalish<string | undefined>;
    dateTime?: Signalish<string | undefined>;
  }
  interface TrackHTMLAttributes<T extends EventTarget = HTMLTrackElement>
    extends MediaHTMLAttributes<T> {
    default?: Signalish<boolean | undefined>;
    kind?: Signalish<string | undefined>;
    label?: Signalish<string | undefined>;
    srclang?: Signalish<string | undefined>;
    srcLang?: Signalish<string | undefined>;
  }
  interface VideoHTMLAttributes<T extends EventTarget = HTMLVideoElement>
    extends MediaHTMLAttributes<T> {
    height?: Signalish<number | string | undefined>;
    poster?: Signalish<string | undefined>;
    width?: Signalish<number | string | undefined>;
    disablePictureInPicture?: Signalish<boolean | undefined>;
    disableRemotePlayback?: Signalish<boolean | undefined>;
  }
  export type DetailedHTMLProps<
    HA extends HTMLAttributes<RefType>,
    RefType extends EventTarget = EventTarget,
  > = HA;
  export interface MathMLAttributes<Target extends EventTarget = MathMLElement>
    extends HTMLAttributes<Target> {
    dir?: Signalish<'ltr' | 'rtl' | undefined>;
    displaystyle?: Signalish<boolean | undefined>;
    /** @deprecated This feature is non-standard. See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/href  */
    href?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathbackground */
    mathbackground?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathcolor */
    mathcolor?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes/mathsize */
    mathsize?: Signalish<string | undefined>;
    nonce?: Signalish<string | undefined>;
    scriptlevel?: Signalish<string | undefined>;
  }
  export interface AnnotationMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    encoding?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/semantics#src */
    src?: Signalish<string | undefined>;
  }
  export interface AnnotationXmlMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    encoding?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/semantics#src */
    src?: Signalish<string | undefined>;
  }
  export interface MActionMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction#actiontype */
    actiontype?: Signalish<'statusline' | 'toggle' | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction#selection */
    selection?: Signalish<string | undefined>;
  }
  export interface MathMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    display?: Signalish<'block' | 'inline' | undefined>;
  }
  export interface MEncloseMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    notation?: Signalish<string | undefined>;
  }
  export interface MErrorMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {}
  export interface MFencedMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    close?: Signalish<string | undefined>;
    open?: Signalish<string | undefined>;
    separators?: Signalish<string | undefined>;
  }
  export interface MFracMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac#denomalign */
    denomalign?: Signalish<'center' | 'left' | 'right' | undefined>;
    linethickness?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfrac#numalign */
    numalign?: Signalish<'center' | 'left' | 'right' | undefined>;
  }
  export interface MiMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    /** The only value allowed in the current specification is normal (case insensitive)
     * See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mi#mathvariant */
    mathvariant?: Signalish<
      | 'normal'
      | 'bold'
      | 'italic'
      | 'bold-italic'
      | 'double-struck'
      | 'bold-fraktur'
      | 'script'
      | 'bold-script'
      | 'fraktur'
      | 'sans-serif'
      | 'bold-sans-serif'
      | 'sans-serif-italic'
      | 'sans-serif-bold-italic'
      | 'monospace'
      | 'initial'
      | 'tailed'
      | 'looped'
      | 'stretched'
      | undefined
    >;
  }
  export interface MmultiScriptsMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mmultiscripts#subscriptshift */
    subscriptshift?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mmultiscripts#superscriptshift */
    superscriptshift?: Signalish<string | undefined>;
  }
  export interface MNMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {}
  export interface MOMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mo#accent */
    accent?: Signalish<boolean | undefined>;
    fence?: Signalish<boolean | undefined>;
    largeop?: Signalish<boolean | undefined>;
    lspace?: Signalish<string | undefined>;
    maxsize?: Signalish<string | undefined>;
    minsize?: Signalish<string | undefined>;
    movablelimits?: Signalish<boolean | undefined>;
    rspace?: Signalish<string | undefined>;
    separator?: Signalish<boolean | undefined>;
    stretchy?: Signalish<boolean | undefined>;
    symmetric?: Signalish<boolean | undefined>;
  }
  export interface MOverMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    accent?: Signalish<boolean | undefined>;
  }
  export interface MPaddedMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    depth?: Signalish<string | undefined>;
    height?: Signalish<string | undefined>;
    lspace?: Signalish<string | undefined>;
    voffset?: Signalish<string | undefined>;
    width?: Signalish<string | undefined>;
  }
  export interface MPhantomMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {}
  export interface MPrescriptsMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {}
  export interface MRootMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {}
  export interface MRowMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {}
  export interface MSMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/ms#browser_compatibility */
    lquote?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/ms#browser_compatibility */
    rquote?: Signalish<string | undefined>;
  }
  export interface MSpaceMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    depth?: Signalish<string | undefined>;
    height?: Signalish<string | undefined>;
    width?: Signalish<string | undefined>;
  }
  export interface MSqrtMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {}
  export interface MStyleMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#background */
    background?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#color */
    color?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#fontsize */
    fontsize?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#fontstyle */
    fontstyle?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#fontweight */
    fontweight?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#scriptminsize */
    scriptminsize?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mstyle#scriptsizemultiplier */
    scriptsizemultiplier?: Signalish<string | undefined>;
  }
  export interface MSubMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msub#subscriptshift */
    subscriptshift?: Signalish<string | undefined>;
  }
  export interface MSubsupMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msubsup#subscriptshift */
    subscriptshift?: Signalish<string | undefined>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msubsup#superscriptshift */
    superscriptshift?: Signalish<string | undefined>;
  }
  export interface MSupMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/msup#superscriptshift */
    superscriptshift?: Signalish<string | undefined>;
  }
  export interface MTableMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#align */
    align?: Signalish<
      'axis' | 'baseline' | 'bottom' | 'center' | 'top' | undefined
    >;
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnalign */
    columnalign?: Signalish<'center' | 'left' | 'right' | undefined>;
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnlines */
    columnlines?: Signalish<'dashed' | 'none' | 'solid' | undefined>;
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#columnspacing */
    columnspacing?: Signalish<string | undefined>;
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#frame */
    frame?: Signalish<'dashed' | 'none' | 'solid' | undefined>;
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#framespacing */
    framespacing?: Signalish<string | undefined>;
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowalign */
    rowalign?: Signalish<
      'axis' | 'baseline' | 'bottom' | 'center' | 'top' | undefined
    >;
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowlines */
    rowlines?: Signalish<'dashed' | 'none' | 'solid' | undefined>;
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#rowspacing */
    rowspacing?: Signalish<string | undefined>;
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtable#width */
    width?: Signalish<string | undefined>;
  }
  export interface MTdMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    columnspan?: Signalish<number | undefined>;
    rowspan?: Signalish<number | undefined>;
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd#columnalign */
    columnalign?: Signalish<'center' | 'left' | 'right' | undefined>;
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtd#rowalign */
    rowalign?: Signalish<
      'axis' | 'baseline' | 'bottom' | 'center' | 'top' | undefined
    >;
  }
  export interface MTextMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {}
  export interface MTrMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr#columnalign */
    columnalign?: Signalish<'center' | 'left' | 'right' | undefined>;
    /** Non-standard attribute See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mtr#rowalign */
    rowalign?: Signalish<
      'axis' | 'baseline' | 'bottom' | 'center' | 'top' | undefined
    >;
  }
  export interface MUnderMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    accentunder?: Signalish<boolean | undefined>;
  }
  export interface MUnderoverMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {
    accent?: Signalish<boolean | undefined>;
    accentunder?: Signalish<boolean | undefined>;
  }
  export interface SemanticsMathMLAttributes<T extends EventTarget>
    extends MathMLAttributes<T> {}
  export interface IntrinsicSVGElements {
    svg: SVGAttributes<SVGSVGElement>;
    animate: SVGAttributes<SVGAnimateElement>;
    circle: SVGAttributes<SVGCircleElement>;
    animateMotion: SVGAttributes<SVGAnimateMotionElement>;
    animateTransform: SVGAttributes<SVGAnimateTransformElement>;
    clipPath: SVGAttributes<SVGClipPathElement>;
    defs: SVGAttributes<SVGDefsElement>;
    desc: SVGAttributes<SVGDescElement>;
    ellipse: SVGAttributes<SVGEllipseElement>;
    feBlend: SVGAttributes<SVGFEBlendElement>;
    feColorMatrix: SVGAttributes<SVGFEColorMatrixElement>;
    feComponentTransfer: SVGAttributes<SVGFEComponentTransferElement>;
    feComposite: SVGAttributes<SVGFECompositeElement>;
    feConvolveMatrix: SVGAttributes<SVGFEConvolveMatrixElement>;
    feDiffuseLighting: SVGAttributes<SVGFEDiffuseLightingElement>;
    feDisplacementMap: SVGAttributes<SVGFEDisplacementMapElement>;
    feDistantLight: SVGAttributes<SVGFEDistantLightElement>;
    feDropShadow: SVGAttributes<SVGFEDropShadowElement>;
    feFlood: SVGAttributes<SVGFEFloodElement>;
    feFuncA: SVGAttributes<SVGFEFuncAElement>;
    feFuncB: SVGAttributes<SVGFEFuncBElement>;
    feFuncG: SVGAttributes<SVGFEFuncGElement>;
    feFuncR: SVGAttributes<SVGFEFuncRElement>;
    feGaussianBlur: SVGAttributes<SVGFEGaussianBlurElement>;
    feImage: SVGAttributes<SVGFEImageElement>;
    feMerge: SVGAttributes<SVGFEMergeElement>;
    feMergeNode: SVGAttributes<SVGFEMergeNodeElement>;
    feMorphology: SVGAttributes<SVGFEMorphologyElement>;
    feOffset: SVGAttributes<SVGFEOffsetElement>;
    fePointLight: SVGAttributes<SVGFEPointLightElement>;
    feSpecularLighting: SVGAttributes<SVGFESpecularLightingElement>;
    feSpotLight: SVGAttributes<SVGFESpotLightElement>;
    feTile: SVGAttributes<SVGFETileElement>;
    feTurbulence: SVGAttributes<SVGFETurbulenceElement>;
    filter: SVGAttributes<SVGFilterElement>;
    foreignObject: SVGAttributes<SVGForeignObjectElement>;
    g: SVGAttributes<SVGGElement>;
    image: SVGAttributes<SVGImageElement>;
    line: SVGAttributes<SVGLineElement>;
    linearGradient: SVGAttributes<SVGLinearGradientElement>;
    marker: SVGAttributes<SVGMarkerElement>;
    mask: SVGAttributes<SVGMaskElement>;
    metadata: SVGAttributes<SVGMetadataElement>;
    mpath: SVGAttributes<SVGMPathElement>;
    path: SVGAttributes<SVGPathElement>;
    pattern: SVGAttributes<SVGPatternElement>;
    polygon: SVGAttributes<SVGPolygonElement>;
    polyline: SVGAttributes<SVGPolylineElement>;
    radialGradient: SVGAttributes<SVGRadialGradientElement>;
    rect: SVGAttributes<SVGRectElement>;
    set: SVGAttributes<SVGSetElement>;
    stop: SVGAttributes<SVGStopElement>;
    switch: SVGAttributes<SVGSwitchElement>;
    symbol: SVGAttributes<SVGSymbolElement>;
    text: SVGAttributes<SVGTextElement>;
    textPath: SVGAttributes<SVGTextPathElement>;
    tspan: SVGAttributes<SVGTSpanElement>;
    use: SVGAttributes<SVGUseElement>;
    view: SVGAttributes<SVGViewElement>;
  }
  export interface IntrinsicMathMLElements {
    annotation: AnnotationMathMLAttributes<MathMLElement>;
    'annotation-xml': AnnotationXmlMathMLAttributes<MathMLElement>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/maction */
    maction: MActionMathMLAttributes<MathMLElement>;
    math: MathMathMLAttributes<MathMLElement>;
    /** This feature is non-standard. See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/menclose  */
    menclose: MEncloseMathMLAttributes<MathMLElement>;
    merror: MErrorMathMLAttributes<MathMLElement>;
    /** @deprecated See https://developer.mozilla.org/en-US/docs/Web/MathML/Element/mfenced */
    mfenced: MFencedMathMLAttributes<MathMLElement>;
    mfrac: MFracMathMLAttributes<MathMLElement>;
    mi: MiMathMLAttributes<MathMLElement>;
    mmultiscripts: MmultiScriptsMathMLAttributes<MathMLElement>;
    mn: MNMathMLAttributes<MathMLElement>;
    mo: MOMathMLAttributes<MathMLElement>;
    mover: MOverMathMLAttributes<MathMLElement>;
    mpadded: MPaddedMathMLAttributes<MathMLElement>;
    mphantom: MPhantomMathMLAttributes<MathMLElement>;
    mprescripts: MPrescriptsMathMLAttributes<MathMLElement>;
    mroot: MRootMathMLAttributes<MathMLElement>;
    mrow: MRowMathMLAttributes<MathMLElement>;
    ms: MSMathMLAttributes<MathMLElement>;
    mspace: MSpaceMathMLAttributes<MathMLElement>;
    msqrt: MSqrtMathMLAttributes<MathMLElement>;
    mstyle: MStyleMathMLAttributes<MathMLElement>;
    msub: MSubMathMLAttributes<MathMLElement>;
    msubsup: MSubsupMathMLAttributes<MathMLElement>;
    msup: MSupMathMLAttributes<MathMLElement>;
    mtable: MTableMathMLAttributes<MathMLElement>;
    mtd: MTdMathMLAttributes<MathMLElement>;
    mtext: MTextMathMLAttributes<MathMLElement>;
    mtr: MTrMathMLAttributes<MathMLElement>;
    munder: MUnderMathMLAttributes<MathMLElement>;
    munderover: MUnderMathMLAttributes<MathMLElement>;
    semantics: SemanticsMathMLAttributes<MathMLElement>;
  }
  export interface IntrinsicElements
    extends IntrinsicSVGElements,
      IntrinsicMathMLElements {
    a: AnchorHTMLAttributes<HTMLAnchorElement>;
    abbr: HTMLAttributes<HTMLElement>;
    address: HTMLAttributes<HTMLElement>;
    area: AreaHTMLAttributes<HTMLAreaElement>;
    article: HTMLAttributes<HTMLElement>;
    aside: HTMLAttributes<HTMLElement>;
    audio: AudioHTMLAttributes<HTMLAudioElement>;
    b: HTMLAttributes<HTMLElement>;
    base: BaseHTMLAttributes<HTMLBaseElement>;
    bdi: HTMLAttributes<HTMLElement>;
    bdo: HTMLAttributes<HTMLElement>;
    big: HTMLAttributes<HTMLElement>;
    blockquote: BlockquoteHTMLAttributes<HTMLQuoteElement>;
    body: HTMLAttributes<HTMLBodyElement>;
    br: HTMLAttributes<HTMLBRElement>;
    button: ButtonHTMLAttributes<HTMLButtonElement>;
    canvas: CanvasHTMLAttributes<HTMLCanvasElement>;
    caption: HTMLAttributes<HTMLTableCaptionElement>;
    cite: HTMLAttributes<HTMLElement>;
    code: HTMLAttributes<HTMLElement>;
    col: ColHTMLAttributes<HTMLTableColElement>;
    colgroup: ColgroupHTMLAttributes<HTMLTableColElement>;
    data: DataHTMLAttributes<HTMLDataElement>;
    datalist: HTMLAttributes<HTMLDataListElement>;
    dd: HTMLAttributes<HTMLElement>;
    del: DelHTMLAttributes<HTMLModElement>;
    details: DetailsHTMLAttributes<HTMLDetailsElement>;
    dfn: HTMLAttributes<HTMLElement>;
    dialog: DialogHTMLAttributes<HTMLDialogElement>;
    div: HTMLAttributes<HTMLDivElement>;
    dl: HTMLAttributes<HTMLDListElement>;
    dt: HTMLAttributes<HTMLElement>;
    em: HTMLAttributes<HTMLElement>;
    embed: EmbedHTMLAttributes<HTMLEmbedElement>;
    fieldset: FieldsetHTMLAttributes<HTMLFieldSetElement>;
    figcaption: HTMLAttributes<HTMLElement>;
    figure: HTMLAttributes<HTMLElement>;
    footer: HTMLAttributes<HTMLElement>;
    form: FormHTMLAttributes<HTMLFormElement>;
    h1: HTMLAttributes<HTMLHeadingElement>;
    h2: HTMLAttributes<HTMLHeadingElement>;
    h3: HTMLAttributes<HTMLHeadingElement>;
    h4: HTMLAttributes<HTMLHeadingElement>;
    h5: HTMLAttributes<HTMLHeadingElement>;
    h6: HTMLAttributes<HTMLHeadingElement>;
    head: HTMLAttributes<HTMLHeadElement>;
    header: HTMLAttributes<HTMLElement>;
    hgroup: HTMLAttributes<HTMLElement>;
    hr: HTMLAttributes<HTMLHRElement>;
    html: HTMLAttributes<HTMLHtmlElement>;
    i: HTMLAttributes<HTMLElement>;
    iframe: IframeHTMLAttributes<HTMLIFrameElement>;
    img: ImgHTMLAttributes<HTMLImageElement>;
    input: InputHTMLAttributes<HTMLInputElement>;
    ins: InsHTMLAttributes<HTMLModElement>;
    kbd: HTMLAttributes<HTMLElement>;
    keygen: KeygenHTMLAttributes<HTMLUnknownElement>;
    label: LabelHTMLAttributes<HTMLLabelElement>;
    legend: HTMLAttributes<HTMLLegendElement>;
    li: LiHTMLAttributes<HTMLLIElement>;
    link: LinkHTMLAttributes<HTMLLinkElement>;
    main: HTMLAttributes<HTMLElement>;
    map: MapHTMLAttributes<HTMLMapElement>;
    mark: HTMLAttributes<HTMLElement>;
    marquee: MarqueeHTMLAttributes<HTMLMarqueeElement>;
    menu: MenuHTMLAttributes<HTMLMenuElement>;
    menuitem: HTMLAttributes<HTMLUnknownElement>;
    meta: MetaHTMLAttributes<HTMLMetaElement>;
    meter: MeterHTMLAttributes<HTMLMeterElement>;
    nav: HTMLAttributes<HTMLElement>;
    noscript: HTMLAttributes<HTMLElement>;
    object: ObjectHTMLAttributes<HTMLObjectElement>;
    ol: OlHTMLAttributes<HTMLOListElement>;
    optgroup: OptgroupHTMLAttributes<HTMLOptGroupElement>;
    option: OptionHTMLAttributes<HTMLOptionElement>;
    output: OutputHTMLAttributes<HTMLOutputElement>;
    p: HTMLAttributes<HTMLParagraphElement>;
    param: ParamHTMLAttributes<HTMLParamElement>;
    picture: HTMLAttributes<HTMLPictureElement>;
    pre: HTMLAttributes<HTMLPreElement>;
    progress: ProgressHTMLAttributes<HTMLProgressElement>;
    q: QuoteHTMLAttributes<HTMLQuoteElement>;
    rp: HTMLAttributes<HTMLElement>;
    rt: HTMLAttributes<HTMLElement>;
    ruby: HTMLAttributes<HTMLElement>;
    s: HTMLAttributes<HTMLElement>;
    samp: HTMLAttributes<HTMLElement>;
    script: ScriptHTMLAttributes<HTMLScriptElement>;
    search: HTMLAttributes<HTMLElement>;
    section: HTMLAttributes<HTMLElement>;
    select: SelectHTMLAttributes<HTMLSelectElement>;
    slot: SlotHTMLAttributes<HTMLSlotElement>;
    small: HTMLAttributes<HTMLElement>;
    source: SourceHTMLAttributes<HTMLSourceElement>;
    span: HTMLAttributes<HTMLSpanElement>;
    strong: HTMLAttributes<HTMLElement>;
    style: StyleHTMLAttributes<HTMLStyleElement>;
    sub: HTMLAttributes<HTMLElement>;
    summary: HTMLAttributes<HTMLElement>;
    sup: HTMLAttributes<HTMLElement>;
    table: TableHTMLAttributes<HTMLTableElement>;
    tbody: HTMLAttributes<HTMLTableSectionElement>;
    td: TdHTMLAttributes<HTMLTableCellElement>;
    template: HTMLAttributes<HTMLTemplateElement>;
    textarea: TextareaHTMLAttributes<HTMLTextAreaElement>;
    tfoot: HTMLAttributes<HTMLTableSectionElement>;
    th: ThHTMLAttributes<HTMLTableCellElement>;
    thead: HTMLAttributes<HTMLTableSectionElement>;
    time: TimeHTMLAttributes<HTMLTimeElement>;
    title: HTMLAttributes<HTMLTitleElement>;
    tr: HTMLAttributes<HTMLTableRowElement>;
    track: TrackHTMLAttributes<HTMLTrackElement>;
    u: HTMLAttributes<HTMLElement>;
    ul: HTMLAttributes<HTMLUListElement>;
    var: HTMLAttributes<HTMLElement>;
    video: VideoHTMLAttributes<HTMLVideoElement>;
    wbr: HTMLAttributes<HTMLElement>;
  }
}
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
interface ClassAttributes<T> extends Attributes {
  ref?: Ref<T>;
}
interface PreactDOMAttributes {
  children?: ComponentChildren$1;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
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
type ComponentFactory<P = {}> = ComponentType<P>;
type ComponentProps<
  C extends ComponentType<any> | keyof JSXInternal.IntrinsicElements,
> = C extends ComponentType<infer P>
  ? P
  : C extends keyof JSXInternal.IntrinsicElements
  ? JSXInternal.IntrinsicElements[C]
  : never;
interface FunctionComponent<P = {}> {
  (props: RenderableProps<P>, context?: any): ComponentChildren$1;
  displayName?: string;
  defaultProps?: Partial<P> | undefined;
}
interface FunctionalComponent<P = {}> extends FunctionComponent<P> {}
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
interface ComponentConstructor<P = {}, S = {}> extends ComponentClass<P, S> {}
type AnyComponent<P = {}, S = {}> =
  | FunctionComponent<P>
  | ComponentConstructor<P, S>;
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
  ): ComponentChildren$1;
}
declare function createElement(
  type: 'input',
  props:
    | (JSXInternal.DOMAttributes<HTMLInputElement> &
        ClassAttributes<HTMLInputElement>)
    | null,
  ...children: ComponentChildren$1[]
): VNode<
  JSXInternal.DOMAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement>
>;
declare function createElement<
  P extends JSXInternal.HTMLAttributes<T>,
  T extends HTMLElement,
>(
  type: keyof JSXInternal.IntrinsicElements,
  props: (ClassAttributes<T> & P) | null,
  ...children: ComponentChildren$1[]
): VNode<ClassAttributes<T> & P>;
declare function createElement<
  P extends JSXInternal.SVGAttributes<T>,
  T extends HTMLElement,
>(
  type: keyof JSXInternal.IntrinsicSVGElements,
  props: (ClassAttributes<T> & P) | null,
  ...children: ComponentChildren$1[]
): VNode<ClassAttributes<T> & P>;
declare function createElement<T extends HTMLElement>(
  type: string,
  props:
    | (ClassAttributes<T> &
        JSXInternal.HTMLAttributes &
        JSXInternal.SVGAttributes)
    | null,
  ...children: ComponentChildren$1[]
): VNode<
  ClassAttributes<T> & JSXInternal.HTMLAttributes & JSXInternal.SVGAttributes
>;
declare function createElement<P>(
  type: ComponentType<P> | string,
  props: (Attributes & P) | null,
  ...children: ComponentChildren$1[]
): VNode<P>;
declare namespace createElement {
  export import JSXInternal = JSXInternal;
}
declare function h(
  type: 'input',
  props:
    | (JSXInternal.DOMAttributes<HTMLInputElement> &
        ClassAttributes<HTMLInputElement>)
    | null,
  ...children: ComponentChildren$1[]
): VNode<
  JSXInternal.DOMAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement>
>;
declare function h<
  P extends JSXInternal.HTMLAttributes<T>,
  T extends HTMLElement,
>(
  type: keyof JSXInternal.IntrinsicElements,
  props: (ClassAttributes<T> & P) | null,
  ...children: ComponentChildren$1[]
): VNode<ClassAttributes<T> & P>;
declare function h<
  P extends JSXInternal.SVGAttributes<T>,
  T extends HTMLElement,
>(
  type: keyof JSXInternal.IntrinsicSVGElements,
  props: (ClassAttributes<T> & P) | null,
  ...children: ComponentChildren$1[]
): VNode<ClassAttributes<T> & P>;
declare function h<T extends HTMLElement>(
  type: string,
  props:
    | (ClassAttributes<T> &
        JSXInternal.HTMLAttributes &
        JSXInternal.SVGAttributes)
    | null,
  ...children: ComponentChildren$1[]
): VNode<
  | (ClassAttributes<T> &
      JSXInternal.HTMLAttributes &
      JSXInternal.SVGAttributes)
  | null
>;
declare function h<P>(
  type: ComponentType<P> | string,
  props: (Attributes & P) | null,
  ...children: ComponentChildren$1[]
): VNode<Attributes & P>;
declare namespace h {
  export import JSXInternal = JSXInternal;
}
interface ContainerNode {
  readonly nodeType: number;
  readonly parentNode: ContainerNode | null;
  readonly firstChild: ContainerNode | null;
  readonly childNodes: ArrayLike<ContainerNode>;
  contains(other: ContainerNode | null): boolean;
  insertBefore(node: ContainerNode, child: ContainerNode | null): ContainerNode;
  appendChild(node: ContainerNode): ContainerNode;
  removeChild(child: ContainerNode): ContainerNode;
}
declare function render(vnode: ComponentChild, parent: ContainerNode): void;
declare function render(
  vnode: ComponentChild,
  parent: ContainerNode,
  replaceNode?: Element | Text,
): void;
declare function hydrate(vnode: ComponentChild, parent: ContainerNode): void;
declare function cloneElement(
  vnode: VNode<any>,
  props?: any,
  ...children: ComponentChildren$1[]
): VNode<any>;
declare function cloneElement<P>(
  vnode: VNode<P>,
  props?: any,
  ...children: ComponentChildren$1[]
): VNode<P>;
declare const Fragment: FunctionComponent<{}>;
interface Options {
  /** Attach a hook that is invoked whenever a VNode is created. */
  vnode?(vnode: VNode): void;
  /** Attach a hook that is invoked immediately before a vnode is unmounted. */
  unmount?(vnode: VNode): void;
  /** Attach a hook that is invoked after a vnode has rendered. */
  diffed?(vnode: VNode): void;
  event?(e: Event): any;
  requestAnimationFrame?(callback: () => void): void;
  debounceRendering?(cb: () => void): void;
  useDebugValue?(value: string | number): void;
  _addHookName?(name: string | number): void;
  __suspenseDidResolve?(vnode: VNode, cb: () => void): void;
  // __canSuspenseResolve?(vnode: VNode, cb: () => void): void;
  /**
   * Customize attribute serialization when a precompiled JSX transform
   * is used.
   */
  attr?(name: string, value: any): string | void;
}
declare const options: Options;
declare function createRef<T = any>(): RefObject<T>;
declare function toChildArray(
  children: ComponentChildren$1,
): (VNode | string | number)[];
declare function isValidElement(vnode: any): vnode is VNode;
interface Consumer<T>
  extends FunctionComponent<{
    children: (value: T) => ComponentChildren$1;
  }> {}
interface PreactConsumer<T> extends Consumer<T> {}
interface Provider<T>
  extends FunctionComponent<{
    value: T;
    children?: ComponentChildren$1;
  }> {}
interface PreactProvider<T> extends Provider<T> {}
type ContextType<C extends Context<any>> = C extends Context<infer T>
  ? T
  : never;
interface Context<T> {
  Consumer: Consumer<T>;
  Provider: Provider<T>;
  displayName?: string;
}
interface PreactContext<T> extends Context<T> {}
declare function createContext<T>(defaultValue: T): Context<T>;
type Inputs = ReadonlyArray<unknown>;
type Dispatch<A> = (value: A) => void;
type StateUpdater<S> = S | ((prevState: S) => S);
declare function useState<S>(
  initialState: S | (() => S),
): [S, Dispatch<StateUpdater<S>>];
declare function useState<S = undefined>(): [
  S | undefined,
  Dispatch<StateUpdater<S | undefined>>,
];
type Reducer<S, A> = (prevState: S, action: A) => S;
declare function useReducer<S, A>(
  reducer: Reducer<S, A>,
  initialState: S,
): [S, Dispatch<A>];
declare function useReducer<S, A, I>(
  reducer: Reducer<S, A>,
  initialArg: I,
  init: (arg: I) => S,
): [S, Dispatch<A>];
type PropRef<T> = MutableRef<T>;
interface MutableRef<T> {
  current: T;
}
declare function useRef<T>(initialValue: T): MutableRef<T>;
declare function useRef<T>(initialValue: T | null): RefObject<T>;
declare function useRef<T = undefined>(): MutableRef<T | undefined>;
type EffectCallback = () => void | (() => void);
declare function useEffect(effect: EffectCallback, inputs?: Inputs): void;
type CreateHandle = () => object;
declare function useImperativeHandle<T, R extends T>(
  ref: Ref<T>,
  create: () => R,
  inputs?: Inputs,
): void;
declare function useLayoutEffect(effect: EffectCallback, inputs?: Inputs): void;
declare function useCallback<T extends Function>(
  callback: T,
  inputs: Inputs,
): T;
declare function useMemo<T>(factory: () => T, inputs: Inputs | undefined): T;
declare function useContext<T>(context: PreactContext<T>): T;
declare function useDebugValue<T>(
  value: T,
  formatter?: (value: T) => any,
): void;
declare function useId(): string;
declare function lazy<T>(
  loader: () => Promise<
    | {
        default: T;
      }
    | T
  >,
): T extends {
  default: infer U;
}
  ? U
  : T;
interface SuspenseProps {
  children?: ComponentChildren$1;
  fallback: ComponentChildren$1;
}
declare class Suspense extends Component<SuspenseProps> {
  render(): ComponentChild;
}
interface SuspenseListProps {
  children?: ComponentChildren$1;
  revealOrder?: 'forwards' | 'backwards' | 'together';
}
declare class SuspenseList extends Component<SuspenseListProps> {
  render(): ComponentChild;
}
declare namespace React$1 {
  // Export JSX
  export import JSXInternal = JSXInternal;
  // Hooks
  export import CreateHandle = CreateHandle;
  export import EffectCallback = EffectCallback;
  export import Inputs = Inputs;
  export import PropRef = PropRef;
  export import Reducer = Reducer;
  export import Dispatch = Dispatch;
  export import StateUpdater = StateUpdater;
  export import useCallback = useCallback;
  export import useContext = useContext;
  export import useDebugValue = useDebugValue;
  export import useEffect = useEffect;
  export import useImperativeHandle = useImperativeHandle;
  export import useId = useId;
  export import useLayoutEffect = useLayoutEffect;
  export import useMemo = useMemo;
  export import useReducer = useReducer;
  export import useRef = useRef;
  export import useState = useState;
  // React 18 hooks
  export import useLayoutEffect = useLayoutEffect;
  export function useTransition(): [false, typeof startTransition];
  export function useDeferredValue<T = any>(val: T): T;
  export function useSyncExternalStore<T>(
    subscribe: (flush: () => void) => () => void,
    getSnapshot: () => T,
  ): T;
  // Preact Defaults
  export import Context = Context;
  export import ContextType = ContextType;
  export import RefObject = RefObject;
  export import Component = Component;
  export import FunctionComponent = FunctionComponent;
  export import ComponentType = ComponentType;
  export import ComponentClass = ComponentClass;
  export import FunctionComponent = FunctionComponent;
  export import createContext = createContext;
  export import Ref = Ref;
  export import createRef = createRef;
  export import Fragment = Fragment;
  export import createElement = createElement;
  export import cloneElement = cloneElement;
  export import ComponentProps = ComponentProps;
  export import ComponentChild = ComponentChild;
  export import VNode = VNode;
  export import Consumer = Consumer;
  export import ErrorInfo = ErrorInfo;
  // Suspense
  export import Suspense = Suspense;
  export import lazy = lazy;
  export import SuspenseList = SuspenseList;
  // Compat
  export import Fragment = Fragment;
  export const version: string;
  export function startTransition(cb: () => void): void;
  // HTML
  export interface HTMLAttributes<T extends EventTarget>
    extends JSXInternal.HTMLAttributes<T> {}
  export interface HTMLProps<T extends EventTarget>
    extends JSXInternal.HTMLAttributes<T>,
      ClassAttributes<T> {}
  export interface AllHTMLAttributes<T extends EventTarget>
    extends JSXInternal.AllHTMLAttributes<T> {}
  export import DetailedHTMLProps = JSXInternal.DetailedHTMLProps;
  export import CSSProperties = JSXInternal.CSSProperties;
  export interface SVGProps<T extends EventTarget>
    extends JSXInternal.SVGAttributes<T>,
      ClassAttributes<T> {}
  interface SVGAttributes extends JSXInternal.SVGAttributes {}
  interface ReactSVG extends JSXInternal.IntrinsicSVGElements {}
  export import HTMLAttributeReferrerPolicy = JSXInternal.HTMLAttributeReferrerPolicy;
  export import HTMLAttributeAnchorTarget = JSXInternal.HTMLAttributeAnchorTarget;
  export import HTMLInputTypeAttribute = JSXInternal.HTMLInputTypeAttribute;
  export import HTMLAttributeCrossOrigin = JSXInternal.HTMLAttributeCrossOrigin;
  export import AnchorHTMLAttributes = JSXInternal.AnchorHTMLAttributes;
  export import AudioHTMLAttributes = JSXInternal.AudioHTMLAttributes;
  export import AreaHTMLAttributes = JSXInternal.AreaHTMLAttributes;
  export import BaseHTMLAttributes = JSXInternal.BaseHTMLAttributes;
  export import BlockquoteHTMLAttributes = JSXInternal.BlockquoteHTMLAttributes;
  export import ButtonHTMLAttributes = JSXInternal.ButtonHTMLAttributes;
  export import CanvasHTMLAttributes = JSXInternal.CanvasHTMLAttributes;
  export import ColHTMLAttributes = JSXInternal.ColHTMLAttributes;
  export import ColgroupHTMLAttributes = JSXInternal.ColgroupHTMLAttributes;
  export import DataHTMLAttributes = JSXInternal.DataHTMLAttributes;
  export import DetailsHTMLAttributes = JSXInternal.DetailsHTMLAttributes;
  export import DelHTMLAttributes = JSXInternal.DelHTMLAttributes;
  export import DialogHTMLAttributes = JSXInternal.DialogHTMLAttributes;
  export import EmbedHTMLAttributes = JSXInternal.EmbedHTMLAttributes;
  export import FieldsetHTMLAttributes = JSXInternal.FieldsetHTMLAttributes;
  export import FormHTMLAttributes = JSXInternal.FormHTMLAttributes;
  export import IframeHTMLAttributes = JSXInternal.IframeHTMLAttributes;
  export import ImgHTMLAttributes = JSXInternal.ImgHTMLAttributes;
  export import InsHTMLAttributes = JSXInternal.InsHTMLAttributes;
  export import InputHTMLAttributes = JSXInternal.InputHTMLAttributes;
  export import KeygenHTMLAttributes = JSXInternal.KeygenHTMLAttributes;
  export import LabelHTMLAttributes = JSXInternal.LabelHTMLAttributes;
  export import LiHTMLAttributes = JSXInternal.LiHTMLAttributes;
  export import LinkHTMLAttributes = JSXInternal.LinkHTMLAttributes;
  export import MapHTMLAttributes = JSXInternal.MapHTMLAttributes;
  export import MenuHTMLAttributes = JSXInternal.MenuHTMLAttributes;
  export import MediaHTMLAttributes = JSXInternal.MediaHTMLAttributes;
  export import MetaHTMLAttributes = JSXInternal.MetaHTMLAttributes;
  export import MeterHTMLAttributes = JSXInternal.MeterHTMLAttributes;
  export import QuoteHTMLAttributes = JSXInternal.QuoteHTMLAttributes;
  export import ObjectHTMLAttributes = JSXInternal.ObjectHTMLAttributes;
  export import OlHTMLAttributes = JSXInternal.OlHTMLAttributes;
  export import OptgroupHTMLAttributes = JSXInternal.OptgroupHTMLAttributes;
  export import OptionHTMLAttributes = JSXInternal.OptionHTMLAttributes;
  export import OutputHTMLAttributes = JSXInternal.OutputHTMLAttributes;
  export import ParamHTMLAttributes = JSXInternal.ParamHTMLAttributes;
  export import ProgressHTMLAttributes = JSXInternal.ProgressHTMLAttributes;
  export import SlotHTMLAttributes = JSXInternal.SlotHTMLAttributes;
  export import ScriptHTMLAttributes = JSXInternal.ScriptHTMLAttributes;
  export import SelectHTMLAttributes = JSXInternal.SelectHTMLAttributes;
  export import SourceHTMLAttributes = JSXInternal.SourceHTMLAttributes;
  export import StyleHTMLAttributes = JSXInternal.StyleHTMLAttributes;
  export import TableHTMLAttributes = JSXInternal.TableHTMLAttributes;
  export import TextareaHTMLAttributes = JSXInternal.TextareaHTMLAttributes;
  export import TdHTMLAttributes = JSXInternal.TdHTMLAttributes;
  export import ThHTMLAttributes = JSXInternal.ThHTMLAttributes;
  export import TimeHTMLAttributes = JSXInternal.TimeHTMLAttributes;
  export import TrackHTMLAttributes = JSXInternal.TrackHTMLAttributes;
  export import VideoHTMLAttributes = JSXInternal.VideoHTMLAttributes;
  // Events
  export import TargetedEvent = JSXInternal.TargetedEvent;
  export import ChangeEvent = JSXInternal.TargetedEvent;
  export import ClipboardEvent = JSXInternal.TargetedClipboardEvent;
  export import CompositionEvent = JSXInternal.TargetedCompositionEvent;
  export import DragEvent = JSXInternal.TargetedDragEvent;
  export import PointerEvent = JSXInternal.TargetedPointerEvent;
  export import FocusEvent = JSXInternal.TargetedFocusEvent;
  export import FormEvent = JSXInternal.TargetedEvent;
  export import InvalidEvent = JSXInternal.TargetedEvent;
  export import KeyboardEvent = JSXInternal.TargetedKeyboardEvent;
  export import MouseEvent = JSXInternal.TargetedMouseEvent;
  export import TouchEvent = JSXInternal.TargetedTouchEvent;
  export import UIEvent = JSXInternal.TargetedUIEvent;
  export import AnimationEvent = JSXInternal.TargetedAnimationEvent;
  export import TransitionEvent = JSXInternal.TargetedTransitionEvent;
  // Event Handler Types
  export import ChangeEventHandler = JSXInternal.GenericEventHandler;
  export import ClipboardEventHandler = JSXInternal.ClipboardEventHandler;
  export import CompositionEventHandler = JSXInternal.CompositionEventHandler;
  export import DragEventHandler = JSXInternal.DragEventHandler;
  export import PointerEventHandler = JSXInternal.PointerEventHandler;
  export import FocusEventHandler = JSXInternal.FocusEventHandler;
  export import FormEventHandler = JSXInternal.GenericEventHandler;
  export import InvalidEventHandler = JSXInternal.GenericEventHandler;
  export import KeyboardEventHandler = JSXInternal.KeyboardEventHandler;
  export import MouseEventHandler = JSXInternal.MouseEventHandler;
  export import TouchEventHandler = JSXInternal.TouchEventHandler;
  export import UIEventHandler = JSXInternal.UIEventHandler;
  export import AnimationEventHandler = JSXInternal.AnimationEventHandler;
  export import TransitionEventHandler = JSXInternal.TransitionEventHandler;
  export function createPortal(
    vnode: ComponentChildren$1,
    container: ContainerNode,
  ): VNode<any>;
  export function render(
    vnode: ComponentChild,
    parent: ContainerNode,
    callback?: () => void,
  ): Component | null;
  export function hydrate(
    vnode: ComponentChild,
    parent: ContainerNode,
    callback?: () => void,
  ): Component | null;
  export function unmountComponentAtNode(container: ContainerNode): boolean;
  export function createFactory(
    type: VNode<any>['type'],
  ): (props?: any, ...children: ComponentChildren$1[]) => VNode<any>;
  export function isValidElement(element: any): boolean;
  export function isFragment(element: any): boolean;
  export function isMemo(element: any): boolean;
  export function findDOMNode(component: Component | Element): Element | null;
  export abstract class PureComponent<
    P = {},
    S = {},
    SS = any,
  > extends Component<P, S> {
    isPureReactComponent: boolean;
  }
  export type MemoExoticComponent<C extends FunctionalComponent<any>> =
    FunctionComponent<ComponentProps<C>> & {
      readonly type: C;
    };
  export function memo<P = {}>(
    component: FunctionalComponent<P>,
    comparer?: (prev: P, next: P) => boolean,
  ): FunctionComponent<P>;
  export function memo<C extends FunctionalComponent<any>>(
    component: C,
    comparer?: (prev: ComponentProps<C>, next: ComponentProps<C>) => boolean,
  ): C;
  export interface RefAttributes<R> extends Attributes {
    ref?: Ref<R> | undefined;
  }
  export interface ForwardFn<P = {}, T = any> {
    (props: P, ref: ForwardedRef<T>): ComponentChild;
    displayName?: string;
  }
  export interface ForwardRefExoticComponent<P> extends FunctionComponent<P> {
    defaultProps?: Partial<P> | undefined;
  }
  export function forwardRef<R, P = {}>(
    fn: ForwardFn<P, R>,
  ): FunctionalComponent<
    PropsWithoutRef<P> & {
      ref?: Ref<R>;
    }
  >;
  export type PropsWithoutRef<P> = Omit<P, 'ref'>;
  interface MutableRefObject<T> {
    current: T;
  }
  export type ForwardedRef<T> =
    | ((instance: T | null) => void)
    | MutableRefObject<T | null>
    | null;
  export type ElementType<
    P = any,
    Tag extends keyof JSXInternal.IntrinsicElements = keyof JSXInternal.IntrinsicElements,
  > =
    | {
        [K in Tag]: P extends JSXInternal.IntrinsicElements[K] ? K : never;
      }[Tag]
    | ComponentType<P>;
  export type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<
    ComponentProps<T>
  >;
  export type ComponentPropsWithRef<C extends ElementType> = C extends new (
    props: infer P,
  ) => Component<any, any>
    ? PropsWithoutRef<P> & RefAttributes<InstanceType<C>>
    : ComponentProps<C>;
  export type ElementRef<
    C extends
      | ForwardRefExoticComponent<any>
      | {
          new (props: any): Component<any, any>;
        }
      | ((props: any) => ComponentChild)
      | keyof JSXInternal.IntrinsicElements,
  > = 'ref' extends keyof ComponentPropsWithRef<C>
    ? NonNullable<ComponentPropsWithRef<C>['ref']> extends RefAttributes<
        infer Instance
      >['ref']
      ? Instance
      : never
    : never;
  export function flushSync<R>(fn: () => R): R;
  export function flushSync<A, R>(fn: (a: A) => R, a: A): R;
  export function unstable_batchedUpdates(
    callback: (arg?: any) => void,
    arg?: any,
  ): void;
  export type PropsWithChildren<P = unknown> = P & {
    children?: ComponentChildren$1 | undefined;
  };
  export const Children: {
    map<T extends ComponentChild, R>(
      children: T | T[],
      fn: (child: T, i: number) => R,
    ): R[];
    forEach<T extends ComponentChild>(
      children: T | T[],
      fn: (child: T, i: number) => void,
    ): void;
    count: (children: ComponentChildren$1) => number;
    only: (children: ComponentChildren$1) => ComponentChild;
    toArray: (children: ComponentChildren$1) => VNode<{}>[];
  };
  // scheduler
  export const unstable_ImmediatePriority: number;
  export const unstable_UserBlockingPriority: number;
  export const unstable_NormalPriority: number;
  export const unstable_LowPriority: number;
  export const unstable_IdlePriority: number;
  export function unstable_runWithPriority(
    priority: number,
    callback: () => void,
  ): void;
  export const unstable_now: () => number;
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

declare const tagName$K = 's-badge';
export interface ReactProps$K
  extends Partial<BadgeProps>,
    Pick<BadgeProps$1, 'id'> {}

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
declare const BaseClass: typeof globalThis.HTMLElement;
declare abstract class PreactCustomElement extends BaseClass {
  /** @private */
  static get observedAttributes(): string[];
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
    [tagName$K]: Badge;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$K]: HTMLAttributes$1<HTMLElement> & ReactProps$K;
    }
  }
}

export type RequiredBannerProps = Required<BannerProps$1>;
export interface BannerProps
  extends Pick<RequiredBannerProps, 'heading' | 'dismissible' | 'hidden'> {
  tone: Extract<
    RequiredBannerProps['tone'],
    'auto' | 'critical' | 'warning' | 'success' | 'info'
  >;
}

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  target: HTMLElementTagNameMap[T];
};
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
export interface FieldReactProps<T extends keyof HTMLElementTagNameMap> {
  onInput?: ((event: CallbackEvent<T>) => void) | null;
  onChange?: ((event: CallbackEvent<T>) => void) | null;
  onFocus?: ((event: CallbackEvent<T>) => void) | null;
  onBlur?: ((event: CallbackEvent<T>) => void) | null;
}

declare const tagName$J = 's-banner';
export interface ReactProps$J
  extends Partial<BannerProps>,
    Pick<BannerProps$1, 'id'> {
  secondaryActions?: ComponentChild;
  onDismiss?: ((event: CallbackEvent<typeof tagName$J>) => void) | null;
  onAfterHide?: ((event: CallbackEvent<typeof tagName$J>) => void) | null;
}

declare class Banner extends PreactCustomElement implements BannerProps {
  accessor heading: BannerProps['heading'];
  accessor tone: BannerProps['tone'];
  accessor hidden: BannerProps['hidden'];
  accessor dismissible: BannerProps['dismissible'];
  accessor ondismiss: CallbackEventListener<typeof tagName$J> | null;
  accessor onafterhide: CallbackEventListener<typeof tagName$J> | null;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$J]: Banner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$J]: HTMLAttributes<HTMLElement> & ReactProps$J;
    }
  }
}

export type MakeResponsive<T> = T | `@container${string}`;

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
  padding: MakeResponsive<AlignedBox['padding']>;
  paddingBlock: MakeResponsive<AlignedBox['paddingBlock']>;
  paddingBlockStart: MakeResponsive<AlignedBox['paddingBlockStart']>;
  paddingBlockEnd: MakeResponsive<AlignedBox['paddingBlockEnd']>;
  paddingInline: MakeResponsive<AlignedBox['paddingInline']>;
  paddingInlineStart: MakeResponsive<AlignedBox['paddingInlineStart']>;
  paddingInlineEnd: MakeResponsive<AlignedBox['paddingInlineEnd']>;
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

declare const tagName$I = 's-box';
export interface ReactProps$I
  extends Partial<BoxProps>,
    Pick<BoxProps$1, 'id'> {}

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
    [tagName$I]: Box;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$I]: HTMLAttributes<HTMLElement> & ReactProps$I;
    }
  }
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

declare const tagName$H = 's-button';
export interface ReactProps$H
  extends Partial<ButtonProps>,
    Pick<ButtonProps$1, 'id'> {
  onClick?: ((event: CallbackEvent<typeof tagName$H>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$H>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$H>) => void) | null;
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
  Pick<typeof PreactCustomElement, 'observedAttributes' | 'prototype'>;
declare class Button extends Button_base implements ButtonProps {
  accessor disabled: ButtonProps['disabled'];
  accessor icon: ButtonProps['icon'];
  accessor loading: ButtonProps['loading'];
  accessor variant: ButtonProps['variant'];
  accessor tone: ButtonProps['tone'];
  accessor target: ButtonProps['target'];
  accessor href: ButtonProps['href'];
  accessor download: ButtonProps['download'];
  accessor onclick: CallbackEventListener<typeof tagName$H> | null;
  accessor onblur: CallbackEventListener<typeof tagName$H> | null;
  accessor onfocus: CallbackEventListener<typeof tagName$H> | null;
  accessor type: ButtonProps['type'];
  accessor accessibilityLabel: ButtonProps['accessibilityLabel'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$H]: Button;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$H]: HTMLAttributes<HTMLElement> & ReactProps$H;
    }
  }
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
  accessor onchange: CallbackEventListener<'input'>;
  accessor oninput: CallbackEventListener<'input'>;
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

declare const tagName$G = 's-checkbox';
export interface ReactProps$G
  extends Partial<CheckboxProps>,
    Pick<CheckboxProps$1, 'id'> {
  onChange?: ((event: CallbackEvent<typeof tagName$G>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$G>) => void) | null;
}

export type PreactCheckboxProps = Required<
  Pick<
    CheckboxProps,
    | 'accessibilityLabel'
    | 'checked'
    | 'defaultChecked'
    | 'details'
    | 'error'
    | 'label'
    | 'required'
    | 'name'
    | 'disabled'
    | 'value'
  >
>;
declare class PreactCheckboxElement
  extends PreactInputElement
  implements PreactCheckboxProps
{
  get checked(): boolean;
  set checked(checked: PreactCheckboxProps['checked']);
  get value(): string;
  set value(value: string);
  accessor defaultChecked: PreactCheckboxProps['defaultChecked'];
  accessor accessibilityLabel: PreactCheckboxProps['accessibilityLabel'];
  accessor details: PreactCheckboxProps['details'];
  accessor error: PreactCheckboxProps['error'];
  accessor label: PreactCheckboxProps['label'];
  accessor required: PreactCheckboxProps['required'];
  formResetCallback(): void;
  constructor(renderImpl: RenderImpl);
}

declare class Checkbox extends PreactCheckboxElement implements CheckboxProps {
  get indeterminate(): CheckboxProps['indeterminate'];
  set indeterminate(indeterminate: CheckboxProps['indeterminate']);
  accessor defaultIndeterminate: CheckboxProps['defaultIndeterminate'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$G]: Checkbox;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$G]: HTMLAttributes<HTMLElement> & ReactProps$G;
    }
  }
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

declare const tagName$F = 's-choice';
export interface ReactProps$F
  extends Partial<ChoiceProps>,
    Pick<ChoiceProps$1, 'id'> {}

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
    [tagName$F]: Choice;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$F]: HTMLAttributes<HTMLElement> & ReactProps$F;
    }
  }
}

export interface ChoiceListProps
  extends Required<
    Pick<
      ChoiceListProps$1,
      'multiple' | 'disabled' | 'error' | 'details' | 'values' | 'name'
    >
  > {}

declare const tagName$E = 's-choice-list';
export interface ReactProps$E
  extends Partial<ChoiceListProps>,
    Pick<ChoiceListProps$1, 'id'> {
  onChange?: ((event: CallbackEvent<typeof tagName$E>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$E>) => void) | null;
}

declare class ChoiceList extends PreactInputElement implements ChoiceListProps {
  accessor error: ChoiceListProps['error'];
  accessor details: ChoiceListProps['details'];
  accessor multiple: ChoiceListProps['multiple'];
  get values(): ChoiceListProps['values'];
  set values(values: ChoiceListProps['values']);
  formResetCallback(): void;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$E]: ChoiceList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$E]: HTMLAttributes<HTMLElement> & ReactProps$E;
    }
  }
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

declare const tagName$D = 's-clickable';
export interface ReactProps$D
  extends Partial<ClickableProps>,
    Pick<ClickableProps$1, 'id'> {
  onClick?: ((event: CallbackEvent<typeof tagName$D>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$D>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$D>) => void) | null;
}

declare const Clickable_base: (abstract new (
  renderImpl: RenderImpl,
) => BoxElement & PreactOverlayControlProps) &
  Pick<typeof BoxElement, 'observedAttributes' | 'prototype'>;
declare class Clickable extends Clickable_base implements ClickableProps {
  accessor disabled: ClickableProps['disabled'];
  accessor loading: ClickableProps['loading'];
  accessor target: ClickableProps['target'];
  accessor href: ClickableProps['href'];
  accessor download: ClickableProps['download'];
  accessor onclick: CallbackEventListener<typeof tagName$D> | null;
  accessor onblur: CallbackEventListener<typeof tagName$D> | null;
  accessor onfocus: CallbackEventListener<typeof tagName$D> | null;
  accessor type: ClickableProps['type'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$D]: Clickable;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$D]: HTMLAttributes<HTMLElement> & ReactProps$D;
    }
  }
}

export interface DividerProps {
  direction: Extract<DividerProps$1['direction'], 'inline' | 'block'>;
  color: Extract<DividerProps$1['color'], 'base' | 'strong'>;
}

declare const tagName$C = 's-divider';
export interface ReactProps$C
  extends Partial<DividerProps>,
    Pick<DividerProps$1, 'id'> {}

declare class Divider extends PreactCustomElement implements DividerProps {
  accessor direction: DividerProps['direction'];
  accessor color: DividerProps['color'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$C]: Divider;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$C]: HTMLAttributes<HTMLElement> & ReactProps$C;
    }
  }
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

export type EmailFieldProps = PreactFieldProps<
  Required<EmailFieldProps$1>['autocomplete']
> &
  Required<Pick<EmailFieldProps$1, 'maxLength' | 'minLength'>>;

declare const tagName$B = 's-email-field';
export interface ReactProps$B
  extends Partial<Omit<EmailFieldProps, 'accessory'>>,
    Pick<EmailFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$B> {}

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
    [tagName$B]: EmailField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$B]: HTMLAttributes<HTMLElement> & ReactProps$B;
    }
  }
}

export type RequiredAlignedProps = Required<GridProps$1>;
export interface GridProps extends BoxProps {
  gridTemplateColumns: RequiredAlignedProps['gridTemplateColumns'];
  gridTemplateRows: RequiredAlignedProps['gridTemplateRows'];
  alignItems: RequiredAlignedProps['alignItems'];
  justifyItems: RequiredAlignedProps['justifyItems'];
  placeItems: RequiredAlignedProps['placeItems'];
  alignContent: RequiredAlignedProps['alignContent'];
  justifyContent: RequiredAlignedProps['justifyContent'];
  placeContent: RequiredAlignedProps['placeContent'];
  rowGap: MakeResponsive<RequiredAlignedProps['rowGap']>;
  columnGap: MakeResponsive<RequiredAlignedProps['columnGap']>;
  gap: MakeResponsive<RequiredAlignedProps['gap']>;
}

declare const tagName$A = 's-grid';
export interface ReactProps$A
  extends Partial<GridProps>,
    Pick<GridProps$1, 'id'> {}

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
    [tagName$A]: Grid;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$A]: HTMLAttributes<HTMLElement> & ReactProps$A;
    }
  }
}

export type RequiredGridItemProps = Required<GridItemProps$1>;
export interface GridItemProps extends BoxProps {
  gridColumn: RequiredGridItemProps['gridColumn'];
  gridRow: RequiredGridItemProps['gridRow'];
}

declare const tagName$z = 's-grid-item';
export interface ReactProps$z
  extends Partial<GridItemProps>,
    Pick<GridItemProps$1, 'id'> {}

declare class GridItem extends BoxElement implements GridItemProps {
  accessor gridColumn: GridItemProps['gridColumn'];
  accessor gridRow: GridItemProps['gridRow'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$z]: GridItem;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$z]: HTMLAttributes<HTMLElement> & ReactProps$z;
    }
  }
}

export type RequiredHeadingProps = Required<HeadingProps$1>;
export interface HeadingProps {
  accessibilityRole: RequiredHeadingProps['accessibilityRole'];
  accessibilityVisibility: RequiredHeadingProps['accessibilityVisibility'];
  lineClamp: RequiredHeadingProps['lineClamp'];
}

declare const tagName$y = 's-heading';
export interface ReactProps$y
  extends Partial<HeadingProps>,
    Pick<HeadingProps$1, 'id'> {}

declare class Heading extends PreactCustomElement implements HeadingProps {
  accessor accessibilityRole: HeadingProps['accessibilityRole'];
  accessor lineClamp: HeadingProps['lineClamp'];
  accessor accessibilityVisibility: HeadingProps['accessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$y]: Heading;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$y]: HTMLAttributes<HTMLElement> & ReactProps$y;
    }
  }
}

declare const tagName$x = 's-icon';
export interface ReactProps$x
  extends Partial<IconProps>,
    Pick<IconProps$1, 'id'> {}

declare class Icon extends PreactCustomElement implements IconProps {
  accessor color: IconProps['color'];
  accessor tone: IconProps['tone'];
  accessor type: IconProps['type'];
  accessor size: IconProps['size'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$x]: Icon;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$x]: Omit<HTMLAttributes<HTMLElement>, 'size'> & ReactProps$x;
    }
  }
}

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
  > {
  border: BoxProps['border'];
  borderColor: BoxProps['borderColor'];
  borderRadius: BoxProps['borderRadius'];
  borderStyle: BoxProps['borderStyle'];
  borderWidth: BoxProps['borderWidth'];
}

declare const tagName$w = 's-image';
export interface ReactProps$w
  extends Partial<ImageProps>,
    Pick<ImageProps$1, 'id'> {
  onError?: ((event: CallbackEvent<typeof tagName$w>) => void) | null;
  onLoad?: ((event: CallbackEvent<typeof tagName$w>) => void) | null;
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
  accessor onload: CallbackEventListener<typeof tagName$w> | null;
  accessor onerror: OnErrorEventHandler;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$w]: Image;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$w]: HTMLAttributes<HTMLElement> & ReactProps$w;
    }
  }
}

export type RequiredLinkProps = Required<LinkProps$1>;
export interface LinkProps {
  accessibilityLabel: RequiredLinkProps['accessibilityLabel'];
  command: RequiredLinkProps['command'];
  commandFor: RequiredLinkProps['commandFor'];
  download: RequiredLinkProps['download'];
  href: RequiredLinkProps['href'];
  lang: RequiredLinkProps['lang'];
  target: RequiredLinkProps['target'];
  tone: Extract<RequiredLinkProps['tone'], 'auto' | 'neutral' | 'critical'>;
}

declare const tagName$v = 's-link';
export interface ReactProps$v
  extends Partial<LinkProps>,
    Pick<LinkProps$1, 'id' | 'lang'> {
  onClick?: ((event: CallbackEvent<typeof tagName$v>) => void) | null;
}

declare const Link_base: (abstract new (
  args_0: RenderImpl,
) => PreactCustomElement & PreactOverlayControlProps) &
  Pick<typeof PreactCustomElement, 'observedAttributes' | 'prototype'>;
declare class Link extends Link_base implements LinkProps {
  accessor tone: LinkProps['tone'];
  accessor accessibilityLabel: LinkProps['accessibilityLabel'];
  accessor href: LinkProps['href'];
  accessor target: LinkProps['target'];
  accessor download: LinkProps['download'];
  accessor lang: LinkProps['lang'];
  accessor onclick: CallbackEventListener<typeof tagName$v> | null;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$v]: Link;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$v]: HTMLAttributes<HTMLElement> & ReactProps$v;
    }
  }
}

export interface ListItemProps extends ListItemProps$1 {}

declare const tagName$u = 's-list-item';
export interface ReactProps$u
  extends Partial<ListItemProps>,
    Pick<ListItemProps$1, 'id'> {}

declare class ListItem extends PreactCustomElement implements ListItemProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$u]: ListItem;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$u]: HTMLAttributes<HTMLElement> & ReactProps$u;
    }
  }
}

export type RequiredMoneyFieldProps = Required<MoneyFieldProps$1>;
export interface MoneyFieldProps
  extends PreactFieldProps,
    Pick<RequiredMoneyFieldProps, 'max' | 'min' | 'step' | 'currencyCode'> {}

declare const tagName$t = 's-money-field';
export interface ReactProps$t
  extends Partial<MoneyFieldProps>,
    FieldReactProps<typeof tagName$t>,
    Pick<MoneyFieldProps$1, 'id'> {}

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
    [tagName$t]: MoneyField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$t]: HTMLAttributes<HTMLElement> & ReactProps$t;
    }
  }
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

declare const tagName$s = 's-number-field';
export interface ReactProps$s
  extends Partial<NumberFieldProps>,
    Pick<NumberFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$s> {}

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
    [tagName$s]: NumberField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$s]: HTMLAttributes<HTMLElement> & ReactProps$s;
    }
  }
}

export interface OptionProps
  extends Required<
    Pick<OptionProps$1, 'disabled' | 'value' | 'selected' | 'defaultSelected'>
  > {}

declare const tagName$r = 's-option';
export interface ReactProps$r extends Partial<OptionProps> {}

declare class Option extends PreactCustomElement implements OptionProps {
  accessor selected: OptionProps['selected'];
  accessor defaultSelected: OptionProps['defaultSelected'];
  accessor value: OptionProps['value'];
  accessor disabled: OptionProps['disabled'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$r]: Option;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$r]: HTMLAttributes<HTMLElement> & ReactProps$r;
    }
  }
}

export interface OptionGroupProps
  extends Required<Pick<OptionGroupProps$1, 'disabled' | 'label'>> {}

declare const tagName$q = 's-option-group';
export interface ReactProps$q extends Partial<OptionGroupProps> {}

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
    [tagName$q]: OptionGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$q]: HTMLAttributes<HTMLElement> & ReactProps$q;
    }
  }
}

export interface OrderedListProps extends OrderedListProps$1 {}

declare const tagName$p = 's-ordered-list';
export interface ReactProps$p
  extends Partial<OrderedListProps>,
    Pick<OrderedListProps$1, 'id'> {}

declare class OrderedList
  extends PreactCustomElement
  implements OrderedListProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$p]: OrderedList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$p]: HTMLAttributes<HTMLElement> & ReactProps$p;
    }
  }
}

export interface PageProps {
  inlineSize: Extract<PageProps$1['inlineSize'], 'base' | 'large'>;
}

declare const tagName$o = 's-page';
export interface ReactProps$o extends Partial<PageProps> {
  aside?: ComponentChild;
}

declare class Page extends PreactCustomElement implements PageProps {
  accessor inlineSize: PageProps['inlineSize'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$o]: Page;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$o]: HTMLAttributes<HTMLElement> & ReactProps$o;
    }
  }
}

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

declare const tagName$n = 's-paragraph';
export interface ReactProps$n
  extends Partial<ParagraphProps>,
    Pick<ParagraphProps$1, 'id'> {}

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
    [tagName$n]: Paragraph;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$n]: HTMLAttributes<HTMLElement> & ReactProps$n;
    }
  }
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

declare const tagName$m = 's-password-field';
export interface ReactProps$m
  extends Partial<PasswordFieldProps>,
    Pick<PasswordFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$m> {}

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
    [tagName$m]: PasswordField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$m]: HTMLAttributes<HTMLElement> & ReactProps$m;
    }
  }
}

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

declare const tagName$l = 's-search-field';
export interface ReactProps$l
  extends Partial<SearchFieldProps>,
    Pick<TextFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$l> {}

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
    [tagName$l]: SearchField;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$l]: HTMLAttributes<HTMLElement> & ReactProps$l;
    }
  }
}

export type RequiredSectionProps = Required<SectionProps$1>;
export interface SectionProps {
  accessibilityLabel: RequiredSectionProps['accessibilityLabel'];
  heading: RequiredSectionProps['heading'];
  padding: RequiredSectionProps['padding'];
}

declare const tagName$k = 's-section';
export interface ReactProps$k
  extends Partial<SectionProps>,
    Pick<SectionProps$1, 'id'> {}

declare class Section extends PreactCustomElement implements SectionProps {
  constructor();
  connectedCallback(): void;
  accessor accessibilityLabel: SectionProps['accessibilityLabel'];
  accessor heading: SectionProps['heading'];
  accessor padding: SectionProps['padding'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$k]: Section;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$k]: HTMLAttributes<HTMLElement> & ReactProps$k;
    }
  }
}

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

declare const tagName$j = 's-select';
export interface ReactProps$j extends Partial<SelectProps> {
  onChange?: (event: CallbackEvent<typeof tagName$j>) => void;
  onInput?: (event: CallbackEvent<typeof tagName$j>) => void;
  onBlur?: (event: CallbackEvent<typeof tagName$j>) => void;
  onFocus?: (event: CallbackEvent<typeof tagName$j>) => void;
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
    [tagName$j]: Select;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$j]: HTMLAttributes<HTMLElement> & ReactProps$j;
    }
  }
}

export interface SpinnerProps
  extends Required<Pick<SpinnerProps$1, 'accessibilityLabel'>> {
  /**
   * The size of the component.
   *
   * @default 'base'
   */
  size: Extract<SpinnerProps$1['size'], 'large' | 'large-100' | 'base'>;
}

declare const tagName$i = 's-spinner';
export interface ReactProps$i
  extends Partial<SpinnerProps>,
    Pick<SpinnerProps$1, 'id'> {}

declare class Spinner extends PreactCustomElement implements SpinnerProps {
  accessor accessibilityLabel: string;
  accessor size: SpinnerProps['size'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$i]: Spinner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$i]: Omit<HTMLAttributes<HTMLElement>, 'size'> & ReactProps$i;
    }
  }
}

export type AlignedStackProps = Required<StackProps$1>;
export interface StackProps extends BoxProps {
  justifyContent: AlignedStackProps['justifyContent'];
  alignItems: AlignedStackProps['alignItems'];
  alignContent: AlignedStackProps['alignContent'];
  gap: MakeResponsive<AlignedStackProps['gap']>;
  rowGap: MakeResponsive<AlignedStackProps['rowGap']>;
  columnGap: MakeResponsive<AlignedStackProps['columnGap']>;
  direction: MakeResponsive<AlignedStackProps['direction']>;
}

declare const tagName$h = 's-stack';
export interface ReactProps$h
  extends Partial<StackProps>,
    Pick<StackProps$1, 'id'> {}

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
    [tagName$h]: Stack;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$h]: HTMLAttributes<HTMLElement> & ReactProps$h;
    }
  }
}

export interface TableProps
  extends Required<
    Pick<
      TableProps$1,
      'loading' | 'paginate' | 'hasPreviousPage' | 'hasNextPage'
    >
  > {
  variant: Extract<TableProps$1['variant'], 'list' | 'auto'>;
}

declare const tagName$g = 's-table';
export interface ReactProps$g
  extends Partial<TableProps>,
    Pick<TableProps$1, 'id' | 'onNextPage' | 'onPreviousPage'> {
  filters?: ComponentChild;
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
  accessor onpreviouspage: CallbackEventListener<typeof tagName$g> | null;
  accessor onnextpage: CallbackEventListener<typeof tagName$g> | null;
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
    [tagName$g]: Table;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$g]: HTMLAttributes<HTMLElement> & ReactProps$g;
    }
  }
}

export interface TableBodyProps extends TableBodyProps$1 {}

declare const tagName$f = 's-table-body';
export interface ReactProps$f
  extends Partial<TableBodyProps>,
    Pick<TableBodyProps$1, 'id'> {}

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
      [tagName$f]: HTMLAttributes<HTMLElement> & ReactProps$f;
    }
  }
}

export interface TableCellProps extends TableCellProps$1 {}

declare const tagName$e = 's-table-cell';
export interface ReactProps$e
  extends Partial<TableCellProps>,
    Pick<TableCellProps$1, 'id'> {}

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
      [tagName$e]: HTMLAttributes<HTMLElement> & ReactProps$e;
    }
  }
}

declare const tagName$d = 's-table-header';
export interface ReactProps$d
  extends Partial<TableHeaderProps>,
    Pick<TableHeaderProps$1, 'id'> {}

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
      [tagName$d]: HTMLAttributes<HTMLElement> & ReactProps$d;
    }
  }
}

export interface TableHeaderRowProps extends TableHeaderRowProps$1 {}

declare const tagName$c = 's-table-header-row';
export interface ReactProps$c
  extends Partial<TableHeaderRowProps>,
    Pick<TableHeaderRowProps$1, 'id'> {}

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
    [tagName$c]: TableHeaderRow;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$c]: HTMLAttributes<HTMLElement> & ReactProps$c;
    }
  }
}

export interface TableRowProps extends TableRowProps$1 {}

declare const tagName$b = 's-table-row';
export interface ReactProps$b
  extends Partial<TableRowProps>,
    Pick<TableRowProps$1, 'id'> {}

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
      [tagName$b]: HTMLAttributes<HTMLElement> & ReactProps$b;
    }
  }
}

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

declare const tagName$a = 's-text';
export interface ReactProps$a
  extends Partial<TextProps>,
    Pick<TextProps$1, 'id'> {}

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
    [tagName$a]: Text;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$a]: HTMLAttributes<HTMLElement> & ReactProps$a;
    }
  }
}

export type TextAreaProps = PreactFieldProps<
  Required<TextAreaProps$1>['autocomplete']
> &
  Required<Pick<TextAreaProps$1, 'maxLength' | 'minLength' | 'rows'>>;

declare const tagName$9 = 's-text-area';
export interface ReactProps$9
  extends Partial<TextAreaProps>,
    Pick<TextAreaProps$1, 'id'>,
    FieldReactProps<typeof tagName$9> {}

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
      [tagName$9]: HTMLAttributes<HTMLElement> & ReactProps$9;
    }
  }
}

export type TextFieldProps = PreactFieldProps<
  Required<TextFieldProps$1>['autocomplete']
> &
  Required<
    Pick<
      TextFieldProps$1,
      'icon' | 'maxLength' | 'minLength' | 'prefix' | 'suffix'
    >
  >;

declare const tagName$8 = 's-text-field';
export interface ReactProps$8
  extends Partial<Omit<TextFieldProps, 'accessory'>>,
    Pick<TextFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$8> {
  accessory?: ComponentChild;
}

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
      [tagName$8]: HTMLAttributes<HTMLElement> & ReactProps$8;
    }
  }
}

export type URLFieldProps = PreactFieldProps<
  Required<URLFieldProps$1>['autocomplete']
> &
  Required<Pick<URLFieldProps$1, 'maxLength' | 'minLength'>>;

declare const tagName$7 = 's-url-field';
export interface ReactProps$7
  extends Partial<Omit<URLFieldProps, 'accessory'>>,
    Pick<URLFieldProps$1, 'id'>,
    FieldReactProps<typeof tagName$7> {}

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
      [tagName$7]: HTMLAttributes<HTMLElement> & ReactProps$7;
    }
  }
}

export interface UnorderedListProps extends UnorderedListProps$1 {}

declare const tagName$6 = 's-unordered-list';
export interface ReactProps$6
  extends Partial<UnorderedListProps>,
    Pick<UnorderedListProps$1, 'id'> {}

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
      [tagName$6]: HTMLAttributes<HTMLElement> & ReactProps$6;
    }
  }
}

export interface AdminActionProps
  extends Pick<AdminActionProps$1, 'heading' | 'loading'> {}

declare const tagName$5 = 's-admin-action';
export interface ReactProps$5
  extends Partial<AdminActionProps>,
    Pick<AdminActionProps$1, 'id'> {
  primaryAction: ComponentChild;
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
      [tagName$5]: HTMLAttributes<HTMLElement> & ReactProps$5;
    }
  }
}

export interface AdminBlockProps
  extends Pick<AdminBlockProps$1, 'heading' | 'collapsedSummary'> {}

declare const tagName$4 = 's-admin-block';
export interface ReactProps$4
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
      [tagName$4]: HTMLAttributes<HTMLElement> & ReactProps$4;
    }
  }
}

export interface AdminPrintActionProps
  extends Pick<AdminPrintActionProps$1, 'src'> {}

declare const tagName$3 = 's-admin-print-action';
export interface ReactProps$3
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
      [tagName$3]: HTMLAttributes<HTMLElement> & ReactProps$3;
    }
  }
}

export interface ReactProps$2 extends Partial<CustomerSegmentTemplateProps> {
  id?: string;
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
      [tagName$2]: HTMLAttributes<HTMLElement> & ReactProps$2;
    }
  }
}

export interface ReactProps$1 extends Partial<FormProps> {
  id?: string;
  /**
   * A callback that is run when the form is submitted.
   */
  onSubmit?: ((event: ExtendableEvent) => void) | null;
  /**
   * A callback that is run when the form is reset.
   */
  onReset?: ((event: ExtendableEvent) => void) | null;
}

declare const tagName$1 = 's-form';
export interface FormProps {}
declare class Form extends PreactCustomElement implements FormProps {
  constructor();
  accessor onsubmit: ((event: ExtendableEvent) => void) | null;
  accessor onreset: ((event: ExtendableEvent) => void) | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$1]: Form;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$1]: HTMLAttributes<HTMLElement> & ReactProps$1;
    }
  }
}

export interface ReactProps extends Partial<FunctionSettingsProps> {
  id?: string;
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
      [tagName]: HTMLAttributes<HTMLElement> & ReactProps;
    }
  }
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
