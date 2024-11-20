import type {
  IconProps as IconProps$1,
  BadgeProps as BadgeProps$1,
  BoxProps as BoxProps$1,
  ButtonProps as ButtonProps$1,
  TextFieldProps,
  CheckboxProps as CheckboxProps$1,
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
import type {MaybeAllValuesShorthandProperty} from '@shopify/ui-api-design/dist/shared/utils';
import type {InteractionProps} from '@shopify/ui-api-design/dist/shared/pressable';

export type IconType =
  | 'wrench'
  | 'viewport-tall'
  | 'viewport-short'
  | 'viewport-narrow'
  | 'wifi'
  | 'work'
  | 'watch'
  | 'wallet'
  | 'wand'
  | 'upload'
  | 'undo'
  | 'viewport-wide'
  | 'unknown-device'
  | 'transaction'
  | 'transfer-internal'
  | 'transfer-in'
  | 'transfer-out'
  | 'transaction-fee-euro'
  | 'transaction-fee-yen'
  | 'transaction-fee-rupee'
  | 'transaction-fee-dollar'
  | 'transaction-fee-pound'
  | 'thumbs-up'
  | 'transfer'
  | 'tip-jar'
  | 'theme-template'
  | 'thumbs-down'
  | 'theme-store'
  | 'theme'
  | 'theme-edit'
  | 'text-with-image'
  | 'text'
  | 'toggle-off'
  | 'text-underline'
  | 'text-title'
  | 'text-in-columns'
  | 'text-indent'
  | 'text-italic'
  | 'text-font'
  | 'text-font-list'
  | 'text-grammar'
  | 'text-color'
  | 'text-block'
  | 'text-bold'
  | 'toggle-on'
  | 'text-align-right'
  | 'text-align-center'
  | 'text-align-left'
  | 'tablet'
  | 'team'
  | 'store'
  | 'tax'
  | 'sun'
  | 'store-online'
  | 'store-import'
  | 'stop-circle'
  | 'target'
  | 'store-managed'
  | 'star-filled'
  | 'status'
  | 'sort-descending'
  | 'text-in-rows'
  | 'sort-ascending'
  | 'sound'
  | 'social-ad'
  | 'smiley-neutral'
  | 'status-active'
  | 'sports'
  | 'social-post'
  | 'smiley-joy'
  | 'smiley-happy'
  | 'slideshow'
  | 'shipping-label'
  | 'shield-none'
  | 'shield-person'
  | 'smiley-sad'
  | 'shield-check-mark'
  | 'shopcodes'
  | 'settings'
  | 'share'
  | 'send'
  | 'search-resource'
  | 'search-list'
  | 'search'
  | 'save'
  | 'rotate-left'
  | 'text-quote'
  | 'search-recent'
  | 'sandbox'
  | 'replay'
  | 'shield-pending'
  | 'reward'
  | 'remove-background'
  | 'replace'
  | 'return'
  | 'receipt'
  | 'receipt-yen'
  | 'receipt-refund'
  | 'receipt-rupee'
  | 'reset'
  | 'receipt-euro'
  | 'refresh'
  | 'redo'
  | 'receipt-paid'
  | 'question-circle'
  | 'receipt-dollar'
  | 'product-unavailable'
  | 'receipt-pound'
  | 'profile'
  | 'product-return'
  | 'product-add'
  | 'print'
  | 'product-list'
  | 'product-reference'
  | 'product-remove'
  | 'price-list'
  | 'product-cost'
  | 'play'
  | 'play-circle'
  | 'point-of-sale'
  | 'phone-out'
  | 'pin'
  | 'plan'
  | 'phone-in'
  | 'person-segment'
  | 'personalized-text'
  | 'payout-yen'
  | 'person-remove'
  | 'person-exit'
  | 'payout'
  | 'payout-pound'
  | 'payout-dollar'
  | 'person-lock'
  | 'passkey'
  | 'payout-euro'
  | 'paint-brush-round'
  | 'payout-rupee'
  | 'payment-capture'
  | 'paper-check'
  | 'pagination-end'
  | 'pause-circle'
  | 'paint-brush-flat'
  | 'page-reference'
  | 'page-up'
  | 'person-add'
  | 'page-attachment'
  | 'page-clock'
  | 'page-down'
  | 'package-returned'
  | 'page-add'
  | 'package'
  | 'pagination-start'
  | 'package-fulfilled'
  | 'organization'
  | 'page-heart'
  | 'outdent'
  | 'outgoing'
  | 'order-repeat'
  | 'package-on-hold'
  | 'page-remove'
  | 'order-draft'
  | 'note'
  | 'order-first'
  | 'note-add'
  | 'notification'
  | 'moon'
  | 'money'
  | 'minimize'
  | 'nature'
  | 'metaobject-reference'
  | 'menu'
  | 'metaobject'
  | 'metafields'
  | 'metaobject-list'
  | 'menu-vertical'
  | 'mention'
  | 'money-none'
  | 'megaphone'
  | 'orders-status'
  | 'referral-code'
  | 'measurement-volume'
  | 'markets'
  | 'markets-yen'
  | 'measurement-size'
  | 'markets-rupee'
  | 'maximize'
  | 'markets-euro'
  | 'lock'
  | 'location-none'
  | 'live'
  | 'list-numbered'
  | 'link'
  | 'layout-sidebar-right'
  | 'list-bulleted'
  | 'measurement-weight'
  | 'layout-sidebar-left'
  | 'media-receiver'
  | 'layout-popup'
  | 'layout-section'
  | 'layout-footer'
  | 'layout-rows-2'
  | 'layout-columns-2'
  | 'layout-column-1'
  | 'layout-columns-3'
  | 'layout-buy-button'
  | 'layout-buy-button-vertical'
  | 'layout-block'
  | 'layout-buy-button-horizontal'
  | 'language-translate'
  | 'label-printer'
  | 'keyboard-hide'
  | 'keyboard'
  | 'iq'
  | 'inventory'
  | 'key'
  | 'layout-header'
  | 'layout-logo-block'
  | 'incentive'
  | 'images'
  | 'image'
  | 'incoming'
  | 'image-explore'
  | 'image-with-text-overlay'
  | 'image-none'
  | 'image-add'
  | 'import'
  | 'image-alt'
  | 'icons'
  | 'identity-card'
  | 'hashtag'
  | 'globe-europe'
  | 'heart'
  | 'inventory-updated'
  | 'hashtag-decimal'
  | 'gift-card'
  | 'gauge'
  | 'globe-asia'
  | 'games'
  | 'forms'
  | 'image-magic'
  | 'food'
  | 'forklift'
  | 'folder'
  | 'folder-up'
  | 'folder-down'
  | 'folder-remove'
  | 'home'
  | 'flip-vertical'
  | 'folder-add'
  | 'flag'
  | 'file'
  | 'flower'
  | 'flip-horizontal'
  | 'favicon'
  | 'eyeglasses'
  | 'eye-check-mark'
  | 'filter'
  | 'eye-first'
  | 'export'
  | 'exchange'
  | 'eye-dropper'
  | 'envelope-soft-pack'
  | 'envelope'
  | 'exit'
  | 'enter'
  | 'email-newsletter'
  | 'email-follow-up'
  | 'duplicate'
  | 'drag-drop'
  | 'domain-new'
  | 'drag-handle'
  | 'domain'
  | 'dock-floating'
  | 'discount-code'
  | 'discount'
  | 'dock-side'
  | 'domain-redirect'
  | 'dns-settings'
  | 'delete'
  | 'desktop'
  | 'database-add'
  | 'data-table'
  | 'database-connect'
  | 'domain-landing-page'
  | 'cursor-option'
  | 'cursor'
  | 'data-presentation'
  | 'crop'
  | 'currency-convert'
  | 'cursor-banner'
  | 'credit-card-tap-chip'
  | 'credit-card-reader-tap'
  | 'credit-card'
  | 'credit-card-secure'
  | 'credit-card-reader-chip'
  | 'credit-card-cancel'
  | 'credit-card-reader'
  | 'database'
  | 'credit-card-percent'
  | 'corner-pill'
  | 'corner-round'
  | 'content'
  | 'connect'
  | 'contract'
  | 'confetti'
  | 'rotate-right'
  | 'menu-horizontal'
  | 'color-none'
  | 'collection-list'
  | 'code'
  | 'collection-featured'
  | 'compass'
  | 'compose'
  | 'corner-square'
  | 'code-add'
  | 'clipboard'
  | 'color'
  | 'clipboard-check'
  | 'chevron-right'
  | 'chevron-up-circle'
  | 'chevron-right-circle'
  | 'chevron-down-circle'
  | 'circle'
  | 'clipboard-checklist'
  | 'chevron-left'
  | 'checkbox'
  | 'chat'
  | 'collection-reference'
  | 'chevron-left-circle'
  | 'chart-vertical'
  | 'chat-referral'
  | 'chart-stacked'
  | 'chart-line'
  | 'chart-horizontal'
  | 'chart-popular'
  | 'chart-histogram-second-last'
  | 'chart-histogram-last'
  | 'chart-histogram-flat'
  | 'chart-funnel'
  | 'chart-histogram-full'
  | 'chart-histogram-first'
  | 'chart-cohort'
  | 'chart-histogram-growth'
  | 'categories'
  | 'chart-histogram-first-last'
  | 'channels'
  | 'cash-pound'
  | 'chart-donut'
  | 'cash-yen'
  | 'cash-dollar'
  | 'catalog-product'
  | 'cart-up'
  | 'cart-discount'
  | 'cart-sale'
  | 'cash-rupee'
  | 'cart'
  | 'cart-down'
  | 'cart-abandoned'
  | 'caret-down'
  | 'camera'
  | 'camera-flip'
  | 'caret-up'
  | 'calendar-time'
  | 'calculator'
  | 'button'
  | 'bullet'
  | 'button-press'
  | 'bug'
  | 'book'
  | 'book-open'
  | 'cash-euro'
  | 'blog'
  | 'bank'
  | 'automation'
  | 'arrows-out-horizontal'
  | 'backspace'
  | 'bill'
  | 'arrow-up'
  | 'arrow-right'
  | 'arrow-right-circle'
  | 'barcode'
  | 'arrow-up-circle'
  | 'arrow-left'
  | 'arrow-left-circle'
  | 'arrow-down-circle'
  | 'app-extension'
  | 'alert-diamond'
  | 'arrow-down'
  | 'alert-location'
  | 'airplane'
  | 'affiliate'
  | 'adjust'
  | 'arrows-in-horizontal'
  | 'x'
  | 'x-circle'
  | 'variant'
  | 'view'
  | 'star'
  | 'sort'
  | 'select'
  | 'product'
  | 'plus-circle'
  | 'plus'
  | 'phone'
  | 'person'
  | 'payment'
  | 'page'
  | 'order'
  | 'order-unfulfilled'
  | 'order-fulfilled'
  | 'mobile'
  | 'microphone'
  | 'minus'
  | 'minus-circle'
  | 'location'
  | 'lightbulb'
  | 'language'
  | 'incomplete'
  | 'info'
  | 'in-progress'
  | 'hide'
  | 'globe'
  | 'external'
  | 'email'
  | 'edit'
  | 'enabled'
  | 'disabled'
  | 'delivery'
  | 'collection'
  | 'clock'
  | 'chevron-up'
  | 'check'
  | 'check-circle'
  | 'chevron-down'
  | 'calendar-check'
  | 'calendar'
  | 'blank'
  | 'archive'
  | 'alert-triangle'
  | 'alert-circle'
  | 'alert-bubble'
  | 'attachment'
  | 'merge'
  | 'arrow-up-right'
  | 'apps';

/**
 * Base class for creating custom elements with Preact.
 * While this class could be used in both Node and the browser, the constructor will only be used in the browser.
 * So we give it a type of HTMLElement to avoid typing issues later where it's used, which will only happen in the browser.
 */
declare const BaseClass: typeof globalThis.HTMLElement;
declare abstract class PreactCustomElement extends BaseClass {}

export interface IconProps {
  type: '' | IconType;
  tone: Extract<
    IconProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
  size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

export interface BadgeProps {
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

declare class Badge extends PreactCustomElement implements BadgeProps {
  accessor accessibilityLabel: BadgeProps['accessibilityLabel'];
  accessor color: BadgeProps['color'];
  accessor icon: BadgeProps['icon'];
  accessor size: BadgeProps['size'];
  accessor tone: BadgeProps['tone'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$g]: Badge;
  }
}

type MakeResponsive<T> = T | `@media${string}`;

type AlignedBox = Required<BoxProps$1>;
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

declare class BoxElement extends PreactCustomElement implements BoxProps {
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

declare const tagName$f = 'shopify-box';

declare class Box extends BoxElement implements BoxProps {}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$f]: Box;
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
export interface ButtonProps extends ButtonBaseProps {
  tone: Extract<ButtonProps$1['tone'], 'neutral' | 'critical' | 'auto'>;
  icon: IconProps['type'];
}

declare const tagName$e = 'shopify-button';

export interface SharedProps$3
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
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$e]: Button;
  }
}

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
}

