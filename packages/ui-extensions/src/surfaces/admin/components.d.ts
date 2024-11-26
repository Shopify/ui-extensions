/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/member-ordering */
export type MaybeAllValuesShorthandProperty<T extends string> =
  | T
  | `${T} ${T}`
  | `${T} ${T} ${T}`
  | `${T} ${T} ${T} ${T}`;
export interface InteractionProps {
  /**
   * ID of a component that should respond to activations (e.g. clicks) on this pressable.
   *
   * See `activateAction` for how to control the behavior of the target.
   */
  activateTarget?: string;
  /**
   * Sets the action the `activateTarget` should take when this pressable is activated.
   *
   * See the documentation of particular components for the actions they support.
   *
   * @default 'auto' - a default action for the target component.
   */
  activateAction?: 'auto' | 'show' | 'hide' | 'toggle' | 'copy';
}
export type IconType =
  | 'wifi'
  | 'work'
  | 'watch'
  | 'wand'
  | 'viewport-wide'
  | 'wallet'
  | 'viewport-short'
  | 'viewport-tall'
  | 'viewport-narrow'
  | 'upload'
  | 'unknown-device'
  | 'undo'
  | 'transfer'
  | 'wrench'
  | 'transfer-in'
  | 'transaction-fee-rupee'
  | 'transaction-fee-yen'
  | 'transaction-fee-pound'
  | 'transfer-internal'
  | 'transaction-fee-euro'
  | 'transaction'
  | 'thumbs-up'
  | 'transfer-out'
  | 'transaction-fee-dollar'
  | 'toggle-on'
  | 'thumbs-down'
  | 'theme-template'
  | 'theme-store'
  | 'text'
  | 'text-with-image'
  | 'theme-edit'
  | 'text-title'
  | 'text-underline'
  | 'text-quote'
  | 'tip-jar'
  | 'text-indent'
  | 'text-in-columns'
  | 'text-italic'
  | 'text-in-rows'
  | 'text-color'
  | 'text-grammar'
  | 'text-font-list'
  | 'theme'
  | 'text-align-left'
  | 'text-align-right'
  | 'text-font'
  | 'text-align-center'
  | 'text-block'
  | 'toggle-off'
  | 'target'
  | 'team'
  | 'tax'
  | 'text-bold'
  | 'store-online'
  | 'tablet'
  | 'sun'
  | 'store-import'
  | 'stop-circle'
  | 'store-managed'
  | 'status-active'
  | 'status'
  | 'sports'
  | 'store'
  | 'star-filled'
  | 'sound'
  | 'sort-descending'
  | 'sort-ascending'
  | 'social-post'
  | 'smiley-neutral'
  | 'social-ad'
  | 'slideshow'
  | 'smiley-happy'
  | 'smiley-sad'
  | 'smiley-joy'
  | 'shopcodes'
  | 'shipping-label'
  | 'shield-person'
  | 'shield-check-mark'
  | 'shield-none'
  | 'shield-pending'
  | 'share'
  | 'settings'
  | 'search-recent'
  | 'search-resource'
  | 'search'
  | 'search-list'
  | 'send'
  | 'save'
  | 'rotate-left'
  | 'rotate-right'
  | 'reward'
  | 'sandbox'
  | 'return'
  | 'replay'
  | 'remove-background'
  | 'refresh'
  | 'referral-code'
  | 'reset'
  | 'receipt-refund'
  | 'receipt'
  | 'receipt-rupee'
  | 'receipt-paid'
  | 'receipt-euro'
  | 'receipt-dollar'
  | 'receipt-pound'
  | 'question-circle'
  | 'profile'
  | 'receipt-yen'
  | 'product-remove'
  | 'product-reference'
  | 'product-list'
  | 'product-unavailable'
  | 'product-return'
  | 'product-add'
  | 'print'
  | 'price-list'
  | 'play'
  | 'point-of-sale'
  | 'plan'
  | 'play-circle'
  | 'pin'
  | 'phone-out'
  | 'phone-in'
  | 'personalized-text'
  | 'product-cost'
  | 'person-segment'
  | 'person-remove'
  | 'person-add'
  | 'redo'
  | 'person-lock'
  | 'payout-rupee'
  | 'payout-pound'
  | 'payout'
  | 'replace'
  | 'payout-yen'
  | 'pause-circle'
  | 'payout-euro'
  | 'passkey'
  | 'person-exit'
  | 'payment-capture'
  | 'paint-brush-round'
  | 'pagination-start'
  | 'paper-check'
  | 'paint-brush-flat'
  | 'pagination-end'
  | 'page-remove'
  | 'payout-dollar'
  | 'page-attachment'
  | 'page-reference'
  | 'page-clock'
  | 'page-up'
  | 'page-add'
  | 'package-returned'
  | 'package'
  | 'page-heart'
  | 'package-on-hold'
  | 'outdent'
  | 'package-fulfilled'
  | 'orders-status'
  | 'outgoing'
  | 'page-down'
  | 'order-repeat'
  | 'order-draft'
  | 'organization'
  | 'notification'
  | 'note'
  | 'note-add'
  | 'nature'
  | 'money'
  | 'order-first'
  | 'metaobject-reference'
  | 'money-none'
  | 'metaobject'
  | 'metaobject-list'
  | 'minimize'
  | 'menu'
  | 'megaphone'
  | 'menu-vertical'
  | 'media-receiver'
  | 'menu-horizontal'
  | 'moon'
  | 'measurement-volume'
  | 'measurement-weight'
  | 'measurement-size'
  | 'markets-yen'
  | 'maximize'
  | 'markets-rupee'
  | 'markets-euro'
  | 'location-none'
  | 'live'
  | 'markets'
  | 'list-numbered'
  | 'lock'
  | 'list-bulleted'
  | 'link'
  | 'layout-sidebar-left'
  | 'layout-sidebar-right'
  | 'layout-section'
  | 'layout-logo-block'
  | 'layout-rows-2'
  | 'layout-popup'
  | 'layout-header'
  | 'layout-columns-2'
  | 'layout-columns-3'
  | 'layout-buy-button'
  | 'layout-buy-button-horizontal'
  | 'layout-buy-button-vertical'
  | 'layout-column-1'
  | 'keyboard'
  | 'layout-footer'
  | 'layout-block'
  | 'label-printer'
  | 'keyboard-hide'
  | 'key'
  | 'inventory-updated'
  | 'iq'
  | 'language-translate'
  | 'incoming'
  | 'incentive'
  | 'inventory'
  | 'image-with-text-overlay'
  | 'image'
  | 'image-none'
  | 'image-magic'
  | 'mention'
  | 'image-explore'
  | 'import'
  | 'image-alt'
  | 'home'
  | 'icons'
  | 'identity-card'
  | 'image-add'
  | 'metafields'
  | 'images'
  | 'gauge'
  | 'globe-europe'
  | 'gift-card'
  | 'hashtag'
  | 'food'
  | 'forms'
  | 'forklift'
  | 'folder-remove'
  | 'globe-asia'
  | 'folder-add'
  | 'heart'
  | 'folder-up'
  | 'flip-vertical'
  | 'flower'
  | 'flip-horizontal'
  | 'flag'
  | 'folder-down'
  | 'favicon'
  | 'filter'
  | 'file'
  | 'eye-check-mark'
  | 'eye-dropper'
  | 'eye-first'
  | 'eyeglasses'
  | 'hashtag-decimal'
  | 'exit'
  | 'folder'
  | 'export'
  | 'games'
  | 'envelope-soft-pack'
  | 'email-newsletter'
  | 'email-follow-up'
  | 'exchange'
  | 'enter'
  | 'domain-new'
  | 'domain'
  | 'drag-handle'
  | 'domain-redirect'
  | 'duplicate'
  | 'domain-landing-page'
  | 'dns-settings'
  | 'dock-floating'
  | 'discount'
  | 'envelope'
  | 'dock-side'
  | 'drag-drop'
  | 'delete'
  | 'data-table'
  | 'database-add'
  | 'database-connect'
  | 'currency-convert'
  | 'data-presentation'
  | 'database'
  | 'cursor-option'
  | 'crop'
  | 'credit-card'
  | 'cursor'
  | 'credit-card-reader'
  | 'desktop'
  | 'credit-card-percent'
  | 'credit-card-reader-chip'
  | 'credit-card-secure'
  | 'credit-card-cancel'
  | 'corner-round'
  | 'corner-square'
  | 'credit-card-reader-tap'
  | 'corner-pill'
  | 'contract'
  | 'content'
  | 'compass'
  | 'connect'
  | 'compose'
  | 'discount-code'
  | 'confetti'
  | 'collection-featured'
  | 'color-none'
  | 'collection-reference'
  | 'color'
  | 'code-add'
  | 'code'
  | 'clipboard-checklist'
  | 'circle'
  | 'clipboard-check'
  | 'collection-list'
  | 'clipboard'
  | 'chevron-up-circle'
  | 'chevron-right'
  | 'chevron-right-circle'
  | 'chevron-down-circle'
  | 'checkbox'
  | 'chat-referral'
  | 'credit-card-tap-chip'
  | 'chat'
  | 'chart-popular'
  | 'chart-histogram-second-last'
  | 'chart-stacked'
  | 'chart-horizontal'
  | 'chart-line'
  | 'chart-histogram-last'
  | 'chart-histogram-full'
  | 'chart-histogram-flat'
  | 'chart-histogram-growth'
  | 'chart-histogram-first'
  | 'chart-vertical'
  | 'channels'
  | 'chart-donut'
  | 'chart-histogram-first-last'
  | 'chart-funnel'
  | 'catalog-product'
  | 'categories'
  | 'cash-yen'
  | 'chart-cohort'
  | 'cash-pound'
  | 'cash-rupee'
  | 'cash-dollar'
  | 'cart-down'
  | 'cart-sale'
  | 'cash-euro'
  | 'cart-abandoned'
  | 'caret-down'
  | 'caret-up'
  | 'cart-discount'
  | 'camera-flip'
  | 'camera'
  | 'cart'
  | 'calculator'
  | 'cart-up'
  | 'calendar-time'
  | 'chevron-left-circle'
  | 'button'
  | 'button-press'
  | 'chevron-left'
  | 'book'
  | 'blog'
  | 'book-open'
  | 'bank'
  | 'bug'
  | 'backspace'
  | 'barcode'
  | 'arrows-in-horizontal'
  | 'bill'
  | 'arrows-out-horizontal'
  | 'bullet'
  | 'arrow-up'
  | 'automation'
  | 'arrow-left-circle'
  | 'arrow-down'
  | 'arrow-right'
  | 'arrow-up-circle'
  | 'arrow-right-circle'
  | 'arrow-down-circle'
  | 'alert-location'
  | 'arrow-left'
  | 'alert-diamond'
  | 'app-extension'
  | 'cursor-banner'
  | 'airplane'
  | 'affiliate'
  | 'adjust'
  | 'x'
  | 'x-circle'
  | 'variant'
  | 'star'
  | 'sort'
  | 'select'
  | 'plus'
  | 'product'
  | 'phone'
  | 'plus-circle'
  | 'person'
  | 'page'
  | 'payment'
  | 'order-unfulfilled'
  | 'order'
  | 'order-fulfilled'
  | 'mobile'
  | 'merge'
  | 'microphone'
  | 'location'
  | 'lightbulb'
  | 'minus-circle'
  | 'language'
  | 'in-progress'
  | 'incomplete'
  | 'info'
  | 'hide'
  | 'external'
  | 'email'
  | 'enabled'
  | 'edit'
  | 'globe'
  | 'collection'
  | 'disabled'
  | 'chevron-up'
  | 'delivery'
  | 'chevron-down'
  | 'clock'
  | 'check'
  | 'view'
  | 'calendar'
  | 'blank'
  | 'check-circle'
  | 'arrow-up-right'
  | 'minus'
  | 'alert-circle'
  | 'alert-bubble'
  | 'attachment'
  | 'archive'
  | 'calendar-check'
  | 'apps'
  | 'alert-triangle';

