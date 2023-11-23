import {createRemoteComponent} from '@remote-ui/core';

export type TextVariant =
  | 'sectionHeader'
  | 'captionRegular'
  | 'captionRegularTall'
  | 'captionMedium'
  | 'body'
  | 'headingSmall'
  | 'headingLarge'
  | 'display';

export type ColorType =
  | 'TextNeutral'
  | 'TextSubdued'
  | 'TextDisabled'
  | 'TextWarning'
  | 'TextCritical'
  | 'TextSuccess'
  | 'TextInteractive'
  | 'TextHighlight';

export interface TextProps {
  variant?: TextVariant;
  color?: ColorType;
}

export const Text = createRemoteComponent<'Text', TextProps>('Text');
