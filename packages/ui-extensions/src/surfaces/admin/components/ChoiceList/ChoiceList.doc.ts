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
  examples: {
    description: 'Component examples',
    examples: [
      {
        description:
          'Present a group of options for merchants to choose from using radio buttons. This example shows a single-select choice list component with a label, help text, and an `onChange` handler.',
        image: 'choicelist-default.png',
        codeblock: {
          title: 'Add a single-select choice list',
          tabs: [
            {
              code: './examples/default.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description:
          'Set a default selection so merchants see a pre-selected option when the form loads. This example shows a single-select choice list with one option already selected.',
        codeblock: {
          title: 'Pre-select a default option',
          tabs: [
            {
              code: './examples/basic-usage.html',
              language: 'html',
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
              language: 'html',
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
              language: 'html',
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
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
