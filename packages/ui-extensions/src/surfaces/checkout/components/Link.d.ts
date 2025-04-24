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
import type {LinkProps$1} from './components-shared.d.ts';

export interface LinkProps extends Omit<LinkProps$1, 'children' | 'download' | 'onBlur' | 'onFocus' | 'target' | 'tone'> {
    target?: Extract<LinkProps$1['target'], 'auto' | '_self' | '_blank'>;
    tone?: Extract<LinkProps$1['tone'], 'auto' | 'neutral'>;
}
export interface LinkElement extends Omit<LinkProps, 'onClick'>, Omit<HTMLElement, 'id' | 'lang' | 'onclick'> {
    onclick: LinkProps['onClick'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-link': LinkElement;
    }
}

export type { LinkElement, LinkProps };
