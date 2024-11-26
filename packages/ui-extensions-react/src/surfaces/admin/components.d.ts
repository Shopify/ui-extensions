import { TextProps as TextProps$2, BoxProps as BoxProps$2, StackProps as StackProps$2, SpinnerProps as SpinnerProps$2, TextFieldProps, SelectProps as SelectProps$1, SectionProps as SectionProps$2, ParagraphProps as ParagraphProps$2, OptionGroupProps as OptionGroupProps$1, OptionProps as OptionProps$1, LinkProps as LinkProps$2, ImageProps as ImageProps$2, IconProps as IconProps$2, HeadingProps as HeadingProps$2, DividerProps as DividerProps$2, CheckboxProps as CheckboxProps$2, ButtonProps as ButtonProps$2, BadgeProps as BadgeProps$2 } from '@shopify/ui-api-design';
import { ComponentChild } from 'preact';
import { MaybeAllValuesShorthandProperty } from '@shopify/ui-api-design/dist/shared/utils';
import { IconType } from '@shopify/admin-ui-icons';
import { InteractionProps } from '@shopify/ui-api-design/dist/shared/pressable';
import * as React from 'react';

interface TextProps$1 extends Required<Pick<TextProps$2, 'display' | 'accessibilityVisibility'>> {
    color: Extract<TextProps$2['color'], 'base' | 'subdued'>;
    type: Extract<TextProps$2['type'], 'address' | 'redundant' | 'strong' | 'generic' | 'emphasis'>;
    tone: Extract<TextProps$2['tone'], 'auto' | 'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'caution'>;
    fontVariantNumeric: Extract<TextProps$2['fontVariantNumeric'], 'auto' | 'normal' | 'tabular-nums'>;
}

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
    constructor({ styles, ShadowRoot: renderFunction, delegatesFocus, ...options }: RenderImpl);
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
    click({ sourceEvent }?: ClickOptions): void;
}

declare class Text$1 extends PreactCustomElement implements TextProps$1 {
    accessor display: TextProps$1['display'];
    accessor fontVariantNumeric: TextProps$1['fontVariantNumeric'];
    accessor color: TextProps$1['color'];
    accessor tone: TextProps$1['tone'];
    accessor type: TextProps$1['type'];
    accessor accessibilityVisibility: TextProps$1['accessibilityVisibility'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$g]: Text$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$g]: HTMLAttributes<HTMLElement> & ReactProps$g;
        }
    }
}

declare const tagName$g = "shopify-text";
interface ReactProps$g extends Partial<TextProps$1>, Pick<TextProps$2, 'id'> {
}

type MakeResponsive<T> = T | `@media${string}`;

type AlignedBox = Required<BoxProps$2>;
interface BoxProps$1 {
    accessibilityRole: AlignedBox['accessibilityRole'];
    background: Extract<AlignedBox['background'], 'transparent' | 'base' | 'subdued' | 'strong'>;
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
    borderWidth: MaybeAllValuesShorthandProperty<Extract<AlignedBox['borderWidth'], 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200'>>;
    borderStyle: MaybeAllValuesShorthandProperty<Extract<AlignedBox['borderStyle'], 'none' | 'solid' | 'dashed'>>;
    borderRadius: MaybeAllValuesShorthandProperty<Extract<AlignedBox['borderRadius'], 'none' | 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200'>>;
    borderColor: Extract<AlignedBox['borderColor'], 'subdued' | 'base' | 'strong'>;
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

declare class BoxElement extends PreactCustomElement implements BoxProps$1 {
    constructor(renderImpl: RenderImpl);
    accessor accessibilityRole: BoxProps$1['accessibilityRole'];
    accessor background: BoxProps$1['background'];
    accessor blockSize: BoxProps$1['blockSize'];
    accessor minBlockSize: BoxProps$1['minBlockSize'];
    accessor maxBlockSize: BoxProps$1['maxBlockSize'];
    accessor inlineSize: BoxProps$1['inlineSize'];
    accessor minInlineSize: BoxProps$1['minInlineSize'];
    accessor maxInlineSize: BoxProps$1['maxInlineSize'];
    accessor padding: BoxProps$1['padding'];
    accessor paddingBlock: BoxProps$1['paddingBlock'];
    accessor paddingBlockStart: BoxProps$1['paddingBlockStart'];
    accessor paddingBlockEnd: BoxProps$1['paddingBlockEnd'];
    accessor paddingInline: BoxProps$1['paddingInline'];
    accessor paddingInlineStart: BoxProps$1['paddingInlineStart'];
    accessor paddingInlineEnd: BoxProps$1['paddingInlineEnd'];
    accessor borderWidth: BoxProps$1['borderWidth'];
    accessor borderStyle: BoxProps$1['borderStyle'];
    accessor borderRadius: BoxProps$1['borderRadius'];
    accessor borderColor: BoxProps$1['borderColor'];
    accessor accessibilityLabel: BoxProps$1['accessibilityLabel'];
    accessor accessibilityVisibility: BoxProps$1['accessibilityVisibility'];
    accessor display: BoxProps$1['display'];
}

declare class Stack$1 extends BoxElement implements StackProps$1 {
    constructor();
    accessor direction: StackProps$1['direction'];
    accessor justifyContent: StackProps$1['justifyContent'];
    accessor alignItems: StackProps$1['alignItems'];
    accessor alignContent: StackProps$1['alignContent'];
    accessor gap: StackProps$1['gap'];
    accessor rowGap: StackProps$1['rowGap'];
    accessor columnGap: StackProps$1['columnGap'];
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$f]: Stack$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$f]: HTMLAttributes<HTMLElement> & ReactProps$f;
        }
    }
}

