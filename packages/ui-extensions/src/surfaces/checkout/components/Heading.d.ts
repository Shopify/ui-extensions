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
import type {HeadingProps$1} from './components-shared.d.ts';

export interface HeadingProps extends Pick<HeadingProps$1, 'accessibilityRole' | 'id'> {
}
export interface HeadingElement extends HeadingProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-heading': HeadingElement;
    }
}
declare module 'preact' {
    interface BaseProps {
        children?: preact.ComponentChildren;
        slot?: Lowercase<string>;
    }
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-heading': HeadingProps & BaseProps;
        }
    }
}

export type { HeadingElement, HeadingProps };
