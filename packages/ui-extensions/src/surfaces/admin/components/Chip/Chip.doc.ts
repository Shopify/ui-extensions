import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Chip';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/chip.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use chips to label and categorize content:** [chip](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/typography-and-content/chip) works best for displaying tags, statuses, and categories that help merchants quickly understand content attributes. Don't use chips for actions—they're visual indicators, not buttons.
- **Keep chip text concise and scannable:** Short labels like "Featured" or "On sale" are instantly recognizable. Long chip text defeats the purpose of quick scanning and might truncate, hiding important information.
- **Choose the right visual weight:** Use subdued chips for secondary metadata, standard chips for typical tags and categories, and strong chips for important or verified information that needs emphasis.
- **Position chips near what they describe:** Place chips adjacent to the items they categorize for immediate context. In lists, position chips consistently to help merchants scan efficiently.
- **Add icons to reinforce meaning:** Icons can make chip meanings clearer at a glance, especially for status indicators or commonly recognized categories.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Chip text is single-line only and truncates with an ellipsis when space is limited. There's no built-in way to show the full text on hover or through tooltips.
- Only predefined style variants are available. Custom colors, borders, or backgrounds can't be applied to chips.
- Icons in chips must come from the standard icon library. Custom icons, images, or other graphics aren't supported.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the chip component.',
      type: 'Chip',
    },
    {
      title: 'Slots',
      description:
        'The chip component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
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
