import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Stack',
  description:
    "This structures layout elements along the vertical axis of the page. It's useful for vertical alignment.",
  requires: '',
  thumbnail: 'stack-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Stack',
      description: '',
      type: 'Stack',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'stack-default.png',
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

  related: [],
};

export default data;
