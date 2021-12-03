declare type Spacing = 'xtight' | 'tight' | 'loose' | 'xloose';
declare type Alignment = 'leading' | 'center' | 'trailing' | 'baseline';
export interface InlineStackProps {
    /** Position children along the cross axis */
    alignment?: Alignment;
    /** Adjust spacing between children */
    spacing?: Spacing;
}
/**
 * InlineStack is used to lay out a horizontal row of elements
 */
export declare const InlineStack: import("@remote-ui/core").RemoteComponentType<"InlineStack", InlineStackProps, true>;
export {};
//# sourceMappingURL=InlineStack.d.ts.map