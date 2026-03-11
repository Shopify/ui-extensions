import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Paragraph';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  bestPractices: `- Create contrast between more and less important text using properties such as \`color\` and \`tone\`.`,
});

export default data;
