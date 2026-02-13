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
    codeblock: {
      title: 'Simple spinner example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ProgressIndicator/examples/basic-ProgressIndicator.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-ProgressIndicator.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Choose an appropriate size:** Use smaller sizes (\`small-100\`, \`small-200\`) for inline indicators next to buttons or fields. Use larger sizes (\`large-100\` and above) for full-section or full-page loading states.
- **Show spinners only when needed:** Display the ProgressIndicator only while an operation is in progress. Remove it immediately when loading completes or an error occurs. Avoid leaving a spinner visible indefinitely.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- ProgressIndicator only supports the \`spinner\` variant. There is no progress bar or determinate progress indicator available.
- ProgressIndicator doesn't communicate progress percentage or estimated time remaining. For operations where progress can be measured, consider pairing the spinner with a text description of the current status.
- The spinner animation can't be paused or customized. It always displays the same continuous rotation animation.`,
    },
  ],
  related: [],
};

export default data;
