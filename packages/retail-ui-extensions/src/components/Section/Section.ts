import {createRemoteComponent} from '@remote-ui/core';

export interface SectionHeaderAction {
  title: string;
  onPress: () => void;
}

export interface SectionProps {
  title?: string;
  isLoading?: boolean;
  action?: SectionHeaderAction;
}

export const Section = createRemoteComponent<'Section', SectionProps>(
  'Section',
);
