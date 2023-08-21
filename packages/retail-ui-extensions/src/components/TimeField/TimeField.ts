import {createRemoteComponent} from '@remote-ui/core';
import {InputProps} from '../shared';
import type {TestableComponentProps} from '../shared';

export interface TimeFieldProps
  extends Pick<
      InputProps,
      | 'value'
      | 'error'
      | 'label'
      | 'placeholder'
      | 'disabled'
      | 'onFocus'
      | 'onBlur'
      | 'onChange'
      | 'action'
      | 'helpText'
    >,
    TestableComponentProps {
  is24Hour?: boolean;
}

export const TimeField = createRemoteComponent<'TimeField', TimeFieldProps>(
  'TimeField',
);
