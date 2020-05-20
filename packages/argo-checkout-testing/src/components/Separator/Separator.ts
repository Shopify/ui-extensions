import {createRemoteComponent} from '../../utilities';

export interface SeparatorProps {}

export const Separator = createRemoteComponent<'Separator', SeparatorProps>(
  'Separator',
);
