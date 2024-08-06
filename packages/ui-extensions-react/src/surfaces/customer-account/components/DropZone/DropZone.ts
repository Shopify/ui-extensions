import {DropZone as BaseDropZone} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type DropZoneProps = ReactPropsFromRemoteComponentType<
  typeof BaseDropZone
>;

export const DropZone = createRemoteReactComponent(BaseDropZone);
