import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'SkeletonText',
  description:
    'SkeletonText is used to provide a low fidelity representation of text content before it appears on the page. \n\nOptionally you can use any text content inside `SkeletonText` to be used as a base for the rendered skeleton',
  requires: '',
  isVisualComponent: true,
  thumbnail: 'skeletontext-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'SkeletonTextProps',
      description: '',
      type: 'SkeletonTextProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  examples: {
    description: '',
    examples: [
      {
        description:
          'When adding content to a layout, incorporate a skeleton loader that renders the approximate size and position of the content during loading. This will provide a seamless transition from skeleton loaders to the content, and prevent any layout shift when the resulting content loads.',
        image: 'loading-skeletons.gif',
        codeblock: {
          tabs: [
            {
              title: 'React',
              code: '../../../docs/reference/examples/ui-components/loading-skeletons.example.tsx',
              language: 'typescript',
            },
            {
              title: 'JS',
              code: '../../../docs/reference/examples/ui-components/loading-skeletons.example.ts',
              language: 'javascript',
            },
          ],
          title:
            'Using skeleton loaders to prevent layout shifts on content load.',
        },
      },
    ],
  },
  defaultExample: {
    image: 'skeletontext-default.png',
    codeblock: {
      title: 'Basic SkeletonText',
      tabs: [
        {
          title: 'React',
          code: '../../../../checkout-ui-extensions-react/src/components/SkeletonText/examples/basic-skeletontext.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-skeletontext.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [],
};

export default data;
