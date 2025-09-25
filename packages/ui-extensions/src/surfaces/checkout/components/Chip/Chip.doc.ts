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
      description: '',
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
  subSections: [],
};

export default data;
