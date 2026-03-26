import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Image';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'image-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ImageProps',
    },
  ],
  defaultExample: {
    image: 'image-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-image.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Display a banner-style image with controlled proportions. This example uses `aspectRatio` and `objectFit="cover"` to crop the image, `inlineSize="fill"` to span the container, and `loading="lazy"` for below-the-fold performance.',
        codeblock: {
          title: 'Display a banner image with aspect ratio and cover fit',
          tabs: [
            {
              code: './examples/image-banner.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic',
      anchorLink: 'best-practices',
      sectionContent: `
- Use high-resolution images to ensure a professional and high-quality experience.
- Use optimized images so your app loads as fast as possible.
- Use images intentionally, these should add clarity and lead users to the next step.`,
    },
  ],
};

export default data;
