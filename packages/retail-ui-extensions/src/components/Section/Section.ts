import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

export interface SectionHeaderAction extends TestableComponentProps {
  title: string;
  onPress: () => void;
}

export interface SectionProps extends TestableComponentProps {
  title?: string;
  action?: SectionHeaderAction;
}

export const Section = createRemoteComponent<'Section', SectionProps>(
  'Section',
);