export interface CheckboxProps
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

declare class Checkbox extends PreactInputElement implements CheckboxProps {
  #private;
  accessor indeterminate: CheckboxProps['indeterminate'];
  get checked(): boolean;
  set checked(checked: CheckboxProps['checked']);
  accessor details: CheckboxProps['details'];
  accessor accessibilityLabel: CheckboxProps['accessibilityLabel'];
  get value(): string;
  set value(value: string);
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$d]: Checkbox;
  }
}

export interface DividerProps {
  direction: Extract<DividerProps$1['direction'], 'inline' | 'block'>;
  color: Extract<DividerProps$1['color'], 'subdued' | 'base' | 'strong'>;
}

declare const tagName$c = 'shopify-divider';

declare class Divider extends PreactCustomElement implements DividerProps {
  accessor direction: DividerProps['direction'];
  accessor color: DividerProps['color'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$c]: Divider;
  }
}

export type RequiredHeadingProps = Required<HeadingProps$1>;
export interface HeadingProps {
  accessibilityRole: RequiredHeadingProps['accessibilityRole'];
  accessibilityVisibility: RequiredHeadingProps['accessibilityVisibility'];
  lineClamp: RequiredHeadingProps['lineClamp'];
}

declare const tagName$b = 'shopify-heading';

declare class Heading extends PreactCustomElement implements HeadingProps {
  accessor accessibilityRole: HeadingProps['accessibilityRole'];
  accessor lineClamp: HeadingProps['lineClamp'];
  accessor accessibilityVisibility: HeadingProps['accessibilityVisibility'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$b]: Heading;
  }
}

