# Components


## Action

### Button
Buttons are used primarily for actions, such as "Add", "Close", "Cancel", or "Save". 

[Button API](../packages/app-extensions-polaris-components/src/client/core/components/Button.ts)


## Feedback

### Spinner
Spinners are used to notify merchants that their action is being processed. For loading states, spinners should only be used for content that can’t be represented with skeleton loading components, like for data charts.

[Spinner API](../packages/app-extensions-polaris-components/src/client/core/components/Spinner.ts)

### Toast
The toast component is a non-disruptive message that appears at the bottom of the interface to provide quick, at-a-glance feedback on the outcome of an action.

[Toast API](../packages/app-extensions-polaris-components/src/client/core/components/Toast.ts)


## Images and Icons

### Badge
Badges are used to inform merchants of the status of an object or of an action that’s been taken.

[Badge API](../packages/app-extensions-polaris-components/src/client/core/components/Badge.ts)

### Icon
Icons are small visual indicators from a set of pre-defined glyphs. 

[Icon API](../packages/app-extensions-polaris-components/src/client/core/components/Icon.ts)

### Thumbnail
Use thumbnails as a visual anchor and identifier for an object. They should be used along with text to provide context.

[Thumbnail API](../packages/app-extensions-polaris-components/src/client/core/components/Thumbnail.ts)


## Input

### Checkbox
A checkbox is an iput field that merchants can choose selected options.

[Checkbox API](../packages/app-extensions-polaris-components/src/client/core/components/Checkbox.ts)

### Select
Select lets merchants choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface.

[Select API](../packages/app-extensions-polaris-components/src/client/core/components/Select.ts)

### TextField
A textfield is an input field that merchants can type into. It has a range of options and supports several text formats including numbers.

[TextField API](../packages/app-extensions-polaris-components/src/client/core/components/TextField.ts)


## Layout

### Card
Cards are used to group similar concepts and tasks together

* Space between Card:
  * Web: 2rem
  * Android: 16dp
  * iOS: 20pts
* Notes:
  * If two Card next to each other, there is a space between them.
  * If other components are below Card, there is no space.
  * If Card has `sectioned` prop, all of its children will be wrapped inside a CardSection.

[Card API](../packages/app-extensions-polaris-components/src/client/core/components/Card.ts)

### CardSection
Used to group similar concepts within a Card. It also adds a divider between sections if there are more than one

* Padding: 
  * Web: 2rem
  * Android: 16dp
  * iOS: 20pts
* Notes:
  * If two CardSection next to each other, there is a divider between them.
  * If other components are below CardSection, there is no divider.

[CardSection API](../packages/app-extensions-polaris-components/src/client/core/components/CardSection.ts)

### Page
A page is typically the top-level component, which defines the title, associated actions, and children.

* Padding: 
  * Web: 2rem
  * Android: 16dp
  * iOS: 20pts

[Page API](../packages/app-extensions-polaris-components/src/client/core/components/Page.ts)

### Stack
Used to lay out a horizontal or vertical row of components. They can be nested to achieve complex layouts easily.

* Space between child (except `spacing="none"`): 
  * Web: 1.6rem
  * Android: 16dp
  * iOS: 8pts

[Stack API](../packages/app-extensions-polaris-components/src/client/core/components/Stack.ts)

### StackItem
The stack component will treat multiple elements wrapped in a stack item component as one item. By default, each individual element is treated as one stack item. Use the fill prop on a single stack item component to make it fill the rest of the available horizontal space.

[Stack API](../packages/app-extensions-polaris-components/src/client/core/components/StackItem.ts)


## Titles and text

### Text
Used to display text in different sizes, color, and alignment.

[Stack API](../packages/app-extensions-polaris-components/src/client/core/components/Text.ts)


## Overlays

### Modal
Modals are overlays that prevent merchants from interacting with the rest of the application until a specific action is taken. They can be disruptive because they require merchants to take an action before they can continue interacting with the rest of Shopify. It should be used thoughtfully and sparingly.

* Modal content padding: 
  * Web: 2rem
  * Android: 16dp
  * iOS: 20pts

[Stack API](../packages/app-extensions-polaris-components/src/client/core/components/Modal.ts)