export declare type Policy = 'subscriptions';
export interface BuyerConsentProps {
    /**
     * Whether the checkbox is active.
     */
    checked: boolean;
    /**
     * An error label to present with the field.
     */
    error?: string;
    /**
     * The policy the buyer has to approve
     */
    policy: Policy;
    /**
     * Callback when the value changes
     */
    onChange(value: boolean): void;
}
/**
 * BuyerConsent is used for collecting the buyer's approval for a given policy
 */
export declare const BuyerConsent: import("@remote-ui/core").RemoteComponentType<"BuyerConsent", BuyerConsentProps, true>;
//# sourceMappingURL=BuyerConsent.d.ts.map