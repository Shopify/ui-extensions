import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample} from '../../helper.docs';

const loadingSkeletons = getExample('ui-components/loading-skeletons', [
  'jsx',
  'js',
]);

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
  category: 'UI components',
  subCategory: 'Typography and content',
  defaultExample: {
    image: 'skeletontext-default.png',
    codeblock: {
      title: 'Basic SkeletonText',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/customer-account/components/SkeletonText/examples/basic-skeletontext.example.tsx',
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
  examples: {
    description: '',
    examples: [loadingSkeletons],
  },
  related: [],
};

export default data;
