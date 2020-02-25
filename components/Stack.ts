/**
 * Use to lay out a horizontal row of components or to achieve no-fuss vertical centering. A stack is made of flexible items that wrap each of the stack’s children. Options provide control of the wrapping, spacing, and relative size of the items in the stack.
 * @property vertical Stack the elements vertically. Defaults to Horizontal
 * @property alignment Defines how elements are arranged along the axis
 * @property distribution Alignment of element perpendicular to the axis. Defaults to Leading
 * @property spacing Spacing between elements
 * @property children Elements to display inside the stack
 */
interface Stack {
    vertical?: boolean;
    alignment?: Alignment
    distribution?: Distribution;
    spacing?: Spacing;
    children: React.ReactNode;
}

enum Distribution {
    Leading, Trailing, Center, Fill
}

enum Alignment {
    Leading, Trailing, Fill, Center, Baseline
}

enum Spacing {
    None, ExtraTight, Tight, Loose, ExtraLoose, 
}
