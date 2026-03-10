import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Button';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  bestPractices: `**Content Best Practices**

- Clearly label each button with what it does. Users should be able to predict the result of clicking the button.
- Start button text with a strong action verb that describes the action (e.g., "Add", "Save", "Apply").

**Hierarchy Best Practices**

- Create a clear visual hierarchy by varying the emphasis level of the buttons.
- There should only be one high emphasis (primary) button per area. All the other buttons should be lower emphasis.
- Use primary buttons for the most important action in a given flow (e.g. "Pay now", "Apply").
- Use secondary buttons for alternative actions (e.g. "Track your order").

**When to Use**

- Use buttons when you want the user to take an action.
- Use buttons when you need a way to explicitly control user interaction (e.g. form submissions or toggle states).

**When not to Use**

- Don't use buttons for navigation. Use links instead.`,
});

export default data;