import {
  IconProps as IconProps$1,
  BadgeProps as BadgeProps$1,
  BoxProps as BoxProps$1,
  ButtonProps as ButtonProps$1,
  CheckboxProps as CheckboxProps$1,
  TextFieldProps,
  DividerProps as DividerProps$1,
  HeadingProps as HeadingProps$1,
  ImageProps as ImageProps$1,
  LinkProps as LinkProps$1,
  OptionProps,
  OptionGroupProps,
  ParagraphProps as ParagraphProps$1,
  SectionProps as SectionProps$1,
  SelectProps,
  SpinnerProps as SpinnerProps$1,
  StackProps as StackProps$1,
  TextProps as TextProps$1,
} from '@shopify/ui-api-design';
import {ComponentChild} from 'preact';

interface IconProps {
  type: '' | IconType;
  tone: Extract<
    IconProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
  size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

interface BadgeProps {
  accessibilityLabel: NonNullable<BadgeProps$1['accessibilityLabel']>;
  color: Extract<BadgeProps$1['color'], 'base' | 'strong'>;
  icon: IconProps['type'] | '';
  size: Extract<BadgeProps$1['size'], 'base' | 'large' | 'large-100'>;
  tone: Extract<
    BadgeProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
}

declare const tagName$g = 'shopify-badge';
interface ReactProps$g extends Partial<BadgeProps>, Pick<BadgeProps$1, 'id'> {}

type Style = string | CSSStyleSheet;
type Styles = Style[] | Style;
type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChild;
  styles?: Styles;
};
interface ActivationEventEsque {
  shiftKey: boolean;
  metaKey: boolean;
  ctrlKey: boolean;
  button: number;
}
interface ClickOptions {
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
  #private;
  static get observedAttributes(): string[];
  constructor({
    styles,
    ShadowRoot: renderFunction,
    delegatesFocus,
    ...options
  }: RenderImpl);
  // eslint-disable-next-line lines-between-class-members
  attributeChangedCallback(name: string): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /**
   * Queue a run of the render function.
   * You shouldn't need to call this manually - it should be handled by changes to @property values.
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
   *
   * @param options
   */
  click({sourceEvent}?: ClickOptions): void;
}

