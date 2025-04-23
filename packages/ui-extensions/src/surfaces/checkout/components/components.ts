/** VERSION: 0.0.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/no-deprecated */
/* eslint-disable import/namespace */
/* eslint-disable import/no-deprecated */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
/**
 * TODO: Update `any` type here after this is resolved
 * https://github.com/Shopify/ui-api-design/issues/139
 */
export type ComponentChildren = any;
interface AbbreviationProps$1 {
	/**
	 * The content of the abbreviation or acronym.
	 */
	children?: ComponentChildren;
	/**
	 * Provides an expansion for the abbreviation or acronym when a full expansion is not present in the interface.
	 *
	 * This provides a hint to user agents on how to announce/display the content while informing all users what the abbreviation means.
	 *
	 * @default ''
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
	 */
	title?: string;
}
export type SizeKeyword = "small-500" | "small-400" | "small-300" | "small-200" | "small-100" | "small" | "base" | "large" | "large-100" | "large-200" | "large-300" | "large-400" | "large-500";
export type ColorKeyword = "subdued" | "base" | "strong";
export interface GlobalProps {
	/**
	 * A unique identifier for the element.
	 */
	id?: string;
}
export type BackgroundColorKeyword = "transparent" | ColorKeyword;
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
export type ToneKeyword = "auto" | "neutral" | "info" | "success" | "caution" | "warning" | "critical" | "custom";
declare const privateIconArray: readonly [
	"adjust",
	"affiliate",
	"airplane",
	"alert-bubble",
	"alert-circle",
	"alert-diamond",
	"alert-location",
	"alert-octagon-filled",
	"alert-octagon",
	"alert-triangle",
	"app-extension",
	"apps",
	"archive",
	"arrow-down-circle",
	"arrow-down-right",
	"arrow-down",
	"arrow-left-circle",
	"arrow-left",
	"arrow-right-circle",
	"arrow-right",
	"arrow-up-circle",
	"arrow-up-right",
	"arrow-up",
	"arrows-in-horizontal",
	"arrows-out-horizontal",
	"attachment",
	"automation",
	"backspace",
	"bag",
	"bank",
	"barcode",
	"bill",
	"blank",
	"blog",
	"bolt-filled",
	"bolt",
	"book-open",
	"book",
	"bug",
	"bullet",
	"button-press",
	"button",
	"calculator",
	"calendar-check",
	"calendar-compare",
	"calendar-list",
	"calendar-time",
	"calendar",
	"camera-flip",
	"camera",
	"caret-down",
	"caret-up",
	"cart-abandoned",
	"cart-discount",
	"cart-down",
	"cart-sale",
	"cart-up",
	"cart",
	"cash-dollar",
	"cash-euro",
	"cash-pound",
	"cash-rupee",
	"cash-yen",
	"catalog-product",
	"categories",
	"channels",
	"chart-cohort",
	"chart-donut",
	"chart-funnel",
	"chart-histogram-first-last",
	"chart-histogram-first",
	"chart-histogram-flat",
	"chart-histogram-full",
	"chart-histogram-growth",
	"chart-histogram-last",
	"chart-histogram-second-last",
	"chart-horizontal",
	"chart-line",
	"chart-popular",
	"chart-stacked",
	"chart-vertical",
	"chat-new",
	"chat-referral",
	"chat",
	"check-circle-filled",
	"check-circle",
	"check",
	"checkbox",
	"chevron-down-circle",
	"chevron-down",
	"chevron-left-circle",
	"chevron-left",
	"chevron-right-circle",
	"chevron-right",
	"chevron-up-circle",
	"chevron-up",
	"circle-dashed",
	"circle",
	"clipboard-check",
	"clipboard-checklist",
	"clipboard",
	"clock-revert",
	"clock",
	"code-add",
	"code",
	"collection-featured",
	"collection-list",
	"collection-reference",
	"collection",
	"color-none",
	"color",
	"compass",
	"complete",
	"compose",
	"confetti",
	"connect",
	"content",
	"contract",
	"corner-pill",
	"corner-round",
	"corner-square",
	"credit-card-cancel",
	"credit-card-percent",
	"credit-card-reader-chip",
	"credit-card-reader-tap",
	"credit-card-reader",
	"credit-card-secure",
	"credit-card-tap-chip",
	"credit-card",
	"crop",
	"currency-convert",
	"cursor-banner",
	"cursor-option",
	"cursor",
	"data-presentation",
	"data-table",
	"database-add",
	"database-connect",
	"database",
	"delete",
	"delivered",
	"delivery",
	"desktop",
	"disabled",
	"discount-add",
	"discount-code",
	"discount",
	"dns-settings",
	"dock-floating",
	"dock-side",
	"domain-landing-page",
	"domain-new",
	"domain-redirect",
	"domain",
	"download",
	"drag-drop",
	"drag-handle",
	"duplicate",
	"edit",
	"email-follow-up",
	"email-newsletter",
	"email",
	"empty",
	"enabled",
	"enter",
	"envelope-soft-pack",
	"envelope",
	"exchange",
	"exit",
	"export",
	"external",
	"eye-check-mark",
	"eye-dropper-list",
	"eye-dropper",
	"eye-first",
	"eyeglasses",
	"fav",
	"favicon",
	"file-list",
	"file",
	"filter",
	"flag",
	"flip-horizontal",
	"flip-vertical",
	"flower",
	"folder-add",
	"folder-down",
	"folder-remove",
	"folder-up",
	"folder",
	"food",
	"foreground",
	"forklift",
	"forms",
	"games",
	"gauge",
	"geolocation",
	"gift-card",
	"gift",
	"git-branch",
	"git-commit",
	"git-repository",
	"globe-asia",
	"globe-europe",
	"globe-lines",
	"globe-list",
	"globe",
	"grid",
	"hashtag-decimal",
	"hashtag-list",
	"hashtag",
	"heart",
	"hide-filled",
	"hide",
	"home",
	"icons",
	"identity-card",
	"image-add",
	"image-alt",
	"image-explore",
	"image-magic",
	"image-none",
	"image-with-text-overlay",
	"image",
	"images",
	"import",
	"in-progress",
	"incentive",
	"incoming",
	"incomplete",
	"info",
	"inventory-updated",
	"inventory",
	"iq",
	"key",
	"keyboard-filled",
	"keyboard-hide",
	"keyboard",
	"label-printer",
	"language-translate",
	"language",
	"layout-block",
	"layout-buy-button-horizontal",
	"layout-buy-button-vertical",
	"layout-buy-button",
	"layout-column-1",
	"layout-columns-2",
	"layout-columns-3",
	"layout-footer",
	"layout-header",
	"layout-logo-block",
	"layout-popup",
	"layout-rows-2",
	"layout-section",
	"layout-sidebar-left",
	"layout-sidebar-right",
	"lightbulb",
	"link-list",
	"link",
	"list-bulleted",
	"list-numbered",
	"live",
	"location-none",
	"location",
	"lock",
	"map",
	"markets-euro",
	"markets-rupee",
	"markets-yen",
	"markets",
	"maximize",
	"measurement-size-list",
	"measurement-size",
	"measurement-volume-list",
	"measurement-volume",
	"measurement-weight-list",
	"measurement-weight",
	"media-receiver",
	"megaphone",
	"mention",
	"menu-horizontal",
	"menu-vertical",
	"menu",
	"merge",
	"metafields",
	"metaobject-list",
	"metaobject-reference",
	"metaobject",
	"microphone",
	"minimize",
	"minus-circle",
	"minus",
	"mobile",
	"money-none",
	"money",
	"moon",
	"nature",
	"note-add",
	"note",
	"notification",
	"order-batches",
	"order-draft",
	"order-first",
	"order-fulfilled",
	"order-repeat",
	"order-unfulfilled",
	"order",
	"orders-status",
	"organization",
	"outdent",
	"outgoing",
	"package-fulfilled",
	"package-on-hold",
	"package-returned",
	"package",
	"page-add",
	"page-attachment",
	"page-clock",
	"page-down",
	"page-heart",
	"page-list",
	"page-reference",
	"page-remove",
	"page-report",
	"page-up",
	"page",
	"pagination-end",
	"pagination-start",
	"paint-brush-flat",
	"paint-brush-round",
	"paper-check",
	"partially-complete",
	"passkey",
	"pause-circle",
	"payment-capture",
	"payment",
	"payout-dollar",
	"payout-euro",
	"payout-pound",
	"payout-rupee",
	"payout-yen",
	"payout",
	"person-add",
	"person-exit",
	"person-list",
	"person-lock",
	"person-remove",
	"person-segment",
	"person",
	"personalized-text",
	"phone-in",
	"phone-out",
	"phone",
	"pin",
	"plan",
	"play-circle",
	"play",
	"plus-circle",
	"plus",
	"point-of-sale",
	"price-list",
	"print",
	"product-add",
	"product-cost",
	"product-list",
	"product-reference",
	"product-remove",
	"product-return",
	"product-unavailable",
	"product",
	"profile-filled",
	"profile",
	"question-circle-filled",
	"question-circle",
	"receipt-dollar",
	"receipt-euro",
	"receipt-folded",
	"receipt-paid",
	"receipt-pound",
	"receipt-refund",
	"receipt-rupee",
	"receipt-yen",
	"receipt",
	"receivables",
	"redo",
	"referral-code",
	"refresh",
	"remove-background",
	"reorder",
	"replace",
	"replay",
	"reset",
	"return",
	"reward",
	"rocket",
	"rotate-left",
	"rotate-right",
	"sandbox",
	"save",
	"savings",
	"search-list",
	"search-recent",
	"search-resource",
	"search",
	"select",
	"send",
	"settings",
	"share",
	"shield-check-mark",
	"shield-none",
	"shield-pending",
	"shield-person",
	"shipping-label",
	"shopcodes",
	"slideshow",
	"smiley-happy",
	"smiley-joy",
	"smiley-neutral",
	"smiley-sad",
	"social-ad",
	"social-post",
	"sort-ascending",
	"sort-descending",
	"sort",
	"sound",
	"sports",
	"star-filled",
	"star-list",
	"star",
	"status-active",
	"status",
	"stop-circle",
	"store-import",
	"store-managed",
	"store-online",
	"store",
	"sun",
	"table-masonry",
	"table",
	"tablet",
	"target",
	"tax",
	"team",
	"text-align-center",
	"text-align-left",
	"text-align-right",
	"text-block",
	"text-bold",
	"text-color",
	"text-font-list",
	"text-font",
	"text-grammar",
	"text-in-columns",
	"text-in-rows",
	"text-indent-remove",
	"text-indent",
	"text-italic",
	"text-quote",
	"text-title",
	"text-underline",
	"text-with-image",
	"text",
	"theme-edit",
	"theme-store",
	"theme-template",
	"theme",
	"three-d-environment",
	"thumbs-down",
	"thumbs-up",
	"tip-jar",
	"toggle-off",
	"toggle-on",
	"transaction-fee-dollar",
	"transaction-fee-euro",
	"transaction-fee-pound",
	"transaction-fee-rupee",
	"transaction-fee-yen",
	"transaction",
	"transfer-in",
	"transfer-internal",
	"transfer-out",
	"transfer",
	"truck",
	"undo",
	"unknown-device",
	"unlock",
	"upload",
	"variant",
	"view",
	"viewport-narrow",
	"viewport-short",
	"viewport-tall",
	"viewport-wide",
	"wallet",
	"wand",
	"watch",
	"wifi",
	"work-list",
	"work",
	"wrench",
	"x-circle",
	"x"
];
export type IconType = (typeof privateIconArray)[number];
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
/**
 * Like `Extract`, but ensures that the extracted type is a strict subtype of the input type.
 */
