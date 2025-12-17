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
export type StringChildren = string;
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
export type SizeKeyword = "small-500" | "small-400" | "small-300" | "small-200" | "small-100" | "small" | "base" | "large" | "large-100" | "large-200" | "large-300" | "large-400" | "large-500";
export type ColorKeyword = "subdued" | "base" | "strong";
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
export type ToneKeyword = "auto" | "neutral" | "info" | "success" | "caution" | "warning" | "critical" | "accent" | "custom";
declare const privateIconArray: readonly [
	"adjust",
	"affiliate",
	"airplane",
	"alert-bubble",
	"alert-circle",
	"alert-diamond",
	"alert-location",
	"alert-octagon",
	"alert-octagon-filled",
	"alert-triangle",
	"alert-triangle-filled",
	"align-horizontal-centers",
	"app-extension",
	"apps",
	"archive",
	"arrow-down",
	"arrow-down-circle",
	"arrow-down-right",
	"arrow-left",
	"arrow-left-circle",
	"arrow-right",
	"arrow-right-circle",
	"arrow-up",
	"arrow-up-circle",
	"arrow-up-right",
	"arrows-in-horizontal",
	"arrows-out-horizontal",
	"asterisk",
	"attachment",
	"automation",
	"backspace",
	"bag",
	"bank",
	"barcode",
	"battery-low",
	"bill",
	"blank",
	"blog",
	"bolt",
	"bolt-filled",
	"book",
	"book-open",
	"bug",
	"bullet",
	"business-entity",
	"button",
	"button-press",
	"calculator",
	"calendar",
	"calendar-check",
	"calendar-compare",
	"calendar-list",
	"calendar-time",
	"camera",
	"camera-flip",
	"caret-down",
	"caret-left",
	"caret-right",
	"caret-up",
	"cart",
	"cart-abandoned",
	"cart-discount",
	"cart-down",
	"cart-filled",
	"cart-sale",
	"cart-send",
	"cart-up",
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
	"chart-histogram-first",
	"chart-histogram-first-last",
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
	"chat",
	"chat-new",
	"chat-referral",
	"check",
	"check-circle",
	"check-circle-filled",
	"checkbox",
	"chevron-down",
	"chevron-down-circle",
	"chevron-left",
	"chevron-left-circle",
	"chevron-right",
	"chevron-right-circle",
	"chevron-up",
	"chevron-up-circle",
	"circle",
	"circle-dashed",
	"clipboard",
	"clipboard-check",
	"clipboard-checklist",
	"clock",
	"clock-list",
	"clock-revert",
	"code",
	"code-add",
	"collection",
	"collection-featured",
	"collection-list",
	"collection-reference",
	"color",
	"color-none",
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
	"credit-card",
	"credit-card-cancel",
	"credit-card-percent",
	"credit-card-reader",
	"credit-card-reader-chip",
	"credit-card-reader-tap",
	"credit-card-secure",
	"credit-card-tap-chip",
	"crop",
	"currency-convert",
	"cursor",
	"cursor-banner",
	"cursor-option",
	"data-presentation",
	"data-table",
	"database",
	"database-add",
	"database-connect",
	"delete",
	"delivered",
	"delivery",
	"desktop",
	"disabled",
	"disabled-filled",
	"discount",
	"discount-add",
	"discount-automatic",
	"discount-code",
	"discount-remove",
	"dns-settings",
	"dock-floating",
	"dock-side",
	"domain",
	"domain-landing-page",
	"domain-new",
	"domain-redirect",
	"download",
	"drag-drop",
	"drag-handle",
	"drawer",
	"duplicate",
	"edit",
	"email",
	"email-follow-up",
	"email-newsletter",
	"empty",
	"enabled",
	"enter",
	"envelope",
	"envelope-soft-pack",
	"eraser",
	"exchange",
	"exit",
	"export",
	"external",
	"eye-check-mark",
	"eye-dropper",
	"eye-dropper-list",
	"eye-first",
	"eyeglasses",
	"fav",
	"favicon",
	"file",
	"file-list",
	"filter",
	"filter-active",
	"flag",
	"flip-horizontal",
	"flip-vertical",
	"flower",
	"folder",
	"folder-add",
	"folder-down",
	"folder-remove",
	"folder-up",
	"food",
	"foreground",
	"forklift",
	"forms",
	"games",
	"gauge",
	"geolocation",
	"gift",
	"gift-card",
	"git-branch",
	"git-commit",
	"git-repository",
	"globe",
	"globe-asia",
	"globe-europe",
	"globe-lines",
	"globe-list",
	"graduation-hat",
	"grid",
	"hashtag",
	"hashtag-decimal",
	"hashtag-list",
	"heart",
	"hide",
	"hide-filled",
	"home",
	"home-filled",
	"icons",
	"identity-card",
	"image",
	"image-add",
	"image-alt",
	"image-explore",
	"image-magic",
	"image-none",
	"image-with-text-overlay",
	"images",
	"import",
	"in-progress",
	"incentive",
	"incoming",
	"incomplete",
	"info",
	"info-filled",
	"inheritance",
	"inventory",
	"inventory-edit",
	"inventory-list",
	"inventory-transfer",
	"inventory-updated",
	"iq",
	"key",
	"keyboard",
	"keyboard-filled",
	"keyboard-hide",
	"keypad",
	"label-printer",
	"language",
	"language-translate",
	"layout-block",
	"layout-buy-button",
	"layout-buy-button-horizontal",
	"layout-buy-button-vertical",
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
	"link",
	"link-list",
	"list-bulleted",
	"list-bulleted-filled",
	"list-numbered",
	"live",
	"live-critical",
	"live-none",
	"location",
	"location-none",
	"lock",
	"map",
	"markets",
	"markets-euro",
	"markets-rupee",
	"markets-yen",
	"maximize",
	"measurement-size",
	"measurement-size-list",
	"measurement-volume",
	"measurement-volume-list",
	"measurement-weight",
	"measurement-weight-list",
	"media-receiver",
	"megaphone",
	"mention",
	"menu",
	"menu-filled",
	"menu-horizontal",
	"menu-vertical",
	"merge",
	"metafields",
	"metaobject",
	"metaobject-list",
	"metaobject-reference",
	"microphone",
	"microphone-muted",
	"minimize",
	"minus",
	"minus-circle",
	"mobile",
	"money",
	"money-none",
	"money-split",
	"moon",
	"nature",
	"note",
	"note-add",
	"notification",
	"number-one",
	"order",
	"order-batches",
	"order-draft",
	"order-filled",
	"order-first",
	"order-fulfilled",
	"order-repeat",
	"order-unfulfilled",
	"orders-status",
	"organization",
	"outdent",
	"outgoing",
	"package",
	"package-cancel",
	"package-fulfilled",
	"package-on-hold",
	"package-reassign",
	"package-returned",
	"page",
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
	"pagination-end",
	"pagination-start",
	"paint-brush-flat",
	"paint-brush-round",
	"paper-check",
	"partially-complete",
	"passkey",
	"paste",
	"pause-circle",
	"payment",
	"payment-capture",
	"payout",
	"payout-dollar",
	"payout-euro",
	"payout-pound",
	"payout-rupee",
	"payout-yen",
	"person",
	"person-add",
	"person-exit",
	"person-filled",
	"person-list",
	"person-lock",
	"person-remove",
	"person-segment",
	"personalized-text",
	"phablet",
	"phone",
	"phone-down",
	"phone-down-filled",
	"phone-in",
	"phone-out",
	"pin",
	"pin-remove",
	"plan",
	"play",
	"play-circle",
	"plus",
	"plus-circle",
	"plus-circle-down",
	"plus-circle-filled",
	"plus-circle-up",
	"point-of-sale",
	"point-of-sale-register",
	"price-list",
	"print",
	"product",
	"product-add",
	"product-cost",
	"product-filled",
	"product-list",
	"product-reference",
	"product-remove",
	"product-return",
	"product-unavailable",
	"profile",
	"profile-filled",
	"question-circle",
	"question-circle-filled",
	"radio-control",
	"receipt",
	"receipt-dollar",
	"receipt-euro",
	"receipt-folded",
	"receipt-paid",
	"receipt-pound",
	"receipt-refund",
	"receipt-rupee",
	"receipt-yen",
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
	"scan-qr-code",
	"search",
	"search-add",
	"search-list",
	"search-recent",
	"search-resource",
	"select",
	"send",
	"settings",
	"share",
	"shield-check-mark",
	"shield-none",
	"shield-pending",
	"shield-person",
	"shipping-label",
	"shipping-label-cancel",
	"shopcodes",
	"slideshow",
	"smiley-happy",
	"smiley-joy",
	"smiley-neutral",
	"smiley-sad",
	"social-ad",
	"social-post",
	"sort",
	"sort-ascending",
	"sort-descending",
	"sound",
	"split",
	"sports",
	"star",
	"star-circle",
	"star-filled",
	"star-half",
	"star-list",
	"status",
	"status-active",
	"stop-circle",
	"store",
	"store-import",
	"store-managed",
	"store-online",
	"sun",
	"table",
	"table-masonry",
	"tablet",
	"target",
	"tax",
	"team",
	"text",
	"text-align-center",
	"text-align-left",
	"text-align-right",
	"text-block",
	"text-bold",
	"text-color",
	"text-font",
	"text-font-list",
	"text-grammar",
	"text-in-columns",
	"text-in-rows",
	"text-indent",
	"text-indent-remove",
	"text-italic",
	"text-quote",
	"text-title",
	"text-underline",
	"text-with-image",
	"theme",
	"theme-edit",
	"theme-store",
	"theme-template",
	"three-d-environment",
	"thumbs-down",
	"thumbs-up",
	"tip-jar",
	"toggle-off",
	"toggle-on",
	"transaction",
	"transaction-fee-add",
	"transaction-fee-dollar",
	"transaction-fee-euro",
	"transaction-fee-pound",
	"transaction-fee-rupee",
	"transaction-fee-yen",
	"transfer",
	"transfer-in",
	"transfer-internal",
	"transfer-out",
	"truck",
	"undo",
	"unknown-device",
	"unlock",
	"upload",
	"variant",
	"variant-list",
	"video",
	"video-list",
	"view",
	"viewport-narrow",
	"viewport-short",
	"viewport-tall",
	"viewport-wide",
	"wallet",
	"wand",
	"watch",
	"wifi",
	"work",
	"work-list",
	"wrench",
	"x",
	"x-circle",
	"x-circle-filled"
];
export type IconType = (typeof privateIconArray)[number];
/**
 * Like `Extract`, but ensures that the extracted type is a strict subtype of the input type.
 */
