/** VERSION: 1.64.0 **/
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

/**
 * The properties for the admin action component. These properties configure the heading and loading state of the admin action extension interface.
 * @publicDocs
 */
export interface AdminActionProps
  extends Pick<AdminActionProps$1, 'heading' | 'loading'> {}

declare const tagName = 's-admin-action';
/**
 * The JSX props for the admin action component. These properties extend `AdminActionProps` with slots for primary and secondary action buttons that merchants can interact with.
 * @publicDocs
 */
export interface AdminActionJSXProps
  extends Partial<AdminActionProps>,
    Pick<AdminActionProps$1, 'id'> {
  /**
   * The primary action button or link to display in the admin action area. This is the main call-to-action that appears prominently in the interface. Typically uses a button component with `variant="primary"` to complete or advance the workflow.
   */
  primaryAction: ComponentChildren;
  /**
   * The secondary action buttons or links to display in the admin action area. These are supporting actions like cancel, back, or alternative operations. Typically uses button components with `variant="secondary"` or `variant="tertiary"`.
   */
  secondaryActions: ComponentChildren;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/**
 * The admin action custom element class that renders action controls in the Shopify admin interface. This component creates a standardized action area with a heading and slots for primary and secondary action buttons, used exclusively in admin action extensions.
 */
declare class AdminAction
  extends PolarisCustomElement
  implements AdminActionProps
{
  /**
   * The heading text to display at the top of the action area. This title describes the action or task the merchant is performing. If not provided, the extension name is used as the heading.
   */
  heading: string;
  /**
   * Whether the action extension is currently in a loading state, such as during initial data fetching or when opening the action. When `true`, the action area might display loading indicators and prevent user interaction until loading completes.
   *
   * @default false
   */
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
