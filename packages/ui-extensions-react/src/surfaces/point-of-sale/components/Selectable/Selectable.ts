import {Selectable as BaseSelectable} from '@shopify/ui-extensions/point-of-sale';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type SelectableProps = ReactPropsFromRemoteComponentType<
  typeof BaseSelectable
>;

export const Selectable = createRemoteReactComponent(BaseSelectable);
