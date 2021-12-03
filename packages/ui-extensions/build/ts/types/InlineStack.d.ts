import type { Spacing } from './shared';
export interface BaseInlineStackProps {
    /**
     * Specifies the block alignment. This affects the vertical flow of elements.
     * @defaultValue `leading`
     */
    blockAlignment?: 'leading' | 'center' | 'trailing' | 'baseline';
    /**
     * Specifies the inline alignment. This affects the horizontal flow of elements.
     * @defaultValue `leading`
     */
    inlineAlignment?: 'leading' | 'center' | 'trailing';
    /**
     * Adjust spacing between children.
     * @defaultValue 'base'
     **/
    spacing?: Spacing;
}
//# sourceMappingURL=InlineStack.d.ts.map