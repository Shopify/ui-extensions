import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Image';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  bestPractices: `- Use high-resolution images to ensure they look crisp on all devices.
- Optimize images for performance to reduce load times.
- Use images purposefully to add clarity and guide users through the experience.`,
});

export default data;
