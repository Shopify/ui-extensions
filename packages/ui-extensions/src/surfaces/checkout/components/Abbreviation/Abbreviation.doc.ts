import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Abbreviation';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'abbreviation-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'AbbreviationProps',
    },
  ],
  defaultExample: {
    image: 'abbreviation-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-abbreviation.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [],
};

export default data;
