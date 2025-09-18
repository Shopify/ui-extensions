import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'PosBlock',
  description:
    'Use `s-pos-block` to create a surface on the specified block extension target, serving as a container to place content with an action button.',
  thumbnail: 'pos-block-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'PosBlock',
    },
    {
      title: 'Slots',
      description: '',
      type: 'PosBlockSlots',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'pos-block-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  related: [],
};

export default data;
