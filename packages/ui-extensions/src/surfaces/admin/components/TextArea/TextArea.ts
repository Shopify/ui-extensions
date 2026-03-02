import {createRemoteComponent} from '@remote-ui/core';

import {
  AutocompleteProps,
  TextAutocompleteField,
  InputProps,
  MinMaxLengthProps,
} from '../shared';

/**
 * Props for the TextArea component, a multi-line text input for entering
 * longer-form content such as descriptions, comments, or notes. It extends
 * standard input props with min/max length constraints and autocomplete support.
 *
 * @publicDocs
 */
export interface TextAreaProps
  extends InputProps<string>,
    MinMaxLengthProps,
    AutocompleteProps<TextAutocompleteField> {
  /**
   * The number of visible text lines to display. This determines the
   * initial height of the text area. Users can still enter more text
   * than the visible lines allow.
   *
   * @defaultValue 2
   */
  rows?: number;
}

/** A TextArea component for multi-line text input. */
export const TextArea = createRemoteComponent<'TextArea', TextAreaProps>(
  'TextArea',
);
