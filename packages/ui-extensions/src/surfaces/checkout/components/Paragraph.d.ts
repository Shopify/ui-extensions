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
import type {ParagraphProps$1} from './components-shared.d.ts';

export interface ParagraphProps extends Pick<ParagraphProps$1, 'accessibilityVisibility' | 'color' | 'dir' | 'id' | 'lang' | 'tone' | 'type'> {
    color?: Extract<ParagraphProps$1['color'], 'subdued' | 'base'>;
    tone?: Extract<ParagraphProps$1['tone'], 'auto' | 'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'custom'>;
}
export interface ParagraphElement extends ParagraphProps, Omit<HTMLElement, 'id' | 'dir' | 'lang'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-paragraph': ParagraphElement;
    }
}
declare module 'preact' {
    interface BaseProps {
        children?: preact.ComponentChildren;
        slot?: Lowercase<string>;
    }
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-paragraph': ParagraphProps & BaseProps;
        }
    }
}

export type { ParagraphElement, ParagraphProps };