export type ExtractStrict<T, U extends T> = Extract<T, U>;
export type MaybeAllValuesShorthandProperty<T extends string> = T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`;
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
export type optionalSpace = "" | " ";
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
	iconPosition?: "start" | "end";
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
	display?: MaybeResponsive<"auto" | "none">;
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
	paddingBlock?: MaybeResponsive<MaybeTwoValuesShorthandProperty<PaddingKeyword> | "">;
	/**
	 * Adjust the block-start padding.
	 *
	 * This overrides the block-start value of `paddingBlock`.
	 *
	 * @default '' - meaning no override
	 */
	paddingBlockStart?: MaybeResponsive<PaddingKeyword | "">;
	/**
	 * Adjust the block-end padding.
	 *
	 * This overrides the block-end value of `paddingBlock`.
	 *
	 * @default '' - meaning no override
	 */
	paddingBlockEnd?: MaybeResponsive<PaddingKeyword | "">;
	/**
	 * Adjust the inline padding.
	 *
	 * - `large none` means inline-start padding is `large`, inline-end padding is `none`.
	 *
	 * This overrides the inline value of `padding`.
	 *
	 * @default '' - meaning no override
	 */
	paddingInline?: MaybeResponsive<MaybeTwoValuesShorthandProperty<PaddingKeyword> | "">;
	/**
	 * Adjust the inline-start padding.
	 *
	 * This overrides the inline-start value of `paddingInline`.
	 *
	 * @default '' - meaning no override
	 */
	paddingInlineStart?: MaybeResponsive<PaddingKeyword | "">;
	/**
	 * Adjust the inline-end padding.
	 *
	 * This overrides the inline-end value of `paddingInline`.
	 *
	 * @default '' - meaning no override
	 */
	paddingInlineEnd?: MaybeResponsive<PaddingKeyword | "">;
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
	overflow?: "hidden" | "visible";
}
export interface BaseBoxProps extends AccessibilityVisibilityProps, BackgroundProps, DisplayProps, SizingProps, PaddingProps, BorderProps, OverflowProps {
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
	type?: "submit" | "button" | "reset";
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
	target?: "auto" | "_blank" | "_self" | "_parent" | "_top" | AnyString;
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
	command?: "--auto" | "--show" | "--hide" | "--toggle" | "--copy";
	/**
	 * ID of a component that should respond to interest (e.g. hover and focus) on this component.
	 */
	interestFor?: string;
}
export interface BaseClickableProps extends ButtonBehaviorProps, LinkBehaviorProps {
}
export interface ButtonProps extends GlobalProps, BaseClickableProps {
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
	inlineSize?: "auto" | "fill" | "fit-content";
	/**
	 * Changes the visual appearance of the Button.
	 *
	 * @default 'auto' - the variant is automatically determined by the Button's context
	 */
	variant?: "auto" | "primary" | "secondary" | "tertiary";
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
export interface BasicFieldProps extends FieldErrorProps, LabelAccessibilityVisibilityProps {
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
export interface FieldProps extends BasicFieldProps, InputProps, FocusEventProps, FieldDetailsProps {
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
	controls?: "auto" | "stepper" | "none";
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
export interface BaseCheckableProps extends BaseSelectableProps, InteractionProps {
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
export interface ChoiceProps extends GlobalProps, BaseOptionProps {
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
export interface ChoiceListProps extends GlobalProps, Pick<BasicFieldProps, "label" | "labelAccessibilityVisibility" | "error">, MultipleInputProps, FieldDetailsProps {
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
	disabled?: MultipleInputProps["disabled"];
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
	variant?: "auto" | "list" | "inline" | "block" | "grid";
}
export interface ClickableProps extends GlobalProps, BaseBoxProps, BaseClickableProps {
	/**
	 * Disables the clickable, and indicates to assistive technology that the loading is in progress.
	 *
	 * This also disables the clickable.
	 */
	loading?: BaseClickableProps["loading"];
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
	disabled?: BaseClickableProps["disabled"];
	/**
	 * Indicate the text language. Useful when the text is in a different language than the rest of the page.
	 * It will allow assistive technologies such as screen readers to invoke the correct pronunciation.
	 * [Reference of values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("subtag" label)
	 *
	 * @default ''
	 */
	lang?: string;
}
export interface AutocompleteProps<AutocompleteField extends AnyAutocompleteField> {
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
	autocomplete?: AutocompleteField | `${AutocompleteSection} ${AutocompleteField}` | `${AutocompleteGroup} ${AutocompleteField}` | `${AutocompleteSection} ${AutocompleteGroup} ${AutocompleteField}` | "on" | "off";
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
export type AutocompleteGroup = "shipping" | "billing";
/**
 * The contact information subgroup the autocomplete data should be sourced from.
 */
export type AutocompleteAddressGroup = "fax" | "home" | "mobile" | "pager";
export type AnyAutocompleteField = "additional-name" | "address-level1" | "address-level2" | "address-level3" | "address-level4" | "address-line1" | "address-line2" | "address-line3" | "country-name" | "country" | "current-password" | "email" | "family-name" | "given-name" | "honorific-prefix" | "honorific-suffix" | "language" | "name" | "new-password" | "nickname" | "one-time-code" | "organization-title" | "organization" | "photo" | "postal-code" | "sex" | "street-address" | "transaction-amount" | "transaction-currency" | "url" | "username" | "bday-day" | "bday-month" | "bday-year" | "bday" | "cc-additional-name" | "cc-expiry-month" | "cc-expiry-year" | "cc-expiry" | "cc-family-name" | "cc-given-name" | "cc-name" | "cc-number" | "cc-csc" | "cc-type" | `${AutocompleteAddressGroup} email` | "impp" | `${AutocompleteAddressGroup} impp` | "tel" | "tel-area-code" | "tel-country-code" | "tel-extension" | "tel-local-prefix" | "tel-local-suffix" | "tel-local" | "tel-national" | `${AutocompleteAddressGroup} tel` | `${AutocompleteAddressGroup} tel-area-code` | `${AutocompleteAddressGroup} tel-country-code` | `${AutocompleteAddressGroup} tel-extension` | `${AutocompleteAddressGroup} tel-local-prefix` | `${AutocompleteAddressGroup} tel-local-suffix` | `${AutocompleteAddressGroup} tel-local` | `${AutocompleteAddressGroup} tel-national`;
export type TextAutocompleteField = ExtractStrict<AnyAutocompleteField, "additional-name" | "address-level1" | "address-level2" | "address-level3" | "address-level4" | "address-line1" | "address-line2" | "address-line3" | "country-name" | "country" | "family-name" | "given-name" | "honorific-prefix" | "honorific-suffix" | "language" | "name" | "nickname" | "one-time-code" | "organization-title" | "organization" | "postal-code" | "sex" | "street-address" | "transaction-currency" | "username" | "cc-name" | "cc-given-name" | "cc-additional-name" | "cc-family-name" | "cc-type">;
export interface DatePickerProps extends GlobalProps, InputProps, FocusEventProps {
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
	type?: "single" | "multiple" | "range";
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
export interface DateFieldProps extends GlobalProps, BaseTextFieldProps, Pick<DatePickerProps, "view" | "defaultView" | "value" | "defaultValue" | "allow" | "disallow" | "allowDays" | "disallowDays" | "onViewChange">, AutocompleteProps<DateAutocompleteField> {
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
export type DateAutocompleteField = ExtractStrict<AnyAutocompleteField, "bday" | "bday-day" | "bday-month" | "bday-year" | "cc-expiry" | "cc-expiry-month" | "cc-expiry-year">;
export interface DateSpinnerProps extends GlobalProps, Pick<DatePickerProps, "defaultValue" | "value" | "onInput" | "onChange" | "onBlur" | "onFocus"> {
	/**
	 * Default selected value for the spinner.
	 *
	 * This uses a date in `YYYY-MM-DD` format.
	 *
	 * @default ""
	 */
	defaultValue?: string;
	/**
	 * Current selected value for the spinner.
	 *
	 * This uses a date in `YYYY-MM-DD` format.
	 *
	 * @default ""
	 */
	value?: string;
	/**
	 * Callback after the wheels have finished spinning and the value has
	 * settled.
	 *
	 * Fires once when inertial/momentum scrolling stops and the selection snaps
	 * into place.
	 */
	onInput?: (event: Event) => void;
	/**
	 * Callback when the selection has been confirmed by the user.
	 *
	 * Fires only when the user explicitly commits the selection (for example, by
	 * pressing a confirmation control).
	 */
	onChange?: (event: Event) => void;
}
export interface DividerProps extends GlobalProps {
	/**
	 * Specify the direction of the divider. This uses [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
	 *
	 * @default 'inline'
	 */
	direction?: "inline" | "block";
	/**
	 * Modify the color to be more or less intense.
	 *
	 * @default 'base'
	 */
	color?: ColorKeyword;
}
export interface EmailFieldProps extends GlobalProps, BaseTextFieldProps, MinMaxLengthProps, AutocompleteProps<EmailAutocompleteField> {
}
export type EmailAutocompleteField = ExtractStrict<AnyAutocompleteField, "email" | `${AutocompleteAddressGroup} email`>;
export interface EmbedProps extends GlobalProps, SizingProps {
	/**
	 * The content type of the file to display.
	 *
	 * @default 'text/html'
	 */
	type?: "text/html" | "text/plain" | "application/pdf";
	/**
	 * The source of the file to preview.
	 *
	 * The value must be either:
	 * - A relative path that will be appended to your app's `application_url`.
	 * - A full URL to your app's backend that will be used to return the file.
	 *
	 * Supported file types:
	 * - HTML files
	 * - Text files
	 * - PDF files
	 *
	 * @implementation If this value is omitted, the component should render an empty state or nothing.
	 */
	src?: string;
	/**
	 * A label that describes the purpose or contents of the Embed. It will be read to users
	 * using assistive technologies such as screen readers.
	 *
	 * @implementation for web-based implementations, this should map to the [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/title) attribute
	 */
	accessibilityLabel?: string;
}
export interface EmptyStateProps extends GlobalProps, ActionSlots {
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
	gap?: MaybeResponsive<MaybeTwoValuesShorthandProperty<SpacingKeyword>>;
	/**
	 * Adjust spacing between elements in the block axis.
	 *
	 * This overrides the row value of `gap`.
	 *
	 * @default '' - meaning no override
	 */
	rowGap?: MaybeResponsive<SpacingKeyword | "">;
	/**
	 * Adjust spacing between elements in the inline axis.
	 *
	 * This overrides the column value of `gap`.
	 *
	 * @default '' - meaning no override
	 */
	columnGap?: MaybeResponsive<SpacingKeyword | "">;
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
	 * - `''`: direction is inherited from parent elements (equivalent to not setting the attribute)
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
export interface HeadingProps extends GlobalProps, AccessibilityVisibilityProps, BlockTypographyProps {
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
export interface IconProps extends GlobalProps, Pick<InteractionProps, "interestFor"> {
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
export interface ImageProps extends GlobalProps, BaseImageProps, BorderProps {
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
	 * - `fill`: the image will takes up 100% of the available inline size.
	 * - `auto`: the image will be displayed at its natural size.
	 *
	 * @default 'fill'
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width
	 */
	inlineSize?: "fill" | "auto";
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
	aspectRatio?: `${number}${optionalSpace}/${optionalSpace}${number}` | `${number}`;
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
	 * @default 'eager'
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading
	 */
	loading?: "eager" | "lazy";
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
export interface LinkProps extends GlobalProps, LinkBehaviorProps {
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
export interface ModalProps extends GlobalProps, BaseOverlayProps, BaseOverlayMethods, ActionSlots {
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
	padding?: "base" | "none";
	/**
	 * Adjust the size of the Modal.
	 *
	 * `max`: expands the Modal to its maximum size as defined by the host application, on both the horizontal and vertical axes.
	 *
	 * @default 'base'
	 */
	size?: SizeKeyword | "max";
	/**
	 * The content of the Modal.
	 */
	children?: ComponentChildren;
}
export interface NumberFieldProps extends GlobalProps, BaseTextFieldProps, AutocompleteProps<NumberAutocompleteField>, NumberConstraintsProps, FieldDecorationProps {
	/**
	 * Sets the virtual keyboard.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode
	 * @default 'decimal'
	 */
	inputMode?: "decimal" | "numeric";
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
export type NumberAutocompleteField = ExtractStrict<AnyAutocompleteField, "one-time-code" | "cc-number" | "cc-csc">;
export interface PageProps extends GlobalProps, ActionSlots {
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
export interface POSBlockProps extends GlobalProps, Pick<ActionSlots, "secondaryActions"> {
	/**
	 * The heading to display within the POSBlock.
	 *
	 * If not provided, the description of the extension will be used when a heading is appropriate.
	 */
	heading?: string;
	/**
	 * The content to display within the POSBlock.
	 */
	children?: ComponentChildren;
	/**
	 * The secondary actions to perform, provided as button or link type elements.
	 */
	secondaryActions?: ComponentChildren;
}
export interface QRCodeProps extends GlobalProps {
	/**
	 * Set the border of the QR code.
	 *
	 * `base`: applies border that is appropriate for the element.
	 * `none`: removes the border from the element.
	 *
	 * @default 'base'
	 */
	border?: "base" | "none";
	/**
	 * The content to be encoded in the QR code, which can be any string such as a URL, email address, plain text, etc.
	 * Specific string formatting can trigger actions on the user's device when scanned, like opening geolocation
	 * coordinates on a map, opening a preferred app or app store entry, preparing an email, text message, and more.
	 */
	content?: string;
	/**
	 * The displayed size of the QR code.
	 *
	 * `fill`: the QR code will takes up 100% of the available inline-size and maintain a 1:1 aspect ratio.
	 * `base`: the QR code will be displayed at its default size.
	 *
	 * @default 'base'
	 */
	size?: "base" | "fill";
	/**
	 * A label that describes the purpose or contents of the QR code. When set,
	 * it will be announced to users using assistive technologies and will
	 * provide more context about what the QR code may do when scanned.
	 *
	 * @default 'QR code' (translated to the user's locale)
	 */
	accessibilityLabel?: string;
	/**
	 * Invoked when the conversion of `content` to a QR code fails.
	 * If an error occurs, the QR code and its child elements will not be displayed.
	 */
	onError?: (event: Event) => void;
	/**
	 * URL of an image to be displayed in the center of the QR code.
	 * This is useful for branding or to indicate to the user what scanning the QR code will do.
	 * By default, no image is displayed.
	 */
	logo?: string;
}
export interface ScrollEventProps {
	/**
	 * Callback when the scroll position reaches any edge.
	 *
	 * Provides information about which edges have been reached:
	 * - `inline: 'start'` - reached the inline-start edge
	 * - `inline: 'end'` - reached the inline-end edge
	 * - `block: 'start'` - reached the block-start edge
	 * - `block: 'end'` - reached the block-end edge
	 * - `null` - not at that edge
	 *
	 * Uses the flow‑relative axes.
	 */
	onScrollToEdge?: (inline: "start" | "end" | null, block: "start" | "end" | null) => void;
	/**
	 * Distance from the edge at which `onScrollToEdge` fires.
	 * Percentage values are relative to the scrollable content's size in that axis.
	 *
	 * [1-to-4-value syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is
	 * supported.
	 *
	 * The order is:
	 * - 4 values: `block-start inline-end block-end inline-start`
	 * - 3 values: `block-start inline block-end`
	 * - 2 values: `block inline`
	 *
	 * For example:
	 * - `48px` means the distance from the edge at which `onScrollToEdge` fires from block-start, inline-end, block-end and inline-start is `48px`.
	 * - `48px 0` means the distance from the edge at which `onScrollToEdge` fires from block-start and block-end is `48px`, and for inline-start and inline-end is `0`.
	 * - `48 0 48` means the distance from the edge at which `onScrollToEdge` fires from block-start is `48px`, for inline-end is `0`, for block-end is `48px` and for inline-start is `0`.
	 * - `48px 0 48px 10%` means the distance from the edge at which `onScrollToEdge` fires from block-start is `48px`, for inline-end is `0`, for block-end is `48px` and for inline-start is `10%`.
	 *
	 * @default '0'
	 * Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/scrollMargin) for more details.
	 */
	scrollMargin?: MaybeAllValuesShorthandProperty<SizeUnits>;
}
export type OverflowKeyword = "auto" | "hidden";
export interface ScrollBoxProps extends GlobalProps, ScrollEventProps, Omit<BaseBoxPropsWithRole, "overflow"> {
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
export interface SearchFieldProps extends GlobalProps, BaseTextFieldProps, MinMaxLengthProps, AutocompleteProps<SearchAutocompleteField> {
}
export type SearchAutocompleteField = TextAutocompleteField;
export interface SectionProps extends GlobalProps, ActionSlots {
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
	padding?: "base" | "none";
}
export interface SpinnerProps extends GlobalProps {
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
export interface StackProps extends GlobalProps, BaseBoxPropsWithRole, GapProps {
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
	direction?: MaybeResponsive<"block" | "inline">;
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
export interface SwitchProps extends GlobalProps, BaseCheckableProps, BasicFieldProps, FieldDetailsProps, FieldErrorProps {
}
export interface TabProps extends GlobalProps {
	/**
	 * Corresponds to the `id` property of the TabPanel component that will be displayed when selected
	 */
	controls?: string;
	/**
	 * Whether the tab is selected.
	 *
	 * @implementation Note: This attribute is not to be implemented until decisions have been made about this pattern in the codex.
	 *
	 * @default false
	 */
	selected?: boolean;
	/**
	 * Disables the control, disallowing any interaction.
	 *
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * The content to use as the tab label.
	 */
	children?: StringChildren;
}
export interface TabListProps extends GlobalProps {
	/**
	 * Accepts only `Tabs` components.
	 */
	children?: ComponentChildren;
}
export interface TabPanelProps extends GlobalProps {
	/**
	 * The id of the TabPanel used for identification in the Tabs component.
	 * Must match the `controls` prop of the corresponding Tab component.
	 */
	id?: string;
	/**
	 * The content of the TabPanel.
	 */
	children?: ComponentChildren;
}
export interface TabsProps extends GlobalProps, Pick<InputProps, "disabled" | "onChange" | "value" | "defaultValue"> {
	/**
	 * A label that describes the purpose or contents of the tabs. When set,
	 * it will be announced using assistive technologies and provide additional context.
	 */
	accessibilityLabel?: string;
	/**
	 * Accepts only `TabList` and `TabPanel` components.
	 */
	children?: ComponentChildren;
	/**
	 * The value of the selected tab.
	 *
	 * This should match the `id` prop of one of the TabPanel components.
	 * If not provided, the first tab will be selected by default.
	 */
	value?: string;
	/**
	 * The default value of the selected tab.
	 *
	 * This should match the `id` prop of one of the TabPanel components.
	 * If not provided, the first tab will be selected by default.
	 *
	 * Reflects to the `value` attribute
	 */
	defaultValue?: string;
	/**
	 * Disables all tabs and prevents user interaction.
	 */
	disabled?: boolean;
	/**
	 * Callback fired when the selected tab changes.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
	 */
	onChange?: (event: Event) => void;
}
export interface TextProps extends GlobalProps, AccessibilityVisibilityProps, BaseTypographyProps, DisplayProps, Pick<InteractionProps, "interestFor"> {
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
export interface TextAreaProps extends GlobalProps, BaseTextFieldProps, MinMaxLengthProps, AutocompleteProps<TextAutocompleteField> {
	/**
	 * A number of visible text lines.
	 *
	 * @default 2
	 */
	rows?: number;
}
export interface TextFieldProps extends GlobalProps, BaseTextFieldProps, MinMaxLengthProps, AutocompleteProps<TextAutocompleteField>, FieldDecorationProps {
}
export interface TileProps extends GlobalProps, Pick<BaseClickableProps, "onClick" | "disabled"> {
	/**
	 * A title that describes the content of the Tile.
	 *
	 * @default ''
	 */
	heading?: string;
	/**
	 * Supporting text displayed below the heading.
	 *
	 * @default ''
	 */
	subheading?: string;
	/**
	 * A numeric indicator rendered within the Tile (for example, a count or a step number).
	 *
	 * - When provided, the indicator is displayed inside the tile.
	 * - Intended for small integers. It may clamp, truncate, or abbreviate larger values.
	 *
	 */
	itemCount?: number;
	/**
	 * Sets the tone of the Tile, based on the intention of the information being conveyed.
	 * @default 'auto'
	 */
	tone?: ExtractStrict<ToneKeyword, "auto" | "neutral" | "accent">;
}
export interface TimePickerProps extends GlobalProps, InputProps, FocusEventProps {
	/**
	 * Times that can be selected.
	 *
	 * A comma-separated list of allowed time ranges. Whitespace is allowed after commas.
	 *
	 * The default `''` allows all times.
	 *
	 * Each time range is in `HH:MM--HH:MM` format.
	 *
	 * The end of the range is exclusive, so `09:00--10:00` allows selecting `09:00` but not `10:00`.
	 *
	 * Either side of `--` can be omitted to create an unbounded range.
	 *
	 * Whitespace is allowed either side of `--`.
	 *
	 * @default ''
	 *
	 * @example
	 * `09:00--10:00, 13:00--14:00` - assuming the step is 1 hour, this allows selecting `09:00` or `13:00`.
	 * `12:00--` - allows selecting `12:00` and all times after it.
	 */
	allow?: string;
	/**
	 * Times that cannot be selected. This subtracts from `allow`.
	 *
	 * A comma-separated list of allowed time ranges. Whitespace is allowed after commas.
	 *
	 * The default `''` has no effect on `allow`.
	 *
	 * Each time range is in `HH:MM--HH:MM` format.
	 *
	 * The end of the range is exclusive, so `09:00--10:00` disallows selecting `09:00` but not `10:00`.
	 *
	 * Either side of `--` can be omitted to create an unbounded range.
	 *
	 * Whitespace is allowed either side of `--`.
	 *
	 * @default ''
	 *
	 * @example
	 * `09:00--10:00, 13:00--14:00` - assuming the step is 1 hour, this disallows selecting `09:00` or `13:00`.
	 */
	disallow?: string;
	/**
	 * Default selected value.
	 *
	 * The default, `''`, means no time is selected.
	 *
	 * The value must be a 24-hour time in `HH:mm:ss` format, with leading zeros.
	 *
	 * Examples: `"00:00:00"`, `"09:05:00"`, `"23:59:00"`, `"14:03:30"`.
	 *
	 * This follows the HTML time input value format, which is always 24-hour with
	 * leading zeros regardless of UI presentation.
	 *
	 * See: https://developer.mozilla.org/docs/Web/HTML/Element/input/time
	 *
	 * If the provided value is invalid, '' is used as the value.
	 *
	 * @default ''
	 */
	defaultValue?: string;
	/**
	 * Current selected value.
	 *
	 * The default, `''`, means no time is selected.
	 *
	 * The value must be a 24-hour time in `HH:mm:ss` format, with leading zeros.
	 *
	 * Examples: `"00:00:00"`, `"09:05:00"`, `"23:59:00"`, `"14:03:30"`.
	 *
	 * This follows the HTML time input value format, which is always 24-hour with
	 * leading zeros regardless of UI presentation.
	 *
	 * See: https://developer.mozilla.org/docs/Web/HTML/Element/input/time
	 *
	 * If the provided value is invalid, '' is used as the value.
	 *
	 * @default ''
	 */
	value?: string;
	/**
	 * The step between selectable times, in seconds.
	 *
	 * @default 60
	 */
	step?: number;
}
export interface TimeFieldProps extends GlobalProps, BaseTextFieldProps, Pick<TimePickerProps, "value" | "defaultValue" | "allow" | "disallow" | "step"> {
	/**
	 * Callback when the field has an invalid time.
	 * This callback will be called, if the time typed is invalid or disabled.
	 *
	 * Times that don’t exist or have formatting errors are considered invalid. Some examples of invalid times are:
	 * - 24:00
	 * - 12:60
	 *
	 * Disallowed times are considered invalid.
	 *
	 * It’s important to note that this callback will be called only when the user **finishes editing** the time,
	 * and it’s called right after the `onChange` callback.
	 * The field is **not** validated on every change to the input. Once the buyer has signalled that
	 * they have finished editing the field (typically, by blurring the field), the field gets validated and the callback is run if the value is invalid.
	 */
	onInvalid?: (event: Event) => void;
	/**
	 * Current selected value.
	 *
	 * The default, `''`, means no time is selected.
	 *
	 * The value must be a 24-hour time in `HH:mm:ss` format, with leading zeros.
	 *
	 * Examples: `"00:00:00"`, `"09:05:00"`, `"23:59:00"`, `"14:03:30"`.
	 *
	 * This follows the HTML time input value format, which is always 24-hour with
	 * leading zeros regardless of UI presentation.
	 *
	 * See: https://developer.mozilla.org/docs/Web/HTML/Element/input/time
	 */
	value?: string;
	/**
	 * Default selected value.
	 *
	 * The default, `''`, means no time is selected.
	 *
	 * The value must be a 24-hour time in `HH:mm:ss` format, with leading zeros.
	 *
	 * Examples: `"00:00:00"`, `"09:05:00"`, `"23:59:00"`, `"14:03:30"`.
	 *
	 * This follows the HTML time input value format, which is always 24-hour with
	 * leading zeros regardless of UI presentation.
	 *
	 * See: https://developer.mozilla.org/docs/Web/HTML/Element/input/time
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
export type ComponentChild = VNode<any> | object | string | number | bigint | boolean | null | undefined;
type ComponentChildren$1 = ComponentChild[] | ComponentChild;
export interface Attributes {
	key?: Key | undefined;
	jsx?: boolean | undefined;
}
export interface ErrorInfo {
	componentStack?: string;
}
export type RenderableProps<P, RefType = any> = P & Readonly<Attributes & {
	children?: ComponentChildren$1;
	ref?: Ref<RefType>;
}>;
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
	getDerivedStateFromProps?(props: Readonly<P>, state: Readonly<S>): Partial<S> | null;
	getDerivedStateFromError?(error: any): Partial<S> | null;
}
export interface Component<P = {}, S = {}> {
	componentWillMount?(): void;
	componentDidMount?(): void;
	componentWillUnmount?(): void;
	getChildContext?(): object;
	componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
	shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
	componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
	getSnapshotBeforeUpdate?(oldProps: Readonly<P>, oldState: Readonly<S>): any;
	componentDidUpdate?(previousProps: Readonly<P>, previousState: Readonly<S>, snapshot: any): void;
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
	static getDerivedStateFromProps?(props: Readonly<object>, state: Readonly<object>): object | null;
	static getDerivedStateFromError?(error: any): object | null;
	state: Readonly<S>;
	props: RenderableProps<P>;
	context: any;
	base?: Element | Text;
	// From https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e836acc75a78cf0655b5dfdbe81d69fdd4d8a252/types/react/index.d.ts#L402
	// // We MUST keep setState() as a unified signature because it allows proper checking of the method return type.
	// // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18365#issuecomment-351013257
	setState<K extends keyof S>(state: ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | Partial<S> | null) | (Pick<S, K> | Partial<S> | null), callback?: () => void): void;
	forceUpdate(callback?: () => void): void;
	abstract render(props?: RenderableProps<P>, state?: Readonly<S>, context?: any): ComponentChildren$1;
}
//
// Context
// -----------------------------------
export interface Consumer<T> extends FunctionComponent<{
	children: (value: T) => ComponentChildren$1;
}> {
}
export interface Provider<T> extends FunctionComponent<{
	value: T;
	children?: ComponentChildren$1;
}> {
}
export interface Context<T> extends Provider<T> {
	Consumer: Consumer<T>;
	Provider: Provider<T>;
	displayName?: string;
}




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
interface BaseElementPropsWithChildren<TClass = HTMLElement> extends BaseElementProps<TClass> {
    children?: ComponentChildren;
}
type IntrinsicElementProps<T> = T & BaseElementPropsWithChildren<T & HTMLElement>;
type HtmlElementTagNameProps<T> = T & HTMLElement;
interface CallbackEvent<T extends keyof HTMLElementTagNameMap> {
    currentTarget: HTMLElementTagNameMap[T];
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
    detail?: any;
    eventPhase: number;
    target: HTMLElementTagNameMap[T] | null;
}

declare const tagName$E = "s-badge";
interface BadgeJSXProps extends Pick<BadgeProps, 'id'> {
    /**
     * Sets the tone of the Badge, based on the intention of the information being conveyed.
     *
     * @default 'auto'
     */
    tone?: Extract<BadgeProps['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical' | 'caution'>;
    /**
     * The content of the Badge.
     */
    children?: ComponentChildren;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$E]: HtmlElementTagNameProps<BadgeJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$E]: IntrinsicElementProps<BadgeJSXProps>;
        }
    }
}

declare const tagName$D = "s-banner";
interface BannerJSXProps extends Pick<BannerProps, 'heading' | 'id'> {
    /**
     * Determines whether the banner is hidden.
     *
     * @default false
     */
    hidden?: BannerProps['hidden'];
    /**
     * Sets the tone of the Banner, based on the intention of the information being conveyed.
     *
     * @default 'auto'
     */
    tone?: Extract<BannerProps['tone'], 'auto' | 'success' | 'info' | 'warning' | 'critical'>;
    /**
     * The action taken when the Banner is pressed.
     */
    primaryAction?: ComponentChild;
    /**
     * The content of the Banner.
     */
    children?: ComponentChildren;
}
type ElementProps$c = Omit<BannerJSXProps, 'primaryAction'>;
declare global {
    interface HTMLElementTagNameMap {
        [tagName$D]: HtmlElementTagNameProps<ElementProps$c>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$D]: IntrinsicElementProps<ElementProps$c>;
        }
    }
}

declare const tagName$C = "s-box";
type PaddingKeyword$2 = SizeKeyword | 'none';
interface BoxJSXProps {
    /**
     * A unique identifier for the element.
     */
    id?: string;
    /**
     * Adjust the block size.
     *
     * @default 'auto'
     */
    blockSize?: SizeUnitsOrAuto;
    /**
     * Adjust the inline size.
     *
     * @default 'auto'
     */
    inlineSize?: SizeUnitsOrAuto;
    /**
     * Adjust the maximum block size.
     *
     * @default 'none'
     */
    maxBlockSize?: SizeUnitsOrNone;
    /**
     * Adjust the maximum inline size.
     *
     * @default 'none'
     */
    maxInlineSize?: SizeUnitsOrNone;
    /**
     * Adjust the minimum block size.
     *
     * @default '0'
     */
    minBlockSize?: SizeUnits;
    /**
     * Adjust the minimum inline size.
     *
     * @default '0'
     */
    minInlineSize?: SizeUnits;
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
    padding?: MaybeAllValuesShorthandProperty<PaddingKeyword$2>;
    /**
     * Adjust the block-padding.
     *
     * - `large none` means block-start padding is `large`, block-end padding is `none`.
     *
     * This overrides the block value of `padding`.
     *
     * @default '' - meaning no override
     */
    paddingBlock?: MaybeTwoValuesShorthandProperty<PaddingKeyword$2> | '';
    /**
     * Adjust the block-start padding.
     *
     * This overrides the block-start value of `paddingBlock`.
     *
     * @default '' - meaning no override
     */
    paddingBlockStart?: PaddingKeyword$2 | '';
    /**
     * Adjust the block-end padding.
     *
     * This overrides the block-end value of `paddingBlock`.
     *
     * @default '' - meaning no override
     */
    paddingBlockEnd?: PaddingKeyword$2 | '';
    /**
     * Adjust the inline padding.
     *
     * - `large none` means inline-start padding is `large`, inline-end padding is `none`.
     *
     * This overrides the inline value of `padding`.
     *
     * @default '' - meaning no override
     */
    paddingInline?: MaybeTwoValuesShorthandProperty<PaddingKeyword$2> | '';
    /**
     * Adjust the inline-start padding.
     *
     * This overrides the inline-start value of `paddingInline`.
     *
     * @default '' - meaning no override
     */
    paddingInlineStart?: PaddingKeyword$2 | '';
    /**
     * Adjust the inline-end padding.
     *
     * This overrides the inline-end value of `paddingInline`.
     *
     * @default '' - meaning no override
     */
    paddingInlineEnd?: PaddingKeyword$2 | '';
    /**
     * The content of the Box.
     */
    children?: ComponentChildren;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$C]: HtmlElementTagNameProps<BoxJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$C]: IntrinsicElementProps<BoxJSXProps>;
        }
    }
}

declare const tagName$B = "s-button";
interface ButtonJSXProps extends Pick<ButtonProps, 'id' | 'disabled' | 'command' | 'commandFor' | 'loading'> {
    /**
     * Sets the action the `commandFor` should take when this clickable is activated.
     *
     * See the documentation of particular components for the actions they support.
     *
     * - `--auto`: a default action for the target component.
     * - `--show`: shows the target component.
     * - `--hide`: hides the target component.
     * - `--toggle`: toggles the target component.
     *
     * @default '--auto'
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command
     */
    command?: Extract<ButtonProps['command'], '--auto' | '--show' | '--hide' | '--toggle'>;
    /**
     * Sets the tone of the Button, based on the intention of the information being conveyed.
     *
     * @default 'auto'
     */
    tone?: Extract<ButtonProps['tone'], 'auto' | 'critical' | 'neutral' | 'warning' | 'caution'>;
    /**
     * Changes the visual appearance of the Button.
     *
     * @default 'auto' - the variant is automatically determined by the Button's context
     */
    variant?: Extract<ButtonProps['variant'], 'primary' | 'secondary'>;
    /**
     * Called when the button is activated.
     */
    onClick?: (event: CallbackEvent<typeof tagName$B>) => void;
    /**
     * The content of the Button.
     */
    children?: ComponentChildren;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$B]: HtmlElementTagNameProps<ButtonJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$B]: IntrinsicElementProps<ButtonJSXProps>;
        }
    }
}

declare const tagName$A = "s-choice";
interface ChoiceJSXProps extends Pick<ChoiceProps, 'id' | 'value' | 'disabled' | 'selected'> {
    children?: ComponentChildren;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$A]: HtmlElementTagNameProps<ChoiceJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$A]: IntrinsicElementProps<ChoiceJSXProps>;
        }
    }
}

declare const tagName$z = "s-choice-list";
interface ChoiceListJSXProps extends Pick<ChoiceListProps, 'id' | 'values' | 'multiple'> {
    /**
     * Callback when the user changes a choice. Fires simultaneously with onChange.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$z>) => void) | null;
    /**
     * Callback when the user changes a choice. Fires simultaneously with onInput.
     */
    onChange?: ((event: CallbackEvent<typeof tagName$z>) => void) | null;
    /**
     * The content of the ChoiceList. Should be one or more Choice elements.
     */
    children?: ComponentChildren;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$z]: HtmlElementTagNameProps<ChoiceListJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$z]: IntrinsicElementProps<ChoiceListJSXProps>;
        }
    }
}

declare const tagName$y = "s-clickable";
interface ClickableJSXProps extends Pick<ClickableProps, 'id' | 'disabled'> {
    /**
     * Callback when the element is activated.
     */
    onClick?: (event: CallbackEvent<typeof tagName$y>) => void;
    /**
     * The content of the Clickable.
     */
    children?: ComponentChildren;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$y]: HtmlElementTagNameProps<ClickableJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$y]: IntrinsicElementProps<ClickableJSXProps>;
        }
    }
}

declare const tagName$x = "s-date-field";
interface DateFieldJSXProps extends Pick<DateFieldProps, 'id' | 'label' | 'details' | 'value' | 'disabled' | 'error' | 'required'> {
    /**
     * Callback when the user makes any changes in the field.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$x>) => void) | null;
    /**
     * Callback after editing completes (typically on blur).
     */
    onChange?: ((event: CallbackEvent<typeof tagName$x>) => void) | null;
    /**
     * Callback when the element loses focus.
     */
    onBlur?: ((event: CallbackEvent<typeof tagName$x>) => void) | null;
    /**
     * Callback when the element receives focus.
     */
    onFocus?: ((event: CallbackEvent<typeof tagName$x>) => void) | null;
}
type ElementProps$b = Omit<DateFieldJSXProps, 'accessory'>;
declare global {
    interface HTMLElementTagNameMap {
        [tagName$x]: HtmlElementTagNameProps<ElementProps$b>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$x]: IntrinsicElementProps<ElementProps$b>;
        }
    }
}

declare const tagName$w = "s-date-picker";
interface DatePickerJSXProps extends Pick<DatePickerProps, 'id' | 'value'> {
    /**
     * Callback when the user selects a date from the picker.
     */
    onInput?: (event: CallbackEvent<typeof tagName$w>) => void | null;
    /**
     * Callback when the user selects a date from the picker that is different to the current value.
     */
    onChange?: (event: CallbackEvent<typeof tagName$w>) => void | null;
    /**
     * Callback when the date picker is dismissed.
     */
    onBlur?: (event: CallbackEvent<typeof tagName$w>) => void | null;
    /**
     * Callback when the date picker is revealed.
     */
    onFocus?: (event: CallbackEvent<typeof tagName$w>) => void | null;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$w]: HtmlElementTagNameProps<DatePickerJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$w]: IntrinsicElementProps<DatePickerJSXProps>;
        }
    }
}

declare const tagName$v = "s-date-spinner";
interface DateSpinnerJSXProps extends Pick<DateSpinnerProps, 'id' | 'value'> {
    /**
     * Callback when the user makes a selection.
     */
    onInput?: (event: CallbackEvent<typeof tagName$v>) => void | null;
    /**
     * Callback when the value changes. Only called when a different value is selected.
     */
    onChange?: (event: CallbackEvent<typeof tagName$v>) => void | null;
    /**
     * Callback when the date spinner is dismissed.
     */
    onBlur?: (event: CallbackEvent<typeof tagName$v>) => void | null;
    /**
     * Callback when the date spinner is revealed.
     */
    onFocus?: (event: CallbackEvent<typeof tagName$v>) => void | null;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$v]: HtmlElementTagNameProps<DateSpinnerJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$v]: IntrinsicElementProps<DateSpinnerJSXProps>;
        }
    }
}

declare const tagName$u = "s-divider";
interface DividerJSXProps extends Pick<DividerProps, 'id' | 'direction'> {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$u]: HtmlElementTagNameProps<DividerJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$u]: IntrinsicElementProps<DividerJSXProps>;
        }
    }
}

declare const tagName$t = "s-email-field";
interface EmailFieldJSXProps$1 extends Pick<EmailFieldProps, 'id' | 'label' | 'value' | 'placeholder' | 'disabled' | 'error' | 'required' | 'maxLength' | 'details'> {
    /**
     * Callback when the user makes any changes in the field.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$t>) => void) | null;
    /**
     * Callback after editing completes (typically on blur).
     */
    onChange?: ((event: CallbackEvent<typeof tagName$t>) => void) | null;
    /**
     * Callback when the element loses focus.
     */
    onBlur?: ((event: CallbackEvent<typeof tagName$t>) => void) | null;
    /**
     * Callback when the element receives focus.
     */
    onFocus?: ((event: CallbackEvent<typeof tagName$t>) => void) | null;
    /**
     * Additional content to be displayed in the field. Commonly used to display clickable text.
     */
    accessory?: ComponentChild;
}
type ElementProps$a = Omit<EmailFieldJSXProps$1, 'accessory'>;
declare global {
    interface HTMLElementTagNameMap {
        [tagName$t]: HtmlElementTagNameProps<ElementProps$a>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$t]: IntrinsicElementProps<ElementProps$a>;
        }
    }
}

declare const tagName$s = "s-heading";
interface HeadingJSXProps extends Pick<HeadingProps, 'id'> {
    /**
     * The content of the Heading.
     */
    children?: ComponentChildren;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$s]: HtmlElementTagNameProps<HeadingJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$s]: IntrinsicElementProps<HeadingJSXProps>;
        }
    }
}

declare const tagName$r = "s-icon";
type SupportedIconNames = Extract<IconProps['type'], 'alert-circle' | 'apps' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'backspace' | 'barcode' | 'battery-low' | 'bolt-filled' | 'bullet' | 'camera-flip' | 'caret-down' | 'caret-up' | 'cart' | 'cart-down' | 'cart-filled' | 'cart-send' | 'cart-up' | 'chart-line' | 'chart-vertical' | 'check' | 'check-circle-filled' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'circle' | 'clipboard-checklist' | 'clock' | 'collection' | 'credit-card' | 'credit-card-reader' | 'delete' | 'delivery' | 'desktop' | 'disabled' | 'disabled-filled' | 'discount' | 'discount-add' | 'discount-automatic' | 'discount-code' | 'discount-remove' | 'drag-handle' | 'drawer' | 'duplicate' | 'edit' | 'email' | 'exchange' | 'external' | 'flag' | 'gift-card' | 'graduation-hat' | 'grid' | 'hide-filled' | 'home' | 'home-filled' | 'image' | 'images' | 'info' | 'inventory' | 'inventory-edit' | 'inventory-list' | 'inventory-transfer' | 'keyboard-hide' | 'keypad' | 'link' | 'list-bulleted' | 'list-bulleted-filled' | 'live' | 'live-critical' | 'live-none' | 'location' | 'lock' | 'maximize' | 'menu' | 'menu-filled' | 'menu-horizontal' | 'minimize' | 'minus' | 'mobile' | 'money' | 'money-split' | 'note' | 'order' | 'order-draft' | 'order-filled' | 'package' | 'package-cancel' | 'package-reassign' | 'payment' | 'person' | 'person-add' | 'person-filled' | 'phablet' | 'phone-out' | 'play-circle' | 'plus' | 'point-of-sale' | 'point-of-sale-register' | 'print' | 'product' | 'product-filled' | 'profile' | 'question-circle-filled' | 'receipt' | 'refresh' | 'return' | 'scan-qr-code' | 'search' | 'send' | 'settings' | 'shipping-label-cancel' | 'sort' | 'star-circle' | 'star-filled' | 'store' | 'tablet' | 'transaction-fee-add' | 'unlock' | 'variant' | 'view' | 'wallet' | 'x' | 'x-circle'>;
interface IconJSXProps extends Pick<IconProps, 'id' | 'tone' | 'color' | 'size'> {
    /**
     * The type of icon to display.
     *
     * @default ''
     */
    type?: SupportedIconNames;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$r]: HtmlElementTagNameProps<IconJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$r]: IntrinsicElementProps<IconJSXProps>;
        }
    }
}

declare const tagName$q = "s-image";
interface ImageJSXProps extends Pick<ImageProps, 'id' | 'objectFit' | 'alt'> {
    /**
     * The displayed inline width of the image.
     *
     * - `fill`: the image will takes up 100% of the available inline size.
     * - `auto`: the image will be displayed at its natural size.
     *
     * **Mobile surfaces:** Always wrap your image in a box with a set width and height.
     * ScrollViews on mobile have a dynamic height, which can cause images to appear
     * inconsistently without defined dimensions.
     *
     * @default 'fill'
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width
     */
    inlineSize?: ImageProps['inlineSize'];
    /**
     * The image source, which should be a remote URL.
     *
     * When the image is loading or no `src` is provided, a placeholder will be rendered.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src
     */
    src?: ImageProps['src'];
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$q]: HtmlElementTagNameProps<ImageJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$q]: IntrinsicElementProps<ImageJSXProps>;
        }
    }
}

declare const tagName$p = "s-modal";
interface ModalJSXProps extends Pick<ModalProps, 'id' | 'heading'> {
    /**
     * Callback when the modal is hidden.
     */
    onHide?: (event: CallbackEvent<typeof tagName$p>) => void | null;
    /**
     * Callback when the modal is shown.
     */
    onShow?: (event: CallbackEvent<typeof tagName$p>) => void | null;
    /**
     * The primary action button displayed in the modal.
     *
     * The tone of the button is used to define the tone of the modal.
     *
     * If omitted, the modal will default to an 'info' tone, and show an 'OK' button, translated according to the user's locale.
     */
    primaryAction?: ComponentChild;
    /**
     * The secondary action buttons displayed in the modal.
     */
    secondaryActions?: ComponentChild;
    /**
     * The content of the Modal.
     */
    children?: ComponentChildren;
}
type ElementProps$9 = Omit<ModalJSXProps, 'primaryAction' | 'secondaryActions'>;
declare global {
    interface HTMLElementTagNameMap {
        [tagName$p]: HtmlElementTagNameProps<ElementProps$9>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$p]: IntrinsicElementProps<ElementProps$9>;
        }
    }
}

declare const tagName$o = "s-number-field";
interface NumberFieldJSXProps extends Pick<NumberFieldProps, 'id' | 'label' | 'details' | 'value' | 'placeholder' | 'disabled' | 'error' | 'required' | 'max' | 'min' | 'controls'> {
    /**
     * Content to use as the field label.
     *
     * Label is not supported when using Stepper controls
     */
    label?: NumberFieldProps['label'];
    /**
     * Additional text to provide context or guidance for the field.
     * This text is displayed along with the field and its label
     * to offer more information or instructions to the user.
     *
     * This will also be exposed to screen reader users.
     *
     * Details are not supported when using Stepper controls
     */
    details?: NumberFieldProps['details'];
    /**
     * Whether the field needs a value. This requirement adds semantic value
     * to the field, but it will not cause an error to appear automatically.
     * If you want to present an error when this field is empty, you can do
     * so with the `error` property.
     *
     * @default false
     *
     * Required is not supported when using Stepper controls
     */
    required?: NumberFieldProps['required'];
    /**
     * Indicate an error to the user. The field will be given a specific stylistic treatment
     * to communicate problems that have to be resolved immediately.
     *
     * Error is not supported when using Stepper controls
     */
    error?: NumberFieldProps['error'];
    /**
     * Sets the virtual keyboard.
     *
     * Input mode is not supported when using Stepper controls
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode
     * @default 'decimal'
     */
    inputMode?: NumberFieldProps['inputMode'];
    /**
     * A short hint that describes the expected value of the field.
     *
     * Placeholder text is not supported when using Stepper controls due to constrained space for the number field, especially on phones.
     */
    placeholder?: NumberFieldProps['placeholder'];
    /**
     *  Additional content to be displayed in the field. Commonly used to display clickable text.
     *
     * > Note: Accessory is not supported when using Stepper controls
     */
    accessory?: ComponentChild;
    /**
     * Sets the type of controls displayed for the field.
     *
     * - `stepper`: displays buttons to increase or decrease the value of the field by the stepping interval defined in the `step` property. Note that in POS
     *   adding stepper controls simplifies the behaviour of the Number Field itself. The field supports only integer values, is always-populated and automatically
     *   validates the value to be within the min and max bounds. Validation, label, details and placeholder are not supported when using Stepper controls.
     *
     * - `none`: no controls are displayed and users must input the value manually.
     * - `auto`: the presence of the controls depends on the surface and context.
     */
    controls?: NumberFieldProps['controls'];
    /**
     * Callback when the user makes any changes in the field.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$o>) => void) | null;
    /**
     * Callback after editing completes (typically on blur).
     */
    onChange?: ((event: CallbackEvent<typeof tagName$o>) => void) | null;
    /**
     * Callback when the element loses focus.
     */
    onBlur?: ((event: CallbackEvent<typeof tagName$o>) => void) | null;
    /**
     * Callback when the element receives focus.
     */
    onFocus?: ((event: CallbackEvent<typeof tagName$o>) => void) | null;
}
type ElementProps$8 = Omit<NumberFieldJSXProps, 'accessory'>;
declare global {
    interface HTMLElementTagNameMap {
        [tagName$o]: HtmlElementTagNameProps<ElementProps$8>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$o]: IntrinsicElementProps<ElementProps$8>;
        }
    }
}

declare const tagName$n = "s-page";
interface PageJSXProps extends Pick<PageProps, 'id'> {
    /**
     * The main page heading, displayed in the action bar at the top of the page.
     *
     * @default: ''
     */
    heading?: PageProps['heading'];
    /**
     * A secondary page heading, displayed under the main heading in the action bar.
     */
    subheading?: PageProps['subheading'];
    /**
     * Button element to display in the action bar. Only a single button is supported.
     */
    secondaryActions?: ComponentChild;
    /**
     * Content to display in the page's sidebar.
     */
    aside?: ComponentChild;
    /**
     * The content of the Page.
     */
    children?: ComponentChildren;
}
type ElementProps$7 = Omit<PageJSXProps, 'secondaryActions' | 'aside'>;
declare global {
    interface HTMLElementTagNameMap {
        [tagName$n]: HtmlElementTagNameProps<ElementProps$7>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$n]: IntrinsicElementProps<ElementProps$7>;
        }
    }
}

declare const tagName$m = "s-pos-block";
interface PosBlockJSXProps extends Pick<POSBlockProps, 'id' | 'heading'> {
    /**
     * The secondary actions to perform, provided as button or link type elements.
     */
    secondaryActions?: ComponentChild;
    /**
     * The content of the Block.
     */
    children?: ComponentChildren;
}
type ElementProps$6 = Omit<PosBlockJSXProps, 'secondaryActions'>;
declare global {
    interface HTMLElementTagNameMap {
        [tagName$m]: HtmlElementTagNameProps<ElementProps$6>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$m]: IntrinsicElementProps<ElementProps$6>;
        }
    }
}

declare const tagName$l = "s-qr-code";
interface QrCodeJSXProps extends Pick<QRCodeProps, 'id' | 'content'> {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$l]: HtmlElementTagNameProps<QrCodeJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$l]: IntrinsicElementProps<QrCodeJSXProps>;
        }
    }
}

type PaddingKeyword$1 = SizeKeyword | 'none';
declare const tagName$k = "s-scroll-box";
interface ScrollBoxJSXProps extends Pick<ScrollBoxProps, 'id'> {
    /**
     * Adjust the block size.
     *
     * @default 'auto'
     */
    blockSize?: SizeUnitsOrAuto;
    /**
     * Adjust the inline size.
     *
     * @default 'auto'
     */
    inlineSize?: SizeUnitsOrAuto;
    /**
     * Adjust the maximum block size.
     *
     * @default 'none'
     */
    maxBlockSize?: SizeUnitsOrNone;
    /**
     * Adjust the maximum inline size.
     *
     * @default 'none'
     */
    maxInlineSize?: SizeUnitsOrNone;
    /**
     * Adjust the minimum block size.
     *
     * @default '0'
     */
    minBlockSize?: SizeUnits;
    /**
     * Adjust the minimum inline size.
     *
     * @default '0'
     */
    minInlineSize?: SizeUnits;
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
    padding?: MaybeAllValuesShorthandProperty<PaddingKeyword$1>;
    /**
     * Adjust the block-padding.
     *
     * - `large none` means block-start padding is `large`, block-end padding is `none`.
     *
     * This overrides the block value of `padding`.
     *
     * @default '' - meaning no override
     */
    paddingBlock?: MaybeTwoValuesShorthandProperty<PaddingKeyword$1> | '';
    /**
     * Adjust the block-start padding.
     *
     * This overrides the block-start value of `paddingBlock`.
     *
     * @default '' - meaning no override
     */
    paddingBlockStart?: PaddingKeyword$1 | '';
    /**
     * Adjust the block-end padding.
     *
     * This overrides the block-end value of `paddingBlock`.
     *
     * @default '' - meaning no override
     */
    paddingBlockEnd?: PaddingKeyword$1 | '';
    /**
     * Adjust the inline padding.
     *
     * - `large none` means inline-start padding is `large`, inline-end padding is `none`.
     *
     * This overrides the inline value of `padding`.
     *
     * @default '' - meaning no override
     */
    paddingInline?: MaybeTwoValuesShorthandProperty<PaddingKeyword$1> | '';
    /**
     * Adjust the inline-start padding.
     *
     * This overrides the inline-start value of `paddingInline`.
     *
     * @default '' - meaning no override
     */
    paddingInlineStart?: PaddingKeyword$1 | '';
    /**
     * Adjust the inline-end padding.
     *
     * This overrides the inline-end value of `paddingInline`.
     *
     * @default '' - meaning no override
     */
    paddingInlineEnd?: PaddingKeyword$1 | '';
    /**
     * The content of the ScrollBox.
     */
    children?: ComponentChildren;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$k]: HtmlElementTagNameProps<ScrollBoxJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$k]: IntrinsicElementProps<ScrollBoxJSXProps>;
        }
    }
}

declare const tagName$j = "s-search-field";
interface SearchFieldJSXProps extends Pick<SearchFieldProps, 'id' | 'disabled' | 'placeholder' | 'value'> {
    /**
     * Callback when the user changes the value in the field.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$j>) => void) | null;
    /**
     * Callback when the field loses focus after the user changes the value in the field.
     */
    onChange?: ((event: CallbackEvent<typeof tagName$j>) => void) | null;
    /**
     * Callback when the field loses focus.
     */
    onBlur?: ((event: CallbackEvent<typeof tagName$j>) => void) | null;
    /**
     * Callback when the field is focused.
     */
    onFocus?: ((event: CallbackEvent<typeof tagName$j>) => void) | null;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$j]: HtmlElementTagNameProps<SearchFieldJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$j]: IntrinsicElementProps<SearchFieldJSXProps>;
        }
    }
}

declare const tagName$i = "s-section";
interface SectionJSXProps extends Pick<SectionProps, 'id'> {
    /**
     * A title that describes the content of the section.
     *
     * If omitted, and no secondaryActions are provided, the section will be rendered without a header.
     */
    heading?: string;
    /**
     * Button element to display in the section heading. A single button is supported.
     */
    secondaryActions?: ComponentChild;
    /**
     * The content of the Section.
     */
    children?: ComponentChildren;
}
type ElementProps$5 = Omit<SectionJSXProps, 'secondaryActions'>;
declare global {
    interface HTMLElementTagNameMap {
        [tagName$i]: HtmlElementTagNameProps<ElementProps$5>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$i]: IntrinsicElementProps<ElementProps$5>;
        }
    }
}

declare const tagName$h = "s-stack";
type PaddingKeyword = SizeKeyword | 'none';
type PickedProps = Pick<StackProps, 'id' | 'alignItems' | 'alignContent' | 'gap' | 'columnGap' | 'direction' | 'blockSize' | 'maxBlockSize' | 'maxInlineSize' | 'minBlockSize' | 'minInlineSize' | 'inlineSize' | 'justifyContent' | 'rowGap'>;
interface StackJSXProps extends PickedProps {
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
    paddingBlock?: MaybeTwoValuesShorthandProperty<PaddingKeyword | ''>;
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
    paddingInline?: MaybeTwoValuesShorthandProperty<PaddingKeyword | ''>;
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
    /**
     * Adjust the block size.
     * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/block-size
     *
     * @default 'auto'
     */
    blockSize?: SizeUnitsOrAuto;
    /**
     * Adjust the maximum block size.
     * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size
     *
     * @default 'none'
     */
    maxBlockSize?: SizeUnitsOrNone;
    /**
     * Adjust the maximum inline size.
     * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size
     *
     * @default 'none'
     */
    maxInlineSize?: SizeUnitsOrNone;
    /**
     * Adjust the minimum block size.
     * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size
     *
     * @default '0'
     */
    minBlockSize?: SizeUnits;
    /**
     * Adjust the minimum inline size.
     * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size
     *
     * @default '0'
     */
    minInlineSize?: SizeUnits;
    /**
     * Aligns the Stack's children along the cross axis.
     */
    alignItems?: AlignItemsKeyword;
    /**
     * Aligns the Stack along the cross axis.
     */
    alignContent?: AlignContentKeyword;
    /**
     * Adjust spacing between elements.
     * A single value applies to both axes. A pair of values (eg large-100 large-500) can be used to set the inline and block axes respectively.
     *
     * @default 'none'
     */
    gap?: MaybeTwoValuesShorthandProperty<SpacingKeyword>;
    /**
     * Adjust spacing between elements in the inline axis. This overrides the column value of gap.
     *
     * @default '' - meaning no override
     */
    columnGap?: SpacingKeyword | '';
    /**
     * Sets how the children are placed within the Stack. This uses logical properties.
     *
     * @default 'block'
     * @implementation - the content will wrap if the direction is 'inline', and not wrap if the direction is 'block'
     */
    direction?: 'block' | 'inline';
    /**
     * Adjust the inline size.
     * @see — https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size
     *
     * @default 'auto'
     */
    inlineSize?: SizeUnitsOrAuto;
    /**
     * Aligns the Stack along the main axis.
     * @see — https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
     *
     * @default 'normal'
     */
    justifyContent?: JustifyContentKeyword;
    /**
     * Adjust spacing between elements in the block axis. This overrides the row value of gap.
     *
     * @default '' - meaning no override
     */
    rowGap?: SpacingKeyword | '';
    /**
     * The content of the Stack.
     */
    children?: ComponentChildren;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$h]: HtmlElementTagNameProps<StackJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$h]: IntrinsicElementProps<StackJSXProps>;
        }
    }
}

declare const tagName$g = "s-text";
interface TextJSXProps extends Pick<TextProps, 'id'> {
    /**
     * Modify the color to be more or less intense.
     *
     * @default 'base'
     */
    color?: Extract<TextProps['color'], 'base' | 'strong' | 'subdued'>;
    /**
     * Provide semantic meaning and default styling to the text.
     *
     * Other presentation properties on Text override the default styling.
     *
     * @default 'generic'
     */
    type?: Extract<TextProps['type'], 'generic' | 'strong' | 'small'>;
    /**
     * Sets the tone of the component, based on the intention of the information being conveyed.
     *
     * @default 'auto'
     */
    tone?: Extract<TextProps['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical' | 'caution'>;
    /**
     * The Text content. Supports nested text elements.
     */
    children?: ComponentChildren;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$g]: HtmlElementTagNameProps<TextJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$g]: IntrinsicElementProps<TextJSXProps>;
        }
    }
}

declare const tagName$f = "s-text-area";
interface TextAreaJSXProps$1 extends Pick<TextAreaProps, 'id' | 'label' | 'details' | 'value' | 'placeholder' | 'disabled' | 'error' | 'required' | 'maxLength' | 'rows'> {
    /**
     * Callback when the user makes any changes in the field.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$f>) => void) | null;
    /**
     * Callback after editing completes (typically on blur).
     */
    onChange?: ((event: CallbackEvent<typeof tagName$f>) => void) | null;
    /**
     * Callback when the element loses focus.
     */
    onBlur?: ((event: CallbackEvent<typeof tagName$f>) => void) | null;
    /**
     * Callback when the element receives focus.
     */
    onFocus?: ((event: CallbackEvent<typeof tagName$f>) => void) | null;
    /**
     * Additional content to be displayed in the field. Commonly used to display clickable text.
     */
    accessory?: ComponentChild;
}
type ElementProps$4 = Omit<TextAreaJSXProps$1, 'accessory'>;
declare global {
    interface HTMLElementTagNameMap {
        [tagName$f]: HtmlElementTagNameProps<ElementProps$4>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$f]: IntrinsicElementProps<ElementProps$4>;
        }
    }
}

declare const tagName$e = "s-text-field";
interface TextFieldJSXProps extends Pick<TextFieldProps, 'id' | 'label' | 'details' | 'value' | 'placeholder' | 'disabled' | 'error' | 'required' | 'maxLength'> {
    /**
     * Callback when the user makes any changes in the field.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$e>) => void) | null;
    /**
     * Callback after editing completes (typically on blur).
     */
    onChange?: ((event: CallbackEvent<typeof tagName$e>) => void) | null;
    /**
     * Callback when the element loses focus.
     */
    onBlur?: ((event: CallbackEvent<typeof tagName$e>) => void) | null;
    /**
     * Callback when the element receives focus.
     */
    onFocus?: ((event: CallbackEvent<typeof tagName$e>) => void) | null;
    /**
     * Additional content to be displayed in the field. Commonly used to display clickable text.
     */
    accessory?: ComponentChild;
}
type ElementProps$3 = Omit<TextFieldJSXProps, 'accessory'>;
declare global {
    interface HTMLElementTagNameMap {
        [tagName$e]: HtmlElementTagNameProps<ElementProps$3>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$e]: IntrinsicElementProps<ElementProps$3>;
        }
    }
}

declare const tagName$d = "s-tile";
interface TileJSXProps extends Pick<TileProps, 'heading' | 'id' | 'itemCount' | 'tone' | 'subheading'> {
    /**
     * Disables the Tile meaning it cannot be clicked or receive focus.
     *
     * @default false
     */
    disabled?: TileProps['disabled'];
    /**
     * Callback when the Tile is activated.
     */
    onClick?: (event: CallbackEvent<typeof tagName$d>) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$d]: HtmlElementTagNameProps<TileJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$d]: IntrinsicElementProps<TileJSXProps>;
        }
    }
}

declare const tagName$c = "s-time-field";
interface TimeFieldJSXProps extends Pick<TimeFieldProps, 'id' | 'label' | 'disabled' | 'value' | 'error' | 'details' | 'required'> {
    /**
     * Callback when the user makes any changes in the field.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$c>) => void) | null;
    /**
     * Callback after editing completes (typically on blur).
     */
    onChange?: ((event: CallbackEvent<typeof tagName$c>) => void) | null;
    /**
     * Callback when the element loses focus.
     */
    onBlur?: ((event: CallbackEvent<typeof tagName$c>) => void) | null;
    /**
     * Callback when the element receives focus.
     */
    onFocus?: ((event: CallbackEvent<typeof tagName$c>) => void) | null;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$c]: HtmlElementTagNameProps<TimeFieldJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$c]: IntrinsicElementProps<TimeFieldJSXProps>;
        }
    }
}

declare const tagName$b = "s-time-picker";
interface TimePickerJSXProps extends Pick<TimePickerProps, 'id' | 'value'> {
    /**
     * Callback when the user selects a time from the picker.
     */
    onInput?: (event: CallbackEvent<typeof tagName$b>) => void | null;
    /**
     * Callback when the user selects a time from the picker that is different to the current value.
     */
    onChange?: (event: CallbackEvent<typeof tagName$b>) => void | null;
    /**
     * Callback when the time picker is dismissed.
     */
    onBlur?: (event: CallbackEvent<typeof tagName$b>) => void | null;
    /**
     * Callback when the time picker is revealed.
     */
    onFocus?: (event: CallbackEvent<typeof tagName$b>) => void | null;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$b]: HtmlElementTagNameProps<TimePickerJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$b]: IntrinsicElementProps<TimePickerJSXProps>;
        }
    }
}

declare const tagName$a = "s-link";
interface LinkJSXProps extends Pick<LinkProps, 'id' | 'commandFor' | 'command' | 'accessibilityLabel'> {
    /**
     * Called when the link is activated.
     */
    onClick?: (event: CallbackEvent<typeof tagName$a>) => void;
    /**
     * The Link content.
     */
    children?: ComponentChildren;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$a]: HtmlElementTagNameProps<LinkJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$a]: IntrinsicElementProps<LinkJSXProps>;
        }
    }
}

declare const tagName$9 = "s-empty-state";
interface EmptyStateJSXProps extends Pick<EmptyStateProps, 'heading'> {
    /**
     * The subheading of the EmptyState.
     */
    subheading?: string;
    /**
     * The primary action to perform, provided as a button or link type element.
     */
    primaryAction?: ComponentChild;
    /**
     * The secondary actions to perform, provided as button or link type elements.
     */
    secondaryActions?: ComponentChild;
    /**
     * The graphic to display in the EmptyState. The only supported components is `Icon`, with a type of `alert-circle`, `search`, `info`, or `circle-info`.
     */
    graphic?: ComponentChild;
}
type ElementProps$2 = Omit<EmptyStateJSXProps, 'primaryAction' | 'secondaryActions' | 'graphic'>;
declare global {
    interface HTMLElementTagNameMap {
        [tagName$9]: HtmlElementTagNameProps<ElementProps$2>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$9]: IntrinsicElementProps<ElementProps$2>;
        }
    }
}

declare const tagName$8 = "s-embed";
interface EmbedJSXProps extends Pick<EmbedProps, 'type' | 'src' | 'accessibilityLabel' | 'blockSize' | 'minBlockSize' | 'maxBlockSize' | 'inlineSize' | 'minInlineSize' | 'maxInlineSize'> {
    /**
     * Adjust the block size.
     *
     * @default 'auto'
     */
    blockSize?: SizeUnitsOrAuto;
    /**
     * Adjust the minimum block size.
     *
     * @default '0'
     */
    minBlockSize?: SizeUnits;
    /**
     * Adjust the maximum block size.
     *
     * @default 'none'
     */
    maxBlockSize?: SizeUnitsOrNone;
    /**
     * Adjust the inline size.
     *
     * @default 'auto'
     */
    inlineSize?: SizeUnitsOrAuto;
    /**
     * Adjust the minimum inline size.
     *
     * @default '0'
     */
    minInlineSize?: SizeUnits;
    /**
     * Adjust the maximum inline size.
     *
     * @default 'none'
     */
    maxInlineSize?: SizeUnitsOrNone;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$8]: HtmlElementTagNameProps<EmbedJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$8]: IntrinsicElementProps<EmbedJSXProps>;
        }
    }
}

declare const tagName$7 = "s-spinner";
interface SpinnerJSXProps extends Pick<SpinnerProps, 'id' | 'accessibilityLabel'> {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$7]: HtmlElementTagNameProps<SpinnerJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$7]: IntrinsicElementProps<SpinnerJSXProps>;
        }
    }
}

declare const tagName$6 = "s-switch";
interface SwitchJSXProps extends Pick<SwitchProps, 'value' | 'defaultChecked' | 'disabled' | 'accessibilityLabel' | 'checked' | 'label' | 'details' | 'error' | 'labelAccessibilityVisibility'> {
    onInput?: ((event: CallbackEvent<typeof tagName$6>) => void) | null;
    onChange?: ((event: CallbackEvent<typeof tagName$6>) => void) | null;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$6]: HtmlElementTagNameProps<SwitchJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$6]: IntrinsicElementProps<SwitchJSXProps>;
        }
    }
}

declare const tagName$5 = "s-tabs";
interface TabsJSXProps extends Pick<TabsProps, 'value' | 'defaultValue' | 'disabled'> {
    children?: ComponentChildren;
    onChange?: ((event: CallbackEvent<typeof tagName$5>) => void) | null;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$5]: HtmlElementTagNameProps<TabsJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$5]: IntrinsicElementProps<TabsJSXProps>;
        }
    }
}

declare const tagName$4 = "s-tab-list";
interface TabListJSXProps extends Pick<TabListProps, 'children'> {
    children?: ComponentChildren;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$4]: HtmlElementTagNameProps<TabListJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$4]: IntrinsicElementProps<TabListJSXProps>;
        }
    }
}

declare const tagName$3 = "s-tab";
interface TabJSXProps extends Pick<TabProps, 'controls' | 'disabled'> {
    children?: StringChildren;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$3]: HtmlElementTagNameProps<TabJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$3]: IntrinsicElementProps<TabJSXProps>;
        }
    }
}

declare const tagName$2 = "s-tab-panel";
interface TabPanelJSXProps extends Pick<TabPanelProps, 'id'> {
    children?: ComponentChildren;
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$2]: HtmlElementTagNameProps<TabPanelJSXProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$2]: IntrinsicElementProps<TabPanelJSXProps>;
        }
    }
}

declare const tagName$1 = "s-text-area";
interface TextAreaJSXProps extends Pick<TextAreaProps, 'id' | 'label' | 'details' | 'value' | 'placeholder' | 'disabled' | 'error' | 'required' | 'maxLength' | 'rows'> {
    /**
     * Callback when the user makes any changes in the field.
     */
    onInput?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
    /**
     * Callback after editing completes (typically on blur).
     */
    onChange?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
    /**
     * Callback when the element loses focus.
     */
    onBlur?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
    /**
     * Callback when the element receives focus.
     */
    onFocus?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
}
type ElementProps$1 = Omit<TextAreaJSXProps, 'accessory'>;
declare global {
    interface HTMLElementTagNameMap {
        [tagName$1]: HtmlElementTagNameProps<ElementProps$1>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$1]: IntrinsicElementProps<ElementProps$1>;
        }
    }
}

declare const tagName = "s-email-field";
interface EmailFieldJSXProps extends Pick<EmailFieldProps, 'id' | 'label' | 'value' | 'placeholder' | 'disabled' | 'error' | 'required' | 'maxLength' | 'details'> {
    /**
     * Callback when the user makes any changes in the field.
     */
    onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    /**
     * Callback after editing completes (typically on blur).
     */
    onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    /**
     * Callback when the element loses focus.
     */
    onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
    /**
     * Callback when the element receives focus.
     */
    onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
type ElementProps = EmailFieldJSXProps;
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: HtmlElementTagNameProps<ElementProps>;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: IntrinsicElementProps<ElementProps>;
        }
    }
}

export type { BadgeJSXProps, BannerJSXProps, BoxJSXProps, ButtonJSXProps, ChoiceJSXProps, ChoiceListJSXProps, ClickableJSXProps, DateFieldJSXProps, DatePickerJSXProps, DateSpinnerJSXProps, DividerJSXProps, EmailFieldJSXProps, EmbedJSXProps, EmptyStateJSXProps, HeadingJSXProps, IconJSXProps, ImageJSXProps, LinkJSXProps, ModalJSXProps, NumberFieldJSXProps, PageJSXProps, PosBlockJSXProps, QrCodeJSXProps, ScrollBoxJSXProps, SearchFieldJSXProps, SectionJSXProps, SpinnerJSXProps, StackJSXProps, SwitchJSXProps, TabJSXProps, TabListJSXProps, TabPanelJSXProps, TabsJSXProps, TextAreaJSXProps, TextFieldJSXProps, TextJSXProps, TileJSXProps, TimeFieldJSXProps, TimePickerJSXProps };

interface LinkEvents {
        /** Called when the link is activated. */
    click?: (event: CallbackEvent<typeof tagName$a>) => void;
}

interface Link {
    /** A unique identifier for the element. */
    id?: string;
    /**
     * ID of a component that should respond to activations (e.g. clicks) on this component.
     *
     * See `command` for how to control the behavior of the target.
     * @see ://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor
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
     * @default '--auto'
     * @see ://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command
     */
    command?: "--auto" | "--show" | "--hide" | "--toggle" | "--copy";
    /**
     * A label that describes the purpose or contents of the Link. It will be read to users using assistive technologies such as screen readers.
     *
     * Use this when using only an icon or the content of the link is not enough context
     * for users using assistive technologies.
     */
    accessibilityLabel?: string;
}

interface EmptyStateSlots {
    /** The primary action to perform, provided as a button or link type element. */
    'primary-action'?: HTMLElement;
    /** The secondary actions to perform, provided as button or link type elements. */
    'secondary-actions'?: HTMLElement;
    /** The graphic to display in the EmptyState. The only supported components is `Icon`, with a type of `alert-circle`, `search`, `info`, or `circle-info`. */
    'graphic'?: HTMLElement;
}

interface EmptyState {
    /** The subheading of the EmptyState. */
    subheading?: string;
    /** The heading of the EmptyState. */
    heading?: string;
}

interface Embed {
    /**
     * Adjust the block size.
     * @default 'auto'
     */
    blockSize?: SizeUnitsOrAuto;
    /**
     * Adjust the minimum block size.
     * @default '0'
     */
    minBlockSize?: SizeUnits;
    /**
     * Adjust the maximum block size.
     * @default 'none'
     */
    maxBlockSize?: SizeUnitsOrNone;
    /**
     * Adjust the inline size.
     * @default 'auto'
     */
    inlineSize?: SizeUnitsOrAuto;
    /**
     * Adjust the minimum inline size.
     * @default '0'
     */
    minInlineSize?: SizeUnits;
    /**
     * Adjust the maximum inline size.
     * @default 'none'
     */
    maxInlineSize?: SizeUnitsOrNone;
    /**
     * The content type of the file to display.
     * @default 'text/html'
     */
    type?: "text/html" | "text/plain" | "application/pdf";
    /**
     * The source of the file to preview.
     *
     * The value must be either:
     * - A relative path that will be appended to your app's `application_url`.
     * - A full URL to your app's backend that will be used to return the file.
     *
     * Supported file types:
     * - HTML files
     * - Text files
     * - PDF files
     * @implementation If this value is omitted, the component should render an empty state or nothing.
     */
    src?: string;
    /**
     * A label that describes the purpose or contents of the Embed. It will be read to users
     * using assistive technologies such as screen readers.
     * @implementation for web-based implementations, this should map to the [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/title) attribute
     */
    accessibilityLabel?: string;
}

interface Spinner {
    /** A unique identifier for the element. */
    id?: string;
    /**
     * A label that describes the purpose of the progress. When set,
     * it will be announced to users using assistive technologies and will
     * provide them with more context. Providing an `accessibilityLabel` is
     * recommended if there is no accompanying text describing that something
     * is loading.
     */
    accessibilityLabel?: string;
}

interface SwitchEvents {
    input?: (event: CallbackEvent<typeof tagName$6>) => void;
    change?: (event: CallbackEvent<typeof tagName$6>) => void;
}

interface Switch {
    /** The value used in form data when the control is checked. */
    value?: string;
    /**
     * Whether the control is active by default.
     * @implementation `defaultChecked` reflects to the `checked` attribute.
     * @default false
     */
    defaultChecked?: boolean;
    /**
     * Disables the control, disallowing any interaction.
     * @default false
     */
    disabled?: boolean;
    /**
     * A label used for users using assistive technologies like screen readers. When set, any children or `label` supplied will not be announced.
     * This can also be used to display a control without a visual label, while still providing context to users using screen readers.
     */
    accessibilityLabel?: string;
    /**
     * Whether the control is active.
     * @default false
     */
    checked?: boolean;
    /** Visual content to use as the control label. */
    label?: string;
    /**
     * Additional text to provide context or guidance for the field.
     * This text is displayed along with the field and its label
     * to offer more information or instructions to the user.
     *
     * This will also be exposed to screen reader users.
     */
    details?: string;
    /**
     * Indicate an error to the user. The field will be given a specific stylistic treatment
     * to communicate problems that have to be resolved immediately.
     */
    error?: string;
    /**
     * Changes the visibility of the component's label.
     *
     * - `visible`: the label is visible to all users.
     * - `exclusive`: the label is visually hidden but remains in the accessibility tree.
     * @default 'visible'
     */
    labelAccessibilityVisibility?: ExtractStrict<"visible" | "hidden" | "exclusive", "visible" | "exclusive">;
}

interface TabsEvents {
    change?: (event: CallbackEvent<typeof tagName$5>) => void;
}

interface Tabs {
    /**
     * The value of the selected tab.
     *
     * This should match the `id` prop of one of the TabPanel components.
     * If not provided, the first tab will be selected by default.
     */
    value?: string;
    /**
     * The default value of the selected tab.
     *
     * This should match the `id` prop of one of the TabPanel components.
     * If not provided, the first tab will be selected by default.
     *
     * Reflects to the `value` attribute
     */
    defaultValue?: string;
    /** Disables all tabs and prevents user interaction. */
    disabled?: boolean;
}

interface Tab {
    /** Corresponds to the `id` property of the TabPanel component that will be displayed when selected */
    controls?: string;
    /**
     * Disables the control, disallowing any interaction.
     * @default false
     */
    disabled?: boolean;
}

interface TabPanel {
    /**
     * The id of the TabPanel used for identification in the Tabs component.
     * Must match the `controls` prop of the corresponding Tab component.
     */
    id?: string;
}

interface TextAreaEvents {
    /** Callback when the user makes any changes in the field. */
    input?: (event: CallbackEvent<typeof tagName$f>) => void;
    /** Callback after editing completes (typically on blur). */
    change?: (event: CallbackEvent<typeof tagName$f>) => void;
    /** Callback when the element loses focus. */
    blur?: (event: CallbackEvent<typeof tagName$f>) => void;
    /** Callback when the element receives focus. */
    focus?: (event: CallbackEvent<typeof tagName$f>) => void;
}

interface TextArea {
    /** A unique identifier for the element. */
    id?: string;
    /** Content to use as the field label. */
    label?: string;
    /**
     * Additional text to provide context or guidance for the field.
     * This text is displayed along with the field and its label
     * to offer more information or instructions to the user.
     *
     * This will also be exposed to screen reader users.
     */
    details?: string;
    /** The current value for the field. If omitted, the field will be empty. */
    value?: string;
    /** A short hint that describes the expected value of the field. */
    placeholder?: string;
    /**
     * Disables the field, disallowing any interaction.
     * @default false
     */
    disabled?: boolean;
    /**
     * Indicate an error to the user. The field will be given a specific stylistic treatment
     * to communicate problems that have to be resolved immediately.
     */
    error?: string;
    /**
     * Whether the field needs a value. This requirement adds semantic value
     * to the field, but it will not cause an error to appear automatically.
     * If you want to present an error when this field is empty, you can do
     * so with the `error` property.
     * @default false
     */
    required?: boolean;
    /**
     * Specifies the maximum number of characters allowed.
     * @default Infinity
     */
    maxLength?: number;
    /**
     * A number of visible text lines.
     * @default 2
     */
    rows?: number;
}

interface EmailFieldEvents {
    /** Callback when the user makes any changes in the field. */
    input?: (event: CallbackEvent<typeof tagName$t>) => void;
    /** Callback after editing completes (typically on blur). */
    change?: (event: CallbackEvent<typeof tagName$t>) => void;
    /** Callback when the element loses focus. */
    blur?: (event: CallbackEvent<typeof tagName$t>) => void;
    /** Callback when the element receives focus. */
    focus?: (event: CallbackEvent<typeof tagName$t>) => void;
}

interface EmailField {
    /** A unique identifier for the element. */
    id?: string;
    /** Content to use as the field label. */
    label?: string;
    /** The current value for the field. If omitted, the field will be empty. */
    value?: string;
    /** A short hint that describes the expected value of the field. */
    placeholder?: string;
    /**
     * Disables the field, disallowing any interaction.
     * @default false
     */
    disabled?: boolean;
    /**
     * Indicate an error to the user. The field will be given a specific stylistic treatment
     * to communicate problems that have to be resolved immediately.
     */
    error?: string;
    /**
     * Whether the field needs a value. This requirement adds semantic value
     * to the field, but it will not cause an error to appear automatically.
     * If you want to present an error when this field is empty, you can do
     * so with the `error` property.
     * @default false
     */
    required?: boolean;
    /**
     * Specifies the maximum number of characters allowed.
     * @default Infinity
     */
    maxLength?: number;
    /**
     * Additional text to provide context or guidance for the field.
     * This text is displayed along with the field and its label
     * to offer more information or instructions to the user.
     *
     * This will also be exposed to screen reader users.
     */
    details?: string;
}

interface ButtonEvents {
    /** Called when the button is activated. */
    click?: (event: CallbackEvent<typeof tagName$B>) => void;
}

interface Button {
    /**
     * Sets the action the `commandFor` should take when this clickable is activated.
     *
     * See the documentation of particular components for the actions they support.
     *
     * - `--auto`: a default action for the target component.
     * - `--show`: shows the target component.
     * - `--hide`: hides the target component.
     * - `--toggle`: toggles the target component.
     * @default '--auto'
     * @see ://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command
     */
    command?: "--auto" | "--show" | "--hide" | "--toggle";
    /**
     * Sets the tone of the Button, based on the intention of the information being conveyed.
     * @default 'auto'
     */
    tone?: "auto" | "neutral" | "caution" | "warning" | "critical";
    /**
     * Changes the visual appearance of the Button.
     * @default 'auto' - the variant is automatically determined by the Button's context
     */
    variant?: "primary" | "secondary";
    /** A unique identifier for the element. */
    id?: string;
    /**
     * Disables the Button meaning it cannot be clicked or receive focus.
     * @default false
     */
    disabled?: boolean;
    /**
     * ID of a component that should respond to activations (e.g. clicks) on this component.
     *
     * See `command` for how to control the behavior of the target.
     * @see ://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor
     */
    commandFor?: string;
    /**
     * Replaces content with a loading indicator while a background action is being performed.
     *
     * This also disables the Button.
     * @default false
     */
    loading?: boolean;
}

interface Text {
    /**
     * Modify the color to be more or less intense.
     * @default 'base'
     */
    color?: ColorKeyword;
    /**
     * Provide semantic meaning and default styling to the text.
     *
     * Other presentation properties on Text override the default styling.
     * @default 'generic'
     */
    type?: "strong" | "small" | "generic";
    /**
     * Sets the tone of the component, based on the intention of the information being conveyed.
     * @default 'auto'
     */
    tone?: "auto" | "neutral" | "info" | "success" | "caution" | "warning" | "critical";
    /** A unique identifier for the element. */
    id?: string;
}

interface ScrollBox {
    /**
     * Adjust the block size.
     * @default 'auto'
     */
    blockSize?: SizeUnitsOrAuto;
    /**
     * Adjust the inline size.
     * @default 'auto'
     */
    inlineSize?: SizeUnitsOrAuto;
    /**
     * Adjust the maximum block size.
     * @default 'none'
     */
    maxBlockSize?: SizeUnitsOrNone;
    /**
     * Adjust the maximum inline size.
     * @default 'none'
     */
    maxInlineSize?: SizeUnitsOrNone;
    /**
     * Adjust the minimum block size.
     * @default '0'
     */
    minBlockSize?: SizeUnits;
    /**
     * Adjust the minimum inline size.
     * @default '0'
     */
    minInlineSize?: SizeUnits;
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
     * @default 'none'
     */
    padding?: MaybeAllValuesShorthandProperty<PaddingKeyword>;
    /**
     * Adjust the block-padding.
     *
     * - `large none` means block-start padding is `large`, block-end padding is `none`.
     *
     * This overrides the block value of `padding`.
     * @default '' - meaning no override
     */
    paddingBlock?: "" | MaybeTwoValuesShorthandProperty<PaddingKeyword>;
    /**
     * Adjust the block-start padding.
     *
     * This overrides the block-start value of `paddingBlock`.
     * @default '' - meaning no override
     */
    paddingBlockStart?: "" | PaddingKeyword;
    /**
     * Adjust the block-end padding.
     *
     * This overrides the block-end value of `paddingBlock`.
     * @default '' - meaning no override
     */
    paddingBlockEnd?: "" | PaddingKeyword;
    /**
     * Adjust the inline padding.
     *
     * - `large none` means inline-start padding is `large`, inline-end padding is `none`.
     *
     * This overrides the inline value of `padding`.
     * @default '' - meaning no override
     */
    paddingInline?: "" | MaybeTwoValuesShorthandProperty<PaddingKeyword>;
    /**
     * Adjust the inline-start padding.
     *
     * This overrides the inline-start value of `paddingInline`.
     * @default '' - meaning no override
     */
    paddingInlineStart?: "" | PaddingKeyword;
    /**
     * Adjust the inline-end padding.
     *
     * This overrides the inline-end value of `paddingInline`.
     * @default '' - meaning no override
     */
    paddingInlineEnd?: "" | PaddingKeyword;
    /** A unique identifier for the element. */
    id?: string;
}

interface TileEvents {
    /** Callback when the Tile is activated. */
    click?: (event: CallbackEvent<typeof tagName$d>) => void;
}

interface Tile {
    /**
     * Disables the Tile meaning it cannot be clicked or receive focus.
     * @default false
     */
    disabled?: boolean;
    /**
     * A title that describes the content of the Tile.
     * @default ''
     */
    heading?: string;
    /** A unique identifier for the element. */
    id?: string;
    /**
     * A numeric indicator rendered within the Tile (for example, a count or a step number).
     *
     * - When provided, the indicator is displayed inside the tile.
     * - Intended for small integers. It may clamp, truncate, or abbreviate larger values.
     */
    itemCount?: number;
    /**
     * Sets the tone of the Tile, based on the intention of the information being conveyed.
     * @default 'auto'
     */
    tone?: ExtractStrict<ToneKeyword, "auto" | "neutral" | "accent">;
    /**
     * Supporting text displayed below the heading.
     * @default ''
     */
    subheading?: string;
}

interface BannerSlots {
    /** The action taken when the Banner is pressed. */
    'primary-action'?: HTMLElement;
}

interface Banner {
    /**
     * Determines whether the banner is hidden.
     * @default false
     */
    hidden?: boolean;
    /**
     * Sets the tone of the Banner, based on the intention of the information being conveyed.
     * @default 'auto'
     */
    tone?: "auto" | "info" | "success" | "warning" | "critical";
    /**
     * The title of the banner.
     * @default ''
     */
    heading?: string;
    /** A unique identifier for the element. */
    id?: string;
}

interface Box {
    /** A unique identifier for the element. */
    id?: string;
    /**
     * Adjust the block size.
     * @default 'auto'
     */
    blockSize?: SizeUnitsOrAuto;
    /**
     * Adjust the inline size.
     * @default 'auto'
     */
    inlineSize?: SizeUnitsOrAuto;
    /**
     * Adjust the maximum block size.
     * @default 'none'
     */
    maxBlockSize?: SizeUnitsOrNone;
    /**
     * Adjust the maximum inline size.
     * @default 'none'
     */
    maxInlineSize?: SizeUnitsOrNone;
    /**
     * Adjust the minimum block size.
     * @default '0'
     */
    minBlockSize?: SizeUnits;
    /**
     * Adjust the minimum inline size.
     * @default '0'
     */
    minInlineSize?: SizeUnits;
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
     * @default 'none'
     */
    padding?: MaybeAllValuesShorthandProperty<PaddingKeyword>;
    /**
     * Adjust the block-padding.
     *
     * - `large none` means block-start padding is `large`, block-end padding is `none`.
     *
     * This overrides the block value of `padding`.
     * @default '' - meaning no override
     */
    paddingBlock?: "" | MaybeTwoValuesShorthandProperty<PaddingKeyword>;
    /**
     * Adjust the block-start padding.
     *
     * This overrides the block-start value of `paddingBlock`.
     * @default '' - meaning no override
     */
    paddingBlockStart?: "" | PaddingKeyword;
    /**
     * Adjust the block-end padding.
     *
     * This overrides the block-end value of `paddingBlock`.
     * @default '' - meaning no override
     */
    paddingBlockEnd?: "" | PaddingKeyword;
    /**
     * Adjust the inline padding.
     *
     * - `large none` means inline-start padding is `large`, inline-end padding is `none`.
     *
     * This overrides the inline value of `padding`.
     * @default '' - meaning no override
     */
    paddingInline?: "" | MaybeTwoValuesShorthandProperty<PaddingKeyword>;
    /**
     * Adjust the inline-start padding.
     *
     * This overrides the inline-start value of `paddingInline`.
     * @default '' - meaning no override
     */
    paddingInlineStart?: "" | PaddingKeyword;
    /**
     * Adjust the inline-end padding.
     *
     * This overrides the inline-end value of `paddingInline`.
     * @default '' - meaning no override
     */
    paddingInlineEnd?: "" | PaddingKeyword;
}

interface Icon {
    /**
     * The type of icon to display.
     * @default ''
     */
    type?: SupportedIconNames;
    /** A unique identifier for the element. */
    id?: string;
    /**
     * Sets the tone of the icon, based on the intention of the information being conveyed.
     * @default 'auto'
     */
    tone?: ToneKeyword;
    /**
     * Modify the color to be more or less intense.
     * @default 'base'
     */
    color?: ColorKeyword;
    /**
     * Adjusts the size of the icon.
     * @default 'base'
     */
    size?: SizeKeyword;
}

interface Stack {
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
     * @default 'none'
     */
    padding?: MaybeAllValuesShorthandProperty<PaddingKeyword>;
    /**
     * Adjust the block-padding.
     *
     * - `large none` means block-start padding is `large`, block-end padding is `none`.
     *
     * This overrides the block value of `padding`.
     * @default '' - meaning no override
     */
    paddingBlock?: MaybeTwoValuesShorthandProperty<"" | PaddingKeyword>;
    /**
     * Adjust the block-start padding.
     *
     * This overrides the block-start value of `paddingBlock`.
     * @default '' - meaning no override
     */
    paddingBlockStart?: "" | PaddingKeyword;
    /**
     * Adjust the block-end padding.
     *
     * This overrides the block-end value of `paddingBlock`.
     * @default '' - meaning no override
     */
    paddingBlockEnd?: "" | PaddingKeyword;
    /**
     * Adjust the inline padding.
     *
     * - `large none` means inline-start padding is `large`, inline-end padding is `none`.
     *
     * This overrides the inline value of `padding`.
     * @default '' - meaning no override
     */
    paddingInline?: MaybeTwoValuesShorthandProperty<"" | PaddingKeyword>;
    /**
     * Adjust the inline-start padding.
     *
     * This overrides the inline-start value of `paddingInline`.
     * @default '' - meaning no override
     */
    paddingInlineStart?: "" | PaddingKeyword;
    /**
     * Adjust the inline-end padding.
     *
     * This overrides the inline-end value of `paddingInline`.
     * @default '' - meaning no override
     */
    paddingInlineEnd?: "" | PaddingKeyword;
    /**
     * Adjust the block size.
     * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
     * @see ://developer.mozilla.org/en-US/docs/Web/CSS/block-size
     * @default 'auto'
     */
    blockSize?: SizeUnitsOrAuto;
    /**
     * Adjust the maximum block size.
     * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
     * @see ://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size
     * @default 'none'
     */
    maxBlockSize?: SizeUnitsOrNone;
    /**
     * Adjust the maximum inline size.
     * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
     * @see ://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size
     * @default 'none'
     */
    maxInlineSize?: SizeUnitsOrNone;
    /**
     * Adjust the minimum block size.
     * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
     * @see ://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size
     * @default '0'
     */
    minBlockSize?: SizeUnits;
    /**
     * Adjust the minimum inline size.
     * **Mobile surfaces:** Avoid using percentage-based sizes. They do not behave as expected when placed within a scrollable container.
     * @see ://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size
     * @default '0'
     */
    minInlineSize?: SizeUnits;
    /** Aligns the Stack's children along the cross axis. */
    alignItems?: AlignItemsKeyword;
    /** Aligns the Stack along the cross axis. */
    alignContent?: AlignContentKeyword;
    /**
     * Adjust spacing between elements.
     * A single value applies to both axes. A pair of values (eg large-100 large-500) can be used to set the inline and block axes respectively.
     * @default 'none'
     */
    gap?: MaybeTwoValuesShorthandProperty<SpacingKeyword>;
    /**
     * Adjust spacing between elements in the inline axis. This overrides the column value of gap.
     * @default '' - meaning no override
     */
    columnGap?: "" | SpacingKeyword;
    /**
     * Sets how the children are placed within the Stack. This uses logical properties.
     * @default 'block'
     * @implementation - the content will wrap if the direction is 'inline', and not wrap if the direction is 'block'
     */
    direction?: "block" | "inline";
    /**
     * Adjust the inline size.
     * @see — https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size
     * @default 'auto'
     */
    inlineSize?: SizeUnitsOrAuto;
    /**
     * Aligns the Stack along the main axis.
     * @see — https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
     * @default 'normal'
     */
    justifyContent?: JustifyContentKeyword;
    /**
     * Adjust spacing between elements in the block axis. This overrides the row value of gap.
     * @default '' - meaning no override
     */
    rowGap?: "" | SpacingKeyword;
    /** A unique identifier for the element. */
    id?: string;
}

interface Badge {
    /**
     * Sets the tone of the Badge, based on the intention of the information being conveyed.
     * @default 'auto'
     */
    tone?: "auto" | "neutral" | "info" | "success" | "caution" | "warning" | "critical";
    /** A unique identifier for the element. */
    id?: string;
}

interface ChoiceListEvents {
    /** Callback when the user changes a choice. Fires simultaneously with onChange. */
    input?: (event: CallbackEvent<typeof tagName$z>) => void;
    /** Callback when the user changes a choice. Fires simultaneously with onInput. */
    change?: (event: CallbackEvent<typeof tagName$z>) => void;
}

interface ChoiceList {
    /** A unique identifier for the element. */
    id?: string;
    /**
     * An array of the `value`s of the selected options.
     *
     * This is a convenience prop for setting the `selected` prop on child options.
     */
    values?: string[];
    /**
     * Whether multiple choices can be selected.
     * @default false
     */
    multiple?: boolean;
}

interface Choice {
    /** A unique identifier for the element. */
    id?: string;
    /** The value used in form data when the control is checked. */
    value?: string;
    /**
     * Disables the control, disallowing any interaction.
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether the control is active.
     * @default false
     */
    selected?: boolean;
}

interface DateFieldEvents {
    /** Callback when the user makes any changes in the field. */
    input?: (event: CallbackEvent<typeof tagName$x>) => void;
    /** Callback after editing completes (typically on blur). */
    change?: (event: CallbackEvent<typeof tagName$x>) => void;
    /** Callback when the element loses focus. */
    blur?: (event: CallbackEvent<typeof tagName$x>) => void;
    /** Callback when the element receives focus. */
    focus?: (event: CallbackEvent<typeof tagName$x>) => void;
}

interface DateField {
    /** A unique identifier for the element. */
    id?: string;
    /** Content to use as the field label. */
    label?: string;
    /**
     * Additional text to provide context or guidance for the field.
     * This text is displayed along with the field and its label
     * to offer more information or instructions to the user.
     *
     * This will also be exposed to screen reader users.
     */
    details?: string;
    /** The current value for the field. If omitted, the field will be empty. */
    value?: string;
    /**
     * Disables the field, disallowing any interaction.
     * @default false
     */
    disabled?: boolean;
    /**
     * Indicate an error to the user. The field will be given a specific stylistic treatment
     * to communicate problems that have to be resolved immediately.
     */
    error?: string;
    /**
     * Whether the field needs a value. This requirement adds semantic value
     * to the field, but it will not cause an error to appear automatically.
     * If you want to present an error when this field is empty, you can do
     * so with the `error` property.
     * @default false
     */
    required?: boolean;
}

interface ModalEvents {
    /** Callback when the modal is hidden. */
    hide?: (event: CallbackEvent<typeof tagName$p>) => void | null;
    /** Callback when the modal is shown. */
    show?: (event: CallbackEvent<typeof tagName$p>) => void | null;
}

interface ModalSlots {
    /**
     * The primary action button displayed in the modal.
     *
     * The tone of the button is used to define the tone of the modal.
     *
     * If omitted, the modal will default to an 'info' tone, and show an 'OK' button, translated according to the user's locale.
     */
    'primary-action'?: HTMLElement;
    /** The secondary action buttons displayed in the modal. */
    'secondary-actions'?: HTMLElement;
}

interface Modal {
    /** A unique identifier for the element. */
    id?: string;
    /** A title that describes the content of the Modal. */
    heading?: string;
}

interface TextFieldEvents {
    /** Callback when the user makes any changes in the field. */
    input?: (event: CallbackEvent<typeof tagName$e>) => void;
    /** Callback after editing completes (typically on blur). */
    change?: (event: CallbackEvent<typeof tagName$e>) => void;
    /** Callback when the element loses focus. */
    blur?: (event: CallbackEvent<typeof tagName$e>) => void;
    /** Callback when the element receives focus. */
    focus?: (event: CallbackEvent<typeof tagName$e>) => void;
}

interface TextFieldSlots {
    /** Additional content to be displayed in the field. Commonly used to display clickable text. */
    'accessory'?: HTMLElement;
}

interface TextField {
    /** A unique identifier for the element. */
    id?: string;
    /** Content to use as the field label. */
    label?: string;
    /**
     * Additional text to provide context or guidance for the field.
     * This text is displayed along with the field and its label
     * to offer more information or instructions to the user.
     *
     * This will also be exposed to screen reader users.
     */
    details?: string;
    /** The current value for the field. If omitted, the field will be empty. */
    value?: string;
    /** A short hint that describes the expected value of the field. */
    placeholder?: string;
    /**
     * Disables the field, disallowing any interaction.
     * @default false
     */
    disabled?: boolean;
    /**
     * Indicate an error to the user. The field will be given a specific stylistic treatment
     * to communicate problems that have to be resolved immediately.
     */
    error?: string;
    /**
     * Whether the field needs a value. This requirement adds semantic value
     * to the field, but it will not cause an error to appear automatically.
     * If you want to present an error when this field is empty, you can do
     * so with the `error` property.
     * @default false
     */
    required?: boolean;
    /**
     * Specifies the maximum number of characters allowed.
     * @default Infinity
     */
    maxLength?: number;
}

interface SearchFieldEvents {
    /** Callback when the user changes the value in the field. */
    input?: (event: CallbackEvent<typeof tagName$j>) => void;
    /** Callback when the field loses focus after the user changes the value in the field. */
    change?: (event: CallbackEvent<typeof tagName$j>) => void;
    /** Callback when the field loses focus. */
    blur?: (event: CallbackEvent<typeof tagName$j>) => void;
    /** Callback when the field is focused. */
    focus?: (event: CallbackEvent<typeof tagName$j>) => void;
}

interface SearchField {
    /** A unique identifier for the element. */
    id?: string;
    /**
     * Disables the field, disallowing any interaction.
     * @default false
     */
    disabled?: boolean;
    /** A short hint that describes the expected value of the field. */
    placeholder?: string;
    /** The current value for the field. If omitted, the field will be empty. */
    value?: string;
}

interface ClickableEvents {
    /** Callback when the element is activated. */
    click?: (event: CallbackEvent<typeof tagName$y>) => void;
}

interface Clickable {
    /** A unique identifier for the element. */
    id?: string;
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
    disabled?: boolean;
}

interface TimeFieldEvents {
    /** Callback when the user makes any changes in the field. */
    input?: (event: CallbackEvent<typeof tagName$c>) => void;
    /** Callback after editing completes (typically on blur). */
    change?: (event: CallbackEvent<typeof tagName$c>) => void;
    /** Callback when the element loses focus. */
    blur?: (event: CallbackEvent<typeof tagName$c>) => void;
    /** Callback when the element receives focus. */
    focus?: (event: CallbackEvent<typeof tagName$c>) => void;
}

interface TimeField {
    /** A unique identifier for the element. */
    id?: string;
    /** Content to use as the field label. */
    label?: string;
    /**
     * Disables the field, disallowing any interaction.
     * @default false
     */
    disabled?: boolean;
    /**
     * Current selected value.
     *
     * The default, `''`, means no time is selected.
     *
     * The value must be a 24-hour time in `HH:mm:ss` format, with leading zeros.
     *
     * Examples: `"00:00:00"`, `"09:05:00"`, `"23:59:00"`, `"14:03:30"`.
     *
     * This follows the HTML time input value format, which is always 24-hour with
     * leading zeros regardless of UI presentation.
     *
     * See: https://developer.mozilla.org/docs/Web/HTML/Element/input/time
     */
    value?: string;
    /**
     * Indicate an error to the user. The field will be given a specific stylistic treatment
     * to communicate problems that have to be resolved immediately.
     */
    error?: string;
    /**
     * Additional text to provide context or guidance for the field.
     * This text is displayed along with the field and its label
     * to offer more information or instructions to the user.
     *
     * This will also be exposed to screen reader users.
     */
    details?: string;
    /**
     * Whether the field needs a value. This requirement adds semantic value
     * to the field, but it will not cause an error to appear automatically.
     * If you want to present an error when this field is empty, you can do
     * so with the `error` property.
     * @default false
     */
    required?: boolean;
}

interface NumberFieldEvents {
    /** Callback when the user makes any changes in the field. */
    input?: (event: CallbackEvent<typeof tagName$o>) => void;
    /** Callback after editing completes (typically on blur). */
    change?: (event: CallbackEvent<typeof tagName$o>) => void;
    /** Callback when the element loses focus. */
    blur?: (event: CallbackEvent<typeof tagName$o>) => void;
    /** Callback when the element receives focus. */
    focus?: (event: CallbackEvent<typeof tagName$o>) => void;
}

interface NumberFieldSlots {
    /**
     * Additional content to be displayed in the field. Commonly used to display clickable text.
     *
     * > Note: Accessory is not supported when using Stepper controls
     */
    'accessory'?: HTMLElement;
}

interface NumberField {
    /**
     * Content to use as the field label.
     *
     * Label is not supported when using Stepper controls
     */
    label?: string;
    /**
     * Additional text to provide context or guidance for the field.
     * This text is displayed along with the field and its label
     * to offer more information or instructions to the user.
     *
     * This will also be exposed to screen reader users.
     *
     * Details are not supported when using Stepper controls
     */
    details?: string;
    /**
     * Whether the field needs a value. This requirement adds semantic value
     * to the field, but it will not cause an error to appear automatically.
     * If you want to present an error when this field is empty, you can do
     * so with the `error` property.
     * @default false
     *
     * Required is not supported when using Stepper controls
     */
    required?: boolean;
    /**
     * Indicate an error to the user. The field will be given a specific stylistic treatment
     * to communicate problems that have to be resolved immediately.
     *
     * Error is not supported when using Stepper controls
     */
    error?: string;
    /**
     * Sets the virtual keyboard.
     *
     * Input mode is not supported when using Stepper controls
     * @see ://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode
     * @default 'decimal'
     */
    inputMode?: "decimal" | "numeric";
    /**
     * A short hint that describes the expected value of the field.
     *
     * Placeholder text is not supported when using Stepper controls due to constrained space for the number field, especially on phones.
     */
    placeholder?: string;
    /**
     * Sets the type of controls displayed for the field.
     *
     * - `stepper`: displays buttons to increase or decrease the value of the field by the stepping interval defined in the `step` property. Note that in POS
     *   adding stepper controls simplifies the behaviour of the Number Field itself. The field supports only integer values, is always-populated and automatically
     *   validates the value to be within the min and max bounds. Validation, label, details and placeholder are not supported when using Stepper controls.
     *
     * - `none`: no controls are displayed and users must input the value manually.
     * - `auto`: the presence of the controls depends on the surface and context.
     */
    controls?: "auto" | "stepper" | "none";
    /** A unique identifier for the element. */
    id?: string;
    /** The current value for the field. If omitted, the field will be empty. */
    value?: string;
    /**
     * Disables the field, disallowing any interaction.
     * @default false
     */
    disabled?: boolean;
    /**
     * The highest decimal or integer to be accepted for the field.
     * When used with `step` the value will round down to the max number.
     *
     * Note: a user will still be able to use the keyboard to input a number higher than
     * the max. It is up to the developer to add appropriate validation.
     * @default Infinity
     */
    max?: number;
    /**
     * The lowest decimal or integer to be accepted for the field.
     * When used with `step` the value will round up to the min number.
     *
     * Note: a user will still be able to use the keyboard to input a number lower than
     * the min. It is up to the developer to add appropriate validation.
     * @default -Infinity
     */
    min?: number;
}

interface DatePickerEvents {
    /** Callback when the user selects a date from the picker. */
    input?: (event: CallbackEvent<typeof tagName$w>) => void | null;
    /** Callback when the user selects a date from the picker that is different to the current value. */
    change?: (event: CallbackEvent<typeof tagName$w>) => void | null;
    /** Callback when the date picker is dismissed. */
    blur?: (event: CallbackEvent<typeof tagName$w>) => void | null;
    /** Callback when the date picker is revealed. */
    focus?: (event: CallbackEvent<typeof tagName$w>) => void | null;
}

interface DatePicker {
    /** A unique identifier for the element. */
    id?: string;
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
     * @default ""
     */
    value?: string;
}

interface DateSpinnerEvents {
    /** Callback when the user makes a selection. */
    input?: (event: CallbackEvent<typeof tagName$v>) => void | null;
    /** Callback when the value changes. Only called when a different value is selected. */
    change?: (event: CallbackEvent<typeof tagName$v>) => void | null;
    /** Callback when the date spinner is dismissed. */
    blur?: (event: CallbackEvent<typeof tagName$v>) => void | null;
    /** Callback when the date spinner is revealed. */
    focus?: (event: CallbackEvent<typeof tagName$v>) => void | null;
}

interface DateSpinner {
    /** A unique identifier for the element. */
    id?: string;
    /**
     * Current selected value for the spinner.
     *
     * This uses a date in `YYYY-MM-DD` format.
     * @default ""
     */
    value?: string;
}

interface SectionSlots {
    /** Button element to display in the section heading. A single button is supported. */
    'secondary-actions'?: HTMLElement;
}

interface Section {
    /**
     * A title that describes the content of the section.
     *
     * If omitted, and no secondaryActions are provided, the section will be rendered without a header.
     */
    heading?: string;
    /** A unique identifier for the element. */
    id?: string;
}

interface Heading {
    /** A unique identifier for the element. */
    id?: string;
}

interface TimePickerEvents {
    /** Callback when the user selects a time from the picker. */
    input?: (event: CallbackEvent<typeof tagName$b>) => void | null;
    /** Callback when the user selects a time from the picker that is different to the current value. */
    change?: (event: CallbackEvent<typeof tagName$b>) => void | null;
    /** Callback when the time picker is dismissed. */
    blur?: (event: CallbackEvent<typeof tagName$b>) => void | null;
    /** Callback when the time picker is revealed. */
    focus?: (event: CallbackEvent<typeof tagName$b>) => void | null;
}

interface TimePicker {
    /** A unique identifier for the element. */
    id?: string;
    /**
     * Current selected value.
     *
     * The default, `''`, means no time is selected.
     *
     * The value must be a 24-hour time in `HH:mm:ss` format, with leading zeros.
     *
     * Examples: `"00:00:00"`, `"09:05:00"`, `"23:59:00"`, `"14:03:30"`.
     *
     * This follows the HTML time input value format, which is always 24-hour with
     * leading zeros regardless of UI presentation.
     *
     * See: https://developer.mozilla.org/docs/Web/HTML/Element/input/time
     *
     * If the provided value is invalid, '' is used as the value.
     * @default ''
     */
    value?: string;
}

interface Image {
    /**
     * The displayed inline width of the image.
     *
     * - `fill`: the image will takes up 100% of the available inline size.
     * - `auto`: the image will be displayed at its natural size.
     *
     * **Mobile surfaces:** Always wrap your image in a box with a set width and height.
     * ScrollViews on mobile have a dynamic height, which can cause images to appear
     * inconsistently without defined dimensions.
     * @default 'fill'
     * @see ://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width
     */
    inlineSize?: "fill" | "auto";
    /**
     * The image source, which should be a remote URL.
     *
     * When the image is loading or no `src` is provided, a placeholder will be rendered.
     * @see ://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src
     */
    src?: string;
    /** A unique identifier for the element. */
    id?: string;
    /**
     * Determines how the content of the image is resized to fit its container.
     * The image is positioned in the center of the container.
     * @default 'contain'
     * @see ://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
     */
    objectFit?: "contain" | "cover";
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
     * @default `''`
     * @see ://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt
     */
    alt?: string;
}

interface PageSlots {
    /** Button element to display in the action bar. Only a single button is supported. */
    'secondary-actions'?: HTMLElement;
    /** Content to display in the page's sidebar. */
    'aside'?: HTMLElement;
}

interface Page {
    /**
     * The main page heading, displayed in the action bar at the top of the page.
     * @default : ''
     */
    heading?: string;
    /** A secondary page heading, displayed under the main heading in the action bar. */
    subheading?: string;
    /** A unique identifier for the element. */
    id?: string;
}

interface PosBlockSlots {
    /** The secondary actions to perform, provided as button or link type elements. */
    'secondary-actions'?: HTMLElement;
}

interface PosBlock {
    /** A unique identifier for the element. */
    id?: string;
    /**
     * The heading to display within the POSBlock.
     *
     * If not provided, the description of the extension will be used when a heading is appropriate.
     */
    heading?: string;
}

interface QrCode {
    /** A unique identifier for the element. */
    id?: string;
    /**
     * The content to be encoded in the QR code, which can be any string such as a URL, email address, plain text, etc.
     * Specific string formatting can trigger actions on the user's device when scanned, like opening geolocation
     * coordinates on a map, opening a preferred app or app store entry, preparing an email, text message, and more.
     */
    content?: string;
}

interface Divider {
    /** A unique identifier for the element. */
    id?: string;
    /**
     * Specify the direction of the divider. This uses [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
     * @default 'inline'
     */
    direction?: "inline" | "block";
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$E]: IntrinsicElementProps<BadgeJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$E]: IntrinsicElementProps<BadgeJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$D]: IntrinsicElementProps<ElementProps$c>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$D]: IntrinsicElementProps<ElementProps$c>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$C]: IntrinsicElementProps<BoxJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$C]: IntrinsicElementProps<BoxJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$B]: IntrinsicElementProps<ButtonJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$B]: IntrinsicElementProps<ButtonJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$A]: IntrinsicElementProps<ChoiceJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$A]: IntrinsicElementProps<ChoiceJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$z]: IntrinsicElementProps<ChoiceListJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$z]: IntrinsicElementProps<ChoiceListJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$y]: IntrinsicElementProps<ClickableJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$y]: IntrinsicElementProps<ClickableJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$x]: IntrinsicElementProps<ElementProps$b>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$x]: IntrinsicElementProps<ElementProps$b>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$w]: IntrinsicElementProps<DatePickerJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$w]: IntrinsicElementProps<DatePickerJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$v]: IntrinsicElementProps<DateSpinnerJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$v]: IntrinsicElementProps<DateSpinnerJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$u]: IntrinsicElementProps<DividerJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$u]: IntrinsicElementProps<DividerJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$t]: IntrinsicElementProps<ElementProps$a>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$t]: IntrinsicElementProps<ElementProps$a>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$s]: IntrinsicElementProps<HeadingJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$s]: IntrinsicElementProps<HeadingJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$r]: IntrinsicElementProps<IconJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$r]: IntrinsicElementProps<IconJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$q]: IntrinsicElementProps<ImageJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$q]: IntrinsicElementProps<ImageJSXProps>;
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
            [tagName$o]: IntrinsicElementProps<ElementProps$8>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$o]: IntrinsicElementProps<ElementProps$8>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$n]: IntrinsicElementProps<ElementProps$7>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$n]: IntrinsicElementProps<ElementProps$7>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$m]: IntrinsicElementProps<ElementProps$6>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$m]: IntrinsicElementProps<ElementProps$6>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$l]: IntrinsicElementProps<QrCodeJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$l]: IntrinsicElementProps<QrCodeJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$k]: IntrinsicElementProps<ScrollBoxJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$k]: IntrinsicElementProps<ScrollBoxJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$j]: IntrinsicElementProps<SearchFieldJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$j]: IntrinsicElementProps<SearchFieldJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$i]: IntrinsicElementProps<ElementProps$5>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$i]: IntrinsicElementProps<ElementProps$5>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$h]: IntrinsicElementProps<StackJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$h]: IntrinsicElementProps<StackJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$g]: IntrinsicElementProps<TextJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$g]: IntrinsicElementProps<TextJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$f]: IntrinsicElementProps<ElementProps$4>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$f]: IntrinsicElementProps<ElementProps$4>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$e]: IntrinsicElementProps<ElementProps$3>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$e]: IntrinsicElementProps<ElementProps$3>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$d]: IntrinsicElementProps<TileJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$d]: IntrinsicElementProps<TileJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$c]: IntrinsicElementProps<TimeFieldJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$c]: IntrinsicElementProps<TimeFieldJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$b]: IntrinsicElementProps<TimePickerJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$b]: IntrinsicElementProps<TimePickerJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$a]: IntrinsicElementProps<LinkJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$a]: IntrinsicElementProps<LinkJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$9]: IntrinsicElementProps<ElementProps$2>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$9]: IntrinsicElementProps<ElementProps$2>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$8]: IntrinsicElementProps<EmbedJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$8]: IntrinsicElementProps<EmbedJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$7]: IntrinsicElementProps<SpinnerJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$7]: IntrinsicElementProps<SpinnerJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$6]: IntrinsicElementProps<SwitchJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$6]: IntrinsicElementProps<SwitchJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$5]: IntrinsicElementProps<TabsJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$5]: IntrinsicElementProps<TabsJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$4]: IntrinsicElementProps<TabListJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$4]: IntrinsicElementProps<TabListJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$3]: IntrinsicElementProps<TabJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$3]: IntrinsicElementProps<TabJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$2]: IntrinsicElementProps<TabPanelJSXProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$2]: IntrinsicElementProps<TabPanelJSXProps>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$1]: IntrinsicElementProps<ElementProps$1>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName$1]: IntrinsicElementProps<ElementProps$1>;
        }
    }
}
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            [tagName]: IntrinsicElementProps<ElementProps>;
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [tagName]: IntrinsicElementProps<ElementProps>;
        }
    }
}
