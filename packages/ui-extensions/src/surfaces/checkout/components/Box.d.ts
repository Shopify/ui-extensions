/** VERSION: 0.0.0 **/
/* eslint-disable import-x/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import-x/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {BoxProps$1,MaybeAllValuesShorthandProperty,BorderSizeKeyword, BorderStyleKeyword,ColorKeyword} from './components-shared.d.ts';

/**
 * The subset of border size values available for this component.
 *
 * - `base`: Standard border width.
 * - `large`: Thick border for strong emphasis.
 * - `large-100`: Extra thick border for maximum prominence.
 * - `large-200`: The thickest available border.
 * - `none`: No border.
 */
export type ReducedBorderSizeKeyword = Extract<BorderSizeKeyword, 'none' | 'base' | 'large' | 'large-100' | 'large-200'>;
/**
 * The subset of border color values available for this component.
 *
 * - `base`: The standard border color for most contexts.
 */
export type ReducedColorKeyword = Extract<ColorKeyword, 'base'>;
export type BorderShorthand = ReducedBorderSizeKeyword | `${ReducedBorderSizeKeyword} ${ReducedColorKeyword}` | `${ReducedBorderSizeKeyword} ${ReducedColorKeyword} ${BorderStyleKeyword}`;
/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement> extends BaseElementProps<TClass> {
    children?: preact.ComponentChildren;
}

declare const tagName = "s-box";
/**
 * The box component provides a generic, flexible container for custom designs and layouts. Use box to apply styling like backgrounds, padding, borders, or border radius when existing components don't meet your needs, or to nest and group other components.
 *
 * Box contents maintain their natural size, making it especially useful within layout components that would otherwise stretch their children. For structured layouts, use [stack](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/layout-and-structure/stack) or [grid](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/layout-and-structure/grid).
 * @publicDocs
 */
export interface BoxProps extends Pick<BoxProps$1, 'accessibilityLabel' | 'accessibilityRole' | 'accessibilityVisibility' | 'background' | 'blockSize' | 'border' | 'borderRadius' | 'borderStyle' | 'borderWidth' | 'display' | 'id' | 'inlineSize' | 'maxBlockSize' | 'maxInlineSize' | 'minBlockSize' | 'minInlineSize' | 'overflow' | 'padding' | 'paddingBlock' | 'paddingBlockEnd' | 'paddingBlockStart' | 'paddingInline' | 'paddingInlineEnd' | 'paddingInlineStart'> {
    background?: Extract<BoxProps$1['background'], 'transparent' | 'subdued' | 'base'>;
    border?: BorderShorthand;
    borderWidth?: MaybeAllValuesShorthandProperty<ReducedBorderSizeKeyword> | '';
    borderRadius?: MaybeAllValuesShorthandProperty<Extract<BoxProps$1['borderRadius'], 'none' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'max'>>;
}
export interface BoxElement extends BoxProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: BoxElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: BoxProps & BaseElementPropsWithChildren<BoxElement>;
        }
    }
}

export type { BoxElement, BoxProps };