declare const tagName$a = 'shopify-icon';

declare class Icon extends PreactCustomElement implements IconProps {
  accessor color: IconProps['color'];
  accessor tone: IconProps['tone'];
  accessor type: IconProps['type'];
  accessor size: IconProps['size'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$a]: Icon;
  }
}

export interface ImageProps {
  accessibilityRole: Extract<
    ImageProps$1['accessibilityRole'],
    'img' | 'presentation' | 'none'
  >;
  alt: NonNullable<ImageProps$1['alt']>;
  loading: Extract<ImageProps$1['loading'], 'eager' | 'lazy'>;
  src: NonNullable<ImageProps$1['src']>;
}

declare const tagName$9 = 'shopify-image';

declare class Image extends PreactCustomElement implements ImageProps {
  accessor src: ImageProps['src'];
  accessor alt: ImageProps['alt'];
  accessor loading: ImageProps['loading'];
  accessor accessibilityRole: ImageProps['accessibilityRole'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$9]: Image;
  }
}

type RequiredLinkProps = Required<LinkProps$1>;
export interface LinkProps {
  tone: Extract<RequiredLinkProps['tone'], 'auto' | 'neutral' | 'critical'>;
  accessibilityLabel: RequiredLinkProps['accessibilityLabel'];
  href: RequiredLinkProps['href'];
  target: RequiredLinkProps['target'];
}

