/** VERSION: 0.0.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {ImageProps$1,BorderSizeKeyword, BorderStyleKeyword,ColorKeyword,MaybeAllValuesShorthandProperty} from './components-shared.d.ts';

export type ReducedBorderSizeKeyword = Extract<BorderSizeKeyword, 'none' | 'base' | 'large' | 'large-100' | 'large-200'>;
export type ReducedColorKeyword = Extract<ColorKeyword, 'base'>;
export type BorderShorthand = ReducedBorderSizeKeyword | `${ReducedBorderSizeKeyword} ${ReducedColorKeyword}` | `${ReducedBorderSizeKeyword} ${ReducedColorKeyword} ${BorderStyleKeyword}`;

export interface ImageProps extends Pick<ImageProps$1, 'accessibilityRole' | 'alt' | 'aspectRatio' | 'border' | 'borderRadius' | 'borderStyle' | 'borderWidth' | 'id' | 'inlineSize' | 'loading' | 'objectFit' | 'sizes' | 'src' | 'srcSet'> {
    border?: BorderShorthand;
    borderWidth?: MaybeAllValuesShorthandProperty<ReducedBorderSizeKeyword> | '';
    borderRadius?: MaybeAllValuesShorthandProperty<Extract<ImageProps$1['borderRadius'], 'none' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'max'>>;
}
export interface ImageElement extends ImageProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-image': ImageElement;
    }
}
declare module 'preact' {
    interface BaseProps {
        slot?: Lowercase<string>;
    }
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-image': ImageProps & BaseProps;
        }
    }
}

export type { ImageElement, ImageProps };
