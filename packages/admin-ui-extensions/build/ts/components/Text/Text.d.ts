export interface TextProps {
    appearance?: 'critical' | 'code' | 'subdued' | 'success';
    emphasized?: boolean;
    /**
     * Unique identifier. Typically used as a target for another component’s controls
     * to associate an accessible label with an action.
     */
    id?: string;
    size?: 'extraSmall' | 'small' | 'base' | 'medium' | 'large' | 'extraLarge';
    strong?: boolean;
}
/**
 * The Text component is used to render text in different sizes, colors, and alignments.
 */
export declare const Text: import("@remote-ui/core").RemoteComponentType<"Text", TextProps, true>;
//# sourceMappingURL=Text.d.ts.map