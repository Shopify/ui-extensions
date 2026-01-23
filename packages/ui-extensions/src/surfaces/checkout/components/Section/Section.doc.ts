import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Section';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  usefulFor: `- Organizing your page in a logical structure based on nesting levels.
- Creating consistency across pages.`,
  considerations: `- When adding headings inside sections they automatically use a specific style, which helps keep the content organized and clear.`,
});

export default data;
