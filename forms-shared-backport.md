# Forms: Shared Description Backport for checkout-web

Source: `components-shared.d.ts` in ui-extensions (`forms-web-components-2026-04-rc` branch)

These JSDoc description improvements need to be backported to the equivalent source in checkout-web.

---

## GlobalProps

### `id`
**Before:** `A unique identifier for the element.`
**After:** `A unique identifier for the element. Use this to reference the element in JavaScript, link labels to form controls, or target specific elements for styling or scripting.`

---

## FocusEventProps

### `onBlur`
**Before:** `Callback when the element loses focus.` + `@see` MDN link
**After:**
```
A callback fired when the element loses focus.

Learn more about the [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).
```

### `onFocus`
**Before:** `Callback when the element receives focus.` + `@see` MDN link
**After:**
```
A callback fired when the element receives focus.

Learn more about the [focus event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event).
```

---

## InteractionProps

### `commandFor`
**Before:** `ID of a component that should respond to activations (e.g. clicks) on this component. See \`command\` for how to control the behavior of the target.` + `@see` MDN link
**After:**
```
The ID of the component to control when this component is activated. Pair with the \`command\` property to specify what action to perform on the target component.

Learn more about the [\`commandFor\` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor).
```

### `command`
**Before:** `Sets the action the \`commandFor\` should take when this clickable is activated. See the documentation of particular components for the actions they support.` Values: lowercase, `copies the target ClipboardItem.`
**After:** `Sets the action the \`command\` should take when this component is activated. Available options:` Values: Capitalized, reordered (auto first), `Copies the target clipboard item.`

### `interestFor`
**Before:** `ID of a component that should respond to interest (e.g. hover and focus) on this component.`
**After:** `The ID of the component to show when users hover over or focus on this component. Pair with a target component that supports interest-based interactions.`

---

## BaseInputProps

### `name`
**Before:** `An identifier for the field that is unique within the nearest containing form.`
**After:** `The name attribute for the field, used to identify the field's value when the form is submitted. Must be unique within the nearest containing form.`

### `disabled` (field)
**Before:** `Disables the field, disallowing any interaction.`
**After:** `Whether the field is disabled, preventing any user interaction.`

---

## InputProps

### `onChange`
**Before:** `Callback when the user has **finished editing** a field, e.g. once they have blurred the field.` + `@see`
**After:**
```
A callback fired when the user has **finished editing** a field, such as when they blur the field or press Enter.

Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
```

### `onInput`
**Before:** `Callback when the user makes any changes in the field.` + `@see`
**After:**
```
A callback fired when the user makes any changes in the field, such as typing a character.

Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).
```

### `defaultValue`
**Before:** `The default value for the field.`
**After:** `The initial value of the field when it first loads. Unlike \`placeholder\`, this is a real value that the user can edit and that gets submitted with the form. Once the user starts typing, their input replaces this value.`

---

## MultipleInputProps

### `onChange`
**Before:** `Callback when the user has selected option(s).` + `@see`
**After:**
```
A callback fired when the user has selected one or more options.

Learn more about the [change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
```

### `onInput`
**Before:** `Callback when the user has selected option(s).` + `@see`
**After:**
```
A callback fired when the user selects or deselects options.

Learn more about the [input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).
```

---

## FileInputProps

### `onChange`
**Before:** `Callback when the user has **finished selecting** a file or files.`
**After:** `A callback fired when the user has finished selecting one or more files.`

### `onInput`
**Before:** `Callback when the user makes any changes in the file selection.`
**After:** `A callback fired when the user makes any changes to the file selection.`

---

## FieldErrorProps

### `error`
**Before:** `Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.`
**After:** `An error message displayed below the field to indicate validation problems. When set, the field is styled with error indicators and the message is announced to screen readers.`

---

## BasicFieldProps

### `label` (field)
**Before:** `Content to use as the field label.`
**After:** `The text displayed as the field label, which identifies the purpose of the field to users. This label is associated with the field for accessibility and helps users understand what information to provide.`

### `readOnly`
**Before:** `The field cannot be edited by the user. It is focusable will be announced by screen readers.`
**After:** `Whether the field is read-only and can't be edited. Read-only fields remain focusable and their content is announced by screen readers.`

