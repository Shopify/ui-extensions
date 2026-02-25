import {createRemoteComponent} from '@remote-ui/core';

/**
 * Props for the Divider component, a visual separator used to distinguish
 * adjacent sections of content.
 */
export interface DividerProps {
  /**
   * The direction the divider line runs.
   *
   * - `inline`: Draws a horizontal rule that separates stacked content.
   * - `block`: Draws a vertical rule that separates side-by-side content.
   *
   * @defaultValue 'inline'
   */
  direction?: 'inline' | 'block';
}

/**
 * A visual separator that draws a horizontal or vertical line between
 * adjacent sections of content.
 */
export const Divider = createRemoteComponent<'Divider', DividerProps>(
  'Divider',
);
