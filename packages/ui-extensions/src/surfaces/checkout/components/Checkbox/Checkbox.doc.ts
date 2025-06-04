import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Checkbox';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'checkbox-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'CheckboxProps',
    },
  ],
  defaultExample: {
    image: 'checkbox-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-checkbox.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
