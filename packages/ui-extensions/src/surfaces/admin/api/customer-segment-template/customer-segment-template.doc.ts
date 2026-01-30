import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer Segment Template Extension API',
  description:
    'This API is available to all customer segment template extension types.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Create a segment template for high-value customers based on purchase history. Use translated content with i18n for international merchants.',
    codeblock: {
      title: 'Target high-value customers',
      tabs: [
        {
          code: './examples/high-value-customers.js',
          language: 'js',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'CustomerSegmentTemplateApi',
      description: '',
      type: 'CustomerSegmentTemplateApi',
    },
  ],
  examples: {
    description: 'Pre-built customer segment templates',
    examples: [
      {
        description:
          'Create a segment template for customers with birthdays in the current month. Use this for birthday marketing campaigns with metafield dependencies.',
        codeblock: {
          title: 'Target birthday customers',
          tabs: [
            {
              code: './examples/birthday-this-month.js',
              language: 'js',
            },
          ],
        },
      },
      {
        description:
          'Create a segment template for cart abandonment recovery. Target customers who recently abandoned checkouts for re-engagement campaigns.',
        codeblock: {
          title: 'Target cart abandoners',
          tabs: [
            {
              code: './examples/abandoned-cart-recovery.js',
              language: 'js',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
};

export default data;