declare class Badge extends PreactCustomElement implements BadgeProps {
  accessor accessibilityLabel: BadgeProps['accessibilityLabel'];
  accessor color: BadgeProps['color'];
  accessor icon: BadgeProps['icon'];
  accessor size: BadgeProps['size'];
  accessor tone: BadgeProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$g]: Badge;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$g]: HTMLAttributes<HTMLElement> & ReactProps$g;
    }
  }
}

type MakeResponsive<T> = T | `@media${string}`;

type AlignedBox = Required<BoxProps$1>;
interface BoxProps {
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
  borderWidth: MaybeAllValuesShorthandProperty<
    Extract<
      AlignedBox['borderWidth'],
      'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200'
    >
  >;
  borderStyle: MaybeAllValuesShorthandProperty<
    Extract<AlignedBox['borderStyle'], 'none' | 'solid' | 'dashed'>
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
  borderColor: Extract<
    AlignedBox['borderColor'],
    'subdued' | 'base' | 'strong'
  >;
  accessibilityLabel: AlignedBox['accessibilityLabel'];
  accessibilityVisibility: AlignedBox['accessibilityVisibility'];
  display: AlignedBox['display'];
}

declare const tagName$f = 'shopify-box';
interface ReactProps$f extends Partial<BoxProps>, Pick<BoxProps$1, 'id'> {}

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
  accessor padding: BoxProps['padding'];
  accessor paddingBlock: BoxProps['paddingBlock'];
  accessor paddingBlockStart: BoxProps['paddingBlockStart'];
  accessor paddingBlockEnd: BoxProps['paddingBlockEnd'];
  accessor paddingInline: BoxProps['paddingInline'];
  accessor paddingInlineStart: BoxProps['paddingInlineStart'];
  accessor paddingInlineEnd: BoxProps['paddingInlineEnd'];
  accessor borderWidth: BoxProps['borderWidth'];
  accessor borderStyle: BoxProps['borderStyle'];
  accessor borderRadius: BoxProps['borderRadius'];
  accessor borderColor: BoxProps['borderColor'];
  accessor accessibilityLabel: BoxProps['accessibilityLabel'];
  accessor accessibilityVisibility: BoxProps['accessibilityVisibility'];
  accessor display: BoxProps['display'];
}

