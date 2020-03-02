/**
 * Use to lay out a horizontal row of components or to achieve no-fuss vertical centering. A stack is made of flexible items that wrap each of the stack’s children. Options provide control of the wrapping, spacing, and relative size of the items in the stack.
 * @property vertical Stack the elements vertically. Defaults to Horizontal
 * @property alignment Defines how elements are arranged along the axis
 * @property distribution Alignment of element perpendicular to the axis. Defaults to Leading
 * @property spacing Spacing between elements
 * @property children Elements to display inside the stack
 */
export interface Stack {
  vertical?: boolean;
  alignment?: Alignment;
  distribution?: Distribution;
  spacing?: Spacing;
  children: React.ReactNode;
}

export type Distribution = 'leading' | 'trailing' | 'center' | 'fill';

export type Alignment = 'leading' | 'trailing' | 'fill' | 'center' | 'baseline';

export type Spacing = 'none' | 'extraTight' | 'tight' | 'loose' | 'extraLoose';
