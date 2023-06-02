import {CardSection as BaseCardSection} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const CardSection = createRemoteReactComponent(BaseCardSection);
export type CardSectionProps = ReactPropsFromRemoteComponentType<
  typeof BaseCardSection
>;
