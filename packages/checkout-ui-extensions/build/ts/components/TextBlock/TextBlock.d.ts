declare type Size = 'extraSmall' | 'small' | 'base' | 'medium' | 'large' | 'extraLarge';
export interface TextBlockProps {
    /** Size of the text */
    size?: Size;
    emphasized?: boolean;
    subdued?: boolean;
    /** Unique identifier */
    id?: string;
    /** Changes the visual appearance */
    appearance?: 'critical' | 'warning' | 'success' | 'accent';
}
/**
 * Text block is used to render a block of text that occupies the full width available, like a paragraph.
 */
export declare const TextBlock: import("@remote-ui/core").RemoteComponentType<"TextBlock", TextBlockProps, true>;
export {};
//# sourceMappingURL=TextBlock.d.ts.map