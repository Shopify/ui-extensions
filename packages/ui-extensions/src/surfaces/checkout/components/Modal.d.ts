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
import type {ModalProps$1} from './components-shared.d.ts';

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

export interface ModalProps extends Pick<ModalProps$1, 'accessibilityLabel' | 'heading' | 'id' | 'onAfterHide' | 'onAfterShow' | 'onHide' | 'onShow' | 'padding' | 'primaryAction' | 'secondaryActions' | 'size'> {
    size?: Extract<ModalProps$1['size'], 'small-100' | 'small' | 'base' | 'large-100' | 'large' | 'max'>;
}
export interface ModalElement extends Omit<ModalProps, 'onHide' | 'onShow'>, Omit<HTMLElement, 'id'> {
    onhide: ModalProps['onHide'];
    onshow: ModalProps['onShow'];
}
declare global {
    interface HTMLElementTagNameMap {
        's-modal': ModalElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-modal': ModalProps & BaseElementPropsWithChildren<ModalElement>;
        }
    }
}

export type { ModalElement, ModalProps };
