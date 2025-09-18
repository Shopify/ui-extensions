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
  subSections: [],
};

export default data;
