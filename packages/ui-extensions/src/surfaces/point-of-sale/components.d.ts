
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
export interface GlobalProps {
	/**
	 * A unique identifier for the element.
	 */
	id?: string;
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
	"alert-triangle-filled",
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
	"business-entity",
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
	"caret-left",
	"caret-right",
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
	"eraser",
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
	"info-filled",
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
	"paste",
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
	"pin-remove",
	"pin",
	"plan",
	"play-circle",
	"play",
	"plus-circle-down",
	"plus-circle-filled",
	"plus-circle-up",
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
	"search-add",
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
	"star-half",
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
	"x-circle-filled",
	"x-circle",
	"x"
];
export type IconType = (typeof privateIconArray)[number];
/**
 * Prevents widening string literal types in a union to `string`.
 * @example
 * type PropName = 'foo' | 'bar' | string
 * //   ^? string
 * type PropName = 'foo' | 'bar' | (string & {})
 * //   ^? 'foo' | 'bar' | (string & {})
 */
export type AnyString = string & {};
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
	type?: "submit" | "button" | "reset";
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
	inlineSize?: "auto" | "fill" | "fit-content";
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




declare global {
    namespace preact {
        interface Key {
        }
        interface Ref<T> {
            current: T;
        }
        interface ComponentChildren {
        }
    }
}
/**
 * Used when an element does not have children.
 */
interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
interface BaseElementPropsWithChildren<TClass = HTMLElement> extends BaseElementProps<TClass> {
    children?: preact.ComponentChildren;
}

interface ButtonProps extends Pick<ButtonProps$1, 'accessibilityLabel' | 'disabled' | 'loading' | 'onClick' | 'variant' | 'tone' | 'id'> {
}

declare const tagName = "s-button";
interface ReactProps extends ButtonProps {
    id?: string;
    onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
type CallbackEvent<TTagName extends keyof HTMLElementTagNameMap, TEvent extends Event = Event> = TEvent & {
    currentTarget: HTMLElementTagNameMap[TTagName];
};

declare class Button implements ReactProps {
}
declare global {
    interface HTMLElementTagNameMap {
        's-button': Button;
    }
    namespace preact {
        namespace createElement {
            namespace JSX {
                interface IntrinsicElements {
                    's-button': ButtonProps & BaseElementPropsWithChildren<Button>;
                }
            }
        }
    }
}

export { Button };
