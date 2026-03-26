import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/SkeletonParagraph';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  extraExamples: {
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
});

export default data;
