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
      description: '',
      type: 'ClickableChipElementEvents',
    },
    {
      title: 'Slots',
      description: '',
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
  subSections: [],
};

export default data;
