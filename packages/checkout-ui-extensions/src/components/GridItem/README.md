# GridItem

GridItem can be used as children of Grid.

It offers a way to span the element across a number of columns and rows.

## Props
optional = ?

| Name | Type | Description |
| --- | --- | --- |
| columnSpan? | <code>number</code> | Number of columns the item will span across  |
| rowSpan? | <code>number</code> | Number of rows the item will span across  |
| accessibilityRole? | <code><a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a> &#124; [<a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a>, <a href="#nonpresentationalaccessibilityrole">NonPresentationalAccessibilityRole</a>]</code> | Sets the semantic meaning of the component’s content. When set, the role will be used by assistive technologies to help buyers navigate the page.<br /><br /> Examples:<br /><br />- In an HTML host a `['listItem', 'separator']` tuple will render: &lt;li role='separator'&gt;<br /><br />- In an HTML host a `listItem` string will render: &lt;li&gt;  |
<a name="NonPresentationalAccessibilityRole"></a>

### NonPresentationalAccessibilityRole

| Value | Description |
| --- | --- |
| <code>"main"</code> | Used to indicate the primary content. |
| <code>"header"</code> | Used to indicate the component is a header. |
| <code>"footer"</code> | Used to display information such as copyright information, navigation links, and privacy statements. |
| <code>"section"</code> | Used to indicate a generic section. |
| <code>"complementary"</code> | Used to designate a supporting section that relates to the main content. |
| <code>"navigation"</code> | Used to identify major groups of links used for navigating. |
| <code>"orderedList"</code> | Used to identify a list of ordered items. |
| <code>"listItem"</code> | Used to identify an item inside a list of items. |
| <code>"unorderedList"</code> | Used to identify a list of unordered items. |
| <code>"separator"</code> | Used to indicates the component acts as a divider that separates and distinguishes sections of content. |
| <code>"status"</code> | Used to define a live region containing advisory information for the user that is not important enough to be an alert. |
| <code>"alert"</code> | Used for important, and usually time-sensitive, information. |