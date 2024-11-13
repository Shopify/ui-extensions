import type {
  IconProps as IconProps$1,
  BadgeProps as BadgeProps$1,
  BoxProps as BoxProps$1,
  DividerProps as DividerProps$1,
  HeadingProps as HeadingProps$1,
  LinkProps as LinkProps$1,
  StackProps as StackProps$1,
  TextProps as TextProps$1,
} from '@shopify/ui-api-design';
// import type {IconType} from '@shopify/admin-ui-icons';
import type {MaybeAllValuesShorthandProperty} from '@shopify/ui-api-design/dist/shared/utils';

export interface IconProps {
  // type: IconType;
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
  // icon: IconProps['type'] | '';
  size: Extract<BadgeProps$1['size'], 'base' | 'large' | 'large-100'>;
  tone: Extract<
    BadgeProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
}

declare const tagName$7 = 'shopify-badge';

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
 * So we give it a type of HTMLElement to avoid typing issues later where it's used, which will only happen in the browser.
 */
declare const BaseClass: typeof globalThis.HTMLElement;
declare abstract class PreactCustomElement extends BaseClass {
  #private;
  static get observedAttributes(): string[];
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
  // accessor icon: BadgeProps['icon'];
  accessor size: BadgeProps['size'];
  accessor tone: BadgeProps['tone'];
}
declare global {
  export interface HTMLElementTagNameMap {
    [tagName$7]: Badge;
  }
}

export type MakeResponsive<T> = T | `@media${string}`;

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

declare const tagName$6 = 'shopify-box';

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

declare class Box extends BoxElement implements BoxProps {}
declare global {
  export interface HTMLElementTagNameMap {
    [tagName$6]: Box;
  }
}

export interface DividerProps {
  direction: Extract<DividerProps$1['direction'], 'inline' | 'block'>;
  color: Extract<DividerProps$1['color'], 'subdued' | 'base' | 'strong'>;
}

declare const tagName$5 = 'shopify-divider';

declare class Divider extends PreactCustomElement implements DividerProps {
  direction: DividerProps['direction'];
  color: DividerProps['color'];
}
declare global {
  export interface HTMLElementTagNameMap {
    [tagName$5]: Divider;
  }
}

export type RequiredHeadingProps = Required<HeadingProps$1>;
export interface HeadingProps {
  accessibilityRole: RequiredHeadingProps['accessibilityRole'];
  accessibilityVisibility: RequiredHeadingProps['accessibilityVisibility'];
  lineClamp: RequiredHeadingProps['lineClamp'];
}

declare const tagName$4 = 'shopify-heading';

declare class Heading extends PreactCustomElement implements HeadingProps {
  accessor accessibilityRole: HeadingProps['accessibilityRole'];
  accessor lineClamp: HeadingProps['lineClamp'];
  accessor accessibilityVisibility: HeadingProps['accessibilityVisibility'];
}
declare global {
  export interface HTMLElementTagNameMap {
    [tagName$4]: Heading;
  }
}

declare const tagName$3 = 'shopify-icon';

declare class Icon extends PreactCustomElement implements IconProps {
  accessor color: IconProps['color'];
  accessor tone: IconProps['tone'];
  accessor type: IconProps['type'];
  accessor size: IconProps['size'];
}
declare global {
  export interface HTMLElementTagNameMap {
    [tagName$3]: Icon;
  }
}

export type RequiredLinkProps = Required<LinkProps$1>;
export interface LinkProps {
  tone: Extract<RequiredLinkProps['tone'], 'auto' | 'neutral' | 'critical'>;
  accessibilityLabel: RequiredLinkProps['accessibilityLabel'];
  href: RequiredLinkProps['href'];
  target: RequiredLinkProps['target'];
}

declare const tagName$2 = 'shopify-link';

declare class Link extends PreactCustomElement implements LinkProps {
  accessor tone: LinkProps['tone'];
  accessor accessibilityLabel: LinkProps['accessibilityLabel'];
  accessor href: LinkProps['href'];
  accessor target: LinkProps['target'];
}
declare global {
  export interface HTMLElementTagNameMap {
    [tagName$2]: Link;
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
  export interface HTMLElementTagNameMap {
    [tagName$1]: Stack;
  }
}

export interface TextProps
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
  display: TextProps['display'];
  fontVariantNumeric: TextProps['fontVariantNumeric'];
  color: TextProps['color'];
  tone: TextProps['tone'];
  type: TextProps['type'];
  accessibilityVisibility: TextProps['accessibilityVisibility'];
}
declare global {
  export interface HTMLElementTagNameMap {
    [tagName]: Text;
  }
}

export {Badge, Box, Divider, Heading, Icon, Link, Stack, Text};
