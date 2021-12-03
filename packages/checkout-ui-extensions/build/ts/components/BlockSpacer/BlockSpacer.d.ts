declare type Size = 'extraSmall' | 'small' | 'base' | 'large' | 'extraLarge';
export interface BlockSpacerProps {
    /**
     * Adjust size of the spacer
     * @defaultValue 'base'
     **/
    size?: Size;
}
/**
 * BlockSpacer is used to create empty block space, typically when variable spacing
 * is needed between multiple elements.
 * Note that you should favor BlockStack when spacing between all elements is the same.
 */
export declare const BlockSpacer: import("@remote-ui/core").RemoteComponentType<"BlockSpacer", BlockSpacerProps, true>;
export {};
//# sourceMappingURL=BlockSpacer.d.ts.map