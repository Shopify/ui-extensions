/** VERSION: 2025.7.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/no-deprecated */
/* eslint-disable import/namespace */
/* eslint-disable import/no-deprecated */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {TextProps$1} from './components-shared.d.ts';

export interface TextProps extends Omit<TextProps$1, 'children' | 'fontVariantNumeric' | 'type'> {
    color?: Extract<TextProps$1['color'], 'subdued' | 'base'>;
    tone?: Extract<TextProps$1['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical' | 'custom'>;
    type?: Extract<TextProps$1['type'], 'address' | 'redundant' | 'mark' | 'emphasis' | 'offset' | 'small' | 'strong' | 'generic'>;
}
export interface TextElement extends TextProps, Omit<HTMLElement, 'id' | 'dir' | 'lang'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-text': TextElement;
    }
}

export type { TextElement, TextProps };
