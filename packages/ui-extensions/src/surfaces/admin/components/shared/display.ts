/**
 * Props that control element visibility and layout participation.
 */
export interface DisplayProps {
  /**
   * Whether the element is rendered and takes up space in the layout.
   *
   * - `auto`: The element is rendered normally and participates in layout.
   * - `none`: The element isn't rendered at all and doesn't take up any space.
   *   Use this to conditionally hide content without removing it from the
   *   component tree.
   *
   * @defaultValue 'auto'
   */
  display?: 'auto' | 'none';
}
