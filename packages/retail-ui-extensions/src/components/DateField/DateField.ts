import {createRemoteComponent} from '@remote-ui/core';
import {InputProps, TestableComponentProps} from '../shared';

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
    >,
    TestableComponentProps {}

export const DateField = createRemoteComponent<'DateField', DateFieldProps>(
  'DateField',
);
