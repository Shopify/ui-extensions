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
     * @defaultValue 'block'
     */
    border?: Border;
    /**
     * Sets the background color of the callout banner
     * @defaultValue 'secondary'
     */
    background?: Background;
    /**
     * Sets the alignment of the title and children
     * @defaultValue 'center'
     */
    alignment?: Alignment;
    /**
     * Sets the spacing between the title and children
     * @defaultValue 'tight'
     */
    spacing?: Spacing;
}
/**
 * Use callout banners to inform buyers about new features or opportunities.
 * They differ from the Banner component which is used to report status.
 */
export declare const CalloutBanner: import("@remote-ui/core").RemoteComponentType<"CalloutBanner", CalloutBannerProps, true>;
export {};
//# sourceMappingURL=CalloutBanner.d.ts.map