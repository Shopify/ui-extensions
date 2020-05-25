import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {CardSection as BaseCardSection} from '@shopify/argo/components';

export type CardSectionProps = ReactPropsFromRemoteComponentType<typeof BaseCardSection>;
export const CardSection = createRemoteReactComponent(BaseCardSection);
