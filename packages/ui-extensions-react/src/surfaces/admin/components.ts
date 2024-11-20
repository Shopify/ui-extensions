import type {
  TextProps as TextProps$2,
  BoxProps as BoxProps$2,
  StackProps as StackProps$2,
  SpinnerProps as SpinnerProps$2,
  TextFieldProps,
  SelectProps as SelectProps$1,
  SectionProps as SectionProps$2,
  ParagraphProps as ParagraphProps$2,
  OptionGroupProps as OptionGroupProps$1,
  OptionProps as OptionProps$1,
  LinkProps as LinkProps$2,
  ImageProps as ImageProps$2,
  IconProps as IconProps$2,
  HeadingProps as HeadingProps$2,
  DividerProps as DividerProps$2,
  CheckboxProps as CheckboxProps$2,
  ButtonProps as ButtonProps$2,
  BadgeProps as BadgeProps$2,
} from '@shopify/ui-api-design';
import type {MaybeAllValuesShorthandProperty} from '@shopify/ui-api-design/dist/shared/utils';
import * as React from 'react';

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

interface TextProps$1
  extends Required<Pick<TextProps$2, 'display' | 'accessibilityVisibility'>> {
  color: Extract<TextProps$2['color'], 'base' | 'subdued'>;
  type: Extract<
    TextProps$2['type'],
    'address' | 'redundant' | 'strong' | 'generic' | 'emphasis'
  >;
  tone: Extract<
    TextProps$2['tone'],
    'auto' | 'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'caution'
  >;
  fontVariantNumeric: Extract<
    TextProps$2['fontVariantNumeric'],
    'auto' | 'normal' | 'tabular-nums'
  >;
}

interface ReactProps$g extends Partial<TextProps$1>, Pick<TextProps$2, 'id'> {}

type MakeResponsive<T> = T | `@media${string}`;

