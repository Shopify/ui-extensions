import {createRemoteComponent} from '@remote-ui/core';

export interface RadioButtonListProps {
  items: string[];
  onItemSelected: (item: string) => void;
  initialSelectedItem?: string;
  initialOffsetToShowSelectedItem?: boolean;
}

export const RadioButtonList = createRemoteComponent<
  'RadioButtonList',
  RadioButtonListProps
>('RadioButtonList');
