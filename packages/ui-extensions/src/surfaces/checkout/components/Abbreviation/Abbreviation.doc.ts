import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Abbreviation',
  description:
    'A text that represents an abbreviation or acronym. Abbreviation has an inline layout. Surfaces may apply styling to this component.',
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
  category: 'Components',
  subCategory: 'Titles and text',
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
