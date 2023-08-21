import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

export interface SelectableProps extends TestableComponentProps {
  onPress: () => void;
  disabled?: boolean;
}

export const Selectable = createRemoteComponent<'Selectable', SelectableProps>(
  'Selectable',
);
