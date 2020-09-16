# Components

## Action

### Button

Buttons are used primarily for actions, such as "Add", "Close", "Cancel", or "Save".

[Button API](../packages/argo-admin/src/components/Button.ts)

### Link

Links take users to another place, and usually appear within or directly following a sentence.

[Link API](../packages/argo-admin/src/components/Link.ts)

## Basic

### Pressable

Pressable component wraps other components to add `onPress()` functionality. Do not use on `Button` or `Link`.

[Cickable API](../packages/argo-admin/src/components/Pressable.ts)

### Text

Used to display text in different sizes, color, and alignment.

[Text API](../packages/argo-admin/src/components/Text.ts)

### Stack

Used to lay out a horizontal or vertical row of components. They can be nested to achieve complex layouts easily.

- Space between child (except `spacing="none"`):
  - Web: 1.6rem
  - Android: 16dp
  - iOS: 8pts

```tsx
<Stack>
  <Badge>Paid</Badge>
  <Badge>Processing</Badge>
  <Badge>Fulfilled</Badge>
  <Badge>Completed</Badge>
</Stack>
```

[Stack API](../packages/argo-admin/src/components/Stack.ts)

### StackItem

The stack component will treat multiple elements wrapped in a stack item component as one item. By default, each individual element is treated as one stack item. Use the fill prop on a single stack item component to make it fill the rest of the available horizontal space.

[StackItem API](../packages/argo-admin/src/components/StackItem.ts)

## Feedback

### Banner

Informs merchants about important changes or persistent conditions. Use this component if you need to communicate to merchants in a prominent way. Banners are placed at the top of the page or section they apply to, and below the page or section header.

[Banner API](../packages/argo-admin/src/components/Banner.ts)

### Badge

Badges are used to inform merchants of the status of an object or of an action that’s been taken.

[Badge API](../packages/argo-admin/src/components/Badge.ts)

## Image and Icon

### Icon

Icons are small visual indicators from a set of pre-defined glyphs.

[Icon API](../packages/argo-admin/src/components/Icon.ts)

### Thumbnail

Use thumbnails as a visual anchor and identifier for an object. They should be used along with text to provide context.

[Thumbnail API](../packages/argo-admin/src/components/Thumbnail.ts)

## Form

### Checkbox

A checkbox is an input field that merchants can choose selected options.

[Checkbox API](../packages/argo-admin/src/components/Checkbox.ts)

### Radio

Use radios where merchants must make a single selection.

[Radio API](../packages/argo-admin/src/components/Radio.ts)

### Select

Select lets merchants choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface.

[Select API](../packages/argo-admin/src/components/Select.ts)

### TextField

A textfield is an input field that merchants can type into. It has a range of options and supports several text formats including numbers.

[TextField API](../packages/argo-admin/src/components/TextField.ts)

## Structure

### Card

Cards are used to group similar concepts and tasks together

- Space between Card:
  - Web: 2rem
  - Android: 16dp
  - iOS: 20pts
- Notes:
  - If two Card next to each other, there is a space between them.
  - If other components are below Card, there is no space.
  - If Card has `sectioned` prop, all of its children will be wrapped inside a CardSection.

[Card API](../packages/argo-admin/src/components/Card.ts)

### CardSection

Used to group similar concepts within a Card. It also adds a divider between sections if there are more than one

- Padding:
  - Web: 2rem
  - Android: 16dp
  - iOS: 20pts
- Notes:
  - If two CardSection next to each other, there is a divider between them.
  - If other components are below CardSection, there is no divider.

[CardSection API](../packages/argo-admin/src/components/CardSection.ts)

### Page

A page is typically the top-level component, which defines the title, associated actions, and children.

- Padding:
  - Web: 2rem
  - Android: 16dp
  - iOS: 20pts

[Page API](../packages/argo-admin/src/components/Page.ts)

## List

### OptionList

The option list component lets you create a list of grouped items. This
can include single selection or multiple selection of options. Option
list usually appears in a popover, and sometimes in a modal or a
sidebar.

[OptionList API](../packages/argo-admin/src/components/OptionList.ts)

### ResourceItem

Resource items represent specific objects within a collection, such as products or orders. They provide contextual information on the resource type and link to the object's detail page.

[ResourceItem API](../packages/argo-admin/src/components/ResourceItem.ts)

### ResourceList

A resource list displays a collection of objects of the same type, like products or customers. The main job of a resource list is to help merchants find an object and navigate to a full-page representation of it.

[ResourceList API](../packages/argo-admin/src/components/ResourceList.ts)

## Loading

### Spinner

Spinners are used to notify merchants that their action is being processed. For loading states, spinners should only be used for content that can’t be represented with skeleton loading components, like for data charts.

[Spinner API](../packages/argo-admin/src/components/Spinner.ts)

## Overlays

### Modal

Modals are overlays that prevent merchants from interacting with the rest of the application until a specific action is taken. They can be disruptive because they require merchants to take an action before they can continue interacting with the rest of Shopify. It should be used thoughtfully and sparingly.

- Modal content padding:
  - Web: 2rem
  - Android: 16dp
  - iOS: 20pts

[Modal API](../packages/argo-admin/src/components/Modal.ts)
