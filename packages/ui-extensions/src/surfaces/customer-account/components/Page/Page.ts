import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';

/**
 * @publicDocs
 */
export interface PageProps {
  /**
   * The title displayed at the top of the page.
   */
  title: string;

  /**
   * An optional subtitle displayed below the title.
   */
  subtitle?: string;

  /**
   * The primary action slot, rendered as one or more buttons in the primary position of the page. Accepts a `RemoteFragment` containing `Button` components.
   */
  primaryAction?: RemoteFragment;

  /**
   * A visible label for the primary action grouping. Displayed as the text trigger when actions overflow into a menu.
   *
   * @defaultValue "More actions"
   */
  primaryActionLabel?: string;

  /**
   * A label announced by assistive technologies for the primary action grouping.
   *
   * @defaultValue "More actions"
   */
  primaryActionAccessibilityLabel?: string;

  /**
   * The secondary action slot, rendered as one or more buttons in the secondary position of the page. Accepts a `RemoteFragment` containing `Button` components.
   */
  secondaryAction?: RemoteFragment;

  /**
   * Whether the page is in a loading state. When `true`, the page shows loading indicators for its own UI elements. The page is not responsible for loading indicators on content passed as `children`.
   *
   * @defaultValue false
   */
  loading?: boolean;
}

export const Page = createRemoteComponent<'Page', PageProps>('Page');
