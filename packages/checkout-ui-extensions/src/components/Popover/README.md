# Popover

Popovers are similar to tooltips. They are small overlays that open on demand after a user interaction.
The difference is that the popover can contain more content, without cluttering the page.
They must be specified inside the `overlay` prop of an activator component (`Button`, `Link` or `Pressable`).

The library takes care of applying the WAI-ARIA Popover Widget pattern automatically for the activator
and the popover content.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| position? | <code>"inlineStart" &#124; "inlineEnd" &#124; "blockStart" &#124; "blockEnd"</code> | Position the Popover relative to the activator.<br /><br />Default value: <code>'blockStart'</code> |
| alignment? | <code>"start" &#124; "center" &#124; "end"</code> | Align the Popover in the axis determined by the position.<br /><br />Default value: <code>'center'</code> |
| onOpen? | <code>() => void</code> | Callback to run when the Popover is opened |
| onClose? | <code>() => void</code> | Callback to run when the Popover is closed |