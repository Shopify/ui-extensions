import {InternalMetaobjectField as BaseInternalMetaobjectField} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const InternalMetaobjectField = createRemoteReactComponent(
  BaseInternalMetaobjectField,
);
export type {InternalMetaobjectFieldProps} from '@shopify/ui-extensions/admin';
