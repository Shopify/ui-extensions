import {createRemoteComponent} from '@remote-ui/core';

export interface DividerProps {
  /**
   * Specify the direction of the divider.
   *
   * @defaultValue 'block'
   */
  direction?: 'block' | 'inline';
}

export const Divider = createRemoteComponent<'Divider', DividerProps>(
  'Divider',
);
