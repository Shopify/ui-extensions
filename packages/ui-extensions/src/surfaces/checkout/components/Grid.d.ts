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
import type {GridProps$1,MaybeResponsive, MaybeAllValuesShorthandProperty,BorderSizeKeyword, BorderStyleKeyword,AlignContentKeyword, AlignItemsKeyword, JustifyContentKeyword, JustifyItemsKeyword,ColorKeyword} from './components-shared.d.ts';

export type ReducedAlignContentKeyword = Extract<AlignContentKeyword, 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'center' | 'start' | 'end'>;
export type ReducedAlignItemsKeyword = Extract<AlignItemsKeyword, 'normal' | 'stretch' | 'baseline' | 'center' | 'start' | 'end'>;
export type ReducedJustifyContentKeyword = Extract<JustifyContentKeyword, 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'center' | 'start' | 'end'>;
export type ReducedJustifyItemsKeyword = Extract<JustifyItemsKeyword, 'normal' | 'stretch' | 'baseline' | 'center' | 'start' | 'end'>;
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

declare const tagName = "s-grid";
/**
 * The grid component organizes content in a matrix of rows and columns to create responsive page layouts. Use grid to build complex, multi-column layouts that adapt to different screen sizes and maintain consistent alignment.
 *
 * Grid follows the CSS grid layout pattern and supports flexible column configurations, gap spacing, and alignment properties for precise layout control. For simpler linear layouts (horizontal or vertical), use [stack](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/layout-and-structure/stack).
 * @publicDocs
 */
export interface GridElementProps extends Pick<GridProps$1, 'accessibilityLabel' | 'accessibilityRole' | 'accessibilityVisibility' | 'alignContent' | 'alignItems' | 'background' | 'blockSize' | 'border' | 'borderColor' | 'borderRadius' | 'borderStyle' | 'borderWidth' | 'columnGap' | 'display' | 'gap' | 'gridTemplateColumns' | 'gridTemplateRows' | 'id' | 'inlineSize' | 'justifyContent' | 'justifyItems' | 'maxBlockSize' | 'maxInlineSize' | 'minBlockSize' | 'minInlineSize' | 'overflow' | 'padding' | 'paddingBlock' | 'paddingBlockEnd' | 'paddingBlockStart' | 'paddingInline' | 'paddingInlineEnd' | 'paddingInlineStart' | 'placeContent' | 'placeItems' | 'rowGap'> {
    alignContent?: MaybeResponsive<ReducedAlignContentKeyword | ''>;
    alignItems?: MaybeResponsive<ReducedAlignItemsKeyword | ''>;
    background?: Extract<GridProps$1['background'], 'transparent' | 'subdued' | 'base'>;
    border?: BorderShorthand;
    borderColor?: ReducedColorKeyword | '';
    borderWidth?: MaybeAllValuesShorthandProperty<ReducedBorderSizeKeyword> | '';
    borderRadius?: MaybeAllValuesShorthandProperty<Extract<GridProps$1['borderRadius'], 'none' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'max'>>;
    justifyContent?: MaybeResponsive<ReducedJustifyContentKeyword | ''>;
    justifyItems?: MaybeResponsive<ReducedJustifyItemsKeyword | ''>;
    placeContent?: MaybeResponsive<`${ReducedAlignContentKeyword} ${ReducedJustifyContentKeyword}` | ReducedAlignContentKeyword>;
    placeItems?: MaybeResponsive<`${ReducedAlignItemsKeyword} ${ReducedJustifyItemsKeyword}` | ReducedAlignItemsKeyword>;
}
export interface GridElement extends GridElementProps, Omit<HTMLElement, 'id'> {
}
export interface GridProps extends GridElementProps {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: GridElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: GridProps & BaseElementPropsWithChildren<GridElement>;
        }
    }
}

export type { GridElement, GridElementProps, GridProps };