declare class Box extends BoxElement implements BoxProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$f]: Box;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$f]: HTMLAttributes<HTMLElement> & ReactProps$f;
    }
  }
}

type ButtonOnlyProps = Extract<
  ButtonProps$1,
  {
    type?: unknown;
  }
>;
type ButtonBaseProps = Required<
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
interface ButtonProps extends ButtonBaseProps {
  tone: Extract<ButtonProps$1['tone'], 'neutral' | 'critical' | 'auto'>;
  icon: IconProps['type'];
}

declare const tagName$e = 'shopify-button';
interface ReactProps$e
  extends Partial<ButtonProps>,
    Pick<ButtonProps$1, 'onClick' | 'onFocus' | 'onBlur' | 'id'> {}

interface SharedProps$3
  extends Required<Pick<InteractionProps, 'activateTarget'>> {
  activateAction: Extract<
    InteractionProps['activateAction'],
    'show' | 'hide' | 'toggle' | 'auto'
  >;
}
declare class PreactOverlayControl
  extends PreactCustomElement
  implements SharedProps$3
{
  accessor activateTarget: SharedProps$3['activateTarget'];
  accessor activateAction: SharedProps$3['activateAction'];
  constructor(renderImpl: RenderImpl);
}

declare class Button extends PreactOverlayControl implements ButtonProps {
  accessor disabled: ButtonProps['disabled'];
  accessor icon: ButtonProps['icon'];
  accessor loading: ButtonProps['loading'];
  accessor variant: ButtonProps['variant'];
  accessor tone: ButtonProps['tone'];
  accessor lang: ButtonProps['lang'];
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
    [tagName$e]: Button;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$e]: HTMLAttributes<HTMLElement> & ReactProps$e;
    }
  }
}

