declare type Alignment = 'leading' | 'center' | 'trailing';
declare type Spacing = 'xtight' | 'tight' | 'loose' | 'xloose';
export interface BlockStackProps {
    /** Position children along the cross axis */
    alignment?: Alignment;
    /** Adjust spacing between children */
    spacing?: Spacing;
}
/**
 * BlockStack is used to vertically stack elements
 */
export declare const BlockStack: import("@remote-ui/core").RemoteComponentType<"BlockStack", BlockStackProps, true>;
export {};
//# sourceMappingURL=BlockStack.d.ts.map