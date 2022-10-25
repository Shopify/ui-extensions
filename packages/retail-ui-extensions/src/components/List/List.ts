import {createRemoteComponent} from '@remote-ui/core';

export interface ListItem {
  uuid: string;
  title: string;
  subtitle?: string;
  subtitleColor?: 'subdued' | 'success' | 'warning' | 'critical';
  imageUri?: string;
  detail?: string;
  detailColor?: 'subdued' | 'action';
  onClick?: () => void;
}

export interface ListProps {
  data: ListItem[];
  showDisclosureIndicator: boolean;
  title?: string;
}

export const List = createRemoteComponent<'List', ListProps>('List');
