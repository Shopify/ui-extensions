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
      type: 'Spinner',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'spinner-default.png',
    codeblock: {
      title: 'Default Example',
      tabs: [
        {
          title: 'JSX',
          code: './examples/default.html',
          language: 'jsx',
        },
        {
          title: 'HTML',
          code: './examples/default.html',
          language: 'preview',
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
