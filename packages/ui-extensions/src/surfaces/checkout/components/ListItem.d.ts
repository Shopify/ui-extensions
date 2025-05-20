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
import type {ListItemProps$1} from './components-shared.d.ts';

export interface ListItemProps extends Pick<ListItemProps$1, 'id'> {
}
export interface ListItem extends ListItemProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-list-item': ListItem;
    }
}
declare module 'preact' {
    interface BaseProps {
        children?: preact.ComponentChildren;
        slot?: Lowercase<string>;
    }
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-list-item': ListItemProps & BaseProps;
        }
    }
}

export type { ListItem, ListItemProps };
