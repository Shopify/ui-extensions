# ChoiceList

Use choice lists to present a list of choices where buyers can make
a single selection or multiple selections.

## Props

optional = ?

| Name     | Type                                                 | Description                                                                                                                                                                                                                                                                                                                                                |
| -------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name     | <code>string</code>                                  | An identifier for the field that is unique within the nearest containing `Form` component.                                                                                                                                                                                                                                                                 |
| value    | <code>string &#124; string[]</code>                  | A `string` or `string[]` indicating the ids of selected choices. When a string is set, choices render as radios. When a string array is set, choices render as checkboxes.                                                                                                                                                                                 |
| onChange | <code>(value: string &#124; string[]) => void</code> | A callback that is run whenever the choice list is changed. This callback is called with a string or array of strings indicating the ids of choices that should now be selected. This component is [controlled](https://reactjs.org/docs/forms.html#controlled-components), so you must store this value in state and reflect it back in the `value` prop. |
