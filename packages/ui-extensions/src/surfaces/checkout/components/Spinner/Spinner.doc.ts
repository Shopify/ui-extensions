import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Spinner';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  thumbnail: 'spinner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'SpinnerProps',
    },
  ],
  defaultExample: {
    image: 'spinner-default.gif',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-spinner.example.html',
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
          'Display a large spinner with descriptive text while an operation completes. This example uses the `size` and `accessibilityLabel` properties and pairs the spinner with visible text to communicate the loading state.',
        codeblock: {
          title: 'Display a loading spinner with descriptive text',
          tabs: [
            {
              code: './examples/spinner-with-text.example.html',
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
