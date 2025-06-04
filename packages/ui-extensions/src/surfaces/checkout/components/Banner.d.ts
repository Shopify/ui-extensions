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
import type {BannerProps$1} from './components-shared.d.ts';

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

export interface BannerProps extends Pick<BannerProps$1, 'collapsible' | 'dismissible' | 'heading' | 'hidden' | 'id' | 'onAfterHide' | 'onDismiss' | 'tone'> {
    tone?: Extract<BannerProps$1['tone'], 'auto' | 'info' | 'success' | 'warning' | 'critical'>;
}
export interface BannerElement extends Omit<BannerProps, 'onAfterHide' | 'onDismiss'>, Omit<HTMLElement, 'id' | 'title' | 'hidden'> {
    onafterhide: BannerProps['onAfterHide'];
    ondismiss: BannerProps['onDismiss'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-banner': BannerElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-banner': BannerProps & BaseElementPropsWithChildren<BannerElement>;
        }
    }
}

export type { BannerElement, BannerProps };
