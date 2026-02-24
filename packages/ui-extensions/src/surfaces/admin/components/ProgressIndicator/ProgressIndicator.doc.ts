import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ProgressIndicator',
  description:
    'The ProgressIndicator component displays an animated spinner to communicate that content is loading or an action is being processed. Use ProgressIndicator to provide visual feedback during asynchronous operations like data fetching, form submission, or background processing.\n\nProgressIndicator supports a range of sizes from compact inline indicators to larger full-section spinners, so it can be placed alongside other components or used as a standalone loading state.',
  requires: '',
  thumbnail: 'progressindicator-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the ProgressIndicator component.',
      type: 'ProgressIndicatorProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Feedback and status indicators',
  defaultExample: {
    image: 'progressindicator-default.png',
    description:
      'Show a loading indicator while querying product data from the [GraphQL Admin API](/docs/api/admin-graphql/), then replace it with the results. This example uses `ProgressIndicator` with `size` and `accessibilityLabel` props during the query, then displays the product title and inventory count.',
    codeblock: {
      title: 'Show loading during API query',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ProgressIndicator/examples/basic-progressindicator.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-progressindicator.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Show a prominent loading indicator while a sync is in progress inside an [action modal](/docs/api/admin-extensions/{API_VERSION}/components/settings-and-templates/adminaction). This example pairs a `base`-sized indicator with a status message and a cancel [Button](/docs/api/admin-extensions/{API_VERSION}/components/actions/button), keeping merchants informed and in control.',
        codeblock: {
          title: 'Display sync progress in action modal',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ProgressIndicator/examples/progressindicator-sizes.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/progressindicator-sizes.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Place a compact `small-300` spinner inline with status text using `tone="inherit"` to match the surrounding text color. This example renders the indicator alongside a description inside an [InlineStack](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/inlinestack), creating a subtle loading cue.',
        codeblock: {
          title: 'Add inline loading indicator',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ProgressIndicator/examples/progressindicator-inline.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/progressindicator-inline.example.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Match the size to the context:** Use smaller sizes for inline indicators next to buttons or fields, and larger sizes for full-section or full-page loading states.
- **Show spinners only when needed:** Display the ProgressIndicator only while an operation is in progress. Remove it immediately when loading completes or an error occurs. Avoid leaving a spinner visible indefinitely.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- ProgressIndicator supports only the \`spinner\` variant. There is no progress bar or determinate progress indicator available.
- ProgressIndicator doesn't communicate progress percentage or estimated time remaining. For operations where progress can be measured, consider pairing the spinner with a text description of the current status.
- The spinner animation can't be paused or customized. It always displays the same continuous rotation animation.`,
    },
  ],
  related: [],
};

export default data;
