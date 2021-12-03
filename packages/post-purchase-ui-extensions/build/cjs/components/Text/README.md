# Text

Text is used to visually style and provide semantic value for a small piece of text
content.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| size? | <code>"auto" &#124; "fill" &#124; number</code> | Size of the text  |
| emphasized? | <code>boolean</code> |  |
| subdued? | <code>boolean</code> |  |
| role? | <code>"address" &#124; "deletion" &#124; <a href="#abbreviationroletype">AbbreviationRoleType</a> &#124; <a href="#directionaloverrideroletype">DirectionalOverrideRoleType</a> &#124; <a href="#datetimeroletype">DatetimeRoleType</a></code> | Assign semantic value  |
| id? | <code>string</code> | Unique identifier. Typically used as a target for another component’s controls to associate an accessible label with an action.  |
| appearance? | <code>"critical" &#124; "warning" &#124; "success"</code> | Changes the visual appearance  |<a name="DatetimeRoleType"></a>

### DatetimeRoleType

Indicate the text is a date, a time or a duration. Use the &#34;machineReadable&#34; option
to help browsers, tools or software understand the human-readable date. Valid format
for &#34;machineReadable&#34; can be found here:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#Valid_datetime_Values

| Name | Type | Description |
| --- | --- | --- |
| type | <code>"datetime"</code> |  |
| machineReadable? | <code>string</code> |  |<a name="DirectionalOverrideRoleType"></a>

### DirectionalOverrideRoleType

Override the text directionality. Typically used for email and phone numbers.

| Name | Type | Description |
| --- | --- | --- |
| type | <code>"directional-override"</code> |  |
| direction | <code>"ltr" &#124; "rtl"</code> |  |<a name="AbbreviationRoleType"></a>

### AbbreviationRoleType

Indicate the text is an abbreviation or acronym. Use the &#34;for&#34; option to
provide a description of the abbreviation.

| Name | Type | Description |
| --- | --- | --- |
| type | <code>"abbreviation"</code> |  |
| for? | <code>string</code> |  |