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
import type {GridItemProps$1,BorderSizeKeyword, BorderStyleKeyword,ColorKeyword,MaybeAllValuesShorthandProperty} from './components-shared.d.ts';

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

declare const tagName = "s-grid-item";
/**
 * The grid item component represents a single cell within a grid layout, allowing you to control how content is positioned and sized within the grid. Use grid item as a child of grid to specify column span, row span, and positioning for individual content areas.
 *
 * Grid item supports precise placement control through column and row properties, enabling you to create complex layouts where different items occupy varying amounts of space or appear in specific grid positions.
 * @publicDocs
 */
export interface GridItemElementProps extends Pick<GridItemProps$1, 'accessibilityLabel' | 'accessibilityRole' | 'accessibilityVisibility' | 'background' | 'blockSize' | 'border' | 'borderColor' | 'borderRadius' | 'borderStyle' | 'borderWidth' | 'display' | 'gridColumn' | 'gridRow' | 'id' | 'inlineSize' | 'maxBlockSize' | 'maxInlineSize' | 'minBlockSize' | 'minInlineSize' | 'overflow' | 'padding' | 'paddingBlock' | 'paddingBlockEnd' | 'paddingBlockStart' | 'paddingInline' | 'paddingInlineEnd' | 'paddingInlineStart'> {
    background?: Extract<GridItemProps$1['background'], 'transparent' | 'subdued' | 'base'>;
    border?: BorderShorthand;
    borderColor?: ReducedColorKeyword | '';
    borderWidth?: MaybeAllValuesShorthandProperty<ReducedBorderSizeKeyword> | '';
    borderRadius?: MaybeAllValuesShorthandProperty<Extract<GridItemProps$1['borderRadius'], 'none' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'max'>>;
}
export interface GridItemElement extends GridItemElementProps, Omit<HTMLElement, 'id'> {
}
export interface GridItemProps extends GridItemElementProps {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: GridItemElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: GridItemProps & BaseElementPropsWithChildren<GridItemElement>;
        }
    }
}

export type { GridItemElement, GridItemElementProps, GridItemProps };
