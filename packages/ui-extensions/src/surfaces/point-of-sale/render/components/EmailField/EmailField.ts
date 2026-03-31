import {createRemoteComponent} from '@remote-ui/core';
import type {InputProps} from '../shared/InputField';

/**
 * Configure the following properties on the EmailField component.
 *
 * @publicDocs
 */
export interface EmailFieldProps extends InputProps {}

export const EmailField = createRemoteComponent<'EmailField', EmailFieldProps>(
  'EmailField',
);
