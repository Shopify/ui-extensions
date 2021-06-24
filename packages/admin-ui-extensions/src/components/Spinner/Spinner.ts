import {createRemoteComponent} from '@remote-ui/core';

export interface SpinnerProps {}

/**
 * Spinners are used to show merchants that your app is loading, or an action is being performed. Generally when a spinner is being used, the user shouldn't be able to interact.
 */
export const Spinner = createRemoteComponent<'Spinner', SpinnerProps>(
  'Spinner',
);
