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
        'Configure the following properties on the `Modal` component.',
      type: 'Modal',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/polaris/using-polaris-web-components#event-handling).',
      type: 'ModalEvents',
    },
    {
      title: 'Slots',
      description:
        'Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'ModalSlots',
    },
  ],
  defaultExample: {
    description:
      'Confirm a merchant action with a modal dialog. Click to interact with the preview.',
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
        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
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
        title: 'Basic usage',
        examples: [
          {
            description:
              'Show information in a modal with a heading and basic content. Click to interact with the preview.',
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
                {
                  code: './examples/basic-modal.jsx',
                  language: 'preview-jsx',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Confirm an action with primary and secondary buttons. Click to interact with the preview.',
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
                {
                  code: './examples/confirmation-modal-with-actions.jsx',
                  language: 'preview-jsx',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Collect input with form fields inside a modal. Click to interact with the preview.',
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
                {
                  code: './examples/form-modal.jsx',
                  language: 'preview-jsx',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Choose from different modal sizes for various content requirements. Click to interact with the preview.',
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
                {
                  code: './examples/different-modal-sizes.jsx',
                  language: 'preview-jsx',
                  customStyles: {
                    minHeight: '300px',
                  },
                },
              ],
            },
          },
          {
            description:
              'Display full-width content by removing modal padding. Click to interact with the preview.',
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
                {
                  code: './examples/modal-without-padding.jsx',
                  language: 'preview-jsx',
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
        title: 'Complete workflows',
        examples: [
          {
            description:
              'Handle a destructive action with async confirmation, loading state, and error handling. Click to interact with the preview.',
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
                {
                  code: './examples/delete-with-async-handling.jsx',
                  language: 'preview-jsx',
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
