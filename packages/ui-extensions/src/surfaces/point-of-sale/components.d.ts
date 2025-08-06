/* VERSION: latest */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
export type {
  ButtonProps,
  TextProps,
  ScrollBoxProps,
  BannerProps,
  BoxProps,
  IconProps,
  StackProps,
  BadgeProps,
  ChoiceListProps,
  ChoiceProps,
  ModalProps,
  TextFieldProps,
  SearchFieldProps,
} from '@shopify/ui-api-design';
export type {Key, Ref, ComponentChild} from 'preact';

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
interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  children?: ComponentChildren;
}
interface CallbackEvent<T extends keyof HTMLElementTagNameMap> {
  currentTarget: HTMLElementTagNameMap[T];
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: any;
  eventPhase: number;
  target: HTMLElementTagNameMap[T] | null;
}
type CallbackToggleEvent<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends ToggleEvent = ToggleEvent,
> = TEvent & {
  currentTarget: HTMLElementTagNameMap[TTagName];
};

declare const tagName$f = 's-button';
interface ButtonJSXProps
  extends Pick<
    ButtonProps,
    | 'accessibilityLabel'
    | 'disabled'
    | 'command'
    | 'commandFor'
    | 'loading'
    | 'tone'
    | 'variant'
    | 'id'
  > {
  tone?: Extract<ButtonProps['tone'], 'auto' | 'critical'>;
  variant?: Extract<ButtonProps['variant'], 'primary' | 'secondary'>;
  onClick?: (event: CallbackEvent<typeof tagName$f>) => void;
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$f]: ButtonJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$f]: BaseElementPropsWithChildren<ButtonJSXProps>;
    }
  }
}

declare const tagName$e = 's-text';
interface TextJSXProps extends Pick<TextProps, 'tone' | 'type'> {
  color?: 'subdued' | 'base' | 'strong';
  type?: Extract<TextProps['type'], 'emphasis' | 'strong' | 'small' | 'offset'>;
  tone?: Extract<
    TextProps['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical'
  >;
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$e]: TextJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$e]: BaseElementPropsWithChildren<TextJSXProps>;
    }
  }
}

declare const tagName$d = 's-scroll-box';
interface ScrollBoxJSXProps extends Pick<ScrollBoxProps, 'id'> {
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$d]: ScrollBoxJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$d]: BaseElementPropsWithChildren<ScrollBoxJSXProps>;
    }
  }
}

declare const tagName$c = 's-tile';
interface TileJSXProps {
  title: string;
  subtitle?: string;
  enabled?: boolean;
  destructive?: boolean;
  badgeValue?: string;
  onPress?: () => void;
  testID?: string;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$c]: TileJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$c]: BaseElementPropsWithChildren<TileJSXProps>;
    }
  }
}

declare const tagName$b = 's-navigator';
interface NavigatorJSXProps {
  initialScreenName?: string;
  children?: React.ReactNode;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$b]: NavigatorJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$b]: BaseElementPropsWithChildren<NavigatorJSXProps>;
    }
  }
}

declare const tagName$a = 's-screen';
interface ScreenJSXProps {
  /**
   * Used to identify this screen as a destination in the navigation stack.
   */
  name: string;
  /**
   * The title of the screen which will be displayed on the UI.
   */
  title: string;
  /**
   * Displays a loading indicator when `true`.
   * Set this to `true` when performing an asynchronous task, and then to false when the data becomes available to the UI.
   */
  isLoading?: boolean;
  /**
   * Dictates how the `Screen` will be presented when navigated to.
   */
  presentation?: ScreenPresentationProps;
  /**
   * Displays a secondary action button on the screen.
   */
  secondaryActions?: ComponentChild;
  /**
   * Triggered when the screen is navigated to.
   */
  onNavigate?: () => void;
  /**
   * Triggered when the user navigates back from this screen. Runs after screen is unmounted.
   */
  onNavigateBack?: () => void;
  /**
   * A callback that gets triggered when the navigation event completes and the screen receives the parameters.
   */
  onReceiveParams?: (params: any) => void;
  children?: React.ReactNode;
}
/** Represents the presentation of a screen in the navigation stack.
 * @property `sheet` displays the screen from the bottom on `navigate` when `true`.
 */
interface ScreenPresentationProps {
  /**
   * Displays the screen from the bottom on `navigate` when `true`.
   */
  sheet?: boolean;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$a]: ScreenJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$a]: BaseElementPropsWithChildren<ScreenJSXProps>;
    }
  }
}

