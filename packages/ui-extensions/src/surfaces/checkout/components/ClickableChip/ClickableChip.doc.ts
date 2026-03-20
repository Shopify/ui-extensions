import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ClickableChip';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'clickable-chip-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ClickableChipElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'ClickableChipElementEvents',
    },
    {
      title: 'Slots',
      description:
        'Learn more about [component slots](/docs/api/checkout-ui-extensions/latest/using-polaris-components#slots).',
      type: 'ClickableChipElementSlots',
    },
  ],
  defaultExample: {
    image: 'clickable-chip-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-clickable-chip.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Add a visual indicator alongside the chip label using the `graphic` slot with `s-icon`. This example shows a chip with a discount icon that links to a sale collection.',
        codeblock: {
          title: 'Add an icon and link to a chip',
          tabs: [
            {
              code: './examples/clickable-chip-icon.example.html',
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
