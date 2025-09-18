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
import type {TooltipProps$1} from './components-shared.d.ts';

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

declare const tagName = "s-tooltip";
export interface TooltipElementProps extends Pick<TooltipProps$1, 'id'> {
}
export interface TooltipElement extends TooltipElementProps {
}
export interface TooltipProps extends TooltipElementProps {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: TooltipElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: TooltipProps & BaseElementPropsWithChildren<TooltipElement>;
        }
    }
}

export type { TooltipElement, TooltipElementProps, TooltipProps };
