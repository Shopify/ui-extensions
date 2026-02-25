import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Spinner',
  description:
    'The spinner component indicates ongoing processes or loading states. Use it to provide visual feedback when content is loading or an operation is in progress, helping users understand that the system is working.',
  thumbnail: 'spinner-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the spinner component.',
      type: 'Spinner',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Feedback and status indicators',
  defaultExample: {
    image: 'spinner-default.png',
    description:
      'Display loading states using a spinner component. This example shows a basic spinner that indicates an ongoing process.',
    codeblock: {
      title: 'Show loading state with a spinner',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Use for asynchronous operations:** Display spinners during data fetching, form submission, or any operation that requires waiting time.
- **Provide accessibility labels:** Always use \`accessibilityLabel\` to describe what is loading, helping screen reader users understand the context.
- **Position strategically:** Place spinners where content will appear, or center them in the loading area to provide clear visual feedback.
- **Don't overuse:** Avoid multiple spinners on the same screen. Use a single spinner to represent the overall loading state when possible.
- **Consider alternatives for long waits:** For operations taking more than a few seconds, consider using status messages instead.
`,
    },
  ],
  related: [],
};

export default data;
