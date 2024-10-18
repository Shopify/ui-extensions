import type {RemoteFragment} from '@remote-ui/core';

export interface AdminActionProps {
  /**
   * Sets the title of the Action container. If not provided, the name of the extension will be used. Titles longer than 40 characters will be truncated.
   */
  title?: string;

  /**
   * Sets the Primary action button of the container. This component must be a button component.
   */
  primaryAction?: RemoteFragment;

  /**
   * Sets the Secondary action button of the container. This component must be a button component.
   */
  secondaryAction?: RemoteFragment;

  /**
   * Sets the loading state of the action modal
   */
  loading?: boolean;
}