export type ExtractStrict<T, U extends T> = Extract<T, U>;
export type MaybeAllValuesShorthandProperty<T extends string> = T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`;
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
	display?: "auto" | "none";
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
"main"
/**
 * Used to indicate the component is a header.
 *
 * In an HTML host `header` will render a `<header>` element.
 * Learn more about the [`<header>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role) in the MDN web docs.
 */
 | "header"
/**
 * Used to display information such as copyright information, navigation links, and privacy statements.
 *
 * In an HTML host `footer` will render a `<footer>` element.
 * Learn more about the [`<footer>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role) in the MDN web docs.
 */
 | "footer"
/**
 * Used to indicate a generic section.
 * Sections should always have a `Heading` or an accessible name provided in the `accessibilityLabel` property.
 *
 * In an HTML host `section` will render a `<section>` element.
 * Learn more about the [`<section>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/region_role) in the MDN web docs.
 *
 */
 | "section"
/**
 * Used to designate a supporting section that relates to the main content.
 *
 * In an HTML host `aside` will render an `<aside>` element.
 * Learn more about the [`<aside>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role) in the MDN web docs.
 */
 | "aside"
/**
 * Used to identify major groups of links used for navigating.
 *
 * In an HTML host `navigation` will render a `<nav>` element.
 * Learn more about the [`<nav>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role) in the MDN web docs.
 */
 | "navigation"
