import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Chip';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/chip.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Chip',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ChipSlots',
    },
  ],
  defaultExample: {
    image: 'chip-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
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
              'Simple chip displaying product status without an icon.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Chip enhanced with an icon to provide visual context for the category.',
            codeblock: {
              title: 'With icon graphic',
              tabs: [
                {
                  code: './examples/with-icon-graphic.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates all three color variants for different levels of visual emphasis.',
            codeblock: {
              title: 'Color variants',
              tabs: [
                {
                  code: './examples/color-variants.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Common product status indicators used throughout the product catalog.',
            codeblock: {
              title: 'Product status',
              tabs: [
                {
                  code: './examples/product-status.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Order fulfillment status indicators for the orders section.',
            codeblock: {
              title: 'Order status',
              tabs: [
                {
                  code: './examples/order-status.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Inventory tracking indicators for product availability.',
            codeblock: {
              title: 'Inventory status',
              tabs: [
                {
                  code: './examples/inventory-status.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description: 'Payment state indicators for transaction tracking.',
            codeblock: {
              title: 'Payment status',
              tabs: [
                {
                  code: './examples/payment-status.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Customer categorization labels for segmentation and personalization.',
            codeblock: {
              title: 'Customer tags',
              tabs: [
                {
                  code: './examples/customer-tags.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Shipping and delivery option indicators for order management.',
            codeblock: {
              title: 'Shipping methods',
              tabs: [
                {
                  code: './examples/shipping-methods.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Discount and promotion indicators for pricing and marketing.',
            codeblock: {
              title: 'Discount labels',
              tabs: [
                {
                  code: './examples/discount-labels.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Product variation attributes for inventory management.',
            codeblock: {
              title: 'Product variants',
              tabs: [
                {
                  code: './examples/product-variants.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description: 'Product collection labels for catalog organization.',
            codeblock: {
              title: 'Collections',
              tabs: [
                {
                  code: './examples/collections.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates automatic text truncation for long content.',
            codeblock: {
              title: 'Text truncation',
              tabs: [
                {
                  code: './examples/text-truncation.html',
                  language: 'preview',
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
