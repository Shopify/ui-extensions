import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Spinner',
  description:
    'Use spinners to let merchants know that content is being loaded. For loading states on buttons, use the loading prop on the Button component instead.',
  requires: '',
  thumbnail: 'spinner-thumbnail.png',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Spinner',
      description: 'A loading indicator component.',
      type: 'SpinnerProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'spinner-default.png',
    codeblock: {
      title: 'Basic Spinner example',
      tabs: [
        {
          title: 'Peact',
          code: './examples/basic-spinner.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-spinner.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      type: 'component',
      name: 'Button',
      url: '/docs/api/admin-extensions/components/actions/button',
    },
  ],
};

export default data;