/**
 * Used to identify a list of ordered items.
 *
 * In an HTML host `ordered-list` will render a `<ol>` element.
 * Learn more about the [`<ol>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) in the MDN web docs.
 */
 | "ordered-list"
/**
 * Used to identify an item inside a list of items.
 *
 * In an HTML host `list-item` will render a `<li>` element.
 * Learn more about the [`<li>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role) in the MDN web docs.
 */
 | "list-item"
/**
 * Used to indicates the component acts as a divider that separates and distinguishes sections of content in a list of items.
 *
 * In an HTML host `list-item-separator` will render as `<li role="separator">`.
 * Learn more about the [`<li>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) and the [`separator` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) in the MDN web docs.
 */
 | "list-item-separator"
/**
 * Used to identify a list of unordered items.
 *
 * In an HTML host `unordered-list` will render a `<ul>` element.
 * Learn more about the [`<ul>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) in the MDN web docs.
 */
 | "unordered-list"
/**
 * Used to indicates the component acts as a divider that separates and distinguishes sections of content.
 *
 * In an HTML host `separator` will render as `<div role="separator">`.
 * Learn more about the [`separator` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) in the MDN web docs.
 */
 | "separator"
/**
 * Used to define a live region containing advisory information for the user that is not important enough to be an alert.
 *
 * In an HTML host `status` will render as `<div role="status">`.
 * Learn more about the [`status` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) in the MDN web docs.
 */
 | "status"
/**
 * Used for important, and usually time-sensitive, information.
 *
 * In an HTML host `alert` will render as `<div role="alert">`.
 * Learn more about the [`alert` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) in the MDN web docs.
 */
 | "alert"
/**
 * Used to create a nameless container element which has no semantic meaning on its own.
 *
 * In an HTML host `generic'` will render a `<div>` element.
 * Learn more about the [`generic` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role) in the MDN web docs.
 */
 | "generic"
/**
 * Used to strip the semantic meaning of an element, but leave the visual styling intact.
 *
 * Synonym for `none`
 * Learn more about the [`presentation` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) in the MDN web docs.
 */
 | "presentation"
/**
 * Used to strip the semantic meaning of an element, but leave the visual styling intact.
 *
 * Synonym for `presentation`
 * Learn more about the [`none` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/none_role) in the MDN web docs.
 */
 | "none";
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
	accessibilityVisibility?: "visible" | "hidden" | "exclusive";
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
	labelAccessibilityVisibility?: ExtractStrict<AccessibilityVisibilityProps["accessibilityVisibility"], "visible" | "exclusive">;
}
export type PaddingKeyword = SizeKeyword | "none";
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
	paddingBlock?: MaybeTwoValuesShorthandProperty<PaddingKeyword> | "";
	/**
	 * Adjust the block-start padding.
	 *
	 * This overrides the block-start value of `paddingBlock`.
	 *
	 * @default '' - meaning no override
	 */
	paddingBlockStart?: PaddingKeyword | "";
	/**
	 * Adjust the block-end padding.
	 *
	 * This overrides the block-end value of `paddingBlock`.
	 *
	 * @default '' - meaning no override
	 */
	paddingBlockEnd?: PaddingKeyword | "";
	/**
	 * Adjust the inline padding.
	 *
	 * - `large none` means inline-start padding is `large`, inline-end padding is `none`.
	 *
	 * This overrides the inline value of `padding`.
	 *
	 * @default '' - meaning no override
	 */
	paddingInline?: MaybeTwoValuesShorthandProperty<PaddingKeyword> | "";
	/**
	 * Adjust the inline-start padding.
	 *
	 * This overrides the inline-start value of `paddingInline`.
	 *
	 * @default '' - meaning no override
	 */
	paddingInlineStart?: PaddingKeyword | "";
	/**
	 * Adjust the inline-end padding.
	 *
	 * This overrides the inline-end value of `paddingInline`.
	 *
	 * @default '' - meaning no override
	 */
	paddingInlineEnd?: PaddingKeyword | "";
}
export type SizeUnits = `${number}px` | `${number}%` | `0`;
export type SizeUnitsOrAuto = SizeUnits | "auto";
export type SizeUnitsOrNone = SizeUnits | "none";
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
export type BorderStyleKeyword = "none" | "solid" | "dashed" | "dotted" | "auto";
export type BorderSizeKeyword = SizeKeyword | "none";
export type BorderRadiusKeyword = SizeKeyword | "max" | "none";
/**
 * Represents a shorthand for defining a border. It can be a combination of size, optionally followed by color, optionally followed by style.
 */
