import {FormattedTextField as BaseFormattedTextField} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {FormattedTextFieldProps} from '@shopify/retail-ui-extensions';

export const FormattedTextField = createRemoteReactComponent(
  BaseFormattedTextField,
);