declare const tagName$8 = 'shopify-link';

declare class Link extends PreactCustomElement implements LinkProps {
  accessor tone: LinkProps['tone'];
  accessor accessibilityLabel: LinkProps['accessibilityLabel'];
  accessor href: LinkProps['href'];
  accessor target: LinkProps['target'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$8]: Link;
  }
}

declare const tagName$7 = 'shopify-option';

export interface SharedProps$2
  extends Required<Pick<OptionProps, 'disabled' | 'value'>> {}
declare class Option extends PreactCustomElement implements SharedProps$2 {
  accessor value: SharedProps$2['value'];
  accessor disabled: SharedProps$2['disabled'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$7]: Option;
  }
}

declare const tagName$6 = 'shopify-option-group';

interface SharedProps$1
  extends Required<Pick<OptionGroupProps, 'disabled' | 'label'>> {}
declare class OptionGroup extends PreactCustomElement implements SharedProps$1 {
  accessor disabled: SharedProps$1['disabled'];
  accessor label: SharedProps$1['label'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$6]: OptionGroup;
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

declare class Paragraph extends PreactCustomElement implements ParagraphProps {
  accessor fontVariantNumeric: ParagraphProps['fontVariantNumeric'];
  accessor lineClamp: ParagraphProps['lineClamp'];
  accessor tone: ParagraphProps['tone'];
  accessor color: ParagraphProps['color'];
  accessor accessibilityVisibility: ParagraphProps['accessibilityVisibility'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$5]: Paragraph;
  }
}

