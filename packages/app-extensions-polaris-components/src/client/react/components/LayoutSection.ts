import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {LayoutSection as BaseLayoutSection} from '../../core';

export type LayoutSectionProps = ReactPropsFromRemoteComponentType<typeof BaseLayoutSection>;
export const LayoutSection = createRemoteReactComponent(BaseLayoutSection);
