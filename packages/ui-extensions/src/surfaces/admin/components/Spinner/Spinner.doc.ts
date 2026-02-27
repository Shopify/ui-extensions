import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Spinner';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/spinner.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Show for asynchronous operations:** Display spinners when loading takes longer than 500ms for operations like saving forms, fetching data, or processing actions. For instant actions, spinners might flash distractingly.
- **Scope to specific areas:** Place spinners within the component being loaded (like inside a button during save, or in a section during data fetch) rather than blocking the entire interface.
- **Provide context with labels:** Always include \`accessibilityLabel\` describing what's loading, like **Loading products**, **Saving changes**, or **Processing payment**. This helps screen reader users understand what's happening.
- **Pair with action feedback:** After a spinner completes, show clear success or error messages so merchants know the operation finished and its outcome.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The component shows indeterminate loading only. It can't display progress percentage or time remaining. For operations with known duration or measurable progress, consider using a progress bar component or custom solution.
- The component continues spinning indefinitely until you remove it. It doesn't automatically stop after a timeout or show error states. You must implement timeout logic and error handling yourself.
- Rendering many spinners simultaneously (like in a table with 50+ rows each showing a spinner) can cause performance issues, especially on older mobile devices.
- The component itself doesn't provide a way to cancel the loading operation. If merchants need to cancel, you must implement separate UI controls like a **Cancel** [button](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/button) alongside the spinner.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the spinner component.',
      type: 'Spinner',
    },
  ],
  defaultExample: {
    image: 'spinner-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'Standard loading spinner with accessibility label for screen readers.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Centered loading indicator with text in a section layout for content loading states.',
            codeblock: {
              title: 'Loading state in section',
              tabs: [
                {
                  code: './examples/loading-state-in-section.html',
                  language: 'html',
                },

                {
                  code: './examples/loading-state-in-section.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Compact inline loading indicator for form submissions and quick actions.',
            codeblock: {
              title: 'Inline loading with text',
              tabs: [
                {
                  code: './examples/inline-loading-with-text.html',
                  language: 'html',
                },

                {
                  code: './examples/inline-loading-with-text.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
