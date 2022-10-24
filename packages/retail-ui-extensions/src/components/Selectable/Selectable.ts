import {createRemoteComponent} from '@remote-ui/core';

export interface SelectableProps {
  onPress: () => void;
  disabled?: boolean;
}

export const Selectable = createRemoteComponent<'Selectable', SelectableProps>(
  'Selectable',
);
