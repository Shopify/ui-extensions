export interface ChoiceListProps<T extends string | string[]> {
    /**
     * An identifier for the field that is unique within the nearest
     * containing `<Form />` component.
     */
    name: string;
    /**
     * A string or array of strings indicating the ids of selected choices. When
     * a string is provided, choices render as radios. When a string array is
     * provided, choices render as checkboxes.
     */
    value: T;
    /**
     * A callback that is run whenever the choice list is changed. This callback
     * is called with a string or array of strings indicating the ids of choices
     * that should now be selected. This component is
     * [controlled](https://reactjs.org/docs/forms.html#controlled-components),
     * so you **must** store this value in state and reflect it back in the
     * `value` prop.
     */
    onChange(value: T): void;
}
export interface ChoiceProps {
    /**
     * A unique identifier for the choice.
     */
    id: string;
    /**
     * Whether the choice can be changed.
     */
    disabled?: boolean;
    /**
     * A label to use for the choice that will be used for buyers using
     * assistive technologies. When provided, any `children` supplied to
     * this component are hidden from being seen for accessibility purposes
     * to prevent duplicate content from being read.
     */
    accessibilityLabel?: string;
}
/**
 * Use choice lists to present a list of choices where buyers can make
 * a single selection or multiple selections.
 */
export declare const ChoiceList: import("@remote-ui/core").RemoteComponentType<"ChoiceList", ChoiceListProps<string | string[]>, true>;
/**
 * Use choice lists to create a group of related options for customers to choose from. A choice list can be made up of radio buttons or checkboxes.
 */
export declare const Choice: import("@remote-ui/core").RemoteComponentType<"Choice", ChoiceProps, true>;
//# sourceMappingURL=ChoiceList.d.ts.map