import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/DropZone';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'dropzone-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'DropZoneProps',
    },
  ],
  defaultExample: {
    image: 'dropzone-preview.png',
    altText:
      'An image showcasing the DropZone component with a button to add files with error and dragged over states.',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-dropzone.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
### File storage

File storage for uploads must be implemented separately. Metafields and the corresponding [Checkout API](https://shopify.dev/docs/api/checkout-ui-extensions/latest/apis/metafields) or [Customer Accounts API](https://shopify.dev/docs/api/customer/latest/mutations/metafieldsSet) can be utilized to store references to files alongside the relevant objects.

### Mobile

Remember that the drag and drop feature won’t be effective on mobile devices. Adding a button can offer additional context and guide users through the next steps.

<img src='/assets/templated-apis-screenshots/checkout-ui-extensions/unstable/dropzone-mobile-example.png' alt="An example showing DropZone with custom content optimized for mobile devices" />

### Minimum size

To prevent cut-off text and spacing issues, the minimum size of a Dropzone should be 100px by 100px.

<img src='/assets/templated-apis-screenshots/checkout-ui-extensions/unstable/dropzone-minimum-size.png' alt="An example showing DropZone with correct minimum size" />
      `,
    },
  ],
};

export default data;
