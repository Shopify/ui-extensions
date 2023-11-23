import {createRemoteComponent} from '@remote-ui/core';

export interface DatePickerProps {
  selected?: string;
  onChange?(selected: string): void;
  visibleState: [boolean, (visible: boolean) => void];
  inputMode?: 'inline' | 'spinner';
}

export const DatePicker = createRemoteComponent<'DatePicker', DatePickerProps>(
  'DatePicker',
);
