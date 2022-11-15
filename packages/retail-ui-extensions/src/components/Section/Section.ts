import {createRemoteComponent} from '@remote-ui/core';

export interface SectionHeaderAction {
  title: string;
  onPress: () => void;
}

export interface SectionProps {
  title?: string;
  action?: SectionHeaderAction;
  hideSeparators?: boolean;
}

export const Section = createRemoteComponent<'Section', SectionProps>(
  'Section',
);