declare const tagName$9 = 's-banner';
interface BannerJSXProps
  extends Pick<BannerProps, 'heading' | 'hidden' | 'tone' | 'id'> {
  tone?: Extract<
    BannerProps['tone'],
    'success' | 'info' | 'warning' | 'critical'
  >;
  primaryAction?: ComponentChild;
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$9]: BannerJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$9]: BaseElementPropsWithChildren<
        Omit<BannerJSXProps, 'primaryAction'>
      >;
    }
  }
}

declare const tagName$8 = 's-box';
interface BoxJSXProps
  extends Pick<
    BoxProps,
    | 'id'
    | 'padding'
    | 'paddingBlock'
    | 'paddingBlockStart'
    | 'paddingBlockEnd'
    | 'paddingInline'
    | 'paddingInlineStart'
    | 'paddingInlineEnd'
    | 'blockSize'
    | 'minBlockSize'
    | 'maxBlockSize'
    | 'inlineSize'
    | 'minInlineSize'
    | 'maxInlineSize'
    | 'accessibilityRole'
    | 'accessibilityLabel'
    | 'border'
    | 'borderColor'
    | 'borderRadius'
    | 'borderWidth'
    | 'background'
  > {
  children?: ComponentChildren;
  overflow?: Extract<BoxProps['overflow'], 'hidden' | 'visible'>;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$8]: BoxJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$8]: BaseElementPropsWithChildren<BoxJSXProps>;
    }
  }
}

declare const tagName$7 = 's-icon';
type SupportedIconNames = Extract<
  IconProps['type'],
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'apps'
  | 'analytics'
  | 'backspace'
  | 'call'
  | 'cancel'
  | 'cash'
  | 'checkmark'
  | 'cart'
  | 'cart-filled'
  | 'check'
  | 'check-circle'
  | 'alert-circle'
  | 'info'
  | 'phone'
  | 'edit'
  | 'delete'
  | 'settings'
  | 'search'
  | 'print'
  | 'refresh'
  | 'help'
  | 'plus'
  | 'minus'
  | 'email'
  | 'gift-card'
  | 'discount'
  | 'receipt'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'menu'
  | 'home'
  | 'location'
  | 'time'
  | 'calendar'
  | 'products'
  | 'orders'
  | 'customers'
  | 'collection'
>;
type SupportedSizes = Extract<
  IconProps['size'],
  'small' | 'base' | 'large' | 'large-100'
>;
interface IconJSXProps extends Pick<IconProps, 'tone' | 'color'> {
  /**
   * The type of icon to display. Maps to PDS icon names.
   * @default ''
   */
  type?: SupportedIconNames;
  /**
   * The size of the icon.
   * @default 'base'
   */
  size?: SupportedSizes;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$7]: IconJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$7]: BaseElementProps<IconJSXProps>;
    }
  }
}

declare const tagName$6 = 's-stack';
interface StackJSXProps
  extends Pick<
    StackProps,
    | 'id'
    | 'accessibilityLabel'
    | 'alignItems'
    | 'alignContent'
    | 'gap'
    | 'background'
    | 'blockSize'
    | 'border'
    | 'borderColor'
    | 'borderRadius'
    | 'borderStyle'
    | 'borderWidth'
    | 'columnGap'
    | 'direction'
    | 'inlineSize'
    | 'justifyContent'
    | 'maxBlockSize'
    | 'maxInlineSize'
    | 'minBlockSize'
    | 'minInlineSize'
    | 'overflow'
    | 'padding'
    | 'paddingBlock'
    | 'paddingBlockStart'
    | 'paddingBlockEnd'
    | 'paddingInline'
    | 'paddingInlineStart'
    | 'paddingInlineEnd'
    | 'rowGap'
  > {
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$6]: StackJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$6]: BaseElementPropsWithChildren<StackJSXProps>;
    }
  }
}

declare const tagName$5 = 's-badge';
interface BadgeJSXProps extends Pick<BadgeProps, 'id'> {
  tone?: Extract<
    BadgeProps['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical'
  >;
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$5]: BadgeJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$5]: BaseElementPropsWithChildren<BadgeJSXProps>;
    }
  }
}

declare const tagName$4 = 's-choice-list';
interface ChoiceListJSXProps
  extends Pick<ChoiceListProps, 'values' | 'multiple'> {
  onChange?: ((event: CallbackEvent<typeof tagName$4>) => void) | null;
  onInput?: ((event: CallbackEvent<typeof tagName$4>) => void) | null;
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$4]: ChoiceListJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$4]: BaseElementPropsWithChildren<ChoiceListJSXProps>;
    }
  }
}

