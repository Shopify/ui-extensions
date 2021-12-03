export interface CheckboxProps {
    /** Label for the checkbox. */
    label?: string;
    /** Checkbox is selected. */
    checked?: boolean;
    /**
     * Alias for `checked`, to support iterating over multiple types of form fields.
     * If both `checked` and `value` are used, `checked` is the source of truth.
     */
    value?: boolean;
    /** Callback when checkbox is toggled. */
    onChange?(value: boolean): void | Promise<void>;
}
/**
 * Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple).
 */
export declare const Checkbox: import("@remote-ui/core").RemoteComponentType<"Checkbox", CheckboxProps, true>;
//# sourceMappingURL=Checkbox.d.ts.map