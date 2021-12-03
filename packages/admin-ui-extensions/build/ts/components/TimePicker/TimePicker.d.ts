export interface TimePickerProps {
    /** ID for the Element. */
    id: string;
    /** Text to display when no time is selected */
    placeholder?: string;
    /** Callback when a time is selected. */
    onChange?(value: string): void | Promise<void>;
}
/**
 * TimePickers let merchants choose dates from a visual calendar that’s consistently applied wherever dates need to be selected across Shopify.
 */
export declare const TimePicker: import("@remote-ui/core").RemoteComponentType<"TimePicker", TimePickerProps, true>;
//# sourceMappingURL=TimePicker.d.ts.map