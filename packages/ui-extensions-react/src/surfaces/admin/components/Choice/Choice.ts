import {Choice as BaseChoice} from '@shopify/ui-extensions/admin';
import type {ChoiceProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Choice = createRemoteReactComponent<'Choice', ChoiceProps>(
  BaseChoice,
);
export type {ChoiceProps} from '@shopify/ui-extensions/admin';
