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
import type {AbbreviationProps$1} from './components-shared.d.ts';

export interface AbbreviationProps extends Pick<AbbreviationProps$1, 'title'> {
}
export interface AbbreviationElement extends AbbreviationProps, Omit<HTMLElement, 'id' | 'title'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-abbreviation': AbbreviationElement;
    }
}
declare module 'preact' {
    interface BaseProps {
        children?: preact.ComponentChildren;
        slot?: Lowercase<string>;
    }
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-abbreviation': AbbreviationProps & BaseProps;
        }
    }
}

export type { AbbreviationElement, AbbreviationProps };