type AlignedBox = Required<BoxProps$2>;
interface BoxProps$1 {
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

type AlignedStackProps = Required<StackProps$2>;
interface StackProps$1 extends BoxProps$1 {
  justifyContent: AlignedStackProps['justifyContent'];
  alignItems: AlignedStackProps['alignItems'];
  alignContent: AlignedStackProps['alignContent'];
  gap: MakeResponsive<AlignedStackProps['gap']>;
  rowGap: MakeResponsive<AlignedStackProps['rowGap']>;
  columnGap: MakeResponsive<AlignedStackProps['columnGap']>;
  direction: MakeResponsive<AlignedStackProps['direction']>;
}

interface ReactProps$f
  extends Partial<StackProps$1>,
    Pick<StackProps$2, 'id'> {}

interface SpinnerProps$1
  extends Required<Pick<SpinnerProps$2, 'accessibilityLabel'>> {
  /**
   * The size of the component.
   *
   * @default 'base'
   */
  size: Extract<SpinnerProps$2['size'], 'large' | 'large-100' | 'base'>;
}

interface ReactProps$e
  extends Partial<SpinnerProps$1>,
    Pick<SpinnerProps$2, 'id'> {}

type InputReactProps = Pick<
  TextFieldProps,
  'onChange' | 'onFocus' | 'onInput' | 'onBlur'
>;

interface SharedProps$3
  extends Pick<
    SelectProps$1,
    | 'disabled'
    | 'error'
    | 'label'
    | 'name'
    | 'placeholder'
    | 'required'
    | 'value'
  > {}

interface ReactProps$d extends Partial<SharedProps$3 & InputReactProps> {}

type RequiredSectionProps = Required<SectionProps$2>;
interface SectionProps$1 {
  accessibilityLabel: RequiredSectionProps['accessibilityLabel'];
  heading: RequiredSectionProps['heading'];
  padding: RequiredSectionProps['padding'];
}

interface ReactProps$c
  extends Partial<SectionProps$1>,
    Pick<SectionProps$2, 'id'> {}

interface ParagraphProps$1
  extends Required<
    Pick<
      ParagraphProps$2,
      'lineClamp' | 'accessibilityVisibility' | 'fontVariantNumeric' | 'tone'
    >
  > {
  color: Extract<ParagraphProps$2['color'], 'base' | 'subdued'>;
}

interface ReactProps$b
  extends Partial<ParagraphProps$1>,
    Pick<ParagraphProps$2, 'id'> {}

interface SharedProps$2
  extends Required<Pick<OptionGroupProps$1, 'disabled' | 'label'>> {}

interface ReactProps$a extends Partial<SharedProps$2> {}

interface SharedProps$1
  extends Required<Pick<OptionProps$1, 'disabled' | 'value'>> {}

interface ReactProps$9 extends Partial<SharedProps$1> {}

type RequiredLinkProps = Required<LinkProps$2>;
interface LinkProps$1 {
  tone: Extract<RequiredLinkProps['tone'], 'auto' | 'neutral' | 'critical'>;
  accessibilityLabel: RequiredLinkProps['accessibilityLabel'];
  href: RequiredLinkProps['href'];
  target: RequiredLinkProps['target'];
}

interface ReactProps$8
  extends Partial<LinkProps$1>,
    Pick<LinkProps$2, 'onClick' | 'id' | 'lang'> {}

interface ImageProps$1 {
  accessibilityRole: Extract<
    ImageProps$2['accessibilityRole'],
    'img' | 'presentation' | 'none'
  >;
  alt: NonNullable<ImageProps$2['alt']>;
  loading: Extract<ImageProps$2['loading'], 'eager' | 'lazy'>;
  src: NonNullable<ImageProps$2['src']>;
}

interface ReactProps$7
  extends Partial<ImageProps$1>,
    Pick<ImageProps$2, 'onError' | 'onLoad' | 'id'> {}

interface IconProps$1 {
  type: '' | IconType;
  tone: Extract<
    IconProps$2['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  color: Extract<IconProps$2['color'], 'base' | 'subdued'>;
  size: Extract<IconProps$2['size'], 'small' | 'base'>;
}

interface ReactProps$6 extends Partial<IconProps$1>, Pick<IconProps$2, 'id'> {}

type RequiredHeadingProps = Required<HeadingProps$2>;
interface HeadingProps$1 {
  accessibilityRole: RequiredHeadingProps['accessibilityRole'];
  accessibilityVisibility: RequiredHeadingProps['accessibilityVisibility'];
  lineClamp: RequiredHeadingProps['lineClamp'];
}

interface ReactProps$5
  extends Partial<HeadingProps$1>,
    Pick<HeadingProps$2, 'id'> {}

interface DividerProps$1 {
  direction: Extract<DividerProps$2['direction'], 'inline' | 'block'>;
  color: Extract<DividerProps$2['color'], 'subdued' | 'base' | 'strong'>;
}

interface ReactProps$4
  extends Partial<DividerProps$1>,
    Pick<DividerProps$2, 'id'> {}

interface CheckboxProps$1
  extends Required<
    Pick<
      CheckboxProps$2,
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

interface ReactProps$3
  extends Partial<CheckboxProps$1>,
    Pick<CheckboxProps$2, 'id' | 'onChange'> {}

type ButtonOnlyProps = Extract<
  ButtonProps$2,
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
interface ButtonProps$1 extends ButtonBaseProps {
  tone: Extract<ButtonProps$2['tone'], 'neutral' | 'critical' | 'auto'>;
  icon: IconProps$1['type'];
}

interface ReactProps$2
  extends Partial<ButtonProps$1>,
    Pick<ButtonProps$2, 'onClick' | 'onFocus' | 'onBlur' | 'id'> {}

interface ReactProps$1 extends Partial<BoxProps$1>, Pick<BoxProps$2, 'id'> {}

interface BadgeProps$1 {
  accessibilityLabel: NonNullable<BadgeProps$2['accessibilityLabel']>;
  color: Extract<BadgeProps$2['color'], 'base' | 'strong'>;
  icon: IconProps$1['type'] | '';
  size: Extract<BadgeProps$2['size'], 'base' | 'large' | 'large-100'>;
  tone: Extract<
    BadgeProps$2['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
}

interface ReactProps extends Partial<BadgeProps$1>, Pick<BadgeProps$2, 'id'> {}

type BadgeProps = ReactProps;

type BoxProps = ReactProps$1;

type ButtonProps = ReactProps$2;

type CheckboxProps = ReactProps$3;

type DividerProps = ReactProps$4;

type HeadingProps = ReactProps$5;

type IconProps = ReactProps$6;

type ImageProps = ReactProps$7;

type LinkProps = ReactProps$8;

type OptionProps = ReactProps$9;

type OptionGroupProps = ReactProps$a;

type ParagraphProps = ReactProps$b;

type SectionProps = ReactProps$c;

type SelectProps = ReactProps$d;

type SpinnerProps = ReactProps$e;

type StackProps = ReactProps$f;

type TextProps = ReactProps$g;

declare const Badge: React.ComponentType<React.PropsWithChildren<ReactProps>>;

declare const Box: React.ComponentType<React.PropsWithChildren<ReactProps$1>>;

declare const Button: React.ComponentType<
  React.PropsWithChildren<ReactProps$2>
>;

declare const Checkbox: React.ComponentType<
  React.PropsWithChildren<ReactProps$3>
>;

declare const Divider: React.ComponentType<
  React.PropsWithChildren<ReactProps$4>
>;

declare const Heading: React.ComponentType<
  React.PropsWithChildren<ReactProps$5>
>;

declare const Icon: React.ComponentType<React.PropsWithChildren<ReactProps$6>>;

declare const Image: React.ComponentType<React.PropsWithChildren<ReactProps$7>>;

declare const Link: React.ComponentType<React.PropsWithChildren<ReactProps$8>>;

declare const Option: React.ComponentType<
  React.PropsWithChildren<ReactProps$9>
>;

declare const OptionGroup: React.ComponentType<
  React.PropsWithChildren<ReactProps$a>
>;

declare const Paragraph: React.ComponentType<
  React.PropsWithChildren<ReactProps$b>
>;

declare const Section: React.ComponentType<
  React.PropsWithChildren<ReactProps$c>
>;

declare const Select: React.ComponentType<
  React.PropsWithChildren<ReactProps$d>
>;

declare const Spinner: React.ComponentType<
  React.PropsWithChildren<ReactProps$e>
>;

declare const Stack: React.ComponentType<React.PropsWithChildren<ReactProps$f>>;

declare const Text: React.ComponentType<React.PropsWithChildren<ReactProps$g>>;

export {
  Badge,
  type BadgeProps,
  Box,
  type BoxProps,
  Button,
  type ButtonProps,
  Checkbox,
  type CheckboxProps,
  Divider,
  type DividerProps,
  Heading,
  type HeadingProps,
  Icon,
  type IconProps,
  Image,
  type ImageProps,
  Link,
  type LinkProps,
  Option,
  OptionGroup,
  type OptionGroupProps,
  type OptionProps,
  Paragraph,
  type ParagraphProps,
  Section,
  type SectionProps,
  Select,
  type SelectProps,
  Spinner,
  type SpinnerProps,
  Stack,
  type StackProps,
  Text,
  type TextProps,
};
