import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Progress',
  description: 'Use to visually represent the completion of a task or process.',
  requires: '',
  isVisualComponent: true,
  thumbnail: 'progress-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'ProgressProps',
      description: '',
      type: 'ProgressProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'progress-indeterminate-state.gif',
    codeblock: {
      title: 'Indeterminate state',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Progress/examples/basic-progress.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-progress.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
Use appearance property like "critical" to convey urgency accompanied by an error message or a banner if further action is required.

For users who may have turned on the "reduced motion settings", it's important to convey the function of the progress. This can be achieved by incorporating a helperText and setting a bar to a specific value, which signifies that loading is underway.

Use components like TextBlock or Text, along with the Progress component, to display text indicating the status of the progress bar, especially during a loading state, to prevent confusion about the bar appearing frozen.

Here are some examples of how to use this component:
Use a progress bar to show the customer's progress toward the next rewards tier.
Use a progress to show the progress for a buyer reward status

Use a progress to show how much a buyer needs to reach free shipping
      `,
    },
  ],
  examples: {
    description: '',
    examples: [
      getExample('ui-components/progress-determinate-state', ['jsx', 'js']),
    ],
  },
  related: [
    {
      name: 'Spinner',
      subtitle: 'Component',
      url: 'spinner',
      type: 'Component',
    },
  ],
};

export default data;