export type BorderShorthand = BorderSizeKeyword | `${BorderSizeKeyword} ${ColorKeyword}` | `${BorderSizeKeyword} ${ColorKeyword} ${BorderStyleKeyword}`;
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
	borderWidth?: MaybeAllValuesShorthandProperty<BorderSizeKeyword> | "";
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
	borderStyle?: MaybeAllValuesShorthandProperty<BorderStyleKeyword> | "";
	/**
	 * Set the color of the border.
	 *
	 * If set, it takes precedence over the `border` property's color.
	 *
	 * @default '' - meaning no override
	 */
	borderColor?: ColorKeyword | "";
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
	overflow?: "hidden" | "visible";
}
export interface BaseBoxProps extends GlobalProps, AccessibilityVisibilityProps, BackgroundProps, DisplayProps, SizingProps, PaddingProps, BorderProps, OverflowProps {
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
export interface BaseBoxPropsWithRole extends BaseBoxProps, AccessibilityRoleProps {
}
interface BoxProps$1 extends BaseBoxPropsWithRole {
}
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
	 * 'submit' - Used to indicate the component acts as a submit button, meaning it submits the closest form.
	 * 'button' - Used to indicate the component acts as a button, meaning it has no default action.
	 * 'reset' - Used to indicate the component acts as a reset button, meaning it resets the closest form (returning fields to their default values).
	 *
	 * This property is ignored if the component supports `href` or `commandFor`/`command` and one of them is set.
	 *
	 * @default 'button'
	 */
	type?: "submit" | "button" | "reset";
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
	target?: "auto" | "_blank" | "_self" | "_parent" | "_top" | AnyString;
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
	command?: "--auto" | "--show" | "--hide" | "--toggle" | "--copy";
}
export interface BaseClickableProps extends ButtonBehaviorProps, LinkBehaviorProps {
}
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
	variant?: "auto" | "primary" | "secondary" | "tertiary";
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
export interface FileInputProps<T extends File[] | File = File[]> extends BaseInputProps {
	/**
	 * Callback when the user has **finished editing** a field, e.g. once they have blurred the field.
	 */
	onChange?: (newValue: T) => void;
	/**
	 * Callback when the user makes any changes in the field.
	 */
	onInput?: (newValue: T) => void;
	/**
	 * The current value for the field.
	 *
	 * TODO: This is a read-only getter.
	 * We haven't agreed how to represent that yet.
	 */
	value?: T;
}
export interface FieldErrorProps {
	/**
	 * Indicate an error to the user. The field will be given a specific stylistic treatment
	 * to communicate problems that have to be resolved immediately.
	 */
	error?: string;
}
export interface BasicFieldProps extends FieldErrorProps, LabelAccessibilityVisibilityProps {
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
interface ClipboardItemProps$1 extends GlobalProps {
	/**
	 * Plain text to be written to the clipboard.
	 *
	 * @default ''
	 */
	text?: string;
	/**
	 * Callback run when the copy to clipboard succeeds.
	 */
	onCopy?: () => void;
	/**
	 * Callback run when the copy to clipboard fails.
	 */
	onCopyError?: () => void;
}
interface DropZoneProps$1 extends GlobalProps, FileInputProps<File[]>, BasicFieldProps {
	/**
	 * A string representing the types of files that are accepted by the dropzone.
	 * This string is a comma-separated list of unique file type specifiers which can be one of the following:
	 * - A file extension starting with a period (".") character (e.g. .jpg, .pdf, .doc)
	 * - A valid MIME type string with no extensions
	 *
	 * If left empty, the dropzone will accept all files.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
	 */
	accept?: string;
	/**
	 * A label that describes the purpose or contents of the item. When set,
	 * it will be announced to buyers using assistive technologies and will
	 * provide them with more context.
	 */
	accessibilityLabel?: string;
	/**
	 * Defines if the user can select or drop multiple files at once.
	 *
	 * @default false
	 */
	multiple?: boolean;
	/**
	 * Callback when rejected files are dropped. Files are rejected based on the `accept` prop.
	 */
	onDropRejected?(files: File[]): void;
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
	waitUntil: (promise: Promise<void>) => void;
}
interface FormProps$1 extends GlobalProps {
	/**
	 * Whether input elements within the form can be automatically completed by the browser.
	 *
	 * @default 'on'
	 */
	autocomplete?: "on" | "off";
	/**
	 * Whether the form is able to be submitted.
	 *
	 * When set to `true`, this will also disable the implicit submit behavior of the form.
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
	onReset?: () => void;
}
export type SpacingKeyword = SizeKeyword | "none";
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
	rowGap?: SpacingKeyword | "";
	/**
	 * Adjust spacing between elements in the inline axis.
	 *
	 * This overrides the column value of `gap`.
	 *
	 * @default '' - meaning no override
	 */
	columnGap?: SpacingKeyword | "";
}
export type BaselinePosition = "baseline" | "first baseline" | "last baseline";
export type ContentDistribution = "space-between" | "space-around" | "space-evenly" | "stretch";
export type ContentPosition = "center" | "start" | "end";
export type OverflowPosition = `unsafe ${ContentPosition}` | `safe ${ContentPosition}`;
/**
 * Align items sets the align-self value on all direct children as a group.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
 */
export type AlignItemsKeyword = "normal" | "stretch" | BaselinePosition | OverflowPosition | ContentPosition;
/**
 * Justify content defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
 */
export type JustifyContentKeyword = "normal" | ContentDistribution | OverflowPosition | ContentPosition;
/**
 *Align content sets the distribution of space between and around content items along a flexbox's cross axis, or a grid or block-level element's block axis.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
 */
export type AlignContentKeyword = "normal" | BaselinePosition | ContentDistribution | OverflowPosition | ContentPosition;
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
	fontVariantNumeric?: "auto" | "normal" | "tabular-nums";
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
	dir?: "ltr" | "rtl" | "auto" | "";
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
interface HeadingProps$1 extends GlobalProps, AccessibilityVisibilityProps, BlockTypographyProps {
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
	accessibilityRole?: "heading" | ExtractStrict<AccessibilityRole, "presentation" | "none">;
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
export type optionalSpace = "" | " ";
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
	accessibilityRole?: "img" | ExtractStrict<AccessibilityRole, "presentation" | "none">;
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
	inlineSize?: "fill" | "auto";
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
	aspectRatio?: `${number}${optionalSpace}/${optionalSpace}${number}` | `${number}` | "auto";
	/**
	 * Determines how the content of the image is resized to fit its container.
	 * The image is positioned in the center of the container.
	 *
	 * @default 'contain'
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
	 */
	objectFit?: "contain" | "cover";
	/**
	 * Determines the loading behavior of the image:
	 * - `eager`: Immediately loads the image, irrespective of its position within the visible viewport.
	 * - `lazy`: Delays loading the image until it approaches a specified distance from the viewport.
	 *
	 * @default `eager`
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading
	 */
	loading?: "eager" | "lazy";
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
interface OrderedListProps$1 extends GlobalProps {
}
interface ParagraphProps$1 extends GlobalProps, BaseTypographyProps, BlockTypographyProps, AccessibilityVisibilityProps {
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
"paragraph"
/**
 * Indicates the text is considered less important than the main content, but is still necessary for the reader to understand.
 * It can be used for secondary content but also for disclaimers, terms and conditions, or legal information.
 *
 * Surfaces should apply a smaller font size than the default size.
 *
 * In an HTML host, the text will be rendered in a `<small>` element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
 */
 | "small";
interface PaymentIconProps$1 extends GlobalProps {
	/**
	 * The icon type of the payment method
	 *
	 * @default ''
	 */
	type?: PaymentIconName | AnyString;
	/**
	 * A label that describes the purpose or contents of the icon.
	 *
	 * When set, it will be announced to users using assistive technologies and will provide them with more context.
	 * This should only be used if the icon requires an alternative internationalised label
	 * or if it is otherwise inappropriate to make use of the default label included with the icon.
	 */
	accessibilityLabel?: string;
}
export type PaymentIconName = "abn" | "acima-leasing" | "acuotaz" | "ada" | "addi" | "adyen" | "aeropay" | "affin-bank" | "affirm" | "aftee" | "afterpay-paynl-version" | "afterpay" | "airtel-money" | "airteltigo-mobile-money" | "aktia" | "akulaku-paylater" | "akulaku" | "alandsbanken" | "alfamart" | "alfamidi" | "alipay-hk" | "alipay-paynl-version" | "alipay" | "alliance-bank" | "alma" | "aman" | "amazon" | "ambank" | "american-express" | "amex" | "ansa-stored-value" | "ansa" | "anyday" | "apecoin" | "aplazo" | "apple-pay" | "aqsat" | "arbitrum" | "arhaus" | "arvato" | "ashley-plcc" | "ask" | "astrapay" | "atm-bersama" | "atobaraidotcom" | "atome" | "atone" | "atrato" | "au-kantan-kessai" | "au-pay" | "authorize-net" | "avalanche" | "axs" | "bancnet" | "banco-azteca" | "bancomat" | "bancontact" | "bangkok-bank" | "bank-islam" | "bank-muamalat" | "bank-rakyat" | "barclays" | "base" | "bbva-cie" | "bc-card" | "bca-klikpay" | "bca" | "bdo" | "belfius" | "benefit" | "best-buy-card" | "biercheque-paynl-version" | "bigc" | "billease" | "biller-paynl-version" | "billie" | "billink-method" | "billink" | "bitcoin-cash" | "bitcoin" | "bizum" | "blik" | "bnbchain" | "bni" | "bnp" | "bogus-app-coin" | "bogus" | "boleto" | "boodil" | "boost" | "bpi" | "braintree" | "bread-pay" | "bread" | "bri-direct-debit" | "bri" | "brimo" | "bsi" | "bsn" | "bss" | "busd" | "careem-pay" | "cartes-bancaires" | "cash-app-pay" | "cash" | "cashew" | "cashinvoice-latin-america" | "catch-payments" | "cebuana" | "cembrapay" | "centi" | "cetelem" | "checkout-finance" | "chinabank" | "cimb-clicks" | "cimb" | "circle-k" | "citadele" | "citi-pay" | "clave-telered" | "clearpay" | "clerq" | "cleverpay" | "clip" | "cliq" | "codensa" | "coinsph" | "collector-bank" | "coop" | "coppel-pay" | "credit-agricole" | "credit-key" | "creditclick-paynl-version" | "credix" | "cuotas" | "d-barai" | "dai" | "daily-yamazaki" | "dan-dan" | "dana" | "danamon-online" | "dankort" | "danske-bank" | "dappmx" | "dash" | "daviplata" | "de-cadeaukaart" | "depay" | "deutsche-bank" | "dinacard" | "diners-club" | "direct-bank-transfer-latin-america" | "directa24" | "directpay" | "discover" | "divido" | "dnb" | "docomo-barai" | "dogecoin" | "dropp" | "duitnow" | "duologi" | "dwolla" | "easywallet" | "ebucks" | "echelon-financing" | "ecpay" | "edenred" | "efecty" | "eft-secure" | "eftpos-au" | "eghl" | "elo" | "elv" | "empty" | "enets" | "eos" | "epayments" | "epospay" | "eps" | "erste" | "escrowcom" | "esr-paymentslip-switzerland" | "ethereum" | "etihad-guest-pay" | "etika" | "ewallet-indonesia" | "ewallet-philippines" | "ewallet-southkorea" | "facebook-pay" | "fairstone-payments" | "fam" | "familymart" | "fantom" | "farmlands" | "fashion-giftcard-paynlversion" | "fashioncheque" | "favepay" | "fawry" | "finloup" | "fintecture" | "fintoc" | "flexiti" | "float-payments" | "flying-blue-plus" | "forbrugsforeningen" | "forsa" | "fortiva" | "fps" | "fpx" | "freecharge" | "freedompay" | "futurepay-mytab" | "gcash" | "generalfinancing" | "generic" | "genoapay" | "gezondheidsbon-paynl-version" | "giftcard" | "giropay" | "givacard" | "glbe-paypal" | "glbe-plus" | "gmo-atokara" | "gmo-bank-transfer" | "gmo-postpay" | "gmo-virtualaccount" | "gnosis" | "google-pay" | "google-wallet" | "gopay" | "grabpay" | "grailpay" | "gusd" | "hana-card" | "handelsbanken" | "happy-pay" | "hello-clever" | "heylight" | "hitrustpay-transfer" | "home-credit" | "hong-leong-bank" | "hong-leong-connect" | "hsbc" | "huis-tuin-cadeau" | "humm" | "hyper" | "hypercard" | "hypercash" | "hyundai-card" | "ibexpay" | "ideal" | "in3-via-ideal" | "in3" | "inbank" | "indomaret" | "ing-homepay" | "interac" | "ivy" | "iwocapay-pay-later" | "jcb" | "jenius" | "jko" | "jousto" | "kakao-pay" | "kakebaraidotcom" | "kasikornbank" | "kasssh" | "katapult" | "kb-card" | "kbc-cbc" | "kcp-credit-card" | "kfast" | "khqr" | "klarna-pay-later" | "klarna-pay-now" | "klarna-slice-it" | "klarna" | "knaken-settle" | "knet" | "koalafi" | "koin" | "krediidipank" | "kredivo" | "krungsri" | "krungthai-bank" | "kueski-pay" | "kunst-en-cultuur-cadeaukaart" | "kuwait-finance-house" | "land-bank" | "laser" | "latitude-creditline-au" | "latitude-gem-au" | "latitude-gem-nz" | "latitude-go-au" | "latitudepay" | "lawson" | "laybuy-heart" | "laybuy" | "lbc" | "lhv" | "line-pay" | "linkaja" | "linkpay" | "litecoin" | "lku" | "lloyds" | "lotte-card" | "lpb" | "luminor" | "lunch-check" | "lydia" | "mach" | "mada" | "maestro" | "mandiri" | "mash" | "master" | "mastercard" | "masterpass" | "maxima" | "maya-bank" | "maya" | "maybank-qrpay" | "maybank" | "maybankm2u" | "mb-way" | "mb" | "mcash" | "medicinos-bankas" | "meeza" | "mercado-credito" | "mercado-pago" | "merpay" | "meta-pay" | "metro-bank" | "military-starcard" | "minicuotas" | "ministop" | "mobicred" | "mobikwik" | "mobilepay" | "mode" | "mokka" | "momopay" | "mondido" | "monero" | "monzo" | "mpesa" | "mtn-mobile-money" | "multisafepay" | "mybank" | "myfatoorah" | "n26" | "naps" | "nationale-bioscoopbon" | "nationale-entertainmentcard" | "natwest" | "naver-pay" | "nelo" | "nequi" | "netbanking" | "neteller" | "nh-card" | "nordea" | "notyd" | "novuna" | "npatobarai" | "npkakebarai" | "oca" | "ocbc-bank" | "octo-clicks" | "octopus" | "offline-bank-transfer-latin-america" | "ola-money" | "omannet" | "omasp" | "oney" | "online-banking" | "online-banktransfer" | "op" | "opay" | "openpay" | "optimism" | "orange-mobile-money" | "overstock-citicobrand" | "overstock-citiplcc" | "ovo" | "oxxo" | "ozow" | "pagoefectivo" | "paid" | "paidy" | "palawa" | "palawan" | "pastpay" | "pay-after-delivery-instalments" | "pay-by-bank-us" | "pay-by-bank" | "pay-easy" | "pay-pay" | "paybylink" | "paycash" | "payco" | "payconiq" | "payd" | "payfast-instant-eft" | "payflex" | "payid" | "payitmonthly" | "payjustnow" | "paymark-online-eftpos" | "paymaya" | "payme" | "paynow-mbank" | "paynow" | "payoo-qr" | "payoo" | "paypal" | "payplan" | "paypo" | "payrexx-bank-transfer" | "payright" | "paysafecard-paynl-version" | "paysafecard" | "paysafecash" | "paysera" | "paysquad" | "paytm" | "payto" | "paytomorrow" | "payu" | "payzapp" | "pei" | "perlasfinance" | "permata" | "pf-pay" | "pivo" | "pix" | "podium-cadeaukaart" | "pointspay" | "poli" | "polygon" | "poppankki" | "postfinance-card" | "postfinance-efinance" | "postpay" | "powered-by-ansa-stored-value" | "powered-by-ansa" | "powerpay" | "pps" | "prepaysolutions" | "progressive-leasing" | "przelew24" | "przelewy24-paynl-version" | "przelewy24" | "pse" | "public-bank" | "publicbank-pbe" | "qasitli" | "qliro" | "qr-promptpay" | "qris" | "qrph" | "rabbit-line-pay" | "rabobank" | "rakuten-pay" | "rapid-transfer" | "ratepay" | "raty-pekao" | "rcbc" | "rcs" | "reka" | "resolve-pay" | "revolut" | "rhb-bank" | "rhb-now" | "rietumu" | "riverty-paynl-version" | "riverty" | "rupay" | "saastopankki" | "sadad" | "sam" | "samsung-card" | "samsung-pay" | "santander" | "satisfi" | "satispay" | "sbpl" | "scalapay" | "scream-truck-wallet" | "scream-truck" | "seb" | "seicomart" | "sepa-bank-transfer" | "sepa-direct-debit" | "sequra" | "seven-eleven" | "sezzle" | "shib" | "shinhan-card" | "shop-pay" | "shopeepay" | "shopify-pay" | "siam-commercial" | "siauliu-bankas" | "siirto" | "sika-fsa" | "sika-hsa" | "sika" | "simpl" | "simple-pay" | "sinpe-movil" | "sistecredito" | "skeps" | "skrill-digital-wallet" | "slice-fnbo" | "smartpay" | "snap-checkout" | "snapmint" | "societe-generale" | "sofort" | "softbank" | "solana-pay-helio" | "solana-pay" | "solana" | "souhoola" | "spankki" | "sparkasse" | "spei" | "splitit" | "spotii" | "spraypay" | "standard-chartered" | "stc-pay" | "stoov" | "store-credit" | "stripe" | "sunkus" | "super-payments" | "svea-b2b-faktura" | "svea-b2b-invoice" | "svea-checkout" | "svea-credit-account" | "svea-delbetalning" | "svea-faktura" | "svea-invoice" | "svea-lasku" | "svea-ostukonto" | "svea-part-payment" | "svea-yrityslasku" | "sveaeramaksu" | "swedbank" | "swiftpay" | "swish" | "swissbilling" | "sympl" | "synchrony-pay" | "synchrony" | "tabby" | "tabit" | "taly" | "tamara" | "tandympayment" | "tasa-cero" | "tbi-bank" | "tcf" | "tendopay" | "tensile" | "tesco-lotus" | "thanachart-bank" | "timepayment" | "tiptop" | "todopay" | "toss" | "touch-n-go" | "tpay" | "trevipay" | "truelayer" | "truemoney-pay" | "trustly" | "twig-pay" | "twint" | "twoinvoice" | "uae-visa" | "uangme" | "ubp" | "underpay" | "unionpay" | "unipay" | "uob-ez-pay" | "uob-thai" | "uob" | "upi" | "urbo" | "urpay" | "usdc" | "usdp" | "v-pay" | "valu" | "venmo" | "ventipay" | "venus-plcc" | "viabill" | "vipps" | "visa-electron" | "visa" | "volksbank" | "volt" | "vvv-cadeaukaart-paynl-version" | "vvv-giftcard" | "waave-pay-by-bank" | "wallet" | "walley" | "wbtc" | "webshop-giftcard" | "wechat-pay" | "wechat-paynl-version" | "wegetfinancing" | "whish-checkout" | "whish-pay" | "wise" | "wissel" | "world-chain" | "xrp" | "yape" | "yappy" | "ymobile" | "younited-pay" | "zalopay" | "zapper" | "zingala" | "zinia" | "zip" | "zoodpay" | "zulily-credit-card" | "zustaina";
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
	 * Sets the tone of the Progress, based on the intention of the information being conveyed.
	 *
	 * @default 'auto'
	 */
	tone?: ToneKeyword;
	/**
	 * This attribute specifies how much of the task has been completed.
	 *
	 * It must be a valid floating point number between 0 and `max`, or between 0 and 1 if `max` is omitted.
	 * If there is no value attribute, the progress bar is indeterminate;
	 * this indicates that an activity is ongoing with no indication of how long it is expected to take.
	 *
	 * Surfaces should apply styling to cover that indeterminate state.
	 *
	 * In a HTML host, you can customize the progress animation via the :indeterminate pseudo-class.
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
	direction?: "inline" | "block";
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
interface TextProps$1 extends GlobalProps, AccessibilityVisibilityProps, BaseTypographyProps, DisplayProps {
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
"address"
/**
 * Indicate the text is no longer accurate or no longer relevant. One such use-case is discounted prices.
 *
 * Surfaces should apply styling to this type to suggest its content no longer applies.
 *
 * In an HTML host, the text will be rendered in a `<s>` element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s
 */
 | "redundant"
/**
 * Indicate the text is marked or highlighted and relevant to the user’s current action.
 * One such use-case is to indicate the characters that matched a search query.
 *
 * Surfaces should apply styling to this type to draw attention to the content.
 *
 * In an HTML host, the text will be rendered in a `<mark>` element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
 */
 | "mark"
/**
 * Indicate emphatic stress. Typically for words that have a stressed emphasis compared to surrounding text.
 *
 * Surfaces should apply styling to this type to distinguish it from surrounding text. Italicization is a common choice, but not required.
 *
 * In an HTML host, the text will be rendered in an `<em>` element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
 */
 | "emphasis"
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
 | "offset"
/**
 * Indicate strong importance, seriousness, or urgency.
 *
 * Surfaces should render this content bold by default.
 *
 * In an HTML host, the text will be rendered in a `<strong>` tag.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
 */
 | "strong"
/**
 * Indicates the text is considered less important than the main content, but is still necessary for the reader to understand.
 * It can be used for secondary content but also for disclaimers, terms and conditions, or legal information.
 *
 * Surfaces should apply a smaller font size than the default size.
 *
 * In an HTML host, the text will be rendered in a `<small>` element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
 */
 | "small"
/**
 * No additional semantics or styling is applied.
 *
 * Surfaces must not apply any default styling to this type.
 *
 * In an HTML host, the text will be rendered in a `<span>` tag.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
 */
 | "generic";
interface TimeProps$1 {
	/**
	 * The content of the Time.
	 */
	children?: ComponentChildren;
	/**
	 * Set the time and/or date of the element.
	 *
	 * It must be a valid date string.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values
	 *
	 * @default ''
	 */
	dateTime?: string;
}
interface UnorderedListProps$1 extends GlobalProps {
}




interface AbbreviationProps extends Pick<AbbreviationProps$1, 'title'> {
}
interface AbbreviationElement extends AbbreviationProps, Omit<HTMLElement, 'id' | 'title'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-abbreviation': AbbreviationElement;
    }
}

interface BannerProps extends Omit<BannerProps$1, 'children' | 'primaryAction' | 'secondaryActions' | 'tone'> {
    tone?: Extract<BannerProps$1['tone'], 'auto' | 'info' | 'success' | 'warning' | 'critical'>;
}
interface BannerElement extends Omit<BannerProps, 'onAfterHide' | 'onDismiss'>, Omit<HTMLElement, 'id' | 'title' | 'hidden'> {
    onafterhide: BannerProps['onAfterHide'];
    ondismiss: BannerProps['onDismiss'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-banner': BannerElement;
    }
}

type ReducedBorderSizeKeyword = Extract<BorderSizeKeyword, 'none' | 'base' | 'large' | 'large-100' | 'large-200'>;
type ReducedColorKeyword = Extract<ColorKeyword, 'base'>;
type BorderShorthand = ReducedBorderSizeKeyword | `${ReducedBorderSizeKeyword} ${ReducedColorKeyword}` | `${ReducedBorderSizeKeyword} ${ReducedColorKeyword} ${BorderStyleKeyword}`;

interface BoxProps extends Omit<BoxProps$1, 'accessibilityRole' | 'background' | 'blockSize' | 'border' | 'borderColor' | 'borderRadius' | 'borderWidth' | 'children' | 'inlineSize'> {
    accessibilityRole?: Extract<BoxProps$1['accessibilityRole'], 'main' | 'header' | 'footer' | 'section' | 'aside' | 'navigation' | 'ordered-list' | 'list-item' | 'list-item-separator' | 'unordered-list' | 'separator' | 'status' | 'alert' | 'generic' | 'presentation' | 'none'>;
    background?: Extract<BoxProps$1['background'], 'transparent' | 'subdued' | 'base'>;
    border?: BorderShorthand;
    borderWidth?: MaybeAllValuesShorthandProperty<ReducedBorderSizeKeyword> | '';
    borderRadius?: MaybeAllValuesShorthandProperty<Extract<BoxProps$1['borderRadius'], 'none' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'max'>>;
}
interface BoxElement extends BoxProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-box': BoxElement;
    }
}

