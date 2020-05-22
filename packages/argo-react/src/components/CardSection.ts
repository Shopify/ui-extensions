import {createRemoteReactComponent, ReactPropsFromRemoteComponentType} from '@remote-ui/react';

import {CardSection as BaseCardSection} from '@shopify/argo/components';

export type CardSectionProps = ReactPropsFromRemoteComponentType<typeof BaseCardSection>;
export const CardSection = createRemoteReactComponent(BaseCardSection);
