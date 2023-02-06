import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Pressable',
  description:
    'Pressable is a generic interactive component. It shares the same styling properties as View but also adds pressable behavior, meaning that you can execute some logic in response to user interaction. Use this component for creating interactive elements without the default styling that comes with `Button` and `Link`.',
  requires: '',
  thumbnail: 'pressable-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'PressableProps',
      description: '',
      type: 'PressableProps',
    },
  ],
  category: 'Components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'pressable-default.png',
    codeblock: {
      title: 'Basic Pressable',
      tabs: [
        {
          title: 'React',
          code: '../../../../checkout-ui-extensions-react/src/components/Pressable/examples/basic-pressable.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-pressable.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [],
};

export default data;
