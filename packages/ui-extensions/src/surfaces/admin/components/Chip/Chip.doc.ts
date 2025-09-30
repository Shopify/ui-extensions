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
              'Common status indicators demonstrating chips in real-world product management scenarios.',
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
              'Demonstrates automatic text truncation for long content within a constrained width.',
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
