import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

export interface DatePickerProps extends TestableComponentProps {
  selected?: string;
  onChange?(selected: string): void;
  visibleState: [boolean, (visible: boolean) => void];
  inputMode?: 'inline' | 'spinner';
}

export const DatePicker = createRemoteComponent<'DatePicker', DatePickerProps>(
  'DatePicker',
);