declare const tagName$3 = 's-choice';
interface ChoiceJSXProps
  extends Pick<ChoiceProps, 'value' | 'disabled' | 'selected'> {
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$3]: ChoiceJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$3]: BaseElementPropsWithChildren<ChoiceJSXProps>;
    }
  }
}

declare const tagName$2 = 's-modal';
interface ModalJSXProps extends Pick<ModalProps, 'id'> {
  onHide?: (event: CallbackEvent<typeof tagName$2>) => void | null;
  onShow?: (event: CallbackEvent<typeof tagName$2>) => void | null;
  onAfterHide?: (event: CallbackEvent<typeof tagName$2>) => void | null;
  onAfterShow?: (event: CallbackEvent<typeof tagName$2>) => void | null;
  onToggle?: (event: CallbackToggleEvent<typeof tagName$2>) => void | null;
  onAfterToggle?: (event: CallbackToggleEvent<typeof tagName$2>) => void | null;
  children?: ComponentChildren;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$2]: ModalJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$2]: BaseElementPropsWithChildren<ModalJSXProps>;
    }
  }
}

declare const tagName$1 = 's-text-field';
interface TextFieldJSXProps
  extends Pick<TextFieldProps, 'label' | 'details' | 'value' | 'placeholder'> {
  onInput?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$1]: TextFieldJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$1]: BaseElementPropsWithChildren<TextFieldJSXProps>;
    }
  }
}

declare const tagName = 's-search-field';
interface SearchFieldJSXProps
  extends Pick<SearchFieldProps, 'disabled' | 'defaultValue' | 'placeholder'> {
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: SearchFieldJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<SearchFieldJSXProps>;
    }
  }
}

export type {
  BadgeJSXProps,
  BannerJSXProps,
  BoxJSXProps,
  ButtonJSXProps,
  ChoiceJSXProps,
  ChoiceListJSXProps,
  IconJSXProps,
  ModalJSXProps,
  NavigatorJSXProps,
  ScreenJSXProps,
  ScrollBoxJSXProps,
  SearchFieldJSXProps,
  StackJSXProps,
  TextFieldJSXProps,
  TextJSXProps,
  TileJSXProps,
};

interface BannerSlots {
  'primary-action'?: HTMLElement;
}

interface ScreenSlots {
  /**
   * Displays a secondary action button on the screen.
   */
  'secondary-actions'?: HTMLElement;
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$f]: BaseElementPropsWithChildren<ButtonJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$f]: BaseElementPropsWithChildren<ButtonJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$e]: BaseElementPropsWithChildren<TextJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$e]: BaseElementPropsWithChildren<TextJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$d]: BaseElementPropsWithChildren<ScrollBoxJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$d]: BaseElementPropsWithChildren<ScrollBoxJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$c]: BaseElementPropsWithChildren<TileJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$c]: BaseElementPropsWithChildren<TileJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$b]: BaseElementPropsWithChildren<NavigatorJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$b]: BaseElementPropsWithChildren<NavigatorJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$a]: BaseElementPropsWithChildren<ScreenJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$a]: BaseElementPropsWithChildren<ScreenJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$9]: BaseElementPropsWithChildren<
        Omit<BannerJSXProps, 'primaryAction'>
      >;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$9]: BaseElementPropsWithChildren<
        Omit<BannerJSXProps, 'primaryAction'>
      >;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$8]: BaseElementPropsWithChildren<BoxJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$8]: BaseElementPropsWithChildren<BoxJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$7]: BaseElementProps<IconJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$7]: BaseElementProps<IconJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$6]: BaseElementPropsWithChildren<StackJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$6]: BaseElementPropsWithChildren<StackJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$5]: BaseElementPropsWithChildren<BadgeJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$5]: BaseElementPropsWithChildren<BadgeJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$4]: BaseElementPropsWithChildren<ChoiceListJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$4]: BaseElementPropsWithChildren<ChoiceListJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$3]: BaseElementPropsWithChildren<ChoiceJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$3]: BaseElementPropsWithChildren<ChoiceJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$2]: BaseElementPropsWithChildren<ModalJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$2]: BaseElementPropsWithChildren<ModalJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$1]: BaseElementPropsWithChildren<TextFieldJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName$1]: BaseElementPropsWithChildren<TextFieldJSXProps>;
    }
  }
}
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<SearchFieldJSXProps>;
    }
  }
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<SearchFieldJSXProps>;
    }
  }
}
