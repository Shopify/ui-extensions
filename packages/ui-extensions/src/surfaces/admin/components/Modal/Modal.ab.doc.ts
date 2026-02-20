import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Modal';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/modal.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Usage',
      type: 'Generic' as const,
      anchorLink: 'usage',
      sectionContent: `Modals are closed by default and should be triggered by a button using the \`commandFor\` attribute. The button's \`commandFor\` value should match the modal's \`id\`.`,
    },
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Focusing on a specific task or piece of information
- Completing a flow that needs dedicated attention
- Confirming a significant action before proceeding
- Viewing information that's only temporarily relevant`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use for focused, specific tasks that require merchants to make a decision or acknowledge critical information
- Include a prominent and clear call to action
- Don't nest modals (avoid launching one modal from another)
- Use specific action verbs: Label buttons with clear verbs like "Delete", "Save", or "Continue" rather than vague terms like "Yes", "OK", or "Submit"
- For destructive actions, explain the consequences in the modal body
- Use thoughtfully and sparingly—don't create unnecessary interruptions
- Use as a last resort for important decisions, not for contextual tools or actions that could happen on the page directly`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Modals can only be opened by user interaction, not programmatically on page load
- The modal always renders centered in the viewport and cannot be repositioned
- Content within the modal scrolls if it exceeds the available height`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the modal component.',
      type: 'Modal',
    },
    {
      title: 'Events',
      description:
        'The modal component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ModalEvents',
    },
    {
      title: 'Slots',
      description:
        'The modal component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'ModalSlots',
    },
  ],
  defaultExample: {
    description:
      'Focus merchant attention on a critical decision before proceeding. This example shows a delete confirmation with cancel and confirm buttons.',
    codeblock: {
      title: 'Confirm a merchant action',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          customStyles: {
            minHeight: '300px',
          },
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
              'Present information that needs merchant acknowledgment. This example shows a simple announcement with a heading and body text.',
            codeblock: {
              title: 'Show information in a modal',
              tabs: [
                {
                  code: './examples/basic-modal.html',
                  language: 'preview',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Provide clear choices with action buttons in the modal footer. This example shows primary and secondary buttons for confirming or canceling.',
            codeblock: {
              title: 'Confirm an action with buttons',
              tabs: [
                {
                  code: './examples/confirmation-modal-with-actions.html',
                  language: 'preview',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Gather information without leaving the current context. This example shows a feedback form with text inputs and a submit button.',
            codeblock: {
              title: 'Collect input with a form',
              tabs: [
                {
                  code: './examples/form-modal.html',
                  language: 'preview',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Adjust modal width to match your content needs. This example shows small, base, and large size variations.',
            codeblock: {
              title: 'Choose modal size',
              tabs: [
                {
                  code: './examples/different-modal-sizes.html',
                  language: 'preview',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Display media or tables that need edge-to-edge space. This example shows the padding property set to false for full-width content.',
            codeblock: {
              title: 'Display full-width content',
              tabs: [
                {
                  code: './examples/modal-without-padding.html',
                  language: 'preview',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Complete workflow',
        examples: [
          {
            description:
              'Safely handle destructive operations with proper feedback. This example shows loading states, error handling, and async confirmation.',
            codeblock: {
              title: 'Delete with async handling',
              tabs: [
                {
                  code: './examples/delete-with-async-handling.html',
                  language: 'preview',
                  customStyles: {
                    minHeight: '300px',
                  },
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
