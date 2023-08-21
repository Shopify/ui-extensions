import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

export interface RadioButtonListProps extends TestableComponentProps {
  items: string[];
  onItemSelected: (item: string) => void;
  initialSelectedItem?: string;
  initialOffsetToShowSelectedItem?: boolean;
}

export const RadioButtonList = createRemoteComponent<
  'RadioButtonList',
  RadioButtonListProps
>('RadioButtonList');
