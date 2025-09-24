import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/MoneyField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'money-field-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'MoneyFieldElementProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'MoneyFieldElementEvents',
    },
  ],
  defaultExample: {
    image: 'money-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-money-field.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