interface ButtonProps extends Omit<ButtonProps$1, 'children' | 'download' | 'icon' | 'lang' | 'onBlur' | 'onFocus' | 'target' | 'tone' | 'type' | 'variant'> {
    target?: Extract<ButtonProps$1['target'], 'auto' | '_self' | '_blank'>;
    tone?: Extract<ButtonProps$1['tone'], 'auto' | 'neutral' | 'critical'>;
    type?: Extract<ButtonProps$1['type'], 'submit' | 'button'>;
    variant?: Extract<ButtonProps$1['variant'], 'auto' | 'primary' | 'secondary'>;
}
interface ButtonElement extends Omit<ButtonProps, 'onClick'>, Omit<HTMLElement, 'id' | 'onclick'> {
    onclick: ButtonProps['onClick'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-button': ButtonElement;
    }
}

interface ClipboardItemProps extends ClipboardItemProps$1 {
}
interface ClipboardItemElement extends Omit<ClipboardItemProps, 'onCopy' | 'onCopyError'>, Omit<HTMLElement, 'id' | 'oncopy'> {
    oncopy: ClipboardItemProps['onCopy'];
    oncopyerror: ClipboardItemProps['onCopyError'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-clipboard-item': ClipboardItemElement;
    }
}

interface DropZoneProps extends Omit<DropZoneProps$1, 'onChange' | 'value' | 'labelAccessibilityVisibility'> {
}
interface DropZoneElement extends Omit<DropZoneProps, 'onDropRejected' | 'onInput'>, Omit<HTMLElement, 'id' | 'oninput'> {
    ondroprejected: DropZoneProps['onDropRejected'];
    oninput: DropZoneProps['onInput'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-drop-zone': DropZoneElement;
    }
}

