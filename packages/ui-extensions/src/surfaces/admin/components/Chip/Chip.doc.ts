import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Chip';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/chip.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Labeling, organizing, and categorizing objects
- Highlighting content attributes
- Enhancing discoverability by identifying items with similar properties`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- \`subdued\`: use for secondary or less important information
- \`base\`: use as default color
- \`strong\`: use for important or verified status
- Text truncates automatically, keep labels short to avoid truncation
- Chips are static indicators, not interactive or dismissible. For interactive chips, use ClickableChip
- Add icons to \`graphic\` slot to provide visual context
- Display chips near the content they classify`,
    },
    {
      title: 'Content guidelines',
      type: 'Generic' as const,
      anchorLink: 'content-guidelines',
      sectionContent: `Chip labels should:
- Be short and concise to avoid truncation
- Use \`accessibilityLabel\` to describe purpose for screen readers
- Common status labels: \`Active\`, \`Draft\`, \`Published\`, \`Verified\`
- Common category labels: \`Product type\`, \`Collection\`, \`Tag name\``,
    },
  ],
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
              'Simple chip displaying product status without an icon.',
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
              'Chip enhanced with an icon to provide visual context for the category.',
            codeblock: {
              title: 'With icon graphic',
              tabs: [
                {
                  code: './examples/with-icon-graphic.html',
                  language: 'html',
                },

                {
                  code: './examples/with-icon-graphic.jsx',
                  language: 'preview-jsx',
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
                  language: 'html',
                },

                {
                  code: './examples/color-variants.jsx',
                  language: 'preview-jsx',
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
                  language: 'html',
                },

                {
                  code: './examples/product-status.jsx',
                  language: 'preview-jsx',
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
                  language: 'html',
                },

                {
                  code: './examples/text-truncation.jsx',
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
