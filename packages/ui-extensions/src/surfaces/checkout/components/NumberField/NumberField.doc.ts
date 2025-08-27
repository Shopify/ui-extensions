import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/NumberField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'number-field-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'NumberFieldElementProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'NumberFieldElementEvents',
    },
  ],
  defaultExample: {
    image: 'number-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-number-field.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