declare const tagName$f = "shopify-stack";
interface ReactProps$f extends Partial<StackProps$1>, Pick<StackProps$2, 'id'> {
}

interface SpinnerProps$1 extends Required<Pick<SpinnerProps$2, 'accessibilityLabel'>> {
    /**
     * The size of the component.
     *
     * @default 'base'
     */
    size: Extract<SpinnerProps$2['size'], 'large' | 'large-100' | 'base'>;
}

declare class Spinner$1 extends PreactCustomElement implements SpinnerProps$1 {
    accessor accessibilityLabel: string;
    accessor size: SpinnerProps$1['size'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$e]: Spinner$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$e]: HTMLAttributes<HTMLElement> & ReactProps$e;
        }
    }
}

declare const tagName$e = "shopify-spinner";
interface ReactProps$e extends Partial<SpinnerProps$1>, Pick<SpinnerProps$2, 'id'> {
}

type InputBaseProps = Required<Pick<TextFieldProps, 'disabled' | 'error' | 'label' | 'name' | 'placeholder' | 'readOnly' | 'required' | 'value' | 'id'>> & {
    defaultValue: string;
};
type InputReactProps = Pick<TextFieldProps, 'onChange' | 'onFocus' | 'onInput' | 'onBlur'>;

declare const internals: unique symbol;
declare class PreactInputElement extends PreactCustomElement implements Pick<InputBaseProps, 'defaultValue' | 'disabled' | 'error' | 'label' | 'name' | 'required' | 'value'> {
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

declare class PreactInputFieldElement extends PreactInputElement implements InputBaseProps {
    accessor placeholder: InputBaseProps['placeholder'];
    accessor readOnly: InputBaseProps['readOnly'];
    constructor(renderImpl: RenderImpl);
}

interface SharedProps$3 extends Pick<SelectProps$1, 'disabled' | 'error' | 'label' | 'name' | 'placeholder' | 'required' | 'value'> {
}
declare class Select$1 extends PreactInputFieldElement implements SharedProps$3 {
    #private;
    connectedCallback(): void;
    disconnectedCallback(): void;
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$d]: Select$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$d]: HTMLAttributes<HTMLElement> & ReactProps$d;
        }
    }
}

declare const tagName$d = "shopify-select";
interface ReactProps$d extends Partial<SharedProps$3 & InputReactProps> {
}

type RequiredSectionProps = Required<SectionProps$2>;
interface SectionProps$1 {
    accessibilityLabel: RequiredSectionProps['accessibilityLabel'];
    heading: RequiredSectionProps['heading'];
    padding: RequiredSectionProps['padding'];
}

declare class Section$1 extends PreactCustomElement implements SectionProps$1 {
    #private;
    constructor();
    connectedCallback(): void;
    accessor accessibilityLabel: SectionProps$1['accessibilityLabel'];
    accessor heading: SectionProps$1['heading'];
    accessor padding: SectionProps$1['padding'];
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$c]: Section$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$c]: HTMLAttributes<HTMLElement> & ReactProps$c;
        }
    }
}

