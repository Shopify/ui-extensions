import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Chip';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'chip-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ChipElementProps',
    },
    {
      title: 'Slots',
      description:
        'Learn more about [component slots](/docs/api/checkout-ui-extensions/latest/using-polaris-components#slots).',
      type: 'ChipElementSlots',
    },
  ],
  defaultExample: {
    image: 'chip-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-chip.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description: 'Examples of additional ways to use the Chip component.',
    examples: [
      {
        description:
          'Use the `graphic` slot with `s-icon` and `accessibilityLabel` for chips whose text alone doesn\'t convey the full meaning. The API restricts the `graphic` slot to icon elements.',
        codeblock: {
          title: 'Add an icon and a screen-reader label to a chip',
          tabs: [
            {
              code: './examples/chip-icon.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [],
};

export default data;
