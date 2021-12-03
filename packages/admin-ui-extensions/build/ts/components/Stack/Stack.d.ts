declare type Distribution = 'leading' | 'trailing' | 'center' | 'fill';
declare type Alignment = 'leading' | 'trailing' | 'fill' | 'center' | 'baseline';
declare type Spacing = 'none' | 'extraTight' | 'tight' | 'loose' | 'extraLoose';
export interface StackProps {
    /** Stack the elements vertically. Defaults to Horizontal */
    vertical?: boolean;
    /** Defines how elements are arranged along the axis */
    alignment?: Alignment;
    /**
     * Alignment of element perpendicular to the axis.
     * @defaultValue 'Leading'
     */
    distribution?: Distribution;
    /** Spacing between elements */
    spacing?: Spacing;
    /**
     * Wrap elements to additional rows as needed on small screens.
     * @defaultValue `true`
     */
    wrap?: boolean;
}
/**
 * Use to lay out a horizontal row of components or to achieve no-fuss vertical centering.
 *
 * A stack is made of flexible items that wrap each of the stack’s children. Options provide control of the wrapping, spacing, and relative size of the items in the stack.
 * Use `StackItem` to group multiple elements inside a `Stack` together.
 */
export declare const Stack: import("@remote-ui/core").RemoteComponentType<"Stack", StackProps, true>;
export {};
//# sourceMappingURL=Stack.d.ts.map