import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';

/**
 * Props for the AdminAction component, used by Admin Action extensions to
 * configure the title, primary and secondary action buttons, and loading
 * state of the action modal.
 */
export interface AdminActionProps {
  /**
   * The title displayed at the top of the action modal. If not provided,
   * then the extension's name is used instead. Titles longer than 40 characters
   * will be truncated.
   */
  title?: string;

  /**
   * The primary action button in the modal's footer, rendered as a
   * Button. Use this for the main action the user can take, such as
   * "Save" or "Submit".
   */
  primaryAction?: RemoteFragment;

  /**
   * The secondary action button in the modal's footer, rendered as a
   * Button. Use this for an alternative action, such as "Cancel" or
   * "Discard".
   */
  secondaryAction?: RemoteFragment;

  /**
   * Whether the action modal is in a loading state. Set this to `true` while
   * fetching data or processing a request to display a loading indicator in
   * place of the modal's content.
   * @defaultValue false
   */
  loading?: boolean;
}
/**
 * AdminAction is a component used by Admin Action extensions to configure a primary and secondary action and title.
 */
export const AdminAction = createRemoteComponent<
  'AdminAction',
  AdminActionProps
>('AdminAction');
