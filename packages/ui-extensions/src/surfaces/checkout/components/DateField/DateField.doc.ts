import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/DateField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'date-field-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'DateFieldElementProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'DateFieldElementEvents',
    },
  ],
  defaultExample: {
    image: 'date-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-date-field.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