interface CheckboxProps
  extends Required<
    Pick<
      CheckboxProps$1,
      | 'accessibilityLabel'
      | 'checked'
      | 'details'
      | 'disabled'
      | 'error'
      | 'id'
      | 'indeterminate'
      | 'label'
      | 'name'
      | 'required'
      | 'value'
    >
  > {}

declare const tagName$d = 'shopify-checkbox';
interface ReactProps$d
  extends Partial<CheckboxProps>,
    Pick<CheckboxProps$1, 'id' | 'onChange'> {}

type InputBaseProps = Required<
  Pick<
    TextFieldProps,
    | 'disabled'
    | 'error'
    | 'label'
    | 'name'
    | 'placeholder'
    | 'readOnly'
    | 'required'
    | 'value'
    | 'id'
  >
> & {
  defaultValue: string;
};
type InputReactProps = Pick<
  TextFieldProps,
  'onChange' | 'onFocus' | 'onInput' | 'onBlur'
>;

declare const internals: unique symbol;
declare class PreactInputElement
  extends PreactCustomElement
  implements
    Pick<
      InputBaseProps,
      | 'defaultValue'
      | 'disabled'
      | 'error'
      | 'label'
      | 'name'
      | 'required'
      | 'value'
    >
{
  #private;
  static formAssociated: boolean;
  [internals]: ElementInternals;
  accessor onchange: EventListener | null;
  accessor oninput: EventListener | null;
  accessor onfocus: EventListener | null;
  accessor onblur: EventListener | null;
  accessor name: InputBaseProps['name'];
  accessor label: InputBaseProps['label'];
  accessor error: InputBaseProps['error'];
  accessor defaultValue: InputBaseProps['defaultValue'];
  get value(): InputBaseProps['value'];
  set value(value: InputBaseProps['value']);
  accessor disabled: InputBaseProps['disabled'];
  accessor required: InputBaseProps['required'];
  constructor(renderImpl: RenderImpl);
}

declare class Checkbox extends PreactInputElement implements CheckboxProps {
  #private;
  accessor indeterminate: CheckboxProps['indeterminate'];
  get checked(): boolean;
  set checked(checked: CheckboxProps['checked']);
  accessor details: CheckboxProps['details'];
  accessor accessibilityLabel: CheckboxProps['accessibilityLabel'];
  get value(): string;
  set value(value: string);
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$d]: Checkbox;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$d]: HTMLAttributes<HTMLElement> & ReactProps$d;
    }
  }
}

interface DividerProps {
  direction: Extract<DividerProps$1['direction'], 'inline' | 'block'>;
  color: Extract<DividerProps$1['color'], 'subdued' | 'base' | 'strong'>;
}

declare const tagName$c = 'shopify-divider';
interface ReactProps$c
  extends Partial<DividerProps>,
    Pick<DividerProps$1, 'id'> {}

declare class Divider extends PreactCustomElement implements DividerProps {
  accessor direction: DividerProps['direction'];
  accessor color: DividerProps['color'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$c]: Divider;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$c]: HTMLAttributes<HTMLElement> & ReactProps$c;
    }
  }
}

type RequiredHeadingProps = Required<HeadingProps$1>;
interface HeadingProps {
  accessibilityRole: RequiredHeadingProps['accessibilityRole'];
  accessibilityVisibility: RequiredHeadingProps['accessibilityVisibility'];
  lineClamp: RequiredHeadingProps['lineClamp'];
}

declare const tagName$b = 'shopify-heading';
interface ReactProps$b
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
    [tagName$b]: Heading;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$b]: HTMLAttributes<HTMLElement> & ReactProps$b;
    }
  }
}

