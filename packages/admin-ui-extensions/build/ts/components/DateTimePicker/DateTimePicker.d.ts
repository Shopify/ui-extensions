export interface DateTimePickerProps {
    label: string;
    value: string;
    onChange(newValue: string): void;
    error?: string;
    disableDatesBefore?: string;
    disableDatesAfter?: string;
    disabled?: boolean;
}
/**
 * DateTimePicker is a set of text fields with popover a calender and a time selector that allow users to select dates and times.
 */
export declare const DateTimePicker: import("@remote-ui/core").RemoteComponentType<"DateTimePicker", DateTimePickerProps, true>;
//# sourceMappingURL=DateTimePicker.d.ts.map