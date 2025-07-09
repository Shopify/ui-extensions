/** VERSION: 0.0.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
} from './shared.d.ts';

export type BadgeVariant = 'info' | 'success' | 'warning' | 'critical';
export type BadgeStatus = 'new' | 'active' | 'complete';

/**
 * Badges are used to inform merchants of the status of an item or action that's been taken.
 */
export interface BadgeProps {
  /**
   * The text displayed within the badge.
   */
  text: string;
  /**
   * The visual style variant of the badge.
   */
  variant?: BadgeVariant;
  /**
   * The status represented by the badge.
   */
  status?: BadgeStatus;
}

declare class Badge extends PreactCustomElement implements BadgeProps {
  accessor text: BadgeProps['text'];
  accessor variant: BadgeProps['variant'];
  accessor status: BadgeProps['status'];
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Badge;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BadgeJSXProps & PreactBaseElementPropsWithChildren<Badge>;
    }
  }
}

declare const tagName = 's-badge';

export interface BadgeJSXProps extends Partial<Omit<BadgeProps, 'text'>> {
  // text is required, so we add it back without Partial
  text: string;
  id?: string;
}

export {Badge};
export type {BadgeJSXProps};
