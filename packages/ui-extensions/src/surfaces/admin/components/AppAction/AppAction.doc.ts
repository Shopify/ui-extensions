import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AppAction',
  description: 'AppAction is used to ...',
  requires: '',
  thumbnail: 'appaction-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'AppActionProps',
      description: '',
      type: 'AppActionProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'appaction-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AppAction/examples/AppAction.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/AppAction.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [],
};

export default data;
