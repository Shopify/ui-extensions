import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/OrderedList';
import listItemSharedContent from '../../../../docs/shared/components/ListItem';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  subcomponent: {
    ...listItemSharedContent,
    definitions: {properties: true},
  },
  bestPractices: `- Use \`s-ordered-list\` when you need to present items in a specific sequence or order.
- Each item in the list should be wrapped in an \`s-list-item\` component.
- Keep list items concise and consistent in length when possible.
- Use \`s-ordered-list\` for step-by-step instructions, numbered procedures, or ranked items.
- Consider using \`s-ordered-list\` when the order of items is important for understanding.`,
});

export default data;
