import {createRemoteReactComponent, ReactPropsFromRemoteComponentType} from '@remote-ui/react';

import {LayoutSection as BaseLayoutSection} from '@shopify/argo/components';

export type LayoutSectionProps = ReactPropsFromRemoteComponentType<typeof BaseLayoutSection>;
export const LayoutSection = createRemoteReactComponent(BaseLayoutSection);
