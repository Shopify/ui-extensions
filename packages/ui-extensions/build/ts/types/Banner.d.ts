export declare type Status = 'critical' | 'info' | 'success' | 'warning';
export interface BaseBannerProps {
    /** Callback fired when banner is dismissed. */
    onDismiss?: () => void;
    /** Visual treatment of the banner based on message purpose. */
    status?: Status;
    /** Title of the banner. */
    title?: string;
}
//# sourceMappingURL=Banner.d.ts.map