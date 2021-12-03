interface OptionDescriptor {
    /** Value of the option */
    value: string;
    /** Display label for the option */
    label: string;
    /** Whether the option is disabled or not */
    disabled?: boolean;
}
export interface OptionListProps {
    /** Title to display above the list */
    title?: string;
    /** Array of options to be listed */
    options?: OptionDescriptor[];
    /** Array of selected options */
    selected: string[];
    /** Allow more than one option to be selected */
    allowMultiple?: boolean;
    /**
     * Callback when selection changes
     * @param selected Array of selected options
     * */
    onChange(selected: string[]): void;
}
/**
 * **Note:** This component is not available in Product Subscription extensions.
 *
 * Option lists let you create grouped items. This can include single selection or multiple selection of options.
 * Option lists are styled differently than choice lists and should not be used within a form, but as a standalone menu.
 */
export declare const OptionList: import("@remote-ui/core").RemoteComponentType<"OptionList", OptionListProps, true>;
export {};
//# sourceMappingURL=OptionList.d.ts.map