import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/UnorderedList';
import listItemSharedContent from '../../../../docs/shared/components/ListItem';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  subcomponent: {
    ...listItemSharedContent,
    definitions: {properties: true},
  },
  bestPractices: `- Use \`s-unordered-list\` when you need to present a list of related items or options.
- Each item in the list should be wrapped in a \`s-list-item\` component.
- Keep list items concise and consistent in length when possible.
- Use \`s-unordered-list\` for navigation menus, feature lists, or any collection of related items.
- Consider using \`s-unordered-list\` when you want to present information in a clear, scannable format.`,
});

export default data;
