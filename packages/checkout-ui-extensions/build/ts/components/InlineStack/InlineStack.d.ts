declare type Alignment = 'leading' | 'center' | 'trailing' | 'baseline';
declare type Spacing = 'none' | 'extraTight' | 'tight' | 'base' | 'loose' | 'extraLoose';
export interface InlineStackProps {
    /** Position children along the cross axis */
    alignment?: Alignment;
    /**
     * Adjust spacing between children
     * @defaultValue 'base'
     **/
    spacing?: Spacing;
    /**
     * Wrap elements on multiple lines if content is larger
     * than parent container.
     */
    wrap?: boolean;
}
/**
 * InlineStack is used to lay out a horizontal row of elements
 */
export declare const InlineStack: import("@remote-ui/core").RemoteComponentType<"InlineStack", InlineStackProps, true>;
export {};
//# sourceMappingURL=InlineStack.d.ts.map