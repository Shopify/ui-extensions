import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';

/**
 * Render a custom action for a customer account.
 * @publicDocs
 */
export interface CustomerAccountActionProps {
  /**
   * The main title displayed at the top of the action modal, rendered in the header alongside the close button. Use a short, descriptive phrase that tells the customer what the action does, such as "Request a return" or "Edit shipping address."
   */
  title: string;
  /**
   * The primary action for the modal. Accepts a single button component. Use this for the main confirmation action, such as "Submit" or "Confirm."
   */
  primaryAction?: RemoteFragment;
  /**
   * The secondary action for the modal. Accepts a single button component. Use this for dismissive actions like "Cancel" or alternative actions.
   */
  secondaryAction?: RemoteFragment;
}

export const CustomerAccountAction = createRemoteComponent<
  'CustomerAccountAction',
  CustomerAccountActionProps
>('CustomerAccountAction');
