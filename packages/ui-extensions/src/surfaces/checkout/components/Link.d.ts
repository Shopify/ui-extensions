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
import type {LinkProps$1} from './components-shared.d.ts';

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

export interface LinkProps extends Pick<LinkProps$1, 'accessibilityLabel' | 'command' | 'commandFor' | 'href' | 'id' | 'lang' | 'onClick' | 'target' | 'tone'> {
    target?: Extract<LinkProps$1['target'], 'auto' | '_blank'>;
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
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-link': LinkProps & BaseElementPropsWithChildren<LinkElement>;
        }
    }
}

export type { LinkElement, LinkProps };
