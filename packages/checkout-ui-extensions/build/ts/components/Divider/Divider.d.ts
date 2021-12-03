declare type Direction = 'horizontal' | 'vertical';
declare type Width = 'thin' | 'medium' | 'thick' | 'extraThick';
declare type Alignment = 'start' | 'center' | 'end';
declare type Spacing = 'none' | 'extraTight' | 'tight' | 'base' | 'loose' | 'extraLoose';
export interface DividerProps {
    /** Use to insert space around the divider. */
    blockSpacing?: Spacing;
    /**
     * Use to create dividers with varying widths.
     * By default it will be thin.
     */
    width?: Width;
    /**
     * Use to specify direction of divider.
     * By default it will be horizontal.
     */
    direction?: Direction;
    /**
     * Use to specify alignment of contents of divider.
     * By default it will be center.
     */
    alignment?: Alignment;
}
/**
 * A divider separates content and represents a thematic break between elements.
 */
export declare const Divider: import("@remote-ui/core").RemoteComponentType<"Divider", DividerProps, true>;
export {};
//# sourceMappingURL=Divider.d.ts.map