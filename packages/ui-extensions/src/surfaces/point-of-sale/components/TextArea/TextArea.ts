import {createRemoteComponent} from '@remote-ui/core';
import type {InputProps} from '../shared/InputField';

export interface TextAreaProps extends InputProps {
  /**
   * The initial number of visible text lines to be displayed. Maximum of 8 lines.
   */
  rows?: number;
}

export const TextArea = createRemoteComponent<'TextArea', TextAreaProps>(
  'TextArea',
);
