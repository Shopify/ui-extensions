import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Badge';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/badge.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Badge',
    },
    {
      title: 'Slots',
      description: '',
      type: 'BadgeSlots',
    },
  ],
  defaultExample: {
    image: 'badge-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'inline',
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
              'Demonstrates how different badge tones can visually represent various order fulfillment states, enabling merchants to quickly understand order progress at a glance.',
            codeblock: {
              title: 'Order status badges',
              tabs: [
                {
                  code: './examples/order-status-badges.html',
                  language: 'html',
                },

                {
                  code: './examples/order-status-badges.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases how badges can incorporate both tones and icons to provide contextual information across different merchant scenarios, such as product management, inventory tracking, and payment status.',
            codeblock: {
              title: 'Status indicators with icons',
              tabs: [
                {
                  code: './examples/status-indicators-with-icons.html',
                  language: 'html',
                },

                {
                  code: './examples/status-indicators-with-icons.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates how badges can be seamlessly integrated into table layouts to provide quick, visually distinct status indicators for individual table rows.',
            codeblock: {
              title: 'Within table context',
              tabs: [
                {
                  code: './examples/within-table-context.html',
                  language: 'html',
                },

                {
                  code: './examples/within-table-context.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates the two available badge sizes for creating visual hierarchy.',
            codeblock: {
              title: 'Different sizes for emphasis',
              tabs: [
                {
                  code: './examples/different-sizes-for-emphasis.html',
                  language: 'html',
                },

                {
                  code: './examples/different-sizes-for-emphasis.jsx',
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
