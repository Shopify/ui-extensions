import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/SkeletonParagraph';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'skeleton-paragraph-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'SkeletonParagraphProps',
    },
  ],
  defaultExample: {
    image: 'skeleton-paragraph-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-skeleton-paragraph.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description:
      'Examples of additional ways to use the SkeletonParagraph component.',
    examples: [
      {
        description:
          "Set the `content` prop to hidden placeholder text that drives the skeleton's block size. The content stays invisible until real data loads.",
        codeblock: {
          title: 'Size a skeleton to match final copy length',
          tabs: [
            {
              code: './examples/skeleton-paragraph-sized.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [],
};

export default data;
