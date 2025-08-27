import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/PressButton';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'press-button-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'PressButtonElementProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'PressButtonElementEvents',
    },
  ],
  defaultExample: {
    image: 'press-button-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-press-button.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
