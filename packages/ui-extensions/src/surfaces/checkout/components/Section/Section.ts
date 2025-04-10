import {createRemoteComponent} from '@remote-ui/core';
import type {SectionProps as BaseSectionProps} from '@shopify/ui-api-design/dist/components/Section';

export interface SectionProps
  extends Omit<BaseSectionProps, 'children' | 'padding'> {}

export const Section = createRemoteComponent<'Section', SectionProps>(
  'Section',
);
