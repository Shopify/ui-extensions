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
      sectionContent: `- Include a title that tells merchants what to do or explains the available options
- Label options clearly based on what the option will do
- Avoid mutually exclusive options when allowing multiple selection`,
    },
    {
      title: 'Content guidelines',
      type: 'Generic' as const,
      anchorLink: 'content-guidelines',
      sectionContent: `- Write titles and choices in sentence case
- End titles with a colon if they introduce the list
- Start each choice with a capital letter
- Don't use commas or semicolons at the end of lines`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ChoiceList',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ChoiceListEvents',
    },
    {
      title: choiceSharedContent.name,
      description: choiceSharedContent.description,
      type: 'Choice',
    },
    {
      title: 'Slots',
      description: '',
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
              'Illustrates a ChoiceList with multiple selection enabled, allowing users to choose multiple options with additional descriptive details for each choice.',
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
              'Shows a ChoiceList in a disabled state, preventing any user interaction. Use when selections should be visible but not editable.',
            codeblock: {
              title: 'Disabled state',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'html',
                },

                {
                  code: './examples/disabled-state.jsx',
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
