import {createRemoteComponent} from '@remote-ui/core';
import {InputProps} from '../shared/InputField';

export interface TimeFieldProps
  extends Pick<
    InputProps,
    | 'value'
    | 'error'
    | 'label'
    | 'disabled'
    | 'onFocus'
    | 'onBlur'
    | 'onChange'
    | 'action'
    | 'helpText'
  > {
  is24Hour?: boolean;
}

export const TimeField = createRemoteComponent<'TimeField', TimeFieldProps>(
  'TimeField',
);
