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
import type {IconProps$1} from './components-shared.d.ts';

export interface IconProps extends Omit<IconProps$1, 'tone' | 'size' | 'type' | 'color'> {
    tone?: Extract<IconProps$1['tone'], 'auto' | 'neutral' | 'info' | 'success' | 'warning' | 'critical' | 'custom'>;
    size?: Extract<IconProps$1['size'], 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100'>;
    type?: Extract<IconProps$1['type'], 'alert-circle' | 'alert-triangle-filled' | 'alert-triangle' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up-right' | 'arrow-up' | 'bag' | 'bullet' | 'calendar' | 'camera' | 'caret-down' | 'cart' | 'cash-dollar' | 'categories' | 'check-circle' | 'check' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'circle' | 'clipboard' | 'clock' | 'credit-card' | 'delete' | 'delivered' | 'delivery' | 'disabled' | 'discount' | 'edit' | 'email' | 'empty' | 'external' | 'filter' | 'geolocation' | 'gift-card' | 'globe' | 'grid' | 'image' | 'info-filled' | 'info' | 'list-bulleted' | 'location' | 'lock' | 'map' | 'menu-horizontal' | 'menu-vertical' | 'menu' | 'minus' | 'mobile' | 'note' | 'order' | 'organization' | 'plus' | 'profile' | 'question-circle-filled' | 'question-circle' | 'reorder' | 'reset' | 'return' | 'savings' | 'search' | 'settings' | 'star-filled' | 'star-half' | 'star' | 'store' | 'truck' | 'upload' | 'x-circle-filled' | 'x-circle' | 'x'>;
}
export interface IconElement extends IconProps, Omit<HTMLElement, 'id'> {
}
declare global {
    interface HTMLElementTagNameMap {
        's-icon': IconElement;
    }
}
declare module 'preact' {
    namespace createElement.JSX {
        interface IntrinsicElements {
            's-icon': Omit<HTMLAttributes<HTMLElement>, Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>> & IconProps;
        }
    }
}

export type { IconElement, IconProps };