interface FormProps extends Omit<FormProps$1, 'autocomplete' | 'onReset' | 'onSubmit'> {
    onSubmit?: () => void;
}
interface FormElement extends Omit<FormProps, 'onSubmit'>, Omit<HTMLElement, 'id' | 'onsubmit'> {
    onsubmit: FormProps['onSubmit'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-form': FormElement;
    }
}

interface HeadingProps extends Omit<HeadingProps$1, 'children' | 'lineClamp' | 'accessibilityVisibility'> {
}
interface HeadingElement extends HeadingProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-heading': HeadingElement;
    }
}

interface IconProps extends Omit<IconProps$1, 'tone' | 'size' | 'type' | 'color'> {
    tone?: Extract<IconProps$1['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical' | 'custom'>;
    size?: Extract<IconProps$1['size'], 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100'>;
    type?: Extract<IconProps$1['type'], 'alert-circle' | 'alert-triangle' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'arrow-up-right' | 'bag' | 'bullet' | 'calendar' | 'camera' | 'caret-down' | 'cart' | 'cash-dollar' | 'categories' | 'check' | 'check-circle' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'circle' | 'clipboard' | 'clock' | 'credit-card' | 'delete' | 'delivered' | 'delivery' | 'disabled' | 'discount' | 'edit' | 'email' | 'empty' | 'external' | 'filter' | 'geolocation' | 'gift-card' | 'globe' | 'grid' | 'image' | 'info' | 'list-bulleted' | 'location' | 'lock' | 'map' | 'menu' | 'menu-horizontal' | 'menu-vertical' | 'minus' | 'mobile' | 'note' | 'order' | 'organization' | 'plus' | 'profile' | 'question-circle-filled' | 'question-circle' | 'reorder' | 'reset' | 'return' | 'savings' | 'search' | 'settings' | 'star-filled' | 'star' | 'store' | 'truck' | 'upload' | 'x' | 'x-circle'> | 'alert-triangle-filled' | 'info-filled' | 'star-half' | 'x-circle-filled';
}
interface IconElement extends IconProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-icon': IconElement;
    }
}

