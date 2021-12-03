interface Option {
    /** Rendered */
    label: string;
    /** Non-rendered */
    value: string;
}
export interface SelectProps {
    /** Display an error state */
    error?: string;
    /** Label for the select. */
    label: string;
    /** Show the label to the left of the value, inside the control. */
    labelInline?: boolean;
    /** Array of Options to select from. */
    options: Option[];
    /** Callback when selected Option changes. */
    onChange?: (value: string) => void;
    /** Callback when focus is removed */
    onBlur?: () => void;
    /** The value of the currently selected Option. */
    value?: string;
}
/**
 * Select allows merchants to choose one option from a dropdown menu.
 *
 * Consider Select when you have 4 or more options, to avoid creating clutter and make your component more scalable.
 */
export declare const Select: import("@remote-ui/core").RemoteComponentType<"Select", SelectProps, true>;
export {};
//# sourceMappingURL=Select.d.ts.map