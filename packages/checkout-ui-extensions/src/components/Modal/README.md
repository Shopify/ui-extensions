# Modal

Modals are a special type of overlay that shift focus towards a specific action/set of information
before the main flow can proceed.
They must be specified inside the `overlay` prop of an activator component (`Button`, `Link` or `Pressable`).

The library takes care of applying the WAI-ARIA Dialog pattern automatically for the activator
and the modal content.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| id? | <code>string</code> | A unique identifier for the Modal. When no `id` is set, a globally unique value will be used instead. |
| onClose? | <code>() => void</code> | Callback when the modal is closed. That is when either the close button, the backdrop, or the `escape` key are pressed. |
| title? | <code>string</code> | A title rendered at the top of the modal. |
| accessibilityLabel? | <code>string</code> | A label to describe the purpose of the modal that is announced by screen readers. If not set, it will use the value of `title`. |
| padding? | <code>boolean</code> | Adds a default spacing around both header (which holds the `title`) and content of the modal. |