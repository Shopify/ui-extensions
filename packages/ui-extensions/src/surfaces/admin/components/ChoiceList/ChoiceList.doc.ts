import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/ChoiceList';
import choiceSharedContent from '../../../../docs/shared/components/Choice';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/choicelist.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Choose appropriate selection modes:** Use single selection for mutually exclusive options like payment methods or shipping speeds. Enable \`multiple\` when merchants can select more than one.
- **Write clear, specific labels:** Use choice labels that describe the outcome, like **Email notifications for new orders** rather than just **Email**. Keep labels concise but descriptive enough that merchants understand each option without additional explanation.
- **Write clear titles:** Use titles that pose a clear question or statement, like **Which shipping method?** or **Select notification preferences**. Avoid vague titles like **Options** or **Settings**.
- **Add context to complex choices:** Use the \`details\` slot on individual choices (for example, \`<s-text slot="details">\`) to explain implications when needed.
- **Provide actionable validation:** Show specific error messages like **Please select at least one notification preference** rather than generic **Required field**.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The component doesn't include search, filtering, or lazy loading. For large option sets (20+ choices), consider using a [\`Select\`](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/select) dropdown instead.
- Rendering 50+ checkboxes or radio buttons can cause noticeable performance issues, especially on mobile devices. Consider pagination, virtualization, or alternative UI patterns for large lists.
- The component is either single-selection (radio buttons) or multiple-selection (checkboxes) for all choices. You can't mix both types in the same list.
- Component types other than \`Choice\` can't be used as options within the choice list.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `ChoiceList` component.',
      type: 'ChoiceList',
    },
    {
      title: 'Events',
      description:
        'The `ChoiceList` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ChoiceListEvents',
    },
    {
      title: choiceSharedContent.name,
      description: choiceSharedContent.description,
      type: 'Choice',
    },
    {
      title: 'Slots',
      description:
        'The `ChoiceList` component supports slots for additional content placement within each choice. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'ChoiceSlots',
    },
  ],
  defaultExample: {
    image: 'choicelist-default.png',
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
              'Demonstrates a basic ChoiceList with single selection, showing how to create a group of radio button choices.',
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
              'Illustrates a ChoiceList with multiple selection enabled, allowing merchants to choose multiple options with additional descriptive details for each choice.',
            codeblock: {
              title: 'Multiple selections',
              tabs: [
                {
                  code: './examples/multiple-selections.html',
                  language: 'html',
                },

                {
                  code: './examples/multiple-selections.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Shows how to display an error message in a ChoiceList when an invalid selection is made or a validation constraint is not met.',
            codeblock: {
              title: 'With error state',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'html',
                },

                {
                  code: './examples/with-error-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Showcases a multiple-selection ChoiceList with each option including detailed information.',
            codeblock: {
              title: 'Multiple choices with details',
              tabs: [
                {
                  code: './examples/multiple-choices-with-details.html',
                  language: 'html',
                },

                {
                  code: './examples/multiple-choices-with-details.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Form validation',
        examples: [
          {
            description:
              'Interactive example showing required choice validation with dynamic error messages.',
            codeblock: {
              title: 'Choice list validation',
              tabs: [
                {
                  code: './examples/validation-example.jsx',
                  language: 'preview-jsx',
                  layout: 'formWrapper',
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
