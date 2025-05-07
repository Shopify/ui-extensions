/** VERSION: 0.51.1 **/
/* eslint-disable import/extensions */
 
/* eslint-disable @typescript-eslint/no-namespace */
 
 
 
 
 
 
 
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {BoxProps$1, GridProps$1,MaybeAllValuesShorthandProperty,ComponentChild} from './shared.d.ts';

export type MakeResponsive<T> = T | `@container${string}`;
/**
 * Makes a property's value potentially responsive.
 *
 * @example
 * type Example = {
 *   color: boolean;
 *   margin: string;
 *   padding: number;
 * }
 * type Result = MakeResponsivePick<Example, 'color' | 'margin' | 'padding'>;
 * // Result = {
 *   color: boolean | `@container${string}`;
 *   margin: string | `@container${string}`;
 *   padding: number | `@container${string}`;
 * }
 */
export type MakeResponsivePick<TType, TProperty extends keyof TType> = {
    [P in TProperty]: MakeResponsive<TType[P]>;
};

export type RequiredBoxProps = Required<BoxProps$1>;
export type BoxBorderRadii = Extract<RequiredBoxProps['borderRadius'], 'none' | 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200'>;
export type BoxBorderStyles = Extract<RequiredBoxProps['borderStyle'], 'none' | 'solid' | 'dashed' | 'auto'>;
export interface BoxProps extends Pick<RequiredBoxProps, 'accessibilityLabel' | 'accessibilityRole' | 'accessibilityVisibility' | 'background' | 'blockSize' | 'border' | 'borderColor' | 'borderRadius' | 'borderStyle' | 'borderWidth' | 'display' | 'inlineSize' | 'maxBlockSize' | 'maxInlineSize' | 'minBlockSize' | 'minInlineSize' | 'overflow'>, MakeResponsivePick<RequiredBoxProps, 'padding' | 'paddingBlock' | 'paddingBlockStart' | 'paddingBlockEnd' | 'paddingInline' | 'paddingInlineStart' | 'paddingInlineEnd'> {
    background: Extract<RequiredBoxProps['background'], 'transparent' | 'base' | 'subdued' | 'strong'>;
    borderWidth: MaybeAllValuesShorthandProperty<Extract<RequiredBoxProps['borderWidth'], 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'none'>> | Extract<RequiredBoxProps['borderWidth'], ''>;
    borderStyle: MaybeAllValuesShorthandProperty<BoxBorderStyles> | Extract<RequiredBoxProps['borderStyle'], ''>;
    borderColor: Extract<RequiredBoxProps['borderColor'], 'subdued' | 'base' | 'strong' | ''>;
    borderRadius: MaybeAllValuesShorthandProperty<BoxBorderRadii>;
}

export type RequiredAlignedProps = Required<GridProps$1>;
export interface GridProps extends BoxProps, Required<Pick<GridProps$1, 'gridTemplateColumns' | 'gridTemplateRows' | 'alignItems' | 'justifyItems' | 'placeItems' | 'alignContent' | 'justifyContent' | 'placeContent'>>, MakeResponsivePick<RequiredAlignedProps, 'rowGap' | 'columnGap' | 'gap'> {
}

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
    constructor({ styles, ShadowRoot: renderFunction, delegatesFocus, ...options }: RenderImpl);
    /** @private */
    setAttribute(name: string, value: string): void;
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
    click({ sourceEvent }?: ClickOptions): void;
}

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
        [tagName]: Grid;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: Omit<HTMLAttributes<HTMLElement>, Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>> & GridJSXProps;
        }
    }
}

declare const tagName = "s-grid";
export interface GridJSXProps extends Partial<GridProps>, Pick<GridProps$1, 'id'> {
}

export { Grid };
export type { GridJSXProps };