declare const tagName$c = "shopify-section";
interface ReactProps$c extends Partial<SectionProps$1>, Pick<SectionProps$2, 'id'> {
}

interface ParagraphProps$1 extends Required<Pick<ParagraphProps$2, 'lineClamp' | 'accessibilityVisibility' | 'fontVariantNumeric' | 'tone'>> {
    color: Extract<ParagraphProps$2['color'], 'base' | 'subdued'>;
}

declare class Paragraph$1 extends PreactCustomElement implements ParagraphProps$1 {
    accessor fontVariantNumeric: ParagraphProps$1['fontVariantNumeric'];
    accessor lineClamp: ParagraphProps$1['lineClamp'];
    accessor tone: ParagraphProps$1['tone'];
    accessor color: ParagraphProps$1['color'];
    accessor accessibilityVisibility: ParagraphProps$1['accessibilityVisibility'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$b]: Paragraph$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$b]: HTMLAttributes<HTMLElement> & ReactProps$b;
        }
    }
}

declare const tagName$b = "shopify-paragraph";
interface ReactProps$b extends Partial<ParagraphProps$1>, Pick<ParagraphProps$2, 'id'> {
}

interface SharedProps$2 extends Required<Pick<OptionGroupProps$1, 'disabled' | 'label'>> {
}
declare class OptionGroup$1 extends PreactCustomElement implements SharedProps$2 {
    accessor disabled: SharedProps$2['disabled'];
    accessor label: SharedProps$2['label'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$a]: OptionGroup$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$a]: HTMLAttributes<HTMLElement> & ReactProps$a;
        }
    }
}

declare const tagName$a = "shopify-option-group";
interface ReactProps$a extends Partial<SharedProps$2> {
}

interface SharedProps$1 extends Required<Pick<OptionProps$1, 'disabled' | 'value'>> {
}
declare class Option$1 extends PreactCustomElement implements SharedProps$1 {
    accessor value: SharedProps$1['value'];
    accessor disabled: SharedProps$1['disabled'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$9]: Option$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$9]: HTMLAttributes<HTMLElement> & ReactProps$9;
        }
    }
}

declare const tagName$9 = "shopify-option";
interface ReactProps$9 extends Partial<SharedProps$1> {
}

type RequiredLinkProps = Required<LinkProps$2>;
interface LinkProps$1 {
    tone: Extract<RequiredLinkProps['tone'], 'auto' | 'neutral' | 'critical'>;
    accessibilityLabel: RequiredLinkProps['accessibilityLabel'];
    href: RequiredLinkProps['href'];
    target: RequiredLinkProps['target'];
}

declare class Link$1 extends PreactCustomElement implements LinkProps$1 {
    accessor tone: LinkProps$1['tone'];
    accessor accessibilityLabel: LinkProps$1['accessibilityLabel'];
    accessor href: LinkProps$1['href'];
    accessor target: LinkProps$1['target'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$8]: Link$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$8]: HTMLAttributes<HTMLElement> & ReactProps$8;
        }
    }
}

declare const tagName$8 = "shopify-link";
interface ReactProps$8 extends Partial<LinkProps$1>, Pick<LinkProps$2, 'onClick' | 'id' | 'lang'> {
}

interface ImageProps$1 {
    accessibilityRole: Extract<ImageProps$2['accessibilityRole'], 'img' | 'presentation' | 'none'>;
    alt: NonNullable<ImageProps$2['alt']>;
    loading: Extract<ImageProps$2['loading'], 'eager' | 'lazy'>;
    src: NonNullable<ImageProps$2['src']>;
}

declare class Image$1 extends PreactCustomElement implements ImageProps$1 {
    accessor src: ImageProps$1['src'];
    accessor alt: ImageProps$1['alt'];
    accessor loading: ImageProps$1['loading'];
    accessor accessibilityRole: ImageProps$1['accessibilityRole'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$7]: Image$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$7]: HTMLAttributes<HTMLElement> & ReactProps$7;
        }
    }
}

declare const tagName$7 = "shopify-image";
interface ReactProps$7 extends Partial<ImageProps$1>, Pick<ImageProps$2, 'onError' | 'onLoad' | 'id'> {
}

