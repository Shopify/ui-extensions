import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Abbreviation';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'abbreviation-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'AbbreviationProps',
    },
  ],
  defaultExample: {
    image: 'abbreviation-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-abbreviation.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description:
      'Examples of additional ways to use the Abbreviation component.',
    examples: [
      {
        description:
          'Use `title` so screen readers announce the full phrase behind the abbreviation. This example expands a common shipping term that buyers might not recognize.',
        codeblock: {
          title: 'Expand a shipping acronym for screen readers',
          tabs: [
            {
              code: './examples/abbreviation-shipping.example.html',
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
