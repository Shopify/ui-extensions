import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/DropZone';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  bestPractices: `- **File storage:** Implement file storage separately. Use Metafields through the Checkout API or Customer Accounts API to store references to uploaded files.
- **Mobile considerations:** Drag and drop functionality is limited on mobile devices. Include a button to help guide users to select files.
- **Minimum size:** Keep the DropZone at least 100px × 100px to avoid cut-off text and spacing issues.`,
});

export default data;
