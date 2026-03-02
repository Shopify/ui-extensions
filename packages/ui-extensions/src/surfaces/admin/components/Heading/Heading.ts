import {createRemoteComponent} from '@remote-ui/core';

/**
 * A heading level from `1` (largest / most prominent) to `6`
 * (smallest / least prominent). Controls visual size only. The semantic
 * HTML heading level is determined by HeadingGroup or Section nesting.
 */
type Level = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Props for the Heading component. The heading's semantic level is
 * determined automatically by the nesting depth of HeadingGroup or
 * Section ancestors; use the `size` prop to control its visual
 * appearance independently.
 *
 * @publicDocs
 */
export interface HeadingProps {
  /**
   * A unique identifier for the heading.
   */
  id?: string;

  /**
   * The visual size of the heading, from `1` (largest) to `6` (smallest).
   * This controls appearance only and doesn't set the semantic heading level.
   * The actual heading level rendered for assistive technologies is determined
   * automatically by the nesting depth of parent HeadingGroup or Section
   * components.
   */
  size?: Level;
}

/**
 * A heading element whose semantic level is determined automatically
 * by the nesting depth of HeadingGroup or Section ancestors.
 */
export const Heading = createRemoteComponent<'Heading', HeadingProps>(
  'Heading',
);