type RequiredSectionProps = Required<SectionProps$1>;
export interface SectionProps {
  accessibilityLabel: RequiredSectionProps['accessibilityLabel'];
  heading: RequiredSectionProps['heading'];
  padding: RequiredSectionProps['padding'];
}

declare const tagName$4 = 'shopify-section';

declare class Section extends PreactCustomElement implements SectionProps {
  #private;
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

declare const tagName$3 = 'shopify-select';

declare class PreactInputFieldElement
  extends PreactInputElement
  implements InputBaseProps
{
  accessor placeholder: InputBaseProps['placeholder'];
  accessor readOnly: InputBaseProps['readOnly'];
}

export interface SharedProps
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
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$3]: Select;
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

declare class Spinner extends PreactCustomElement implements SpinnerProps {
  accessor accessibilityLabel: string;
  accessor size: SpinnerProps['size'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$2]: Spinner;
  }
}

type AlignedStackProps = Required<StackProps$1>;
export interface StackProps extends BoxProps {
  justifyContent: AlignedStackProps['justifyContent'];
  alignItems: AlignedStackProps['alignItems'];
  alignContent: AlignedStackProps['alignContent'];
  gap: MakeResponsive<AlignedStackProps['gap']>;
  rowGap: MakeResponsive<AlignedStackProps['rowGap']>;
  columnGap: MakeResponsive<AlignedStackProps['columnGap']>;
  direction: MakeResponsive<AlignedStackProps['direction']>;
}

declare const tagName$1 = 'shopify-stack';

declare class Stack extends BoxElement implements StackProps {
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

declare class Text extends PreactCustomElement implements TextProps {
  accessor display: TextProps['display'];
  accessor fontVariantNumeric: TextProps['fontVariantNumeric'];
  accessor color: TextProps['color'];
  accessor tone: TextProps['tone'];
  accessor type: TextProps['type'];
  accessor accessibilityVisibility: TextProps['accessibilityVisibility'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Text;
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
