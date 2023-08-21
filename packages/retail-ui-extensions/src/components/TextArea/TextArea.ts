import {createRemoteComponent} from '@remote-ui/core';
import type {
  InputProps,
  TestableComponentProps,
  MinMaxLengthProps,
} from '../shared';

/**
 * Represents the properties for the TextField component.
 * @typedef {Object} TextAreaProps
 * @property {number} [rows] - The initial number of lines to be displayed. Maximum of 8 lines.
 */
export interface TextAreaProps
  extends InputProps,
    TestableComponentProps,
    MinMaxLengthProps {
  rows?: number;
}

export const TextArea = createRemoteComponent<'TextArea', TextAreaProps>(
  'TextArea',
);
