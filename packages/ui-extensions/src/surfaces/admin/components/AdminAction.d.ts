/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  AdminActionProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface AdminActionProps
  extends Pick<AdminActionProps$1, 'heading' | 'loading'> {}

declare const tagName = 's-admin-action';
export interface AdminActionJSXProps
  extends Partial<AdminActionProps>,
    Pick<AdminActionProps$1, 'id'> {
  /**
   * The primary action to display in the admin action.
   */
  primaryAction: ComponentChildren;
  /**
   * The secondary actions to display in the admin action.
   */
  secondaryActions: ComponentChildren;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare class AdminAction
  extends PolarisCustomElement
  implements AdminActionProps
{
  heading: string;
  loading: boolean;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: AdminAction;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<
        AdminActionJSXProps,
        'primaryAction' | 'secondaryActions'
      > & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

export {AdminAction};
export type {AdminActionJSXProps};
