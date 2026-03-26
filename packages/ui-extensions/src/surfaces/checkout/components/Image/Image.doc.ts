import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Image';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  extraExamples: {
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
  bestPractices: `
- Use high-resolution images to ensure a professional and high-quality experience.
- Use optimized images so your app loads as fast as possible.
- Use images intentionally, these should add clarity and lead users to the next step.`,
});

export default data;
