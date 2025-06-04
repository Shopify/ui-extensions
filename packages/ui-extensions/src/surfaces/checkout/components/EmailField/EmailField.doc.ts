import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/EmailField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'emailfield-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'EmailFieldBaseProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'EmailFieldElementEvents',
    },
  ],
  defaultExample: {
    image: 'emailfield-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-emailfield.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
