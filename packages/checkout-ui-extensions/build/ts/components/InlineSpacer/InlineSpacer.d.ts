declare type Size = 'extraSmall' | 'small' | 'base' | 'large' | 'extraLarge';
export interface InlineSpacerProps {
    /**
     * Adjust size of the spacer
     * @defaultValue 'base'
     **/
    size?: Size;
}
/**
 * InlineSpacer is used to create empty inline space, typically when variable spacing
 * is needed between multiple elements.
 * Note that you should favor InlineStack when spacing between all elements is the same.
 */
export declare const InlineSpacer: import("@remote-ui/core").RemoteComponentType<"InlineSpacer", InlineSpacerProps, true>;
export {};
//# sourceMappingURL=InlineSpacer.d.ts.map