import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'HeadingGroup',
  description:
    'This groups headings together, much like the hgroup element in HTML.',
  requires: '',
  thumbnail: 'headinggroup-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'HeadingGroupProps',
      description: '',
      type: 'HeadingGroupProps',
    },
  ],
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'headinggroup-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/HeadingGroup/examples/basic-HeadingGroup.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-HeadingGroup.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
