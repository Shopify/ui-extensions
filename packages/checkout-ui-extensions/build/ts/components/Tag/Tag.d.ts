export interface TagProps {
    /** An accessible label for the remove button in a Tag */
    removeControlAccessibilityLabel?: string;
    /** Callback when tag is removed */
    onRemove?(): void;
}
/**
 * A Tag is used to help label, organize or categorize objects. It is commonly used in Checkout to display the discounts applied to a cart.
 */
export declare const Tag: import("@remote-ui/core").RemoteComponentType<"Tag", TagProps, true>;
//# sourceMappingURL=Tag.d.ts.map