import {createRemoteComponent} from '@remote-ui/core';

export interface RadioButtonListProps {
  items: string[];
  onItemSelected: (item: string) => void;
  selectedItem?: string;
  renderFromTop?: boolean;
}

export const RadioButtonList = createRemoteComponent<
  'RadioButtonList',
  RadioButtonListProps
>('RadioButtonList');
