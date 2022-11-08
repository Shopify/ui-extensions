import {createRemoteComponent} from '@remote-ui/core';

import type {TextFieldProps as BaseTextFieldProps} from '../../../../components';

export interface TextFieldProps extends BaseTextFieldProps {
  /**
   * Additional hint text to display beside the field, with less visual prominence than the label.
   * Help text should only be used when there are additional implications of editing the field’s
   * value that can’t be communicated as part of the field’s label.
   */
  helpText?: string;
}

export const TextField = createRemoteComponent<'TextField', TextFieldProps>(
  'TextField',
);