interface IconProps$1 {
    type: '' | IconType;
    tone: Extract<IconProps$2['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'>;
    color: Extract<IconProps$2['color'], 'base' | 'subdued'>;
    size: Extract<IconProps$2['size'], 'small' | 'base'>;
}

declare class Icon$1 extends PreactCustomElement implements IconProps$1 {
    accessor color: IconProps$1['color'];
    accessor tone: IconProps$1['tone'];
    accessor type: IconProps$1['type'];
    accessor size: IconProps$1['size'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$6]: Icon$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$6]: Omit<HTMLAttributes<HTMLElement>, 'size'> & ReactProps$6;
        }
    }
}

declare const tagName$6 = "shopify-icon";
interface ReactProps$6 extends Partial<IconProps$1>, Pick<IconProps$2, 'id'> {
}

type RequiredHeadingProps = Required<HeadingProps$2>;
interface HeadingProps$1 {
    accessibilityRole: RequiredHeadingProps['accessibilityRole'];
    accessibilityVisibility: RequiredHeadingProps['accessibilityVisibility'];
    lineClamp: RequiredHeadingProps['lineClamp'];
}

declare class Heading$1 extends PreactCustomElement implements HeadingProps$1 {
    accessor accessibilityRole: HeadingProps$1['accessibilityRole'];
    accessor lineClamp: HeadingProps$1['lineClamp'];
    accessor accessibilityVisibility: HeadingProps$1['accessibilityVisibility'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$5]: Heading$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$5]: HTMLAttributes<HTMLElement> & ReactProps$5;
        }
    }
}

declare const tagName$5 = "shopify-heading";
interface ReactProps$5 extends Partial<HeadingProps$1>, Pick<HeadingProps$2, 'id'> {
}

interface DividerProps$1 {
    direction: Extract<DividerProps$2['direction'], 'inline' | 'block'>;
    color: Extract<DividerProps$2['color'], 'subdued' | 'base' | 'strong'>;
}

declare class Divider$1 extends PreactCustomElement implements DividerProps$1 {
    accessor direction: DividerProps$1['direction'];
    accessor color: DividerProps$1['color'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$4]: Divider$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$4]: HTMLAttributes<HTMLElement> & ReactProps$4;
        }
    }
}

declare const tagName$4 = "shopify-divider";
interface ReactProps$4 extends Partial<DividerProps$1>, Pick<DividerProps$2, 'id'> {
}

interface CheckboxProps$1 extends Required<Pick<CheckboxProps$2, 'accessibilityLabel' | 'checked' | 'details' | 'disabled' | 'error' | 'id' | 'indeterminate' | 'label' | 'name' | 'required' | 'value'>> {
}

declare class Checkbox$1 extends PreactInputElement implements CheckboxProps$1 {
    #private;
    accessor indeterminate: CheckboxProps$1['indeterminate'];
    get checked(): boolean;
    set checked(checked: CheckboxProps$1['checked']);
    accessor details: CheckboxProps$1['details'];
    accessor accessibilityLabel: CheckboxProps$1['accessibilityLabel'];
    get value(): string;
    set value(value: string);
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$3]: Checkbox$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$3]: HTMLAttributes<HTMLElement> & ReactProps$3;
        }
    }
}

declare const tagName$3 = "shopify-checkbox";
interface ReactProps$3 extends Partial<CheckboxProps$1>, Pick<CheckboxProps$2, 'id' | 'onChange'> {
}

type ButtonOnlyProps = Extract<ButtonProps$2, {
    type?: unknown;
}>;
type ButtonBaseProps = Required<Pick<ButtonOnlyProps, 'accessibilityLabel' | 'disabled' | 'activateAction' | 'activateTarget' | 'lang' | 'loading' | 'type' | 'variant' | 'target' | 'href' | 'download'>>;
interface ButtonProps$1 extends ButtonBaseProps {
    tone: Extract<ButtonProps$2['tone'], 'neutral' | 'critical' | 'auto'>;
    icon: IconProps$1['type'];
}

interface SharedProps extends Required<Pick<InteractionProps, 'activateTarget'>> {
    activateAction: Extract<InteractionProps['activateAction'], 'show' | 'hide' | 'toggle' | 'auto'>;
}
declare class PreactOverlayControl extends PreactCustomElement implements SharedProps {
    accessor activateTarget: SharedProps['activateTarget'];
    accessor activateAction: SharedProps['activateAction'];
    constructor(renderImpl: RenderImpl);
}

