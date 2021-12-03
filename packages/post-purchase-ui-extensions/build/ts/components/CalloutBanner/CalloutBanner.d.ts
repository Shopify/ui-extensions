declare type Border = 'none' | 'block';
declare type Background = 'secondary' | 'transparent';
declare type Alignment = 'leading' | 'center' | 'trailing';
declare type Spacing = 'none' | 'tight' | 'loose';
export interface CalloutBannerProps {
    /**
     * Callout banners have an optional title. Use a title to grab the buyers
     * attention with a short, concise message.
     */
    title?: string;
    /**
     * Adds a top and bottom border to the callout banner
     * @default 'block'
     */
    border?: Border;
    /**
     * Sets the background color of the callout banner
     * @default 'secondary'
     */
    background?: Background;
    /**
     * Sets the alignment of the title and children
     * @default 'center'
     */
    alignment?: Alignment;
    /**
     * Sets the spacing between the title and children
     * @default 'tight'
     */
    spacing?: Spacing;
}
/**
 * CalloutBanner is used to inform buyers about the details of a limited
 * time offer. They differ from Banner which is used to report status.
 */
export declare const CalloutBanner: import("@remote-ui/core").RemoteComponentType<"CalloutBanner", CalloutBannerProps, true>;
export {};
//# sourceMappingURL=CalloutBanner.d.ts.map