import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Progress';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  isVisualComponent: true,
  thumbnail: 'progress-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ProgressProps',
    },
  ],
  defaultExample: {
    image: 'progress-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-progress.example.html',
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
          'Track a spending goal with a labeled progress bar. This example uses the `max` and `value` properties alongside `accessibilityLabel` to show how close a buyer is to qualifying for free shipping.',
        codeblock: {
          title: 'Track progress toward free shipping',
          tabs: [
            {
              code: './examples/progress-free-shipping.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
Use components like [Paragraph](../titles-and-text/paragraph) or [Text](../titles-and-text/text), along with the Progress component, to display text indicating the status of the progress bar.

### Loading states

For loading states, add text to reassure the user that the progress bar is not frozen.

![A progress bar with "Loading" text](/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/progress-loading.png)

### Error states

For error states, add text or a [Banner](./banner) to describe the error and next steps. Use the \`critical\` tone property to convey urgency.

![A progress bar with error text that says "There was a problem with the file upload. Please try again."](/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/progress-error.png)

### Visualize a goal

Use the Progress component to visualize a goal that's valuable to the customer.

Here's an example of using a progress bar to show a customer's progress toward the next rewards tier:

![A progress bar in customer accounts, showing that the customer is on their way to reaching the Botanical maven rewards tier.](/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/progress-goal.png)

Here's an example of using a progress bar to show how much more a customer needs to spend to get free shipping:

![A progress bar at checkout, showing that the customer is $43 away from free shipping.](/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/progress-free-shipping.png)
      `,
    },
  ],
};

export default data;
