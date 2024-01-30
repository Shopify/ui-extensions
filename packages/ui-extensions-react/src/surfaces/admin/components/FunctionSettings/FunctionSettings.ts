import {FunctionSettings as BaseFunctionSettings} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const FunctionSettings =
  createRemoteReactComponent(BaseFunctionSettings);
export type {FunctionSettingsProps} from '@shopify/ui-extensions/admin';
