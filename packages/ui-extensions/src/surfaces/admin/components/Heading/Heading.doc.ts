import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Heading',
  description:
    "Use this to display a title. It's similar to the h1-h6 tags in HTML",
  requires: '',
  thumbnail: 'heading-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'HeadingProps',
      description: '',
      type: 'HeadingProps',
    },
  ],
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'heading-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Heading/examples/basic-Heading.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Heading.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
