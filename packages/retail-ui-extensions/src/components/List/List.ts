import {createRemoteComponent} from '@remote-ui/core';

export interface ListItem {
  uuid: string;
  title: string;
  subtitle?: string;
  imageUri?: string;
  rightDetail?: string;
  onClick?: () => void;
}

export interface ListProps {
  data: ListItem[];
  showDisclosureIndicator: boolean;
  title?: string;
}

export const List = createRemoteComponent<'List', ListProps>('List');
