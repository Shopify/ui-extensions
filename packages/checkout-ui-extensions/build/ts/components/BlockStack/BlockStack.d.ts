declare type Alignment = 'leading' | 'center' | 'trailing';
declare type Spacing = 'none' | 'extraTight' | 'tight' | 'base' | 'loose' | 'extraLoose';
export interface BlockStackProps {
    /** Position children along the cross axis */
    alignment?: Alignment;
    /**
     * Adjust spacing between children
     * @defaultValue 'base'
     **/
    spacing?: Spacing;
}
/**
 * BlockStack is used to vertically stack elements
 */
export declare const BlockStack: import("@remote-ui/core").RemoteComponentType<"BlockStack", BlockStackProps, true>;
export {};
//# sourceMappingURL=BlockStack.d.ts.map