declare class Button$1 extends PreactOverlayControl implements ButtonProps$1 {
    accessor disabled: ButtonProps$1['disabled'];
    accessor icon: ButtonProps$1['icon'];
    accessor loading: ButtonProps$1['loading'];
    accessor variant: ButtonProps$1['variant'];
    accessor tone: ButtonProps$1['tone'];
    accessor lang: ButtonProps$1['lang'];
    accessor target: ButtonProps$1['target'];
    accessor href: ButtonProps$1['href'];
    accessor download: ButtonProps$1['download'];
    accessor onclick: EventListener | null;
    accessor onblur: EventListener | null;
    accessor onfocus: EventListener | null;
    accessor type: ButtonProps$1['type'];
    accessor accessibilityLabel: ButtonProps$1['accessibilityLabel'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$2]: Button$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$2]: HTMLAttributes<HTMLElement> & ReactProps$2;
        }
    }
}

declare const tagName$2 = "shopify-button";
interface ReactProps$2 extends Partial<ButtonProps$1>, Pick<ButtonProps$2, 'onClick' | 'onFocus' | 'onBlur' | 'id'> {
}

declare class Box$1 extends BoxElement implements BoxProps$1 {
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName$1]: Box$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName$1]: HTMLAttributes<HTMLElement> & ReactProps$1;
        }
    }
}

declare const tagName$1 = "shopify-box";
interface ReactProps$1 extends Partial<BoxProps$1>, Pick<BoxProps$2, 'id'> {
}

interface BadgeProps$1 {
    accessibilityLabel: NonNullable<BadgeProps$2['accessibilityLabel']>;
    color: Extract<BadgeProps$2['color'], 'base' | 'strong'>;
    icon: IconProps$1['type'] | '';
    size: Extract<BadgeProps$2['size'], 'base' | 'large' | 'large-100'>;
    tone: Extract<BadgeProps$2['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'>;
}

declare class Badge$1 extends PreactCustomElement implements BadgeProps$1 {
    accessor accessibilityLabel: BadgeProps$1['accessibilityLabel'];
    accessor color: BadgeProps$1['color'];
    accessor icon: BadgeProps$1['icon'];
    accessor size: BadgeProps$1['size'];
    accessor tone: BadgeProps$1['tone'];
    constructor();
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: Badge$1;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: HTMLAttributes<HTMLElement> & ReactProps;
        }
    }
}

declare const tagName = "shopify-badge";
interface ReactProps extends Partial<BadgeProps$1>, Pick<BadgeProps$2, 'id'> {
}

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

declare const Button: React.ComponentType<React.PropsWithChildren<ReactProps$2>>;

declare const Checkbox: React.ComponentType<React.PropsWithChildren<ReactProps$3>>;

declare const Divider: React.ComponentType<React.PropsWithChildren<ReactProps$4>>;

declare const Heading: React.ComponentType<React.PropsWithChildren<ReactProps$5>>;

declare const Icon: React.ComponentType<React.PropsWithChildren<ReactProps$6>>;

declare const Image: React.ComponentType<React.PropsWithChildren<ReactProps$7>>;

declare const Link: React.ComponentType<React.PropsWithChildren<ReactProps$8>>;

declare const Option: React.ComponentType<React.PropsWithChildren<ReactProps$9>>;

declare const OptionGroup: React.ComponentType<React.PropsWithChildren<ReactProps$a>>;

declare const Paragraph: React.ComponentType<React.PropsWithChildren<ReactProps$b>>;

declare const Section: React.ComponentType<React.PropsWithChildren<ReactProps$c>>;

declare const Select: React.ComponentType<React.PropsWithChildren<ReactProps$d>>;

declare const Spinner: React.ComponentType<React.PropsWithChildren<ReactProps$e>>;

declare const Stack: React.ComponentType<React.PropsWithChildren<ReactProps$f>>;

declare const Text: React.ComponentType<React.PropsWithChildren<ReactProps$g>>;

export { Badge, type BadgeProps, Box, type BoxProps, Button, type ButtonProps, Checkbox, type CheckboxProps, Divider, type DividerProps, Heading, type HeadingProps, Icon, type IconProps, Image, type ImageProps, Link, type LinkProps, Option, OptionGroup, type OptionGroupProps, type OptionProps, Paragraph, type ParagraphProps, Section, type SectionProps, Select, type SelectProps, Spinner, type SpinnerProps, Stack, type StackProps, Text, type TextProps };
