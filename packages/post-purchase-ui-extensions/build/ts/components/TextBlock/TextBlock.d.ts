declare type Size = 'small' | 'medium' | 'large' | 'xlarge';
export interface TextBlockProps {
    /** Size of the text */
    size?: Size;
    emphasized?: boolean;
    subdued?: boolean;
    /** Unique identifier */
    id?: string;
    /** Changes the visual appearance */
    appearance?: 'critical' | 'warning' | 'success';
}
/**
 * TextBlock is used to render a block of text that occupies the full width available.
 * Usually used to render paragraphs or text.
 */
export declare const TextBlock: import("@remote-ui/core").RemoteComponentType<"TextBlock", TextBlockProps, true>;
export {};
//# sourceMappingURL=TextBlock.d.ts.map