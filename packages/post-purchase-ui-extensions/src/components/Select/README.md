# Select

Selects let buyers choose one option from an options menu. Consider select
when you have 4 or more options, to avoid cluttering the interface.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| id? | <code>string</code> | A unique identifier for the field. When no `id` is provided, a globally unique value will be used instead.  |
| label | <code>string</code> | Content to use as the field label.  |
| name? | <code>string</code> | An identifier for the field that is unique within the nearest containing `&lt;Form /&gt;` component.  |
| value? | <code>string</code> | The active option for the select. This should match to one of the `value` properties in the `options` prop. When not provided, the value will default to an empty string, which will show the `placeholder` text as the &#34;selected value&#34;.  |
| options | <code><a href="#option">Option</a>[]</code> | The options a buyer can select from.  |
| required? | <code>boolean</code> | Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` prop.  |
| disabled? | <code>boolean</code> | Whether the select can be changed.  |
| error? | <code>string</code> | An error label to present with the field.  |
| autocomplete? | <code><a href="#autocomplete">Autocomplete</a> &#124; boolean</code> | A hint as to the intended content of the field.<br /><br />When set to `true`, this property indicates that the field should support autofill, but you do not have any more semantic information on the intended contents.<br /><br />When set to `false`, you are indicating that this field contains sensitive information, or contents that are never saved, like one-time codes. Note that it is impossible to prevent autocomplete in some browsers, so do not depend on its absence.<br /><br />Alternatively, you can provide an `Autocomplete` object, which describes the specific data you would like to be entered into this field during autocomplete.  |
| placeholder? | <code>string</code> | The text displayed in the select when no value is provided.  |
| onChange? | <code>(value: string) => void</code> | A callback that is run whenever the selected option changes. This callback is called with the string `value` of the selected `option`. This component is [controlled](https://reactjs.org/docs/forms.html#controlled-components), so you **must** store this value in state and reflect it back in the `value` prop of the select.  |<a name="Autocomplete"></a>

### Autocomplete

A descriptor for selecting the data a field would like to receive during
autocomplete. This attribute is modeled off of a limited set of the autocomplete
values supported in browsers.

| Name | Type | Description |
| --- | --- | --- |
| group? | <code>"shipping" &#124; "billing"</code> | The contact information “group” the autocomplete data should be sourced from.  |
| field | <code>"name" &#124; "honorific-prefix" &#124; "given-name" &#124; "additional-name" &#124; "family-name" &#124; "honorific-suffix" &#124; "nickname" &#124; "username" &#124; "new-password" &#124; "current-password" &#124; "one-time-code" &#124; "organization-title" &#124; "organization" &#124; "street-address" &#124; "address-line1" &#124; "address-line2" &#124; "address-line3" &#124; "address-level4" &#124; "address-level3" &#124; "address-level2" &#124; "address-level1" &#124; "country" &#124; "country-name" &#124; "postal-code" &#124; "credit-card-name" &#124; "credit-card-given-name" &#124; "credit-card-additional-name" &#124; "credit-card-family-name" &#124; "credit-card-number" &#124; "credit-card-expiry" &#124; "credit-card-expiry-month" &#124; "credit-card-expiry-year" &#124; "credit-card-security-code" &#124; "credit-card-type" &#124; "transaction-currency" &#124; "transaction-amount" &#124; "language" &#124; "birthday" &#124; "birthday-day" &#124; "birthday-month" &#124; "birthday-year" &#124; "sex" &#124; "url" &#124; "photo" &#124; "telephone" &#124; "telephone-country-code" &#124; "telephone-national" &#124; "telephone-area-code" &#124; "telephone-local" &#124; "telephone-local-prefix" &#124; "telephone-local-suffix" &#124; "telephone-extension" &#124; "email" &#124; "instant-message" &#124; "home telephone" &#124; "home telephone-country-code" &#124; "home telephone-national" &#124; "home telephone-area-code" &#124; "home telephone-local" &#124; "home telephone-local-prefix" &#124; "home telephone-local-suffix" &#124; "home telephone-extension" &#124; "home email" &#124; "home instant-message" &#124; "work telephone" &#124; "work telephone-country-code" &#124; "work telephone-national" &#124; "work telephone-area-code" &#124; "work telephone-local" &#124; "work telephone-local-prefix" &#124; "work telephone-local-suffix" &#124; "work telephone-extension" &#124; "work email" &#124; "work instant-message" &#124; "mobile telephone" &#124; "mobile telephone-country-code" &#124; "mobile telephone-national" &#124; "mobile telephone-area-code" &#124; "mobile telephone-local" &#124; "mobile telephone-local-prefix" &#124; "mobile telephone-local-suffix" &#124; "mobile telephone-extension" &#124; "mobile email" &#124; "mobile instant-message" &#124; "fax telephone" &#124; "fax telephone-country-code" &#124; "fax telephone-national" &#124; "fax telephone-area-code" &#124; "fax telephone-local" &#124; "fax telephone-local-prefix" &#124; "fax telephone-local-suffix" &#124; "fax telephone-extension" &#124; "fax email" &#124; "fax instant-message" &#124; "pager telephone" &#124; "pager telephone-country-code" &#124; "pager telephone-national" &#124; "pager telephone-area-code" &#124; "pager telephone-local" &#124; "pager telephone-local-prefix" &#124; "pager telephone-local-suffix" &#124; "pager telephone-extension" &#124; "pager email" &#124; "pager instant-message"</code> | The type of data that should be inserted into a field supporting autocomplete.  |<a name="Option"></a>

### Option

| Name | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | The value that will be passed to the select’s `onChange` callback when this option is selected.  |
| label | <code>string</code> | The buyer-facing label for this option.  |
| disabled? | <code>boolean</code> | Whether this option can be selected or not.  |