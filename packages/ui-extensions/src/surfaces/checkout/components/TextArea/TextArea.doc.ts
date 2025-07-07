import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/TextArea';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'textarea-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TextAreaElementProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'TextAreaElementEvents',
    },
  ],
  defaultExample: {
    image: 'textarea-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-textarea.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
