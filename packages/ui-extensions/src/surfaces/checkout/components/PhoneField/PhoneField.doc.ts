import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/PhoneField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'phonefield-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'PhoneFieldBaseProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'PhoneFieldElementEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'PhoneFieldElementSlots',
    },
  ],
  defaultExample: {
    image: 'phonefield-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-phonefield.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