interface ImageProps extends Omit<ImageProps$1, 'border' | 'borderColor' | 'borderRadius' | 'borderWidth' | 'inlineSize' | 'onLoad' | 'onError'> {
    border?: BorderShorthand;
    borderWidth?: MaybeAllValuesShorthandProperty<ReducedBorderSizeKeyword> | '';
    borderRadius?: MaybeAllValuesShorthandProperty<Extract<ImageProps$1['borderRadius'], 'none' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'max'>>;
}
interface ImageElement extends ImageProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-image': ImageElement;
    }
}

interface LinkProps extends Omit<LinkProps$1, 'children' | 'download' | 'onBlur' | 'onFocus' | 'target' | 'tone'> {
    target?: Extract<LinkProps$1['target'], 'auto' | '_self' | '_blank'>;
    tone?: Extract<LinkProps$1['tone'], 'auto' | 'neutral'>;
}
interface LinkElement extends Omit<LinkProps, 'onClick'>, Omit<HTMLElement, 'id' | 'lang' | 'onclick'> {
    onclick: LinkProps['onClick'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-link': LinkElement;
    }
}

interface ListItemProps extends Omit<ListItemProps$1, 'children'> {
}
interface ListItem extends ListItemProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-list-item': ListItem;
    }
}

interface OrderedListProps extends OrderedListProps$1 {
}
interface OrderedListElement extends OrderedListProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-ordered-list': OrderedListElement;
    }
}

