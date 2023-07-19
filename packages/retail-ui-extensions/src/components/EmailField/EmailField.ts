import {createRemoteComponent} from '@remote-ui/core';
import type {InputProps, MinMaxLengthProps} from '../shared';

export interface EmailFieldProps extends InputProps, MinMaxLengthProps {}

export const EmailField = createRemoteComponent<'EmailField', EmailFieldProps>(
  'EmailField',
);
