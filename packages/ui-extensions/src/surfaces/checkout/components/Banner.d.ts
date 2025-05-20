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
import type {BannerProps$1} from './components-shared.d.ts';

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
    interface BaseProps {
        children?: preact.ComponentChildren;
        slot?: Lowercase<string>;
    }
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-banner': BannerProps & BaseProps;
        }
    }
}

export type { BannerElement, BannerProps };
