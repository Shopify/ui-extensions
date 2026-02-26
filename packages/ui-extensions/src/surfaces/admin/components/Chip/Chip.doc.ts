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
    description:
      'Create a chip with a text label to categorize or tag content. This example shows the basic chip component with default styling.',
    codeblock: {
      title: 'Add a basic chip',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Use color variants to control the visual emphasis of chips. This example shows `subdued` chips for secondary metadata, `base` chips for standard tags, and `strong` chips for important information.',
            codeblock: {
              title: 'Set visual weight with color variants',
              tabs: [
                {
                  code: './examples/color-variants.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Combine an icon with a text label to make chip meanings clearer. This example shows a chip with an icon in the graphic slot to visually reinforce the category.',
            codeblock: {
              title: 'Add an icon to reinforce meaning',
              tabs: [
                {
                  code: './examples/with-icon-graphic.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Display chips with long labels in constrained spaces. This example shows how chip text automatically truncates with an ellipsis when the content exceeds the container width.',
            codeblock: {
              title: 'Handle long text with truncation',
              tabs: [
                {
                  code: './examples/text-truncation.html',
                  language: 'preview',
                  title: '',
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
