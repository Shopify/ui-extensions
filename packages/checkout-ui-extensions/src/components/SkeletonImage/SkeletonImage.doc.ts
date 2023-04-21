import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'SkeletonImage',
  description:
    'SkeletonImage is used to provide a low fidelity representation of an image before it appears on the page.',
  requires: '',
  thumbnail: 'skeletonimage-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'SkeletonImageProps',
      description: '',
      type: 'SkeletonImageProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'skeletonimage-default.png',
    codeblock: {
      title: 'Basic SkeletonImage',
      tabs: [
        {
          title: 'React',
          code: '../../../../checkout-ui-extensions-react/src/components/SkeletonImage/examples/basic-skeletonimage.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-skeletonimage.example.ts',
          language: 'js',
        },
      ],
    },
  },
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
  related: [],
};

export default data;
