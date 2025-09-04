import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ScrollBox',
  description:
    'Use `s-scroll-box` to create scrollable content areas with fixed dimensions. Provides controlled scrolling behavior for content that exceeds container bounds.',
  thumbnail: 'scroll-box-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ScrollBox',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'scroll-box-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'HTML',
        },
      ],
    },
  },
  related: [],
};

export default data;
