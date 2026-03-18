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
      sectionContent: `- The component doesn't include search, filtering, or lazy loading. For large option sets (20+ choices), consider using a [select](/docs/api/{API_NAME}/{API_VERSION}/web-components/forms/select) dropdown instead.
- Rendering 50+ checkboxes or radio buttons can cause noticeable performance issues, especially on mobile devices. Consider pagination, virtualization, or alternative UI patterns for large lists.
- The component is either single-selection (radio buttons) or multiple-selection (checkboxes) for all choices. You can't mix both types in the same list.
- Component types other than choice can't be used as options within the choice list.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the choice list component.',
      type: 'ChoiceList',
    },
    {
      title: 'Events',
      description:
        'The choice list component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-web-components#handling-events).',
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
        'The choice list component supports slots for additional content placement within each choice. Learn more about [using slots](/docs/api/app-ui/using-web-components#slots).',
      type: 'ChoiceSlots',
    },
  ],
  defaultExample: {
    image: 'choicelist-default.png',
    description:
      'Present a group of options for merchants to choose from using radio buttons. This example shows a single-select choice list component with a label, help text, and an `onChange` handler.',
    codeblock: {
      title: 'Add a single-select choice list',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Set a default selection so merchants see a pre-selected option when the form loads. This example shows a single-select choice list with one option already selected.',
            codeblock: {
              title: 'Pre-select a default option',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Allow merchants to select more than one option using checkboxes instead of radio buttons. This example shows a multi-select choice list with descriptive details on each option.',
            codeblock: {
              title: 'Enable multiple selections with details',
              tabs: [
                {
                  code: './examples/multiple-selections.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Display an error message when a selection is invalid or a required choice has not been made. This example shows a choice list with a static error message.',
            codeblock: {
              title: 'Show a validation error',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Disable a choice list to prevent interaction while keeping the current selection visible. This example shows a disabled choice list with a pre-selected option.',
            codeblock: {
              title: 'Disable a choice list',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'preview',
                  title: '',
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
