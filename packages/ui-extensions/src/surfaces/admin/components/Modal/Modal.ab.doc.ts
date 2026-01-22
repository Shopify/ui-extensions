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
- Have concise and descriptive title and button text
- Use thoughtfully and sparingly—don't create unnecessary interruptions
- Use as a last resort for important decisions, not for contextual tools or actions that could happen on the page directly`,
    },
    {
      title: 'Content guidelines',
      type: 'Generic' as const,
      anchorLink: 'content-guidelines',
      sectionContent: `- Use 1-3 word titles in sentence case without punctuation
- Keep body content to 1-2 short sentences
- For destructive actions, explain the consequences
- Use clear action verbs for buttons (e.g., "Delete", "Edit") instead of vague language like "Yes" or "OK"`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Modal',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'ModalEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ModalSlots',
    },
  ],
  defaultExample: {
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
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
              'Simple modal with heading and basic content for displaying information. Click the button to open the modal.',
            codeblock: {
              title: 'Basic modal',
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
              'Modal with primary and secondary action buttons. Click the button to open the confirmation modal.',
            codeblock: {
              title: 'Modal with actions',
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
              'Modal containing form fields demonstrating how to structure input fields within a modal. Click the button to open the modal.',
            codeblock: {
              title: 'Modal with form fields',
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
              'Demonstrates various modal sizes for different content requirements. Click each button to see different modal sizes.',
            codeblock: {
              title: 'Different modal sizes',
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
              'Modal with no padding for full-width content. Click to view the modal.',
            codeblock: {
              title: 'Modal without padding',
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
    ],
  },
};

export default data;