declare const tagName$a = 'shopify-icon';
interface ReactProps$a extends Partial<IconProps>, Pick<IconProps$1, 'id'> {}

declare class Icon extends PreactCustomElement implements IconProps {
  accessor color: IconProps['color'];
  accessor tone: IconProps['tone'];
  accessor type: IconProps['type'];
  accessor size: IconProps['size'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$a]: Icon;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$a]: Omit<HTMLAttributes<HTMLElement>, 'size'> & ReactProps$a;
    }
  }
}

interface ImageProps {
  accessibilityRole: Extract<
    ImageProps$1['accessibilityRole'],
    'img' | 'presentation' | 'none'
  >;
  alt: NonNullable<ImageProps$1['alt']>;
  loading: Extract<ImageProps$1['loading'], 'eager' | 'lazy'>;
  src: NonNullable<ImageProps$1['src']>;
}

declare const tagName$9 = 'shopify-image';
interface ReactProps$9
  extends Partial<ImageProps>,
    Pick<ImageProps$1, 'onError' | 'onLoad' | 'id'> {}

declare class Image extends PreactCustomElement implements ImageProps {
  accessor src: ImageProps['src'];
  accessor alt: ImageProps['alt'];
  accessor loading: ImageProps['loading'];
  accessor accessibilityRole: ImageProps['accessibilityRole'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$9]: Image;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$9]: HTMLAttributes<HTMLElement> & ReactProps$9;
    }
  }
}

type RequiredLinkProps = Required<LinkProps$1>;
interface LinkProps {
  tone: Extract<RequiredLinkProps['tone'], 'auto' | 'neutral' | 'critical'>;
  accessibilityLabel: RequiredLinkProps['accessibilityLabel'];
  href: RequiredLinkProps['href'];
  target: RequiredLinkProps['target'];
}

declare const tagName$8 = 'shopify-link';
interface ReactProps$8
  extends Partial<LinkProps>,
    Pick<LinkProps$1, 'onClick' | 'id' | 'lang'> {}

declare class Link extends PreactCustomElement implements LinkProps {
  accessor tone: LinkProps['tone'];
  accessor accessibilityLabel: LinkProps['accessibilityLabel'];
  accessor href: LinkProps['href'];
  accessor target: LinkProps['target'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$8]: Link;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$8]: HTMLAttributes<HTMLElement> & ReactProps$8;
    }
  }
}

declare const tagName$7 = 'shopify-option';
interface ReactProps$7 extends Partial<SharedProps$2> {}

interface SharedProps$2
  extends Required<Pick<OptionProps, 'disabled' | 'value'>> {}
declare class Option extends PreactCustomElement implements SharedProps$2 {
  accessor value: SharedProps$2['value'];
  accessor disabled: SharedProps$2['disabled'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$7]: Option;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$7]: HTMLAttributes<HTMLElement> & ReactProps$7;
    }
  }
}

declare const tagName$6 = 'shopify-option-group';
interface ReactProps$6 extends Partial<SharedProps$1> {}

interface SharedProps$1
  extends Required<Pick<OptionGroupProps, 'disabled' | 'label'>> {}
declare class OptionGroup extends PreactCustomElement implements SharedProps$1 {
  accessor disabled: SharedProps$1['disabled'];
  accessor label: SharedProps$1['label'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$6]: OptionGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$6]: HTMLAttributes<HTMLElement> & ReactProps$6;
    }
  }
}

interface ParagraphProps
  extends Required<
    Pick<
      ParagraphProps$1,
      'lineClamp' | 'accessibilityVisibility' | 'fontVariantNumeric' | 'tone'
    >
  > {
  color: Extract<ParagraphProps$1['color'], 'base' | 'subdued'>;
}

declare const tagName$5 = 'shopify-paragraph';
interface ReactProps$5
  extends Partial<ParagraphProps>,
    Pick<ParagraphProps$1, 'id'> {}

declare class Paragraph extends PreactCustomElement implements ParagraphProps {
  accessor fontVariantNumeric: ParagraphProps['fontVariantNumeric'];
  accessor lineClamp: ParagraphProps['lineClamp'];
  accessor tone: ParagraphProps['tone'];
  accessor color: ParagraphProps['color'];
  accessor accessibilityVisibility: ParagraphProps['accessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$5]: Paragraph;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$5]: HTMLAttributes<HTMLElement> & ReactProps$5;
    }
  }
}

