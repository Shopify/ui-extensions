import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';

export interface PageProps {
  /**
   * The text to be used as title.
   */
  title: string;

  /**
   * The text to be used as subtitle.
   */
  subtitle?: string;

  /**
   * The action grouping, provided as button(s), that is placed in the primary position of the page.
   */
  primaryAction?: RemoteFragment;

  /**
   * Label for the primary action grouping.
   *
   * @defaultValue "More actions"
   */
  primaryActionLabel?: string;

  /**
   * Accessibility label for the primary action grouping.
   *
   * @defaultValue "More actions"
   */
  primaryActionAccessibilityLabel?: string;

  /**
   * The secondary action provided as a button, that is placed in the secondary position of the page.
   */
  secondaryAction?: RemoteFragment;

  /**
   * Indicates that the page is in a loading state.
   *
   * When `true`, the page will be replaced by loading indicators (for example: skeletons or spinners).
   *
   * @defaultValue false
   */
  loading?: boolean;
}

export const Page = createRemoteComponent<'Page', PageProps>('Page');
