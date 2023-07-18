import {createRemoteComponent} from '@remote-ui/core';
import {InputProps} from '../shared';

export interface DateFieldProps
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
  > {}

export const DateField = createRemoteComponent<'DateField', DateFieldProps>(
  'DateField',
);
