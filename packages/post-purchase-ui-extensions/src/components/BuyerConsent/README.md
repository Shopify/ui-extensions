# BuyerConsent

BuyerConsent is used for collecting the buyer's approval for a given policy

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| checked | <code>boolean</code> | Whether the checkbox is active.  |
| error? | <code>string</code> | An error label to present with the field.  |
| policy | <code>"subscriptions"</code> | The policy the buyer has to approve  |
| onChange | <code>(value: boolean) => void</code> | Callback when the value changes  |