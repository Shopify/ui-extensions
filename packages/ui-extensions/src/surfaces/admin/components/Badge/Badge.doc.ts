import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Badge',
  description: 'Badge is used to ...',
  requires: '',
  thumbnail: 'badge-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Badge',
      description:
        'Use this component to inform merchants of the status of an object or of an action that’s been taken.',
      type: 'Badge',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'badge-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'JS',
          code: './examples/basic-badge.example.ts',
          language: 'js',
        },
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Badge/examples/basic-badge.example.tsx',
          language: 'tsx',
        },
      ],
    },
  },

  related: [],
};

export default data;
