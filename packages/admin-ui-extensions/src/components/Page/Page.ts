import {createRemoteComponent} from '@remote-ui/core';

import {DestructableAction} from '../types';

export interface CallbackAction {
  /** A unique identifier for the action */
  id?: string;
  /** Content the action displays */
  content?: string;
  /** Visually hidden text for screen readers */
  accessibilityLabel?: string;
  /** Callback when an action takes place */
  onAction(): void;
}

export interface LinkAction {
  /** A unique identifier for the action */
  id?: string;
  /** Content the action displays */
  content?: string;
  /** Visually hidden text for screen readers */
  accessibilityLabel?: string;
  /** Callback when an action takes place */
  url: string;
}

export interface PageProps {
  /** Remove the normal max-width on the page */
  fullWidth?: boolean;
  /** Decreases the maximum layout width. Intended for single-column layouts */
  narrowWidth?: boolean;
  /** Displays a divider between the page header and the page content */
  divider?: boolean;
  /** Primary page-level action */
  primaryAction?: DestructableAction;
  /** Collection of breadcrumbs */
  breadcrumbs?: (CallbackAction | LinkAction)[];
  /** Collection of secondary page-level actions */
  secondaryActions?: DestructableAction[];
  /** Title of Page */
  title?: string;
}

export const Page = createRemoteComponent<'Page', PageProps>('Page');
