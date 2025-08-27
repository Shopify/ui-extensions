import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/URLField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'url-field-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'UrlFieldElementProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'UrlFieldElementEvents',
    },
  ],
  defaultExample: {
    image: 'url-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-url-field.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
