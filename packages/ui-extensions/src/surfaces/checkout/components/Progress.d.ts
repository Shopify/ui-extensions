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
import type {ProgressProps$1} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 * @publicDocs
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}

declare const tagName = "s-progress";
/**
 * Displays an indicator showing the completion status of a task. Use to visually communicate progress in either determinate (known percentage) or indeterminate (unknown duration) states.
 * @publicDocs
 */
export interface ProgressElementProps extends Pick<ProgressProps$1, 'accessibilityLabel' | 'id' | 'max' | 'tone' | 'value'> {
    tone?: Extract<ProgressProps$1['tone'], 'auto' | 'critical'>;
}
/** @publicDocs */
export interface ProgressElement extends ProgressElementProps, Omit<HTMLElement, 'id'> {
}
/** @publicDocs */
export interface ProgressProps extends ProgressElementProps {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: ProgressElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: ProgressProps & BaseElementProps<ProgressElement>;
        }
    }
}

export type { ProgressElement, ProgressElementProps, ProgressProps };
