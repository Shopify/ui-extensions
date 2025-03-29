import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  category: 'Experimental Components',
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
          language: 'html',
        },
        {
          title: 'HTML',
          code: './examples/default.html', // This gets updated in build-ab-docs.sh
          language: 'preview', // Do not edit. This is required for Live Previews
        },
      ],
    },
  },

  related: [],
};

export default data;
