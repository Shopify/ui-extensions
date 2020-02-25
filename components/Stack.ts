/**
 * Use to lay out a horizontal row of components or to achieve no-fuss vertical centering. A stack is made of flexible items that wrap each of the stack’s children. Options provide control of the wrapping, spacing, and relative size of the items in the stack.
 * @property vertical Stack the elements vertically. Defaults to Horizontal
 * @property distribution Horizontal alignment of elements. Defaults to Leading
 * @property spacing Spacing between elements
 * @property children Elements to display inside the stack
 */
interface Stack {
    vertical?: boolean;
    distribution?: Distribution;
    spacing?: Spacing;
    children: React.ReactNode;
}

enum Distribution {
    Leading, Trailing, Center, Fill
}

enum Spacing {
    None, ExtraTight, Tight, Loose, ExtraLoose, 
}
