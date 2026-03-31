import {createRemoteComponent} from '@remote-ui/core';
import type {InputProps} from '../shared/InputField';

/**
 * Configure the following properties on the TextArea component.
 *
 * @publicDocs
 */
export interface TextAreaProps extends InputProps {
  /**
   * The initial number of visible text lines to be displayed. Maximum of 8 lines.
   */
  rows?: number;
}

export const TextArea = createRemoteComponent<'TextArea', TextAreaProps>(
  'TextArea',
);
