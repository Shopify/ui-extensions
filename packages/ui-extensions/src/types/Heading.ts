type Level = 1 | 2 | 3;

export interface BaseHeadingProps {
  /**
   * Unique identifier. Typically used to make the heading a target
   * that another component can refer to in order to provide an alternative
   * accessibility label.
   */
  id?: string;
  /**
   * The visual level of the heading.
   */
  level?: Level;
  /**
   * A custom accessibility role for this heading. Currently, only `presentation`
   * is supported. `presentation` will strip the semantic meaning of the heading,
   * but leave the visual styling intact.
   */
  role?: 'presentation';
}
