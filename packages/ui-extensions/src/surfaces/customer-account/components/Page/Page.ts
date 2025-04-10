import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';

export interface PageProps {
  /**
   * The main page heading
   */
  heading?: string;

  /**
   * The text to be used as subheading.
   */
  subheading?: string;

  /**
   * The primary action to perform, provided as a button.
   * When a `Button` is added to the `primaryAction` it's variant is set to `primary`
   */
  primaryAction?: RemoteFragment;

  /**
   * The breadcrumb actions to perform, provided as buttons. This is typically used to navigate back to the previous page.
   */
  breadcrumbActions?: RemoteFragment;

  /**
   * The secondary action grouping, provided as button(s), that is placed in the secondary position of the page (to the right of the primary action).
   */
  secondaryActions?: RemoteFragment;
}

export const Page = createRemoteComponent<'Page', PageProps>('Page');
