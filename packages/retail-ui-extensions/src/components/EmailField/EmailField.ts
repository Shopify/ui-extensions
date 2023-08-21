import {createRemoteComponent} from '@remote-ui/core';
import type {
  InputProps,
  TestableComponentProps,
  MinMaxLengthProps,
} from '../shared';

export interface EmailFieldProps
  extends InputProps,
    MinMaxLengthProps,
    TestableComponentProps {}

export const EmailField = createRemoteComponent<'EmailField', EmailFieldProps>(
  'EmailField',
);
