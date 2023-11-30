import {FormattedTextField as BaseFormattedTextField} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {FormattedTextFieldProps} from '@shopify/ui-extensions/point-of-sale';

export const FormattedTextField = createRemoteReactComponent(
  BaseFormattedTextField,
);
