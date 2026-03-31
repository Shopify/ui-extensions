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
import type {ParagraphProps$1} from './components-shared.d.ts';

/**
 * Used when an element does not have children.
 * @publicDocs
 */
export interface BaseElementProps<TClass = HTMLElement> {
    key?: preact.Key;
    ref?: preact.Ref<TClass>;
    slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 * @publicDocs
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement> extends BaseElementProps<TClass> {
    children?: preact.ComponentChildren;
}

declare const tagName = "s-paragraph";
/**
 * The paragraph component displays blocks of text content and can contain inline elements like buttons, links, or emphasized text. Use paragraph to present standalone blocks of readable content, descriptions, or explanatory text.
 *
 * Paragraphs support alignment options and can wrap inline components to create rich, formatted content blocks. For inline text styling, use [text](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/typography-and-content/text).
 * @publicDocs
 */
export interface ParagraphProps extends Pick<ParagraphProps$1, 'accessibilityVisibility' | 'color' | 'dir' | 'id' | 'lang' | 'tone' | 'type'> {
    color?: Extract<ParagraphProps$1['color'], 'subdued' | 'base'>;
    tone?: Extract<ParagraphProps$1['tone'], 'auto' | 'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'custom'>;
}
/** @publicDocs */
export interface ParagraphElement extends ParagraphProps, Omit<HTMLElement, 'id' | 'dir' | 'lang'> {
}
declare global {
    interface HTMLElementTagNameMap {
        [tagName]: ParagraphElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            [tagName]: ParagraphProps & BaseElementPropsWithChildren<ParagraphElement>;
        }
    }
}

export type { ParagraphElement, ParagraphProps };