type RequiredSectionProps = Required<SectionProps$1>;
interface SectionProps {
  accessibilityLabel: RequiredSectionProps['accessibilityLabel'];
  heading: RequiredSectionProps['heading'];
  padding: RequiredSectionProps['padding'];
}

declare const tagName$4 = 'shopify-section';
interface ReactProps$4
  extends Partial<SectionProps>,
    Pick<SectionProps$1, 'id'> {}

declare class Section extends PreactCustomElement implements SectionProps {
  #private;
  constructor();
  connectedCallback(): void;
  accessor accessibilityLabel: SectionProps['accessibilityLabel'];
  accessor heading: SectionProps['heading'];
  accessor padding: SectionProps['padding'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$4]: Section;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$4]: HTMLAttributes<HTMLElement> & ReactProps$4;
    }
  }
}

declare const tagName$3 = 'shopify-select';
interface ReactProps$3 extends Partial<SharedProps & InputReactProps> {}

declare class PreactInputFieldElement
  extends PreactInputElement
  implements InputBaseProps
{
  accessor placeholder: InputBaseProps['placeholder'];
  accessor readOnly: InputBaseProps['readOnly'];
  constructor(renderImpl: RenderImpl);
}

interface SharedProps
  extends Pick<
    SelectProps,
    | 'disabled'
    | 'error'
    | 'label'
    | 'name'
    | 'placeholder'
    | 'required'
    | 'value'
  > {}
declare class Select extends PreactInputFieldElement implements SharedProps {
  #private;
  connectedCallback(): void;
  disconnectedCallback(): void;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$3]: Select;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$3]: HTMLAttributes<HTMLElement> & ReactProps$3;
    }
  }
}

interface SpinnerProps
  extends Required<Pick<SpinnerProps$1, 'accessibilityLabel'>> {
  /**
   * The size of the component.
   *
   * @default 'base'
   */
  size: Extract<SpinnerProps$1['size'], 'large' | 'large-100' | 'base'>;
}

declare const tagName$2 = 'shopify-spinner';
interface ReactProps$2
  extends Partial<SpinnerProps>,
    Pick<SpinnerProps$1, 'id'> {}

declare class Spinner extends PreactCustomElement implements SpinnerProps {
  accessor accessibilityLabel: string;
  accessor size: SpinnerProps['size'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$2]: Spinner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$2]: HTMLAttributes<HTMLElement> & ReactProps$2;
    }
  }
}

type AlignedStackProps = Required<StackProps$1>;
interface StackProps extends BoxProps {
  justifyContent: AlignedStackProps['justifyContent'];
  alignItems: AlignedStackProps['alignItems'];
  alignContent: AlignedStackProps['alignContent'];
  gap: MakeResponsive<AlignedStackProps['gap']>;
  rowGap: MakeResponsive<AlignedStackProps['rowGap']>;
  columnGap: MakeResponsive<AlignedStackProps['columnGap']>;
  direction: MakeResponsive<AlignedStackProps['direction']>;
}

declare const tagName$1 = 'shopify-stack';
interface ReactProps$1 extends Partial<StackProps>, Pick<StackProps$1, 'id'> {}

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
    [tagName$1]: Stack;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$1]: HTMLAttributes<HTMLElement> & ReactProps$1;
    }
  }
}

interface TextProps
  extends Required<Pick<TextProps$1, 'display' | 'accessibilityVisibility'>> {
  color: Extract<TextProps$1['color'], 'base' | 'subdued'>;
  type: Extract<
    TextProps$1['type'],
    'address' | 'redundant' | 'strong' | 'generic' | 'emphasis'
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

declare const tagName = 'shopify-text';
interface ReactProps extends Partial<TextProps>, Pick<TextProps$1, 'id'> {}

declare class Text extends PreactCustomElement implements TextProps {
  accessor display: TextProps['display'];
  accessor fontVariantNumeric: TextProps['fontVariantNumeric'];
  accessor color: TextProps['color'];
  accessor tone: TextProps['tone'];
  accessor type: TextProps['type'];
  accessor accessibilityVisibility: TextProps['accessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Text;
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
  Badge,
  Box,
  Button,
  Checkbox,
  Divider,
  Heading,
  Icon,
  Image,
  Link,
  Option,
  OptionGroup,
  Paragraph,
  Section,
  Select,
  Spinner,
  Stack,
  Text,
};
