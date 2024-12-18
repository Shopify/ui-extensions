import {SizeKeyword} from './sizes';

export type SpacingKeyword = SizeKeyword | 'none';

export interface GapProps {
  /**
   * Adjust spacing between elements.
   * @default 'none'
   */
  gap?: SpacingKeyword;
}

export type ContentPosition = 'center' | 'start' | 'end';
export type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly';
