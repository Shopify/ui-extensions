declare type Status = 'success' | 'info' | 'attention' | 'warning' | 'new';
export interface BadgeProps {
    /** The content to display inside the badge. */
    message: string;
    /**
     * Set the colour of the badge for the given status.
     * @defaultValue none
     */
    status?: Status;
}
/**
 * Badges are used to inform merchants of the status of an object, or the status of an action that’s been taken.
 */
export declare const Badge: import("@remote-ui/core").RemoteComponentType<"Badge", BadgeProps, true>;
export {};
//# sourceMappingURL=Badge.d.ts.map