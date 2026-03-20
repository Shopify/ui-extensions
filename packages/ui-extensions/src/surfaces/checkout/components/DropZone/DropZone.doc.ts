import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/DropZone';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Accept multiple file uploads at once with a descriptive label. This example shows a drop zone for multiple image uploads with `accept="image/*"` and a `label`.',
        codeblock: {
          title: 'Accept multiple file uploads',
          tabs: [
            {
              code: './examples/drop-zone-multiple.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  type: '',
  definitions: {properties: true, events: true},
  bestPractices: `
### File storage

File storage for uploads must be implemented separately. Metafields and the corresponding [Checkout API](https://shopify.dev/docs/api/checkout-ui-extensions/latest/apis/metafields) or [Customer Accounts API](https://shopify.dev/docs/api/customer/latest/mutations/metafieldsSet) can be utilized to store references to files alongside the relevant objects.

### Mobile

Remember that the drag and drop feature won’t be effective on mobile devices. Adding a button can offer additional context and guide users through the next steps.

<img src='/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/dropzone-mobile-example.png' alt="An example showing DropZone with custom content optimized for mobile devices" />

### Minimum size

To prevent cut-off text and spacing issues, the minimum size of a Dropzone should be 100px by 100px.

<img src='/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/dropzone-minimum-size.png' alt="An example showing DropZone with correct minimum size" />
      `,
});

export default data;