---

## FieldProps

### `placeholder`
**Before:** `A short hint that describes the expected value of the field.`
**After:** `The placeholder text displayed in the field when it's empty, providing a hint about the expected input format or value.`

---

## LabelAccessibilityVisibilityProps

### `labelAccessibilityVisibility`
**Before:** `Changes the visibility of the component's label.` Values: `visible: the label is visible...`, `exclusive: the label is visually hidden...`
**After:** `Controls whether the label is visible to all users or only to screen readers.` Values: `visible: The label is shown to everyone.`, `exclusive: The label is visually hidden but still announced by screen readers.`

---

## BackgroundProps

### `background`
**Before:** `Adjust the background of the element.` (no value descriptions)
**After:** `Adjust the background of the element.` + value descriptions: `transparent`, `subdued`, `base`, `strong`

---

## BaseCheckableProps

### `label` (control)
**Before:** `Visual content to use as the control label.`
**After:** `The text displayed as the control label, which identifies the purpose of the control to users. This label is associated with the control for accessibility.`

### `name` (control)
**Before:** `An identifier for the control that is unique within the nearest containing \`Form\` component.`
**After:** `The name attribute for the control, used to identify its value when the form is submitted. Must be unique within the nearest containing form.`

### `checked`
**Before:** `Whether the control is active.`
**After:** `Whether the control is currently checked.`

### `defaultChecked`
**Before:** `Whether the control is active by default.`
**After:** `Whether the control is checked by default.`

### `disabled` (control)
**Before:** `Disables the control, disallowing any interaction.`
**After:** `Whether the control is disabled, preventing any user interaction.`

---

## BaseSelectableProps

### `selected`
**Before:** `Whether the control is active.`
**After:** `Whether the control is currently selected.`

### `defaultSelected`
**Before:** `Whether the control is active by default.`
**After:** `Whether the control is selected by default.`

---

## ChoiceProps

### `secondaryContent`
**Before:** `Secondary content for a choice.`
**After:** `Additional text or elements displayed below the choice label, providing extra context or detail to help users make a selection.`

### `error`
**Before:** `Set to \`true\` to associate a choice with the error passed to \`ChoiceList\``
**After:** `Whether this choice is associated with the error state of the parent choice list. When \`true\`, the choice is visually marked as having an error.`

---

## AutocompleteProps

### `autocomplete`
**Before:** `A hint as to the intended content of the field.` + `@see` link + multiple `@default` lines
**After:** `A hint about the intended content of the field for browser autofill.` + inline `Learn more` link + single `@default 'on'`

---

## NumberConstraintsProps

### `controls`
**Before:** Values listed as stepper/none/auto (lowercase, unordered)
**After:** Values reordered as auto/stepper/none (capitalized, matching type order)

### `max`
**Before:** `Note: a user will still be able to use the keyboard to input a number higher than the max. It is up to the developer to add appropriate validation.`
**After:** `Note: a user can still use the keyboard to input a number higher than the max. It's up to the developer to add appropriate validation.`

### `min`
**Before:** Same pattern with "lower than the min"
**After:** Same contraction fix

---

## NumberFieldProps (inputMode)

### `inputMode`
**Before:** `Sets the virtual keyboard.` + `@see` MDN link (no value descriptions)
**After:** `Sets the virtual keyboard layout for the field.` + value descriptions for `decimal` and `numeric` + inline `Learn more` link

---

## FieldDecorationProps

### `prefix`
**Before:** `This cannot be edited by the user...`
**After:** `This can't be edited by the user...`

### `suffix`
**Before:** Same
**After:** Same contraction

---

## MinMaxLengthProps

### `minLength`
**Before:** `Specifies the min number of characters allowed.`
**After:** `Specifies the minimum number of characters allowed.`

---

## ConsentPolicy (type)

**Before:** No JSDoc
**After:**
```
The type of consent policy being collected.

- \`'sms-marketing'\`: Represents the policy for SMS marketing consent.
```

## ConsentCheckboxProps / ConsentPhoneFieldProps

### `policy`
**Before:** `The policy for which user consent is being collected for.` + inline SMS description
**After:** `The policy for which user consent is being collected.` (SMS description moved to ConsentPolicy type)
