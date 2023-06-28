import {createRemoteComponent} from '@remote-ui/core';

export interface DividerProps {
  /**
   * Specify the direction of the divider.
   *
   * @defaultValue 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
}

export const Divider = createRemoteComponent<'Divider', DividerProps>(
  'Divider',
);
