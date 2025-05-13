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
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-abbreviation.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [],
  related: [
    {
      name: 'Text',
      subtitle: 'Component',
      url: 'text',
      type: 'Component',
    },
    {
      name: 'Paragraph',
      subtitle: 'Component',
      url: 'paragraph',
      type: 'Component',
    },
    {
      name: 'Time',
      subtitle: 'Component',
      url: 'time',
      type: 'Component',
    },
  ],
};

export default data;
