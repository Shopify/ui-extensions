import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

export interface TimePickerProps extends TestableComponentProps {
  selected?: string;
  onChange?(selected: string): void;
  visibleState: [boolean, (visible: boolean) => void];
  is24Hour?: boolean;
  inputMode?: 'inline' | 'spinner';
}

export const TimePicker = createRemoteComponent<'TimePicker', TimePickerProps>(
  'TimePicker',
);
