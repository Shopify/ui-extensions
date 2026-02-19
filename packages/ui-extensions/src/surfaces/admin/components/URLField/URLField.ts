import {createRemoteComponent} from '@remote-ui/core';
import {
  AnyAutocompleteField,
  AutocompleteProps,
  AutocompleteAddressGroup,
  AutocompleteFieldInstantMessageAlias,
  InputProps,
  MinMaxLengthProps,
} from '../shared';

/**
 * Props for the URLField component, a text input optimized for entering
 * URLs. It extends standard input props with min/max length constraints
 * and autocomplete support for URL-related fields.
 */
export interface URLFieldProps
  extends InputProps<string>,
    MinMaxLengthProps,
    AutocompleteProps<URLAutocompleteField> {}

/**
 * Autocomplete field types relevant to URL inputs. Includes values
 * for general URLs, photo URLs, and instant messaging protocol URIs.
 */
export type URLAutocompleteField = Extract<
  AnyAutocompleteField,
  | 'url'
  | 'photo'
  | `${AutocompleteFieldInstantMessageAlias}`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldInstantMessageAlias}`
>;

/** A URLField component for entering and validating URLs. */
export const URLField = createRemoteComponent<'URLField', URLFieldProps>(
  'URLField',
);
