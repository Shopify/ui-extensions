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
import type {SectionProps$1} from './components-shared.d.ts';

export interface SectionProps extends Pick<SectionProps$1, 'accessibilityLabel' | 'heading' | 'id'> {
}
export interface SectionElement extends SectionProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-section': SectionElement;
    }
}
declare module 'preact' {
    interface BaseProps {
        children?: preact.ComponentChildren;
        slot?: Lowercase<string>;
    }
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-section': SectionProps & BaseProps;
        }
    }
}

export type { SectionElement, SectionProps };
