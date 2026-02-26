import {createRemoteComponent} from '@remote-ui/core';
import {InputProps} from '../shared/InputField';

/**
 * Configure the following properties on the DateField component.
 *
 * @publicDocs
 */
export interface DateFieldProps
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
  > {}

export const DateField = createRemoteComponent<'DateField', DateFieldProps>(
  'DateField',
);
