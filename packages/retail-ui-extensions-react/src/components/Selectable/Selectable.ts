import {Selectable as BaseSelectable} from '@shopify/retail-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type SelectableProps = ReactPropsFromRemoteComponentType<
  typeof BaseSelectable
>;

export const Selectable = createRemoteReactComponent(BaseSelectable);
