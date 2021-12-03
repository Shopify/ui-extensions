declare type Spacing = 'none' | 'tight' | 'loose';
declare type Alignment = 'leading' | 'trailing' | 'center';
export interface TextContainerProps {
    /** Align children’s on the horizontal axis  */
    alignment?: Alignment;
    /** Adjust spacing between children */
    spacing?: Spacing;
}
/**
 * TextContainer is used to wrap text elements such as TextBlock and Heading, and provide
 * consistent vertical spacing.
 */
export declare const TextContainer: import("@remote-ui/core").RemoteComponentType<"TextContainer", TextContainerProps, true>;
export {};
//# sourceMappingURL=TextContainer.d.ts.map