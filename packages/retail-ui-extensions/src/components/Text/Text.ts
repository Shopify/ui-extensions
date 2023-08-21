import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

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

export interface TextProps extends TestableComponentProps {
  variant?: TextVariant;
  color?: ColorType;
}

export const Text = createRemoteComponent<'Text', TextProps>('Text');
