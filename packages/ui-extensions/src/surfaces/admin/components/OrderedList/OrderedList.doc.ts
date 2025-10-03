import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/OrderedList';
import listItemSharedContent from '../../../../docs/shared/components/ListItem';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/ordered-list.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Slots',
      description: '',
      type: 'OrderedListSlots',
    },
    {
      title: listItemSharedContent.name,
      description: listItemSharedContent.description,
      type: 'ListItem',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ListItemSlots',
    },
  ],
  defaultExample: {
    image: 'ordered-list-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'Demonstrates a simple ordered list of steps for setting up an online store.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows a comprehensive workflow for processing an order from review to customer communication.',
            codeblock: {
              title: 'Order processing steps',
              tabs: [
                {
                  code: './examples/order-processing-steps.html',
                  language: 'html',
                },

                {
                  code: './examples/order-processing-steps.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a nested ordered list demonstrating the detailed process of creating and publishing a product online.',
            codeblock: {
              title: 'Product setup instructions',
              tabs: [
                {
                  code: './examples/product-setup-instructions.html',
                  language: 'html',
                },

                {
                  code: './examples/product-setup-instructions.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Displays a complex nested list showing the detailed steps of payment processing and shipment preparation.',
            codeblock: {
              title: 'Fulfillment process',
              tabs: [
                {
                  code: './examples/fulfillment-process.html',
                  language: 'html',
                },

                {
                  code: './examples/fulfillment-process.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
