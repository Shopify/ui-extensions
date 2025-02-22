import {createRemoteComponent} from '@remote-ui/core';
import {InputProps} from '../shared';

export interface HiddenFieldProps
  extends Pick<InputProps<string>, 'id' | 'name' | 'value'> {}

export const HiddenField = createRemoteComponent<
  'HiddenField',
  HiddenFieldProps
>('HiddenField');