interface ParagraphProps extends Omit<ParagraphProps$1, 'children' | 'fontVariantNumeric' | 'lineClamp'> {
    color?: Extract<ParagraphProps$1['color'], 'subdued' | 'base'>;
    tone?: Extract<ParagraphProps$1['tone'], 'auto' | 'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'custom'>;
}
interface ParagraphElement extends ParagraphProps, Omit<HTMLElement, 'id' | 'dir' | 'lang'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-paragraph': ParagraphElement;
    }
}

interface PaymentIconProps extends PaymentIconProps$1 {
}
interface PaymentIconElement extends PaymentIconProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-payment-icon': PaymentIconElement;
    }
}

interface ProgressProps extends Omit<ProgressProps$1, 'tone'> {
    tone?: Extract<ProgressProps$1['tone'], 'auto' | 'critical'>;
}
interface ProgressElement extends ProgressProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-progress': ProgressElement;
    }
}

interface SpinnerProps extends Omit<SpinnerProps$1, 'size'> {
    size?: Extract<SpinnerProps$1['size'], 'small-100' | 'small' | 'base' | 'large' | 'large-100'>;
}
interface SpinnerElement extends SpinnerProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-spinner': SpinnerElement;
    }
}

interface StackProps extends Omit<StackProps$1, 'accessibilityVisibility' | 'accessibilityRole' | 'alignContent' | 'alignItems' | 'background' | 'blockSize' | 'border' | 'borderColor' | 'borderRadius' | 'borderWidth' | 'children' | 'justifyContent' | 'inlineSize'> {
    accessibilityRole?: Extract<StackProps$1['accessibilityRole'], 'main' | 'header' | 'footer' | 'section' | 'aside' | 'navigation' | 'ordered-list' | 'list-item' | 'list-item-separator' | 'unordered-list' | 'separator' | 'status' | 'alert' | 'generic' | 'none'>;
    background?: Extract<StackProps$1['background'], 'transparent' | 'subdued' | 'base'>;
    border?: BorderShorthand;
    borderWidth?: MaybeAllValuesShorthandProperty<ReducedBorderSizeKeyword> | '';
    borderRadius?: MaybeAllValuesShorthandProperty<Extract<StackProps$1['borderRadius'], 'none' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'max'>>;
    alignContent?: Extract<StackProps$1['alignContent'], 'start' | 'center' | 'end' | 'normal'>;
    alignItems?: Extract<StackProps$1['alignItems'], 'start' | 'center' | 'end' | 'normal'>;
    justifyContent?: Extract<StackProps$1['justifyContent'], 'start' | 'center' | 'end' | 'normal'>;
}
interface StackElement extends StackProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-stack': StackElement;
    }
}

interface TextProps extends Omit<TextProps$1, 'children' | 'fontVariantNumeric' | 'type'> {
    color?: Extract<TextProps$1['color'], 'subdued' | 'base'>;
    tone?: Extract<TextProps$1['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical' | 'custom'>;
    type?: Extract<TextProps$1['type'], 'address' | 'redundant' | 'mark' | 'emphasis' | 'offset' | 'small' | 'strong' | 'generic'>;
}
interface TextElement extends TextProps, Omit<HTMLElement, 'id' | 'dir' | 'lang'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-text': TextElement;
    }
}

interface TimeProps extends Pick<TimeProps$1, 'dateTime'> {
}
interface TimeElement extends TimeProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-time': TimeElement;
    }
}

interface UnorderedListProps extends UnorderedListProps$1 {
}
interface UnorderedListElement extends UnorderedListProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-unordered-list': UnorderedListElement;
    }
}

export type { AbbreviationProps, BannerProps, BoxProps, ButtonProps, ClipboardItemProps, DropZoneProps, FormProps, HeadingProps, IconProps, ImageProps, LinkProps, ListItemProps, OrderedListProps, ParagraphProps, PaymentIconProps, ProgressProps, SpinnerProps, StackProps, TextProps, TimeProps, UnorderedListProps };
