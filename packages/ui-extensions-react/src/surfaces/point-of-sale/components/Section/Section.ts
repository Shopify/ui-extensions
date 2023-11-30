import {Section as BaseSection} from '@shopify/ui-extensions/point-of-sale';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type SectionProps = ReactPropsFromRemoteComponentType<
  typeof BaseSection
>;

export const Section = createRemoteReactComponent(BaseSection);
